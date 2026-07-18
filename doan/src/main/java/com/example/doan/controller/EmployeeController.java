package com.example.doan.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class EmployeeController {

    private final JdbcTemplate jdbcTemplate;

    public EmployeeController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private boolean isEmployee(HttpSession session) {
        Object role = session.getAttribute("role");
        return role != null && "NHANVIEN".equalsIgnoreCase(role.toString());
    }

    private void addEmployeeInfo(Model model, HttpSession session) {
        String username = session.getAttribute("username").toString();

        model.addAttribute("username", username);

        List<Map<String, Object>> info = jdbcTemplate.queryForList("""
                SELECT nv.*
                FROM TaiKhoan tk
                LEFT JOIN NhanVien nv ON tk.MaNhanVien = nv.MaNhanVien
                WHERE tk.TenDangNhap = ?
                """, username);

        if (!info.isEmpty()) {
            Map<String, Object> nv = info.get(0);

            model.addAttribute("nhanVien", nv);
            model.addAttribute("hoTenHienThi", nv.get("HoTen"));

            Object avatar = nv.get("Avatar");

            if (avatar == null || avatar.toString().isBlank()) {
                model.addAttribute("avatarHienThi", "/images/default-avatar.png");
            } else {
                model.addAttribute("avatarHienThi", avatar.toString());
            }
        } else {
            model.addAttribute("nhanVien", new HashMap<>());
            model.addAttribute("hoTenHienThi", username);
            model.addAttribute("avatarHienThi", "/images/default-avatar.png");
        }
    }

    @GetMapping("/nhan-vien-dashboard")
    public String dashboard(Model model, HttpSession session) {
        if (!isEmployee(session)) {
            return "redirect:/login";
        }

        addEmployeeInfo(model, session);
        return "nhan-vien-dashboard";
    }

    @GetMapping("/nhan-vien-thong-tin")
    public String thongTin(Model model, HttpSession session) {
        if (!isEmployee(session)) {
            return "redirect:/login";
        }

        addEmployeeInfo(model, session);
        return "nhan-vien-thong-tin";
    }

    @PostMapping("/nhan-vien-thong-tin")
    public String capNhatThongTin(@RequestParam String hoTen,
                                  @RequestParam String soDienThoai,
                                  @RequestParam(required = false) MultipartFile avatarFile,
                                  Model model,
                                  HttpSession session) throws IOException {

        if (!isEmployee(session)) {
            return "redirect:/login";
        }

        if (soDienThoai == null || !soDienThoai.trim().matches("^(03|05|07|08|09)\\d{8}$")) {
            addEmployeeInfo(model, session);
            model.addAttribute("error", "Số điện thoại phải gồm 10 chữ số và bắt đầu bằng 03, 05, 07, 08 hoặc 09.");
            return "nhan-vien-thong-tin";
        }

        String username = session.getAttribute("username").toString();

        String avatarValue = null;

        if (avatarFile != null && !avatarFile.isEmpty()) {
            avatarValue = saveAvatarFile(avatarFile);
        }

        if (avatarValue != null) {
            jdbcTemplate.update("""
                    UPDATE NhanVien nv
                    JOIN TaiKhoan tk ON nv.MaNhanVien = tk.MaNhanVien
                    SET nv.HoTen = ?,
                        nv.SoDienThoai = ?,
                        nv.Avatar = ?
                    WHERE tk.TenDangNhap = ?
                    """, hoTen, soDienThoai, avatarValue, username);
        } else {
            jdbcTemplate.update("""
                    UPDATE NhanVien nv
                    JOIN TaiKhoan tk ON nv.MaNhanVien = tk.MaNhanVien
                    SET nv.HoTen = ?,
                        nv.SoDienThoai = ?
                    WHERE tk.TenDangNhap = ?
                    """, hoTen, soDienThoai, username);
        }

        return "redirect:/nhan-vien-thong-tin?success";
    }

    private String saveAvatarFile(MultipartFile file) throws IOException {
        String originalName = file.getOriginalFilename();

        if (originalName == null || originalName.isBlank()) {
            originalName = "avatar.png";
        }

        String safeName = originalName.replaceAll("[^a-zA-Z0-9\\.\\-_]", "_");
        String fileName = System.currentTimeMillis() + "_" + safeName;

        Path uploadDir = Paths.get("src/main/resources/static/uploads/avatars");
        Files.createDirectories(uploadDir);

        Path filePath = uploadDir.resolve(fileName);
        Files.write(filePath, file.getBytes());

        return "/uploads/avatars/" + fileName;
    }
}