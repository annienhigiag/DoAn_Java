(function () {
    const viToEn = {
        // COMMON / MENU

        // SIDEBAR TITLE CASE / FIXED LABELS
        "Quản Lý Bán Vé Xe": "Bus Ticket Sales Management",
        "Quản Lý Dữ Liệu": "Data Management",
        "Vận Hành": "Operations",
        "Bến Xe": "Bus Station",
        "Tuyến Xe": "Route",
        "Xe Khách": "Bus",
        "Tài Xế": "Driver",
        "Lịch Chạy": "Schedule",
        "Bán Vé": "Ticket Sales",
        "Loại Vé": "Ticket Types",
        "Đặt Vé": "Bookings",
        "Chi Tiết Ghế Đặt": "Booked Seat Details",
        "Thanh Toán": "Payment",
        "Vé Đã Hủy": "Cancelled Tickets",
        "Sửa Vé": "Ticket Changes",
        "Người Dùng": "Users",
        "Khách Hàng": "Customer",
        "Hành Khách Phụ": "Passenger Details",
        "Nhân Viên": "Employee",
        "Tài Khoản": "Account",
        "Báo Cáo": "Reports",
        "Khuyến Mãi": "Promotion",
        "Báo Cáo Doanh Thu": "Revenue Reports",
        "Yêu Cầu Hủy Vé": "Ticket Cancellation Requests",
        "Trang Chủ": "Home",
        "Đăng Xuất": "Logout",
        "Backup/Restore": "Backup/Restore",
        "Backup / Restore": "Backup/Restore",
        "Vé Xe Online": "Bus Ticket Online",
        "Vé Bus Online": "Bus Tickets Online",
        "Bus Ticket Online": "Bus Ticket Online",
        "Đặt vé nhanh chóng, quản lý dễ dàng": "Book tickets quickly, manage easily",
        "Trang chủ": "Home",
        "Trang cá nhân": "Profile",
        "Mua vé": "Book tickets",
        "Mua vé xe online": "Book bus tickets online",
        "Ví/Thẻ": "Wallet / Cards",
        "Ví / Thẻ": "Wallet / Cards",
        "Ví và thẻ liên kết": "Linked wallets and cards",
        "Thông tin của tôi": "My Profile",
        "Thông tin cá nhân": "Personal information",
        "Chuyến đi của tôi": "My Trips",
        "Lịch sử vé": "My Trips",
        "Ưu đãi của tôi": "My Offers",
        "Ưu đãi": "Offers",
        "Đăng nhập": "Login",
        "Đăng ký": "Register",
        "Đăng xuất": "Logout",
        "Ngôn ngữ": "Language",
        "Quản trị": "Administration",
        "Quay lại": "Back",
        "Trở lại": "Back",
        "Tiếp tục": "Continue",
        "Xác nhận": "Confirm",
        "Lưu": "Save",
        "Lưu thông tin": "Save information",
        "Lưu dữ liệu": "Save data",
        "Cập nhật": "Update",
        "Thêm": "Add",
        "+ Thêm mới": "+ Add new",
        "Sửa": "Edit",
        "Xóa": "Delete",
        "Tìm kiếm": "Search",
        "Tìm": "Search",
        "Nhập dữ liệu cần tìm...": "Enter keyword...",
        "Không tìm thấy dữ liệu phù hợp": "No matching data found",
        "Thao tác": "Actions",
        "Thao Tác": "Actions",
        "Không có dữ liệu": "No data",
        "Chưa có dữ liệu": "No data",
        "Danh sách": "List",
        "Nhập thông tin dữ liệu": "Enter data information",
        "Quản lý dữ liệu": "Data management",
        "Không tìm thấy cấu hình bảng dữ liệu. Vui lòng kiểm tra Controller đã truyền": "Table configuration not found. Please check whether the Controller passed",
        "hay chưa.": "or not.",


        // BACKUP / RESTORE PAGE
        "Backup / Restore dữ liệu": "Data Backup / Restore",
        "Xuất dữ liệu ra file JSON và khôi phục lại khi cần.": "Export data to a JSON file and restore it when needed.",
        "Backup dữ liệu": "Data backup",
        "Trở lạiup dữ liệu": "Data backup",
        "Restore dữ liệu": "Restore data",
        "Tải toàn bộ dữ liệu trong database hiện tại về máy dưới dạng file JSON.": "Download all current database data to your computer as a JSON file.",
        "Tải file backup": "Download backup file",
        "Upload file JSON đã backup trước đó. Dữ liệu hiện tại trong các bảng có trong file sẽ bị thay thế.": "Upload a previously backed-up JSON file. Current data in the tables included in the file will be replaced.",
        "Khôi phục dữ liệu": "Restore data",
        "Restore sẽ thay thế dữ liệu hiện tại. Bạn chắc chắn muốn tiếp tục?": "Restore will replace the current data. Are you sure you want to continue?",
        "Lưu ý": "Note",
        "Lưu ý:": "Note:",
        "Trước khi restore, nên tải một file backup mới để phòng trường hợp cần quay lại dữ liệu cũ.": "Before restoring, you should download a new backup file in case you need to roll back to the old data.",
        "← Về trang Admin": "← Back to Admin",
        "Về trang Admin": "Back to Admin",
        "Data Trở lạiup / Restore": "Data Backup / Restore",
        "Trở lạiup": "Backup",
        "Backup": "Backup",
        "Restore": "Restore",

        // LOGIN / REGISTER / FORGOT PASSWORD
        "Tên đăng nhập": "Username",
        "Tên đăng nhập hoặc Gmail": "Username or Gmail",
        "Username hoặc Gmail": "Username or Gmail",
        "Đăng nhập bằng tên đăng nhập hoặc Gmail đã liên kết": "Login with username or linked Gmail",
        "Login bằng tên đăng nhập hoặc Gmail đã liên kết": "Login with username or linked Gmail",
        "Mật khẩu": "Password",
        "Password": "Password",
        "Nhập mật khẩu": "Enter password",
        "Nhập lại mật khẩu": "Confirm password",
        "Mật khẩu mới": "New password",
        "Nhập lại mật khẩu mới": "Confirm new password",
        "Quên mật khẩu": "Forgot password",
        "Quên mật khẩu?": "Forgot password?",
        "Đặt lại mật khẩu": "Reset password",
        "Đặt lại mật khẩu bằng tên đăng nhập, số điện thoại hoặc email": "Reset your password using your username, phone number, or email",
        "Tên đăng nhập, số điện thoại hoặc email": "Username, phone number, or email",
        "Đổi mật khẩu": "Change password",
        "Quay lại đăng nhập": "Back to login",
        "Số điện thoại": "Phone number",
        "Số điện thoại phải đủ 10 số": "Phone number must contain exactly 10 digits",
        "Email": "Email",
        "Địa chỉ mail": "Email address",
        "Họ tên": "Full name",
        "Họ Name": "Full name",
        "Họ name": "Full name",
        "Họ và tên": "Full name",
        "Tên của bạn": "Your name",
        "Giới tính": "Gender",
        "Ngày sinh": "Date of birth",
        "Nam": "Male",
        "Nữ": "Female",
        "Khác": "Other",
        "Địa chỉ": "Address",
        "CCCD": "Citizen ID",
        "Tạo tài khoản": "Create account",
        "Tạo tài khoản khách hàng": "Create a customer account",
        "Đăng ký để đặt vé xe online": "Register to book bus tickets online",
        "Yêu cầu: chữ in hoa, chữ thường, số, ký tự đặc biệt và ít nhất 8 ký tự.": "Requirement: uppercase letter, lowercase letter, number, special character, and at least 8 characters.",
        "Ít nhất 8 ký tự, gồm chữ in hoa, chữ thường, số và ký tự đặc biệt": "At least 8 characters, including uppercase, lowercase, number, and special character",
        "Mật khẩu nhập lại không trùng khớp.": "Passwords do not match.",
        "Tên đăng nhập phải có ít nhất 4 ký tự.": "Username must contain at least 4 characters.",
        "Mật khẩu phải có ít nhất 8 ký tự, gồm chữ in hoa, chữ thường, số và ký tự đặc biệt.": "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.",
        "Mật khẩu mới phải có ít nhất 8 ký tự, gồm chữ in hoa, chữ thường, số và ký tự đặc biệt.": "New password must contain at least 8 characters, including uppercase, lowercase, number, and special character.",
        "Số điện thoại phải nhập đủ 10 số.": "Phone number must contain exactly 10 digits.",
        "Email không hợp lệ.": "Invalid email.",
        "Tên đăng nhập đã tồn tại.": "Username already exists.",
        "Vui lòng nhập tên đăng nhập, số điện thoại hoặc email.": "Please enter username, phone number, or email.",
        "Không tìm thấy tài khoản phù hợp.": "No matching account found.",
        "Không tải được dữ liệu:": "Unable to load data:",
        "Không lưu được dữ liệu:": "Unable to save data:",
        "Không xóa được vì dữ liệu đang được bảng khác sử dụng.": "Cannot delete because the data is being used by another table.",
        "Số thẻ phải gồm đúng 16 chữ số.": "Card number must contain exactly 16 digits.",
        "Vui lòng chọn ngân hàng.": "Please select a bank.",
        "Mã giảm giá không hợp lệ hoặc đã hết hạn.": "Discount code is invalid or expired.",
        "Đã có tài khoản?": "Already have an account?",
        "Chưa có tài khoản?": "Don't have an account?",
        "Đăng ký ngay": "Register now",
        "Register ngay": "Register now",
        "Tài khoản hoặc mật khẩu không đúng": "Incorrect account or password",
        "Sai tên đăng nhập/email hoặc mật khẩu": "Incorrect username/email or password",
        "Đăng ký thành công. Vui lòng đăng nhập.": "Registration successful. Please log in.",
        "Đổi mật khẩu thành công. Vui lòng đăng nhập lại.": "Password changed successfully. Please log in again.",

        // BOOKING / TRIPS
        "Ưu đãi đặt vé online": "Online booking deals",
        "Giảm giá hè": "Summer Discount",
        "Mừng khai trương tuyến mới": "New Route Launch Promotion",
        "Giảm giá thành viên bạc": "Silver Member Discount",
        "Giảm giá thành viên vàng": "Gold Member Discount",
        "Ưu đãi sinh nhật": "Offer Birthday",
        "Ưu đãi đặt vé đêm": "Night Booking Promotion",
        "Combo vé khứ hồi": "Round-Trip Combo Discount",
        "Ưu đãi lễ 30/4": "April 30 Holiday Promotion",
        "Ưu đãi Quốc khánh": "National Day Promotion",
        "Ưu đãi Tết Dương lịch": "New Year Promotion",
        "Ưu đãi Tết Nguyên đán": "Lunar New Year Promotion",
        "Giảm giá tuyến miền Trung": "Central Region Route Discount",
        "Giảm giá tuyến miền Tây": "Mekong Delta Route Discount",
        "Ưu đãi khách đoàn": "Group Customer Promotion",
        "Ưu đãi cuối tháng": "End-of-Month Promotion",
        "Đặt vé xe khách nhanh chóng": "Book bus tickets quickly",
        "Tìm chuyến theo điểm đi, điểm đến và chọn ghế phù hợp.": "Search routes, choose seats and pay easily.",
        "Điểm đi": "From",
        "Điểm đến": "To",
        "Tìm kiếm xe": "Search buses",
        "Lịch trình và giá vé": "Schedules and fares",
        "Không tìm thấy chuyến xe phù hợp.": "No suitable trips found.",
        "Khởi hành": "Departure",
        "Khởi hành:": "Departure:",
        "Đến dự kiến": "Estimated arrival",
        "Đang cập nhật": "Updating",
        "Loại xe": "Vehicle type",
        "Đặt ngay": "Book now",
        "Đánh giá khách hàng": "Customer reviews",
        "Đánh giá của bạn": "Your rating",
        "Nhập bình luận của bạn...": "Write your comment...",
        "Gửi đánh giá": "Submit review",
        "sao": "stars",
        "Thông tin chuyến": "Trip information",
        "Thông tin chuyến đi": "Trip information",
        "Tuyến": "Route",
        "Tuyến:": "Route:",
        "Tuyến xe": "Route",
        "Tuyến xe:": "Route:",
        "Mã lịch": "Schedule ID",
        "Mã lịch:": "Schedule ID:",
        "Xe": "Bus",
        "Xe:": "Bus:",
        "Xe khách": "Bus",
        "Giờ đi": "Departure time",
        "Giờ đi:": "Departure time:",
        "Giờ khởi hành": "Departure time",
        "Giờ đến dự kiến": "Estimated arrival time",
        "Giá vé": "Fare",
        "Giá vé:": "Fare:",
        "Chọn ghế và thanh toán": "Choose seats and payment",
        "Chọn ghế, nhập thông tin và chọn phương thức thanh toán.": "Choose seats, enter passenger information, and select a payment method.",
        "1. Chọn ghế": "1. Choose seats",
        "2. Thông tin hành khách": "2. Passenger information",
        "3. Phương thức thanh toán": "3. Payment method",
        "Chọn ghế": "Choose seats",
        "Sơ đồ ghế": "Seat map",
        "Ghế trống": "Available seat",
        "Ghế đã đặt": "Booked seat",
        "Ghế đang chọn": "Selected seat",
        "Thông tin hành khách": "Passenger information",
        "Họ tên hành khách": "Passenger full name",
        "Tên hành khách": "Passenger name",
        "Mã giảm giá": "Discount code",
        "Nhập mã giảm giá": "Enter discount code",
        "Nhập KM01 hoặc KM02 nếu có": "Enter KM01 or KM02 if available",
        "Xác nhận đặt vé": "Confirm booking",
        "Đặt vé thành công!": "Booking successful!",
        "Đặt vé thành công": "Booking successful",
        "Mã đặt vé": "Booking ID",
        "Về trang chủ": "Back to home",
        "Xem lịch sử vé": "View booking history",
        "Lịch sử vé đã đặt": "Booked ticket history",
        "Bạn có thể gửi yêu cầu hủy vé và theo dõi trạng thái duyệt tại đây.": "You can send cancellation requests and track approval status here.",
        "Bạn chưa đặt vé nào.": "You have not booked any tickets yet.",
        "Mã vé": "Ticket ID",
        "Mã vé:": "Ticket ID:",
        "Ghế:": "Seat:",
        "Tình trạng vé:": "Ticket status:",
        "Yêu cầu hủy": "Request cancellation",
        "Yêu cầu hủy:": "Cancellation request:",
        "Yêu cầu hủy vé": "Ticket cancellation request",
        "Yêu cầu sẽ được gửi cho admin xem xét trước khi hủy vé.": "The request will be sent to admin for review before cancelling the ticket.",
        "Gửi yêu cầu hủy": "Send request",
        "Gửi yêu cầu hủy vé": "Send ticket cancellation request",
        "Lý do hủy": "Cancellation reason",
        "Lý do hủy vé": "Cancellation reason",
        "Nhập lý do hủy vé để admin xem xét...": "Enter the cancellation reason for admin review...",
        "Lý do của bạn:": "Your reason:",
        "Phản hồi admin:": "Admin response:",
        "Chưa có phản hồi": "No response yet",
        "Đang chờ duyệt": "Pending approval",
        "Đã gửi yêu cầu hủy vé. Vui lòng chờ admin duyệt.": "Cancellation request sent. Please wait for admin approval.",
        "Vé này đã có yêu cầu hủy đang chờ duyệt.": "This ticket already has a pending cancellation request.",
        "Quay lại lịch sử": "Back to history",

        // PAYMENT / WALLET / QR
        "Phương thức thanh toán": "Payment method",
        "Phương thức": "Method",
        "Thanh toán": "Payment",
        "Thanh toán QR": "QR payment",
        "Thanh toán qua QR": "Payment by QR",
        "QR thanh toán": "Payment QR",
        "Thanh toán tiền mặt": "Cash payment",
        "Thanh toán tiền mặt khi lấy vé tại nhà xe": "Cash payment when collecting tickets at the bus station",
        "Chuyển khoản": "Bank transfer",
        "Chuyển khoản bằng liên kết ngân hàng": "Bank transfer via linked bank account",
        "Thanh toán chuyển khoản bằng liên kết ngân hàng": "Bank transfer via linked bank account",
        "Thanh toán qua QR - Chờ xác nhận QR": "QR Payment - Awaiting QR Confirmation",
        "Thanh toán qua thẻ liên kết - Đã thanh toán tự động": "Linked Card Payment - Automatically Paid",
        "Thanh toán tiền mặt khi lấy vé tại nhà xe - Chờ thanh toán tại nhà xe": "Cash Payment at Bus Station - Awaiting Payment",
        "Thanh toán chuyển khoản bằng liên kết ngân hàng - Đã thanh toán tự động": "Linked Bank Transfer - Automatically Paid",
        "Thanh toán chuyển khoản bằng liên kết ngân hàng - Đã hoàn tiền": "Linked Bank Transfer - Refunded",
        "Thanh toán chuyển khoản ngân hàng - Đã thanh toán": "Bank Transfer - Paid",
        "Thanh toán qua ví điện tử - Đã thanh toán": "E-Wallet Payment - Paid",
        "Liên kết ngân hàng": "Link bank account",
        "Thẻ liên kết": "Linked card",
        "Liên kết thẻ": "Link card",
        "Thanh toán qua thẻ liên kết": "Payment via linked card",
        "Nếu chọn thanh toán qua liên kết ngân hàng hoặc thẻ, bạn cần": "If you choose payment by linked bank account or card, you need to",
        "liên kết phương thức thanh toán": "link a payment method",

        "trước.": "first.",
        "Tổng tiền": "Total amount",
        "Tổng tiền:": "Total amount:",
        "Số tiền": "Amount",
        "Ngày thanh toán": "Payment date",
        "Trạng thái thanh toán": "Payment status",
        "Mã QR thanh toán": "Payment QR code",
        "Cấu hình QR": "QR Configuration",
        "Cấu hình QR thanh toán": "Payment QR Configuration",
        "Cập nhật ảnh QR, ngân hàng, số tài khoản và chủ tài khoản.": "Update QR image, bank, account number, and account holder.",
        "Cập nhật cấu hình QR thành công.": "QR configuration updated successfully.",
        "Thông tin tài khoản nhận tiền": "Payment receiving account information",
        "Tên ngân hàng": "Bank name",
        "Ngân hàng": "Bank",
        "Ngân hàng:": "Bank:",
        "Số tài khoản": "Account number",
        "Số tài khoản:": "Account number:",
        "Số tài khoản/thẻ:": "Account/card number:",
        "Số tài khoản / số thẻ": "Account number / card number",
        "Số thẻ": "Card number",
        "Chủ tài khoản": "Account holder",
        "Chủ tài khoản:": "Account holder:",
        "Tên chủ tài khoản": "Account holder name",
        "Nội dung": "Content",
        "Nội dung:": "Content:",
        "Nội dung thanh toán": "Payment content",
        "Ảnh QR hiện tại": "Current QR image",
        "Chọn ảnh QR mới": "Choose new QR image",
        "Cắt ảnh QR": "Crop QR image",
        "Cắt ảnh mã QR": "Crop QR Code Image",
        "Lưu cấu hình": "Save configuration",
        "Hủy": "Cancel",
        "Đặt lại": "Reset",
        "Đổi kích thước": "Resize",
        "Chưa có ảnh QR để cắt. Vui lòng chọn ảnh lại.": "No QR image to crop. Please select the image again.",
        "Có thể chọn ảnh rồi bấm": "You can choose an image then click",
        "để căn lại ảnh trước khi lưu.": "to align it before saving.",
        "Ví dụ: Vietcombank": "Example: Vietcombank",
        "Nhập số tài khoản nhận tiền": "Enter receiving account number",
        "Nhập tên chủ tài khoản": "Enter account holder name",
        "← Quay lại Admin": "← Back to Admin",
        "Phương thức thanh toán đã liên kết": "Linked payment methods",
        "Chưa có phương thức thanh toán. Vui lòng liên kết phương thức muốn thanh toán.": "No payment method linked. Please link the payment method you want to use.",
        "Chưa có phương thức thanh toán": "No payment method linked",
        "Bạn chưa liên kết phương thức thanh toán.": "You have not linked a payment method yet.",
        "Liên kết phương thức thanh toán": "Link payment method",
        "Liên kết phương thức thanh toán thành công.": "Payment method linked successfully.",
        "Loại phương thức thanh toán": "Payment method type",
        "Loại phương thức": "Payment method type",
        "Nhập số tài khoản ngân hàng": "Enter bank account number",
        "Nhập số tài khoản ngân hàng của bạn.": "Enter your bank account number.",
        "Nhập chữ cái hoặc tên ngân hàng": "Enter a letter or bank name",
        "Nhập chữ cái đầu, hệ thống sẽ gợi ý ngân hàng.": "Enter the first letter; the system will suggest banks.",
        "Nếu chọn thẻ liên kết, bắt buộc nhập đúng 16 số.": "If you choose linked card, you must enter exactly 16 digits.",
        "Nhập đúng 16 số thẻ": "Enter exactly 16 card digits",
        "Sau khi liên kết, 12 số đầu sẽ tự động được ẩn.": "After linking, the first 12 digits will be hidden automatically.",
        "Đã liên kết": "Linked",
        "Wallet Not Verified": "Wallet Not Verified",
        "Ví chưa xác minh": "Wallet Not Verified",
        "Giá gốc": "Original price",
        "Giảm giá": "Discount amount",
        "Tiếp tục mua vé": "Continue booking",

        // OFFERS
        "Mã ưu đãi đã lưu": "Saved offer codes",
        "Gợi ý mã ưu đãi từ hệ thống": "Suggested offers from the system",
        "Lưu mã này": "Save this code",
        "Lưu ưu đãi": "Save offer",
        "Chưa có ưu đãi.": "No offers yet.",
        "Hiện không có mã ưu đãi mới để gợi ý.": "There are no new offer codes to suggest.",
        "Đã lưu mã ưu đãi vào tài khoản của bạn.": "Offer code saved to your account.",
        "Giảm": "Discount",
        "Tỷ lệ giảm": "Discount rate",
        "Khuyến mãi": "Promotion",
        "Ưu đãi tuyến dài": "Long route offer",
        "Ưu đãi ví điện tử": "E-wallet offer",
        "Ưu đãi cuối tuần": "Weekend offer",
        "Ưu đãi đầu tuần": "Early-week offer",
        "Ưu đãi sinh viên": "Student offer",
        "Ưu đãi giờ vàng": "Golden hour offer",
        "Ưu đãi liên kết ngân hàng": "Bank-link offer",
        "Ưu đãi gia đình": "Family offer",
        "Giảm 20% cho tuyến đường trên 800km": "20% discount for routes over 800 km",
        "Giảm 15% khi thanh toán qua ví hoặc QR": "15% discount when paying by wallet or QR",
        "Giảm 12% cho chuyến đi cuối tuần": "12% discount for weekend trips",
        "Giảm 10% đặt vé online": "10% discount for online booking",
        "Áp dụng mã KM01 khi đặt vé online": "Apply code KM01 when booking online",
        "Áp dụng mã KM02 cho khách hàng mới": "Apply code KM02 for new customers",
        "Giảm thêm cho khách hàng sinh viên": "Extra discount for student customers",
        "Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình": "Applies to eligible customers during the promotion period",
        "Discount 5% khách hàng mới": "5% discount for new customers",
        "Giảm 5% khách hàng mới": "5% discount for new customers",
        "Discount 8% khi thanh toán bằng ngân hàng liên kết": "8% discount when paying with a linked bank account",
        "Giảm 8% khi thanh toán bằng ngân hàng liên kết": "8% discount when paying with a linked bank account",
        "mới": "new",
        "Mới": "New",

        // ADMIN / EMPLOYEE
        "Admin - Quản lý vé xe": "Admin - Bus Ticket Management",
        "Quản lý bán vé xe": "Bus ticket sales management",
        "Quản lý bán vé": "Ticket sales management",
        "Tổng quan quản trị": "Admin overview",
        "Xin chào": "Hello",
        "Xem trang mua vé": "View booking page",
        "Nhóm chức năng": "Function groups",
        "Nhóm chức năng quản trị": "Admin function groups",
        "Truy cập": "Access",
        "Thu gọn/Mở rộng": "Collapse/Expand",
        "Đang hoạt động": "Active",
        "Bến xe, tuyến xe, xe, tài xế": "Stations, routes, buses, drivers",
        "Đặt vé, ghế, thanh toán": "Bookings, seats, payments",
        "Doanh thu, khuyến mãi, yêu cầu": "Revenue, promotions, requests",
        "Doanh thu dạng cột": "Revenue Bar Chart",
        "Đường doanh thu": "Revenue Trend",
        "Khách hàng, nhân viên, tài khoản": "Customers, employees, accounts",
        "Báo cáo và xử lý": "Reports and processing",
        "Vận hành": "Operations",
        "Bán vé": "Ticket sales",
        "Người dùng": "Users",
        "Báo cáo": "Reports",
        "Bến xe": "Bus stations",
        "Xe khách": "Buses",
        "Tài xế": "Drivers",
        "Ghế": "Seats",
        "Lịch chạy": "Schedules",
        "Đặt vé": "Bookings",
        "Chi tiết ghế đặt": "Booked seat details",
        "Thanh toán": "Payments",
        "Sửa vé": "Ticket changes",
        "Vé đã hủy": "Cancelled tickets",
        "Vé hủy": "Cancelled tickets",
        "Tổng đặt vé": "Total Bookings",
        "Tổng khách hàng": "Total Customers",
        "Tổng số xe": "Total Buses",
        "Tổng quan thống kê (Biểu đồ đường)": "Overall Statistics (Line Chart)",
        "Hành khách phụ": "Passenger details",
        "Khách hàng": "Customers",
        "Nhân viên": "Employees",
        "Tài khoản": "Accounts",
        "Loại vé": "Ticket types",
        "Quản lý vận hành xe": "Manage bus operations",
        "Quản lý bến xe": "Manage bus stations",
        "Quản lý tuyến xe": "Manage routes",
        "Quản lý xe khách": "Manage buses",
        "Quản lý tài xế": "Manage drivers",
        "Quản lý ghế xe": "Manage seats",
        "Quản lý lịch chạy": "Manage schedules",
        "Quản lý đặt vé": "Manage bookings",
        "Quản lý ghế đã đặt": "Manage booked seats",
        "Quản lý thanh toán": "Manage payments",
        "Quản lý sửa vé": "Manage ticket changes",
        "Quản lý vé đã hủy": "Manage cancelled tickets",
        "Quản lý hành khách phụ": "Manage passenger details",
        "Quản lý khuyến mãi": "Manage promotions",
        "Quản lý khách hàng": "Manage customers",
        "Quản lý nhân viên": "Manage employees",
        "Quản lý tài khoản": "Manage accounts",
        "Quản lý loại vé": "Manage ticket types",
        "Quyền đăng nhập": "Login permissions",
        "Upload mã QR thanh toán": "Upload payment QR code",
        "Duyệt yêu cầu hủy vé": "Approve cancellation requests",
        "Xem lý do hủy từ khách hàng, duyệt hoặc từ chối yêu cầu.": "View customer cancellation reasons, approve or reject requests.",
        "Xem yêu cầu": "View requests",
        "Báo cáo doanh thu": "Revenue report",
        "Danh sách doanh thu và biểu đồ thống kê": "Revenue list and statistics chart",
        "Lọc doanh thu": "Filter revenue",
        "Lọc theo tháng": "Filter by month",
        "Lọc theo năm": "Filter by year",
        "Tất cả tháng": "All months",
        "Tổng doanh thu": "Total revenue",
        "Biểu đồ doanh thu": "Revenue chart",
        "Danh sách doanh thu": "Revenue list",
        "Mã thanh toán": "Payment ID",
        "Không có dữ liệu doanh thu.": "No revenue data available.",
        "Tháng": "Month",
        "Ngày": "Day",
        "Bảng điều khiển nhân viên": "Employee dashboard",
        "Nhân viên - Quản lý bán vé": "Employee - Ticket sales management",
        "Nhân viên bán vé": "Ticket sales",
        "Điều phối xe": "Transportation Coordinator",
        "Chăm sóc khách hàng": "Customer Service Representative",
        "Kế toán": "Accountant",
        "Quản lý ca": "Shift Supervisor",
        "Thông tin nhân viên": "Employee information",
        "Tạo, xem và cập nhật vé.": "Create, view, and update tickets.",
        "Xem lịch xe chạy.": "View bus schedules.",
        "Xác nhận thanh toán.": "Confirm payment.",
        "Hỗ trợ đổi vé.": "Support ticket changes.",
        "Tra cứu khách hàng.": "Search customers.",
        "Theo dõi vé đã hủy.": "Track cancelled tickets.",
        "Hỗ trợ đặt vé, thanh toán, sửa vé và tra cứu thông tin khách hàng.": "Support booking, payment, ticket changes, and customer lookup.",
        "Sửa thông tin": "Edit information",
        "Cập nhật họ tên, số điện thoại và avatar.": "Update full name, phone number, and avatar.",
        "Cập nhật thông tin thành công.": "Information updated successfully.",
        "Nhấn biểu tượng bút để đổi ảnh": "Click the pencil icon to change photo",
        "Vui lòng chọn đúng file ảnh.": "Please select a valid image file.",

        // TABLE COLUMNS
        "Trạng thái": "Status",
        "Trạng Thái": "Status",
        "trạng thái": "status",
        "Mô tả": "Description",
        "Mô Tả": "Description",
        "mô tả": "description",
        "Ghi chú khách hàng": "Customer note",
        "Ghi Chú Khách Hàng": "Customer Note",
        "Ghi chú": "Note",
        "Ghi Chú": "Note",
        "Lý do": "Reason",
        "Lý Do": "Reason",
        "Phản hồi": "Response",
        "Phản Hồi Admin": "Admin Response",
        "Ngày đặt": "Booking date",
        "Ngày Đặt": "Booking Date",
        "Ngày xử lý": "Processing date",
        "Ngày Xử Lý": "Processing Date",
        "Ngày yêu cầu": "Request date",
        "Ngày Yêu Cầu": "Request Date",
        "Ngày bắt đầu": "Start date",
        "Ngày Bắt Đầu": "Start Date",
        "Ngày kết thúc": "End date",
        "Ngày Kết Thúc": "End Date",
        "Ngày Sinh": "Date of Birth",
        "Mã": "ID",
        "Tên": "Name",
        "Điện thoại": "Phone",
        "Mã Bến": "Station ID",
        "Tên Bến": "Station Name",
        "Mã Xe": "Bus ID",
        "Biển Số": "License Plate",
        "Hiệu Xe": "Bus Brand",
        "Số Lượng Ghế": "Number of Seats",
        "Mã Tuyến Xe": "Route ID",
        "Mã Bến Đi": "Departure Station ID",
        "Mã Bến Đến": "Arrival Station ID",
        "Quãng Đường": "Distance",
        "Thời Gian Dự Kiến": "Estimated Duration",
        "Mã Tài Xế": "Driver ID",
        "Bằng Lái": "License",
        "Mã Ghế": "Seat ID",
        "Số Ghế": "Seat Number",
        "Vị Trí": "Position",
        "Mã Lịch Chạy": "Schedule ID",
        "Giờ Khởi Hành": "Departure Time",
        "Giờ Đến Dự Kiến": "Estimated Arrival Time",
        "Giá Cơ Bản": "Base Fare",
        "Mã Loại Vé": "Ticket Type ID",
        "Tên Loại Vé": "Ticket Type Name",
        "Hệ Số Giá": "Price Multiplier",
        "Mã Khách Hàng": "Customer ID",
        "Ảnh Đại Diện": "Avatar",
        "Mã Nhân Viên": "Employee ID",
        "Chức Vụ": "Position",
        "Quyền Hạn": "Role",
        "Mã Đặt Vé": "Booking ID",
        "Mã Chi Tiết": "Detail ID",
        "Tên Hành Khách": "Passenger Name",
        "Mã Thanh Toán": "Payment ID",
        "Mã Giao Dịch": "Transaction ID",
        "Mã Yêu Cầu": "Request ID",
        "Mã Khuyến Mãi": "Promotion ID",
        "Tên Chương Trình": "Program Name",
        "Tổng Tiền": "Total Amount",
        "Giá Vé": "Fare",
        "Số Tiền": "Amount",
        "Tỷ Lệ Giảm": "Discount Rate",
        "Tên Đăng Nhập": "Username",
        "Vai Trò": "Role",
        "Khách Hàng": "Customer",
        "Nhân Viên": "Employee",
        "Quản Trị": "Administrator",
        "NHANVIEN": "Employee",
        "ADMIN": "Admin",
        "USER": "User",
        "Số bản ghi": "Records",
        "Bạn có chắc muốn xóa?": "Are you sure you want to delete?",


        // ADMIN TABLE HEADERS - FULL CASE-SENSITIVE LABELS FROM TableDefinition.java
        "Mã Xe": "Bus ID",
        "Biển Số": "License Plate",
        "Hiệu Xe": "Vehicle Model",
        "Số Lượng Ghế": "Seat Count",
        "Loại Xe": "Vehicle Type",
        "Mã Bến Xe": "Station ID",
        "Tên Bến Xe": "Station Name",
        "Địa Chỉ": "Address",
        "Số Điện Thoại": "Phone Number",
        "Mã Tuyến Xe": "Route ID",
        "Mã Bến Đi": "Departure Station ID",
        "Mã Bến Đến": "Arrival Station ID",
        "Quãng Đường": "Distance",
        "Thời Gian Dự Kiến": "Estimated Duration",
        "Mã Tài Xế": "Driver ID",
        "Họ Tên": "Full Name",
        "Bằng Lái": "Driving License",
        "Mã Ghế": "Seat ID",
        "Số Ghế": "Seat Number",
        "Số ghế đã chọn:": "Selected seats:",
        "Vị Trí": "Position",
        "Mã Lịch Chạy": "Schedule ID",
        "Giờ Khởi Hành": "Departure Time",
        "Giờ Đến Dự Kiến": "Estimated Arrival Time",
        "Giá Cơ Bản": "Base Price",
        "Mã Loại Vé": "Ticket Type ID",
        "Tên Loại Vé": "Ticket Type Name",
        "Hệ Số Giá": "Price Multiplier",
        "Mã Khách Hàng": "Customer ID",
        "Ảnh Đại Diện": "Avatar",
        "Giới Tính": "Gender",
        "Mã Nhân Viên": "Employee ID",
        "Tên Đăng Nhập": "Username",
        "Mật Khẩu": "Password",
        "Quyền Hạn": "Role",
        "Mã Đặt Vé": "Booking ID",
        "Ngày Đặt": "Booking Date",
        "Tổng Tiền": "Total Amount",
        "Mã Chi Tiết": "Detail ID",
        "Giá Vé": "Ticket Price",
        "Tên Hành Khách": "Passenger Name",
        "Mã Thanh Toán": "Payment ID",
        "Số Tiền": "Amount",
        "Phương Thức": "Method",
        "Ngày Thanh Toán": "Payment Date",
        "Mã Giao Dịch": "Transaction ID",
        "Mã Yêu Cầu": "Request ID",
        "Lý Do": "Reason",
        "Phản Hồi Admin": "Admin Response",
        "Ngày Yêu Cầu": "Request Date",
        "Ngày Xử Lý": "Processed Date",
        "Mã Khuyến Mãi": "Promotion ID",
        "Tên Chương Trình": "Program Name",
        "Tỷ Lệ Giảm": "Discount Rate",
        "Ngày Bắt Đầu": "Start Date",
        "Ngày Kết Thúc": "End Date",
        "Mô Tả": "Description",
        "Ghi Chú": "Note",
        "Chức Vụ": "Position",
        "Áp dụng theo điều kiện đặt vé": "Subject to Bookings Conditions",

        // STATUS / DATA VALUES
        "Hoạt động": "Active",
        "Không hoạt động": "Inactive",
        "Còn làm": "Working",
        "Đã nghỉ": "Resigned",
        "Đã đặt": "Booked",
        "Trống": "Available",
        "Tạm hoãn": "Suspended",
        "Đã hoàn tất": "Completed",
        "Đang xử lý": "Processing",
        "Đã hủy": "Cancelled",
        "Đã thanh toán": "Paid",
        "Đã đặt online": "Booked online",
        "Đã liên kết": "Linked",
        "Đã lưu": "Saved",
        "Chưa thanh toán": "Unpaid",
        "Chờ thanh toán": "Pending payment",
        "Đã duyệt": "Approved",
        "Từ chối yêu cầu": "Reject request",
        "Từ chối": "Rejected",
        "Chờ duyệt": "Pending approval",
        "Duyệt": "Approve",
        "Đồng ý": "Accept",
        "Tiền mặt": "Cash",
        "Thẻ": "Card",
        "Ví điện tử": "E-wallet",
        "Giường nằm": "Sleeper bus",
        "Ghế ngồi": "Seat bus",
        "Limousine": "Limousine",
        "Thường": "Regular",
        "thường": "regular",
        "VIP": "VIP",
        "Muốn đổi lịch": "Want to reschedule",
        "Đặt nhầm ngày": "Wrong booking date",
        "Đặt nhầm tuyến xe": "Wrong route booking",
        "Đổi kế hoạch cá nhân": "Personal schedule changed",
        "Bận việc cá nhân": "Personal work",
        "bận việc cá nhân": "personal work",
        "Khách hủy vé": "Customer cancelled ticket",
        "Khách yêu cầu đổi chuyến": "Customer requested trip change",
        "Otherh thường": "Other regular",
        "Otherh VIP": "Other VIP",
        "Otherh bận việc cá nhân nên muốn hủy vé": "Other personal work so wants to cancel ticket",
        "Otherh đặt nhầm tuyến xe": "Other wrong route booking",
        "Otherh đặt nhầm ngày": "Other wrong booking date",
        "Khách đặt nhầm tuyến xe": "Customer booked the wrong route",
        "Khách đặt nhầm ngày": "Customer booked the wrong date",
        "Khách muốn đổi lịch": "Customer wants to reschedule",
        "Xe xuất phát không phù hợp": "Unsuitable Departure Bus",


        // EXACT FORM LABELS / FIX MIXED TRANSLATION
        "Reset mật khẩu bằng tên đăng nhập, số điện thoại hoặc email": "Reset password using your username, phone number, or email",
        "Tên đăng nhập, Số điện thoại hoặc email": "Username, phone number, or email",
        "Tên đăng nhập, số điện thoại hoặc Email": "Username, phone number, or email",
        "Username, số điện thoại hoặc email": "Username, phone number, or email",
        "Username, số VNĐiện thoại hoặc email": "Username, phone number, or email",
        "Username, số VNĐiện thoại hoặc Email": "Username, phone number, or email",
        "Số VNĐiện thoại": "Phone number",
        "số VNĐiện thoại": "phone number",
        "Điện thoại": "Phone",
        "điện thoại": "phone",

        // COMMON DATA VALUES
        "Bến xe Miền Đông": "Mien Dong Bus Station",
        "Bến xe Miền Tây": "Mien Tay Bus Station",
        "Bến xe Đà Nẵng": "Da Nang Bus Station",
        "Bến xe Hà Nội": "Ha Noi Bus Station",
        "Bến xe Đà Lạt": "Da Lat Bus Station",
        "Bến xe Nha Trang": "Nha Trang Bus Station",
        "Bến xe Cần Thơ": "Can Tho Bus Station",
        "Bến xe Quy Nhơn": "Quy Nhon Bus Station",
        "Bến xe Huế": "Hue Bus Station",
        "Bến xe Vũng Tàu": "Vung Tau Bus Station",
        "Bến xe Hải Phòng": "Hai Phong Bus Station",
        "Bến xe Thái Nguyên": "Thai Nguyen Bus Station",
        "Bến xe Nam Định": "Nam Dinh Bus Station",
        "TP.HCM": "Ho Chi Minh City",
        "TP HCM": "Ho Chi Minh City",
        "TP.HCM - Đà Nẵng": "Ho Chi Minh City - Da Nang",
        "TP.HCM - Hà Nội": "Ho Chi Minh City - Ha Noi",
        "TP.HCM - Nha Trang": "Ho Chi Minh City - Nha Trang",
        "TP.HCM - Cần Thơ": "Ho Chi Minh City - Can Tho",
        "Đà Nẵng - Hà Nội": "Da Nang - Ha Noi",
        "Đà Nẵng - TP.HCM": "Da Nang - Ho Chi Minh City",
        "Hà Nội - TP.HCM": "Ha Noi - Ho Chi Minh City",
        "Hà Nội - Đà Nẵng": "Ha Noi - Da Nang",
        "Bình Định": "Binh Dinh",
        "Thừa Thiên Huế": "Thua Thien Hue",
        "Bà Rịa - Vũng Tàu": "Ba Ria - Vung Tau",
        "Lâm Đồng": "Lam Dong",
        "Khánh Hòa": "Khanh Hoa",
        "Hải Phòng": "Hai Phong",
        "Thái Nguyên": "Thai Nguyen",
        "Nam Định": "Nam Dinh",
        "Quy Nhơn": "Quy Nhon",
        "Đà Lạt": "Da Lat",
        "Nha Trang": "Nha Trang",
        "Vũng Tàu": "Vung Tau",
        "Hoạt động": "Active",
        "Ngưng hoạt động": "Inactive",
        "Đã nghỉ": "Resigned",
        "Đã thanh toán": "Paid",
        "Đã TT": "Paid",
        "Chưa TT": "Unpaid",
        "Đã hủy": "Cancelled",
        "Chờ duyệt": "Pending approval",
        "Đã duyệt": "Approved",
        "Từ chối": "Rejected",
        "Tiền mặt": "Cash",
        "Chuyển khoản": "Bank transfer",
        "Thẻ ngân hàng": "Bank card",
        "Quản trị viên": "Administrator",
        "Nhân viên": "Employee",
        "Khách hàng": "Customer",
        "Tài xế": "Driver",
        "Vé thường": "Regular ticket",
        "Vé VIP": "VIP ticket",
        "Vé trẻ em": "Child ticket",
        "Vé người cao tuổi": "Senior Citizen Ticket",
        "Vé khứ hồi": "Round-Trip Ticket",
        "Vé nhóm": "Group Ticket",
        "Vé cuối tuần": "Weekend Ticket",
        "Vé lễ Tết": "Holiday Ticket",
        "Vé đặt sớm": "Early Booking Ticket",
        "Vé linh hoạt": "Flexible Ticket",
        "Vé doanh nhân": "Business Class Ticket",
        "Vé gia đình": "Family Ticket",
        "Vé học sinh": "Pupil Ticket",
        "Vé ưu tiên": "Priority Ticket",
        "Vé đêm": "Night Ticket",
        "Vé cao cấp": "Premium Ticket",
        "Vé tiết kiệm": "Economy Ticket",
        "Vé combo": "Combo Ticket",
        "Vé đoàn": "Tour Group Ticket",
        "Vé khách thân thiết": "Loyalty Member Ticket",
        "Vé hoàn linh hoạt": "Flexible Refund Ticket",
        "Vé tuyến ngắn": "Short-Distance Ticket",
        "Vé tuyến dài": "Long-Distance Ticket",
        "Vé siêu tiết kiệm": "Super Saver Ticket",
        "Giường nằm 40 chỗ": "40-seat sleeper bus",
        "Giường nằm 44 chỗ": "44-seat sleeper bus",
        "Limousine 22 phòng": "22-cabin limousine",
        "Limousine 34 phòng": "34-cabin limousine",

        // LOCATIONS
        "Miền Đông": "Mien Dong",
        "Miền Tây": "Mien Tay",
        "Hà Nội": "Ha Noi",
        "Đà Nẵng": "Da Nang",
        "Cần Thơ": "Can Tho",
        "TP Hồ Chí Minh": "Ho Chi Minh City",
        "Hồ Chí Minh": "Ho Chi Minh City"
    };

    const enToVi = Object.fromEntries(
        Object.entries(viToEn)
            .filter(([vi, en]) => vi && en && vi !== en)
            .map(([vi, en]) => [en, vi])
    );

    function buildNormalizedDictionary(dict) {
        const normalized = {};
        Object.entries(dict).forEach(([key, value]) => {
            if (!key || !value) return;
            normalized[key.normalize('NFC').trim().replace(/\s+/g, " ").toLowerCase()] = value;
        });
        return normalized;
    }

    const normalizedViToEn = buildNormalizedDictionary(viToEn);

    Object.assign(enToVi, {
        "Login": "Đăng nhập",
        "Register": "Đăng ký",
        "Password": "Mật khẩu",
        "Username": "Tên đăng nhập",
        "Username or Gmail": "Tên đăng nhập hoặc Gmail",
        "Login with username or linked Gmail": "Đăng nhập bằng tên đăng nhập hoặc Gmail đã liên kết",
        "Forgot password?": "Quên mật khẩu?",
        "Don't have an account?": "Chưa có tài khoản?",
        "Register now": "Đăng ký ngay",
        "Bus Ticket Online": "Vé Xe Online",
        "Bus Tickets Online": "Vé Bus Online",
        "Book tickets quickly, manage easily": "Đặt vé nhanh chóng, quản lý dễ dàng",
        "Wallet / Cards": "Ví/Thẻ",
        "My Profile": "Thông tin của tôi",
        "My Offers": "Ưu đãi của tôi",
        "My Trips": "Lịch sử vé",
        "Book tickets": "Mua vé",
        "NHANVIEN": "Nhân viên",
        "ADMIN": "Quản trị",
        "USER": "Khách hàng"
    });

    const normalizedEnToVi = buildNormalizedDictionary(enToVi);

    function getCurrentLang() {
        const appLang = (window.APP_LANG || "").toString().replace(/["']/g, "").toLowerCase();
        const dataLang = (document.documentElement.getAttribute("data-lang") || "").toString().toLowerCase();
        const savedLang = (localStorage.getItem("lang") || "").toString().toLowerCase();
        return savedLang || appLang || dataLang || "vi";
    }

    function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }


    function normalizePlain(value) {
        return (value || "")
            .toString()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "d")
            .replace(/[^a-z0-9]+/g, " ")
            .trim();
    }

    function translateLocationName(value, lang) {
        if (!value) return value;
        let result = String(value).trim();
        const locationMap = lang === "en" ? {
            "TP.HCM": "Ho Chi Minh City", "TP HCM": "Ho Chi Minh City", "TP Hồ Chí Minh": "Ho Chi Minh City", "Hồ Chí Minh": "Ho Chi Minh City",
            "Miền Đông": "Mien Dong", "Miền Tây": "Mien Tay", "Đà Nẵng": "Da Nang", "Hà Nội": "Ha Noi", "Đà Lạt": "Da Lat",
            "Nha Trang": "Nha Trang", "Cần Thơ": "Can Tho", "Quy Nhơn": "Quy Nhon", "Huế": "Hue", "Vũng Tàu": "Vung Tau",
            "Hải Phòng": "Hai Phong", "Thái Nguyên": "Thai Nguyen", "Nam Định": "Nam Dinh", "Lâm Đồng": "Lam Dong",
            "Khánh Hòa": "Khanh Hoa", "Bình Định": "Binh Dinh", "Thừa Thiên Huế": "Thua Thien Hue", "Bà Rịa - Vũng Tàu": "Ba Ria - Vung Tau"
        } : {
            "Ho Chi Minh City": "TP.HCM", "Mien Dong": "Miền Đông", "Mien Tay": "Miền Tây", "Da Nang": "Đà Nẵng", "Ha Noi": "Hà Nội", "Da Lat": "Đà Lạt",
            "Can Tho": "Cần Thơ", "Quy Nhon": "Quy Nhơn", "Hue": "Huế", "Vung Tau": "Vũng Tàu", "Hai Phong": "Hải Phòng", "Thai Nguyen": "Thái Nguyên", "Nam Dinh": "Nam Định",
            "Lam Dong": "Lâm Đồng", "Khanh Hoa": "Khánh Hòa", "Binh Dinh": "Bình Định", "Thua Thien Hue": "Thừa Thiên Huế", "Ba Ria - Vung Tau": "Bà Rịa - Vũng Tàu"
        };
        Object.entries(locationMap).sort((a, b) => b[0].length - a[0].length).forEach(([from, to]) => {
            result = result.replace(new RegExp(escapeRegExp(from), "g"), to);
        });
        return result;
    }

    function translateStructuredDataText(text, lang) {
        if (!text) return text;
        let value = String(text).trim().replace(/\s+/g, " ");

        if (lang === "en") {
            value = value.replace(/VNĐiện/g, "điện");
            value = value.replace(/^Bến xe\s+(.+)$/i, function (_, name) {
                return translateLocationName(name, "en") + " Bus Station";
            });
            value = value.replace(/^(.+?)\s*[-–→]\s*(.+)$/g, function (_, a, b) {
                return translateLocationName(a, "en") + " - " + translateLocationName(b, "en");
            });
            value = translateLocationName(value, "en");
        }
        return value;
    }



    function romanizeVietnamese(value) {
        return (value || "")
            .toString()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D");
    }

    function titleCaseSimple(value) {
        return (value || "").toString().replace(/\b[a-z]/g, function (m) { return m.toUpperCase(); });
    }



    function autoTranslateSqlDataText(text, lang) {
        if (!text) return text;
        let value = String(text).trim().replace(/\s+/g, " ");
        if (lang !== "en") return value;

        const exactMap = {
            "Hoạt động": "Active", "Đang hoạt động": "Active", "Ngưng hoạt động": "Inactive", "Không hoạt động": "Inactive",
            "Còn làm": "Working", "Đang làm": "Working", "Đã nghỉ": "Resigned", "Nghỉ việc": "Resigned",
            "Nam": "Male", "Nữ": "Female", "Khác": "Other",
            "Đã đặt": "Booked", "Trống": "Available", "Đã khóa": "Locked", "Bảo trì": "Maintenance",
            "Đã thanh toán": "Paid", "Chưa thanh toán": "Unpaid", "Chờ thanh toán": "Pending payment", "Thanh toán thất bại": "Payment failed",
            "Đã TT": "Paid", "Chưa TT": "Unpaid", "Đã hủy": "Cancelled", "Đã huỷ": "Cancelled",
            "Chờ duyệt": "Pending approval", "Đang chờ duyệt": "Pending approval", "Đã duyệt": "Approved", "Từ chối": "Rejected",
            "Đã xử lý": "Processed", "Đang xử lý": "Processing", "Chưa xử lý": "Unprocessed", "Đã hoàn tất": "Completed",
            "Tiền mặt": "Cash", "Chuyển khoản": "Bank transfer", "Thẻ ngân hàng": "Bank card", "Thẻ": "Card", "Ví điện tử": "E-wallet", "QR": "QR",
            "Quản trị": "Administrator", "Quản trị viên": "Administrator", "Nhân viên": "Employee", "Khách hàng": "Customer", "Tài xế": "Driver", "Nhân viên bán vé": "Ticket sales staff", "NHANVIEN": "Employee", "ADMIN": "Admin", "USER": "User",
            "Vé thường": "Regular ticket", "Vé phổ thông": "Regular ticket", "Vé VIP": "VIP ticket", "Vé trẻ em": "Child ticket", "Vé người lớn": "Adult ticket", "Vé sinh viên": "Student ticket",
            "Giường nằm": "Sleeper bus", "Ghế ngồi": "Seat bus", "Limousine": "Limousine", "Thường": "Regular", "VIP": "VIP",
            "Không có": "None", "Chưa có": "None", "Có": "Yes", "Không": "No"
        };
        if (exactMap[value]) return exactMap[value];

        // Bến xe mới thêm từ SQL: "Bến xe Quảng Ngãi" -> "Quang Ngai Bus Station"
        value = value.replace(/^Bến xe\s+(.+)$/i, function (_, name) {
            return romanizeVietnamese(translateLocationName(name, "en")) + " Bus Station";
        });

        // Tuyến mới thêm từ SQL: "TP.HCM - Quảng Ngãi" -> "Ho Chi Minh City - Quang Ngai"
        value = value.replace(/^(.+?)\s*[-–→]\s*(.+?)$/g, function (_, a, b) {
            return romanizeVietnamese(translateLocationName(a, "en")) + " - " + romanizeVietnamese(translateLocationName(b, "en"));
        });

        // Loại xe / ghế mới thêm từ SQL.
        value = value.replace(/Giường nằm\s*(\d+)\s*(chỗ|giường)?/gi, "$1-seat sleeper bus");
        value = value.replace(/Ghế ngồi\s*(\d+)\s*(chỗ|ghế)?/gi, "$1-seat bus");
        value = value.replace(/Limousine\s*(\d+)\s*(phòng|chỗ|ghế)?/gi, "$1-cabin limousine");
        value = value.replace(/Xe khách\s*/gi, "Bus ");
        value = value.replace(/Xe giường nằm\s*/gi, "Sleeper bus ");
        value = value.replace(/Xe ghế ngồi\s*/gi, "Seat bus ");

        // Khuyến mãi / mô tả mới thêm từ SQL.
        value = value.replace(/Giảm\s*(\d+(?:\.\d+)?)\s*%/gi, "$1% discount");
        value = value.replace(/cho khách hàng mới/gi, "for new customers");
        value = value.replace(/cho sinh viên/gi, "for students");
        value = value.replace(/khi thanh toán bằng/gi, "when paying by");
        value = value.replace(/khi thanh toán qua/gi, "when paying by");
        value = value.replace(/đặt vé online/gi, "online booking");
        value = value.replace(/cuối tuần/gi, "weekend");
        value = value.replace(/đầu tuần/gi, "early-week");

        // Lý do hủy/sửa vé mới thêm từ SQL.
        value = value.replace(/đặt nhầm ngày/gi, "wrong booking date");
        value = value.replace(/đặt nhầm tuyến/gi, "wrong route booking");
        value = value.replace(/muốn đổi lịch/gi, "wants to reschedule");
        value = value.replace(/bận việc cá nhân/gi, "personal matter");
        value = value.replace(/đổi kế hoạch/gi, "schedule changed");
        value = value.replace(/khách hủy vé/gi, "customer cancelled ticket");
        value = value.replace(/khách yêu cầu/gi, "customer requested");

        // Các từ dữ liệu nghiệp vụ thường gặp. Sau cùng sẽ bỏ dấu tiếng Việt còn sót.
        const wordRules = [
            ["Bến xe", "Bus Station"], ["Tuyến xe", "Route"], ["Tuyến", "Route"], ["Xe khách", "Bus"],
            ["Tài xế", "Driver"], ["Khách hàng", "Customer"], ["Hành khách", "Passenger"], ["Nhân viên", "Employee"],
            ["Thanh toán", "Payment"], ["thanh toán", "payment"], ["Hủy vé", "Ticket cancellation"], ["hủy vé", "ticket cancellation"],
            ["Sửa vé", "Ticket change"], ["sửa vé", "ticket change"], ["Ghi chú", "Note"], ["Lý do", "Reason"],
            ["Phản hồi", "Response"], ["Mô tả", "Description"], ["Chương trình", "Program"], ["Ưu đãi", "Offer"],
            ["Khuyến mãi", "Promotion"], ["Ngày", "Date"], ["Giờ", "Time"], ["Số điện thoại", "Phone number"],
            ["Địa chỉ", "Address"], ["Chức vụ", "Position"], ["Quyền hạn", "Role"]
        ];
        wordRules.sort((a, b) => b[0].length - a[0].length).forEach(function ([from, to]) {
            value = value.replace(new RegExp(escapeRegExp(from), "gi"), to);
        });

        value = translateLocationName(value, "en");

        return value;
    }

    function translateAdminDataValue(text, lang) {
        if (!text) return text;
        let value = String(text).trim().replace(/\s+/g, " ");
        if (lang !== "en") return value;

        const autoSqlTranslated = autoTranslateSqlDataText(value, lang);
        if (autoSqlTranslated && autoSqlTranslated !== value) return autoSqlTranslated;

        const exactDataMap = {
            "Hoạt động": "Active", "Ngưng hoạt động": "Inactive", "Không hoạt động": "Inactive",
            "Còn làm": "Working", "Đã nghỉ": "Resigned", "Đã đặt": "Booked", "Trống": "Available",
            "Tạm hoãn": "Suspended", "Đã hoàn tất": "Completed", "Đang xử lý": "Processing",
            "Đã hủy": "Cancelled", "Đã thanh toán": "Paid", "Chưa thanh toán": "Unpaid",
            "Đã đặt online": "Booked online", "Đã liên kết": "Linked", "Đã lưu": "Saved",
            "Chờ thanh toán": "Pending payment", "Đã TT": "Paid", "Chưa TT": "Unpaid",
            "Đã duyệt": "Approved", "Chờ duyệt": "Pending approval", "Từ chối": "Rejected",
            "Duyệt": "Approve", "Đồng ý": "Accept", "Đã phản hồi": "Responded", "Chưa phản hồi": "No response yet",
            "Tiền mặt": "Cash", "Chuyển khoản": "Bank transfer", "Thẻ ngân hàng": "Bank card",
            "Thẻ": "Card", "Ví điện tử": "E-wallet", "QR": "QR", "Thanh toán QR": "QR payment",
            "Nam": "Male", "Nữ": "Female", "Khác": "Other",
            "Quản trị": "Administrator", "Quản trị viên": "Administrator", "Admin": "Admin",
            "Nhân viên": "Employee", "Khách hàng": "Customer", "Tài xế": "Driver",
            "NHANVIEN": "Employee", "ADMIN": "Admin", "USER": "User",
            "Nhân viên bán vé": "Ticket sales staff", "Quản lý": "Manager",
            "Vé thường": "Regular ticket", "Vé VIP": "VIP ticket", "Vé trẻ em": "Child ticket",
            "Thường": "Regular", "VIP": "VIP",
            "Giường nằm": "Sleeper bus", "Ghế ngồi": "Seat bus", "Limousine": "Limousine",
            "Muốn đổi lịch": "Want to reschedule", "Đặt nhầm ngày": "Wrong booking date",
            "Đặt nhầm tuyến xe": "Wrong route booking", "Đổi kế hoạch cá nhân": "Personal schedule changed",
            "Bận việc cá nhân": "Personal matter", "Khách hủy vé": "Customer cancelled ticket",
            "Khách yêu cầu đổi chuyến": "Customer requested trip change", "Khách đặt nhầm tuyến xe": "Customer booked the wrong route",
            "Khách đặt nhầm ngày": "Customer booked the wrong date", "Khách muốn đổi lịch": "Customer wants to reschedule",
            "Không có": "None", "Chưa có": "None", "Không": "No", "Có": "Yes"
        };
        if (exactDataMap[value]) return exactDataMap[value];

        value = value.replace(/VNĐiện/g, "Phone");

        value = value.replace(/^Bến xe\s+(.+)$/i, function (_, name) {
            return translateLocationName(name, "en") + " Bus Station";
        });

        value = value.replace(/^(.*?)\s*[-–→]\s*(.*?)$/g, function (_, a, b) {
            return translateLocationName(a, "en") + " - " + translateLocationName(b, "en");
        });

        value = value.replace(/Giường nằm\s*(\d+)\s*chỗ/gi, "$1-seat sleeper bus");
        value = value.replace(/Ghế ngồi\s*(\d+)\s*chỗ/gi, "$1-seat bus");
        value = value.replace(/Limousine\s*(\d+)\s*(phòng|chỗ)/gi, "$1-cabin limousine");
        value = value.replace(/Tầng\s*(\d+)/gi, "Floor $1");
        value = value.replace(/Hàng\s*([A-Z0-9]+)/gi, "Row $1");

        const phraseMap = {
            "Ưu đãi tuyến dài": "Long route offer",
            "Ưu đãi ví điện tử": "E-wallet offer",
            "Ưu đãi cuối tuần": "Weekend offer",
            "Ưu đãi đầu tuần": "Early-week offer",
            "Ưu đãi sinh viên": "Student offer",
            "Ưu đãi giờ vàng": "Golden hour offer",
            "Ưu đãi liên kết ngân hàng": "Bank-link offer",
            "Ưu đãi gia đình": "Family offer",
            "Giảm 20% cho tuyến đường trên 800km": "20% discount for routes over 800 km",
            "Giảm 15% khi thanh toán qua ví hoặc QR": "15% discount when paying by wallet or QR",
            "Giảm 12% cho chuyến đi cuối tuần": "12% discount for weekend trips",
            "Giảm 10% đặt vé online": "10% discount for online booking",
            "Giảm giá hè": "Summer Discount",
            "Mừng khai trương tuyến mới": "New Route Launch Promotion",
            "Giảm giá thành viên bạc": "Silver Member Discount",
            "Giảm giá thành viên vàng": "Gold Member Discount",
            "Ưu đãi sinh nhật": "Offer Birthday",
            "Ưu đãi đặt vé đêm": "Night Booking Promotion",
            "Combo vé khứ hồi": "Round-Trip Combo Discount",
            "Ưu đãi lễ 30/4": "April 30 Holiday Promotion",
            "Ưu đãi Quốc khánh": "National Day Promotion",
            "Ưu đãi Tết Dương lịch": "New Year Promotion",
            "Ưu đãi Tết Nguyên đán": "Lunar New Year Promotion",
            "Giảm giá tuyến miền Trung": "Central Region Route Discount",
            "Giảm giá tuyến miền Tây": "Mekong Delta Route Discount",
            "Ưu đãi khách đoàn": "Group Customer Promotion",
            "Ưu đãi cuối tháng": "End-of-Month Promotion",
            "Áp dụng mã KM01 khi đặt vé online": "Apply code KM01 when booking online",
            "Áp dụng mã KM02 cho khách hàng mới": "Apply code KM02 for new customers",
            "Giảm thêm cho khách hàng sinh viên": "Extra discount for student customers",
            "Áp dụng cho khách hàng đủ điều kiện trong thời gian chương trình": "Applies to eligible customers during the promotion period",
            "Đã xác nhận thanh toán": "Payment confirmed",
            "Chưa xác nhận thanh toán": "Payment not confirmed yet",
            "Chờ nhân viên xử lý": "Waiting for staff processing",
            "Khách hàng yêu cầu hủy vé": "Customer requested ticket cancellation",
            "Admin đã duyệt yêu cầu": "Admin approved the request",
            "Admin từ chối yêu cầu": "Admin rejected the request",
            "Đã đặt online": "Booked online",
            "Đã liên kết": "Linked",
            "Đã lưu": "Saved"
        };
        Object.entries(phraseMap).sort((a, b) => b[0].length - a[0].length).forEach(function ([from, to]) {
            value = value.replace(new RegExp(escapeRegExp(from), "gi"), to);
        });

        value = translateLocationName(value, "en");

        // Dịch các từ tiếng Việt còn sót trong dữ liệu bảng.
        const wordMap = {
            "Bến xe": "Bus Station", "Tuyến": "Route", "Xe khách": "Bus", "Xe": "Bus",
            "Khách": "Customer", "Hành khách": "Passenger", "Nhân viên": "Employee", "Tài xế": "Driver",
            "Đã": "Already", "Chưa": "Not yet", "Chờ": "Pending", "Hủy": "Cancel", "hủy": "cancel",
            "duyệt": "approval", "thanh toán": "payment", "Thanh toán": "Payment",
            "Ghi chú": "Note", "Lý do": "Reason", "Phản hồi": "Response"
        };
        Object.entries(wordMap).sort((a, b) => b[0].length - a[0].length).forEach(function ([from, to]) {
            value = value.replace(new RegExp(escapeRegExp(from), "g"), to);
        });

        return value;
    }

    function formatDateTime(text) {
        if (!text) return text;
        let result = String(text);
        result = result.replace(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::\d{2})?/g, "$4:$5 $3/$2/$1");
        result = result.replace(/(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})(?::\d{2})?/g, "$4:$5 $3/$2/$1");
        return result;
    }

    function normalizeMoney(text, lang) {
        if (!text) return text;
        let result = String(text);
        if (lang === "en") {
            result = result.replace(/\bVNĐ\b/g, "VND");
            result = result.replace(/(\d)\s?₫\b/g, "$1 VND");
            result = result.replace(/(\d)\s?đ\b/g, "$1 VND");
        }
        return result;
    }



    function fixMixedEnglishVietnamese(text, lang) {
        if (lang !== "en" || !text) return text;
        let value = String(text);

        const exact = {
            "Da dat online": "Booked online",
            "da dat online": "Booked online",
            "lich chay": "Schedule",
            "Lich chay": "Schedule",
            "type ve": "Ticket Types",
            "Type ve": "Ticket Types",
            "booking ve": "Bookings",
            "Booking ve": "Bookings",
            "Chi tiet ghe booking": "Booked Seat Details",
            "chi tiet ghe booking": "Booked Seat Details",
            "ve da cancel": "Cancelled Tickets",
            "Ve da cancel": "Cancelled Tickets",
            "dang xuat": "Logout",
            "Dang xuat": "Logout",
            "trang chu": "Home",
            "Trang chu": "Home",
            "Trở lạiup / Restore": "Backup/Restore",
            "Back up / Restore": "Backup/Restore",
            "Backup / Restore": "Backup/Restore",
            "Backup/Restore": "Backup/Restore",
            "Quan ly Data": "Data Management",
            "Ghe": "Seats",
            "So ghe da chon:": "Selected seats:",
            "Lich chay": "Schedules",
            "type ve": "Ticket types",
            "booking ve": "Bookings",
            "Chi tiet ghe booking": "Booked seat details",
            "Ve da cancel": "Cancelled tickets",
            "reports revenue": "Revenue report",
            "account": "Accounts",
            "Dang xuat": "Logout",
            "Trở lạiup / Restore": "Backup / Restore",
            "Trở lạiup": "Backup",
            "Quan ly ban ticket": "Ticket Sales Management",
            "Quan ly van hanh bus": "Bus Operations Management",
            "Quan ly nguoi dung": "User Management",
            "Bao cao va xu ly": "Reports and Processing",
            "Nhom chuc nang quan tri": "Admin Function Groups",
            "Nhom chuc nang": "Function Groups",
            "Xin chaoadmin": "Hello admin",
            "Duyet yeu cau Ticket cancellation": "Approve Ticket Cancellation Requests",
            "Busm yeu cau": "View requests",
            "Busm trang mua ticket": "View ticket booking page",
            "Them moi": "Add new",
            "+ Them moi": "+ Add new",
            "Sua": "Edit",
            "Xoa": "Delete",
            "Truy cap": "Access",
            "Dang xuat": "Logout",
            "Trang chu": "Home",
            "Van hanh": "Operations",
            "Ban ticket": "Ticket sales",
            "Nguoi dung": "Users",
            "Bao cao": "Reports",
            "Doanh thu": "Revenue",
            "Yeu cau Ticket cancellation": "Ticket Cancellation Requests",
            "Cau hinh QR": "QR Configuration",
            "Sao luu va khoi phuc Data": "Data Backup and Restore",
            "Dat ticket": "Bookings",
            "Loai ticket": "Ticket types",
            "Ticket da huy": "Cancelled tickets",
            "Ticket change": "Ticket changes",
            "Passenger phu": "Passenger details",
            "Admin:admin": "Admin: admin",
            "Anh QR hien tai": "Current QR Image",
            "Chon anh QR moi": "Choose new QR Image",
            "Cat anh QR": "Crop QR Image",
            "Luu cau hinh": "Save configuration",
            "Huy": "Cancel",
            "Quay lai": "Back"
        };
        const trimmed = value.trim().replace(/\s+/g, " ");
        if (exact[trimmed]) return value.replace(trimmed, exact[trimmed]);

        const phraseRules = [
            [/\blich\s+chay\b/gi, "Schedule"],
            [/\btype\s+ve\b/gi, "Ticket Types"],
            [/\bbooking\s+ve\b/gi, "Bookings"],
            [/\bchi\s+tiet\s+ghe\s+booking\b/gi, "Booked Seat Details"],
            [/\bve\s+da\s+cancel\b/gi, "Cancelled Tickets"],
            [/\bdang\s+xuat\b/gi, "Logout"],
            [/\btrang\s+chu\b/gi, "Home"],
            [/Trở\s*lạiup\s*\/\s*Restore/gi, "Backup/Restore"],
            [/Back\s*up\s*\/\s*Restore/gi, "Backup/Restore"],
            [/Backup\s*\/\s*Restore/gi, "Backup/Restore"],
            [/\bGhe\b/gi, "Seats"],
            [/\bLich\s+chay\b/gi, "Schedules"],
            [/\btype\s+ve\b/gi, "Ticket types"],
            [/\bbooking\s+ve\b/gi, "Bookings"],
            [/\bChi\s+tiet\s+ghe\s+booking\b/gi, "Booked seat details"],
            [/\bVe\s+da\s+cancel\b/gi, "Cancelled tickets"],
            [/\breports\s+revenue\b/gi, "Revenue report"],
            [/\bTicket\s+sales\b/gi, "Ticket sales"],
            [/\baccount\b/gi, "account"],
            [/\bDang\s+xuat\b/gi, "Logout"],
            [/\bQuan ly\s+Bus Station\b/gi, "Manage Bus Stations"],
            [/\bQuan ly\s+Route\b/gi, "Manage Routes"],
            [/\bQuan ly\s+Bus\b/gi, "Manage Buses"],
            [/\bQuan ly\s+Driver\b/gi, "Manage Drivers"],
            [/\bQuan ly\s+seat\b/gi, "Manage Seats"],
            [/\bQuan ly\s+schedule\b/gi, "Manage Schedules"],
            [/\bQuan ly\s+loai ticket\b/gi, "Manage Ticket Types"],
            [/\bQuan ly\s+dat ticket\b/gi, "Manage Bookings"],
            [/\bQuan ly\s+Payment\b/gi, "Manage Payments"],
            [/\bQuan ly\s+Customer\b/gi, "Manage Customers"],
            [/\bQuan ly\s+Passenger\b/gi, "Manage Passengers"],
            [/\bQuan ly\s+Employee\b/gi, "Manage Employees"],
            [/\bQuan ly\s+Account\b/gi, "Manage Accounts"],
            [/\bQuan ly\s+Promotion\b/gi, "Manage Promotions"],
            [/\bQuan ly\s+Ticket cancellation\b/gi, "Manage Ticket Cancellations"],
            [/\bQuan ly\s+Ticket change\b/gi, "Manage Ticket Changes"],
            [/\bDetails seat dat\b/gi, "Booked Seat Details"],
            [/\bId\s+Ben\s+Di\b/gi, "Departure Station ID"],
            [/\bId\s+Ben\s+Den\b/gi, "Arrival Station ID"],
            [/\bQuang\s+Duong\b/gi, "Distance"],
            [/\bThoi\s+Gian\s+Du\s+Kien\b/gi, "Estimated Duration"],
            [/\bSo\s+Luong\s+Seat\b/gi, "Seat Count"],
            [/\bLoai\s+Bus\b/gi, "Bus Type"],
            [/\bBang\s+Lai\b/gi, "Driving License"],
            [/\bSo\s+Seat\b/gi, "Seat Number"],
            [/\bVi\s+Tri\b/gi, "Position"],
            [/\bTime\s+Khoi\s+Hanh\b/gi, "Departure Time"],
            [/\bTime\s+Den\s+Du\s+Kien\b/gi, "Estimated Arrival Time"],
            [/\bPrice\s+Co\s+Ban\b/gi, "Base Price"],
            [/\bHe\s+So\s+Price\b/gi, "Price Multiplier"],
            [/\bName\s+Loai\s+Ticket\b/gi, "Ticket Type Name"],
            [/\bDate\s+Dat\b/gi, "Booking Date"],
            [/\bId\s+Dat\s+Ticket\b/gi, "Booking ID"],
            [/\bId\s+Loai\s+Ticket\b/gi, "Ticket Type ID"],
            [/\bId\s+Giao\s+Dich\b/gi, "Transaction ID"],
            [/\bId\s+Yeu\s+Cau\b/gi, "Request ID"],
            [/\bDate\s+Yeu\s+Cau\b/gi, "Request Date"],
            [/\bDate\s+Xu\s+Ly\b/gi, "Processed Date"],
            [/\bResponse\s+Admin\b/gi, "Admin Response"],
            [/\bThao\s+Tac\b/gi, "Actions"],
            [/\bAnh\s+Dai\s+Dien\b/gi, "Avatar"],
            [/\bDate\s+Sinh\b/gi, "Date of Birth"],
            [/\bCitizen\s+ID\b/gi, "Citizen ID"],
            [/\bFull\s+Name\b/gi, "Full Name"],
            [/\bPhone\s+number\b/gi, "Phone Number"],
            [/\bName\s+Passenger\b/gi, "Passenger Name"],
            [/\bTen\s+ngan\s+hang\b/gi, "Bank name"],
            [/\bName\s+ngan\s+hang\b/gi, "Bank name"],
            [/\bSo\s+Account\b/gi, "Account number"],
            [/\bChu\s+Account\b/gi, "Account holder"],
            [/\bLuu\s+cau\s+hinh\b/gi, "Save configuration"],
            [/\bChon\s+anh\s+QR\s+moi\b/gi, "Choose new QR image"],
            [/\bAnh\s+QR\s+hien\s+tai\b/gi, "Current QR image"],
            [/\bCo\s+the\s+chon\s+anh\s+roi\s+bam\s+Cat\s+anh\s+QR\s+de\s+can\s+lai\s+anh\s+truoc\s+khi\s+luu\.?/gi, "You can choose an image, then click Crop QR to align it before saving."],
            [/\bThanh\s+toan\s+qua\s+QR\s+-\s+Cho\s+xac\s+nhan\s+QR\b/gi, "QR payment - Waiting for QR confirmation"],
            [/\bThanh\s+toan\s+qua\s+the\s+lien\s+ket\s+-\s+Da\s+thanh\s+toan\s+tu\s+dong\b/gi, "Linked card payment - Automatically paid"],
            [/\bThanh\s+toan\s+tien\s+mat\s+khi\s+lay\s+ve\s+tai\s+nha\s+xe\s+-\s+Cho\s+thanh\s+toan\s+tai\s+nha\s+xe\b/gi, "Cash payment at bus station - Waiting for station payment"],
            [/\bThanh\s+toan\s+chuyen\s+khoan\s+bang\s+lien\s+ket\s+ngan\s+hang\s+-\s+Da\s+thanh\s+toan\s+tu\s+dong\b/gi, "Bank transfer via linked bank account - Automatically paid"],
            [/\bThanh\s+toan\s+chuyen\s+khoan\s+bang\s+lien\s+ket\s+ngan\s+hang\s+-\s+Da\s+hoan\s+tien\b/gi, "Bank transfer via linked bank account - Refunded"],
            [/\bThanh\s+toan\s+chuyen\s+khoan\s+ngan\s+hang\s+-\s+Da\s+thanh\s+toan\b/gi, "Bank Transfer - Paid"],
            [/\bThanh\s+toan\s+qua\s+vi\s+dien\s+tu\s+-\s+Da\s+thanh\s+toan\b/gi, "E-Wallet Payment - Paid"],
            [/\bKhach\s+VIP\b/gi, "VIP customer"],
            [/\bKhach\s+thuong\b/gi, "Regular customer"],
            [/\bKhach\s+online\b/gi, "Online customer"],
            [/\bKhach\s+dat\s+online\b/gi, "Online booking customer"],
            [/\bTrai\b/gi, "Left"],
            [/\bPhai\b/gi, "Right"],
            [/\bGiuong\s+nam\s+VIP\b/gi, "VIP sleeper bus"],
            [/\bKhong\s+uu\s+tien\b/gi, "No priority"],
            [/\bSeat\s+rong\s+hon\b/gi, "Wider seat"],
            [/\bAp\s+dung\s+cho\s+tre\s+em\b/gi, "Applies to children"],
            [/\bOffer\s+sinh\s+vien\b/gi, "Student offer"],
            [/\bOffer\s+nguoi\s+cao\s+tuoi\b/gi, "Senior offer"],
            [/\bOffer\s+theo\s+Program\b/gi, "Program offer"],
            [/\bAp\s+dung\s+theo\s+dieu\s+kien\s+dat\s+ticket\b/gi, "Applies according to booking conditions"],
            [/\bPhu\s+hop\s+nhieu\s+nhom\s+khach\b/gi, "Suitable for many customer groups"],
            [/\bTicket\s+nguoi\s+cao\s+tuoi\b/gi, "Senior ticket"],
            [/\bTicket\s+khu\s+hoi\b/gi, "Round-trip ticket"],
            [/\bTicket\s+nhom\b/gi, "Group ticket"],
            [/\bTicket\s+le\s+Tet\b/gi, "Holiday ticket"],
            [/\bTicket\s+dat\s+som\b/gi, "Early booking ticket"],
            [/\bTicket\s+linh\s+hoat\b/gi, "Flexible ticket"],
            [/\bTicket\s+doanh\s+nhan\b/gi, "Business ticket"],
            [/\bTicket\s+gia\s+dinh\b/gi, "Family ticket"],
            [/\bTicket\s+hoc\s+sinh\b/gi, "Student ticket"],
            [/\bTicket\s+uu\s+tien\b/gi, "Priority ticket"],
            [/\bTicket\s+dem\b/gi, "Night ticket"],
            [/\bTam\s+hoan\b/gi, "Suspended"],
            [/\bYeu\s+cau\s+huy\b/gi, "Cancellation requested"],
            [/\bKhong\s+du\s+dieu\s+kien\s+huy\b/gi, "Not eligible for cancellation"],
            [/\bDa\s+duyet\s+huy\s+va\s+hoan\s+tien\s+theo\s+quy\s+dinh\b/gi, "Cancellation approved and refunded according to policy"],
            [/\bDa\s+xu\s+ly\s+theo\s+quy\s+dinh\b/gi, "Processed according to policy"],
            [/\bwants\s+to\s+reschedule\s+di\b/gi, "wants to reschedule"],
            [/\bschedule\s+changed\s+ca\s+nhan\b/gi, "personal schedule changed"],
            [/\bMuon\s+doi\s+Route\s+khac\b/gi, "wants another route"],
            [/\bKhong\s+sap\s+xep\s+duoc\s+thoi\s+gian\b/gi, "cannot arrange time"],
            [/\bDat\s+trung\s+ticket\b/gi, "duplicate booking"],
            [/\bcustomer\s+requested\s+hoan\s+tien\b/gi, "customer requested refund"],
            [/\bThay\s+doi\s+so\s+luong\s+nguoi\s+di\b/gi, "changed number of passengers"],
            [/\bXe\s+xuat\s+phat\s+khong\s+phu\s+hop\b/gi, "unsuitable departure bus"],
            [/\bwrong\s+booking\s+date\s+di\b/gi, "wrong booking date"],
            [/\bda\s+dat\s+online\b/gi, "Booked online"]
        ];
        phraseRules.forEach(([pattern, replacement]) => {
            value = value.replace(pattern, replacement);
        });

        const wordRules = [
            [/\bQuan\s+ly\b/gi, "Manage"], [/\bban\s+ticket\b/gi, "ticket sales"], [/\bvan\s+hanh\b/gi, "operations"],
            [/\bnguoi\s+dung\b/gi, "users"], [/\bbao\s+cao\b/gi, "reports"], [/\byeu\s+cau\b/gi, "request"],
            [/\bduyet\b/gi, "approve"], [/\bhuy\b/gi, "cancel"], [/\bdat\b/gi, "booking"], [/\bloai\b/gi, "type"],
            [/\bphu\b/gi, "details"], [/\bthao\s+tac\b/gi, "actions"], [/\btrang\s+thai\b/gi, "status"],
            [/\bmo\s+ta\b/gi, "description"], [/\bghi\s+chu\b/gi, "note"], [/\bly\s+do\b/gi, "reason"],
            [/\bngay\b/gi, "date"], [/\bgio\b/gi, "time"], [/\bthang\b/gi, "month"], [/\bnam\b/gi, "year"],
            [/\bkhach\b/gi, "customer"], [/\btai\s+khoan\b/gi, "account"], [/\bnhan\s+vien\b/gi, "employee"],
            [/\bkhuyen\s+mai\b/gi, "promotion"], [/\bdoanh\s+thu\b/gi, "revenue"], [/\bdu\s+lieu\b/gi, "data"],
            [/\bso\s+luong\b/gi, "quantity"], [/\bsdt\b/gi, "phone"], [/\bdia\s+chi\b/gi, "address"],
            [/\bten\b/gi, "name"], [/\bma\b/gi, "id"],
            [/\bve\b/gi, "tickets"], [/\bghe\b/gi, "seats"], [/\blich\s+chay\b/gi, "schedules"]
        ];
        wordRules.forEach(([pattern, replacement]) => {
            value = value.replace(pattern, replacement);
        });

        value = value
            .replace(/\bEdit\b/g, "Edit")
            .replace(/\bDelete\b/g, "Delete")
            .replace(/\s{2,}/g, " ")
            .replace(/Admin:\s*admin/gi, "Admin: admin")
            .replace(/\bBusm\b/gi, "View")
            .replace(/\bTime\b/g, "hours")
            .replace(/\b30 hours\b/g, "30 hours")
            .replace(/\btype\s+tickets\b/gi, "Ticket types")
            .replace(/\bbooking\s+tickets\b/gi, "Bookings")
            .replace(/\bChi\s+tiet\s+seats\s+booking\b/gi, "Booked seat details")
            .replace(/\btickets\s+da\s+cancel\b/gi, "Cancelled tickets")
            .replace(/\breports\s+revenue\b/gi, "Revenue report")
            .replace(/\bDang\s+xuat\b/gi, "Logout")
            .replace(/Trở lạiup/gi, "Backup");
        return value;
    }

    function translateText(value, lang) {
        if (!value) return value;

        let text = formatDateTime(String(value)).normalize('NFC');

        // FIX CÁC LỖI DỊCH CHỒNG
        text = text
            .replace(/Mã\s+Thanh\s*Điểm\s*đến\s*án/gi, "Mã Thanh Toán")
            .replace(/Thanh\s*Điểm\s*đến\s*án/gi, "Thanh Toán")
            .replace(/VNĐiện thoại/gi, "Điện thoại")
            .replace(/Số\s+VNĐiện thoại/gi, "Số điện thoại")
            .replace(/Username,\s*số\s+VNĐiện thoại\s+hoặc\s+email/gi, "Tên đăng nhập, số điện thoại hoặc email")
            .replace(/Trở\s*lạiup/gi, "Backup")
            .replace(/Otherh/gi, "Other");

        const backupTrimmed = text.trim().replace(/\s+/g, " ");
        if (/^(Backup\s*\/?\s*Restore|Trở\s*lạiup\s*\/\s*Restore|Back\s*up\s*\/\s*Restore)(\s+dữ liệu|\s+du lieu|\s+data)?$/i.test(backupTrimmed)) {
            return backupTrimmed.toLowerCase().includes("dữ liệu") || backupTrimmed.toLowerCase().includes("du lieu") || backupTrimmed.toLowerCase().includes("data")
                ? "Backup/Restore Data"
                : "Backup/Restore";
        }

        text = normalizeMoney(text, lang);

        const dict = lang === "en" ? viToEn : enToVi;
        const normalizedDict = lang === "en" ? normalizedViToEn : normalizedEnToVi;

        function exactLookup(currentText) {
            const trimmed = currentText.normalize('NFC').trim().replace(/\s+/g, " ");
            const normalizedTrimmed = trimmed.toLowerCase();

            const adminColumnFixes = {
                "mã xe": "Bus ID",
                "biển số": "License Plate",
                "hiệu xe": "Vehicle Model",
                "số lượng ghế": "Seat Count",
                "loại xe": "Vehicle Type",
                "trạng thái": "Status",
                "mã bến xe": "Station ID",
                "tên bến xe": "Station Name",
                "địa chỉ": "Address",
                "số điện thoại": "Phone Number",
                "mã tuyến xe": "Route ID",
                "mã bến đi": "Departure Station ID",
                "mã bến đến": "Arrival Station ID",
                "quãng đường": "Distance",
                "thời gian dự kiến": "Estimated Duration",
                "mã tài xế": "Driver ID",
                "họ tên": "Full Name",
                "bằng lái": "Driving License",
                "mã ghế": "Seat ID",
                "số ghế": "Seat Number",
                "số ghế đã chọn:": "Selected seats:",
                "vị trí": "Position",
                "mã lịch chạy": "Schedule ID",
                "giờ khởi hành": "Departure Time",
                "giờ đến dự kiến": "Estimated Arrival Time",
                "giá cơ bản": "Base Price",
                "mã loại vé": "Ticket Type ID",
                "tên loại vé": "Ticket Type Name",
                "hệ số giá": "Price Multiplier",
                "mô tả": "Description",
                "mã khách hàng": "Customer ID",
                "ảnh đại diện": "Avatar",
                "ngày sinh": "Date of Birth",
                "giới tính": "Gender",
                "ghi chú": "Note",
                "mã nhân viên": "Employee ID",
                "chức vụ": "Position",
                "tên đăng nhập": "Username",
                "mật khẩu": "Password",
                "quyền hạn": "Role",
                "mã đặt vé": "Booking ID",
                "ngày đặt": "Booking Date",
                "tổng tiền": "Total Amount",
                "mã chi tiết": "Detail ID",
                "giá vé": "Ticket Price",
                "tên hành khách": "Passenger Name",
                "mã thanh toán": "Payment ID",
                "mã thanhđiểm đếnán": "Payment ID",
                "số tiền": "Amount",
                "phương thức": "Method",
                "ngày thanh toán": "Payment Date",
                "ngày thanhđiểm đếnán": "Payment Date",
                "mã giao dịch": "Transaction ID",
                "mã yêu cầu": "Request ID",
                "lý do": "Reason",
                "phản hồi admin": "Admin Response",
                "ngày yêu cầu": "Request Date",
                "ngày xử lý": "Processed Date",
                "mã khuyến mãi": "Promotion ID",
                "tên chương trình": "Program Name",
                "tỷ lệ giảm": "Discount Rate",
                "ngày bắt đầu": "Start Date",
                "ngày kết thúc": "End Date"
            };

            if (lang === "en" && adminColumnFixes[normalizedTrimmed]) {
                return currentText.replace(currentText.trim(), adminColumnFixes[normalizedTrimmed]);
            }

            if (dict[trimmed]) {
                return currentText.replace(currentText.trim(), dict[trimmed]);
            }

            if (normalizedDict[normalizedTrimmed]) {
                return currentText.replace(currentText.trim(), normalizedDict[normalizedTrimmed]);
            }

            return null;
        }

        let exact = exactLookup(text);
        if (exact !== null) {
            return lang === "en" ? fixMixedEnglishVietnamese(exact, lang) : exact;
        }

        if (lang === "en") {
            const fullPhraseMap = {
                "Quản lý vận hành xe": "Manage bus operations",
                "Quản lý bán vé": "Manage ticket sales",
                "Quản lý người dùng": "Manage users",
                "Báo cáo và xử lý": "Reports and processing",
                "Sao lưu và khôi phục dữ liệu": "Data backup and restore",
                "Backup / Restore dữ liệu": "Data Backup / Restore",
                "Duyệt yêu cầu hủy vé": "Approve ticket cancellation requests",
                "Yêu cầu hủy vé": "Ticket cancellation requests",
                "Gửi yêu cầu hủy vé": "Send ticket cancellation request",
                "Thông tin nhân viên": "Employee information",
                "Thông tin của tôi": "My information",
                "Ưu đãi của tôi": "My offers",
                "Chuyến đi của tôi": "My Trips",
                "Mua vé": "Book tickets",
                "Ví/Thẻ": "Wallet / Cards",
                "Phương thức thanh toán đã liên kết": "Linked payment methods",
                "Liên kết phương thức thanh toán": "Link payment method",
                "Mã ưu đãi đã lưu": "Saved offer codes",
                "Gợi ý mã ưu đãi từ hệ thống": "Suggested offer codes",
                "Bảng điều khiển nhân viên": "Employee dashboard",
                "Hỗ trợ đặt vé, thanh toán, sửa vé và tra cứu thông tin khách hàng.": "Support bookings, payments, ticket changes, and customer lookup.",
                "Cập nhật họ tên, số điện thoại và avatar.": "Update full name, phone number, and avatar.",
                "Nhấn biểu tượng bút để đổi ảnh": "Click the pencil icon to change photo",
                "Bạn chưa liên kết phương thức thanh toán.": "You have not linked a payment method yet.",
                "Liên kết phương thức thanh toán thành công.": "Payment method linked successfully.",
                "Chưa có phương thức thanh toán. Vui lòng liên kết phương thức muốn thanh toán.": "No payment method linked. Please link the payment method you want to use.",
                "Hiện không có mã ưu đãi mới để gợi ý.": "There are no new offer codes to suggest.",
                "Đã lưu mã ưu đãi vào tài khoản của bạn.": "Offer code saved to your account.",
                "Yêu cầu sẽ được gửi cho admin xem xét trước khi hủy vé.": "The request will be sent to admin for review before cancelling the ticket.",
                "Nhập lý do hủy vé để admin xem xét...": "Enter the cancellation reason for admin review...",
                "Quay lại lịch sử": "Back to history",
                "Tạo tài khoản khách hàng": "Create a customer account",
                "Đã có tài khoản?": "Already have an account?",
                "Chưa có tài khoản?": "Don't have an account?",
                "Đăng ký ngay": "Register now",
                "Quay lại đăng nhập": "Back to login"
            };

            Object.entries(fullPhraseMap)
                .sort((a, b) => b[0].length - a[0].length)
                .forEach(([from, to]) => {
                    text = text.replace(new RegExp(escapeRegExp(from), "g"), to);
                });
        }

        exact = exactLookup(text);
        if (exact !== null) {
            return lang === "en" ? fixMixedEnglishVietnamese(exact, lang) : exact;
        }

        if (lang === "en") {
            text = translateAdminDataValue(text, lang);
            text = translateStructuredDataText(text, lang);
        }

        exact = exactLookup(text);
        if (exact !== null) {
            return lang === "en" ? fixMixedEnglishVietnamese(exact, lang) : exact;
        }

        Object.entries(dict)
            .sort((a, b) => b[0].length - a[0].length)
            .forEach(([from, to]) => {
                if (!from || !to || from === to) return;

                // FIX CHÍNH: không dịch từng chữ ngắn gây lỗi Thanh Toán -> ThanhĐiểm đếnán
                if (lang === "vi" && [
                    "To",
                    "From",
                    "Bus",
                    "Route",
                    "Back",
                    "ID",
                    "Name",
                    "Day",
                    "Month",
                    "Year",
                    "No",
                    "Yes"
                ].includes(from)) return;

                if (lang === "en" && [
                    "Mã",
                    "Tên",
                    "Xe",
                    "Bến",
                    "Nam",
                    "Nữ"
                ].includes(from)) return;

                const normalizedFrom = from.normalize('NFC');
                text = text.replace(new RegExp(escapeRegExp(normalizedFrom), "g"), to);
            });

        if (lang === "en") {
            text = text
                .replace(/Station\s+ID\s+Bus/gi, "Station ID")
                .replace(/Station\s+Malee\s+Bus/gi, "Station Name")
                .replace(/Station\s+Name\s+Bus/gi, "Station Name")
                .replace(/ID\s+Bến\s+Bus/gi, "Station ID")
                .replace(/Name\s+Bến\s+Bus/gi, "Station Name")
                .replace(/Địa\s+Chỉ/gi, "Address")
                .replace(/Số\s+Điện\s+Thoại/gi, "Phone Number")
                .replace(/Họ\s+Name/gi, "Full name")
                .replace(/Họ\s+Tên/gi, "Full Name")
                .replace(/Giới\s+Tính/gi, "Gender")
                .replace(/Phương\s+Thức/gi, "Method")
                .replace(/Trạng\s+Thái/gi, "Status")
                .replace(/Mô\s+Tả/gi, "Description")
                .replace(/Otherh\s*/g, "Other ")
                .replace(/Trở lạiup/gi, "Backup")
                .replace(/Backup \/ Restore du lieu/gi, "Data Backup / Restore")
                .replace(/Restore du lieu/gi, "Restore data")
                .replace(/Khoi phuc du lieu/gi, "Restore data")
                .replace(/Tai file backup/gi, "Download backup file")
                .replace(/Ve trang Admin/gi, "Back to Admin")
                .replace(/\bVNĐ\b/g, "VND");

            text = fixMixedEnglishVietnamese(text, lang);

            if (/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/.test(text)) {
                text = romanizeVietnamese(text);
                text = fixMixedEnglishVietnamese(text, lang);
            }
        }

        if (lang === "vi") {
            text = text
                .replace(/Mã\s+Thanh\s*Điểm\s*đến\s*án/gi, "Mã Thanh Toán")
                .replace(/Thanh\s*Điểm\s*đến\s*án/gi, "Thanh Toán")
                .replace(/VNĐiện thoại/gi, "Điện thoại")
                .replace(/Số\s+VNĐiện thoại/gi, "Số điện thoại")
                .replace(/Trở lạiup/gi, "Backup");
        }

        text = text
            .replace(/Trở\s*lạiup\s*\/\s*Restore/gi, "Backup/Restore")
            .replace(/Back\s*up\s*\/\s*Restore/gi, "Backup/Restore")
            .replace(/Backup\s*\/\s*Restore/gi, "Backup/Restore");

        if (lang === "en") {
            text = text
                .replace(/\bLich chay\b/gi, "Schedule")
                .replace(/\bType ve\b/gi, "Ticket Types")
                .replace(/\bBooking ve\b/gi, "Bookings")
                .replace(/\bChi tiet ghe booking\b/gi, "Booked Seat Details")
                .replace(/\bVe da cancel\b/gi, "Cancelled Tickets")
                .replace(/\bDang xuat\b/gi, "Logout")
                .replace(/\bTrang chu\b/gi, "Home");
        }

        return text;
    }

    function translateElementAttributes(el, lang) {
        ["placeholder", "title", "alt", "aria-label"].forEach(attr => {
            if (el.hasAttribute && el.hasAttribute(attr)) {
                el.setAttribute(attr, translateText(el.getAttribute(attr), lang));
            }
        });

        if (el.tagName === "INPUT") {
            const type = (el.getAttribute("type") || "").toLowerCase();
            if (["button", "submit", "reset"].includes(type) && el.value) {
                el.value = translateText(el.value, lang);
            }
        }
    }

    // Exchange rates mapping
    let rates = { VND: 1.0, USD: 0.00003937, EUR: 0.00003636 };

    async function fetchRates() {
        try {
            const res = await fetch('/api/exchange-rate');
            if (res.ok) {
                const data = await res.json();
                if (data && data.USD) {
                    rates = data;
                    window.EXCHANGE_RATES = rates;
                }
            }
        } catch (e) {
            console.warn('Could not fetch exchange rates from backend, using fallbacks.', e);
        }
        window.EXCHANGE_RATES = rates;
    }

    function getCurrentCurrency() {
        let curr = localStorage.getItem('currency');
        if (!curr) {
            curr = (getCurrentLang() === 'en') ? 'USD' : 'VND';
        }
        return curr;
    }

    function formatCurrencyValue(vndValue, targetCurrency) {
        const rate = rates[targetCurrency] || (targetCurrency === 'USD' ? 0.00003937 : (targetCurrency === 'EUR' ? 0.00003636 : 1.0));
        const converted = vndValue * rate;
        
        if (targetCurrency === 'VND') {
            return Number(vndValue).toLocaleString('vi-VN') + ' đ';
        } else if (targetCurrency === 'USD') {
            return '$' + converted.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else if (targetCurrency === 'EUR') {
            return '€' + converted.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
        return converted.toFixed(2) + ' ' + targetCurrency;
    }

    function convertCurrencyInText(text, targetCurrency) {
        if (!text) return text;
        const vndRegex = /(?:(\d{1,3}(?:\.\d{3})+)\s*(?:đ|vnđ|vnd|d\b)|(\d+)\s*(?:đ|vnđ|vnd))/gi;
        return text.replace(vndRegex, (match, group1, group2) => {
            const numStr = group1 || group2;
            if (!numStr) return match;
            const cleanNumStr = numStr.replace(/\./g, '').replace(/,/g, '');
            const vndVal = parseFloat(cleanNumStr);
            if (isNaN(vndVal)) return match;
            return formatCurrencyValue(vndVal, targetCurrency);
        });
    }

    function translateAndConvertNode(node, currentLang, targetCurrency) {
        if (node.originalText === undefined) {
            node.originalText = node.nodeValue.normalize('NFC');
        }
        let translated = translateText(node.originalText, currentLang);
        node.nodeValue = convertCurrencyInText(translated, targetCurrency);
    }

    function translateAndConvertAttribute(el, attr, currentLang, targetCurrency) {
        if (!el.hasAttribute || !el.hasAttribute(attr)) return;
        const key = `original_${attr}`;
        if (el.dataset[key] === undefined) {
            el.dataset[key] = el.getAttribute(attr);
        }
        let translated = translateText(el.dataset[key], currentLang);
        el.setAttribute(attr, convertCurrencyInText(translated, targetCurrency));
    }

    function translateAndConvertElementAttributes(el, currentLang, targetCurrency) {
        ["placeholder", "title", "alt", "aria-label"].forEach(attr => {
            translateAndConvertAttribute(el, attr, currentLang, targetCurrency);
        });

        if (el.tagName === "INPUT") {
            const type = (el.getAttribute("type") || "").toLowerCase();
            if (["button", "submit", "reset"].includes(type) && el.value) {
                if (el.dataset.original_value === undefined) {
                    el.dataset.original_value = el.value;
                }
                let translated = translateText(el.dataset.original_value, currentLang);
                el.value = convertCurrencyInText(translated, targetCurrency);
            }
        }
    }

    function applyTranslations(lang) {
        if (!document.body) return;

        if (document.title) {
            if (!document.title_original) {
                document.title_original = document.title;
            }
            document.title = translateText(document.title_original, lang);
        }

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                const parent = node.parentElement;
                if (!parent) return NodeFilter.FILTER_REJECT;
                const tag = parent.tagName;
                if (["SCRIPT", "STYLE", "TEXTAREA"].includes(tag)) return NodeFilter.FILTER_REJECT;
                if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const textNodes = [];
        while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
        }

        const targetLang = lang;
        const targetCurrency = getCurrentCurrency();

        textNodes.forEach(node => {
            translateAndConvertNode(node, targetLang, targetCurrency);
        });

        document.querySelectorAll("[placeholder], [title], [alt], [aria-label], input[type='button'], input[type='submit'], input[type='reset']")
            .forEach(el => translateAndConvertElementAttributes(el, targetLang, targetCurrency));

        document.documentElement.setAttribute("data-lang", lang);
        document.documentElement.setAttribute("lang", lang);
    }


    function setupAdminTableSearch() {
        if (!document.body) return;

        const lang = getCurrentLang() === "en" ? "en" : "vi";
        const placeholder = lang === "en" ? "Enter keyword..." : "Nhập dữ liệu cần tìm...";
        const buttonText = lang === "en" ? "Search" : "Tìm";
        const noResultText = lang === "en" ? "No matching data found" : "Không tìm thấy dữ liệu phù hợp";

        document.querySelectorAll("table").forEach((table, index) => {
            const tbody = table.querySelector("tbody");
            if (!tbody) return;

            const tableBox = table.closest(".table-wrap") || table.closest(".card") || table.closest(".table-responsive")?.parentElement || table.parentElement;
            if (!tableBox) return;

            let box = tableBox.querySelector(`.admin-table-search-box[data-search-for="${index}"]`);
            if (!box) {
                box = tableBox.querySelector(":scope > .admin-table-search-box") || null;
            }

            if (!box) {
                box = document.createElement("div");
                box.className = "admin-table-search-box";
                box.setAttribute("data-search-for", String(index));

                const tableResponsive = table.closest(".table-responsive");
                if (tableResponsive && tableResponsive.parentElement) {
                    tableResponsive.parentElement.insertBefore(box, tableResponsive);
                } else {
                    table.parentElement.insertBefore(box, table);
                }
            }

            let input = box.querySelector("input[data-table-search]");
            if (!input) {
                input = document.createElement("input");
                input.type = "text";
                input.className = "admin-table-search-input";
                input.setAttribute("data-table-search", "");
                box.appendChild(input);
            }

            let button = box.querySelector("button[data-table-search-button]");
            if (!button) {
                button = document.createElement("button");
                button.type = "button";
                button.className = "admin-table-search-button";
                button.setAttribute("data-table-search-button", "");
                box.appendChild(button);
            }

            input.placeholder = placeholder;
            button.textContent = buttonText;

            function normalizeText(value) {
                return normalizePlain(value);
            }

            function getSearchableRowText(row) {
                if (!row.dataset.originalSearchText) {
                    row.dataset.originalSearchText = row.innerText || row.textContent || "";
                }
                return [
                    row.innerText || row.textContent || "",
                    row.dataset.originalSearchText || "",
                    translateText(row.dataset.originalSearchText || "", "en"),
                    translateText(row.dataset.originalSearchText || "", "vi")
                ].join(" ");
            }

            function getColumnCount() {
                const firstRow = table.querySelector("thead tr, tbody tr");
                return firstRow ? firstRow.children.length : 1;
            }

            function getNoResultRow() {
                let row = tbody.querySelector("tr[data-search-empty-row]");
                if (!row) {
                    row = document.createElement("tr");
                    row.setAttribute("data-search-empty-row", "1");
                    row.style.display = "none";
                    const td = document.createElement("td");
                    td.colSpan = getColumnCount();
                    td.className = "text-center text-muted py-4";
                    row.appendChild(td);
                    tbody.appendChild(row);
                }
                row.querySelector("td").textContent = noResultText;
                return row;
            }

            function isRealDataRow(row) {
                if (row.hasAttribute("data-search-empty-row")) return false;
                if (row.hasAttribute("data-no-search")) return false;
                const cells = Array.from(row.children || []);
                if (cells.length === 1 && cells[0].hasAttribute("colspan")) return false;
                return true;
            }

            function filterTable() {
                const rawKeyword = input.value || "";
                const keyword = normalizeText(rawKeyword);
                const rows = Array.from(tbody.querySelectorAll("tr")).filter(isRealDataRow);
                let visibleCount = 0;

                rows.forEach(row => {
                    const text = normalizeText(getSearchableRowText(row));
                    const matched = keyword === "" || text.includes(keyword);
                    row.style.display = matched ? "" : "none";
                    if (matched) visibleCount++;
                });

                const emptyRow = getNoResultRow();
                emptyRow.style.display = keyword !== "" && visibleCount === 0 ? "" : "none";
            }

            if (table.dataset.searchReady !== "1") {
                table.dataset.searchReady = "1";
                button.addEventListener("click", filterTable);
                input.addEventListener("keydown", function (event) {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        filterTable();
                    }
                });
            }
        });
    }

    function updateLanguageButtons(lang) {
        document.querySelectorAll("a[href*='change-language?lang=vi'], button[onclick*='vi']").forEach(el => {
            el.classList.toggle("active", lang === "vi");
        });
        document.querySelectorAll("a[href*='change-language?lang=en'], button[onclick*='en']").forEach(el => {
            el.classList.toggle("active", lang === "en");
        });
    }

    function setCurrency(currency) {
        currency = ['VND', 'USD', 'EUR'].includes(currency) ? currency : 'VND';
        localStorage.setItem("currency", currency);
        
        const lang = getCurrentLang() === 'en' ? 'en' : 'vi';
        applyTranslations(lang);
        updateCurrencyButtons();
        
        window.dispatchEvent(new CustomEvent('currencychange', { detail: { currency: currency } }));
    }

    function updateCurrencyButtons() {
        const curr = getCurrentCurrency();
        document.querySelectorAll('[data-currency]').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-currency') === curr);
        });
    }

    function injectCurrencySwitcher() {
        let container = document.querySelector('.global-lang-switch, .login-lang-box, .mua-ve-lang-switch');
        if (!container) return;
        
        if (container.querySelector('[data-currency]')) return;

        let btnClass = 'global-lang-btn';
        if (container.classList.contains('login-lang-box')) {
            btnClass = 'login-lang-btn';
        } else if (container.classList.contains('mua-ve-lang-switch')) {
            btnClass = 'lang-btn';
        }

        const divider = document.createElement('div');
        divider.className = 'currency-divider';
        divider.style.width = '1px';
        divider.style.height = '18px';
        divider.style.background = '#b9d6ff';
        divider.style.margin = '0 6px';

        const createBtn = (code, symbol) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = btnClass;
            btn.style.minWidth = '32px';
            btn.style.height = '32px';
            btn.style.fontSize = '14px';
            btn.style.border = '1px solid #b9d6ff';
            btn.style.cursor = 'pointer';
            btn.style.marginLeft = '4px';
            btn.style.display = 'inline-flex';
            btn.style.alignItems = 'center';
            btn.style.justifyContent = 'center';
            btn.style.background = 'white';
            btn.style.color = '#0b3b86';
            btn.style.borderRadius = '999px';
            btn.setAttribute('data-currency', code);
            btn.textContent = symbol;
            
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrency(code);
            });
            return btn;
        };

        container.appendChild(divider);
        container.appendChild(createBtn('VND', 'đ'));
        container.appendChild(createBtn('USD', '$'));
        container.appendChild(createBtn('EUR', '€'));

        if (!document.getElementById('currency-switcher-styles')) {
            const style = document.createElement('style');
            style.id = 'currency-switcher-styles';
            style.textContent = `
                .global-lang-switch button, .login-lang-box button, .mua-ve-lang-switch button {
                    border-radius: 999px !important;
                    transition: all 0.2s !important;
                }
                .global-lang-switch button:hover, .login-lang-box button:hover, .mua-ve-lang-switch button:hover {
                    background: #0b3b86 !important;
                    color: white !important;
                    border-color: #0b3b86 !important;
                }
                .global-lang-switch button.active, .login-lang-box button.active, .mua-ve-lang-switch button.active {
                    background: #0b3b86 !important;
                    color: white !important;
                    border-color: #0b3b86 !important;
                }
            `;
            document.head.appendChild(style);
        }

        updateCurrencyButtons();
    }

    function changeLanguage(lang) {
        lang = lang === "en" ? "en" : "vi";
        localStorage.setItem("lang", lang);
        
        const targetCurrency = (lang === 'en') ? 'USD' : 'VND';
        localStorage.setItem("currency", targetCurrency);
        
        applyTranslations(lang);
        updateLanguageButtons(lang);
        updateCurrencyButtons();
        setupAdminTableSearch();

        window.dispatchEvent(new CustomEvent('currencychange', { detail: { currency: targetCurrency } }));
    }

    window.changeLanguage = changeLanguage;
    window.translatePage = changeLanguage;
    window.setCurrency = setCurrency;

    document.addEventListener("click", function (event) {
        const link = event.target.closest("a[href*='change-language?lang=']");
        if (!link) return;

        event.preventDefault();
        const href = link.getAttribute("href") || "";
        const lang = href.includes("lang=en") ? "en" : "vi";
        changeLanguage(lang);
    });

    async function init() {
        await fetchRates();
        const lang = getCurrentLang() === "en" ? "en" : "vi";
        localStorage.setItem("lang", lang);
        applyTranslations(lang);
        updateLanguageButtons(lang);
        injectCurrencySwitcher();
        setupAdminTableSearch();

        const observer = new MutationObserver(mutations => {
            const currentLang = getCurrentLang() === "en" ? "en" : "vi";
            const targetCurrency = getCurrentCurrency();
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim()) {
                        translateAndConvertNode(node, currentLang, targetCurrency);
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                        const tag = node.tagName;
                        if (["SCRIPT", "STYLE", "TEXTAREA"].includes(tag)) return;
                        const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
                            acceptNode(textNode) {
                                const parent = textNode.parentElement;
                                if (!parent || ["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
                                return textNode.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                            }
                        });
                        const nodes = [];
                        while (walker.nextNode()) nodes.push(walker.currentNode);
                        nodes.forEach(textNode => {
                            translateAndConvertNode(textNode, currentLang, targetCurrency);
                        });
                        node.querySelectorAll && node.querySelectorAll("[placeholder], [title], [alt], [aria-label], input[type='button'], input[type='submit'], input[type='reset']")
                            .forEach(el => translateAndConvertElementAttributes(el, currentLang, targetCurrency));
                        translateAndConvertElementAttributes(node, currentLang, targetCurrency);
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true,
            attributeFilter: ["placeholder", "title", "alt", "aria-label", "value"]
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
