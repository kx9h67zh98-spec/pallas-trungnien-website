# PALLAS Premium – Business scope / BRD light v1.0

**Mục tiêu:** website giới thiệu thương hiệu Trung Niên – PALLAS và chuyển đổi người quan tâm thành yêu cầu đặt hàng bán lẻ hoặc yêu cầu hợp tác garage/đại lý.

## Đối tượng

- B2C: người chăm sóc xe máy/ô tô tại nhà.
- B2B: garage/tiệm rửa xe mua thường xuyên, đại lý cần giá sỉ.
- Nhân viên tư vấn: xử lý các yêu cầu liên hệ do khách chủ động gửi email.
- Admin **tương lai**: quản lý SKU, tồn kho, giá, đơn hàng, bài viết và lead.

## Yêu cầu hiện có

| ID | Luồng / module | Trạng thái trong v1.0 |
| --- | --- | --- |
| FR-01 | Trang chủ thương hiệu và danh mục | Giao diện đầy đủ |
| FR-02 | Tìm kiếm tiếng Việt (có dấu/không dấu) | Client-side từ mảng sản phẩm |
| FR-03 | Lọc danh mục, sắp xếp giá | Client-side |
| FR-04 | Trang chi tiết sản phẩm | Đầy đủ từ dữ liệu tĩnh |
| FR-05 | Giỏ hàng, tăng giảm, xóa | localStorage trình duyệt |
| FR-06 | Yêu cầu đặt hàng | Tạo mailto để khách tự gửi |
| FR-07 | Yêu cầu hợp tác đại lý | Tạo mailto để khách tự gửi |
| FR-08 | Bài viết chuyên mục chăm xe | Trang tĩnh |
| FR-09 | Liên hệ/hotline | Liên kết tel/mailto |
| FR-10 | Responsive desktop/tablet/mobile | CSS media queries |
| FR-11 | Quản trị sản phẩm, đơn hàng | **Chưa có**, cần backend |
| FR-12 | Thanh toán trực tuyến, tự động xác nhận | **Chưa có**, cần tích hợp |
| FR-13 | Theo dõi vận chuyển | **Chưa có** |
| FR-14 | Phân quyền người dùng/admin | **Chưa có** |

## Business rules cần duyệt

- Giá demo không phải giá giao dịch. Nhân viên kiểm tra giá/tồn kho/phí ship trước khi xác nhận.
- Mã hàng chưa có ảnh thật hiển thị “Ảnh minh họa”.
- Không công bố thông tin bảo đảm chất lượng/chứng nhận khi chưa có tài liệu.
- Dữ liệu biểu mẫu chỉ được chuyển thành email trên máy người mua, không gửi trực tiếp vào database.
- Site mặc định `noindex` cho đến khi thông tin pháp lý, giá và chính sách được duyệt.

## Milestone gợi ý

1. Duyệt BRD + sitemap + nội dung.
2. Bổ sung ảnh chuẩn / bảng giá được phê duyệt.
3. Xây PostgreSQL, API, xác thực admin và inventory.
4. Thanh toán, vận chuyển, email transactional, audit logs.
5. UAT, kiểm thử bảo mật, tối ưu SEO, triển khai production.
