import type {Metadata} from 'next';
import Catalog from '@/components/shop/catalog';
export const metadata:Metadata={title:'Tất cả sản phẩm'};
export default async function CatalogPage({searchParams}:{searchParams:Promise<{q?:string;category?:string}>}){const params=await searchParams;return <><div className="subpage-hero"><div className="container"><span className="eyebrow eyebrow-green">PALLAS PRODUCT COLLECTION</span><h1>Tất cả <i>sản phẩm.</i></h1><p>Khám phá các dòng bọt tuyết, dung dịch rửa xe không chạm, wax và thiết bị chuyên dụng.</p></div></div><section className="section catalog-page"><div className="container"><Catalog key={(params.q||'')+'|'+(params.category||'')} initialQ={params.q||''} initialCategory={params.category||''}/></div></section></>}
