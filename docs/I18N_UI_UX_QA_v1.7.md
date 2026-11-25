# PALLAS v1.7 – Báo cáo UI/UX, Validation và i18n

## 1. Phạm vi đã cập nhật

| Nhóm | Phạm vi |
|---|---|
| Language switch | Nút VIE / ENG (desktop), menu mobile, trạng thái chọn, `aria-pressed`, lưu lựa chọn |
| Trang | Trang chủ, sản phẩm, chi tiết sản phẩm, giỏ hàng, đặt hàng, giới thiệu, đại lý, liên hệ, bài viết, chính sách, 404 |
| Dữ liệu | 23 sản phẩm/SKU, 5 nhóm sản phẩm và 4 bài kiến thức |
| Form | Liên hệ tư vấn, đăng ký đại lý, yêu cầu đặt hàng |
| Nội dung | Tiêu đề, CTA, mô tả ngắn và footer bớt dấu chấm cuối câu |
| Responsive | Tiêu đề ENG được phép xuống dòng, language toggle có vùng bấm phù hợp, form tự xếp dọc |
| Ảnh | Giữ nguyên 20 file PNG cutout RGBA và ảnh nhãn gốc |

## 2. Validation

- Họ tên: bắt buộc, 2–100 ký tự; hỗ trợ tên Việt có dấu, không chấp nhận tên chỉ có chữ số
- Số điện thoại: bắt buộc, kiểm tra cú pháp số Việt Nam (`0` hoặc `+84`, cho phép dấu cách/dấu chấm/gạch nối)
- Email: bắt buộc, kiểm tra định dạng cơ bản và giới hạn độ dài
- Nội dung tư vấn/đại lý: bắt buộc tối thiểu 10 ký tự và tối đa 1200 ký tự
- Tên doanh nghiệp, khu vực: bắt buộc khi là form đại lý
- Địa chỉ giao hàng: bắt buộc, tối thiểu 10 ký tự
- Ghi chú: tùy chọn, tối đa 1000 ký tự
- Checkbox đồng ý cung cấp thông tin: bắt buộc
- Phản hồi lỗi theo trường ngay dưới input, `aria-invalid`, liên kết tới text lỗi và focus trường lỗi đầu tiên
- Chỉ kiểm tra dữ liệu phía client; khi thêm backend cần kiểm tra lại trên server

## 3. Chức năng ngôn ngữ

- Đổi VIE/ENG không đổi URL, giỏ hàng hoặc nội dung đã nhập
- Tùy chọn được lưu tại localStorage trên thiết bị hiện tại
- Hỗ trợ thay đổi `html.lang` thành `vi` / `en`
- Nội dung email chuẩn bị từ form sẽ theo ngôn ngữ được chọn lúc bấm nút
- Mã SKU và thông tin thương hiệu giữ nguyên; giá hiển thị bằng VND
- Dấu chấm kết thúc có chủ đích giữ lại trong bài viết dài và thông tin kỹ thuật
- Trang có metadata tiếng Việt/robots noindex như source cũ; có thể nâng cấp SEO đa ngôn ngữ ở giai đoạn sau

## 4. Kết quả kiểm thử tự động

- Node tests: **22/22 PASS**
- Phân tích cú pháp TypeScript/TSX: **38 file TS/TSX; 0 lỗi syntax**
- Phủ dữ liệu sản phẩm và bài viết bằng bản dịch: PASS
- Kiểm tra 20 ảnh PNG trong suốt: PASS
- Production build Next.js: **Chưa chạy tại môi trường đóng gói**, vì không có node_modules và không truy cập được npm registry. Phải chạy `npm run build` trên Mac trước khi push

## 5. Kiểm tra thủ công khuyến nghị trước go-live

1. Đổi VIE/ENG ở header desktop, sau đó chuyển trang, reload và kiểm tra lưu ngôn ngữ
2. Đổi ngôn ngữ trên iPhone/Android từ menu mobile
3. Kiểm tra các màn hình 360px, 390px, 768px, 1280px, 1440px (đặc biệt hero tiếng Anh)
4. Dùng Tab, Enter, Space để điều khiển nút ngôn ngữ và logo PALLAS
5. Tìm sản phẩm bằng từ khóa tiếng Việt và tiếng Anh
6. Vào 23 SKU, xác nhận tiêu đề, thông tin, gallery và đơn giá đúng dung tích
7. Thêm/bớt sản phẩm; xác nhận subtotal không tính sản phẩm chưa báo giá
8. Điền sai mọi trường form bằng cả hai ngôn ngữ; xem lỗi, focus, checkbox
9. Điền đúng và nhấn gửi; xác nhận mail client mở với nội dung đúng ngôn ngữ. Nếu không, dùng sao chép nội dung
10. Trên Netlify, chỉ gửi khách URL sau khi Deploys hiển thị **Published** cho commit mới

## 6. Những mục cần khách hàng xác nhận

- Bảng giá chính thức theo SKU và tồn kho
- Hotline, địa chỉ và nội dung giới thiệu doanh nghiệp
- Quy trình nhận đơn chính thức, thanh toán, giao hàng, đổi trả
- Chính sách dữ liệu cá nhân và quyền sử dụng ảnh sản phẩm
