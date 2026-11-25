# PALLAS Trung Niên — phiên bản v1.6 (Full Website + Forms UI/UX)

## Thay đổi
- Giữ nguyên hệ thống giao diện v1.5: trang chủ, logo hover/tap, sản phẩm, danh mục, giỏ hàng và trang giới thiệu.
- Thiết kế lại **3 trải nghiệm nhập liệu**: liên hệ tư vấn, đăng ký đại lý và yêu cầu đặt hàng.
- Dùng cùng một bộ `FormInput`, `FormSelect`, `FormTextarea`, `FormConsent` để thống nhất nhãn, spacing, nền, focus và error trên desktop/mobile.
- Bổ sung kiểm tra đầu vào khi rời ô và khi gửi: họ tên, SĐT Việt Nam, email, chủ đề, đơn vị, khu vực, nội dung, địa chỉ, consent, độ dài ghi chú.
- Hiển thị thông báo lỗi dưới từng trường; focus trường lỗi đầu tiên; hỗ trợ `aria-invalid`, `aria-describedby`, và thông báo lỗi bằng `role="alert"`.
- Chỉ cho mở email khi form hợp lệ; tạo nội dung email theo thông tin đã nhập và danh sách sản phẩm / giá theo SKU.
- Thêm tùy chọn hình thức liên hệ và tính năng sao chép nội dung email khi không có ứng dụng mail mặc định.
- Vẫn minh bạch về giới hạn: `mailto:` cần khách bấm Gửi trong ứng dụng email; **không có backend lưu thông tin hay gửi mail tự động**.

## Luồng form cần kiểm thử bằng tay
1. Để trống form và bấm chuẩn bị email: thấy lỗi và focus vào tên.
2. Nhập tên chỉ có số, SĐT sai, email sai: lỗi cụ thể xuất hiện dưới trường.
3. Điền hợp lệ nhưng không tick xác nhận: cảnh báo ở checkbox.
4. Điền hợp lệ và tick xác nhận: mở ứng dụng email hoặc có nút sao chép nội dung dự phòng.
5. Test `/dai-ly`: yêu cầu tên công ty, khu vực, nhu cầu hợp tác.
6. Test `/thanh-toan` khi giỏ có cả sản phẩm có giá và chưa có giá; tổng chỉ gồm món đã có giá, món còn lại hiển thị **Liên hệ báo giá**.
7. Test keyboard `Tab`, `Shift+Tab`, focus và lỗi trên Chrome/Safari; kiểm tra chiều rộng 360px, 390px, 768px và desktop.

## Kiểm thử đã thực hiện
- `npm test`: 14/14 bài kiểm thử cấu trúc và quy tắc validation.
- Kiểm tra cú pháp: 33 file `.ts` / `.tsx` qua TypeScript parser, không phát hiện lỗi cú pháp.
- `tsc --noEmit` cho `src/lib/form-validation.ts`: thực hiện được không cần cài Next/React.
- Không thể xác minh `npm run build` trong môi trường tạo artifact do không kết nối được npm registry. Phải chạy trên Mac trước khi đẩy lên GitHub.

## Cần khách hàng xác nhận
- Quy trình email chỉ là tiếp nhận **yêu cầu**; chưa phải đặt hàng hoàn tất.
- Bảng giá, chính sách giao hàng/đổi trả, quyền sử dụng ảnh từ nguồn đối tác, tên pháp lý và thông tin liên hệ chính thức.
- Có cần tích hợp API lưu liên hệ, CRM, email transactional và quản trị đơn trong giai đoạn tiếp theo không.
