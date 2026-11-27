import {T} from '@/components/i18n/t';
import type { Metadata } from 'next';
import Catalog from '@/components/shop/catalog';
export const metadata: Metadata = { title: 'Tất cả sản phẩm' };
export default async function CatalogPage({ searchParams }: {
    searchParams: Promise<{
        q?: string;
        category?: string;
    }>;
}) { const params = await searchParams; return <><div className="subpage-hero"><div className="container"><span className="eyebrow eyebrow-green"><T vi={"PALLAS PRODUCT COLLECTION"}/></span><h1><T vi={"T\u1EA5t c\u1EA3 "}/><i><T vi={"s\u1EA3n ph\u1EA9m."}/></i></h1><p><T vi={"Kh\u00E1m ph\u00E1 c\u00E1c d\u00F2ng b\u1ECDt tuy\u1EBFt, dung d\u1ECBch r\u1EEDa xe kh\u00F4ng ch\u1EA1m, wax v\u00E0 thi\u1EBFt b\u1ECB chuy\u00EAn d\u1EE5ng."}/></p></div></div><section className="section catalog-page"><div className="container price-sheet-note"><strong><T vi="Bảng giá PALLAS · 15/03/2026" /></strong><span><T vi="Giá khởi tạo theo bảng giá 15/03/2026 (đã bao gồm thuế); công ty có thể cập nhật giá qua quản trị. Vui lòng xác nhận giá, tồn kho và phí vận chuyển khi đặt hàng." /></span></div><div className="container"><Catalog key={(params.q || '') + '|' + (params.category || '')} initialQ={params.q || ''} initialCategory={params.category || ''}/></div></section></>; }
