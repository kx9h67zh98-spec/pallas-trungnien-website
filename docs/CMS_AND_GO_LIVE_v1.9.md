# Hướng dẫn quản lý PALLAS v1.9

## Mô hình
Trang web Next.js chạy trên Netlify và **đọc** bản đã xuất bản từ Sanity. Cô chú đăng nhập Sanity Studio bằng tài khoản được cấp để chỉnh nội dung. Thông tin không qua GitHub khi cập nhật thông thường. Tài khoản Sanity là dịch vụ bên ngoài, phải do công ty sở hữu.

## Dữ liệu đã có
Với bản v1.9.3, danh mục base gồm 32 mã sản phẩm duy nhất và 4 bài viết; bảng giá theo PDF 15/03/2026 và đã bao gồm thuế. Không sinh giá từ tỷ lệ dung tích. Thông tin mới hơn chỉ được công bố khi người quản lý duyệt.

## Quy trình duyệt đề xuất
1. Nhân viên soạn và kiểm tra nội dung trong Studio
2. Quản lý đối chiếu SKU, giá, ảnh có quyền dùng và hướng dẫn an toàn
3. Người được cấp quyền Publish; chỉ bản Publish mới hiển thị
4. Kiểm tra thực tế tại URL Netlify; nếu sai, quay lại bản trước trong history của CMS
5. Lưu bản Excel SKU và sao lưu định kỳ theo trách nhiệm của công ty

## Go-live
- Xác nhận tên pháp lý và địa chỉ vì web cũ không thống nhất địa chỉ
- Xác nhận email, hotline, VAT, chính sách giao nhận và đổi trả
- Phê duyệt ảnh/giá/claims, chưa tự đưa chứng nhận vào website
- Đăng ký CMS và cấu hình trên Netlify, cấp quyền, bật MFA
- Xác nhận deploy, test tạo/sửa/ẩn sản phẩm, test FAQ, search, VIE/ENG, email
- Kiểm tra domain DNS/SSL, lưu các URL cũ và redirect 301 tương ứng
- Chỉ sau đó đặt NEXT_PUBLIC_SITE_PUBLIC=true và NEXT_PUBLIC_SITE_URL=domain chính thức để cho phép Google index

## Những gì website chưa làm
Chưa tự gửi/tiếp nhận đơn bằng backend, chưa có mã đơn, theo dõi đơn, đăng nhập khách hoặc thanh toán trực tuyến. Việc `mailto:` chuẩn bị email, khách phải nhấn Send.

## Chuyển từ domain cũ sang domain mới
`netlify.toml` có một số redirect 301 cho các URL cũ đã xác minh: `/gioi-thieu`, `/blog`, `/bot-tuyet-sieu-bong-son`, `/nuoc-lau-kinh-pallas`. Đây **không phải** danh sách redirect đầy đủ. Trước khi chuyển DNS, cần xuất URL cũ, bổ sung redirect từng trang và kiểm tra trên domain chính thức.
