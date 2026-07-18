package com.example.doan.controller;

import com.example.doan.service.TableConfig;
import jakarta.servlet.http.HttpSession;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Map;

@Controller
public class HomeController {
    private final TableConfig tableConfig;
    private final JdbcTemplate jdbcTemplate;

    public HomeController(TableConfig tableConfig, JdbcTemplate jdbcTemplate) {
        this.tableConfig = tableConfig;
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping("/")
    public String home(Model model, HttpSession session) {
        Object role = session.getAttribute("role");

        if (role == null) {
            return "redirect:/login";
        }

        if ("USER".equalsIgnoreCase(role.toString())) {
            return "redirect:/mua-ve";
        }

        if ("NHANVIEN".equalsIgnoreCase(role.toString())) {
            return "redirect:/nhan-vien-dashboard";
        }

        Integer tongDatVe = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM DatVe", Integer.class);
        Double tongDoanhThu = jdbcTemplate.queryForObject("SELECT COALESCE(SUM(SoTien), 0) FROM ThanhToan", Double.class);
        Integer tongKhachHang = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM KhachHang", Integer.class);
        Integer tongXe = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM XeKhach", Integer.class);

        List<Map<String, Object>> monthlyRevenue = jdbcTemplate.queryForList("""
                SELECT 
                    MONTH(NgayThanhToan) AS Thang,
                    COALESCE(SUM(SoTien), 0) AS DoanhThu
                FROM ThanhToan
                WHERE YEAR(NgayThanhToan) = YEAR(CURDATE())
                GROUP BY MONTH(NgayThanhToan)
                ORDER BY MONTH(NgayThanhToan)
                """);

        List<Map<String, Object>> monthlyBookings = jdbcTemplate.queryForList("""
                SELECT 
                    MONTH(NgayDat) AS Thang,
                    COUNT(*) AS SoLuong
                FROM DatVe
                WHERE YEAR(NgayDat) = YEAR(CURDATE())
                GROUP BY MONTH(NgayDat)
                ORDER BY MONTH(NgayDat)
                """);

        model.addAttribute("tongDatVe", tongDatVe);
        model.addAttribute("tongDoanhThu", tongDoanhThu);
        model.addAttribute("tongKhachHang", tongKhachHang);
        model.addAttribute("tongXe", tongXe);
        model.addAttribute("monthlyRevenue", monthlyRevenue);
        model.addAttribute("monthlyBookings", monthlyBookings);
        model.addAttribute("tables", tableConfig.getAll());
        model.addAttribute("username", session.getAttribute("username"));

        return "index";
    }
}
