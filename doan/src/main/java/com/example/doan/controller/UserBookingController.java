package com.example.doan.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.regex.Pattern;

@Controller
public class UserBookingController {

    private final JdbcTemplate jdbcTemplate;

    private static final Pattern HO_TEN_PATTERN = Pattern.compile("^.{2,}$");
    private static final Pattern SDT_VIET_NAM_PATTERN = Pattern.compile("^(03|05|07|08|09)\\d{8}$");

    public UserBookingController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private boolean isLoggedIn(HttpSession session) {
        return session.getAttribute("role") != null;
    }

    private String getUsername(HttpSession session) {
        return session.getAttribute("username").toString();
    }

    private void addUserInfo(Model model, HttpSession session) {
        String username = getUsername(session);
        model.addAttribute("username", username);

        List<Map<String, Object>> info = jdbcTemplate.queryForList("""
                SELECT 
                    COALESCE(kh.HoTen, nv.HoTen, tk.TenDangNhap) AS HoTenHienThi,
                    COALESCE(kh.Avatar, nv.Avatar, '/images/default-avatar.png') AS AvatarHienThi
                FROM TaiKhoan tk
                LEFT JOIN KhachHang kh ON tk.MaKhachHang = kh.MaKhachHang
                LEFT JOIN NhanVien nv ON tk.MaNhanVien = nv.MaNhanVien
                WHERE tk.TenDangNhap = ?
                """, username);

        if (!info.isEmpty()) {
            model.addAttribute("hoTenHienThi", info.get(0).get("HoTenHienThi"));
            model.addAttribute("avatarHienThi", info.get(0).get("AvatarHienThi"));
        } else {
            model.addAttribute("hoTenHienThi", username);
            model.addAttribute("avatarHienThi", "/images/default-avatar.png");
        }
    }

    private String getMaKhachHang(String username) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "SELECT MaKhachHang FROM TaiKhoan WHERE TenDangNhap = ?",
                username
        );

        if (rows.isEmpty() || rows.get(0).get("MaKhachHang") == null) {
            return null;
        }

        return rows.get(0).get("MaKhachHang").toString();
    }

    private boolean isValidHoTen(String hoTen) {
        return hoTen != null && HO_TEN_PATTERN.matcher(hoTen.trim()).matches();
    }

    private boolean isValidSoDienThoaiVietNam(String soDienThoai) {
        return soDienThoai != null && SDT_VIET_NAM_PATTERN.matcher(soDienThoai.trim()).matches();
    }

    private String normalizeText(String value) {
        return value == null ? "" : value.trim();
    }

    @GetMapping("/mua-ve")
    public String muaVe(@RequestParam(required = false) String diemDi,
                        @RequestParam(required = false) String diemDen,
                        Model model,
                        HttpSession session) {
        if (!isLoggedIn(session)) return "redirect:/login";

        addUserInfo(model, session);

        StringBuilder sql = new StringBuilder("""
                SELECT lc.MaLichChay, lc.MaTuyenXe, lc.MaXe, lc.MaTaiXe,
                       lc.GioKhoiHanh, lc.GioDenDuKien, lc.GiaCoBan, lc.TrangThai,
                       tx.MaBenDi, tx.MaBenDen, tx.QuangDuong, tx.ThoiGianDuKien,
                       bdi.TenBenXe AS TenBenDi,
                       bden.TenBenXe AS TenBenDen,
                       x.BienSo, x.HieuXe, x.SoLuongGhe, x.LoaiXe
                FROM LichChay lc
                LEFT JOIN TuyenXe tx ON lc.MaTuyenXe = tx.MaTuyenXe
                LEFT JOIN BenXe bdi ON tx.MaBenDi = bdi.MaBenXe
                LEFT JOIN BenXe bden ON tx.MaBenDen = bden.MaBenXe
                LEFT JOIN XeKhach x ON lc.MaXe = x.MaXe
                WHERE 1 = 1
                """);

        List<Object> params = new ArrayList<>();

        if (diemDi != null && !diemDi.trim().isEmpty()) {
            sql.append(" AND (bdi.TenBenXe LIKE ? OR tx.MaBenDi LIKE ?) ");
            params.add("%" + diemDi.trim() + "%");
            params.add("%" + diemDi.trim() + "%");
        }

        if (diemDen != null && !diemDen.trim().isEmpty()) {
            sql.append(" AND (bden.TenBenXe LIKE ? OR tx.MaBenDen LIKE ?) ");
            params.add("%" + diemDen.trim() + "%");
            params.add("%" + diemDen.trim() + "%");
        }

        sql.append(" ORDER BY lc.GioKhoiHanh ASC ");

        List<Map<String, Object>> danhSachDanhGia = jdbcTemplate.queryForList("""
                SELECT dg.*, COALESCE(kh.HoTen, dg.TenDangNhap) AS HoTen
                FROM DanhGia dg
                LEFT JOIN KhachHang kh ON dg.MaKhachHang = kh.MaKhachHang
                ORDER BY dg.NgayDanhGia DESC
                """);

        List<Map<String, Object>> ratingSummary = jdbcTemplate.queryForList("""
                SELECT 
                    s.SoSao,
                    COALESCE(
                        ROUND(COUNT(dg.MaDanhGia) * 100.0 / NULLIF((SELECT COUNT(*) FROM DanhGia), 0)),
                        0
                    ) AS PhanTram
                FROM (
                    SELECT 5 AS SoSao 
                    UNION SELECT 4 
                    UNION SELECT 3 
                    UNION SELECT 2 
                    UNION SELECT 1
                ) s
                LEFT JOIN DanhGia dg ON s.SoSao = dg.SoSao
                GROUP BY s.SoSao
                ORDER BY s.SoSao DESC
                """);

        model.addAttribute("lichChay", jdbcTemplate.queryForList(sql.toString(), params.toArray()));
        model.addAttribute("diemDi", diemDi);
        model.addAttribute("diemDen", diemDen);
        model.addAttribute("danhSachDanhGia", danhSachDanhGia);
        model.addAttribute("ratingSummary", ratingSummary);

        return "mua-ve";
    }

    @GetMapping("/uu-dai-cua-toi")
    public String uuDaiCuaToi(Model model, HttpSession session) {
        if (!isLoggedIn(session)) return "redirect:/login";

        addUserInfo(model, session);

        String username = getUsername(session);

        List<Map<String, Object>> myOffers = jdbcTemplate.queryForList("""
                SELECT ud.*, km.TenChuongTrinh, km.TyLeGiam, km.NgayBatDau, km.NgayKetThuc, km.MoTa
                FROM UuDaiCuaToi ud
                JOIN KhuyenMai km ON ud.MaKM = km.MaKM
                WHERE ud.TenDangNhap = ?
                ORDER BY ud.NgayLuu DESC
                """, username);

        List<Map<String, Object>> suggestions = jdbcTemplate.queryForList("""
                SELECT *
                FROM KhuyenMai
                WHERE NOW() BETWEEN NgayBatDau AND NgayKetThuc
                  AND MaKM NOT IN (
                      SELECT MaKM FROM UuDaiCuaToi WHERE TenDangNhap = ?
                  )
                ORDER BY TyLeGiam DESC
                """, username);

        model.addAttribute("myOffers", myOffers);
        model.addAttribute("suggestions", suggestions);

        return "uu-dai-cua-toi";
    }

    @PostMapping("/uu-dai-cua-toi/luu")
    public String luuUuDai(@RequestParam String maKM, HttpSession session) {
        if (!isLoggedIn(session)) return "redirect:/login";

        String username = getUsername(session);

        Integer existed = jdbcTemplate.queryForObject("""
                SELECT COUNT(*)
                FROM UuDaiCuaToi
                WHERE TenDangNhap = ? AND MaKM = ?
                """, Integer.class, username, maKM);

        if (existed == null || existed == 0) {
            String maUuDai = taoMa("UD");

            jdbcTemplate.update("""
                    INSERT INTO UuDaiCuaToi(MaUuDai, TenDangNhap, MaKM, TrangThai)
                    VALUES (?, ?, ?, 'Đã lưu')
                    """, maUuDai, username, maKM);
        }

        return "redirect:/uu-dai-cua-toi?saved";
    }

    @GetMapping("/vi-the")
    public String viThe(Model model, HttpSession session) {
        if (!isLoggedIn(session)) return "redirect:/login";

        addUserInfo(model, session);

        String username = getUsername(session);

        List<Map<String, Object>> methods = jdbcTemplate.queryForList("""
                SELECT *
                FROM PhuongThucThanhToanLienKet
                WHERE TenDangNhap = ?
                ORDER BY NgayLienKet DESC
                """, username);

        model.addAttribute("methods", methods);

        return "vi-the";
    }

    @PostMapping("/vi-the/lien-ket")
    public String lienKetViThe(@RequestParam String loaiPhuongThuc,
                               @RequestParam String tenChuTaiKhoan,
                               @RequestParam String soTaiKhoan,
                               @RequestParam(required = false) String nganHang,
                               Model model,
                               HttpSession session) {
        if (!isLoggedIn(session)) return "redirect:/login";

        String username = getUsername(session);

        if ("Thẻ liên kết".equals(loaiPhuongThuc)) {
            if (soTaiKhoan == null || !soTaiKhoan.matches("\\d{16}")) {
                model.addAttribute("error", "Số thẻ phải gồm đúng 16 chữ số.");
                return viThe(model, session);
            }

            soTaiKhoan = "**** **** **** " + soTaiKhoan.substring(12);
            nganHang = null;
        }

        if ("Liên kết ngân hàng".equals(loaiPhuongThuc)) {
            if (nganHang == null || nganHang.isBlank()) {
                model.addAttribute("error", "Vui lòng chọn ngân hàng.");
                return viThe(model, session);
            }
        }

        String maLienKet = taoMa("LK");

        jdbcTemplate.update("""
                INSERT INTO PhuongThucThanhToanLienKet
                (MaLienKet, TenDangNhap, LoaiPhuongThuc, NganHang, TenChuTaiKhoan, SoTaiKhoan, TrangThai)
                VALUES (?, ?, ?, ?, ?, ?, 'Đã liên kết')
                """, maLienKet, username, loaiPhuongThuc, nganHang, tenChuTaiKhoan, soTaiKhoan);

        return "redirect:/vi-the?linked";
    }


    private Map<String, Object> getQrConfig() {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList("""
                SELECT *
                FROM CauHinhThanhToan
                WHERE MaCauHinh = 'QR01'
                """);

        if (rows.isEmpty()) {
            Map<String, Object> fallback = new HashMap<>();
            fallback.put("MaCauHinh", "QR01");
            fallback.put("AnhQR", "/images/default-qr.png");
            fallback.put("SoTaiKhoan", "123456789");
            fallback.put("TenNganHang", "QLBanVeXeKhach");
            fallback.put("ChuTaiKhoan", "QLBanVeXeKhach");
            return fallback;
        }

        return rows.get(0);
    }

    private boolean isAdmin(HttpSession session) {
        Object role = session.getAttribute("role");
        return role != null && "ADMIN".equalsIgnoreCase(role.toString());
    }

    @GetMapping("/admin/qr-thanh-toan")
    public String formQrThanhToan(Model model, HttpSession session) {
        if (!isAdmin(session)) return "redirect:/login";

        model.addAttribute("qr", getQrConfig());
        model.addAttribute("username", session.getAttribute("username"));

        return "admin-qr-thanh-toan";
    }


    @GetMapping("/admin/qr-crop")
    public String cropQrThanhToan(HttpSession session) {
        if (!isAdmin(session)) return "redirect:/login";
        return "admin-qr-crop";
    }

    @PostMapping("/admin/qr-thanh-toan")
    public String capNhatQrThanhToan(@RequestParam(required = false) MultipartFile anhQR,
                                     @RequestParam String soTaiKhoan,
                                     @RequestParam String tenNganHang,
                                     @RequestParam String chuTaiKhoan,
                                     HttpSession session) throws IOException {
        if (!isAdmin(session)) return "redirect:/login";

        Map<String, Object> oldConfig = getQrConfig();
        String anhQrValue = oldConfig.get("AnhQR") == null
                ? "/images/default-qr.png"
                : oldConfig.get("AnhQR").toString();

        if (anhQR != null && !anhQR.isEmpty()) {
            anhQrValue = saveQrFile(anhQR);
        }

        jdbcTemplate.update("""
                INSERT INTO CauHinhThanhToan(MaCauHinh, AnhQR, SoTaiKhoan, TenNganHang, ChuTaiKhoan)
                VALUES ('QR01', ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE
                    AnhQR = VALUES(AnhQR),
                    SoTaiKhoan = VALUES(SoTaiKhoan),
                    TenNganHang = VALUES(TenNganHang),
                    ChuTaiKhoan = VALUES(ChuTaiKhoan)
                """, anhQrValue, soTaiKhoan, tenNganHang, chuTaiKhoan);

        return "redirect:/admin/qr-thanh-toan?success";
    }

    @GetMapping("/chon-ghe/{maLichChay}")
    public String chonGhe(@PathVariable String maLichChay,
                          Model model,
                          HttpSession session) {
        if (!isLoggedIn(session)) return "redirect:/login";

        addUserInfo(model, session);

        String username = getUsername(session);

        List<Map<String, Object>> lich = jdbcTemplate.queryForList("""
                SELECT lc.*, tx.MaBenDi, tx.MaBenDen,
                       bdi.TenBenXe AS TenBenDi,
                       bden.TenBenXe AS TenBenDen,
                       x.BienSo, x.HieuXe, x.LoaiXe
                FROM LichChay lc
                LEFT JOIN TuyenXe tx ON lc.MaTuyenXe = tx.MaTuyenXe
                LEFT JOIN BenXe bdi ON tx.MaBenDi = bdi.MaBenXe
                LEFT JOIN BenXe bden ON tx.MaBenDen = bden.MaBenXe
                LEFT JOIN XeKhach x ON lc.MaXe = x.MaXe
                WHERE lc.MaLichChay = ?
                """, maLichChay);

        if (lich.isEmpty()) return "redirect:/mua-ve";

        Object maXe = lich.get(0).get("MaXe");

        List<Map<String, Object>> ghe = jdbcTemplate.queryForList("""
                SELECT g.*,
                       CASE
                           WHEN g.TrangThai = 0
                                OR EXISTS (
                                    SELECT 1
                                    FROM ChiTietGheDat ct
                                    JOIN DatVe dv ON ct.MaDatVe = dv.MaDatVe
                                    WHERE ct.MaGhe = g.MaGhe
                                      AND dv.MaLichChay = ?
                                      AND dv.TrangThai NOT IN ('Đã hủy', 'Hủy', 'Đã hoàn tiền')
                                )
                           THEN 1
                           ELSE 0
                       END AS DaDat
                FROM Ghe g
                WHERE g.MaXe = ?
                ORDER BY g.SoGhe
                """, maLichChay, maXe);

        List<Map<String, Object>> linkedPayments = jdbcTemplate.queryForList("""
                SELECT *
                FROM PhuongThucThanhToanLienKet
                WHERE TenDangNhap = ? AND TrangThai = 'Đã liên kết'
                """, username);

        model.addAttribute("lich", lich.get(0));
        model.addAttribute("ghe", ghe);
        model.addAttribute("linkedPayments", linkedPayments);
        model.addAttribute("hasLinkedPayment", !linkedPayments.isEmpty());
        String maDatVeDuKien = taoMa("DV");
        Map<String, Object> qrConfig = getQrConfig();

        model.addAttribute("maDatVeDuKien", maDatVeDuKien);
        model.addAttribute("qrConfig", qrConfig);
        model.addAttribute("qrContent", "Thanh toan ve xe " + maDatVeDuKien);

        return "chon-ghe";
    }

    @PostMapping("/dat-ve-online")
    public String datVeOnline(@RequestParam String maLichChay,
                              @RequestParam(required = false) List<String> maGhe,
                              @RequestParam String hoTen,
                              @RequestParam String soDienThoai,
                              @RequestParam(required = false) String maGiamGia,
                              @RequestParam(required = false) String maDatVe,
                              @RequestParam String phuongThucThanhToan,
                              Model model,
                              HttpSession session) {
        if (!isLoggedIn(session)) return "redirect:/login";

        addUserInfo(model, session);

        hoTen = normalizeText(hoTen);
        soDienThoai = normalizeText(soDienThoai);

        if (!isValidHoTen(hoTen)) {
            model.addAttribute("error", "Họ tên phải có ít nhất 2 ký tự.");
            return chonGhe(maLichChay, model, session);
        }

        if (!isValidSoDienThoaiVietNam(soDienThoai)) {
            model.addAttribute("error", "Số điện thoại phải gồm 10 chữ số và bắt đầu bằng 03, 05, 07, 08 hoặc 09.");
            return chonGhe(maLichChay, model, session);
        }

        if (maGhe == null || maGhe.isEmpty()) {
            model.addAttribute("error", "Vui lòng chọn ít nhất một ghế.");
            return chonGhe(maLichChay, model, session);
        }

        // Loại bỏ mã ghế bị trùng nếu trình duyệt gửi lặp dữ liệu.
        List<String> danhSachMaGhe = new ArrayList<>(new LinkedHashSet<>(maGhe));

        String username = getUsername(session);

        boolean requiresLinkedPayment =
                phuongThucThanhToan.equals("Thanh toán chuyển khoản bằng liên kết ngân hàng")
                        || phuongThucThanhToan.equals("Thanh toán qua thẻ liên kết");

        if (requiresLinkedPayment) {
            Integer linked = jdbcTemplate.queryForObject("""
                    SELECT COUNT(*)
                    FROM PhuongThucThanhToanLienKet
                    WHERE TenDangNhap = ? AND TrangThai = 'Đã liên kết'
                    """, Integer.class, username);

            if (linked == null || linked == 0) {
                return "redirect:/vi-the?needLink";
            }
        }

        Map<String, Object> lich = jdbcTemplate.queryForMap(
                "SELECT * FROM LichChay WHERE MaLichChay = ?",
                maLichChay
        );

        // Kiểm tra toàn bộ danh sách ghế đã chọn có ghế nào đã được đặt chưa.
        String placeholders = String.join(",", Collections.nCopies(danhSachMaGhe.size(), "?"));
        List<Object> checkParams = new ArrayList<>();
        checkParams.addAll(danhSachMaGhe);
        checkParams.add(maLichChay);

        List<Map<String, Object>> gheDaDat = jdbcTemplate.queryForList("""
                SELECT g.SoGhe
                FROM ChiTietGheDat ct
                JOIN DatVe dv ON ct.MaDatVe = dv.MaDatVe
                JOIN Ghe g ON ct.MaGhe = g.MaGhe
                WHERE ct.MaGhe IN (""" + placeholders + ") " + """
                  AND dv.MaLichChay = ?
                  AND dv.TrangThai NOT IN ('Đã hủy', 'Hủy', 'Đã hoàn tiền')
                """, checkParams.toArray());

        if (!gheDaDat.isEmpty()) {
            String danhSachGheDaDat = gheDaDat.stream()
                    .map(row -> row.get("SoGhe").toString())
                    .reduce((a, b) -> a + ", " + b)
                    .orElse("");

            model.addAttribute("error", "Ghế " + danhSachGheDaDat + " đã được đặt. Vui lòng chọn ghế khác.");
            return chonGhe(maLichChay, model, session);
        }

        BigDecimal giaCoBan = new BigDecimal(lich.get("GiaCoBan").toString());

        BigDecimal tyLeGiam = BigDecimal.ZERO;
        String tenKhuyenMai = "";

        if (maGiamGia != null && !maGiamGia.trim().isEmpty()) {
            List<Map<String, Object>> km = jdbcTemplate.queryForList("""
                    SELECT *
                    FROM KhuyenMai
                    WHERE MaKM = ?
                      AND NOW() BETWEEN NgayBatDau AND NgayKetThuc
                    """, maGiamGia.trim());

            if (!km.isEmpty()) {
                tyLeGiam = new BigDecimal(km.get(0).get("TyLeGiam").toString());
                tenKhuyenMai = km.get(0).get("TenChuongTrinh").toString();
            } else {
                model.addAttribute("error", "Mã giảm giá không hợp lệ hoặc đã hết hạn.");
                return chonGhe(maLichChay, model, session);
            }
        }

        BigDecimal tienGiamMotGhe = giaCoBan.multiply(tyLeGiam).divide(new BigDecimal("100"));
        BigDecimal tongTienMotGhe = giaCoBan.subtract(tienGiamMotGhe);
        BigDecimal tongTien = tongTienMotGhe.multiply(BigDecimal.valueOf(danhSachMaGhe.size()));
        BigDecimal tongTienGiam = tienGiamMotGhe.multiply(BigDecimal.valueOf(danhSachMaGhe.size()));

        String maKhachHang = getMaKhachHang(username);

        if (maKhachHang == null) {
            maKhachHang = taoMa("KH");

            jdbcTemplate.update("""
                    INSERT INTO KhachHang(MaKhachHang, HoTen, SoDienThoai, Email, GhiChu)
                    VALUES (?, ?, ?, ?, ?)
                    """, maKhachHang, hoTen, soDienThoai, username, "Khách hàng đặt vé online");

            jdbcTemplate.update(
                    "UPDATE TaiKhoan SET MaKhachHang = ? WHERE TenDangNhap = ?",
                    maKhachHang,
                    username
            );
        } else {
            jdbcTemplate.update("""
                    UPDATE KhachHang
                    SET HoTen = ?, SoDienThoai = ?, Email = ?
                    WHERE MaKhachHang = ?
                    """, hoTen, soDienThoai, username, maKhachHang);
        }

        if (maDatVe == null || maDatVe.isBlank()) {
            maDatVe = taoMa("DV");
        }

        String noiDungThanhToan = "Thanh toan ve xe " + maDatVe;
        String maThanhToan = taoMa("TT");

        String trangThaiThanhToan;

        if (phuongThucThanhToan.equals("Thanh toán tiền mặt khi lấy vé tại nhà xe")) {
            trangThaiThanhToan = "Chờ thanh toán tại nhà xe";
        } else if (phuongThucThanhToan.equals("Thanh toán qua QR")) {
            trangThaiThanhToan = "Chờ xác nhận QR";
        } else {
            trangThaiThanhToan = "Đã thanh toán tự động";
        }

        jdbcTemplate.update("""
                INSERT INTO DatVe(MaDatVe, MaLichChay, MaKhachHang, MaNhanVien, TongTien, TrangThai)
                VALUES (?, ?, ?, NULL, ?, ?)
                """, maDatVe, maLichChay, maKhachHang, tongTien, "Đã đặt online");

        List<String> tenGheDaDat = new ArrayList<>();

        for (int i = 0; i < danhSachMaGhe.size(); i++) {
            String ghe = danhSachMaGhe.get(i);

            String maChiTiet = "CT"
                    + String.format("%06d", System.currentTimeMillis() % 1000000)
                    + String.format("%02d", i + 1);

            jdbcTemplate.update("""
                    INSERT INTO ChiTietGheDat(MaChiTiet, MaDatVe, MaGhe, MaLoaiVe, GiaVe, TenHanhKhach)
                    VALUES (?, ?, ?, 'LV01', ?, ?)
                    """, maChiTiet, maDatVe, ghe, tongTienMotGhe, hoTen);

            jdbcTemplate.update("""
                    UPDATE Ghe
                    SET TrangThai = 0
                    WHERE MaGhe = ?
                    """, ghe);

            List<Map<String, Object>> tenGhe = jdbcTemplate.queryForList(
                    "SELECT SoGhe FROM Ghe WHERE MaGhe = ?",
                    ghe
            );
            if (!tenGhe.isEmpty()) {
                tenGheDaDat.add(tenGhe.get(0).get("SoGhe").toString());
            }
        }

        jdbcTemplate.update("""
                INSERT INTO ThanhToan(MaThanhToan, MaDatVe, SoTien, PhuongThuc, MaGiaoDich)
                VALUES (?, ?, ?, ?, ?)
                """, maThanhToan, maDatVe, tongTien,
                phuongThucThanhToan + " - " + trangThaiThanhToan,
                "ONLINE-" + maDatVe);

        model.addAttribute("maDatVe", maDatVe);
        model.addAttribute("noiDungThanhToan", noiDungThanhToan);
        model.addAttribute("qrConfig", getQrConfig());
        model.addAttribute("giaGoc", giaCoBan);
        model.addAttribute("tienGiam", tongTienGiam);
        model.addAttribute("tongTien", tongTien);
        model.addAttribute("tenKhuyenMai", tenKhuyenMai);
        model.addAttribute("phuongThucThanhToan", phuongThucThanhToan);
        model.addAttribute("trangThaiThanhToan", trangThaiThanhToan);
        model.addAttribute("soLuongGhe", danhSachMaGhe.size());
        model.addAttribute("danhSachGhe", String.join(", ", tenGheDaDat));
        model.addAttribute("message", "Đặt vé thành công! Mã vé của bạn là " + maDatVe);

        return "dat-ve-thanh-cong";
    }

    @GetMapping("/lich-su-ve")
    public String lichSuVe(Model model, HttpSession session) {
        if (!isLoggedIn(session)) return "redirect:/login";

        addUserInfo(model, session);

        String username = getUsername(session);

        List<Map<String, Object>> ve = jdbcTemplate.queryForList("""
                SELECT dv.MaDatVe,
                       dv.NgayDat,
                       dv.TongTien,
                       dv.TrangThai,
                       kh.HoTen,
                       kh.SoDienThoai,
                       lc.GioKhoiHanh,
                       lc.GioDenDuKien,
                       bdi.TenBenXe AS TenBenDi,
                       bden.TenBenXe AS TenBenDen,
                       x.BienSo,
                       x.HieuXe,
                       GROUP_CONCAT(g.SoGhe ORDER BY g.SoGhe SEPARATOR ', ') AS SoGhe,
                       GROUP_CONCAT(g.SoGhe ORDER BY g.SoGhe SEPARATOR ', ') AS DanhSachGhe,
                       MAX(tt.PhuongThuc) AS PhuongThuc,
                       MAX(yc.MaYeuCau) AS MaYeuCau,
                       MAX(yc.LyDo) AS LyDoHuy,
                       MAX(yc.TrangThai) AS TrangThaiHuy,
                       MAX(yc.PhanHoiAdmin) AS PhanHoiAdmin
                FROM DatVe dv
                LEFT JOIN KhachHang kh ON dv.MaKhachHang = kh.MaKhachHang
                LEFT JOIN TaiKhoan tk ON tk.MaKhachHang = kh.MaKhachHang
                LEFT JOIN LichChay lc ON dv.MaLichChay = lc.MaLichChay
                LEFT JOIN TuyenXe tx ON lc.MaTuyenXe = tx.MaTuyenXe
                LEFT JOIN BenXe bdi ON tx.MaBenDi = bdi.MaBenXe
                LEFT JOIN BenXe bden ON tx.MaBenDen = bden.MaBenXe
                LEFT JOIN XeKhach x ON lc.MaXe = x.MaXe
                LEFT JOIN ChiTietGheDat ct ON dv.MaDatVe = ct.MaDatVe
                LEFT JOIN Ghe g ON ct.MaGhe = g.MaGhe
                LEFT JOIN ThanhToan tt ON dv.MaDatVe = tt.MaDatVe
                LEFT JOIN YeuCauHuyVe yc ON dv.MaDatVe = yc.MaDatVe
                WHERE tk.TenDangNhap = ?
                GROUP BY dv.MaDatVe, dv.NgayDat, dv.TongTien, dv.TrangThai,
                         kh.HoTen, kh.SoDienThoai,
                         lc.GioKhoiHanh, lc.GioDenDuKien,
                         bdi.TenBenXe, bden.TenBenXe,
                         x.BienSo, x.HieuXe
                ORDER BY dv.NgayDat DESC
                """, username);

        model.addAttribute("ve", ve);

        return "lich-su-ve";
    }

    @GetMapping("/yeu-cau-huy-ve/{maDatVe}")
    public String formYeuCauHuyVe(@PathVariable String maDatVe,
                                  Model model,
                                  HttpSession session) {
        if (!isLoggedIn(session)) return "redirect:/login";

        addUserInfo(model, session);

        String username = getUsername(session);

        List<Map<String, Object>> ve = jdbcTemplate.queryForList("""
                SELECT dv.*, kh.HoTen
                FROM DatVe dv
                JOIN KhachHang kh ON dv.MaKhachHang = kh.MaKhachHang
                JOIN TaiKhoan tk ON tk.MaKhachHang = kh.MaKhachHang
                WHERE dv.MaDatVe = ? AND tk.TenDangNhap = ?
                """, maDatVe, username);

        if (ve.isEmpty()) return "redirect:/lich-su-ve";

        model.addAttribute("ve", ve.get(0));

        return "yeu-cau-huy-ve";
    }

    @PostMapping("/yeu-cau-huy-ve")
    public String guiYeuCauHuyVe(@RequestParam String maDatVe,
                                 @RequestParam String lyDo,
                                 HttpSession session) {
        if (!isLoggedIn(session)) return "redirect:/login";

        String username = getUsername(session);

        Integer existed = jdbcTemplate.queryForObject(
                "SELECT COUNT(*) FROM YeuCauHuyVe WHERE MaDatVe = ? AND TrangThai = 'Chờ duyệt'",
                Integer.class,
                maDatVe
        );

        if (existed != null && existed > 0) {
            return "redirect:/lich-su-ve?cancelExists";
        }

        String maYeuCau = taoMa("YC");

        jdbcTemplate.update("""
                INSERT INTO YeuCauHuyVe(MaYeuCau, MaDatVe, TenDangNhap, LyDo, TrangThai)
                VALUES (?, ?, ?, ?, 'Chờ duyệt')
                """, maYeuCau, maDatVe, username, lyDo);

        jdbcTemplate.update(
                "UPDATE DatVe SET TrangThai = 'Yêu cầu hủy' WHERE MaDatVe = ?",
                maDatVe
        );

        return "redirect:/lich-su-ve?cancelRequested";
    }

    @GetMapping("/trang-ca-nhan")
    public String trangCaNhan(Model model, HttpSession session) {
        if (!isLoggedIn(session)) return "redirect:/login";

        addUserInfo(model, session);

        String username = getUsername(session);

        List<Map<String, Object>> profile = jdbcTemplate.queryForList("""
                SELECT tk.TenDangNhap, tk.QuyenHan, kh.*
                FROM TaiKhoan tk
                LEFT JOIN KhachHang kh ON tk.MaKhachHang = kh.MaKhachHang
                WHERE tk.TenDangNhap = ?
                """, username);

        model.addAttribute("profile", profile.isEmpty() ? new HashMap<>() : profile.get(0));

        return "trang-ca-nhan";
    }

    @PostMapping("/trang-ca-nhan")
    public String capNhatTrangCaNhan(@RequestParam String hoTen,
                                     @RequestParam String soDienThoai,
                                     @RequestParam String email,
                                     @RequestParam String cccd,
                                     @RequestParam(required = false) MultipartFile avatarFile,
                                     @RequestParam(required = false) String ngaySinh,
                                     @RequestParam(required = false) String gioiTinh,
                                     HttpSession session) throws IOException {
        if (!isLoggedIn(session)) return "redirect:/login";

        hoTen = normalizeText(hoTen);
        soDienThoai = normalizeText(soDienThoai);
        email = normalizeText(email);
        cccd = normalizeText(cccd);

        if (!isValidHoTen(hoTen)) {
            return "redirect:/trang-ca-nhan?error=hoten";
        }

        if (!isValidSoDienThoaiVietNam(soDienThoai)) {
            return "redirect:/trang-ca-nhan?error=sdt";
        }

        String username = getUsername(session);
        String maKhachHang = getMaKhachHang(username);

        String avatarValue = null;

        if (avatarFile != null && !avatarFile.isEmpty()) {
            avatarValue = saveAvatarFile(avatarFile);
        }

        if (maKhachHang == null) {
            maKhachHang = taoMa("KH");

            String avatarInsert = avatarValue != null ? avatarValue : "/images/default-avatar.png";

            jdbcTemplate.update("""
                    INSERT INTO KhachHang(MaKhachHang, HoTen, SoDienThoai, Email, CCCD, Avatar, NgaySinh, GioiTinh, GhiChu)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """, maKhachHang, hoTen, soDienThoai, email, cccd,
                    avatarInsert, emptyToNull(ngaySinh), gioiTinh,
                    "Cập nhật từ trang cá nhân");

            jdbcTemplate.update(
                    "UPDATE TaiKhoan SET MaKhachHang = ? WHERE TenDangNhap = ?",
                    maKhachHang,
                    username
            );
        } else {
            if (avatarValue != null) {
                jdbcTemplate.update("""
                        UPDATE KhachHang
                        SET HoTen = ?, SoDienThoai = ?, Email = ?, CCCD = ?, Avatar = ?, NgaySinh = ?, GioiTinh = ?
                        WHERE MaKhachHang = ?
                        """, hoTen, soDienThoai, email, cccd,
                        avatarValue, emptyToNull(ngaySinh), gioiTinh,
                        maKhachHang);
            } else {
                jdbcTemplate.update("""
                        UPDATE KhachHang
                        SET HoTen = ?, SoDienThoai = ?, Email = ?, CCCD = ?, NgaySinh = ?, GioiTinh = ?
                        WHERE MaKhachHang = ?
                        """, hoTen, soDienThoai, email, cccd,
                        emptyToNull(ngaySinh), gioiTinh,
                        maKhachHang);
            }
        }

        return "redirect:/trang-ca-nhan?success";
    }

    @GetMapping("/change-language")
    public String changeLanguage(@RequestParam String lang,
                                 @RequestHeader(value = "Referer", required = false) String referer,
                                 HttpSession session) {
        if (!"en".equalsIgnoreCase(lang)) {
            lang = "vi";
        }

        session.setAttribute("lang", lang.toLowerCase());

        if (referer != null && !referer.isBlank()) {
            return "redirect:" + referer;
        }

        return "redirect:/mua-ve";
    }

    @PostMapping("/danh-gia")
    public String guiDanhGia(@RequestParam int soSao,
                             @RequestParam String noiDung,
                             HttpSession session) {
        if (!isLoggedIn(session)) return "redirect:/login";

        String username = getUsername(session);
        String maKhachHang = getMaKhachHang(username);
        String maDanhGia = taoMa("DG");

        jdbcTemplate.update("""
                INSERT INTO DanhGia(MaDanhGia, TenDangNhap, MaKhachHang, SoSao, NoiDung)
                VALUES (?, ?, ?, ?, ?)
                """, maDanhGia, username, maKhachHang, soSao, noiDung);

        return "redirect:/mua-ve#reviews";
    }

    private Object emptyToNull(String value) {
        return value == null || value.isBlank() ? null : value;
    }

    private String taoMa(String prefix) {
        String time = DateTimeFormatter.ofPattern("HHmmssSSS").format(LocalDateTime.now());
        return prefix + time.substring(time.length() - 7);
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

    private String saveQrFile(MultipartFile file) throws IOException {
        String originalName = file.getOriginalFilename();

        if (originalName == null || originalName.isBlank()) {
            originalName = "qr.png";
        }

        String safeName = originalName.replaceAll("[^a-zA-Z0-9._-]", "_");
        String fileName = System.currentTimeMillis() + "_" + safeName;
        byte[] fileBytes = file.getBytes();

        // Lưu vào src để lần sau mở lại project vẫn còn ảnh.
        Path sourceUploadDir = Paths.get("src/main/resources/static/uploads/qr");
        Files.createDirectories(sourceUploadDir);
        Files.write(sourceUploadDir.resolve(fileName), fileBytes);

        // Lưu thêm vào target/classes để app đang chạy có thể hiển thị ảnh ngay sau khi bấm Lưu.
        Path runtimeUploadDir = Paths.get("target/classes/static/uploads/qr");
        Files.createDirectories(runtimeUploadDir);
        Files.write(runtimeUploadDir.resolve(fileName), fileBytes);

        return "/uploads/qr/" + fileName;
    }

}