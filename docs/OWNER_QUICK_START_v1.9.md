# HƯỚNG DẪN CHO CÔ CHÚ – PALLAS v1.9

> Bản hướng dẫn này dùng **sau khi** người phụ trách kỹ thuật tạo và kết nối tài khoản Sanity Studio của công ty. Nếu chưa kết nối, website vẫn dùng dữ liệu hiện tại và cô chú chưa thể lưu thay đổi online.

## Mỗi ngày cần làm gì?

**Xem nội dung / sửa giá**
1. Đăng nhập địa chỉ Studio riêng do người phụ trách kỹ thuật bàn giao
2. Mở `Sản phẩm & giá bán`, tìm tên sản phẩm hoặc SKU
3. Muốn cập nhật giá, chọn `Giá mới được duyệt` và nhập đúng giá của **từng SKU**; nếu chưa có giá thì chọn `Liên hệ báo giá`
4. Kiểm tra lại tên, dung tích, ảnh và giá, sau đó nhấn **Publish** (Xuất bản)
5. Mở website để kiểm tra giá mới sau khoảng 90 giây; làm mới trang nếu cần

**Sửa địa chỉ hoặc hotline**
1. Trong Studio chọn `Thông tin công ty`
2. Chỉ sửa dựa trên thông tin đã được chủ doanh nghiệp xác nhận
3. Nhấn **Publish**, rồi kiểm tra lại ở đầu trang, footer và trang liên hệ

**Đăng bài hướng dẫn**
1. Mở `Bài viết & hướng dẫn` → tạo bài
2. Điền tiêu đề, đường dẫn, mô tả ngắn, từng đoạn nội dung
3. Kiểm tra chính tả và những tuyên bố về công dụng/ an toàn sản phẩm
4. **Publish** khi đã duyệt

**Tạo ưu đãi có thời hạn**
1. Mở `Chương trình ưu đãi` → điền tiêu đề, điều kiện, ngày bắt đầu và ngày kết thúc
2. Bật `Bật ưu đãi`, rồi Publish
3. Sau thời điểm hết hạn, website sẽ không hiển thị ưu đãi nữa

## Khi có khách yêu cầu liên hệ hoặc báo giá
- Nếu doanh nghiệp **chưa bật Netlify Forms**, khách phải bấm Send trong ứng dụng email. Nhân viên kiểm tra hộp thư công ty như trước
- Nếu **đã bật Netlify Forms và kiểm thử thành công**, nhân viên có thể mở Netlify → Forms → chọn form `pallas-contact`, `pallas-dealer`, `pallas-quote` hoặc `pallas-order` để xem yêu cầu, cấu hình email notification để khỏi phải kiểm tra thủ công liên tục
- Đơn chưa tự nhận tiền, chưa có mã đơn, chưa có nút duyệt đơn hay quản lý kho trong bản 1.9

## Đề xuất phân chia trách nhiệm
- **Cô chú:** duyệt giá, thông tin pháp lý, chính sách và ưu đãi
- **Nhân viên:** cập nhật sản phẩm/ảnh, theo dõi yêu cầu, phản hồi khách
- **Người kỹ thuật:** quản lý hosting, phân quyền Studio/Netlify, backup, SSL, sửa lỗi và tích hợp

## Cần nhớ
Không cung cấp mã đăng nhập hoặc API token cho người lạ, không sửa mã SKU đã có nếu chưa hỏi người kỹ thuật, và không đăng ảnh/chứng nhận khi chưa có quyền sử dụng hoặc tài liệu chứng minh.
