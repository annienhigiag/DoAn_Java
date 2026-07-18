package com.example.doan.controller;

import com.example.doan.service.DatabaseBackupService;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Controller
@RequestMapping("/admin/backup-restore")
public class BackupRestoreController {
    private final DatabaseBackupService databaseBackupService;

    public BackupRestoreController(DatabaseBackupService databaseBackupService) {
        this.databaseBackupService = databaseBackupService;
    }

    @GetMapping
    public String page(Model model, HttpSession session) {
        if (!isAdmin(session)) {
            return denyRedirect(session);
        }

        model.addAttribute("username", session.getAttribute("username"));
        return "backup-restore";
    }

    @GetMapping("/download")
    public ResponseEntity<byte[]> downloadBackup(HttpSession session) throws Exception {
        if (!isAdmin(session)) {
            return ResponseEntity.status(403).build();
        }

        byte[] data = databaseBackupService.exportBackup();
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss"));
        String fileName = "backup_QLBanVeXeKhach_" + timestamp + ".json";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setContentDisposition(ContentDisposition.attachment().filename(fileName).build());

        return ResponseEntity.ok()
                .headers(headers)
                .body(data);
    }

    @PostMapping("/restore")
    public String restoreBackup(@RequestParam("file") MultipartFile file,
                                RedirectAttributes redirectAttributes,
                                HttpSession session) {
        if (!isAdmin(session)) {
            return denyRedirect(session);
        }

        try {
            databaseBackupService.restoreBackup(file);
            redirectAttributes.addFlashAttribute("success", "Khôi phục dữ liệu thành công.");
        } catch (Exception ex) {
            redirectAttributes.addFlashAttribute("error", "Khôi phục thất bại: " + ex.getMessage());
        }

        return "redirect:/admin/backup-restore";
    }

    private boolean isAdmin(HttpSession session) {
        Object role = session.getAttribute("role");
        return role != null && "ADMIN".equalsIgnoreCase(role.toString());
    }

    private String denyRedirect(HttpSession session) {
        Object role = session.getAttribute("role");
        if (role == null) return "redirect:/login";
        if ("NHANVIEN".equalsIgnoreCase(role.toString())) return "redirect:/nhan-vien-dashboard";
        return "redirect:/mua-ve";
    }
}
