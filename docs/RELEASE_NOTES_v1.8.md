# PALLAS v1.8 – Premium Product Experience

## Những thay đổi chính

1. **Chuyển dung tích theo SKU xác thực**
   - PALLAS 120: 1,5L / 6L / 21L
   - Nano 30: 1,5L / 6L / 21L
   - Nano EX: 1,5L / 6L
   - Mỗi lựa chọn dẫn tới trang SKU tương ứng, với giá đúng SKU; SKU chưa có giá sẽ hiển thị “Liên hệ báo giá”
   - Không tự suy diễn quy cách cho các dòng chưa có xác nhận

2. **So sánh tối đa 3 sản phẩm**
   - Nút So sánh ở thẻ sản phẩm trong danh mục
   - Khay nổi liệt kê lựa chọn; bảng so sánh có danh mục, dung tích, giá, thông tin nổi bật, mô tả
   - Chỉ dùng dữ liệu có sẵn trong danh mục; không tự thêm nồng độ, tỷ lệ pha hay tuyên bố hiệu quả
   - Có trạng thái chọn, xóa, bàn phím Escape và chuyển focus trong modal

3. **Báo giá nhanh từ trang chi tiết**
   - Họ tên, điện thoại, số lượng (1–99), ghi chú và xác nhận đồng ý
   - Dùng lại bộ validation của v1.7 cho họ tên và số điện thoại, có báo lỗi và focus đầu vào chưa hợp lệ
   - Chuẩn bị email chứa SKU, quy cách, số lượng, thông tin liên hệ; hỗ trợ VIE/ENG
   - Sao chép nội dung khi ứng dụng email không mở
   - **Chưa tự gửi yêu cầu hoặc lưu đơn hàng vào database**

4. **Motion tinh tế và khả năng truy cập**
   - Xuất hiện nhẹ khi cuộn, chuyển ảnh gallery, hover thẻ sản phẩm / chọn dung tích, mở/đóng bảng so sánh và hộp báo giá
   - Hỗ trợ `prefers-reduced-motion: reduce`, không bắt buộc animation khi khách muốn giảm chuyển động
   - Hỗ trợ ESC, focus modal, trả focus về nút mở và hạn chế cuộn nền khi mở dialog

## Những phần giữ nguyên

- Chuyển đổi VIE / ENG, danh mục 23 SKU, 5 nhóm sản phẩm, 4 bài kiến thức
- 20 PNG nền trong suốt và các ảnh sản phẩm trước đây
- Giá công khai chỉ theo SKU có dữ liệu, không tự bịa giá
- Giỏ hàng, form tư vấn, đăng ký đại lý, yêu cầu đặt hàng qua ứng dụng email
- Next.js 16.4.6, React 19.3.1, TypeScript, CSS thuần — không thêm dependency runtime mới

## Kết quả kiểm thử trong môi trường tạo bản ZIP

- `npm test`: **27/27 PASS** (22 test cũ + 5 test mới)
- Parse-only syntax 43 file TypeScript/TSX bằng TypeScript compiler: **0 syntax error**
- Visual CSS preview: desktop 1365px / mobile 390px không có overflow ngang; hộp báo giá mở được ở cả hai kích thước
- **Chưa chạy được production build Next.js đầy đủ** vì môi trường đóng gói không có dependencies và npm registry không truy cập được
- Bản preview `docs/qa/v1.8-product-preview.html` là trang mẫu HTML dùng để xem CSS, **không phải ảnh chụp trực tiếp của ứng dụng Next.js đang chạy**

## Kiểm thử trên Mac trước khi push

```bash
npm install
npm test
npm run build
npm run dev
```

Kiểm thử thực tế: danh mục → chọn 2–3 sản phẩm → mở bảng so sánh → đổi VIE/ENG → xem chi tiết SKU → đổi dung tích → báo giá nhanh → thử nhập sai/đúng → mở email hoặc sao chép. Lặp lại trên điện thoại, thử Tab/Escape và chế độ Reduce motion.
