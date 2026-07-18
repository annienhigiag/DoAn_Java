package com.example.doan.controller;

import com.example.doan.service.AuthService;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Controller
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @GetMapping("/login")
    public String loginPage(HttpSession session) {
        Object role = session.getAttribute("role");
        if (role != null) {
            if ("ADMIN".equalsIgnoreCase(role.toString())) return "redirect:/";
            if ("NHANVIEN".equalsIgnoreCase(role.toString())) return "redirect:/nhan-vien-dashboard";
            return "redirect:/mua-ve";
        }
        return "login";
    }

    @PostMapping("/login")
    public String login(@RequestParam String username,
                        @RequestParam String password,
                        HttpSession session,
                        Model model) {
        Map<String, Object> user = authService.login(username, password);
        if (user == null) {
            model.addAttribute("error", "Sai tên đăng nhập/email hoặc mật khẩu");
            return "login";
        }

        String role = user.get("QuyenHan").toString();
        session.setAttribute("username", user.get("TenDangNhap"));
        session.setAttribute("role", role);

        if ("ADMIN".equalsIgnoreCase(role)) return "redirect:/";
        if ("NHANVIEN".equalsIgnoreCase(role)) return "redirect:/nhan-vien-dashboard";
        return "redirect:/mua-ve";
    }

    @GetMapping("/register")
    public String registerPage(HttpSession session) {
        if (session.getAttribute("role") != null) return "redirect:/mua-ve";
        return "register";
    }

    @PostMapping("/register")
    public String register(@RequestParam String username,
                           @RequestParam String password,
                           @RequestParam String confirmPassword,
                           @RequestParam String phone,
                           @RequestParam(required = false) String email,
                           Model model) {
        try {
            authService.validateRegisterData(username, password, confirmPassword, phone, email);
            authService.register(username, password, phone, email);
            model.addAttribute("success", "Đăng ký thành công. Vui lòng đăng nhập.");
            return "login";
        } catch (Exception e) {
            model.addAttribute("error", e.getMessage());
            model.addAttribute("username", username);
            model.addAttribute("phone", phone);
            model.addAttribute("email", email);
            return "register";
        }
    }

    @GetMapping("/forgot-password")
    public String forgotPasswordPage() {
        return "forgot-password";
    }

    @PostMapping("/forgot-password/reset")
    public String resetPassword(@RequestParam String account,
                                @RequestParam String newPassword,
                                @RequestParam String confirmPassword,
                                Model model) {
        try {
            authService.updatePasswordByAccount(account, newPassword, confirmPassword);
            model.addAttribute("success", "Đổi mật khẩu thành công. Vui lòng đăng nhập.");
            return "login";
        } catch (Exception e) {
            model.addAttribute("error", e.getMessage());
            model.addAttribute("account", account);
            return "forgot-password";
        }
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/login";
    }
}
