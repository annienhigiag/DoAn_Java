package com.example.doan.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Controller
public class BaoCaoDoanhThuController {

    private final JdbcTemplate jdbcTemplate;

    public BaoCaoDoanhThuController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private boolean isAdmin(HttpSession session) {
        Object role = session.getAttribute("role");
        return role != null && "ADMIN".equalsIgnoreCase(role.toString());
    }

    @GetMapping("/bao-cao-doanh-thu")
    public String baoCaoDoanhThu(@RequestParam(required = false) Integer thang,
                                 @RequestParam(required = false) Integer nam,
                                 Model model,
                                 HttpSession session) {
        if (!isAdmin(session)) {
            return "redirect:/login";
        }

        LocalDate now = LocalDate.now();

        if (nam == null) {
            nam = now.getYear();
        }

        List<Map<String, Object>> danhSachDoanhThu;

        if (thang != null && thang > 0) {
            danhSachDoanhThu = jdbcTemplate.queryForList("""
                    SELECT 
                        tt.MaThanhToan,
                        tt.MaDatVe,
                        tt.SoTien,
                        tt.PhuongThuc,
                        tt.NgayThanhToan,
                        kh.HoTen,
                        bdi.TenBenXe AS TenBenDi,
                        bden.TenBenXe AS TenBenDen
                    FROM ThanhToan tt
                    LEFT JOIN DatVe dv ON tt.MaDatVe = dv.MaDatVe
                    LEFT JOIN KhachHang kh ON dv.MaKhachHang = kh.MaKhachHang
                    LEFT JOIN LichChay lc ON dv.MaLichChay = lc.MaLichChay
                    LEFT JOIN TuyenXe tx ON lc.MaTuyenXe = tx.MaTuyenXe
                    LEFT JOIN BenXe bdi ON tx.MaBenDi = bdi.MaBenXe
                    LEFT JOIN BenXe bden ON tx.MaBenDen = bden.MaBenXe
                    WHERE YEAR(tt.NgayThanhToan) = ?
                      AND MONTH(tt.NgayThanhToan) = ?
                    ORDER BY tt.NgayThanhToan DESC
                    """, nam, thang);
        } else {
            danhSachDoanhThu = jdbcTemplate.queryForList("""
                    SELECT 
                        tt.MaThanhToan,
                        tt.MaDatVe,
                        tt.SoTien,
                        tt.PhuongThuc,
                        tt.NgayThanhToan,
                        kh.HoTen,
                        bdi.TenBenXe AS TenBenDi,
                        bden.TenBenXe AS TenBenDen
                    FROM ThanhToan tt
                    LEFT JOIN DatVe dv ON tt.MaDatVe = dv.MaDatVe
                    LEFT JOIN KhachHang kh ON dv.MaKhachHang = kh.MaKhachHang
                    LEFT JOIN LichChay lc ON dv.MaLichChay = lc.MaLichChay
                    LEFT JOIN TuyenXe tx ON lc.MaTuyenXe = tx.MaTuyenXe
                    LEFT JOIN BenXe bdi ON tx.MaBenDi = bdi.MaBenXe
                    LEFT JOIN BenXe bden ON tx.MaBenDen = bden.MaBenXe
                    WHERE YEAR(tt.NgayThanhToan) = ?
                    ORDER BY tt.NgayThanhToan DESC
                    """, nam);
        }

        List<Map<String, Object>> bieuDo;

        if (thang != null && thang > 0) {
            bieuDo = jdbcTemplate.queryForList("""
                    SELECT 
                        DAY(NgayThanhToan) AS Nhan,
                        COALESCE(SUM(SoTien), 0) AS DoanhThu
                    FROM ThanhToan
                    WHERE YEAR(NgayThanhToan) = ?
                      AND MONTH(NgayThanhToan) = ?
                    GROUP BY DAY(NgayThanhToan)
                    ORDER BY DAY(NgayThanhToan)
                    """, nam, thang);
        } else {
            bieuDo = jdbcTemplate.queryForList("""
                    SELECT 
                        MONTH(NgayThanhToan) AS Nhan,
                        COALESCE(SUM(SoTien), 0) AS DoanhThu
                    FROM ThanhToan
                    WHERE YEAR(NgayThanhToan) = ?
                    GROUP BY MONTH(NgayThanhToan)
                    ORDER BY MONTH(NgayThanhToan)
                    """, nam);
        }

        Double tongDoanhThu;

        if (thang != null && thang > 0) {
            tongDoanhThu = jdbcTemplate.queryForObject("""
                    SELECT COALESCE(SUM(SoTien), 0)
                    FROM ThanhToan
                    WHERE YEAR(NgayThanhToan) = ?
                      AND MONTH(NgayThanhToan) = ?
                    """, Double.class, nam, thang);
        } else {
            tongDoanhThu = jdbcTemplate.queryForObject("""
                    SELECT COALESCE(SUM(SoTien), 0)
                    FROM ThanhToan
                    WHERE YEAR(NgayThanhToan) = ?
                    """, Double.class, nam);
        }

        model.addAttribute("danhSachDoanhThu", danhSachDoanhThu);
        model.addAttribute("bieuDo", bieuDo);
        model.addAttribute("tongDoanhThu", tongDoanhThu);
        model.addAttribute("thang", thang);
        model.addAttribute("nam", nam);
        model.addAttribute("username", session.getAttribute("username"));

        return "bao-cao-doanh-thu";
    }
}
