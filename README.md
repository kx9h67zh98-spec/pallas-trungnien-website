# PALLAS – Trung Niên | Website v1.6

Website giới thiệu và tiếp nhận yêu cầu mua hàng sản phẩm chăm sóc xe PALLAS, xây dựng trên **Next.js 16 + React 19 + TypeScript**. Bản v1.6 bao gồm trọn vẹn `src`, `public`, `docs`, `scripts`, `tests` và cấu hình project.

## Cài đặt trên Mac
Yêu cầu **Node.js >=22.14** và npm. Mở Terminal trong thư mục chứa `package.json`:

```bash
npm install
npm run dev
```

Truy cập http://localhost:3000. Khi đã kiểm tra giao diện, chạy:

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

**Lưu ý:** Source ZIP được tạo trong môi trường không truy cập được npm registry nên không bao gồm `node_modules` hoặc `package-lock.json`. Chạy `npm install` trên Mac để tạo lockfile và cài đúng dependencies; sau đó giữ/commit `package-lock.json` để các bản sau cài đặt có tính tái lập.

## Thay đổi v1.6
- Giao diện toàn site dựa trên v1.5, giữ hero thương hiệu tương tác, ảnh sản phẩm nền trong suốt, danh mục, giá và giỏ hàng.
- Form **liên hệ**, **đại lý**, **yêu cầu đặt hàng** được thiết kế thống nhất, responsive và hỗ trợ keyboard.
- Validation: trường bắt buộc, họ tên, điện thoại Việt Nam, email, độ dài nội dung, địa chỉ và xác nhận cung cấp thông tin. Lỗi hiển thị ngay tại trường và form tự focus lỗi đầu tiên.
- Cho phép chọn cách phản hồi: điện thoại, Zalo hoặc email. Thông tin này được đính kèm vào yêu cầu để nhân viên tự xử lý, **không có kết nối tự động với Zalo**.
- Nếu không có ứng dụng email mặc định, có nút sao chép nội dung để gửi thủ công.

## Cấu trúc
- `src/app/`: tất cả routes (homepage, catalog, sản phẩm, giỏ hàng, checkout, liên hệ, đại lý, chính sách, kiến thức...).
- `src/components/forms/`: các trường form tái sử dụng và các biểu mẫu.
- `src/lib/form-validation.ts`: các quy tắc validation thuần TypeScript.
- `src/styles/forms.css`: thiết kế và responsive form.
- `src/data/site.ts`: logo, email, hotline và địa chỉ chính thức.
- `src/data/products.ts`: danh mục, quy cách, giá và gallery sản phẩm.
- `public/images/`: logo, favicon, ảnh tách nền, illustration.
- `docs/PRODUCT_PRICES_TO_APPROVE.csv`: các giá còn cần công ty xác nhận.
- `docs/RELEASE_NOTES_v1.6.md`: quy tắc validation, checklist kiểm thử thủ công.

## Giới hạn cần biết trước khi công bố thương mại
Các form hiện dùng `mailto:` — người dùng phải **bấm Gửi trong ứng dụng email**; website **không tự động lưu hoặc gửi đơn**, chưa có backend, cơ sở dữ liệu, thanh toán, quản trị tồn kho hoặc tự động tính phí vận chuyển. Validation ở client chỉ cải thiện UX, không thay thế kiểm tra phía server khi tích hợp backend.

Giá là dữ liệu công khai chưa được doanh nghiệp duyệt đầy đủ. Cần xác nhận giá, chính sách bán hàng, quyền sử dụng ảnh, nội dung thương hiệu trước khi vận hành thật.
