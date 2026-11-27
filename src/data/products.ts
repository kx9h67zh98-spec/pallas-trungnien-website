import type { Category, Product, CategoryId } from '@/types';

// Giá theo bảng giá PALLAS ngày 15/03/2026 (đã bao gồm thuế).
// STT 11 trùng tên, dung tích và giá STT 9 nên không tạo SKU trùng.
export const OFFICIAL_PRICE_DATE = "2026-03-15";
export const categories: Category[] = [
  {
    "id": "foam",
    "label": "Bọt tuyết & nước rửa xe",
    "caption": "Dòng PALLAS 60, 120 và nước rửa xe siêu bóng",
    "image": "/images/products/official-2026-03/pallas-120-6l.png"
  },
  {
    "id": "touchless",
    "label": "Rửa xe không chạm",
    "caption": "Các quy cách Nano EX theo bảng giá",
    "image": "/images/products/official-2026-03/nano-ex-6l.png"
  },
  {
    "id": "wax",
    "label": "Wax & dưỡng bóng",
    "caption": "Wax lốp, wax sơn và chăm sóc nội thất",
    "image": "/images/products/official-2026-03/wax-lop-pallas-1-5l.png"
  },
  {
    "id": "cleaner",
    "label": "Vệ sinh chuyên dụng",
    "caption": "Vệ sinh máy, kính, tẩy đa năng và trang sức",
    "image": "/images/products/official-2026-03/tay-rua-may-pallas-1-5l.png"
  },
  {
    "id": "equipment",
    "label": "Thiết bị rửa xe",
    "caption": "Máy hút nhớt và bình phun bọt tuyết",
    "image": "/images/products/official-2026-03/binh-phun-bot-tuyet-20l.png"
  }
];
export const products: Product[] = [
  {
    "slug": "binh-hut-nhot-8l",
    "name": "Bình hút nhớt xe gắn máy 8 lít",
    "shortName": "Bình hút nhớt xe gắn máy 8 lít",
    "category": "equipment",
    "volume": "8L",
    "price": 1600000,
    "unit": "Bộ",
    "priceSheetRow": 1,
    "priceSheetDate": "2026-03-15",
    "packQuantity": null,
    "image": "/images/products/official-2026-03/binh-hut-nhot-8l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Bình hút nhớt xe gắn máy bằng inox 304, đầu hút 1,2m, khối lượng máy khoảng 5kg.",
    "highlights": [
      "Quy cách 8L",
      "Đơn vị tính: Bộ",
      "Thiết bị theo báo giá công ty"
    ],
    "usage": "Bảo hành theo bảng giá: 06 tháng. Áp lực sử dụng ghi trong tài liệu: 4–5 kg/cm².",
    "audience": "Chuyen nghiep",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/binh-hut-nhot-8l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "binh-phun-bot-tuyet-20l",
    "name": "Bình phun bọt tuyết 20 lít",
    "shortName": "Bình phun bọt tuyết 20 lít",
    "category": "equipment",
    "volume": "20L",
    "price": 3500000,
    "unit": "Bộ",
    "priceSheetRow": 2,
    "priceSheetDate": "2026-03-15",
    "packQuantity": null,
    "image": "/images/products/official-2026-03/binh-phun-bot-tuyet-20l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Bình phun bọt tuyết inox 304, tầm phun khoảng 3m, khối lượng máy khoảng 9,5kg.",
    "highlights": [
      "Quy cách 20L",
      "Đơn vị tính: Bộ",
      "Thiết bị theo báo giá công ty"
    ],
    "usage": "Bảo hành theo bảng giá: 06 tháng. Áp lực sử dụng ghi trong tài liệu: 4–5 kg/cm².",
    "audience": "Chuyen nghiep",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/binh-phun-bot-tuyet-20l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "binh-phun-bot-tuyet-30l",
    "name": "Bình phun bọt tuyết 30 lít",
    "shortName": "Bình phun bọt tuyết 30 lít",
    "category": "equipment",
    "volume": "30L",
    "price": 4200000,
    "unit": "Bộ",
    "priceSheetRow": 3,
    "priceSheetDate": "2026-03-15",
    "packQuantity": null,
    "image": "/images/products/official-2026-03/binh-phun-bot-tuyet-30l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Bình phun bọt tuyết inox 304, tầm phun khoảng 3m, khối lượng máy khoảng 9,5–12kg.",
    "highlights": [
      "Quy cách 30L",
      "Đơn vị tính: Bộ",
      "Thiết bị theo báo giá công ty"
    ],
    "usage": "Bảo hành theo bảng giá: 06 tháng. Áp lực sử dụng ghi trong tài liệu: 4–5 kg/cm².",
    "audience": "Chuyen nghiep",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/binh-phun-bot-tuyet-30l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "binh-phun-bot-tuyet-40l",
    "name": "Bình phun bọt tuyết 40 lít",
    "shortName": "Bình phun bọt tuyết 40 lít",
    "category": "equipment",
    "volume": "40L",
    "price": 5600000,
    "unit": "Bộ",
    "priceSheetRow": 4,
    "priceSheetDate": "2026-03-15",
    "packQuantity": null,
    "image": "/images/products/official-2026-03/binh-phun-bot-tuyet-40l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Bình phun bọt tuyết inox 304, tầm phun khoảng 3m, khối lượng máy khoảng 12–15kg.",
    "highlights": [
      "Quy cách 40L",
      "Đơn vị tính: Bộ",
      "Thiết bị theo báo giá công ty"
    ],
    "usage": "Bảo hành theo bảng giá: 06 tháng. Áp lực sử dụng ghi trong tài liệu: 4–5 kg/cm².",
    "audience": "Chuyen nghiep",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/binh-phun-bot-tuyet-40l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "binh-phun-bot-tuyet-60l",
    "name": "Bình phun bọt tuyết 60 lít",
    "shortName": "Bình phun bọt tuyết 60 lít",
    "category": "equipment",
    "volume": "60L",
    "price": 7700000,
    "unit": "Bộ",
    "priceSheetRow": 5,
    "priceSheetDate": "2026-03-15",
    "packQuantity": null,
    "image": "/images/products/official-2026-03/binh-phun-bot-tuyet-60l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Bình phun bọt tuyết inox 304, tầm phun khoảng 3m, khối lượng máy khoảng 15–20kg.",
    "highlights": [
      "Quy cách 60L",
      "Đơn vị tính: Bộ",
      "Thiết bị theo báo giá công ty"
    ],
    "usage": "Bảo hành theo bảng giá: 06 tháng. Áp lực sử dụng ghi trong tài liệu: 4–5 kg/cm².",
    "audience": "Chuyen nghiep",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/binh-phun-bot-tuyet-60l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "nuoc-rua-xe-sieu-bong-1-5l",
    "name": "Nước rửa xe siêu bóng PALLAS 1,5 lít",
    "shortName": "Nước rửa xe siêu bóng PALLAS 1,5 lít",
    "category": "foam",
    "volume": "1,5L",
    "price": 83000,
    "unit": "Cal",
    "priceSheetRow": 6,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 16,
    "image": "/images/products/official-2026-03/nuoc-rua-xe-sieu-bong-1-5l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Nước rửa xe siêu bóng có thành phần dưỡng bóng Carnauba Wax, phù hợp nhu cầu rửa xe tại nhà.",
    "highlights": [
      "Quy cách 1,5L",
      "Đơn vị tính: Cal",
      "Quy cách thùng: 16 can/thùng"
    ],
    "usage": "Đọc nhãn bao bì để biết cách pha và hướng dẫn an toàn.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/nuoc-rua-xe-sieu-bong-1-5l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "nano-ex-1-5l",
    "name": "PALLAS Nano EX – Bọt tuyết rửa xe không chạm 1,5 lít",
    "shortName": "PALLAS Nano EX – Bọt tuyết rửa xe không chạm 1,5 lít",
    "category": "touchless",
    "volume": "1,5L",
    "price": 130000,
    "unit": "Cal",
    "priceSheetRow": 7,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 16,
    "image": "/images/products/official-2026-03/nano-ex-1-5l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Bọt tuyết rửa xe không chạm với thành phần Carnauba Wax theo tài liệu báo giá.",
    "highlights": [
      "Quy cách 1,5L",
      "Đơn vị tính: Cal",
      "Quy cách thùng: 16 can/thùng"
    ],
    "usage": "Đọc nhãn để xác định tỷ lệ pha, thời gian tác dụng và tính tương thích với bề mặt.",
    "audience": "Ca hai",
    "featured": true,
    "badge": "Theo bảng giá 15/03/2026",
    "gallery": [
      "/images/products/official-2026-03/nano-ex-1-5l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "nano-ex-6l",
    "name": "PALLAS Nano EX – Bọt tuyết rửa xe không chạm 6 lít",
    "shortName": "PALLAS Nano EX – Bọt tuyết rửa xe không chạm 6 lít",
    "category": "touchless",
    "volume": "6L",
    "price": 480000,
    "unit": "Cal",
    "priceSheetRow": 8,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 5,
    "image": "/images/products/official-2026-03/nano-ex-6l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Bọt tuyết rửa xe không chạm với thành phần Carnauba Wax theo tài liệu báo giá.",
    "highlights": [
      "Quy cách 6L",
      "Đơn vị tính: Cal",
      "Quy cách thùng: 5 can/thùng"
    ],
    "usage": "Đọc nhãn để xác định tỷ lệ pha, thời gian tác dụng và tính tương thích với bề mặt.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/nano-ex-6l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "pallas-60-6l",
    "name": "PALLAS 60 – Bọt tuyết siêu bóng sơn 6 lít",
    "shortName": "PALLAS 60 – Bọt tuyết siêu bóng sơn 6 lít",
    "category": "foam",
    "volume": "6L",
    "price": 218000,
    "unit": "Cal",
    "priceSheetRow": 9,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 5,
    "image": "/images/products/official-2026-03/pallas-60-6l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Dòng bọt tuyết siêu bóng sơn PALLAS 60, quy cách 6 lít.",
    "highlights": [
      "Quy cách 6L",
      "Đơn vị tính: Cal",
      "Quy cách thùng: 5 can/thùng"
    ],
    "usage": "Đọc nhãn sản phẩm trước khi pha và sử dụng.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/pallas-60-6l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "pallas-60-21l",
    "name": "PALLAS 60 – Bọt tuyết siêu bóng sơn 21 lít",
    "shortName": "PALLAS 60 – Bọt tuyết siêu bóng sơn 21 lít",
    "category": "foam",
    "volume": "21L",
    "price": 720000,
    "unit": "Cal",
    "priceSheetRow": 10,
    "priceSheetDate": "2026-03-15",
    "packQuantity": null,
    "image": "/images/products/official-2026-03/pallas-60-21l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Dòng bọt tuyết siêu bóng sơn PALLAS 60, can 21 lít.",
    "highlights": [
      "Quy cách 21L",
      "Đơn vị tính: Cal"
    ],
    "usage": "Đọc nhãn sản phẩm trước khi pha và sử dụng.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/pallas-60-21l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "pallas-120-1-5l",
    "name": "PALLAS 120 – Bọt tuyết siêu bóng sơn 1,5 lít",
    "shortName": "PALLAS 120 – Bọt tuyết siêu bóng sơn 1,5 lít",
    "category": "foam",
    "volume": "1,5L",
    "price": 94000,
    "unit": "Cal",
    "priceSheetRow": 12,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 16,
    "image": "/images/products/official-2026-03/pallas-120-1-5l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Dòng bọt tuyết siêu bóng sơn PALLAS 120, chai 1,5 lít.",
    "highlights": [
      "Quy cách 1,5L",
      "Đơn vị tính: Cal",
      "Quy cách thùng: 16 can/thùng"
    ],
    "usage": "Đọc nhãn sản phẩm trước khi pha và sử dụng.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/pallas-120-1-5l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "pallas-120-6l",
    "name": "PALLAS 120 – Bọt tuyết siêu bóng sơn 6 lít",
    "shortName": "PALLAS 120 – Bọt tuyết siêu bóng sơn 6 lít",
    "category": "foam",
    "volume": "6L",
    "price": 310000,
    "unit": "Cal",
    "priceSheetRow": 13,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 5,
    "image": "/images/products/official-2026-03/pallas-120-6l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Dòng bọt tuyết siêu bóng sơn PALLAS 120, can 6 lít.",
    "highlights": [
      "Quy cách 6L",
      "Đơn vị tính: Cal",
      "Quy cách thùng: 5 can/thùng"
    ],
    "usage": "Đọc nhãn sản phẩm trước khi pha và sử dụng.",
    "audience": "Ca hai",
    "featured": true,
    "badge": "Theo bảng giá 15/03/2026",
    "gallery": [
      "/images/products/official-2026-03/pallas-120-6l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "pallas-120-21l",
    "name": "PALLAS 120 – Bọt tuyết siêu bóng sơn 21 lít",
    "shortName": "PALLAS 120 – Bọt tuyết siêu bóng sơn 21 lít",
    "category": "foam",
    "volume": "21L",
    "price": 970000,
    "unit": "Cal",
    "priceSheetRow": 14,
    "priceSheetDate": "2026-03-15",
    "packQuantity": null,
    "image": "/images/products/official-2026-03/pallas-120-21l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Dòng bọt tuyết siêu bóng sơn PALLAS 120, can 21 lít.",
    "highlights": [
      "Quy cách 21L",
      "Đơn vị tính: Cal"
    ],
    "usage": "Đọc nhãn sản phẩm trước khi pha và sử dụng.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/pallas-120-21l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "wax-lop-pallas-1-5l",
    "name": "PALLAS Tyre Nano Wax – Dưỡng bóng lốp 1,5 lít",
    "shortName": "PALLAS Tyre Nano Wax – Dưỡng bóng lốp 1,5 lít",
    "category": "wax",
    "volume": "1,5L",
    "price": 140000,
    "unit": "Cal",
    "priceSheetRow": 15,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 16,
    "image": "/images/products/official-2026-03/wax-lop-pallas-1-5l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Wax Nano dưỡng bóng lốp, màu trắng sữa, hương nhẹ, theo mô tả bảng giá.",
    "highlights": [
      "Quy cách 1,5L",
      "Đơn vị tính: Cal",
      "Quy cách thùng: 16 can/thùng"
    ],
    "usage": "Bảng giá ghi: 1L sản phẩm pha 2–3L nước. Đọc kỹ nhãn và tránh bề mặt tiếp xúc đường, phanh.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/wax-lop-pallas-1-5l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "wax-lop-pallas-6l",
    "name": "PALLAS Tyre Nano Wax – Dưỡng bóng lốp 6 lít",
    "shortName": "PALLAS Tyre Nano Wax – Dưỡng bóng lốp 6 lít",
    "category": "wax",
    "volume": "6L",
    "price": 530000,
    "unit": "Cal",
    "priceSheetRow": 16,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 5,
    "image": "/images/products/official-2026-03/wax-lop-pallas-6l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Wax Nano dưỡng bóng lốp, quy cách 6 lít.",
    "highlights": [
      "Quy cách 6L",
      "Đơn vị tính: Cal",
      "Quy cách thùng: 5 can/thùng"
    ],
    "usage": "Bảng giá ghi: 1L sản phẩm pha 2–3L nước. Đọc kỹ nhãn và tránh bề mặt tiếp xúc đường, phanh.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/wax-lop-pallas-6l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "wax-lop-pallas-21l",
    "name": "PALLAS Tyre Nano Wax – Dưỡng bóng lốp 21 lít",
    "shortName": "PALLAS Tyre Nano Wax – Dưỡng bóng lốp 21 lít",
    "category": "wax",
    "volume": "21L",
    "price": 1650000,
    "unit": "Cal",
    "priceSheetRow": 17,
    "priceSheetDate": "2026-03-15",
    "packQuantity": null,
    "image": "/images/products/official-2026-03/wax-lop-pallas-21l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Wax Nano dưỡng bóng lốp, can 21 lít.",
    "highlights": [
      "Quy cách 21L",
      "Đơn vị tính: Cal"
    ],
    "usage": "Bảng giá ghi: 1L sản phẩm pha 3L nước. Đọc kỹ nhãn và tránh bề mặt tiếp xúc đường, phanh.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/wax-lop-pallas-21l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "tay-rua-may-pallas-620ml",
    "name": "PALLAS – Dung dịch tẩy rửa máy siêu mạnh 620ml",
    "shortName": "PALLAS – Dung dịch tẩy rửa máy siêu mạnh 620ml",
    "category": "cleaner",
    "volume": "620ml",
    "price": 36000,
    "unit": "Chai",
    "priceSheetRow": 18,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 48,
    "image": "/images/products/official-2026-03/tay-rua-may-pallas-620ml.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Dung dịch dùng vệ sinh dầu nhớt và bụi bẩn bám trên một số chi tiết máy, theo tài liệu báo giá.",
    "highlights": [
      "Quy cách 620ml",
      "Đơn vị tính: Chai",
      "Quy cách thùng: 48 chai/thùng"
    ],
    "usage": "Dùng theo nhãn, thử ở vị trí nhỏ và tránh tiếp xúc với bề mặt không tương thích.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/tay-rua-may-pallas-620ml.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "tay-rua-may-pallas-1-5l",
    "name": "PALLAS – Dung dịch tẩy rửa máy siêu mạnh 1,5 lít",
    "shortName": "PALLAS – Dung dịch tẩy rửa máy siêu mạnh 1,5 lít",
    "category": "cleaner",
    "volume": "1,5L",
    "price": 93000,
    "unit": "Cal",
    "priceSheetRow": 19,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 16,
    "image": "/images/products/official-2026-03/tay-rua-may-pallas-1-5l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Dung dịch tẩy rửa máy siêu mạnh, quy cách 1,5 lít.",
    "highlights": [
      "Quy cách 1,5L",
      "Đơn vị tính: Cal",
      "Quy cách thùng: 16 can/thùng"
    ],
    "usage": "Dùng theo nhãn, thử ở vị trí nhỏ và tránh tiếp xúc với bề mặt không tương thích.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/tay-rua-may-pallas-1-5l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "tay-rua-may-pallas-3l",
    "name": "PALLAS – Dung dịch tẩy rửa máy siêu mạnh 3 lít",
    "shortName": "PALLAS – Dung dịch tẩy rửa máy siêu mạnh 3 lít",
    "category": "cleaner",
    "volume": "3L",
    "price": 171000,
    "unit": "Cal",
    "priceSheetRow": 20,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 9,
    "image": "/images/products/official-2026-03/tay-rua-may-pallas-3l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Dung dịch tẩy rửa máy siêu mạnh, quy cách 3 lít.",
    "highlights": [
      "Quy cách 3L",
      "Đơn vị tính: Cal",
      "Quy cách thùng: 9 can/thùng"
    ],
    "usage": "Dùng theo nhãn, thử ở vị trí nhỏ và tránh tiếp xúc với bề mặt không tương thích.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/tay-rua-may-pallas-3l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "tay-trang-da-nang-620ml",
    "name": "PALLAS – Dung dịch tẩy siêu trắng đa năng 620ml",
    "shortName": "PALLAS – Dung dịch tẩy siêu trắng đa năng 620ml",
    "category": "cleaner",
    "volume": "620ml",
    "price": 36000,
    "unit": "Chai",
    "priceSheetRow": 21,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 48,
    "image": "/images/products/official-2026-03/tay-trang-da-nang-620ml.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Dung dịch tẩy siêu trắng đa năng, quy cách 620ml, theo mô tả trong bảng giá.",
    "highlights": [
      "Quy cách 620ml",
      "Đơn vị tính: Chai",
      "Quy cách thùng: 48 chai/thùng"
    ],
    "usage": "Đọc hướng dẫn và cảnh báo trên nhãn trước khi sử dụng.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/tay-trang-da-nang-620ml.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "tay-trang-da-nang-500ml",
    "name": "PALLAS – Dung dịch tẩy siêu trắng đa năng 500ml",
    "shortName": "PALLAS – Dung dịch tẩy siêu trắng đa năng 500ml",
    "category": "cleaner",
    "volume": "500ml",
    "price": 49000,
    "unit": "Chai",
    "priceSheetRow": 22,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 30,
    "image": "/images/products/official-2026-03/tay-trang-da-nang-500ml.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Dung dịch tẩy siêu trắng đa năng dạng chai xịt 500ml.",
    "highlights": [
      "Quy cách 500ml",
      "Đơn vị tính: Chai",
      "Quy cách thùng: 30 chai/thùng"
    ],
    "usage": "Đọc hướng dẫn và cảnh báo trên nhãn trước khi sử dụng.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/tay-trang-da-nang-500ml.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "tay-trang-da-nang-3l",
    "name": "PALLAS – Dung dịch tẩy siêu trắng đa năng 3 lít",
    "shortName": "PALLAS – Dung dịch tẩy siêu trắng đa năng 3 lít",
    "category": "cleaner",
    "volume": "3L",
    "price": 150000,
    "unit": "Cal",
    "priceSheetRow": 23,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 9,
    "image": "/images/products/official-2026-03/tay-trang-da-nang-3l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Dung dịch tẩy siêu trắng đa năng, quy cách can 3 lít.",
    "highlights": [
      "Quy cách 3L",
      "Đơn vị tính: Cal",
      "Quy cách thùng: 9 can/thùng"
    ],
    "usage": "Đọc hướng dẫn và cảnh báo trên nhãn trước khi sử dụng.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/tay-trang-da-nang-3l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "wax-son-pallas-120ml",
    "name": "PALLAS Car Wash Wax – Dưỡng bóng sơn 120ml",
    "shortName": "PALLAS Car Wash Wax – Dưỡng bóng sơn 120ml",
    "category": "wax",
    "volume": "120ml",
    "price": 25000,
    "unit": "Chai",
    "priceSheetRow": 24,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 120,
    "image": "/images/products/official-2026-03/wax-son-pallas-120ml.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Wax dưỡng bóng sơn dạng chai nhỏ 120ml.",
    "highlights": [
      "Quy cách 120ml",
      "Đơn vị tính: Chai",
      "Quy cách thùng: 120 chai/thùng"
    ],
    "usage": "Theo bảng giá: dùng trực tiếp; đọc kỹ nhãn và thử ở vị trí nhỏ.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/wax-son-pallas-120ml.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "wax-son-pallas-333ml",
    "name": "PALLAS Car Wash Wax – Dưỡng bóng sơn 333ml",
    "shortName": "PALLAS Car Wash Wax – Dưỡng bóng sơn 333ml",
    "category": "wax",
    "volume": "333ml",
    "price": 49000,
    "unit": "Chai",
    "priceSheetRow": 25,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 45,
    "image": "/images/products/official-2026-03/wax-son-pallas-333ml.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Wax dưỡng bóng sơn dạng chai xịt 333ml.",
    "highlights": [
      "Quy cách 333ml",
      "Đơn vị tính: Chai",
      "Quy cách thùng: 45 chai/thùng"
    ],
    "usage": "Theo bảng giá: dùng trực tiếp; đọc kỹ nhãn và thử ở vị trí nhỏ.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/wax-son-pallas-333ml.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "wax-son-pallas-1-5l",
    "name": "PALLAS Car Wash Wax – Dưỡng bóng sơn 1,5 lít",
    "shortName": "PALLAS Car Wash Wax – Dưỡng bóng sơn 1,5 lít",
    "category": "wax",
    "volume": "1,5L",
    "price": 140000,
    "unit": "Chai",
    "priceSheetRow": 26,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 16,
    "image": "/images/products/official-2026-03/wax-son-pallas-1-5l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Dung dịch wax dưỡng bóng sơn dạng can 1,5 lít.",
    "highlights": [
      "Quy cách 1,5L",
      "Đơn vị tính: Chai",
      "Quy cách thùng: 16 chai/thùng"
    ],
    "usage": "Bảng giá ghi: 1L PALLAS pha 3L nước; đọc kỹ nhãn.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/wax-son-pallas-1-5l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "wax-son-pallas-6l",
    "name": "PALLAS Car Wash Wax – Dưỡng bóng sơn 6 lít",
    "shortName": "PALLAS Car Wash Wax – Dưỡng bóng sơn 6 lít",
    "category": "wax",
    "volume": "6L",
    "price": 530000,
    "unit": "Chai",
    "priceSheetRow": 27,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 5,
    "image": "/images/products/official-2026-03/wax-son-pallas-6l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Dung dịch wax dưỡng bóng sơn dạng can 6 lít.",
    "highlights": [
      "Quy cách 6L",
      "Đơn vị tính: Chai",
      "Quy cách thùng: 5 chai/thùng"
    ],
    "usage": "Bảng giá ghi: 1L PALLAS pha 3L nước; đọc kỹ nhãn.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/wax-son-pallas-6l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "nano-interior-250g",
    "name": "PALLAS Nano Polish Cream – Đánh bóng nội thất 250g",
    "shortName": "PALLAS Nano Polish Cream – Đánh bóng nội thất 250g",
    "category": "wax",
    "volume": "250g",
    "price": 38000,
    "unit": "Chai",
    "priceSheetRow": 28,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 80,
    "image": "/images/products/official-2026-03/nano-interior-250g.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Kem Nano đánh bóng nội thất, thích hợp cho các bề mặt được nhà sản xuất khuyến nghị.",
    "highlights": [
      "Quy cách 250g",
      "Đơn vị tính: Chai",
      "Quy cách thùng: 80 chai/thùng"
    ],
    "usage": "Đọc kỹ hướng dẫn trước khi dùng trên nhựa, da, simili hoặc gỗ.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/nano-interior-250g.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "nuoc-lau-kinh-pallas-620ml",
    "name": "PALLAS – Nước lau kính & rửa kính ô tô đậm đặc 620ml",
    "shortName": "PALLAS – Nước lau kính & rửa kính ô tô đậm đặc 620ml",
    "category": "cleaner",
    "volume": "620ml",
    "price": 28000,
    "unit": "Chai",
    "priceSheetRow": 29,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 48,
    "image": "/images/products/official-2026-03/nuoc-lau-kinh-pallas-620ml.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Dung dịch lau kính và rửa kính ô tô đậm đặc 620ml.",
    "highlights": [
      "Quy cách 620ml",
      "Đơn vị tính: Chai",
      "Quy cách thùng: 48 chai/thùng"
    ],
    "usage": "Bảng giá ghi: 620ml pha 3L nước; đọc kỹ hướng dẫn trên nhãn.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/nuoc-lau-kinh-pallas-620ml.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "nuoc-lau-kinh-pallas-3l",
    "name": "PALLAS – Nước lau kính & rửa kính ô tô 3 lít",
    "shortName": "PALLAS – Nước lau kính & rửa kính ô tô 3 lít",
    "category": "cleaner",
    "volume": "3L",
    "price": 103000,
    "unit": "Cal",
    "priceSheetRow": 30,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 9,
    "image": "/images/products/official-2026-03/nuoc-lau-kinh-pallas-3l.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Dung dịch lau kính và rửa kính ô tô, can 3 lít.",
    "highlights": [
      "Quy cách 3L",
      "Đơn vị tính: Cal",
      "Quy cách thùng: 9 can/thùng"
    ],
    "usage": "Bảng giá ghi: 3L pha 9L nước; đọc kỹ hướng dẫn trên nhãn.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/nuoc-lau-kinh-pallas-3l.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "kem-bot-sieu-bong-trang-suc-60ml",
    "name": "PALLAS – Kem bọt siêu bóng trang sức 60ml",
    "shortName": "PALLAS – Kem bọt siêu bóng trang sức 60ml",
    "category": "cleaner",
    "volume": "60ml",
    "price": 70000,
    "unit": "Chai",
    "priceSheetRow": 31,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 120,
    "image": "/images/products/official-2026-03/kem-bot-sieu-bong-trang-suc-60ml.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Kem bọt làm sạch và tạo độ bóng cho trang sức, quy cách 60ml.",
    "highlights": [
      "Quy cách 60ml",
      "Đơn vị tính: Chai",
      "Quy cách thùng: 120 chai/thùng"
    ],
    "usage": "Kiểm tra loại vật liệu phù hợp và đọc kỹ hướng dẫn trên nhãn trước khi dùng.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/kem-bot-sieu-bong-trang-suc-60ml.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "kem-bot-sieu-bong-trang-suc-120ml",
    "name": "PALLAS – Kem bọt siêu bóng trang sức 120ml",
    "shortName": "PALLAS – Kem bọt siêu bóng trang sức 120ml",
    "category": "cleaner",
    "volume": "120ml",
    "price": 120000,
    "unit": "Chai",
    "priceSheetRow": 32,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 100,
    "image": "/images/products/official-2026-03/kem-bot-sieu-bong-trang-suc-120ml.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Kem bọt làm sạch và tạo độ bóng cho trang sức, quy cách 120ml.",
    "highlights": [
      "Quy cách 120ml",
      "Đơn vị tính: Chai",
      "Quy cách thùng: 100 chai/thùng"
    ],
    "usage": "Kiểm tra loại vật liệu phù hợp và đọc kỹ hướng dẫn trên nhãn trước khi dùng.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/kem-bot-sieu-bong-trang-suc-120ml.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "kem-bot-sieu-bong-trang-suc-160ml",
    "name": "PALLAS – Kem bọt siêu bóng trang sức 160ml",
    "shortName": "PALLAS – Kem bọt siêu bóng trang sức 160ml",
    "category": "cleaner",
    "volume": "160ml",
    "price": 150000,
    "unit": "Chai",
    "priceSheetRow": 33,
    "priceSheetDate": "2026-03-15",
    "packQuantity": 100,
    "image": "/images/products/official-2026-03/kem-bot-sieu-bong-trang-suc-160ml.png",
    "imageType": "provided",
    "referenceFrom": null,
    "summary": "Kem bọt làm sạch và tạo độ bóng cho trang sức, quy cách 160ml.",
    "highlights": [
      "Quy cách 160ml",
      "Đơn vị tính: Chai",
      "Quy cách thùng: 100 chai/thùng"
    ],
    "usage": "Kiểm tra loại vật liệu phù hợp và đọc kỹ hướng dẫn trên nhãn trước khi dùng.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/official-2026-03/kem-bot-sieu-bong-trang-suc-160ml.png"
    ],
    "note": "Giá theo bảng giá công ty ngày 15/03/2026, đã bao gồm các khoản thuế. Giá cuối cùng, tồn kho và phí giao hàng cần được xác nhận khi tiếp nhận yêu cầu."
  }
];
export const featured = products.filter(p => p.featured);
export const getProduct = (slug: string) => products.find(p => p.slug === slug);
export const getCategory = (id: CategoryId) => categories.find(c => c.id === id);
