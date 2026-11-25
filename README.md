# PALLAS – Trung Niên Full Website v1.8

**Next.js 16 + React 19 + TypeScript · VIE/ENG · Premium Green UI**

This archive contains the complete application source (`src`, `public`, `docs`, `tests`, scripts and configuration). It excludes `node_modules`, generated `.next` and secrets. It does not include `package-lock.json`: keep the existing lockfile from `PALLAS_GitHub` and let `npm install` update its root version on your Mac.

## New in v1.8

- Chuyển dung tích giữa các SKU thực sự cùng dòng PALLAS 120, Nano 30, Nano EX
- So sánh tối đa 3 sản phẩm ở danh mục, bảng mobile có thể cuộn ngang
- Báo giá nhanh từ trang chi tiết với kiểm tra họ tên, điện thoại, số lượng và checkbox đồng ý; hỗ trợ VIE/ENG
- Animation xuất hiện khi cuộn, chuyển ảnh gallery, mở modal và hover nhẹ; tôn trọng Reduce motion
- Giữ quy trình gửi qua email như v1.7; không tự lưu đơn/nhận thanh toán

Chi tiết: `docs/RELEASE_NOTES_v1.8.md`, `docs/qa/QA_CHECKLIST_v1.8.md`.

## Cập nhật vào repository trên Mac

```bash
rsync -av --exclude='.git' --exclude='package-lock.json' --exclude='node_modules' --exclude='.next' --exclude='.env*' \
  ~/Downloads/PALLAS_Storefront_v1.8/ ~/Downloads/PALLAS_GitHub/
cd ~/Downloads/PALLAS_GitHub
npm install
npm test
npm run build
npm run dev
```

Sau khi test trực tiếp trên trình duyệt thành công:

```bash
git status --short
git add -A
git commit -m "Release PALLAS v1.8 - Product experience and animations"
git push origin main
```

**Lưu ý:** Chạy `npm run build` trên Mac trước khi push. Các ảnh, giá, công dụng và chính sách thương mại cần được phía công ty xác nhận trước go-live.

---

# PALLAS – Trung Niên Storefront v1.7

Website thương mại PALLAS, phát triển với **Next.js 16 · React 19 · TypeScript**

## Nâng cấp v1.7

- Chuyển ngôn ngữ **VIE / ENG** ở header desktop và trong menu mobile
- Chuyển đồng bộ tiêu đề, danh mục, 23 sản phẩm, 4 bài hướng dẫn, giỏ hàng, chính sách và 3 form
- Giữ nguyên mã sản phẩm, giá VND, hotline, email và địa chỉ công ty
- Lưu lựa chọn ngôn ngữ bằng `localStorage` (`pallas-site-language`)
- Bỏ dấu chấm trang trí cuối tiêu đề, nút, thẻ và đoạn mô tả ngắn; giữ dấu chấm cần thiết trong bài viết dài
- Dịch nhãn, placeholder, trợ giúp, lỗi validation và nội dung email được chuẩn bị từ biểu mẫu
- Tối ưu tiêu đề tiếng Anh để tránh tràn layout, thêm nhãn/nhóm nút ngôn ngữ hỗ trợ bàn phím

## Chạy trên Mac

Yêu cầu Node.js >=22.14.0 (nên dùng Node 22 LTS)

```bash
npm install
npm test
npm run build
npm run dev
```

Mở http://localhost:3000

Nếu bạn đang giữ repository GitHub tại `~/Downloads/PALLAS_GitHub`, hãy cập nhật code vào chính thư mục đó, **không thay `.git` và không xóa `package-lock.json` hiện có**:

```bash
rsync -av \
  --exclude='.git' --exclude='package-lock.json' \
  --exclude='node_modules' --exclude='.next' --exclude='.env*' \
  ~/Downloads/PALLAS_Storefront_v1.7/ ~/Downloads/PALLAS_GitHub/

cd ~/Downloads/PALLAS_GitHub
npm install
npm test
npm run build
git status --short
git add -A
git commit -m "Release PALLAS v1.7 bilingual VIE ENG UI"
git push origin main
```

Netlify sẽ tự deploy nếu Automatic Deploys được bật

## Lưu ý vận hành

- **Biểu mẫu không gửi email tự động**: các form chuẩn bị nội dung và mở ứng dụng email của khách, khách phải bấm **Gửi / Send**. Có chức năng sao chép nội dung khi ứng dụng email không mở
- Chưa có backend, database, cổng thanh toán hoặc lưu đơn tự động
- Các giá công khai cần chủ doanh nghiệp duyệt theo từng SKU; sản phẩm chưa có giá vẫn hiện **Liên hệ báo giá / Request a quote**
- Hình ảnh của bên thứ ba cần xác nhận quyền sử dụng trước khi đưa vào website thương mại chính thức
- Bản ENG là **dịch giao diện phía client**, chưa có đường dẫn SEO riêng `/en` hoặc metadata tiếng Anh phía server. Nội dung trên nhãn chai trong ảnh vẫn giữ nguyên
- Tệp `package-lock.json` không được đóng gói trong bản ZIP này. Khi cập nhật repository hiện có, **giữ lockfile đang có rồi chạy `npm install`** để đồng bộ phiên bản

Xem `docs/I18N_UI_UX_QA_v1.7.md` để biết phạm vi kiểm thử, các giới hạn và checklist nghiệm thu
