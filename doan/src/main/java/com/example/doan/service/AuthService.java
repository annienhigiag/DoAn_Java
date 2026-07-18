package com.example.doan.service;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

@Service
public class AuthService {

    private final JdbcTemplate jdbcTemplate;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    private static final Pattern PASSWORD_PATTERN =
            Pattern.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).{8,}$");

    private static final Pattern PHONE_PATTERN =
            Pattern.compile("^(03|05|07|08|09)\\d{8}$");

    private static final Pattern EMAIL_PATTERN =
            Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$");

    public AuthService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Map<String, Object> login(String usernameOrEmail, String password) {
        String sql = """
                SELECT tk.*
                FROM TaiKhoan tk
                LEFT JOIN KhachHang kh ON tk.MaKhachHang = kh.MaKhachHang
                WHERE (tk.TenDangNhap = ? OR kh.Email = ?)
                  AND (
                        tk.TrangThai = 'Hoạt động'
                        OR tk.TrangThai = 'Hoat dong'
                        OR tk.TrangThai = 'ACTIVE'
                        OR tk.TrangThai = '1'
                  )
                """;

        List<Map<String, Object>> list =
                jdbcTemplate.queryForList(sql, usernameOrEmail, usernameOrEmail);

        for (Map<String, Object> user : list) {
            Object storedPasswordObject = user.get("MatKhau");

            if (storedPasswordObject == null) {
                continue;
            }

            String storedPassword = storedPasswordObject.toString();

            if (checkPassword(password, storedPassword)) {

                if (!isBCryptHash(storedPassword)) {
                    String hashedPassword = passwordEncoder.encode(password);

                    jdbcTemplate.update(
                            "UPDATE TaiKhoan SET MatKhau = ? WHERE TenDangNhap = ?",
                            hashedPassword,
                            user.get("TenDangNhap")
                    );

                    user.put("MatKhau", hashedPassword);
                }

                return user;
            }
        }

        return null;
    }

    private boolean checkPassword(String rawPassword, String storedPassword) {
        if (rawPassword == null || storedPassword == null) {
            return false;
        }

        if (isBCryptHash(storedPassword)) {
            return passwordEncoder.matches(rawPassword, storedPassword);
        }

        return rawPassword.equals(storedPassword);
    }

    private boolean isBCryptHash(String password) {
        if (password == null) {
            return false;
        }

        return password.startsWith("$2a$")
                || password.startsWith("$2b$")
                || password.startsWith("$2y$");
    }

    public Map<String, Object> findAccountByPhoneOrEmail(String account) {
        String sql = """
                SELECT tk.*, kh.Email, kh.SoDienThoai
                FROM TaiKhoan tk
                LEFT JOIN KhachHang kh ON tk.MaKhachHang = kh.MaKhachHang
                WHERE tk.TenDangNhap = ? OR kh.SoDienThoai = ? OR kh.Email = ?
                """;

        List<Map<String, Object>> list =
                jdbcTemplate.queryForList(sql, account, account, account);

        return list.isEmpty() ? null : list.get(0);
    }

    public void validateRegisterData(String username, String password, String confirmPassword,
                                     String phone, String email) {
        if (username == null || username.trim().length() < 4) {
            throw new IllegalArgumentException("Tên đăng nhập phải có ít nhất 4 ký tự.");
        }

        if (!PASSWORD_PATTERN.matcher(password == null ? "" : password).matches()) {
            throw new IllegalArgumentException("Mật khẩu phải có ít nhất 8 ký tự, gồm chữ in hoa, chữ thường, số và ký tự đặc biệt.");
        }

        if (!password.equals(confirmPassword)) {
            throw new IllegalArgumentException("Mật khẩu nhập lại không trùng khớp.");
        }

        if (!PHONE_PATTERN.matcher(phone == null ? "" : phone).matches()) {
            throw new IllegalArgumentException("Số điện thoại phải gồm 10 chữ số và bắt đầu bằng 03, 05, 07, 08 hoặc 09.");
        }

        if (email != null && !email.isBlank() && !EMAIL_PATTERN.matcher(email).matches()) {
            throw new IllegalArgumentException("Email không hợp lệ.");
        }

        if (existsUsername(username.trim())) {
            throw new IllegalArgumentException("Tên đăng nhập đã tồn tại.");
        }
    }

    @Transactional
    public void register(String username, String password, String phone, String email) {
        String maKhachHang = generateCustomerCode();

        jdbcTemplate.update("""
                INSERT INTO KhachHang(MaKhachHang, HoTen, SoDienThoai, Email, CCCD, Avatar, NgaySinh, GioiTinh, GhiChu)
                VALUES (?, ?, ?, ?, NULL, '/images/default-avatar.png', NULL, 'Nam', 'Khách đăng ký online')
                """, maKhachHang, username.trim(), phone.trim(), emptyToNull(email));

        String hashedPassword = passwordEncoder.encode(password);

        jdbcTemplate.update("""
                INSERT INTO TaiKhoan(TenDangNhap, MatKhau, MaNhanVien, MaKhachHang, QuyenHan, TrangThai)
                VALUES (?, ?, NULL, ?, 'USER', 'Hoạt động')
                """, username.trim(), hashedPassword, maKhachHang);
    }

    public void updatePasswordByAccount(String account, String newPassword, String confirmPassword) {
        if (account == null || account.trim().isEmpty()) {
            throw new IllegalArgumentException("Vui lòng nhập tên đăng nhập, số điện thoại hoặc email.");
        }

        if (!PASSWORD_PATTERN.matcher(newPassword == null ? "" : newPassword).matches()) {
            throw new IllegalArgumentException("Mật khẩu mới phải có ít nhất 8 ký tự, gồm chữ in hoa, chữ thường, số và ký tự đặc biệt.");
        }

        if (!newPassword.equals(confirmPassword)) {
            throw new IllegalArgumentException("Mật khẩu nhập lại không trùng khớp.");
        }

        Map<String, Object> user = findAccountByPhoneOrEmail(account.trim());

        if (user == null) {
            throw new IllegalArgumentException("Không tìm thấy tài khoản phù hợp.");
        }

        String hashedPassword = passwordEncoder.encode(newPassword);

        jdbcTemplate.update(
                "UPDATE TaiKhoan SET MatKhau = ? WHERE TenDangNhap = ?",
                hashedPassword,
                user.get("TenDangNhap")
        );
    }

    private boolean existsUsername(String username) {
        Integer count = jdbcTemplate.queryForObject(
                "SELECT COUNT(*) FROM TaiKhoan WHERE TenDangNhap = ?",
                Integer.class,
                username
        );

        return count != null && count > 0;
    }

    private String generateCustomerCode() {
        Integer maxNumber = jdbcTemplate.queryForObject("""
                SELECT COALESCE(MAX(CAST(SUBSTRING(MaKhachHang, 3) AS UNSIGNED)), 0)
                FROM KhachHang
                WHERE MaKhachHang REGEXP '^KH[0-9]+$'
                """, Integer.class);

        return String.format("KH%02d", (maxNumber == null ? 0 : maxNumber) + 1);
    }

    private String emptyToNull(String value) {
        return value == null || value.isBlank() ? null : value.trim();
    }
}