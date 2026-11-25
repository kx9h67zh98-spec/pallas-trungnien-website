import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {Product} from '@/types';
import {getCategory} from '@/data/products';
import ReferencePrice from './reference-price';
import AddCardButton from './product-card-button';
export default function ProductCard({product:p}:{product:Product}){return <article className="product-card">
 <div className="product-image-wrap"><Link href={`/san-pham/${p.slug}`} aria-label={'Xem '+p.name} className="product-image-link"><Image src={p.image} alt={p.imageType==='provided'?p.name:'Hình minh họa cho '+p.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"/></Link>{p.badge&&<span className="product-badge">{p.badge}</span>}{p.imageType==='illustration'&&<span className="image-disclaimer">Ảnh minh họa</span>}<AddCardButton slug={p.slug}/></div>
 <div className="product-card-copy"><span className="product-category">{getCategory(p.category)?.label}</span><Link href={`/san-pham/${p.slug}`} className="product-name">{p.name}</Link><div className="product-card-bottom"><div><ReferencePrice product={p}/><small>{p.volume}</small></div><Link className="product-arrow" href={`/san-pham/${p.slug}`} aria-label={'Chi tiết '+p.name}><ArrowUpRight size={21}/></Link></div></div></article>}
