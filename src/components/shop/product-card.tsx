'use client';
import {useLanguage} from '@/components/i18n/language-provider';
import {T} from '@/components/i18n/t';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '@/types';
import { getCategory } from '@/data/products';
import ReferencePrice from './reference-price';
import AddCardButton from './product-card-button';
export default function ProductCard({ product: p }: {
    product: Product;
}) {
    const {tr}=useLanguage();
    return <article className="product-card">
 <div className="product-image-wrap"><Link href={`/san-pham/${p.slug}`} aria-label={tr('Xem')+' '+tr(p.name)} className="product-image-link"><Image src={p.image} alt={p.imageType === 'provided' ? tr(p.name) : tr('Hình minh họa cho')+' '+tr(p.name)} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"/></Link>{p.badge && <span className="product-badge"><T vi={p.badge}/></span>}{p.imageType === 'illustration' && <span className="image-disclaimer"><T vi={"\u1EA2nh minh h\u1ECDa"}/></span>}<AddCardButton slug={p.slug}/></div>
 <div className="product-card-copy"><span className="product-category"><T vi={getCategory(p.category)?.label??""}/></span><Link href={`/san-pham/${p.slug}`} className="product-name"><T vi={p.name}/></Link><div className="product-card-bottom"><div><ReferencePrice product={p}/><small><T vi={p.volume}/></small></div><Link className="product-arrow" href={`/san-pham/${p.slug}`} aria-label={tr('Chi tiết')+' '+tr(p.name)}><ArrowUpRight size={21}/></Link></div></div></article>;
}
