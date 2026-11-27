# PALLAS v1.9.1 – Midnight Edition

## Mục tiêu thiết kế

Website được đổi theo hướng premium automotive: **Midnight Black + Champagne Gold + Red Accent** để phù hợp với logo dự kiến nền đen. Không thiết kế toàn trang nền đen; khu vực bán hàng sử dụng nền trắng/ngà để khách đọc giá và thông số rõ hơn, hạn chế mỏi mắt.

| Vai trò | Màu | Mã HEX |
|---|---|---|
| Header, footer, hero | Midnight Black | `#0B0C0F` |
| Khu vực tối phụ | Carbon | `#17191C` |
| Nút nổi bật/điểm nhấn | Champagne Gold | `#E8C476` |
| Hover CTA | Light Gold | `#F5D994` |
| Điểm nhấn thương hiệu | Red Accent | `#D83F40` |
| Nền khu vực nội dung | Warm Ivory | `#F7F5F0` |
| Khung nhẹ/giỏ hàng | Soft Beige | `#EFECE5` |
| Chữ chính | Dark Ink | `#242326` |
| Viền nhẹ | Border | `#E5DED3` |

## Những phần đã đổi màu

- Header + menu mobile + search + bộ chuyển VIE/ENG
- Trang chủ: hero, hover logo, trust strip, nhóm sản phẩm, editorial, story, FAQ, ưu đãi và CTA
- Danh mục, bộ lọc, thẻ sản phẩm, giá, pagination/empty state
- Chi tiết: gallery, chọn SKU/dung tích, nút mua/báo giá
- Giỏ hàng, checkout, form liên hệ/đại lý, lỗi validation
- So sánh 3 sản phẩm, quick quote, dialog, focus/hover
- Giới thiệu, kiến thức, bài viết, chính sách, footer và nút gọi nổi

## Logo PALLAS gốc trên nền đen (v1.9.2)

Logo chính đang dùng là `public/images/brand/pallas-logo-original-black.png`: giữ nguyên các nét, chữ PALLAS, biểu tượng và màu gốc từ JPG, chỉ tách nền trắng JPG để thay bằng đen. **Không sử dụng logo concept tái tạo**. File `pallas-logo-original.jpg` vẫn lưu nguyên.

Vì nguồn gốc là ảnh JPEG độ phân giải 582×343 nên các đường viền có thể chưa sắc nét ở cỡ lớn. Khi công ty có file vector/PNG chính thức nên sử dụng file đó để tăng chất lượng, không tự vẽ lại.

Header animation nằm ở `src/styles/header-motion.css`: highlight hover từng mục, underline gradient và hover các nút; hỗ trợ focus bằng bàn phím và reduced motion.

## Kỹ thuật

Các CSS nền v1.9 đã được chuyển hệ màu để tránh xanh lá xuất hiện rải rác. File `src/styles/midnight-brand.css` được nạp sau cùng để làm lớp theme của toàn website. Những giá trị CSS legacy vẫn nằm trong code nhưng được remap theo màu mới; nếu có component mới, dùng các biến `--pallas-*` để duy trì sự đồng nhất.

## Kiểm thử trước go-live

- [ ] Công ty duyệt file logo nền đen **chính thức**
- [ ] Kiểm tra các kích thước 390px, 768px, desktop; header/menu mobile không bị tràn
- [ ] Kiểm tra màu chữ và nút trên tất cả form, trạng thái lỗi, focus bằng bàn phím
- [ ] Kiểm tra VIE/ENG, variant, compare, cart, checkout, mailto/Netlify Forms
- [ ] `npm test` và `npm run build` thành công trên Mac
- [ ] Sau khi nghiệm thu, mới push GitHub và deploy lên site chính
