package com.example.doan.service;

import com.example.doan.model.TableDefinition;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Component
public class TableConfig {
    private final Map<String, TableDefinition> tables = new LinkedHashMap<>();

    public TableConfig() {
        add("ben-xe", "BenXe", "MaBenXe", "Quản lý bến xe",
                "MaBenXe", "TenBenXe", "DiaChi", "SoDienThoai");

        add("tuyen-xe", "TuyenXe", "MaTuyenXe", "Quản lý tuyến xe",
                "MaTuyenXe", "MaBenDi", "MaBenDen", "QuangDuong", "ThoiGianDuKien");

        add("xe-khach", "XeKhach", "MaXe", "Quản lý xe khách",
                "MaXe", "BienSo", "HieuXe", "SoLuongGhe", "LoaiXe", "TrangThai");

        add("tai-xe", "TaiXe", "MaTaiXe", "Quản lý tài xế",
                "MaTaiXe", "HoTen", "SoDienThoai", "BangLai", "TrangThai");

        add("ghe", "Ghe", "MaGhe", "Quản lý ghế",
                "MaGhe", "MaXe", "SoGhe", "ViTri", "TrangThai");

        add("lich-chay", "LichChay", "MaLichChay", "Quản lý lịch chạy",
                "MaLichChay", "MaTuyenXe", "MaXe", "MaTaiXe",
                "GioKhoiHanh", "GioDenDuKien", "GiaCoBan", "TrangThai");

        add("loai-ve", "LoaiVe", "MaLoaiVe", "Quản lý loại vé",
                "MaLoaiVe", "TenLoaiVe", "HeSoGia", "MoTa");

        add("khach-hang", "KhachHang", "MaKhachHang", "Quản lý khách hàng",
                "MaKhachHang", "HoTen", "SoDienThoai", "Email", "CCCD",
                "Avatar", "NgaySinh", "GioiTinh", "GhiChu");

        add("nhan-vien", "NhanVien", "MaNhanVien", "Quản lý nhân viên",
                "MaNhanVien", "HoTen", "ChucVu", "SoDienThoai", "Avatar", "TrangThai");

        add("tai-khoan", "TaiKhoan", "TenDangNhap", "Quản lý tài khoản",
                "TenDangNhap", "MaNhanVien", "MaKhachHang", "QuyenHan", "TrangThai");

        add("dat-ve", "DatVe", "MaDatVe", "Quản lý đặt vé",
                "MaDatVe", "MaLichChay", "MaKhachHang", "MaNhanVien",
                "NgayDat", "TongTien", "TrangThai");

        add("chi-tiet-ghe-dat", "ChiTietGheDat", "MaChiTiet", "Chi tiết ghế đặt",
                "MaChiTiet", "MaDatVe", "MaGhe", "MaLoaiVe", "GiaVe", "TenHanhKhach");

        add("thanh-toan", "ThanhToan", "MaThanhToan", "Quản lý thanh toán",
                "MaThanhToan", "MaDatVe", "SoTien", "PhuongThuc", "NgayThanhToan", "MaGiaoDich");

        /*
         * Các bảng HuyVe, SuaVe, HanhKhachPhu, BaoCaoDoanhThu
         * chưa có trong SQL hiện tại nên map sang bảng đang có để không bị lỗi.
         */

        add("huy-ve", "YeuCauHuyVe", "MaYeuCau", "Quản lý hủy vé",
                "MaYeuCau", "MaDatVe", "TenDangNhap", "LyDo",
                "TrangThai", "PhanHoiAdmin", "NgayYeuCau", "NgayXuLy");

        add("sua-ve", "DatVe", "MaDatVe", "Quản lý sửa vé",
                "MaDatVe", "MaLichChay", "MaKhachHang", "MaNhanVien",
                "NgayDat", "TongTien", "TrangThai");

        add("hanh-khach-phu", "ChiTietGheDat", "MaChiTiet", "Quản lý hành khách",
                "MaChiTiet", "MaDatVe", "MaGhe", "MaLoaiVe", "GiaVe", "TenHanhKhach");

        add("khuyen-mai", "KhuyenMai", "MaKM", "Quản lý khuyến mãi",
                "MaKM", "TenChuongTrinh", "TyLeGiam", "NgayBatDau", "NgayKetThuc", "MoTa");

        add("bao-cao-doanh-thu", "ThanhToan", "MaThanhToan", "Báo cáo doanh thu",
                "MaThanhToan", "MaDatVe", "SoTien", "PhuongThuc", "NgayThanhToan", "MaGiaoDich");

        add("yeu-cau-huy-ve", "YeuCauHuyVe", "MaYeuCau", "Yêu cầu hủy vé",
                "MaYeuCau", "MaDatVe", "TenDangNhap", "LyDo",
                "TrangThai", "PhanHoiAdmin", "NgayYeuCau", "NgayXuLy");
    }

    private void add(String route, String tableName, String idColumn, String title, String... columns) {
        tables.put(route, new TableDefinition(route, tableName, idColumn, title, List.of(columns)));
    }

    public Collection<TableDefinition> getAll() {
        return tables.values();
    }

    public TableDefinition getByRoute(String route) {
        TableDefinition table = tables.get(route);

        if (table == null) {
            throw new IllegalArgumentException("Không tìm thấy chức năng: " + route);
        }

        return table;
    }
}