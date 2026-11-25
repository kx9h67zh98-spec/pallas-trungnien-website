'use client';
import {useLanguage} from '@/components/i18n/language-provider';
import {T} from '@/components/i18n/t';
import Image from 'next/image';
import { useState } from 'react';
import type { Product } from '@/types';
export default function ProductGallery({ product: p }: {
    product: Product;
}) {
    const {tr}=useLanguage();
 const images = p.gallery?.length ? p.gallery : [p.image];
    const [active, setActive] = useState(0);
    return <div className="product-gallery">
  <div className="detail-main-image"><Image src={images[active]} alt={`${tr(p.name)} — ${tr("ảnh")} ${active + 1}`} fill sizes="(max-width: 880px) 92vw, 46vw" priority/>
   {p.imageType === 'illustration' && <span className="detail-image-note"><T vi={"H\u00ECnh minh h\u1ECDa \u2014 ch\u01B0a c\u00F3 \u1EA3nh s\u1EA3n ph\u1EA9m th\u1EADt"}/></span>}</div>
  {images.length > 1 && <div className="gallery-thumbnails" aria-label={tr("Ảnh sản phẩm")}>
   {images.map((src, index) => <button type="button" key={src} className={active === index ? 'selected' : ''} aria-pressed={active === index} aria-label={`${tr("Xem ảnh")} ${index + 1}`} onClick={() => setActive(index)}><Image src={src} alt={`${tr("Góc nhìn")} ${index + 1}`} fill sizes="100px"/></button>)}
  </div>}
 </div>;
}
