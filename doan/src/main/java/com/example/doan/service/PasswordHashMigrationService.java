package com.example.doan.service;

import jakarta.annotation.PostConstruct;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class PasswordHashMigrationService {

    private final JdbcTemplate jdbcTemplate;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public PasswordHashMigrationService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @PostConstruct
    public void hashOldPlainTextPasswords() {
        List<Map<String, Object>> accounts = jdbcTemplate.queryForList(
                "SELECT TenDangNhap, MatKhau FROM TaiKhoan"
        );

        for (Map<String, Object> account : accounts) {
            String username = String.valueOf(account.get("TenDangNhap"));
            String password = String.valueOf(account.get("MatKhau"));

            if (password == null || password.isBlank()) {
                continue;
            }

            if (isBCryptHash(password)) {
                continue;
            }

            String hashedPassword = passwordEncoder.encode(password);

            jdbcTemplate.update(
                    "UPDATE TaiKhoan SET MatKhau = ? WHERE TenDangNhap = ?",
                    hashedPassword,
                    username
            );

            System.out.println("Đã hash mật khẩu cho tài khoản: " + username);
        }
    }

    private boolean isBCryptHash(String password) {
        return password.startsWith("$2a$")
                || password.startsWith("$2b$")
                || password.startsWith("$2y$");
    }
}