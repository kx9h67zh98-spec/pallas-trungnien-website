# Checklist trước khi lên production

- [ ] Khách hàng phê duyệt tên pháp nhân, đại diện, giấy phép, mã số thuế và tên miền.
- [ ] Cung cấp địa chỉ chính thức, thời gian làm việc, hotline/email, Google Business Profile.
- [ ] Cung cấp logo vector, ảnh thật từng SKU, giấy phép sử dụng hình ảnh, tài liệu SDS/nhãn.
- [ ] Xác nhận từng SKU, dung tích, giá, tồn kho, hóa đơn, chính sách thuế/phí.
- [ ] Ký duyệt thông điệp, bài viết và các tuyên bố về công nghệ/chất lượng.
- [ ] Chốt chính sách thanh toán, vận chuyển, bảo hành, đổi trả, bảo mật.
- [ ] Thiết kế database và quản lý order/inventory theo giao dịch nguyên tử.
- [ ] Xác thực admin, RBAC, audit log, rate limit, bảo vệ CSRF/cookie, bảo vệ PII.
- [ ] Kiểm tra webhook thanh toán server-to-server trước khi đánh dấu đã thanh toán.
- [ ] Chuyển biểu mẫu từ mailto sang API có chống spam khi doanh nghiệp sẵn sàng.
- [ ] Tạo email gửi khách và thông báo admin, theo dõi deliverability.
- [ ] Hiệu chỉnh SEO, schema.org, XML sitemap, canonical, OpenGraph, favicon.
- [ ] Bật robots index:true chỉ sau duyệt và gỡ toàn bộ banner 'demo'.
- [ ] Test: Chrome/Safari Android/iOS, 320/375/768/1024/1440px, keyboard accessibility.
- [ ] npm run typecheck, npm run lint, npm test, npm run build và kiểm tra bảo mật dependencies.
