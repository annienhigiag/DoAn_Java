package com.example.doan.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@Controller
public class AdminCancelController {

    private final JdbcTemplate jdbcTemplate;

    public AdminCancelController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private boolean isAdmin(HttpSession session) {
        Object role = session.getAttribute("role");
        return role != null && "ADMIN".equalsIgnoreCase(role.toString());
    }

    @GetMapping("/admin/yeu-cau-huy-ve")
    public String danhSachYeuCau(Model model, HttpSession session) {
        if (!isAdmin(session)) return "redirect:/login";

        List<Map<String, Object>> requests = jdbcTemplate.queryForList("""
                SELECT yc.*, dv.TongTien, dv.TrangThai AS TrangThaiVe,
                       kh.HoTen, kh.SoDienThoai,
                       lc.GioKhoiHanh,
                       bdi.TenBenXe AS TenBenDi,
                       bden.TenBenXe AS TenBenDen
                FROM YeuCauHuyVe yc
                LEFT JOIN DatVe dv ON yc.MaDatVe = dv.MaDatVe
                LEFT JOIN KhachHang kh ON dv.MaKhachHang = kh.MaKhachHang
                LEFT JOIN LichChay lc ON dv.MaLichChay = lc.MaLichChay
                LEFT JOIN TuyenXe tx ON lc.MaTuyenXe = tx.MaTuyenXe
                LEFT JOIN BenXe bdi ON tx.MaBenDi = bdi.MaBenXe
                LEFT JOIN BenXe bden ON tx.MaBenDen = bden.MaBenXe
                ORDER BY yc.NgayYeuCau DESC
                """);

        model.addAttribute("requests", requests);
        model.addAttribute("username", session.getAttribute("username"));
        return "admin-yeu-cau-huy-ve";
    }

    @PostMapping("/admin/yeu-cau-huy-ve/duyet")
    public String duyetYeuCau(@RequestParam String maYeuCau,
                              @RequestParam(required = false) String phanHoiAdmin,
                              HttpSession session) {
        if (!isAdmin(session)) return "redirect:/login";

        Map<String, Object> yc = jdbcTemplate.queryForMap("SELECT * FROM YeuCauHuyVe WHERE MaYeuCau = ?", maYeuCau);
        String maDatVe = yc.get("MaDatVe").toString();

        Map<String, Object> ve = jdbcTemplate.queryForMap("SELECT * FROM DatVe WHERE MaDatVe = ?", maDatVe);
        BigDecimal tongTien = new BigDecimal(ve.get("TongTien").toString());
        BigDecimal soTienHoan = tongTien;

        jdbcTemplate.update("""
                UPDATE YeuCauHuyVe
                SET TrangThai = 'Đã duyệt',
                    PhanHoiAdmin = ?,
                    NgayXuLy = NOW()
                WHERE MaYeuCau = ?
                """, phanHoiAdmin, maYeuCau);

        jdbcTemplate.update("""
                UPDATE DatVe
                SET TrangThai = 'Đã hủy'
                WHERE MaDatVe = ?
                """, maDatVe);

        String maHuyVe = taoMa("HV");

        jdbcTemplate.update("""
                INSERT INTO HuyVe(MaHuyVe, MaDatVe, MaNhanVien, LyDo, SoTienHoan)
                VALUES (?, ?, NULL, ?, ?)
                """, maHuyVe, maDatVe, yc.get("LyDo").toString(), soTienHoan);

        return "redirect:/admin/yeu-cau-huy-ve?approved";
    }

    @PostMapping("/admin/yeu-cau-huy-ve/tu-choi")
    public String tuChoiYeuCau(@RequestParam String maYeuCau,
                               @RequestParam(required = false) String phanHoiAdmin,
                               HttpSession session) {
        if (!isAdmin(session)) return "redirect:/login";

        Map<String, Object> yc = jdbcTemplate.queryForMap("SELECT * FROM YeuCauHuyVe WHERE MaYeuCau = ?", maYeuCau);
        String maDatVe = yc.get("MaDatVe").toString();

        jdbcTemplate.update("""
                UPDATE YeuCauHuyVe
                SET TrangThai = 'Từ chối',
                    PhanHoiAdmin = ?,
                    NgayXuLy = NOW()
                WHERE MaYeuCau = ?
                """, phanHoiAdmin, maYeuCau);

        jdbcTemplate.update("""
                UPDATE DatVe
                SET TrangThai = 'Đã đặt online'
                WHERE MaDatVe = ?
                """, maDatVe);

        return "redirect:/admin/yeu-cau-huy-ve?rejected";
    }

    private String taoMa(String prefix) {
        String time = DateTimeFormatter.ofPattern("HHmmssSSS").format(LocalDateTime.now());
        return prefix + time.substring(time.length() - 7);
    }
}
