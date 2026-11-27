# QA PALLAS v1.9

## Đã kiểm tra trong môi trường tạo bản
- [x] Source v1.8 được giữ lại: layout, routes, catalog, VIE/ENG, cart, variants, compare, quick quote, validation
- [x] 36 bài test Node thành công
- [x] Parse syntax TypeScript/TSX thành công (src + studio)
- [x] Dictionary VIE/ENG không còn khóa trùng
- [x] 23 sản phẩm + 4 bài viết được chuẩn bị làm dữ liệu khởi tạo CMS
- [x] Định nghĩa 4 form Netlify có sẵn trong HTML tĩnh
- [x] Mặc định CMS/Form không được tự bật khi thiếu thông tin cấu hình
- [x] Ưu đãi yêu cầu ngày bắt đầu và kết thúc hợp lệ; ưu đãi hết hạn không hiển thị
- [x] Có menu nội dung đơn giản trong Studio, hướng dẫn và bảng đối chiếu legacy

## Chưa kiểm tra tại môi trường này
- [ ] `npm install`, `npm run build` thực tế — môi trường không kết nối được registry npm
- [ ] `npm run dev` trên Mac và kiểm thử trực tiếp desktop/mobile
- [ ] Đăng nhập và Publish qua Sanity Studio trên tài khoản doanh nghiệp
- [ ] Hiển thị nội dung sau 90 giây khi CMS kết nối, chuyển trạng thái ẩn/hiện
- [ ] Netlify Forms nhận dữ liệu và gửi thông báo email sau khi bật Form detection
- [ ] Kiểm tra full responsive 390px/768px/1365px trong browser, focus keyboard và Reduce Motion
- [ ] Nghiệm thu SEO/domain/301 redirects trên domain chính thức

## Mẫu kiểm thử cực ngắn trên Mac
```bash
npm install
npm test
npm run build
npm run dev
```

Khi test xong trên browser mới commit/push; không nên bật Forms/CMS production khi chưa nhận được yêu cầu thử trên Dashboard và kiểm tra quyền truy cập.
