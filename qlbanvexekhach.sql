DROP DATABASE IF EXISTS QLBanVeXeKhach;
CREATE DATABASE QLBanVeXeKhach
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE QLBanVeXeKhach;

-- ============================
-- BẢNG BẾN XE
-- ============================
CREATE TABLE BenXe (
    MaBenXe VARCHAR(10) NOT NULL,
    TenBenXe VARCHAR(150) NOT NULL,
    DiaChi VARCHAR(300),
    SoDienThoai VARCHAR(30),
    NgayTao DATETIME DEFAULT CURRENT_TIMESTAMP,
    NgayCapNhat DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT PK_BenXe PRIMARY KEY (MaBenXe)
);

-- ============================
-- BẢNG TUYẾN XE
-- ============================
CREATE TABLE TuyenXe (
    MaTuyenXe VARCHAR(10) NOT NULL,
    MaBenDi VARCHAR(10) NOT NULL,
    MaBenDen VARCHAR(10) NOT NULL,
    QuangDuong DECIMAL(7,2),
    ThoiGianDuKien INT,
    NgayTao DATETIME DEFAULT CURRENT_TIMESTAMP,
    NgayCapNhat DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT PK_TuyenXe PRIMARY KEY (MaTuyenXe),
    CONSTRAINT FK_TuyenXe_BenDi FOREIGN KEY (MaBenDi) REFERENCES BenXe(MaBenXe),
    CONSTRAINT FK_TuyenXe_BenDen FOREIGN KEY (MaBenDen) REFERENCES BenXe(MaBenXe)
);

-- ============================
-- BẢNG XE KHÁCH
-- ============================
CREATE TABLE XeKhach (
    MaXe VARCHAR(10) NOT NULL,
    BienSo VARCHAR(20) UNIQUE NOT NULL,
    HieuXe VARCHAR(100),
    SoLuongGhe INT NOT NULL,
    LoaiXe VARCHAR(50),
    TrangThai TINYINT DEFAULT 1,
    NgayTao DATETIME DEFAULT CURRENT_TIMESTAMP,
    NgayCapNhat DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT PK_XeKhach PRIMARY KEY (MaXe)
);

-- ============================
-- BẢNG TÀI XẾ
-- ============================
CREATE TABLE TaiXe (
    MaTaiXe VARCHAR(10) NOT NULL,
    HoTen VARCHAR(150) NOT NULL,
    SoDienThoai VARCHAR(30),
    BangLai VARCHAR(50),
    TrangThai TINYINT DEFAULT 1,
    NgayTao DATETIME DEFAULT CURRENT_TIMESTAMP,
    NgayCapNhat DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT PK_TaiXe PRIMARY KEY (MaTaiXe)
);

-- ============================
-- BẢNG GHẾ
-- ============================
CREATE TABLE Ghe (
    MaGhe VARCHAR(10) NOT NULL,
    MaXe VARCHAR(10) NOT NULL,
    SoGhe VARCHAR(10) NOT NULL,
    ViTri VARCHAR(50),
    TrangThai TINYINT DEFAULT 1,
    NgayTao DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_Ghe PRIMARY KEY (MaGhe),
    CONSTRAINT UQ_Ghe UNIQUE (MaXe, SoGhe),
    CONSTRAINT FK_Ghe_Xe FOREIGN KEY (MaXe) REFERENCES XeKhach(MaXe)
);

-- ============================
-- BẢNG LỊCH CHẠY
-- ============================
CREATE TABLE LichChay (
    MaLichChay VARCHAR(10) NOT NULL,
    MaTuyenXe VARCHAR(10) NOT NULL,
    MaXe VARCHAR(10) NOT NULL,
    MaTaiXe VARCHAR(10) NOT NULL,
    GioKhoiHanh DATETIME NOT NULL,
    GioDenDuKien DATETIME,
    GiaCoBan DECIMAL(12,2),
    TrangThai VARCHAR(50) DEFAULT 'Đang hoạt động',
    NgayTao DATETIME DEFAULT CURRENT_TIMESTAMP,
    NgayCapNhat DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT PK_LichChay PRIMARY KEY (MaLichChay),
    CONSTRAINT FK_LichChay_TuyenXe FOREIGN KEY (MaTuyenXe) REFERENCES TuyenXe(MaTuyenXe),
    CONSTRAINT FK_LichChay_Xe FOREIGN KEY (MaXe) REFERENCES XeKhach(MaXe),
    CONSTRAINT FK_LichChay_TaiXe FOREIGN KEY (MaTaiXe) REFERENCES TaiXe(MaTaiXe)
);

-- ============================
-- BẢNG LOẠI VÉ
-- ============================
CREATE TABLE LoaiVe (
    MaLoaiVe VARCHAR(10) NOT NULL,
    TenLoaiVe VARCHAR(50) NOT NULL,
    HeSoGia DECIMAL(6,4) DEFAULT 1.0,
    MoTa VARCHAR(200),
    CONSTRAINT PK_LoaiVe PRIMARY KEY (MaLoaiVe)
);

-- ============================
-- BẢNG KHÁCH HÀNG
-- ============================
CREATE TABLE KhachHang (
    MaKhachHang VARCHAR(10) NOT NULL,
    HoTen VARCHAR(150) NOT NULL,
    SoDienThoai VARCHAR(30),
    Email VARCHAR(150),
    CCCD VARCHAR(50),
    Avatar VARCHAR(500) DEFAULT '/images/default-avatar.png',
    NgaySinh DATE,
    GioiTinh VARCHAR(20) DEFAULT 'Nam',
    GhiChu TEXT,
    NgayTao DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_KhachHang PRIMARY KEY (MaKhachHang)
);

-- ============================
-- BẢNG NHÂN VIÊN
-- ============================
CREATE TABLE NhanVien (
    MaNhanVien VARCHAR(10) NOT NULL,
    HoTen VARCHAR(150) NOT NULL,
    ChucVu VARCHAR(50),
    SoDienThoai VARCHAR(30),
    Avatar VARCHAR(500) DEFAULT '/images/default-avatar.png',
    TrangThai TINYINT DEFAULT 1,
    NgayTao DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_NhanVien PRIMARY KEY (MaNhanVien)
);


-- ============================
-- BẢNG KHUYẾN MÃI
-- ============================
CREATE TABLE KhuyenMai (
    MaKM VARCHAR(10) NOT NULL,
    TenChuongTrinh VARCHAR(150),
    TyLeGiam DECIMAL(5,2),
    NgayBatDau DATETIME,
    NgayKetThuc DATETIME,
    MoTa VARCHAR(300),
    CONSTRAINT PK_KhuyenMai PRIMARY KEY (MaKM)
);

-- ============================
-- BẢNG TÀI KHOẢN
-- ============================
CREATE TABLE TaiKhoan (
    TenDangNhap VARCHAR(50) NOT NULL,
    MatKhau VARCHAR(100) NOT NULL,
    MaNhanVien VARCHAR(10),
    MaKhachHang VARCHAR(10),
    QuyenHan VARCHAR(50) DEFAULT 'USER',
    TrangThai VARCHAR(50) DEFAULT 'Hoạt động',
    NgayTao DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_TaiKhoan PRIMARY KEY (TenDangNhap),
    CONSTRAINT FK_TaiKhoan_NhanVien FOREIGN KEY (MaNhanVien) REFERENCES NhanVien(MaNhanVien),
    CONSTRAINT FK_TaiKhoan_KhachHang FOREIGN KEY (MaKhachHang) REFERENCES KhachHang(MaKhachHang)
);

-- ============================
-- BẢNG ƯU ĐÃI CỦA TÔI
-- ============================
CREATE TABLE UuDaiCuaToi (
    MaUuDai VARCHAR(10) NOT NULL,
    TenDangNhap VARCHAR(50) NOT NULL,
    MaKM VARCHAR(10) NOT NULL,
    TrangThai VARCHAR(50) DEFAULT 'Đã lưu',
    NgayLuu DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_UuDaiCuaToi PRIMARY KEY (MaUuDai),
    CONSTRAINT FK_UDCT_TaiKhoan FOREIGN KEY (TenDangNhap) REFERENCES TaiKhoan(TenDangNhap),
    CONSTRAINT FK_UDCT_KhuyenMai FOREIGN KEY (MaKM) REFERENCES KhuyenMai(MaKM),
    CONSTRAINT UQ_UDCT UNIQUE (TenDangNhap, MaKM)
);

-- ============================
-- BẢNG PHƯƠNG THỨC THANH TOÁN LIÊN KẾT
-- ============================
CREATE TABLE PhuongThucThanhToanLienKet (
    MaLienKet VARCHAR(10) NOT NULL,
    TenDangNhap VARCHAR(50) NOT NULL,
    LoaiPhuongThuc VARCHAR(100) NOT NULL,
    NganHang VARCHAR(150) NULL,
    TenChuTaiKhoan VARCHAR(150) NOT NULL,
    SoTaiKhoan VARCHAR(100) NOT NULL,
    TrangThai VARCHAR(50) DEFAULT 'Đã liên kết',
    NgayLienKet DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_PTTTLK PRIMARY KEY (MaLienKet),
    CONSTRAINT FK_PTTTLK_TaiKhoan FOREIGN KEY (TenDangNhap) REFERENCES TaiKhoan(TenDangNhap)
);

-- ============================
-- BẢNG ĐẶT VÉ
-- ============================
CREATE TABLE DatVe (
    MaDatVe VARCHAR(10) NOT NULL,
    MaLichChay VARCHAR(10) NOT NULL,
    MaKhachHang VARCHAR(10),
    MaNhanVien VARCHAR(10),
    NgayDat DATETIME DEFAULT CURRENT_TIMESTAMP,
    TongTien DECIMAL(12,2),
    TrangThai VARCHAR(50) DEFAULT 'Đã đặt',
    NgayCapNhat DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT PK_DatVe PRIMARY KEY (MaDatVe),
    CONSTRAINT FK_DatVe_LichChay FOREIGN KEY (MaLichChay) REFERENCES LichChay(MaLichChay),
    CONSTRAINT FK_DatVe_KhachHang FOREIGN KEY (MaKhachHang) REFERENCES KhachHang(MaKhachHang),
    CONSTRAINT FK_DatVe_NhanVien FOREIGN KEY (MaNhanVien) REFERENCES NhanVien(MaNhanVien)
);

-- ============================
-- CHI TIẾT GHẾ ĐẶT
-- ============================
CREATE TABLE ChiTietGheDat (
    MaChiTiet VARCHAR(10) NOT NULL,
    MaDatVe VARCHAR(10) NOT NULL,
    MaGhe VARCHAR(10) NOT NULL,
    MaLoaiVe VARCHAR(10) NOT NULL,
    GiaVe DECIMAL(12,2),
    TenHanhKhach VARCHAR(150),
    CONSTRAINT PK_ChiTietGheDat PRIMARY KEY (MaChiTiet),
    CONSTRAINT FK_CTGD_DatVe FOREIGN KEY (MaDatVe) REFERENCES DatVe(MaDatVe),
    CONSTRAINT FK_CTGD_Ghe FOREIGN KEY (MaGhe) REFERENCES Ghe(MaGhe),
    CONSTRAINT FK_CTGD_LoaiVe FOREIGN KEY (MaLoaiVe) REFERENCES LoaiVe(MaLoaiVe)
);

-- ============================
-- THANH TOÁN
-- ============================
CREATE TABLE ThanhToan (
    MaThanhToan VARCHAR(10) NOT NULL,
    MaDatVe VARCHAR(10) NOT NULL,
    SoTien DECIMAL(12,2),
    PhuongThuc VARCHAR(150),
    NgayThanhToan DATETIME DEFAULT CURRENT_TIMESTAMP,
    MaGiaoDich VARCHAR(100),
    CONSTRAINT PK_ThanhToan PRIMARY KEY (MaThanhToan),
    CONSTRAINT FK_ThanhToan_DatVe FOREIGN KEY (MaDatVe) REFERENCES DatVe(MaDatVe)
);

-- ============================
-- YÊU CẦU HỦY VÉ
-- ============================
CREATE TABLE YeuCauHuyVe (
    MaYeuCau VARCHAR(10) NOT NULL,
    MaDatVe VARCHAR(10) NOT NULL,
    TenDangNhap VARCHAR(50) NOT NULL,
    LyDo TEXT NOT NULL,
    TrangThai VARCHAR(50) DEFAULT 'Chờ duyệt',
    PhanHoiAdmin TEXT,
    NgayYeuCau DATETIME DEFAULT CURRENT_TIMESTAMP,
    NgayXuLy DATETIME NULL,
    CONSTRAINT PK_YeuCauHuyVe PRIMARY KEY (MaYeuCau),
    CONSTRAINT FK_YCHV_DatVe FOREIGN KEY (MaDatVe) REFERENCES DatVe(MaDatVe),
    CONSTRAINT FK_YCHV_TaiKhoan FOREIGN KEY (TenDangNhap) REFERENCES TaiKhoan(TenDangNhap)
);

-- ============================
-- ĐÁNH GIÁ
-- ============================
CREATE TABLE IF NOT EXISTS DanhGia (
    MaDanhGia VARCHAR(10) NOT NULL,
    TenDangNhap VARCHAR(50) NOT NULL,
    MaKhachHang VARCHAR(10),
    SoSao INT NOT NULL,
    NoiDung TEXT,
    NgayDanhGia DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_DanhGia PRIMARY KEY (MaDanhGia),
    CONSTRAINT FK_DanhGia_TaiKhoan FOREIGN KEY (TenDangNhap) REFERENCES TaiKhoan(TenDangNhap),
    CONSTRAINT FK_DanhGia_KhachHang FOREIGN KEY (MaKhachHang) REFERENCES KhachHang(MaKhachHang),
    CONSTRAINT CK_DanhGia_SoSao CHECK (SoSao BETWEEN 1 AND 5)
);

-- ============================
-- CẤU HÌNH QR THANH TOÁN
-- ============================
CREATE TABLE CauHinhThanhToan (
    MaCauHinh VARCHAR(10) NOT NULL,
    AnhQR VARCHAR(500),
    SoTaiKhoan VARCHAR(50),
    TenNganHang VARCHAR(100),
    ChuTaiKhoan VARCHAR(150),
    NgayCapNhat DATETIME DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT PK_CauHinhThanhToan
    PRIMARY KEY (MaCauHinh)
);


-- ============================
-- DỮ LIỆU MẪU
-- ============================
INSERT INTO BenXe VALUES
('BX01','Bến xe Miền Đông','TP.HCM','028123456','2026-01-05 08:00:00','2026-01-05 14:00:00'),
('BX02','Bến xe Miền Tây','TP.HCM','028654321','2026-01-05 20:00:00','2026-01-06 02:00:00'),
('BX03','Bến xe Đà Nẵng','Đà Nẵng','0236123456','2026-01-06 08:00:00','2026-01-06 14:00:00'),
('BX04','Bến xe Hà Nội','Hà Nội','0241234567','2026-01-06 20:00:00','2026-01-07 02:00:00'),
('BX05','Bến xe Đà Lạt','Lâm Đồng','0263388888','2026-01-07 08:00:00','2026-01-07 14:00:00'),
('BX06','Bến xe Nha Trang','Khánh Hòa','0258388888','2026-01-07 20:00:00','2026-01-08 02:00:00'),
('BX07','Bến xe Cần Thơ','Cần Thơ','0292388888','2026-01-08 08:00:00','2026-01-08 14:00:00'),
('BX08','Bến xe Quy Nhơn','Bình Định','0256388888','2026-01-08 20:00:00','2026-01-09 02:00:00'),
('BX09','Bến xe Huế','Thừa Thiên Huế','0234388888','2026-01-09 08:00:00','2026-01-09 14:00:00'),
('BX10','Bến xe Vũng Tàu','Bà Rịa - Vũng Tàu','0254388888','2026-01-09 20:00:00','2026-01-10 02:00:00');

INSERT INTO TuyenXe VALUES
('TX01','BX01','BX04',1700,30,'2026-01-08 09:00:00','2026-01-08 15:00:00'),
('TX02','BX02','BX03',950,18,'2026-01-08 21:00:00','2026-01-09 03:00:00'),
('TX03','BX03','BX04',800,14,'2026-01-09 09:00:00','2026-01-09 15:00:00'),
('TX04','BX01','BX05',310,7,'2026-01-09 21:00:00','2026-01-10 03:00:00'),
('TX05','BX01','BX06',430,9,'2026-01-10 09:00:00','2026-01-10 15:00:00'),
('TX06','BX02','BX07',170,4,'2026-01-10 21:00:00','2026-01-11 03:00:00'),
('TX07','BX03','BX09',100,3,'2026-01-11 09:00:00','2026-01-11 15:00:00'),
('TX08','BX04','BX09',670,12,'2026-01-11 21:00:00','2026-01-12 03:00:00'),
('TX09','BX01','BX10',95,3,'2026-01-12 09:00:00','2026-01-12 15:00:00'),
('TX10','BX06','BX08',220,5,'2026-01-12 21:00:00','2026-01-13 03:00:00'),
('TX11','BX07','BX01',170,4,'2026-01-13 09:00:00','2026-01-13 15:00:00'),
('TX12','BX05','BX06',140,4,'2026-01-13 21:00:00','2026-01-14 03:00:00');

INSERT INTO XeKhach VALUES
('X01','51A-12345','Ford Transit',16,'Limousine',1,'2026-01-12 10:00:00','2026-01-12 16:00:00'),
('X02','51B-54321','Hyundai Universe',45,'Giường nằm',1,'2026-01-12 22:00:00','2026-01-13 04:00:00'),
('X03','43C-77777','Kia County',30,'Thường',1,'2026-01-13 10:00:00','2026-01-13 16:00:00'),
('X04','51C-88888','Thaco Mobihome',34,'Giường nằm VIP',1,'2026-01-13 22:00:00','2026-01-14 04:00:00'),
('X05','51D-24680','Mercedes Sprinter',16,'Limousine',1,'2026-01-14 10:00:00','2026-01-14 16:00:00'),
('X06','65A-13579','Hyundai Solati',16,'Limousine',1,'2026-01-14 22:00:00','2026-01-15 04:00:00'),
('X07','79B-11223','Samco Felix',29,'Ghế ngồi',1,'2026-01-15 10:00:00','2026-01-15 16:00:00'),
('X08','77C-33445','Thaco Town',34,'Giường nằm',1,'2026-01-15 22:00:00','2026-01-16 04:00:00');

INSERT INTO TaiXe VALUES
('TXE01','Nguyễn Văn A','0909123456','D',1,'2026-01-15 08:30:00','2026-01-15 14:30:00'),
('TXE02','Trần Văn B','0909234567','E',1,'2026-01-15 20:30:00','2026-01-16 02:30:00'),
('TXE03','Lê Văn C','0909345678','D',1,'2026-01-16 08:30:00','2026-01-16 14:30:00'),
('TXE04','Phạm Minh Đức','0911111111','E',1,'2026-01-16 20:30:00','2026-01-17 02:30:00'),
('TXE05','Võ Quốc Huy','0922222222','D',1,'2026-01-17 08:30:00','2026-01-17 14:30:00'),
('TXE06','Đặng Hoàng Nam','0933333333','E',1,'2026-01-17 20:30:00','2026-01-18 02:30:00'),
('TXE07','Bùi Anh Tuấn','0944444444','D',1,'2026-01-18 08:30:00','2026-01-18 14:30:00'),
('TXE08','Hồ Thanh Sơn','0955555555','E',1,'2026-01-18 20:30:00','2026-01-19 02:30:00');

INSERT INTO Ghe VALUES
('G001','X01','1A','Trái',1,'2026-01-18 07:00:00'),
('G002','X01','1B','Phải',1,'2026-01-18 13:00:00'),
('G003','X01','2A','Trái',1,'2026-01-18 19:00:00'),
('G004','X01','2B','Phải',1,'2026-01-19 01:00:00'),
('G005','X01','3A','Trái',1,'2026-01-19 07:00:00'),
('G006','X01','3B','Phải',1,'2026-01-19 13:00:00'),
('G007','X01','4A','Trái',1,'2026-01-19 19:00:00'),
('G008','X01','4B','Phải',1,'2026-01-20 01:00:00'),
('G009','X01','5A','Trái',1,'2026-01-20 07:00:00'),
('G010','X01','5B','Phải',1,'2026-01-20 13:00:00'),
('G011','X01','6A','Trái',1,'2026-01-20 19:00:00'),
('G012','X01','6B','Phải',1,'2026-01-21 01:00:00'),
('G013','X02','A01','Trái',1,'2026-01-21 07:00:00'),
('G014','X02','A02','Phải',1,'2026-01-21 13:00:00'),
('G015','X02','A03','Trái',1,'2026-01-21 19:00:00'),
('G016','X02','A04','Phải',1,'2026-01-22 01:00:00'),
('G017','X02','A05','Trái',1,'2026-01-22 07:00:00'),
('G018','X02','A06','Phải',1,'2026-01-22 13:00:00'),
('G019','X02','B01','Trái',1,'2026-01-22 19:00:00'),
('G020','X02','B02','Phải',1,'2026-01-23 01:00:00'),
('G021','X02','B03','Trái',1,'2026-01-23 07:00:00'),
('G022','X02','B04','Phải',1,'2026-01-23 13:00:00'),
('G023','X02','B05','Trái',1,'2026-01-23 19:00:00'),
('G024','X02','B06','Phải',1,'2026-01-24 01:00:00'),
('G025','X03','01','Trái',1,'2026-01-24 07:00:00'),
('G026','X03','02','Phải',1,'2026-01-24 13:00:00'),
('G027','X03','03','Trái',1,'2026-01-24 19:00:00'),
('G028','X03','04','Phải',1,'2026-01-25 01:00:00'),
('G029','X03','05','Trái',1,'2026-01-25 07:00:00'),
('G030','X03','06','Phải',1,'2026-01-25 13:00:00'),
('G031','X03','07','Trái',1,'2026-01-25 19:00:00'),
('G032','X03','08','Phải',1,'2026-01-26 01:00:00'),
('G033','X03','09','Trái',1,'2026-01-26 07:00:00'),
('G034','X03','10','Phải',1,'2026-01-26 13:00:00'),
('G035','X04','VIP01','Trái',1,'2026-01-26 19:00:00'),
('G036','X04','VIP02','Phải',1,'2026-01-27 01:00:00'),
('G037','X04','VIP03','Trái',1,'2026-01-27 07:00:00'),
('G038','X04','VIP04','Phải',1,'2026-01-27 13:00:00'),
('G039','X04','VIP05','Trái',1,'2026-01-27 19:00:00'),
('G040','X04','VIP06','Phải',1,'2026-01-28 01:00:00'),
('G041','X04','VIP07','Trái',1,'2026-01-28 07:00:00'),
('G042','X04','VIP08','Phải',1,'2026-01-28 13:00:00'),
('G043','X04','VIP09','Trái',1,'2026-01-28 19:00:00'),
('G044','X04','VIP10','Phải',1,'2026-01-29 01:00:00'),
('G045','X05','1A','Trái',1,'2026-01-29 07:00:00'),
('G046','X05','1B','Phải',1,'2026-01-29 13:00:00'),
('G047','X05','2A','Trái',1,'2026-01-29 19:00:00'),
('G048','X05','2B','Phải',1,'2026-01-30 01:00:00'),
('G049','X05','3A','Trái',1,'2026-01-30 07:00:00'),
('G050','X05','3B','Phải',1,'2026-01-30 13:00:00'),
('G051','X05','4A','Trái',1,'2026-01-30 19:00:00'),
('G052','X05','4B','Phải',1,'2026-01-31 01:00:00'),
('G053','X06','1A','Trái',1,'2026-01-31 07:00:00'),
('G054','X06','1B','Phải',1,'2026-01-31 13:00:00'),
('G055','X06','2A','Trái',1,'2026-01-31 19:00:00'),
('G056','X06','2B','Phải',1,'2026-02-01 01:00:00'),
('G057','X06','3A','Trái',1,'2026-02-01 07:00:00'),
('G058','X06','3B','Phải',1,'2026-02-01 13:00:00'),
('G059','X06','4A','Trái',1,'2026-02-01 19:00:00'),
('G060','X06','4B','Phải',1,'2026-02-02 01:00:00'),
('G061','X07','01','Trái',1,'2026-02-02 07:00:00'),
('G062','X07','02','Phải',1,'2026-02-02 13:00:00'),
('G063','X07','03','Trái',1,'2026-02-02 19:00:00'),
('G064','X07','04','Phải',1,'2026-02-03 01:00:00'),
('G065','X07','05','Trái',1,'2026-02-03 07:00:00'),
('G066','X07','06','Phải',1,'2026-02-03 13:00:00'),
('G067','X07','07','Trái',1,'2026-02-03 19:00:00'),
('G068','X07','08','Phải',1,'2026-02-04 01:00:00'),
('G069','X08','A01','Trái',1,'2026-02-04 07:00:00'),
('G070','X08','A02','Phải',1,'2026-02-04 13:00:00'),
('G071','X08','A03','Trái',1,'2026-02-04 19:00:00'),
('G072','X08','A04','Phải',1,'2026-02-05 01:00:00'),
('G073','X08','B01','Trái',1,'2026-02-05 07:00:00'),
('G074','X08','B02','Phải',1,'2026-02-05 13:00:00'),
('G075','X08','B03','Trái',1,'2026-02-05 19:00:00'),
('G076','X08','B04','Phải',1,'2026-02-06 01:00:00');

INSERT INTO LichChay VALUES
('LC01','TX01','X01','TXE01','2026-06-10 08:00:00','2026-06-11 14:00:00',500000,'Đang hoạt động','2026-02-01 09:00:00','2026-02-01 15:00:00'),
('LC02','TX02','X02','TXE02','2026-06-11 06:00:00','2026-06-11 22:00:00',300000,'Đang hoạt động','2026-02-01 21:00:00','2026-02-02 03:00:00'),
('LC03','TX03','X03','TXE03','2026-06-12 07:30:00','2026-06-12 22:00:00',350000,'Đang hoạt động','2026-02-02 09:00:00','2026-02-02 15:00:00'),
('LC04','TX04','X04','TXE04','2026-06-13 05:30:00','2026-06-13 12:30:00',280000,'Đang hoạt động','2026-02-02 21:00:00','2026-02-03 03:00:00'),
('LC05','TX05','X05','TXE05','2026-06-13 21:00:00','2026-06-14 06:00:00',320000,'Đang hoạt động','2026-02-03 09:00:00','2026-02-03 15:00:00'),
('LC06','TX06','X06','TXE06','2026-06-14 09:00:00','2026-06-14 13:00:00',160000,'Đang hoạt động','2026-02-03 21:00:00','2026-02-04 03:00:00'),
('LC07','TX07','X07','TXE07','2026-06-14 14:00:00','2026-06-14 17:00:00',120000,'Đang hoạt động','2026-02-04 09:00:00','2026-02-04 15:00:00'),
('LC08','TX08','X08','TXE08','2026-06-15 07:00:00','2026-06-15 19:00:00',420000,'Đang hoạt động','2026-02-04 21:00:00','2026-02-05 03:00:00'),
('LC09','TX09','X01','TXE02','2026-06-16 06:30:00','2026-06-16 09:30:00',110000,'Đang hoạt động','2026-02-05 09:00:00','2026-02-05 15:00:00'),
('LC10','TX10','X03','TXE04','2026-06-16 13:00:00','2026-06-16 18:00:00',180000,'Đang hoạt động','2026-02-05 21:00:00','2026-02-06 03:00:00'),
('LC11','TX11','X06','TXE06','2026-06-17 08:00:00','2026-06-17 12:00:00',150000,'Đang hoạt động','2026-02-06 09:00:00','2026-02-06 15:00:00'),
('LC12','TX12','X05','TXE05','2026-06-17 10:00:00','2026-06-17 14:00:00',170000,'Đang hoạt động','2026-02-06 21:00:00','2026-02-07 03:00:00');

INSERT INTO LoaiVe VALUES
('LV01','Vé thường',1.0,'Không ưu tiên'),
('LV02','Vé VIP',1.5,'Ghế rộng hơn'),
('LV03','Vé trẻ em',0.7,'Áp dụng cho trẻ em'),
('LV04','Vé sinh viên',0.85,'Ưu đãi sinh viên'),
('LV05','Vé người cao tuổi',0.8,'Ưu đãi người cao tuổi');

INSERT INTO KhachHang VALUES
('KH01','Trần Đình Thảo','0912345678','trdinhthao@gmail.com','123456789','https://i.pravatar.cc/150?img=47','2005-09-12','Nữ','Khách VIP','2026-02-05 10:00:00'),
('KH02','Lê Hồng Nhung','0923456789','nhung@gmail.com','987654321','https://i.pravatar.cc/150?img=32','2004-11-20','Nữ','Khách thường','2026-02-05 16:00:00'),
('KH03','Nguyễn Minh Anh','0901000003','minhanh@gmail.com','111222333','/images/default-avatar.png','2003-02-15','Nữ','Khách online','2026-02-05 22:00:00'),
('KH04','Trần Quốc Bảo','0901000004','quocbao@gmail.com','222333444','/images/default-avatar.png','2002-03-18','Nam','Khách online','2026-02-06 04:00:00'),
('KH05','Phạm Thảo Vy','0901000005','thaovy@gmail.com','333444555','/images/default-avatar.png','2004-07-09','Nữ','Khách online','2026-02-06 10:00:00'),
('KH06','Võ Đức Anh','0901000006','ducanh@gmail.com','444555666','/images/default-avatar.png','2001-12-01','Nam','Khách online','2026-02-06 16:00:00'),
('KH07','Đặng Gia Hân','0901000007','giahan@gmail.com','555666777','/images/default-avatar.png','2005-05-22','Nữ','Khách online','2026-02-06 22:00:00'),
('KH08','Bùi Nhật Minh','0901000008','nhatminh@gmail.com','666777888','/images/default-avatar.png','2000-10-30','Nam','Khách online','2026-02-07 04:00:00'),
('KH09','Hồ Thanh Trúc','0901000009','thanhtruc@gmail.com','777888999','/images/default-avatar.png','2006-01-19','Nữ','Khách online','2026-02-07 10:00:00'),
('KH10','Đỗ Hoàng Phúc','0901000010','hoangphuc@gmail.com','888999000','/images/default-avatar.png','1999-08-11','Nam','Khách online','2026-02-07 16:00:00');

INSERT INTO NhanVien VALUES
('NV01','Ngô Văn Long','Bán vé','0932123456','https://i.pravatar.cc/150?img=12',1,'2026-02-08 08:00:00'),
('NV02','Trịnh Thu Hà','Quản lý','0987654321','https://i.pravatar.cc/150?img=15',1,'2026-02-08 14:00:00'),
('NV03','Mai Anh Khoa','Bán vé','0977000003','/images/default-avatar.png',1,'2026-02-08 20:00:00'),
('NV04','Nguyễn Thị Mai','Chăm sóc khách hàng','0977000004','/images/default-avatar.png',1,'2026-02-09 02:00:00'),
('NV05','Lê Trung Kiên','Điều phối xe','0977000005','/images/default-avatar.png',1,'2026-02-09 08:00:00');

INSERT INTO KhuyenMai (MaKM, TenChuongTrinh, TyLeGiam, NgayBatDau, NgayKetThuc, MoTa) VALUES
('KM01','Giảm 10% đặt vé online',10,'2026-01-01','2026-12-31','Áp dụng mã KM01 khi đặt vé online'),
('KM02','Giảm 5% khách hàng mới',5,'2026-01-01','2026-12-31','Áp dụng mã KM02 cho khách hàng mới'),
('KM03','Ưu đãi ví điện tử',15,'2026-01-01','2026-12-31','Giảm 15% khi thanh toán qua ví hoặc QR'),
('KM04','Ưu đãi liên kết ngân hàng',8,'2026-01-01','2026-12-31','Giảm 8% khi thanh toán bằng ngân hàng liên kết'),
('KM05','Ưu đãi cuối tuần',12,'2026-01-01','2026-12-31','Giảm 12% cho chuyến đi cuối tuần'),
('KM06','Ưu đãi tuyến dài',20,'2026-01-01','2026-12-31','Giảm 20% cho tuyến đường trên 800km'),
('KM07','Ưu đãi sinh viên',10,'2026-01-01','2026-12-31','Giảm thêm cho khách hàng sinh viên');

INSERT INTO TaiKhoan VALUES
('admin','$2a$10$KcpFRkUzbsDc3RqZCHhGQeA.AbJisT8S8hM6qPGnl0t3IH7aDv2/C','NV01',NULL,'ADMIN','Hoạt động','2026-02-12 09:00:00'),
('nhanvien1','$2a$10$KcpFRkUzbsDc3RqZCHhGQeA.AbJisT8S8hM6qPGnl0t3IH7aDv2/C','NV02',NULL,'NHANVIEN','Hoạt động','2026-02-12 15:00:00'),
('nhanvien2','$2a$10$KcpFRkUzbsDc3RqZCHhGQeA.AbJisT8S8hM6qPGnl0t3IH7aDv2/C','NV03',NULL,'NHANVIEN','Hoạt động','2026-02-12 21:00:00'),
('nhanvien3','$2a$10$KcpFRkUzbsDc3RqZCHhGQeA.AbJisT8S8hM6qPGnl0t3IH7aDv2/C','NV04',NULL,'NHANVIEN','Hoạt động','2026-02-13 03:00:00'),
('user','$2a$10$KcpFRkUzbsDc3RqZCHhGQeA.AbJisT8S8hM6qPGnl0t3IH7aDv2/C',NULL,'KH01','USER','Hoạt động','2026-02-13 09:00:00'),
('user2','$2a$10$KcpFRkUzbsDc3RqZCHhGQeA.AbJisT8S8hM6qPGnl0t3IH7aDv2/C',NULL,'KH02','USER','Hoạt động','2026-02-13 15:00:00'),
('user3','$2a$10$KcpFRkUzbsDc3RqZCHhGQeA.AbJisT8S8hM6qPGnl0t3IH7aDv2/C',NULL,'KH03','USER','Hoạt động','2026-02-13 21:00:00'),
('user4','$2a$10$KcpFRkUzbsDc3RqZCHhGQeA.AbJisT8S8hM6qPGnl0t3IH7aDv2/C',NULL,'KH04','USER','Hoạt động','2026-02-14 03:00:00'),
('user5','$2a$10$KcpFRkUzbsDc3RqZCHhGQeA.AbJisT8S8hM6qPGnl0t3IH7aDv2/C',NULL,'KH05','USER','Hoạt động','2026-02-14 09:00:00'),
('user6','$2a$10$KcpFRkUzbsDc3RqZCHhGQeA.AbJisT8S8hM6qPGnl0t3IH7aDv2/C',NULL,'KH06','USER','Hoạt động','2026-02-14 15:00:00'),
('user7','$2a$10$KcpFRkUzbsDc3RqZCHhGQeA.AbJisT8S8hM6qPGnl0t3IH7aDv2/C',NULL,'KH07','USER','Hoạt động','2026-02-14 21:00:00');

INSERT INTO UuDaiCuaToi (MaUuDai, TenDangNhap, MaKM, TrangThai) VALUES
('UD01','user','KM01','Đã lưu'),
('UD02','user','KM03','Đã lưu'),
('UD03','user2','KM02','Đã lưu'),
('UD04','user3','KM05','Đã lưu'),
('UD05','user4','KM04','Đã lưu'),
('UD06','user5','KM07','Đã lưu');

INSERT INTO PhuongThucThanhToanLienKet
(MaLienKet, TenDangNhap, LoaiPhuongThuc, NganHang, TenChuTaiKhoan, SoTaiKhoan, TrangThai) VALUES
('LK01','user','Liên kết ngân hàng','Vietcombank','Trần Đình Thảo','9704000012345678','Đã liên kết'),
('LK02','user','Thẻ liên kết',NULL,'Trần Đình Thảo','**** **** **** 1258','Đã liên kết'),
('LK03','user2','Liên kết ngân hàng','BIDV','Lê Hồng Nhung','9704000098765432','Đã liên kết'),
('LK04','user3','Thẻ liên kết',NULL,'Nguyễn Minh Anh','**** **** **** 2222','Đã liên kết'),
('LK05','user4','Liên kết ngân hàng','MB Bank','Trần Quốc Bảo','9704000011112222','Đã liên kết');

INSERT INTO DatVe VALUES
('DV01','LC01','KH01','NV01','2026-01-05 08:00:00',500000,'Đã đặt','2026-01-06 14:00:00'),
('DV02','LC02','KH02','NV01','2026-02-09 20:00:00',300000,'Đã đặt','2026-02-10 02:00:00'),
('DV03','LC04','KH03','NV03','2026-03-13 08:00:00',280000,'Đã đặt','2026-03-14 14:00:00'),
('DV04','LC05','KH04','NV01','2026-04-17 20:00:00',320000,'Đã đặt','2026-04-18 02:00:00'),
('DV05','LC06','KH05','NV04','2026-05-21 08:00:00',160000,'Đã đặt','2026-05-22 14:00:00'),
('DV06','LC07','KH06','NV03','2026-06-25 20:00:00',120000,'Đã đặt','2026-06-26 02:00:00'),
('DV07','LC08','KH07','NV01','2026-07-27 08:00:00',420000,'Đã đặt','2026-07-28 14:00:00'),
('DV08','LC09','KH08','NV04','2026-08-03 20:00:00',110000,'Yêu cầu hủy','2026-08-04 02:00:00'),
('DV09','LC10','KH09','NV03','2026-09-07 08:00:00',180000,'Đã hủy','2026-09-08 14:00:00'),
('DV10','LC11','KH10','NV01','2026-10-11 20:00:00',150000,'Đã đặt','2026-10-12 02:00:00');

INSERT INTO ChiTietGheDat VALUES
('CT01','DV01','G001','LV01',500000,'Trần Đình Thảo'),
('CT02','DV02','G013','LV02',450000,'Lê Hồng Nhung'),
('CT03','DV03','G035','LV01',280000,'Nguyễn Minh Anh'),
('CT04','DV04','G045','LV01',320000,'Trần Quốc Bảo'),
('CT05','DV05','G053','LV03',112000,'Phạm Thảo Vy'),
('CT06','DV06','G061','LV01',120000,'Võ Đức Anh'),
('CT07','DV07','G069','LV02',630000,'Đặng Gia Hân'),
('CT08','DV08','G007','LV01',110000,'Bùi Nhật Minh'),
('CT09','DV09','G026','LV01',180000,'Hồ Thanh Trúc'),
('CT10','DV10','G055','LV04',127500,'Đỗ Hoàng Phúc');

INSERT INTO ThanhToan VALUES
('TT01','DV01',500000,'Thanh toán qua QR - Chờ xác nhận QR','2026-01-05 09:00:00','GD001'),
('TT02','DV02',300000,'Thanh toán qua thẻ liên kết - Đã thanh toán tự động','2026-02-09 15:00:00','GD002'),
('TT03','DV03',280000,'Thanh toán tiền mặt khi lấy vé tại nhà xe - Chờ thanh toán tại nhà xe','2026-03-13 21:00:00','GD003'),
('TT04','DV04',320000,'Thanh toán chuyển khoản bằng liên kết ngân hàng - Đã thanh toán tự động','2026-04-17 03:00:00','GD004'),
('TT05','DV05',160000,'Thanh toán qua QR - Chờ xác nhận QR','2026-05-21 09:00:00','GD005'),
('TT06','DV06',120000,'Thanh toán tiền mặt khi lấy vé tại nhà xe - Chờ thanh toán tại nhà xe','2026-06-25 15:00:00','GD006'),
('TT07','DV07',420000,'Thanh toán qua thẻ liên kết - Đã thanh toán tự động','2026-07-27 21:00:00','GD007'),
('TT08','DV08',110000,'Thanh toán qua QR - Chờ xác nhận QR','2026-08-03 03:00:00','GD008'),
('TT09','DV09',180000,'Thanh toán chuyển khoản bằng liên kết ngân hàng - Đã hoàn tiền','2026-09-07 09:00:00','GD009'),
('TT10','DV10',150000,'Thanh toán tiền mặt khi lấy vé tại nhà xe - Chờ thanh toán tại nhà xe','2026-10-11 15:00:00','GD010');

INSERT INTO YeuCauHuyVe VALUES
('YC01','DV01','user','Muốn đổi lịch đi','Chờ duyệt',NULL,'2026-01-05 10:00:00',NULL),
('YC02','DV08','user6','Khách bận việc cá nhân nên muốn hủy vé','Chờ duyệt',NULL,'2026-02-09 16:00:00',NULL),
('YC03','DV09','user7','Khách đặt nhầm tuyến xe','Đã duyệt','Đã duyệt hủy và hoàn tiền theo quy định','2026-03-13 22:00:00','2026-03-14 04:00:00');

INSERT INTO DanhGia VALUES
('DG01','user','KH01',5,'Xe sạch, đặt vé nhanh và dễ sử dụng.','2026-01-05 11:00:00'),
('DG02','user2','KH02',4,'Ghế nằm thoải mái, nhân viên hỗ trợ tốt.','2026-02-09 17:00:00'),
('DG03','user3','KH03',5,'Thanh toán QR tiện lợi.','2026-03-13 23:00:00'),
('DG04','user4','KH04',3,'Xe đi hơi trễ giờ.','2026-04-17 05:00:00'),
('DG05','user5','KH05',1,'Cần cải thiện thời gian đón khách.','2026-05-21 11:00:00');

INSERT INTO CauHinhThanhToan(MaCauHinh,AnhQR,SoTaiKhoan,TenNganHang,ChuTaiKhoan)VALUES
('QR01','/images/default-qr.png','123456789','QLBanVeXeKhach','QLBanVeXeKhach');

INSERT INTO BenXe VALUES
('BX11','Bến xe Hải Phòng','Hải Phòng','02253888011','2023-01-10 06:00:00','2023-01-12 09:00:00'),
('BX12','Bến xe Thái Nguyên','Thái Nguyên','02083888012','2023-02-10 09:07:00','2023-02-18 13:07:00'),
('BX13','Bến xe Nam Định','Nam Định','02283888013','2023-03-13 12:14:00','2023-03-27 17:14:00'),
('BX14','Bến xe Thanh Hóa','Thanh Hóa','02373888014','2023-04-13 15:21:00','2023-05-03 21:21:00'),
('BX15','Bến xe Vinh','Nghệ An','02383888015','2023-05-14 18:28:00','2023-06-10 01:28:00'),
('BX16','Bến xe Đồng Hới','Quảng Bình','02323888016','2023-06-14 21:35:00','2023-07-17 05:35:00'),
('BX17','Bến xe Đông Hà','Quảng Trị','02333888017','2023-07-16 00:42:00','2023-08-22 09:42:00'),
('BX18','Bến xe Tam Kỳ','Quảng Nam','02353888018','2023-08-16 03:49:00','2023-09-28 13:49:00'),
('BX19','Bến xe Quảng Ngãi','Quảng Ngãi','02553888019','2023-09-15 06:56:00','2023-11-04 17:56:00'),
('BX20','Bến xe Tuy Hòa','Phú Yên','02573888020','2023-10-16 09:03:00','2023-12-11 21:03:00'),
('BX21','Bến xe Phan Rang','Ninh Thuận','02593888021','2023-11-16 12:10:00','2024-01-18 01:10:00'),
('BX22','Bến xe Phan Thiết','Bình Thuận','02523888022','2023-12-17 15:17:00','2024-02-24 05:17:00'),
('BX23','Bến xe Biên Hòa','Đồng Nai','02513888023','2024-01-17 18:24:00','2024-03-31 09:24:00'),
('BX24','Bến xe Bình Dương','Bình Dương','02743888024','2024-02-17 21:31:00','2024-05-07 13:31:00'),
('BX25','Bến xe Long An','Long An','02723888025','2024-03-20 00:38:00','2024-06-13 17:38:00'),
('BX26','Bến xe Mỹ Tho','Tiền Giang','02733888026','2024-04-20 03:45:00','2024-07-20 21:45:00'),
('BX27','Bến xe Bến Tre','Bến Tre','02753888027','2024-05-20 06:52:00','2024-08-27 01:52:00'),
('BX28','Bến xe Trà Vinh','Trà Vinh','02943888028','2024-06-20 09:59:00','2024-10-03 05:59:00'),
('BX29','Bến xe Sóc Trăng','Sóc Trăng','02993888029','2024-07-21 12:06:00','2024-11-08 09:06:00'),
('BX30','Bến xe Cà Mau','Cà Mau','02903888030','2024-08-21 15:13:00','2024-12-15 13:13:00');

INSERT INTO TuyenXe VALUES
('TX13','BX11','BX18',120,3,'2023-05-01 08:00:00','2023-05-03 13:00:00'),
('TX14','BX12','BX19',268,4,'2023-05-20 10:07:00','2023-05-26 16:07:00'),
('TX15','BX13','BX20',426,7,'2023-06-08 12:14:00','2023-06-18 19:14:00'),
('TX16','BX14','BX21',604,10,'2023-06-27 14:21:00','2023-07-11 22:21:00'),
('TX17','BX15','BX22',752,13,'2023-07-16 16:28:00','2023-08-04 01:28:00'),
('TX18','BX16','BX23',930,16,'2023-08-04 18:35:00','2023-08-27 04:35:00'),
('TX19','BX17','BX24',1078,18,'2023-08-23 20:42:00','2023-09-19 07:42:00'),
('TX20','BX18','BX25',1236,21,'2023-09-11 22:49:00','2023-10-12 10:49:00'),
('TX21','BX19','BX26',1414,24,'2023-10-01 00:56:00','2023-11-03 13:56:00'),
('TX22','BX20','BX27',1572,26,'2023-10-20 02:03:00','2023-11-26 16:03:00'),
('TX23','BX21','BX28',200,3,'2023-11-08 04:10:00','2023-12-19 19:10:00'),
('TX24','BX22','BX29',348,6,'2023-11-27 06:17:00','2024-01-11 22:17:00'),
('TX25','BX23','BX30',506,8,'2023-12-15 08:24:00','2024-02-04 01:24:00'),
('TX26','BX24','BX11',684,11,'2024-01-03 10:31:00','2024-02-27 04:31:00'),
('TX27','BX25','BX12',832,14,'2024-01-22 12:38:00','2024-03-21 07:38:00'),
('TX28','BX26','BX13',1010,17,'2024-02-10 14:45:00','2024-04-13 10:45:00'),
('TX29','BX27','BX14',1158,19,'2024-02-29 16:52:00','2024-05-05 13:52:00'),
('TX30','BX28','BX15',1316,22,'2024-03-19 18:59:00','2024-05-28 16:59:00'),
('TX31','BX29','BX16',1494,25,'2024-04-07 20:06:00','2024-06-20 19:06:00'),
('TX32','BX30','BX17',1652,28,'2024-04-26 22:13:00','2024-07-13 22:13:00');

INSERT INTO XeKhach VALUES
('X09','50A-23000','Hyundai Universe',16,'Giường nằm',1,'2023-08-10 07:00:00','2023-08-12 12:00:00'),
('X10','51A-23137','Thaco Mobihome',29,'Limousine',1,'2023-08-23 11:07:00','2023-08-29 17:07:00'),
('X11','52A-23274','Ford Transit',34,'Ghế ngồi',1,'2023-09-05 15:14:00','2023-09-15 22:14:00'),
('X12','53A-23411','Kia Granbird',40,'Giường nằm VIP',1,'2023-09-18 19:21:00','2023-10-03 03:21:00'),
('X13','54A-23548','Mercedes Sprinter',45,'Thường',1,'2023-10-01 23:28:00','2023-10-20 08:28:00'),
('X14','55A-23685','Samco Felix',16,'Giường nằm',1,'2023-10-15 03:35:00','2023-11-05 13:35:00'),
('X15','56A-23822','Hyundai Solati',29,'Limousine',1,'2023-10-27 07:42:00','2023-11-22 18:42:00'),
('X16','57A-23959','Isuzu Samco',34,'Ghế ngồi',1,'2023-11-09 11:49:00','2023-12-09 23:49:00'),
('X17','58A-24096','Thaco Town',40,'Giường nằm VIP',1,'2023-11-22 15:56:00','2023-12-27 04:56:00'),
('X18','59A-24233','Fuso Rosa',45,'Thường',1,'2023-12-05 19:03:00','2024-01-13 09:03:00'),
('X19','60A-24370','Hyundai Universe',16,'Giường nằm',1,'2023-12-18 23:10:00','2024-01-29 14:10:00'),
('X20','61A-24507','Thaco Mobihome',29,'Limousine',1,'2024-01-01 03:17:00','2024-02-15 19:17:00'),
('X21','62A-24644','Ford Transit',34,'Ghế ngồi',1,'2024-01-13 07:24:00','2024-03-04 00:24:00'),
('X22','63A-24781','Kia Granbird',40,'Giường nằm VIP',1,'2024-01-26 11:31:00','2024-03-21 05:31:00'),
('X23','64A-24918','Mercedes Sprinter',45,'Thường',1,'2024-02-08 15:38:00','2024-04-07 10:38:00'),
('X24','65A-25055','Samco Felix',16,'Giường nằm',1,'2024-02-21 19:45:00','2024-04-23 15:45:00'),
('X25','66A-25192','Hyundai Solati',29,'Limousine',1,'2024-03-05 23:52:00','2024-05-10 20:52:00'),
('X26','67A-25329','Isuzu Samco',34,'Ghế ngồi',1,'2024-03-19 03:59:00','2024-05-28 01:59:00'),
('X27','68A-25466','Thaco Town',40,'Giường nằm VIP',1,'2024-03-31 07:06:00','2024-06-14 06:06:00'),
('X28','69A-25603','Fuso Rosa',45,'Thường',1,'2024-04-13 11:13:00','2024-07-01 11:13:00');

INSERT INTO TaiXe VALUES
('TXE09','Nguyễn Thành Đạt','0960100000','D',1,'2023-10-02 08:30:00','2023-10-04 14:30:00'),
('TXE10','Trần Gia Bảo','0960112345','E',1,'2023-10-13 14:37:00','2023-10-17 21:37:00'),
('TXE11','Lê Minh Quân','0960124690','D2',1,'2023-10-24 20:44:00','2023-10-31 04:44:00'),
('TXE12','Phạm Hoàng Long','0960137035','FC',1,'2023-11-05 02:51:00','2023-11-13 11:51:00'),
('TXE13','Võ Anh Khoa','0960149380','D',1,'2023-11-15 08:58:00','2023-11-25 18:58:00'),
('TXE14','Đặng Quốc Việt','0960161725','E',1,'2023-11-26 15:05:00','2023-12-09 02:05:00'),
('TXE15','Bùi Đức Tài','0960174070','D2',1,'2023-12-07 21:12:00','2023-12-22 09:12:00'),
('TXE16','Hồ Minh Trí','0960186415','FC',1,'2023-12-19 03:19:00','2024-01-03 16:19:00'),
('TXE17','Đỗ Văn Khải','0960198760','D',1,'2023-12-29 09:26:00','2024-01-16 23:26:00'),
('TXE18','Huỳnh Nhật Tân','0960211105','E',1,'2024-01-09 14:33:00','2024-01-30 05:33:00'),
('TXE19','Ngô Đức Phúc','0960223450','D2',1,'2024-01-20 20:40:00','2024-02-12 12:40:00'),
('TXE20','Trịnh Bảo Nam','0960235795','FC',1,'2024-02-01 02:47:00','2024-02-24 19:47:00'),
('TXE21','Mai Thanh Bình','0960248140','D',1,'2024-02-11 08:54:00','2024-03-09 02:54:00'),
('TXE22','Cao Hữu Nghĩa','0960260485','E',1,'2024-02-22 15:01:00','2024-03-22 10:01:00'),
('TXE23','Dương Anh Dũng','0960272830','D2',1,'2024-03-04 21:08:00','2024-04-03 17:08:00'),
('TXE24','Lý Quốc Cường','0960285175','FC',1,'2024-03-16 03:15:00','2024-04-17 00:15:00'),
('TXE25','Tạ Minh Hiếu','0960297520','D',1,'2024-03-26 09:22:00','2024-04-30 07:22:00'),
('TXE26','Phan Văn Hải','0960309865','E',1,'2024-04-06 15:29:00','2024-05-13 14:29:00'),
('TXE27','Chu Đức Toàn','0960322210','D2',1,'2024-04-17 20:36:00','2024-05-25 20:36:00'),
('TXE28','Lâm Hoàng Phát','0960334555','FC',1,'2024-04-29 02:43:00','2024-06-08 03:43:00');

INSERT INTO Ghe VALUES
('G077','X09','01A','Trái',1,'2024-01-05 06:00:00'),
('G078','X10','02B','Phải',1,'2024-01-14 11:07:00'),
('G079','X11','03C','Giữa',1,'2024-01-23 16:14:00'),
('G080','X12','04D','Tầng trên',1,'2024-02-01 21:21:00'),
('G081','X13','05A','Trái',1,'2024-02-11 02:28:00'),
('G082','X14','06B','Phải',1,'2024-02-19 07:35:00'),
('G083','X15','07C','Giữa',0,'2024-02-28 12:42:00'),
('G084','X16','08D','Tầng trên',1,'2024-03-08 17:49:00'),
('G085','X17','09A','Trái',1,'2024-03-17 22:56:00'),
('G086','X18','10B','Phải',1,'2024-03-27 03:03:00'),
('G087','X19','01C','Giữa',1,'2024-04-04 08:10:00'),
('G088','X20','02D','Tầng trên',1,'2024-04-13 13:17:00'),
('G089','X21','03A','Trái',1,'2024-04-22 18:24:00'),
('G090','X22','04B','Phải',1,'2024-05-01 23:31:00'),
('G091','X23','05C','Giữa',1,'2024-05-11 04:38:00'),
('G092','X24','06D','Tầng trên',1,'2024-05-19 09:45:00'),
('G093','X25','07A','Trái',1,'2024-05-28 14:52:00'),
('G094','X26','08B','Phải',1,'2024-06-06 19:59:00'),
('G095','X27','09C','Giữa',1,'2024-06-16 00:06:00'),
('G096','X28','10D','Tầng trên',1,'2024-06-25 05:13:00');

INSERT INTO LichChay VALUES
('LC13','TX13','X09','TXE09', '2026-07-01 05:30:00', '2026-07-01 09:30:00', 140000, 'Đang hoạt động','2024-03-01 09:00:00','2024-03-03 16:00:00'),
('LC14','TX14','X10','TXE10', '2026-07-05 06:30:00', '2026-07-05 11:30:00', 165000, 'Tạm hoãn','2024-03-16 12:07:00','2024-03-24 20:07:00'),
('LC15','TX15','X11','TXE11', '2026-07-09 07:30:00', '2026-07-09 13:30:00', 190000, 'Đang hoạt động','2024-03-31 15:14:00','2024-04-15 00:14:00'),
('LC16','TX16','X12','TXE12', '2026-07-13 08:30:00', '2026-07-13 15:30:00', 215000, 'Đã hoàn tất','2024-04-15 18:21:00','2024-05-06 04:21:00'),
('LC17','TX17','X13','TXE13', '2026-07-17 09:30:00', '2026-07-17 17:30:00', 240000, 'Đang hoạt động','2024-04-30 21:28:00','2024-05-27 08:28:00'),
('LC18','TX18','X14','TXE14', '2026-07-21 10:30:00', '2026-07-21 19:30:00', 265000, 'Tạm hoãn','2024-05-16 00:35:00','2024-06-17 12:35:00'),
('LC19','TX19','X15','TXE15', '2026-07-25 11:30:00', '2026-07-25 21:30:00', 290000, 'Đang hoạt động','2024-05-31 03:42:00','2024-07-07 16:42:00'),
('LC20','TX20','X16','TXE16', '2026-07-29 05:30:00', '2026-07-29 16:30:00', 315000, 'Đã hoàn tất','2024-06-15 06:49:00','2024-07-28 20:49:00'),
('LC21','TX21','X17','TXE17', '2026-08-02 06:30:00', '2026-08-02 18:30:00', 340000, 'Đang hoạt động','2024-06-29 09:56:00','2024-08-19 00:56:00'),
('LC22','TX22','X18','TXE18', '2026-08-06 07:30:00', '2026-08-06 20:30:00', 365000, 'Tạm hoãn','2024-07-14 12:03:00','2024-09-09 04:03:00'),
('LC23','TX23','X19','TXE19', '2026-08-10 08:30:00', '2026-08-10 22:30:00', 390000, 'Đang hoạt động','2024-07-29 15:10:00','2024-09-30 08:10:00'),
('LC24','TX24','X20','TXE20', '2026-08-14 09:30:00', '2026-08-15 00:30:00', 415000, 'Đã hoàn tất','2024-08-13 18:17:00','2024-10-21 12:17:00'),
('LC25','TX25','X21','TXE21', '2026-08-18 10:30:00', '2026-08-19 02:30:00', 440000, 'Đang hoạt động','2024-08-28 21:24:00','2024-11-10 16:24:00'),
('LC26','TX26','X22','TXE22', '2026-08-22 11:30:00', '2026-08-23 04:30:00', 465000, 'Tạm hoãn','2024-09-13 00:31:00','2024-12-01 20:31:00'),
('LC27','TX27','X23','TXE23', '2026-08-26 05:30:00', '2026-08-26 23:30:00', 490000, 'Đang hoạt động','2024-09-28 03:38:00','2024-12-23 00:38:00'),
('LC28','TX28','X24','TXE24', '2026-08-30 06:30:00', '2026-08-31 01:30:00', 515000, 'Đã hoàn tất','2024-10-13 06:45:00','2025-01-13 04:45:00'),
('LC29','TX29','X25','TXE25', '2026-09-03 07:30:00', '2026-09-04 03:30:00', 540000, 'Đang hoạt động','2024-10-27 09:52:00','2025-02-03 08:52:00'),
('LC30','TX30','X26','TXE26', '2026-09-07 08:30:00', '2026-09-08 05:30:00', 565000, 'Tạm hoãn','2024-11-11 12:59:00','2025-02-24 12:59:00'),
('LC31','TX31','X27','TXE27', '2026-09-11 09:30:00', '2026-09-11 13:30:00', 590000, 'Đang hoạt động','2024-11-26 15:06:00','2025-03-16 16:06:00'),
('LC32','TX32','X28','TXE28', '2026-09-15 10:30:00', '2026-09-15 15:30:00', 615000, 'Đã hoàn tất','2024-12-11 18:13:00','2025-04-06 20:13:00');

INSERT INTO LoaiVe VALUES
('LV06','Vé khứ hồi',0.65,'Ưu đãi theo chương trình'),
('LV07','Vé nhóm',0.75,'Áp dụng theo điều kiện đặt vé'),
('LV08','Vé cuối tuần',0.9,'Phù hợp nhiều nhóm khách'),
('LV09','Vé lễ Tết',1.1,'Ưu đãi theo chương trình'),
('LV10','Vé đặt sớm',0.88,'Áp dụng theo điều kiện đặt vé'),
('LV11','Vé linh hoạt',1.2,'Phù hợp nhiều nhóm khách'),
('LV12','Vé doanh nhân',1.6,'Ưu đãi theo chương trình'),
('LV13','Vé gia đình',0.82,'Áp dụng theo điều kiện đặt vé'),
('LV14','Vé học sinh',0.7,'Phù hợp nhiều nhóm khách'),
('LV15','Vé ưu tiên',0.95,'Ưu đãi theo chương trình'),
('LV16','Vé đêm',0.65,'Áp dụng theo điều kiện đặt vé'),
('LV17','Vé cao cấp',0.75,'Phù hợp nhiều nhóm khách'),
('LV18','Vé tiết kiệm',0.9,'Ưu đãi theo chương trình'),
('LV19','Vé combo',1.1,'Áp dụng theo điều kiện đặt vé'),
('LV20','Vé đoàn',0.88,'Phù hợp nhiều nhóm khách'),
('LV21','Vé khách thân thiết',1.2,'Ưu đãi theo chương trình'),
('LV22','Vé hoàn linh hoạt',1.6,'Áp dụng theo điều kiện đặt vé'),
('LV23','Vé tuyến ngắn',0.82,'Phù hợp nhiều nhóm khách'),
('LV24','Vé tuyến dài',0.7,'Ưu đãi theo chương trình'),
('LV25','Vé siêu tiết kiệm',0.95,'Áp dụng theo điều kiện đặt vé');

INSERT INTO KhachHang VALUES
('KH11','Nguyễn Ngọc Lan','0970100000','khachhang11@gmail.com','300000000','/images/default-avatar.png','1988-02-14','Nữ','Khách đặt online','2024-04-07 10:00:00'),
('KH12','Trần Hải Yến','0970111223','khachhang12@gmail.com','300123457','/images/default-avatar.png','1988-09-12','Nam','Khách thường','2024-04-25 15:07:00'),
('KH13','Lê Tuấn Kiệt','0970122446','khachhang13@gmail.com','300246914','/images/default-avatar.png','1989-04-11','Nữ','Khách thân thiết','2024-05-13 20:14:00'),
('KH14','Phạm Gia Linh','0970133669','khachhang14@gmail.com','300370371','/images/default-avatar.png','1989-11-08','Nam','Khách đặt online','2024-06-01 01:21:00'),
('KH15','Võ Minh Châu','0970144892','khachhang15@gmail.com','300493828','/images/default-avatar.png','1990-06-07','Nữ','Khách thường','2024-06-19 06:28:00'),
('KH16','Đặng Bảo Ngọc','0970156115','khachhang16@gmail.com','300617285','/images/default-avatar.png','1991-01-04','Nam','Khách thân thiết','2024-07-06 11:35:00'),
('KH17','Bùi Quang Huy','0970167338','khachhang17@gmail.com','300740742','/images/default-avatar.png','1991-08-03','Nữ','Khách đặt online','2024-07-24 16:42:00'),
('KH18','Hồ Mỹ Duyên','0970178561','khachhang18@gmail.com','300864199','/images/default-avatar.png','1992-03-01','Nam','Khách thường','2024-08-11 21:49:00'),
('KH19','Đỗ Anh Thư','0970189784','khachhang19@gmail.com','300987656','/images/default-avatar.png','1992-09-28','Nữ','Khách thân thiết','2024-08-30 02:56:00'),
('KH20','Huỳnh Quốc Anh','0970201007','khachhang20@gmail.com','301111113','/images/default-avatar.png','1993-04-27','Nam','Khách đặt online','2024-09-17 07:03:00'),
('KH21','Ngô Khánh Vy','0970212230','khachhang21@gmail.com','301234570','/images/default-avatar.png','1993-11-24','Nữ','Khách thường','2024-10-04 12:10:00'),
('KH22','Trịnh Minh Tâm','0970223453','khachhang22@gmail.com','301358027','/images/default-avatar.png','1994-06-23','Nam','Khách thân thiết','2024-10-22 17:17:00'),
('KH23','Mai Hà My','0970234676','khachhang23@gmail.com','301481484','/images/default-avatar.png','1995-01-20','Nữ','Khách đặt online','2024-11-09 22:24:00'),
('KH24','Cao Nhật Linh','0970245899','khachhang24@gmail.com','301604941','/images/default-avatar.png','1995-08-19','Nam','Khách thường','2024-11-28 03:31:00'),
('KH25','Dương Minh Khôi','0970257122','khachhang25@gmail.com','301728398','/images/default-avatar.png','1996-03-17','Nữ','Khách thân thiết','2024-12-16 08:38:00'),
('KH26','Lý Thanh Hằng','0970268345','khachhang26@gmail.com','301851855','/images/default-avatar.png','1996-10-14','Nam','Khách đặt online','2025-01-02 13:45:00'),
('KH27','Tạ Gia Khang','0970279568','khachhang27@gmail.com','301975312','/images/default-avatar.png','1997-05-13','Nữ','Khách thường','2025-01-20 18:52:00'),
('KH28','Phan Ngọc Ánh','0970290791','khachhang28@gmail.com','302098769','/images/default-avatar.png','1997-12-10','Nam','Khách thân thiết','2025-02-07 23:59:00'),
('KH29','Chu Hoài Nam','0970302014','khachhang29@gmail.com','302222226','/images/default-avatar.png','1998-07-09','Nữ','Khách đặt online','2025-02-26 04:06:00'),
('KH30','Lâm Thảo Nhi','0970313237','khachhang30@gmail.com','302345683','/images/default-avatar.png','1999-02-05','Nam','Khách thường','2025-03-16 09:13:00');

INSERT INTO NhanVien VALUES
('NV06','Phan Minh Đức','Bán vé','0981100000','/images/default-avatar.png',1,'2024-06-03 08:00:00'),
('NV07','Đỗ Thanh Tùng','Điều phối xe','0981108877','/images/default-avatar.png',1,'2024-06-17 14:07:00'),
('NV08','Vũ Thị Hạnh','Chăm sóc khách hàng','0981117754','/images/default-avatar.png',1,'2024-07-01 20:14:00'),
('NV09','Nguyễn Kim Ngân','Kế toán','0981126631','/images/default-avatar.png',1,'2024-07-16 02:21:00'),
('NV10','Trần Quốc Thịnh','Quản lý ca','0981135508','/images/default-avatar.png',1,'2024-07-29 08:28:00'),
('NV11','Lê Anh Tú','Bán vé','0981144385','/images/default-avatar.png',1,'2024-08-12 14:35:00'),
('NV12','Phạm Bích Ngọc','Điều phối xe','0981153262','/images/default-avatar.png',1,'2024-08-26 20:42:00'),
('NV13','Võ Hoàng Yến','Chăm sóc khách hàng','0981162139','/images/default-avatar.png',1,'2024-09-10 02:49:00'),
('NV14','Đặng Thanh Phong','Kế toán','0981171016','/images/default-avatar.png',1,'2024-09-23 08:56:00'),
('NV15','Bùi Mai Chi','Quản lý ca','0981179893','/images/default-avatar.png',1,'2024-10-07 14:03:00'),
('NV16','Hồ Văn Lộc','Bán vé','0981188770','/images/default-avatar.png',1,'2024-10-21 20:10:00'),
('NV17','Huỳnh Thảo My','Điều phối xe','0981197647','/images/default-avatar.png',1,'2024-11-05 02:17:00'),
('NV18','Ngô Đức Duy','Chăm sóc khách hàng','0981206524','/images/default-avatar.png',1,'2024-11-18 08:24:00'),
('NV19','Trịnh Gia Huy','Kế toán','0981215401','/images/default-avatar.png',1,'2024-12-02 14:31:00'),
('NV20','Mai Phương Anh','Quản lý ca','0981224278','/images/default-avatar.png',1,'2024-12-16 20:38:00'),
('NV21','Cao Quốc Toàn','Bán vé','0981233155','/images/default-avatar.png',1,'2024-12-31 02:45:00'),
('NV22','Dương Thùy Linh','Điều phối xe','0981242032','/images/default-avatar.png',1,'2025-01-13 08:52:00'),
('NV23','Lý Minh Nhật','Chăm sóc khách hàng','0981250909','/images/default-avatar.png',1,'2025-01-27 14:59:00'),
('NV24','Tạ Khánh Hòa','Kế toán','0981259786','/images/default-avatar.png',1,'2025-02-10 20:06:00'),
('NV25','Lâm Gia Phúc','Quản lý ca','0981268663','/images/default-avatar.png',1,'2025-02-25 02:13:00');

INSERT INTO KhuyenMai (MaKM, TenChuongTrinh, TyLeGiam, NgayBatDau, NgayKetThuc, MoTa) VALUES
('KM08','Giảm giá hè',5,'2024-01-01 00:00:00','2024-03-15 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM09','Ưu đãi tháng 3',7,'2024-02-07 00:00:00','2024-04-27 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM10','Mừng khai trương tuyến mới',8,'2024-03-15 00:00:00','2024-06-09 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM11','Giảm giá thành viên bạc',10,'2024-04-21 00:00:00','2024-07-22 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM12','Giảm giá thành viên vàng',12,'2024-05-28 00:00:00','2024-09-03 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM13','Ưu đãi đặt vé đêm',15,'2024-07-04 00:00:00','2024-10-16 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM14','Ưu đãi sinh nhật',18,'2024-08-10 00:00:00','2024-11-28 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM15','Ưu đãi gia đình',20,'2024-09-16 00:00:00','2025-01-10 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM16','Combo vé khứ hồi',5,'2024-10-23 00:00:00','2025-02-22 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM17','Ưu đãi lễ 30/4',7,'2024-11-29 00:00:00','2025-04-06 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM18','Ưu đãi Quốc khánh',8,'2025-01-05 00:00:00','2025-05-19 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM19','Ưu đãi Tết Dương lịch',10,'2025-02-11 00:00:00','2025-07-01 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM20','Ưu đãi Tết Nguyên đán',12,'2025-03-20 00:00:00','2025-08-13 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM21','Giảm giá tuyến miền Trung',15,'2025-04-26 00:00:00','2025-09-25 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM22','Giảm giá tuyến miền Tây',18,'2025-06-02 00:00:00','2025-11-07 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM23','Ưu đãi khách đoàn',20,'2025-07-09 00:00:00','2025-12-20 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM24','Ưu đãi thanh toán QR',5,'2025-08-15 00:00:00','2026-02-01 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM25','Ưu đãi cuối tháng',7,'2025-09-21 00:00:00','2026-03-16 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM26','Ưu đãi đầu tuần',8,'2025-10-28 00:00:00','2026-04-28 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình'),
('KM27','Ưu đãi giờ vàng',10,'2025-12-04 00:00:00','2026-06-10 00:00:00','Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình');

INSERT INTO UuDaiCuaToi (MaUuDai, TenDangNhap, MaKM, TrangThai, NgayLuu) VALUES
('UD07','user','KM08','Đã lưu','2024-08-09 09:00:00'),
('UD08','user2','KM09','Đã sử dụng','2024-08-21 13:07:00'),
('UD09','user3','KM10','Hết hạn','2024-09-02 17:14:00'),
('UD10','user4','KM11','Đã lưu','2024-09-14 21:21:00'),
('UD11','user5','KM12','Đã sử dụng','2024-09-27 01:28:00'),
('UD12','user6','KM13','Hết hạn','2024-10-09 05:35:00'),
('UD13','user7','KM14','Đã lưu','2024-10-20 09:42:00'),
('UD14','admin','KM15','Đã sử dụng','2024-11-01 13:49:00'),
('UD15','nhanvien1','KM16','Hết hạn','2024-11-13 17:56:00'),
('UD16','nhanvien2','KM17','Đã lưu','2024-11-25 21:03:00'),
('UD17','nhanvien3','KM18','Đã sử dụng','2024-12-08 01:10:00'),
('UD18','user','KM19','Hết hạn','2024-12-20 05:17:00'),
('UD19','user2','KM20','Đã lưu','2024-12-31 09:24:00'),
('UD20','user3','KM21','Đã sử dụng','2025-01-12 13:31:00'),
('UD21','user4','KM22','Hết hạn','2025-01-24 17:38:00'),
('UD22','user5','KM23','Đã lưu','2025-02-05 21:45:00'),
('UD23','user6','KM24','Đã sử dụng','2025-02-18 01:52:00'),
('UD24','user7','KM25','Hết hạn','2025-03-02 05:59:00'),
('UD25','admin','KM26','Đã lưu','2025-03-13 09:06:00'),
('UD26','nhanvien1','KM27','Đã sử dụng','2025-03-25 13:13:00');

INSERT INTO DatVe VALUES
('DV11','LC13','KH11','NV06','2026-11-15 07:00:00',140000,'Đã đặt','2026-11-16 11:00:00'),
('DV12','LC14','KH12','NV07','2026-12-19 12:07:00',165000,'Đã thanh toán','2026-12-20 17:07:00'),
('DV13','LC15','KH13','NV08','2026-01-05 17:14:00',190000,'Yêu cầu hủy','2026-01-06 23:14:00'),
('DV14','LC16','KH14','NV09','2026-02-09 22:21:00',215000,'Đã hủy','2026-02-10 05:21:00'),
('DV15','LC17','KH15','NV10','2026-03-13 03:28:00',240000,'Đã đặt','2026-03-14 11:28:00'),
('DV16','LC18','KH16','NV11','2026-04-17 08:35:00',265000,'Đã thanh toán','2026-04-18 17:35:00'),
('DV17','LC19','KH17','NV12','2026-05-21 13:42:00',290000,'Yêu cầu hủy','2026-05-22 23:42:00'),
('DV18','LC20','KH18','NV13','2026-06-25 18:49:00',315000,'Đã hủy','2026-06-26 05:49:00'),
('DV19','LC21','KH19','NV14','2026-07-27 23:56:00',340000,'Đã đặt','2026-07-28 11:56:00'),
('DV20','LC22','KH20','NV15','2026-08-03 04:03:00',365000,'Đã thanh toán','2026-08-04 17:03:00'),
('DV21','LC23','KH21','NV16','2026-09-07 09:10:00',390000,'Yêu cầu hủy','2026-09-08 23:10:00'),
('DV22','LC24','KH22','NV17','2026-10-11 14:17:00',415000,'Đã hủy','2026-10-12 05:17:00'),
('DV23','LC25','KH23','NV18','2026-11-15 19:24:00',440000,'Đã đặt','2026-11-16 11:24:00'),
('DV24','LC26','KH24','NV19','2026-12-19 00:31:00',465000,'Đã thanh toán','2026-12-20 17:31:00'),
('DV25','LC27','KH25','NV20','2026-01-05 05:38:00',490000,'Yêu cầu hủy','2026-01-06 23:38:00'),
('DV26','LC28','KH26','NV21','2026-02-09 10:45:00',515000,'Đã hủy','2026-02-10 05:45:00'),
('DV27','LC29','KH27','NV22','2026-03-13 15:52:00',540000,'Đã đặt','2026-03-14 11:52:00'),
('DV28','LC30','KH28','NV23','2026-04-17 20:59:00',565000,'Đã thanh toán','2026-04-18 17:59:00'),
('DV29','LC31','KH29','NV24','2026-05-21 01:06:00',590000,'Yêu cầu hủy','2026-05-22 23:06:00'),
('DV30','LC32','KH30','NV25','2026-06-25 06:13:00',615000,'Đã hủy','2026-06-26 05:13:00');

INSERT INTO ChiTietGheDat VALUES
('CT11','DV11','G077','LV06',91000,'Nguyễn Ngọc Lan'),
('CT12','DV12','G078','LV07',123750,'Trần Hải Yến'),
('CT13','DV13','G079','LV08',171000,'Lê Tuấn Kiệt'),
('CT14','DV14','G080','LV09',236500,'Phạm Gia Linh'),
('CT15','DV15','G081','LV10',211200,'Võ Minh Châu'),
('CT16','DV16','G082','LV11',318000,'Đặng Bảo Ngọc'),
('CT17','DV17','G083','LV12',464000,'Bùi Quang Huy'),
('CT18','DV18','G084','LV13',258299,'Hồ Mỹ Duyên'),
('CT19','DV19','G085','LV14',237999,'Đỗ Anh Thư'),
('CT20','DV20','G086','LV15',346750,'Huỳnh Quốc Anh'),
('CT21','DV21','G087','LV16',253500,'Ngô Khánh Vy'),
('CT22','DV22','G088','LV17',311250,'Trịnh Minh Tâm'),
('CT23','DV23','G089','LV18',396000,'Mai Hà My'),
('CT24','DV24','G090','LV19',511500,'Cao Nhật Linh'),
('CT25','DV25','G091','LV20',431200,'Dương Minh Khôi'),
('CT26','DV26','G092','LV21',618000,'Lý Thanh Hằng'),
('CT27','DV27','G093','LV22',864000,'Tạ Gia Khang'),
('CT28','DV28','G094','LV23',463300,'Phan Ngọc Ánh'),
('CT29','DV29','G095','LV24',413000,'Chu Hoài Nam'),
('CT30','DV30','G096','LV25',584250,'Lâm Thảo Nhi');

INSERT INTO ThanhToan VALUES
('TT11','DV11',140000,'Thanh toán qua QR - Chờ xác nhận QR','2026-11-15 08:00:00','GD011'),
('TT12','DV12',165000,'Thanh toán tiền mặt khi lấy vé tại nhà xe - Chờ thanh toán tại nhà xe','2026-12-19 11:07:00','GD012'),
('TT13','DV13',190000,'Thanh toán chuyển khoản ngân hàng - Đã thanh toán','2026-01-05 14:14:00','GD013'),
('TT14','DV14',215000,'Thanh toán qua ví điện tử - Đã thanh toán','2026-02-09 17:21:00','GD014'),
('TT15','DV15',240000,'Thanh toán qua QR - Chờ xác nhận QR','2026-03-13 20:28:00','GD015'),
('TT16','DV16',265000,'Thanh toán tiền mặt khi lấy vé tại nhà xe - Chờ thanh toán tại nhà xe','2026-04-17 23:35:00','GD016'),
('TT17','DV17',290000,'Thanh toán chuyển khoản ngân hàng - Đã thanh toán','2026-05-21 02:42:00','GD017'),
('TT18','DV18',315000,'Thanh toán qua ví điện tử - Đã thanh toán','2026-06-25 05:49:00','GD018'),
('TT19','DV19',340000,'Thanh toán qua QR - Chờ xác nhận QR','2026-07-27 08:56:00','GD019'),
('TT20','DV20',365000,'Thanh toán tiền mặt khi lấy vé tại nhà xe - Chờ thanh toán tại nhà xe','2026-08-03 11:03:00','GD020'),
('TT21','DV21',390000,'Thanh toán chuyển khoản ngân hàng - Đã thanh toán','2026-09-07 14:10:00','GD021'),
('TT22','DV22',415000,'Thanh toán qua ví điện tử - Đã thanh toán','2026-10-11 17:17:00','GD022'),
('TT23','DV23',440000,'Thanh toán qua QR - Chờ xác nhận QR','2026-11-15 20:24:00','GD023'),
('TT24','DV24',465000,'Thanh toán tiền mặt khi lấy vé tại nhà xe - Chờ thanh toán tại nhà xe','2026-12-19 23:31:00','GD024'),
('TT25','DV25',490000,'Thanh toán chuyển khoản ngân hàng - Đã thanh toán','2026-01-05 02:38:00','GD025'),
('TT26','DV26',515000,'Thanh toán qua ví điện tử - Đã thanh toán','2026-02-09 05:45:00','GD026'),
('TT27','DV27',540000,'Thanh toán qua QR - Chờ xác nhận QR','2026-03-13 08:52:00','GD027'),
('TT28','DV28',565000,'Thanh toán tiền mặt khi lấy vé tại nhà xe - Chờ thanh toán tại nhà xe','2026-04-17 11:59:00','GD028'),
('TT29','DV29',590000,'Thanh toán chuyển khoản ngân hàng - Đã thanh toán','2026-05-21 14:06:00','GD029'),
('TT30','DV30',615000,'Thanh toán qua ví điện tử - Đã thanh toán','2026-06-25 17:13:00','GD030');

INSERT INTO YeuCauHuyVe VALUES
('YC04','DV11','user','Đổi kế hoạch cá nhân','Chờ duyệt',NULL,'2026-04-17 09:00:00',NULL),
('YC05','DV12','user2','Đặt nhầm ngày đi','Đã duyệt','Đã xử lý theo quy định','2026-05-21 14:07:00','2026-05-22 21:07:00'),
('YC06','DV13','user3','Muốn đổi tuyến khác','Từ chối','Không đủ điều kiện hủy','2026-06-25 19:14:00','2026-06-26 03:14:00'),
('YC07','DV14','user4','Không sắp xếp được thời gian','Chờ duyệt',NULL,'2026-07-27 00:21:00',NULL),
('YC08','DV15','user5','Đặt trùng vé','Đã duyệt','Đã xử lý theo quy định','2026-08-03 05:28:00','2026-08-04 15:28:00'),
('YC09','DV16','user6','Khách yêu cầu hoàn tiền','Từ chối','Không đủ điều kiện hủy','2026-09-07 10:35:00','2026-09-08 21:35:00'),
('YC10','DV17','user7','Thay đổi số lượng người đi','Chờ duyệt',NULL,'2026-10-11 15:42:00',NULL),
('YC11','DV18','user','Xe xuất phát không phù hợp','Đã duyệt','Đã xử lý theo quy định','2026-11-15 20:49:00','2026-11-16 09:49:00'),
('YC12','DV19','user2','Đổi kế hoạch cá nhân','Từ chối','Không đủ điều kiện hủy','2026-12-19 01:56:00','2026-12-20 15:56:00'),
('YC13','DV20','user3','Đặt nhầm ngày đi','Chờ duyệt',NULL,'2026-01-05 06:03:00',NULL),
('YC14','DV21','user4','Muốn đổi tuyến khác','Đã duyệt','Đã xử lý theo quy định','2026-02-09 11:10:00','2026-02-10 03:10:00'),
('YC15','DV22','user5','Không sắp xếp được thời gian','Từ chối','Không đủ điều kiện hủy','2026-03-13 16:17:00','2026-03-14 09:17:00'),
('YC16','DV23','user6','Đặt trùng vé','Chờ duyệt',NULL,'2026-04-17 21:24:00',NULL),
('YC17','DV24','user7','Khách yêu cầu hoàn tiền','Đã duyệt','Đã xử lý theo quy định','2026-05-21 02:31:00','2026-05-22 21:31:00'),
('YC18','DV25','user','Thay đổi số lượng người đi','Từ chối','Không đủ điều kiện hủy','2026-06-25 07:38:00','2026-06-26 03:38:00'),
('YC19','DV26','user2','Xe xuất phát không phù hợp','Chờ duyệt',NULL,'2026-07-27 12:45:00',NULL),
('YC20','DV27','user3','Đổi kế hoạch cá nhân','Đã duyệt','Đã xử lý theo quy định','2026-08-03 17:52:00','2026-08-04 15:52:00'),
('YC21','DV28','user4','Đặt nhầm ngày đi','Từ chối','Không đủ điều kiện hủy','2026-09-07 22:59:00','2026-09-08 21:59:00'),
('YC22','DV29','user5','Muốn đổi tuyến khác','Chờ duyệt',NULL,'2026-10-11 03:06:00',NULL),
('YC23','DV30','user6','Không sắp xếp được thời gian','Đã duyệt','Đã xử lý theo quy định','2026-11-15 08:13:00','2026-11-16 09:13:00');

INSERT INTO DanhGia VALUES
('DG06','user','KH11',1,'Dịch vụ ổn, đặt vé nhanh.','2026-06-25 10:00:00'),
('DG07','user2','KH12',2,'Nhân viên hỗ trợ nhiệt tình.','2026-07-27 14:07:00'),
('DG08','user3','KH13',3,'Xe sạch và đúng giờ.','2026-08-03 18:14:00'),
('DG09','user4','KH14',4,'Ứng dụng dễ sử dụng.','2026-09-07 22:21:00'),
('DG10','user5','KH15',5,'Cần cập nhật trạng thái vé nhanh hơn.','2026-10-11 02:28:00'),
('DG11','user6','KH16',1,'Giá vé hợp lý.','2026-11-15 06:35:00'),
('DG12','user7','KH17',2,'Tài xế lái xe an toàn.','2026-12-19 10:42:00'),
('DG13','user','KH18',3,'Ghế ngồi thoải mái.','2026-01-05 14:49:00'),
('DG14','user2','KH19',4,'Thanh toán thuận tiện.','2026-02-09 18:56:00'),
('DG15','user3','KH20',5,'Trải nghiệm tốt.','2026-03-13 22:03:00'),
('DG16','user4','KH21',1,'Dịch vụ ổn, đặt vé nhanh.','2026-04-17 02:10:00'),
('DG17','user5','KH22',2,'Nhân viên hỗ trợ nhiệt tình.','2026-05-21 06:17:00'),
('DG18','user6','KH23',3,'Xe sạch và đúng giờ.','2026-06-25 10:24:00'),
('DG19','user7','KH24',4,'Ứng dụng dễ sử dụng.','2026-07-27 14:31:00'),
('DG20','user','KH25',5,'Cần cập nhật trạng thái vé nhanh hơn.','2026-08-03 18:38:00'),
('DG21','user2','KH26',1,'Giá vé hợp lý.','2026-09-07 22:45:00'),
('DG22','user3','KH27',2,'Tài xế lái xe an toàn.','2026-10-11 02:52:00'),
('DG23','user4','KH28',3,'Ghế ngồi thoải mái.','2026-11-15 06:59:00'),
('DG24','user5','KH29',4,'Thanh toán thuận tiện.','2026-12-19 10:06:00'),
('DG25','user6','KH30',5,'Trải nghiệm tốt.','2026-01-05 14:13:00');

INSERT INTO CauHinhThanhToan(MaCauHinh,AnhQR,SoTaiKhoan,TenNganHang,ChuTaiKhoan,NgayCapNhat) VALUES
('QR02','/images/qr-02.png','1234500000','Vietcombank','QLBanVeXeKhach 02','2025-05-06 08:00:00'),
('QR03','/images/qr-03.png','1234501111','BIDV','QLBanVeXeKhach 03','2025-05-13 13:07:00'),
('QR04','/images/qr-04.png','1234502222','MB Bank','QLBanVeXeKhach 04','2025-05-20 18:14:00'),
('QR05','/images/qr-05.png','1234503333','Techcombank','QLBanVeXeKhach 05','2025-05-27 23:21:00'),
('QR06','/images/qr-06.png','1234504444','ACB','QLBanVeXeKhach 06','2025-06-04 04:28:00'),
('QR07','/images/qr-07.png','1234505555','Sacombank','QLBanVeXeKhach 07','2025-06-10 09:35:00'),
('QR08','/images/qr-08.png','1234506666','TPBank','QLBanVeXeKhach 08','2025-06-17 14:42:00'),
('QR09','/images/qr-09.png','1234507777','VietinBank','QLBanVeXeKhach 09','2025-06-24 19:49:00'),
('QR10','/images/qr-10.png','1234508888','Agribank','QLBanVeXeKhach 10','2025-07-02 00:56:00'),
('QR11','/images/qr-11.png','1234509999','VPBank','QLBanVeXeKhach 11','2025-07-09 05:03:00'),
('QR12','/images/qr-12.png','1234511110','Vietcombank','QLBanVeXeKhach 12','2025-07-15 10:10:00'),
('QR13','/images/qr-13.png','1234512221','BIDV','QLBanVeXeKhach 13','2025-07-22 15:17:00'),
('QR14','/images/qr-14.png','1234513332','MB Bank','QLBanVeXeKhach 14','2025-07-29 20:24:00'),
('QR15','/images/qr-15.png','1234514443','Techcombank','QLBanVeXeKhach 15','2025-08-06 01:31:00'),
('QR16','/images/qr-16.png','1234515554','ACB','QLBanVeXeKhach 16','2025-08-13 06:38:00'),
('QR17','/images/qr-17.png','1234516665','Sacombank','QLBanVeXeKhach 17','2025-08-19 11:45:00'),
('QR18','/images/qr-18.png','1234517776','TPBank','QLBanVeXeKhach 18','2025-08-26 16:52:00'),
('QR19','/images/qr-19.png','1234518887','VietinBank','QLBanVeXeKhach 19','2025-09-02 21:59:00'),
('QR20','/images/qr-20.png','1234519998','Agribank','QLBanVeXeKhach 20','2025-09-10 02:06:00'),
('QR21','/images/qr-21.png','1234521109','VPBank','QLBanVeXeKhach 21','2025-09-17 07:13:00');

CREATE INDEX IX_LichChay_GioKhoiHanh ON LichChay(GioKhoiHanh);
CREATE INDEX IX_DatVe_MaLichChay ON DatVe(MaLichChay);
CREATE INDEX IX_YCHV_TrangThai ON YeuCauHuyVe(TrangThai);
CREATE INDEX IX_UDCT_TenDangNhap ON UuDaiCuaToi(TenDangNhap);
CREATE INDEX IX_UDCT_MaKM ON UuDaiCuaToi(MaKM);
CREATE INDEX IX_PTTTLK_TenDangNhap ON PhuongThucThanhToanLienKet(TenDangNhap);

SELECT * FROM TaiKhoan;
SELECT * FROM KhachHang;
SELECT * FROM ThanhToan;
SELECT * FROM KhuyenMai;
SELECT * FROM UuDaiCuaToi;
SELECT * FROM PhuongThucThanhToanLienKet;
SELECT * FROM DanhGia;