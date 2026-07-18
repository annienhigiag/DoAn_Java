package com.example.doan.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Base64;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class DatabaseBackupService {

    private final JdbcTemplate jdbcTemplate;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public DatabaseBackupService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public byte[] exportBackup() throws IOException {
        String databaseName = getCurrentDatabaseName();
        List<String> tableNames = getTableNames(databaseName);

        Map<String, Object> backup = new LinkedHashMap<>();
        backup.put("backupAt", LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        backup.put("database", databaseName);
        backup.put("tables", exportTables(tableNames));

        return objectMapper.writerWithDefaultPrettyPrinter().writeValueAsBytes(backup);
    }

    @Transactional
    public void restoreBackup(MultipartFile file) throws IOException {
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("Vui lòng chọn file backup JSON để khôi phục.");
        }

        Map<String, Object> backup = objectMapper.readValue(
                file.getInputStream(),
                new TypeReference<Map<String, Object>>() {}
        );

        Object tablesObject = backup.get("tables");
        if (!(tablesObject instanceof Map<?, ?> rawTables)) {
            throw new IllegalArgumentException("File backup không đúng định dạng. Không tìm thấy phần tables.");
        }

        Map<String, List<Map<String, Object>>> tables = normalizeTables(rawTables);
        if (tables.isEmpty()) {
            throw new IllegalArgumentException("File backup không có dữ liệu bảng để khôi phục.");
        }

        restoreTables(tables);
    }

    private Map<String, List<Map<String, Object>>> exportTables(List<String> tableNames) {
        Map<String, List<Map<String, Object>>> tables = new LinkedHashMap<>();

        for (String tableName : tableNames) {
            List<Map<String, Object>> rows = jdbcTemplate.queryForList("SELECT * FROM `" + tableName + "`");
            List<Map<String, Object>> safeRows = new ArrayList<>();

            for (Map<String, Object> row : rows) {
                Map<String, Object> safeRow = new LinkedHashMap<>();
                for (Map.Entry<String, Object> entry : row.entrySet()) {
                    safeRow.put(entry.getKey(), convertValueForJson(entry.getValue()));
                }
                safeRows.add(safeRow);
            }

            tables.put(tableName, safeRows);
        }

        return tables;
    }

    private void restoreTables(Map<String, List<Map<String, Object>>> tables) {
        jdbcTemplate.execute("SET FOREIGN_KEY_CHECKS = 0");
        try {
            for (String tableName : tables.keySet()) {
                jdbcTemplate.update("DELETE FROM `" + tableName + "`");
            }

            for (Map.Entry<String, List<Map<String, Object>>> tableEntry : tables.entrySet()) {
                String tableName = tableEntry.getKey();
                for (Map<String, Object> row : tableEntry.getValue()) {
                    insertRow(tableName, row);
                }
            }
        } finally {
            jdbcTemplate.execute("SET FOREIGN_KEY_CHECKS = 1");
        }
    }

    private void insertRow(String tableName, Map<String, Object> row) {
        if (row == null || row.isEmpty()) {
            return;
        }

        List<String> columns = new ArrayList<>(row.keySet());

        String columnSql = columns.stream()
                .map(column -> "`" + column + "`")
                .collect(Collectors.joining(", "));

        String valueSql = columns.stream()
                .map(column -> "?")
                .collect(Collectors.joining(", "));

        String sql = "INSERT INTO `" + tableName + "` (" + columnSql + ") VALUES (" + valueSql + ")";
        Object[] values = columns.stream().map(row::get).toArray();

        jdbcTemplate.update(sql, values);
    }

    private Map<String, List<Map<String, Object>>> normalizeTables(Map<?, ?> rawTables) {
        Map<String, List<Map<String, Object>>> tables = new LinkedHashMap<>();

        for (Map.Entry<?, ?> tableEntry : rawTables.entrySet()) {
            String tableName = String.valueOf(tableEntry.getKey());

            if (!isSafeSqlName(tableName)) {
                throw new IllegalArgumentException("Tên bảng không hợp lệ trong file backup: " + tableName);
            }

            Object rowsObject = tableEntry.getValue();
            if (!(rowsObject instanceof List<?> rawRows)) {
                throw new IllegalArgumentException("Dữ liệu bảng " + tableName + " không đúng định dạng.");
            }

            List<Map<String, Object>> rows = new ArrayList<>();

            for (Object rowObject : rawRows) {
                if (!(rowObject instanceof Map<?, ?> rawRow)) {
                    throw new IllegalArgumentException("Một dòng dữ liệu trong bảng " + tableName + " không đúng định dạng.");
                }

                Map<String, Object> row = new LinkedHashMap<>();

                for (Map.Entry<?, ?> columnEntry : rawRow.entrySet()) {
                    String columnName = String.valueOf(columnEntry.getKey());

                    if (!isSafeSqlName(columnName)) {
                        throw new IllegalArgumentException("Tên cột không hợp lệ trong file backup: " + columnName);
                    }

                    row.put(columnName, columnEntry.getValue());
                }

                rows.add(row);
            }

            tables.put(tableName, rows);
        }

        return tables;
    }

    private String getCurrentDatabaseName() {
        String databaseName = jdbcTemplate.queryForObject("SELECT DATABASE()", String.class);

        if (databaseName == null || databaseName.isBlank()) {
            throw new IllegalStateException("Không xác định được database hiện tại.");
        }

        return databaseName;
    }

    private List<String> getTableNames(String databaseName) {
        String sql = "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES "
                + "WHERE TABLE_SCHEMA = ? AND TABLE_TYPE = 'BASE TABLE' "
                + "ORDER BY CREATE_TIME, TABLE_NAME";

        return jdbcTemplate.queryForList(sql, String.class, databaseName);
    }

    private Object convertValueForJson(Object value) {
        if (value == null) {
            return null;
        }

        if (value instanceof Timestamp timestamp) {
            return timestamp.toLocalDateTime().toString().replace('T', ' ');
        }

        if (value instanceof Date date) {
            return date.toLocalDate().toString();
        }

        if (value instanceof Time time) {
            return time.toLocalTime().toString();
        }

        if (value instanceof BigDecimal) {
            return value;
        }

        if (value instanceof Number || value instanceof Boolean || value instanceof String) {
            return value;
        }

        if (value instanceof byte[] bytes) {
            return Base64.getEncoder().encodeToString(bytes);
        }

        return value.toString();
    }

    private boolean isSafeSqlName(String name) {
        return name != null && name.matches("[A-Za-z0-9_]+") && name.length() <= 64;
    }
}