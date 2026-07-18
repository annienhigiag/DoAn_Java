package com.example.doan.service;

import com.example.doan.model.TableDefinition;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class GenericTableService {
    private final JdbcTemplate jdbcTemplate;

    public GenericTableService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Map<String, Object>> findAll(TableDefinition table) {
        String sql = "SELECT " + table.getColumns().stream()
                .map(c -> c + " AS `" + c + "`")
                .collect(Collectors.joining(", "))
                + " FROM " + table.getTableName();

        return jdbcTemplate.queryForList(sql);
    }

    public Map<String, Object> findById(TableDefinition table, String id) {
        String sql = "SELECT " + table.getColumns().stream()
                .map(c -> c + " AS `" + c + "`")
                .collect(Collectors.joining(", "))
                + " FROM " + table.getTableName()
                + " WHERE " + table.getIdColumn() + " = ?";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql, id);
        return rows.isEmpty() ? new LinkedHashMap<>() : rows.get(0);
    }

    public void save(TableDefinition table, Map<String, String> data) {
        String id = data.get(table.getIdColumn());
        if (id == null || id.trim().isEmpty()) {
            throw new IllegalArgumentException("Mã chính không được để trống");
        }

        if (data.containsKey("SoDienThoai")) {
            String sdt = data.get("SoDienThoai");
            if (sdt != null && !sdt.trim().isEmpty() && !sdt.trim().matches("^(03|05|07|08|09)\\d{8}$")) {
                throw new IllegalArgumentException("Số điện thoại phải gồm 10 chữ số và bắt đầu bằng 03, 05, 07, 08 hoặc 09.");
            }
        }

        if (exists(table, id)) {
            update(table, data);
        } else {
            insert(table, data);
        }
    }

    public void delete(TableDefinition table, String id) {
        String sql = "DELETE FROM " + table.getTableName() + " WHERE " + table.getIdColumn() + " = ?";
        jdbcTemplate.update(sql, id);
    }

    private boolean exists(TableDefinition table, String id) {
        String sql = "SELECT COUNT(*) FROM " + table.getTableName() + " WHERE " + table.getIdColumn() + " = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, id);
        return count != null && count > 0;
    }

    private void insert(TableDefinition table, Map<String, String> data) {
        List<String> columns = table.getColumns().stream()
                .filter(c -> data.containsKey(c) && data.get(c) != null && !data.get(c).isBlank())
                .collect(Collectors.toList());

        String sql = "INSERT INTO " + table.getTableName() + " (" + joinColumns(columns) + ") VALUES ("
                + columns.stream().map(c -> "?").collect(Collectors.joining(", ")) + ")";

        Object[] values = columns.stream().map(c -> emptyToNull(data.get(c))).toArray();
        jdbcTemplate.update(sql, values);
    }

    private void update(TableDefinition table, Map<String, String> data) {
        List<String> columns = table.getColumns().stream()
                .filter(c -> !c.equals(table.getIdColumn()))
                .filter(data::containsKey)
                .collect(Collectors.toList());

        String setSql = columns.stream().map(c -> c + " = ?").collect(Collectors.joining(", "));
        String sql = "UPDATE " + table.getTableName() + " SET " + setSql
                + " WHERE " + table.getIdColumn() + " = ?";

        List<Object> values = new ArrayList<>();
        for (String col : columns) {
            values.add(emptyToNull(data.get(col)));
        }
        values.add(data.get(table.getIdColumn()));

        jdbcTemplate.update(sql, values.toArray());
    }

    private Object emptyToNull(String value) {
        if (value == null || value.trim().isEmpty()) return null;
        return value.trim();
    }

    private String joinColumns(List<String> columns) {
        return String.join(", ", columns);
    }
}
