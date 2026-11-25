# BPMN – workflow tóm tắt (phục vụ duyệt nghiệp vụ)

> Đây là **sơ đồ mô tả luồng** bằng Mermaid, không phải file BPMN 2.0 executable. Cần được vẽ lane/participant trong Camunda Modeler sau khi doanh nghiệp xác nhận.

## 1. Khách hàng gửi yêu cầu đặt hàng – website demo

```mermaid
flowchart TD
  A[Khách chọn sản phẩm] --> B[Thêm giỏ hàng]
  B --> C[Kiểm tra số lượng và tạm tính]
  C --> D[Nhập thông tin liên hệ]
  D --> E{Form hợp lệ?}
  E -- Không --> D
  E -- Có --> F[Soạn email trong ứng dụng email của khách]
  F --> G{Khách nhấn Gửi?}
  G -- Không --> H[Không có yêu cầu được gửi]
  G -- Có --> I[Nhân viên nhận email nếu email hoạt động]
  I --> J[Kiểm tra tồn kho, giá, vận chuyển]
  J --> K[Liên hệ khách xác nhận]
```

## 2. B2B – tiếp nhận báo giá đại lý

```mermaid
flowchart TD
 A[Đối tác chọn Dành cho đại lý] --> B[Điền tên đơn vị, khu vực, nhu cầu]
 B --> C{Hợp lệ?}
 C -- Không --> B
 C -- Có --> D[Mở ứng dụng email]
 D --> E[Đối tác tự gửi email]
 E --> F[Nhân viên liên hệ nếu tiếp nhận được]
 F --> G[Thảo luận SKU, số lượng, điều kiện giao nhận]
 G --> H[Báo giá và chính sách đã phê duyệt]
```

## 3. Flow mục tiêu khi có backend production

```mermaid
flowchart TD
 A[Người mua checkout] --> B[Backend xác thực giá và tồn kho]
 B --> C{Hợp lệ?}
 C -- Không --> D[Thông báo sửa giỏ hoặc hết hàng]
 C -- Có --> E[Tạo đơn pending với mã order]
 E --> F{Phương thức thanh toán}
 F -- COD --> G[Chờ xác nhận]
 F -- Cổng thanh toán --> H[Chuyển đến đối tác thanh toán]
 H --> I[Webhook chữ ký hợp lệ]
 I --> G
 G --> J[Admin xác nhận và bàn giao đơn vị giao hàng]
 J --> K[Cập nhật trạng thái và thông báo khách]
```
