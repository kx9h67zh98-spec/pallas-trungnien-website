# PALLAS – Trung Niên | Website v1.3

Website bán và giới thiệu sản phẩm chăm sóc xe PALLAS, xây dựng bằng **Next.js 16 + React 19 + TypeScript**.

## Cài đặt & chạy trên macOS / VS Code
Yêu cầu Node.js **>=22.14**. Mở Terminal trong thư mục chứa `package.json`:

```bash
npm install
npm run dev
```

Truy cập **http://localhost:3000**. Nếu cổng 3000 đã có ứng dụng khác, dừng tiến trình cũ bằng Ctrl+C.

Kiểm tra:

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Xem giao diện trước khi cài npm
Mở `docs/preview.html` bằng trình duyệt. Đây là bản HTML tĩnh để xem kiểu dáng và **hover logo**. Ứng dụng Next.js chính thức chứa danh mục, chi tiết, tìm kiếm, bộ lọc và giỏ hàng.

## Thư mục chính
- `src/app/`: Route trang chủ, danh mục, chi tiết, giỏ hàng, liên hệ, báo giá đại lý, v.v.
- `src/components/home/brand-hero-reveal.tsx`: Hero logo tương tác bằng chuột, bàn phím và cảm ứng.
- `src/data/site.ts`: Logo, email, hotline, **địa chỉ chính thức**.
- `src/data/products.ts`: Sản phẩm, dung tích, giá và gallery.
- `src/styles/brand-hero.css`: Hiệu ứng hiển thị thông tin thương hiệu; phần còn lại trong `src/styles/`.
- `public/images/`: Logo PALLAS, ảnh sản phẩm tách nền, danh mục.
- `docs/PRODUCT_PRICES_TO_APPROVE.csv`: Bảng tổng hợp giá theo SKU và những thông tin còn thiếu.
- `docs/RELEASE_NOTES_v1.3.md`: Ghi chú thay đổi, nguồn và checklist.

## Những điểm quan trọng trước khi xuất bản chính thức
Hiện tại, nút gửi yêu cầu chỉ **mở ứng dụng email** chứa nội dung đơn hàng; khách cần tự nhấn gửi. Chưa có hệ thống quản lý đơn hàng, database, tính phí giao hàng, thanh toán trực tuyến hay admin. Giá trên website là giá công khai theo nguồn, chưa phải báo giá mới được duyệt. Các mã chưa xác định giá được ghi **Liên hệ báo giá** (không tự suy ra giá theo can/dung tích).

Thông tin công ty, giá và ảnh sản phẩm cần kiểm tra với PALLAS trước khi website hoạt động thương mại. Cụ thể xem `docs/RELEASE_NOTES_v1.3.md`.
