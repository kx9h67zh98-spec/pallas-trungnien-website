# PALLAS – Trung Niên · Thay đổi phiên bản 1.3

## Thay đổi giao diện
- Hero trang chủ chuyển từ can sản phẩm sang logo PALLAS. Rê chuột để mở thông tin, dùng bàn phím (Tab/Enter/Escape) hoặc chạm vào logo trên điện thoại cũng thực hiện được.
- Thẻ thông tin hiển thị năm 2004 theo phần giới thiệu công khai của doanh nghiệp, nhóm hoạt động, địa chỉ liên hệ và hotline.
- Địa chỉ chính thức theo khách hàng cung cấp: **121/2B Khiếu Năng Tĩnh, Phường An Lạc, Thành phố Hồ Chí Minh, Việt Nam**. Tập trung tại `src/data/site.ts` để thay một lần.
- Loại bỏ nhãn “demo” khỏi giao diện dành cho khách mua; tuy nhiên **vẫn thông báo chính xác** hình thức đặt hàng là qua email, chưa có cơ sở dữ liệu đơn hàng hay thanh toán trực tuyến.
- Hiển thị trực tiếp giá đã có thông tin theo quy cách, tính tạm tính trong giỏ hàng và email. Các sản phẩm chưa có giá chính xác theo quy cách vẫn là **Liên hệ báo giá**.

## Cơ sở giá
Dữ liệu có giá được đối chiếu với các trang sản phẩm công khai được công cụ tìm kiếm ghi nhận, không phải báo giá mới được công ty ký duyệt. Website gốc có thời điểm trả trang tạm dừng nên **cần xác nhận lại giá trước khi đưa vào nhận đơn thật**. Không dùng giá khởi điểm cho can dung tích lớn.

Nguồn:
- https://pallas-trungnien.com/san-pham (PALLAS 120/80/60, Nano 30/EX, tẩy rửa máy, tẩy đa năng)
- https://pallas-trungnien.com/nuoc-rua-xe-sieu-bong (hương táo, cam, dâu)
- https://tahico.com/thuong-hieu-pallas/ (đối chiếu danh mục; giá "chỉ từ" **không dùng làm giá SKU**)

**Tập tin đối chiếu:** `docs/PRODUCT_PRICES_TO_APPROVE.csv`

## Thông tin vẫn cần doanh nghiệp cung cấp
1. **Bảng giá SKU chưa xác minh:** ghi tại CSV (xem số dòng chưa có giá). Bao gồm quy cách không chạm 6L/21L, wax, nước lau kính, sản phẩm nội thất và thiết bị.
2. Giá bán lẻ/đại lý có cùng mức không? VAT, chương trình ưu đãi, phí vận chuyển và khả năng bán COD/chuyển khoản.
3. Chính sách đổi trả, bảo hành, giao hàng, bảo vệ dữ liệu và quy trình xác nhận đơn hàng.
4. Sản phẩm còn hàng, thông số kỹ thuật, tỷ lệ pha, SDS và hướng dẫn sử dụng được duyệt.
5. Xác nhận quyền sử dụng bộ ảnh sản phẩm có nguồn từ nhà phân phối trước khi công bố rộng rãi.
6. Xác nhận hotline/email còn hiệu lực; tên pháp nhân trên hóa đơn, giấy đăng ký và mã số thuế.

## Trạng thái kỹ thuật
- Next.js + TypeScript + React; chưa có backend đơn hàng, thanh toán hay quản trị cơ sở dữ liệu.
- Đặt hàng hiện tạo email do chính khách hàng nhấn gửi. Không tự động ghi nhận đơn trên server.
- Bộ ảnh sản phẩm nền trong suốt của v1.2 vẫn được giữ nguyên, bao gồm 20 PNG cutout.
- `docs/preview.html` xem nhanh giao diện hero/hover và các sản phẩm ngay khi offline; các tính năng giỏ hàng đầy đủ có trong Next.js.
