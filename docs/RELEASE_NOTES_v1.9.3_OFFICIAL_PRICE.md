# PALLAS v1.9.3 – Logo gốc, ảnh sản phẩm đơn, bảng giá công ty

## Nguồn

- Bảng giá PDF do người dùng cung cấp, đề ngày **15/03/2026**, có ghi: **Giá trên đã bao gồm các khoản thuế**.
- Kho ảnh website cũ lấy từ ZIP cPanel, được chọn thủ công và xử lý nền.
- Logo PNG thật có nền trong suốt `logo-7296.png` từ kho ảnh website cũ. Không sử dụng ảnh AI vẽ lại.

## Phạm vi

- 32 SKU duy nhất từ 33 dòng bảng giá; dòng 9 và 11 trùng tên/quy cách/giá.
- 32 sản phẩm đều có hình riêng, chỉ chứa vật phẩm. Nhãn in trên chai vẫn được giữ lại. Những ảnh quảng cáo có tiêu đề hoặc nhóm nhiều sản phẩm bị loại.
- Thiết bị 8L, 20L, 30L, 40L, 60L và Nano EX 1,5L/6L dùng ảnh sản phẩm được trích riêng từ bảng giá vì kho ảnh cPanel thiếu ảnh đơn xác định đúng quy cách. Ảnh trong PDF có độ phân giải thấp; nên xin ảnh gốc từ công ty khi có.
- Bảng giá đã cập nhật trong `src/data/products.ts` và file seed `studio/content-seed.ndjson` cho dataset Sanity mới.
- `src/data/site.ts` sử dụng logo trong suốt từ cPanel, header/hero/footer có nền đen Midnight.
- Không khẳng định bảng giá ngày 15/03/2026 vẫn là giá hiện hành; cần doanh nghiệp xác nhận lại trước go-live.

## Việc cần cô chú xác nhận

1. STT 9 và 11 ghi cùng PALLAS 60 – 6L (218.000đ) nhưng dùng hai hình khác nhau; dòng 11 có thể là mã khác.
2. Những sản phẩm trên website cũ nhưng không có trong PDF được lưu danh sách tại `SAN_PHAM_CU_CHUA_CO_TRONG_BANG_GIA.csv` và không tự giữ giá cũ.
3. Tên pháp lý, địa chỉ công ty, trạng thái còn hàng và chi phí vận chuyển chưa được bảng giá xác nhận.
4. Hình sản phẩm trong PDF rất nhỏ; cần ảnh gốc chất lượng cao nếu website chính thức yêu cầu zoom cận.

## Triển khai

- Giải nén, chạy `npm install`, `npm test`, `npm run build`, `npm run dev`.
- Chỉ import seed vào dataset Sanity **mới, trống**. Trước khi nhập vào dataset đang có dữ liệu, sao lưu và so sánh document ID để tránh giá đã được duyệt về sau bị ghi đè.
- Chưa cập nhật GitHub, Netlify hoặc DNS.
