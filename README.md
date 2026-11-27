# PALLAS v1.9.3 – Midnight / Official Price & Product-only Images

Website đầy đủ Next.js + Studio CMS. Cập nhật từ v1.9.2:
- Logo PALLAS gốc trong suốt (`public/images/brand/pallas-logo-original-transparent.png`) trên nền đen Midnight.
- 32 SKU duy nhất, giá theo bảng báo giá công ty **15/03/2026**, đã bao gồm thuế.
- Chỉ chọn ảnh sản phẩm riêng lẻ, không sử dụng banner quảng cáo hay ảnh ghép chứa chữ.
- Mở `docs/RELEASE_NOTES_v1.9.3_OFFICIAL_PRICE.md` để xem nguồn, cảnh báo về dòng STT 9/11 và danh sách các mã chưa duyệt.

Chạy trên Mac (Node 22.14+):
```bash
npm install
npm test
npm run build
npm run dev
```

Không copy `.env*` vào GitHub. Sanity có thể chưa được cấu hình; dữ liệu fallback trong `src/data/products.ts` hoạt động khi chưa dùng CMS.
