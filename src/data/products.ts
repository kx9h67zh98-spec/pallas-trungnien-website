import type { Category, Product, CategoryId } from '@/types';
export const categories: Category[] = [
  {
    "id": "foam",
    "label": "Bọt tuyết & nước rửa xe",
    "caption": "Các dòng PALLAS 120, 80, 60 và hương trái cây",
    "image": "/images/products/foam120-lineup-cutout.png"
  },
  {
    "id": "touchless",
    "label": "Rửa xe không chạm",
    "caption": "PALLAS Nano 30 và Nano EX",
    "image": "/images/products/nano30-lineup-cutout.png"
  },
  {
    "id": "wax",
    "label": "Wax & dưỡng bóng",
    "caption": "Bảo dưỡng sơn, lốp và nội thất",
    "image": "/images/products/paint-wax-lineup-cutout.png"
  },
  {
    "id": "cleaner",
    "label": "Vệ sinh chuyên dụng",
    "caption": "Kính, khoang máy, tẩy đa năng",
    "image": "/images/products/glass-cleaner-lineup-cutout.png"
  },
  {
    "id": "equipment",
    "label": "Thiết bị rửa xe",
    "caption": "Thiết bị dành cho tiệm và garage",
    "image": "/images/categories/equipment.svg"
  }
];
export const products: Product[] = [
  {
    "slug": "pallas-120-6l",
    "name": "PALLAS 120 – Bọt tuyết siêu bóng, hương cam 6L",
    "shortName": "PALLAS 120 – Bọt tuyết siêu bóng, hương cam 6L",
    "category": "foam",
    "volume": "6L",
    "price": 310000,
    "image": "/images/products/pallas-120-orange-6l.png",
    "imageType": "provided",
    "referenceFrom": 94000,
    "sourceUrl": "https://pallas-trungnien.com/san-pham",
    "summary": "Dòng rửa xe bọt tuyết PALLAS 120, phiên bản hương cam, dung tích 6L. Hình ảnh đa góc giúp nhận diện bao bì và quy cách.",
    "highlights": [
      "Quy cách 6 lít",
      "Dòng bọt tuyết PALLAS 120",
      "Có nhiều quy cách khác nhau"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": true,
    "badge": "Sản phẩm nổi bật",
    "gallery": [
      "/images/products/pallas-120-orange-6l.png",
      "/images/products/foam120-lineup-cutout.png",
      "/images/products/foam120-6l-tahico-cutout.png",
      "/images/products/foam120-side-cutout.png",
      "/images/products/foam120-back-cutout.png"
    ],
    "note": "Giá niêm yết theo thông tin công khai của PALLAS – Trung Niên. Giá và tình trạng hàng được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "pallas-120-21l",
    "name": "PALLAS 120 – Bọt tuyết siêu bóng 21L",
    "shortName": "PALLAS 120 – Bọt tuyết siêu bóng 21L",
    "category": "foam",
    "volume": "21L",
    "price": 970000,
    "image": "/images/products/foam120-21l-cutout.png",
    "imageType": "provided",
    "referenceFrom": 94000,
    "sourceUrl": "https://pallas-trungnien.com/san-pham",
    "summary": "Sản phẩm PALLAS thuộc nhóm foam, quy cách 21L. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách 21L",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": true,
    "badge": "Can lớn",
    "gallery": [
      "/images/products/foam120-21l-cutout.png",
      "/images/products/foam120-lineup-cutout.png"
    ],
    "note": "Giá niêm yết theo thông tin công khai của PALLAS – Trung Niên. Giá và tình trạng hàng được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "pallas-120-1-5l",
    "name": "PALLAS 120 – Bọt tuyết siêu bóng 1,5L",
    "shortName": "PALLAS 120 – Bọt tuyết siêu bóng 1,5L",
    "category": "foam",
    "volume": "1,5L",
    "price": 94000,
    "image": "/images/products/foam120-lineup-cutout.png",
    "imageType": "provided",
    "referenceFrom": 94000,
    "sourceUrl": "https://pallas-trungnien.com/san-pham",
    "summary": "Sản phẩm PALLAS thuộc nhóm foam, quy cách 1,5L. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách 1,5L",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/foam120-lineup-cutout.png",
      "/images/products/foam120-6l-tahico-cutout.png"
    ],
    "note": "Giá niêm yết theo thông tin công khai của PALLAS – Trung Niên. Giá và tình trạng hàng được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "nano-30-1-5l",
    "name": "PALLAS Nano 30 – Rửa xe không chạm 1,5L",
    "shortName": "PALLAS Nano 30 – Rửa xe không chạm 1,5L",
    "category": "touchless",
    "volume": "1,5L",
    "price": 93000,
    "image": "/images/products/nano30-front-back-cutout.png",
    "imageType": "provided",
    "referenceFrom": 126000,
    "sourceUrl": "https://pallas-trungnien.com/san-pham",
    "summary": "Dòng dung dịch rửa xe không chạm Nano 30, có hình nhóm các dung tích 1,5L / 6L / 21L từ nguồn ảnh tham khảo.",
    "highlights": [
      "Quy cách 1,5L",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": true,
    "badge": "Không chạm",
    "gallery": [
      "/images/products/nano30-front-back-cutout.png",
      "/images/products/nano30-lineup-cutout.png"
    ],
    "note": "Giá niêm yết theo thông tin công khai của PALLAS – Trung Niên. Giá và tình trạng hàng được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "nano-30-6l",
    "name": "PALLAS Nano 30 – Rửa xe không chạm 6L",
    "shortName": "PALLAS Nano 30 – Rửa xe không chạm 6L",
    "category": "touchless",
    "volume": "6L",
    "price": null,
    "image": "/images/products/nano30-lineup-cutout.png",
    "imageType": "provided",
    "referenceFrom": 126000,
    "sourceUrl": "https://tahico.com/dung-dich-khong-cham-pallas-nano-30/",
    "summary": "Sản phẩm PALLAS thuộc nhóm touchless, quy cách 6L. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách 6L",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/nano30-lineup-cutout.png",
      "/images/products/nano30-front-back-cutout.png"
    ],
    "note": "Giá của quy cách này chưa được niêm yết riêng. Vui lòng liên hệ để nhận báo giá."
  },
  {
    "slug": "nano-30-21l",
    "name": "PALLAS Nano 30 – Rửa xe không chạm 21L",
    "shortName": "PALLAS Nano 30 – Rửa xe không chạm 21L",
    "category": "touchless",
    "volume": "21L",
    "price": null,
    "image": "/images/products/nano30-lineup-cutout.png",
    "imageType": "provided",
    "referenceFrom": 126000,
    "sourceUrl": "https://tahico.com/dung-dich-khong-cham-pallas-nano-30/",
    "summary": "Sản phẩm PALLAS thuộc nhóm touchless, quy cách 21L. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách 21L",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/nano30-lineup-cutout.png",
      "/images/products/nano30-front-back-cutout.png"
    ],
    "note": "Giá của quy cách này chưa được niêm yết riêng. Vui lòng liên hệ để nhận báo giá."
  },
  {
    "slug": "nano-ex-1-5l",
    "name": "PALLAS Nano EX – Rửa xe không chạm 1,5L",
    "shortName": "PALLAS Nano EX – Rửa xe không chạm 1,5L",
    "category": "touchless",
    "volume": "1,5L",
    "price": 130000,
    "image": "/images/products/nanoex-lineup-cutout.png",
    "imageType": "provided",
    "referenceFrom": 130000,
    "sourceUrl": "https://pallas-trungnien.com/san-pham",
    "summary": "Sản phẩm PALLAS thuộc nhóm touchless, quy cách 1,5L. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách 1,5L",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": true,
    "badge": "Không chạm",
    "gallery": [
      "/images/products/nanoex-lineup-cutout.png",
      "/images/products/nanoex-front-back-cutout.png"
    ],
    "note": "Giá niêm yết theo thông tin công khai của PALLAS – Trung Niên. Giá và tình trạng hàng được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "nano-ex-6l",
    "name": "PALLAS Nano EX – Rửa xe không chạm 6L",
    "shortName": "PALLAS Nano EX – Rửa xe không chạm 6L",
    "category": "touchless",
    "volume": "6L",
    "price": 480000,
    "image": "/images/products/nanoex-front-back-cutout.png",
    "imageType": "provided",
    "referenceFrom": 130000,
    "sourceUrl": "https://pallas-trungnien.com/san-pham",
    "summary": "Sản phẩm PALLAS thuộc nhóm touchless, quy cách 6L. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách 6L",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/nanoex-front-back-cutout.png",
      "/images/products/nanoex-lineup-cutout.png"
    ],
    "note": "Giá niêm yết theo thông tin công khai của PALLAS – Trung Niên. Giá và tình trạng hàng được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "pallas-60-6l",
    "name": "PALLAS 60 – Bọt tuyết siêu bóng 6L",
    "shortName": "PALLAS 60 – Bọt tuyết siêu bóng 6L",
    "category": "foam",
    "volume": "6L",
    "price": 218000,
    "image": "/images/products/illustration-foam-60.svg",
    "imageType": "illustration",
    "referenceFrom": 218000,
    "sourceUrl": "https://pallas-trungnien.com/san-pham",
    "summary": "Sản phẩm PALLAS thuộc nhóm foam, quy cách 6L. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách 6L",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/illustration-foam-60.svg"
    ],
    "note": "Giá niêm yết theo thông tin công khai của PALLAS – Trung Niên. Giá và tình trạng hàng được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "pallas-80-6l",
    "name": "PALLAS 80 – Bọt tuyết siêu bóng 6L",
    "shortName": "PALLAS 80 – Bọt tuyết siêu bóng 6L",
    "category": "foam",
    "volume": "6L",
    "price": 218000,
    "image": "/images/products/illustration-foam-80.svg",
    "imageType": "illustration",
    "referenceFrom": 218000,
    "sourceUrl": "https://pallas-trungnien.com/san-pham",
    "summary": "Sản phẩm PALLAS thuộc nhóm foam, quy cách 6L. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách 6L",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/illustration-foam-80.svg"
    ],
    "note": "Giá niêm yết theo thông tin công khai của PALLAS – Trung Niên. Giá và tình trạng hàng được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "fruitwash-apple-1-5l",
    "name": "PALLAS – Nước rửa xe siêu bóng hương táo 1,5L",
    "shortName": "PALLAS – Nước rửa xe siêu bóng hương táo 1,5L",
    "category": "foam",
    "volume": "1,5L",
    "price": 83000,
    "image": "/images/products/fruitwash-apple-cutout.png",
    "imageType": "provided",
    "referenceFrom": 83000,
    "sourceUrl": "https://pallas-trungnien.com/nuoc-rua-xe-sieu-bong",
    "summary": "Sản phẩm PALLAS thuộc nhóm foam, quy cách 1,5L. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách 1,5L",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/fruitwash-apple-cutout.png",
      "/images/products/fruitwash-lineup-cutout.png"
    ],
    "note": "Giá niêm yết theo thông tin công khai của PALLAS – Trung Niên. Giá và tình trạng hàng được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "fruitwash-orange-1-5l",
    "name": "PALLAS – Nước rửa xe siêu bóng hương cam 1,5L",
    "shortName": "PALLAS – Nước rửa xe siêu bóng hương cam 1,5L",
    "category": "foam",
    "volume": "1,5L",
    "price": 83000,
    "image": "/images/products/fruitwash-orange-cutout.png",
    "imageType": "provided",
    "referenceFrom": 83000,
    "sourceUrl": "https://pallas-trungnien.com/nuoc-rua-xe-sieu-bong",
    "summary": "Sản phẩm PALLAS thuộc nhóm foam, quy cách 1,5L. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách 1,5L",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/fruitwash-orange-cutout.png",
      "/images/products/fruitwash-lineup-cutout.png"
    ],
    "note": "Giá niêm yết theo thông tin công khai của PALLAS – Trung Niên. Giá và tình trạng hàng được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "fruitwash-strawberry-1-5l",
    "name": "PALLAS – Nước rửa xe siêu bóng hương dâu 1,5L",
    "shortName": "PALLAS – Nước rửa xe siêu bóng hương dâu 1,5L",
    "category": "foam",
    "volume": "1,5L",
    "price": 83000,
    "image": "/images/products/fruitwash-strawberry-cutout.png",
    "imageType": "provided",
    "referenceFrom": 83000,
    "sourceUrl": "https://pallas-trungnien.com/nuoc-rua-xe-sieu-bong",
    "summary": "Sản phẩm PALLAS thuộc nhóm foam, quy cách 1,5L. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách 1,5L",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/fruitwash-strawberry-cutout.png",
      "/images/products/fruitwash-lineup-cutout.png"
    ],
    "note": "Giá niêm yết theo thông tin công khai của PALLAS – Trung Niên. Giá và tình trạng hàng được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "tay-rua-may-pallas-1-5l",
    "name": "PALLAS Engine Cleaner – Dung dịch vệ sinh máy 1,5L",
    "shortName": "PALLAS Engine Cleaner – vệ sinh máy",
    "category": "cleaner",
    "volume": "1,5L",
    "price": 93000,
    "image": "/images/products/engine-cleaner-lineup-cutout.png",
    "imageType": "provided",
    "referenceFrom": null,
    "sourceUrl": "https://pallas-trungnien.com/san-pham",
    "summary": "Sản phẩm PALLAS thuộc nhóm cleaner, quy cách Nhiều quy cách. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách Nhiều quy cách",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/engine-cleaner-lineup-cutout.png"
    ],
    "note": "Giá niêm yết theo thông tin công khai của PALLAS – Trung Niên. Giá và tình trạng hàng được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "tay-trang-da-nang-620ml",
    "name": "PALLAS – Dung dịch tẩy trắng đa năng 620ml",
    "shortName": "PALLAS – tẩy trắng đa năng",
    "category": "cleaner",
    "volume": "620ml",
    "price": 36000,
    "image": "/images/products/multi-cleaner-lineup-cutout.png",
    "imageType": "provided",
    "referenceFrom": 49000,
    "sourceUrl": "https://pallas-trungnien.com/san-pham",
    "summary": "Sản phẩm PALLAS thuộc nhóm cleaner, quy cách Nhiều quy cách. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách Nhiều quy cách",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/multi-cleaner-lineup-cutout.png"
    ],
    "note": "Giá niêm yết theo thông tin công khai của PALLAS – Trung Niên. Giá và tình trạng hàng được xác nhận khi tiếp nhận yêu cầu."
  },
  {
    "slug": "nano-interior-250g",
    "name": "PALLAS Nano Polish Cream – Đánh bóng nội thất 250g",
    "shortName": "PALLAS Nano Polish Cream – Đánh bóng nội thất 250g",
    "category": "wax",
    "volume": "250g",
    "price": null,
    "image": "/images/products/interior-nano-lineup-cutout.png",
    "imageType": "provided",
    "referenceFrom": 38000,
    "sourceUrl": "https://tahico.com/nano-danh-bong-noi-that-xe-pallas-250g-550g/",
    "summary": "Sản phẩm PALLAS thuộc nhóm wax, quy cách 250g. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách 250g",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/interior-nano-lineup-cutout.png"
    ],
    "note": "Giá của quy cách này chưa được niêm yết riêng. Vui lòng liên hệ để nhận báo giá."
  },
  {
    "slug": "nano-interior-550g",
    "name": "PALLAS Nano Polish Cream – Đánh bóng nội thất 550g",
    "shortName": "PALLAS Nano Polish Cream – Đánh bóng nội thất 550g",
    "category": "wax",
    "volume": "550g",
    "price": null,
    "image": "/images/products/interior-nano-lineup-cutout.png",
    "imageType": "provided",
    "referenceFrom": 38000,
    "sourceUrl": "https://tahico.com/nano-danh-bong-noi-that-xe-pallas-250g-550g/",
    "summary": "Sản phẩm PALLAS thuộc nhóm wax, quy cách 550g. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách 550g",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/interior-nano-lineup-cutout.png"
    ],
    "note": "Giá của quy cách này chưa được niêm yết riêng. Vui lòng liên hệ để nhận báo giá."
  },
  {
    "slug": "nuoc-lau-kinh-pallas-3l",
    "name": "PALLAS – Nước lau kính và kính chắn gió",
    "shortName": "PALLAS – Nước lau kính và kính chắn gió",
    "category": "cleaner",
    "volume": "620ml / 3L / 21L",
    "price": null,
    "image": "/images/products/glass-cleaner-lineup-cutout.png",
    "imageType": "provided",
    "referenceFrom": 103000,
    "sourceUrl": "https://tahico.com/nuoc-lau-kinh-pallas-620ml-3-lit-21-lit/",
    "summary": "Sản phẩm PALLAS thuộc nhóm cleaner, quy cách 620ml / 3L / 21L. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách 620ml / 3L / 21L",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/glass-cleaner-lineup-cutout.png"
    ],
    "note": "Giá của quy cách này chưa được niêm yết riêng. Vui lòng liên hệ để nhận báo giá."
  },
  {
    "slug": "wax-son-pallas-1-5l",
    "name": "PALLAS Car Wash Wax – Nước rửa xe siêu bóng 1,5L",
    "shortName": "PALLAS Car Wash Wax – Nước rửa xe siêu bóng 1,5L",
    "category": "wax",
    "volume": "1,5L",
    "price": null,
    "image": "/images/products/paint-wax-lineup-cutout.png",
    "imageType": "provided",
    "referenceFrom": null,
    "sourceUrl": "https://tahico.com/thuong-hieu-pallas/",
    "summary": "Sản phẩm PALLAS thuộc nhóm wax, quy cách 1,5L. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách 1,5L",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/paint-wax-lineup-cutout.png"
    ],
    "note": "Giá của quy cách này chưa được niêm yết riêng. Vui lòng liên hệ để nhận báo giá."
  },
  {
    "slug": "wax-lop-pallas-1-5l",
    "name": "PALLAS Tyre Nano Wax – Dưỡng bóng lốp",
    "shortName": "PALLAS Tyre Nano Wax – Dưỡng bóng lốp",
    "category": "wax",
    "volume": "Nhiều quy cách",
    "price": null,
    "image": "/images/products/tire-nano-wax-lineup-cutout.png",
    "imageType": "provided",
    "referenceFrom": null,
    "sourceUrl": "https://tahico.com/thuong-hieu-pallas/",
    "summary": "Sản phẩm PALLAS thuộc nhóm wax, quy cách Nhiều quy cách. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách Nhiều quy cách",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": true,
    "badge": null,
    "gallery": [
      "/images/products/tire-nano-wax-lineup-cutout.png"
    ],
    "note": "Giá của quy cách này chưa được niêm yết riêng. Vui lòng liên hệ để nhận báo giá."
  },
  {
    "slug": "carnauba-wax-pallas",
    "name": "PALLAS Carnauba Wax – Dưỡng bóng sơn",
    "shortName": "PALLAS Carnauba Wax – Dưỡng bóng sơn",
    "category": "wax",
    "volume": "Nhiều quy cách",
    "price": null,
    "image": "/images/products/paint-wax-lineup-cutout.png",
    "imageType": "provided",
    "referenceFrom": null,
    "sourceUrl": "https://tahico.com/wax-duong-bong-son-xe-pallas/",
    "summary": "Sản phẩm PALLAS thuộc nhóm wax, quy cách Nhiều quy cách. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách Nhiều quy cách",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/paint-wax-lineup-cutout.png"
    ],
    "note": "Giá của quy cách này chưa được niêm yết riêng. Vui lòng liên hệ để nhận báo giá."
  },
  {
    "slug": "covikills-pallas",
    "name": "PALLAS Covikills – Xịt khử mùi",
    "shortName": "PALLAS Covikills – Xịt khử mùi",
    "category": "cleaner",
    "volume": "Nhiều quy cách",
    "price": null,
    "image": "/images/products/covikills-lineup-cutout.png",
    "imageType": "provided",
    "referenceFrom": null,
    "sourceUrl": "https://tahico.com/xit-khu-mui-pallas-covikills-120ml-250ml-500ml-3-lit/",
    "summary": "Sản phẩm PALLAS thuộc nhóm cleaner, quy cách Nhiều quy cách. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách Nhiều quy cách",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/covikills-lineup-cutout.png"
    ],
    "note": "Giá của quy cách này chưa được niêm yết riêng. Vui lòng liên hệ để nhận báo giá."
  },
  {
    "slug": "binh-tao-bot-pallas",
    "name": "Bình bọt tuyết PALLAS – thiết bị garage",
    "shortName": "Bình bọt tuyết PALLAS – thiết bị garage",
    "category": "equipment",
    "volume": "Liên hệ",
    "price": null,
    "image": "/images/products/illustration-equipment.svg",
    "imageType": "illustration",
    "referenceFrom": null,
    "sourceUrl": "https://tahico.com/thuong-hieu-pallas/",
    "summary": "Sản phẩm PALLAS thuộc nhóm equipment, quy cách Liên hệ. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.",
    "highlights": [
      "Quy cách Liên hệ",
      "Hình ảnh thuộc bộ tư liệu được cung cấp",
      "Lựa chọn theo nhu cầu sử dụng"
    ],
    "usage": "Đọc kỹ hướng dẫn sử dụng, tỷ lệ pha và cảnh báo trên nhãn sản phẩm; dùng đồ bảo hộ phù hợp.",
    "audience": "Ca hai",
    "featured": false,
    "badge": null,
    "gallery": [
      "/images/products/illustration-equipment.svg"
    ],
    "note": "Giá của quy cách này chưa được niêm yết riêng. Vui lòng liên hệ để nhận báo giá."
  }
];
export const featured = products.filter((p) => p.featured);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id);
