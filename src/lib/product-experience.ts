import type {Product} from '../types/index.ts';

/** Only families verified as different pack sizes of the same product are linked. */
export const PRODUCT_VARIANT_GROUPS = {
 'pallas-120': ['pallas-120-1-5l', 'pallas-120-6l', 'pallas-120-21l'],
 'pallas-60': ['pallas-60-6l', 'pallas-60-21l'],
 'nano-ex': ['nano-ex-1-5l', 'nano-ex-6l'],
 'wax-lop': ['wax-lop-pallas-1-5l', 'wax-lop-pallas-6l', 'wax-lop-pallas-21l'],
 'wax-son': ['wax-son-pallas-120ml','wax-son-pallas-333ml','wax-son-pallas-1-5l','wax-son-pallas-6l'],
 'tay-rua-may': ['tay-rua-may-pallas-620ml','tay-rua-may-pallas-1-5l','tay-rua-may-pallas-3l'],
 'tay-trang': ['tay-trang-da-nang-620ml','tay-trang-da-nang-500ml','tay-trang-da-nang-3l'],
 'lau-kinh': ['nuoc-lau-kinh-pallas-620ml','nuoc-lau-kinh-pallas-3l'],
 'trang-suc': ['kem-bot-sieu-bong-trang-suc-60ml','kem-bot-sieu-bong-trang-suc-120ml','kem-bot-sieu-bong-trang-suc-160ml'],
 'binh-phun-bot-tuyet': ['binh-phun-bot-tuyet-20l','binh-phun-bot-tuyet-30l','binh-phun-bot-tuyet-40l','binh-phun-bot-tuyet-60l'],
} as const;

export function getProductVariants(slug: string, allProducts: readonly Product[]): Product[] {
  const group = Object.values(PRODUCT_VARIANT_GROUPS).find(slugs => (slugs as readonly string[]).includes(slug));
  return group ? group.map(id => allProducts.find(p => p.slug === id)).filter((p): p is Product => Boolean(p)) : [];
}

export const MAX_COMPARE_ITEMS = 3;
/** Returns an unchanged selection on overflow; toggling an existing choice removes it. */
export function toggleComparison(slugs: readonly string[], slug: string, limit = MAX_COMPARE_ITEMS): string[] {
  if (slugs.includes(slug)) return slugs.filter(value => value !== slug);
  if (slugs.length >= limit) return [...slugs];
  return [...slugs, slug];
}

export function isValidQuoteQuantity(value: number): boolean {
  return Number.isInteger(value) && value >= 1 && value <= 99;
}

export function quoteEmail({name, phone, note, product, quantity, email, language}: {
  name:string; phone:string; note:string; product:Pick<Product, 'slug'|'name'|'volume'>;
  quantity:number; email:string; language:'vi'|'en';
}) {
  const english = language === 'en';
  const subject = english ? `PALLAS quotation request - ${product.slug}` : `Yêu cầu báo giá PALLAS - ${product.slug}`;
  const body = english ? [
    'PALLAS PRODUCT QUOTATION REQUEST',
    `Product: ${product.name}`, `SKU: ${product.slug}`, `Pack size: ${product.volume}`,
    `Quantity: ${quantity}`, `Name: ${name.trim()}`, `Phone: ${phone.trim()}`,
    `Notes: ${note.trim() || 'None'}`, '',
    'Please confirm availability, total price, shipping and payment terms',
  ] : [
    'YÊU CẦU BÁO GIÁ SẢN PHẨM PALLAS',
    `Sản phẩm: ${product.name}`, `Mã sản phẩm: ${product.slug}`, `Quy cách: ${product.volume}`,
    `Số lượng: ${quantity}`, `Họ và tên: ${name.trim()}`, `Điện thoại: ${phone.trim()}`,
    `Ghi chú: ${note.trim() || 'Không có'}`, '',
    'Vui lòng xác nhận tồn kho, tổng giá, phí giao hàng và phương thức thanh toán',
  ];
  const text = body.join('\n');
  return {subject, text, url:`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`};
}
