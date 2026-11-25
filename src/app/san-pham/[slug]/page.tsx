import {T} from '@/components/i18n/t';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, CheckCircle2, ArrowUpRight, Info, ShieldCheck } from 'lucide-react';
import { products, getProduct, getCategory } from '@/data/products';
import ReferencePrice from '@/components/shop/reference-price';
import ProductGallery from '@/components/shop/product-gallery';
import { ProductOrderControls } from '@/components/shop/add-to-cart';
import ProductCard from '@/components/shop/product-card';
export function generateStaticParams() { return products.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: {
    params: Promise<{
        slug: string;
    }>;
}): Promise<Metadata> { const { slug } = await params; const p = getProduct(slug); return { title: p?.name || 'Không tìm thấy sản phẩm', description: p?.summary }; }
export default async function ProductPage({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const { slug } = await params;
    const p = getProduct(slug);
    if (!p)
        notFound();
    const related = products.filter(x => x.category === p.category && x.slug !== p.slug).slice(0, 4);
    return <><div className="container breadcrumb"><Link href="/"><T vi={"Trang ch\u1EE7"}/></Link><span>/</span><Link href="/san-pham"><T vi={"S\u1EA3n ph\u1EA9m"}/></Link><span>/</span><span><T vi={p.shortName}/></span></div><section className="product-detail-section container"><div className="detail-photo-col"><ProductGallery product={p}/><div className="detail-mini"><span><CheckCircle2 size={17}/><T vi={" Th\u00F4ng tin s\u1EA3n ph\u1EA9m c\u00F4ng khai"}/></span><span><Info size={17}/><T vi={" H\u1ED7 tr\u1EE3 t\u01B0 v\u1EA5n theo quy c\u00E1ch"}/></span></div></div><div className="detail-copy"><Link className="backlink" href="/san-pham"><ArrowLeft size={16}/><T vi={" Quay l\u1EA1i c\u1EEDa h\u00E0ng"}/></Link><span className="eyebrow eyebrow-green"><T vi={getCategory(p.category)?.label??""}/> / {p.volume}</span><h1><T vi={p.name}/></h1><p className="detail-summary"><T vi={p.summary}/></p><div className="detail-pricing"><ReferencePrice product={p}/></div><div className="detail-feature-list">{p.highlights.map((x, i) => <div key={i}><CheckCircle2 size={18}/><T vi={x}/></div>)}</div><ProductOrderControls slug={p.slug}/><div className="detail-notice"><ShieldCheck size={20}/><p><T vi={"Th\u00EAm s\u1EA3n ph\u1EA9m v\u00E0o gi\u1ECF \u0111\u1EC3 g\u1EEDi y\u00EAu c\u1EA7u \u0111\u1EB7t h\u00E0ng tr\u1EF1c ti\u1EBFp qua email. Gi\u00E1, t\u00ECnh tr\u1EA1ng h\u00E0ng v\u00E0 ph\u00ED v\u1EADn chuy\u1EC3n \u0111\u01B0\u1EE3c x\u00E1c nh\u1EADn khi PALLAS ti\u1EBFp nh\u1EADn y\u00EAu c\u1EA7u. Website ch\u01B0a t\u1EF1 \u0111\u1ED9ng ghi nh\u1EADn \u0111\u01A1n h\u00E0ng ho\u1EB7c x\u1EED l\u00FD thanh to\u00E1n."}/></p></div></div></section>
    <section className="section detail-info"><div className="container detail-info-grid"><div><span className="eyebrow eyebrow-green"><T vi={"TH\u00D4NG TIN CHI TI\u1EBET"}/></span><h2><T vi={"Hi\u1EC3u r\u00F5 s\u1EA3n ph\u1EA9m tr\u01B0\u1EDBc khi d\u00F9ng."}/></h2></div><div className="info-stack"><div><h3><T vi={"H\u01B0\u1EDBng d\u1EABn & l\u01B0u \u00FD"}/></h3><p><T vi={p.usage} compact={false}/></p></div><div><h3><T vi={"Quy c\u00E1ch"}/></h3><p>{p.volume} · <T vi={getCategory(p.category)?.label??""}/></p></div>{p.sourceUrl && <a href={p.sourceUrl} target="_blank" rel="noreferrer" className="text-link"><T vi={"T\u00ECm hi\u1EC3u th\u00EAm v\u1EC1 d\u00F2ng s\u1EA3n ph\u1EA9m "}/><ArrowUpRight size={17}/></a>}</div></div></section>
    {related.length > 0 && <section className="section related-section"><div className="container"><div className="section-top"><div><span className="eyebrow eyebrow-green"><T vi={"C\u00D3 TH\u1EC2 B\u1EA0N QUAN T\u00C2M"}/></span><h2><T vi={"S\u1EA3n ph\u1EA9m "}/><i><T vi={"c\u00F9ng nh\u00F3m."}/></i></h2></div><Link className="text-link" href="/san-pham"><T vi={"Xem t\u1EA5t c\u1EA3 "}/><ArrowUpRight size={18}/></Link></div><div className="product-grid">{related.map(x => <ProductCard key={x.slug} product={x}/>)}</div></div></section>}</>;
}
