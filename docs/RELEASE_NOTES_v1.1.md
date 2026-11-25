# PALLAS Storefront – cập nhật v1.1

- Cập nhật ngày 25/11/2026.
- 20 ảnh người dùng cung cấp được chép nguyên bản vào source, có bảng ánh xạ `IMAGE_MANIFEST.csv`.
- 23 sản phẩm/quy cách demo; thư viện ảnh nhiều góc nhìn và nhóm danh mục có ảnh thực tế.
- Tham chiếu giá tối thiểu công khai từ TAHICO với nhãn **tham khảo từ**, không công bố giá bán chính thức, không tính tổng đơn ảo.
- Tính năng giữ nguyên: catalog, tìm kiếm, giỏ hàng localStorage, soạn email yêu cầu báo giá, trang công ty, kiến thức, đại lý, liên hệ.
- Quyền sử dụng thương mại cho ảnh có watermark TAHICO chưa được xác nhận.
- Chưa có backend, database, quản trị, cổng thanh toán hay xử lý đơn tự động.

## Kiểm thử

Các bài kiểm thử Node.js và parse cú pháp TS/TSX đã đạt tại môi trường tạo file. Không xác nhận được `npm run build` do không cài được package trong môi trường hiện tại; vui lòng chạy trên máy Mac có npm và gửi log nếu gặp lỗi.
