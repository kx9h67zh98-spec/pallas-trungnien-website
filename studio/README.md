# PALLAS CMS – Giao diện chỉnh sửa dành cho cô chú / nhân viên

**Giao diện Sanity Studio là dịch vụ có tài khoản và phân quyền riêng.** Website không lưu mật khẩu quản trị, không cho chỉnh giá công khai.

## Thiết lập lần đầu (người làm kỹ thuật thực hiện)
1. Đăng ký hoặc chọn một project tại https://www.sanity.io/manage
2. Tạo dataset tên `production` (public nếu nội dung chỉ gồm thông tin sản phẩm công khai; với dataset private, cung cấp `SANITY_READ_TOKEN` ở phía Netlify server)
3. Chạy `cp .env.example .env` trong `studio/` rồi nhập đúng Project ID
4. Chạy `npm install && npm run dev`, thử đăng nhập và tạo tài liệu. Với dataset **mới hoàn toàn**, có thể chạy `npx sanity dataset import content-seed.ndjson production` để có sẵn 32 mã sản phẩm từ bảng giá 15/03/2026 và 4 bài viết; không chạy đè lên dataset đã có dữ liệu nếu chưa sao lưu
5. Chạy `npm run deploy` để có địa chỉ `.sanity.studio`, chỉ cấp quyền cho cô chú/nhân viên được duyệt
6. Trên Netlify thêm `SANITY_PROJECT_ID`, `SANITY_DATASET` và `SANITY_READ_TOKEN` (chỉ khi private). Deploy lại storefront
7. Thử sửa tên một sản phẩm đã tồn tại, Publish và đợi cache khoảng 90 giây, sau đó kiểm tra trên website

**KHÔNG** đưa Write Token, Read Token của dataset private hoặc mật khẩu vào frontend hoặc GitHub. Bật xác thực hai bước, phân quyền và chính sách phê duyệt theo tài khoản Sanity.

## Cách quản lý
- `Thông tin công ty`: sửa hotline/email/địa chỉ một lần; chỉ thay địa chỉ sau khi xác nhận với công ty
- `Sản phẩm & giá bán`: tạo tài liệu có slug đúng mã SKU đang dùng, chọn `Giữ giá đang hiển thị`, `Giá mới được duyệt` hoặc `Liên hệ báo giá`, sau đó Publish
- `Bài viết`: nhập tiêu đề, slug, các đoạn, Publish
- `Ưu đãi`: nhập thời gian bắt đầu/kết thúc, bật hiển thị, Publish. Hết hạn sẽ không còn xuất hiện trên trang chủ
- Tài liệu ở trạng thái Draft không được website đọc

Lưu ý: *Sanity cần đăng ký/cấu hình project*, vì vậy file ZIP **không tự kích hoạt** quản trị trực tuyến. Khi chưa kết nối, website sẽ dùng dữ liệu v1.8 như trước. Khi có sản phẩm mới trên CMS, cần nhập đủ tên, slug, danh mục, dung tích và ảnh được phép sử dụng.

## Dữ liệu khởi tạo trong `content-seed.ndjson`
File này lưu **32 mã sản phẩm duy nhất theo bảng giá 15/03/2026 và 4 bài viết**, tránh phải nhập lại từ đầu. Giá được đặt ở chế độ `approved` theo đúng bảng giá công ty cung cấp (đã bao gồm thuế); **bảng giá ngày 15/03/2026 không khẳng định là giá hiện hành sau ngày đó**. Ảnh gốc vẫn được hiển thị nhờ dữ liệu dự phòng trong source; khi muốn thay ảnh, tải lên trong Studio. Dùng file seed một lần trên dataset trống, tránh nhập trùng hoặc ghi đè lên nội dung đang vận hành.
