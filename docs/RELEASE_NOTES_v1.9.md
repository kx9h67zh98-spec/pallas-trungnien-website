# PALLAS v1.9 – Editorial & Easy Management

## Tính năng triển khai
- Kế thừa VIE/ENG, sản phẩm, giỏ hàng, tìm kiếm, form/validation, quy cách, so sánh và animation v1.8
- Tích hợp **đọc nội dung CMS tùy chọn** (Sanity); fallback dữ liệu v1.8 nếu CMS chưa cấu hình hoặc tạm không truy cập được
- Sanity Studio độc lập trong `studio/` để chủ công ty / nhân viên quản lý sản phẩm, giá, bài viết, ưu đãi và thông tin liên hệ sau khi cấp tài khoản
- Chỉ lấy tài liệu đã Publish, không lấy drafts
- Giá CMS chỉ đổi khi chọn `Giá mới được duyệt`; nếu chọn `Liên hệ báo giá`, hiển thị không có giá; mặc định giữ dữ liệu hiện tại
- Có công tắc ẩn SKU và tự ẩn ưu đãi hết hiệu lực
- Trang chủ bổ sung trải nghiệm chọn giải pháp và FAQ / quy trình mua hàng
- Metadata cơ bản, robots và sitemap chỉ bật public index khi có sự chấp thuận go-live
- Báo cáo đối chiếu với danh mục cũ, giữ danh sách cần xác nhận thay vì tự đăng hàng chưa kiểm chứng

## Giới hạn thực tế
- Chưa bao gồm tài khoản CMS đã tạo sẵn; cần người quản trị đăng ký Sanity, cấp quyền và cấu hình biến môi trường
- Chưa có dashboard quản lý đơn hàng/database/payment gateway: email vẫn phải được khách xác nhận gửi thủ công
- Studio không được xem là đã hoàn tất triển khai chỉ vì website build được
- Giá, tên pháp lý, địa chỉ, ưu đãi và thông tin kỹ thuật cần công ty xác nhận
- Hai ngôn ngữ hiện vẫn dịch phía client, chưa có SEO /vi /en đầy đủ
