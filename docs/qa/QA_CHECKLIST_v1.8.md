# PALLAS v1.8 – Checklist nghiệm thu

## A. Sản phẩm và giá
- [ ] Trong `/san-pham`, chọn tối đa 3 mục So sánh, chọn thứ tư bị vô hiệu hóa
- [ ] Bỏ chọn và chọn lại hoạt động; nút so sánh không làm phát sinh sản phẩm trong giỏ
- [ ] Bảng so sánh hiển thị giá theo SKU và “Liên hệ báo giá” cho SKU chưa có giá
- [ ] Link trong bảng so sánh mở đúng trang chi tiết
- [ ] Trang PALLAS 120, Nano 30, Nano EX cho chuyển dung tích chính xác
- [ ] Trang sản phẩm không có nhiều quy cách không xuất hiện bộ chọn dư thừa

## B. Báo giá nhanh
- [ ] Nút mở hộp báo giá chứa đúng tên, quy cách sản phẩm
- [ ] Để trống họ tên / điện thoại: hiển thị lỗi và focus vào trường sai
- [ ] Số lượng 0, -1, 1.5, 100 bị từ chối; 1–99 hợp lệ
- [ ] Không tick đồng ý thì không tạo email
- [ ] Nhập hợp lệ: ứng dụng email được yêu cầu mở (cần nhấn Gửi thủ công)
- [ ] Nếu mailto không mở, có thể sao chép nội dung
- [ ] Email chứa chính xác SKU, số lượng, dữ liệu liên hệ, không chứa giá tự đoán
- [ ] ESC, nút X, backdrop đóng dialog; focus trả về nút mở

## C. Ngôn ngữ / UX
- [ ] VIE/ENG trong header vẫn hoạt động khi điều hướng giữa các trang
- [ ] Bộ chọn dung tích, bảng so sánh, báo giá nhanh đổi ngôn ngữ
- [ ] Ở màn hình 390px và 768px không có tràn ngang; modal cuộn được
- [ ] Với Reduce Motion, hiệu ứng được rút gọn
- [ ] Người dùng bàn phím có thể điều hướng mọi nút / form
- [ ] Xem trang chủ và menu mobile sau deploy; không bị lỗi hydration

## D. Deploy
- [ ] `npm test` PASS
- [ ] `npm run build` PASS
- [ ] `git status` không có file `.env`, `node_modules`, `.next` hoặc file bí mật
- [ ] Netlify Deploys hiển thị Published cho commit mới
- [ ] Kiểm tra link bằng chế độ ẩn danh trên máy tính và điện thoại

## Cần công ty xác nhận trước bán hàng thực tế
- Giá bán từng SKU, hàng còn bán/tồn kho, VAT, phí vận chuyển, tỷ lệ pha và hướng dẫn sản phẩm
- Quy trình email tiếp nhận đơn, tên pháp lý và chính sách đổi trả
- Quyền sử dụng ảnh sản phẩm
