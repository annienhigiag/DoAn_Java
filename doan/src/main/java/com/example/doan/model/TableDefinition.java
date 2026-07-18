package com.example.doan.model;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.NumberFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;

public class TableDefinition {
    private final String route;
    private final String tableName;
    private final String idColumn;
    private final String title;
    private final List<String> columns;

    private static final Locale VI_LOCALE = new Locale("vi", "VN");
    private static final DateTimeFormatter DATE_TIME_FORMATTER = DateTimeFormatter.ofPattern("HH:mm dd/MM/yyyy");
    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    private static final Map<String, String> COLUMN_LABELS = Map.ofEntries(
            Map.entry("MaXe", "Mã Xe"),
            Map.entry("BienSo", "Biển Số"),
            Map.entry("HieuXe", "Hiệu Xe"),
            Map.entry("SoLuongGhe", "Số Lượng Ghế"),
            Map.entry("LoaiXe", "Loại Xe"),
            Map.entry("TrangThai", "Trạng Thái"),
            Map.entry("MaBenXe", "Mã Bến Xe"),
            Map.entry("TenBenXe", "Tên Bến Xe"),
            Map.entry("DiaChi", "Địa Chỉ"),
            Map.entry("SoDienThoai", "Số Điện Thoại"),
            Map.entry("MaTuyenXe", "Mã Tuyến Xe"),
            Map.entry("MaBenDi", "Mã Bến Đi"),
            Map.entry("MaBenDen", "Mã Bến Đến"),
            Map.entry("QuangDuong", "Quãng Đường"),
            Map.entry("ThoiGianDuKien", "Thời Gian Dự Kiến"),
            Map.entry("MaTaiXe", "Mã Tài Xế"),
            Map.entry("HoTen", "Họ Tên"),
            Map.entry("BangLai", "Bằng Lái"),
            Map.entry("MaGhe", "Mã Ghế"),
            Map.entry("SoGhe", "Số Ghế"),
            Map.entry("ViTri", "Vị Trí"),
            Map.entry("MaLichChay", "Mã Lịch Chạy"),
            Map.entry("GioKhoiHanh", "Giờ Khởi Hành"),
            Map.entry("GioDenDuKien", "Giờ Đến Dự Kiến"),
            Map.entry("GiaCoBan", "Giá Cơ Bản"),
            Map.entry("MaLoaiVe", "Mã Loại Vé"),
            Map.entry("TenLoaiVe", "Tên Loại Vé"),
            Map.entry("HeSoGia", "Hệ Số Giá"),
            Map.entry("MoTa", "Mô Tả"),
            Map.entry("MaKhachHang", "Mã Khách Hàng"),
            Map.entry("Email", "Email"),
            Map.entry("CCCD", "CCCD"),
            Map.entry("Avatar", "Ảnh Đại Diện"),
            Map.entry("NgaySinh", "Ngày Sinh"),
            Map.entry("GioiTinh", "Giới Tính"),
            Map.entry("GhiChu", "Ghi Chú"),
            Map.entry("MaNhanVien", "Mã Nhân Viên"),
            Map.entry("ChucVu", "Chức Vụ"),
            Map.entry("TenDangNhap", "Tên Đăng Nhập"),
            Map.entry("MatKhau", "Mật Khẩu"),
            Map.entry("QuyenHan", "Quyền Hạn"),
            Map.entry("MaDatVe", "Mã Đặt Vé"),
            Map.entry("NgayDat", "Ngày Đặt"),
            Map.entry("TongTien", "Tổng Tiền"),
            Map.entry("MaChiTiet", "Mã Chi Tiết"),
            Map.entry("GiaVe", "Giá Vé"),
            Map.entry("TenHanhKhach", "Tên Hành Khách"),
            Map.entry("MaThanhToan", "Mã Thanh Toán"),
            Map.entry("SoTien", "Số Tiền"),
            Map.entry("PhuongThuc", "Phương Thức"),
            Map.entry("NgayThanhToan", "Ngày Thanh Toán"),
            Map.entry("MaGiaoDich", "Mã Giao Dịch"),
            Map.entry("MaYeuCau", "Mã Yêu Cầu"),
            Map.entry("LyDo", "Lý Do"),
            Map.entry("PhanHoiAdmin", "Phản Hồi Admin"),
            Map.entry("NgayYeuCau", "Ngày Yêu Cầu"),
            Map.entry("NgayXuLy", "Ngày Xử Lý"),
            Map.entry("MaKM", "Mã Khuyến Mãi"),
            Map.entry("TenChuongTrinh", "Tên Chương Trình"),
            Map.entry("TyLeGiam", "Tỷ Lệ Giảm"),
            Map.entry("NgayBatDau", "Ngày Bắt Đầu"),
            Map.entry("NgayKetThuc", "Ngày Kết Thúc")
    );

    public TableDefinition(String route, String tableName, String idColumn, String title, List<String> columns) {
        this.route = route;
        this.tableName = tableName;
        this.idColumn = idColumn;
        this.title = title;
        this.columns = columns;
    }

    public String getRoute() { return route; }
    public String getTableName() { return tableName; }
    public String getIdColumn() { return idColumn; }
    public String getTitle() { return title; }
    public List<String> getColumns() { return columns; }

    public String getColumnLabel(String column) {
        return COLUMN_LABELS.getOrDefault(column, splitCamelCase(column));
    }

    public String formatValue(String column, Object value) {
        if (value == null) return "";

        if ("TrangThai".equals(column)) {
            return formatStatus(value);
        }

        if ("QuangDuong".equals(column)) {
            return formatDecimal(value) + " km";
        }

        if ("ThoiGianDuKien".equals(column)) {
            return formatDuration(value);
        }

        if ("HeSoGia".equals(column)) {
            BigDecimal number = toBigDecimal(value);
            if (number == null) return value.toString();
            return stripZeros(number.multiply(BigDecimal.valueOf(100))) + "%";
        }

        if ("TyLeGiam".equals(column)) {
            BigDecimal number = toBigDecimal(value);
            if (number == null) return value.toString();
            return stripZeros(number) + "%";
        }

        if (isMoneyColumn(column)) {
            return formatVnd(value);
        }

        if (isDateColumn(column) || value instanceof java.sql.Timestamp || value instanceof java.sql.Date) {
            return formatDateTime(value);
        }

        return value.toString();
    }

    private String formatStatus(Object value) {
        String raw = value.toString().trim();

        if ("tai-xe".equals(route) || "nhan-vien".equals(route)) {
            boolean active = raw.equals("1") || raw.equalsIgnoreCase("true") || raw.equalsIgnoreCase("Còn làm");
            boolean inactive = raw.equals("0") || raw.equalsIgnoreCase("false") || raw.equalsIgnoreCase("Đã nghỉ");
            if (active) return "Còn làm";
            if (inactive) return "Đã nghỉ";
        } else if ("ghe".equals(route)) {
            boolean active = raw.equals("1") || raw.equalsIgnoreCase("true") || raw.equalsIgnoreCase("Trống");
            boolean inactive = raw.equals("0") || raw.equalsIgnoreCase("false") || raw.equalsIgnoreCase("Đã đặt");
            if (active) return "Trống";
            if (inactive) return "Đã đặt";
        } else {
            boolean active = raw.equals("1") || raw.equalsIgnoreCase("true") || raw.equalsIgnoreCase("Hoạt động")
                    || raw.equalsIgnoreCase("Đang hoạt động");
            boolean inactive = raw.equals("0") || raw.equalsIgnoreCase("false") || raw.equalsIgnoreCase("Không hoạt động");
            if (active) return "Hoạt động";
            if (inactive) return "Không hoạt động";
        }

        return raw;
    }

    private boolean isMoneyColumn(String column) {
        return List.of("TongTien", "GiaVe", "SoTien", "GiaCoBan").contains(column);
    }

    private boolean isDateColumn(String column) {
        return column.startsWith("Ngay") || column.startsWith("Gio");
    }

    private String formatVnd(Object value) {
        BigDecimal number = toBigDecimal(value);
        if (number == null) return value.toString();
        NumberFormat formatter = NumberFormat.getInstance(VI_LOCALE);
        formatter.setMaximumFractionDigits(0);
        return formatter.format(number) + " VNĐ";
    }

    private String formatDecimal(Object value) {
        BigDecimal number = toBigDecimal(value);
        if (number == null) return value.toString();
        return stripZeros(number);
    }

    private String formatDuration(Object value) {
        BigDecimal number = toBigDecimal(value);
        if (number == null) return value.toString();

        // Dữ liệu ThoiGianDuKien trong SQL của project đang lưu theo đơn vị GIỜ.
        // Vì vậy 30 phải hiển thị là "30 giờ", không đổi sang phút.
        return stripZeros(number) + " giờ";
    }

    private String formatDateTime(Object value) {
        try {
            if (value instanceof java.sql.Timestamp timestamp) {
                return timestamp.toLocalDateTime().format(DATE_TIME_FORMATTER);
            }
            if (value instanceof java.sql.Date sqlDate) {
                return LocalDateTime.of(sqlDate.toLocalDate(), LocalTime.MIDNIGHT).format(DATE_TIME_FORMATTER);
            }
            if (value instanceof Date date) {
                return new java.sql.Timestamp(date.getTime()).toLocalDateTime().format(DATE_TIME_FORMATTER);
            }
            if (value instanceof LocalDateTime dateTime) {
                return dateTime.format(DATE_TIME_FORMATTER);
            }
            if (value instanceof LocalDate date) {
                return LocalDateTime.of(date, LocalTime.MIDNIGHT).format(DATE_TIME_FORMATTER);
            }

            String raw = value.toString().trim().replace('T', ' ');
            if (raw.matches("\\d{4}-\\d{2}-\\d{2}$")) {
                return LocalDate.parse(raw).atStartOfDay().format(DATE_TIME_FORMATTER);
            }
            if (raw.matches("\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}(\\.\\d+)?$")) {
                return LocalDateTime.parse(raw.substring(0, 19), DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"))
                        .format(DATE_TIME_FORMATTER);
            }
            if (raw.matches("\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}$")) {
                return LocalDateTime.parse(raw, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"))
                        .format(DATE_TIME_FORMATTER);
            }
        } catch (Exception ignored) {
        }
        return value.toString();
    }

    private BigDecimal toBigDecimal(Object value) {
        try {
            if (value instanceof BigDecimal bd) return bd;
            if (value instanceof Number number) return BigDecimal.valueOf(number.doubleValue());
            return new BigDecimal(value.toString().trim());
        } catch (Exception ex) {
            return null;
        }
    }

    private String stripZeros(BigDecimal number) {
        DecimalFormatSymbols symbols = new DecimalFormatSymbols(VI_LOCALE);
        DecimalFormat formatter = new DecimalFormat("#,##0.##", symbols);
        return formatter.format(number.stripTrailingZeros());
    }

    private String splitCamelCase(String text) {
        if (text == null || text.isBlank()) return "";
        String withSpaces = text.replaceAll("([a-zà-ỹ])([A-ZÀ-Ỹ])", "$1 $2");
        return withSpaces.substring(0, 1).toUpperCase(VI_LOCALE) + withSpaces.substring(1);
    }
}
