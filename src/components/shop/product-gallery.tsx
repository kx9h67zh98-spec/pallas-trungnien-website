'use client';
import Image from 'next/image';
import {useState} from 'react';
import type {Product} from '@/types';
export default function ProductGallery({product:p}:{product:Product}) {
 const images=p.gallery?.length?p.gallery:[p.image];
 const [active,setActive]=useState(0);
 return <div className="product-gallery">
  <div className="detail-main-image"><Image src={images[active]} alt={`${p.name} — ảnh ${active+1}`} fill sizes="(max-width: 880px) 92vw, 46vw" priority/>
   {p.imageType==='illustration'&&<span className="detail-image-note">Hình minh họa — chưa có ảnh sản phẩm thật</span>}</div>
  {images.length>1&&<div className="gallery-thumbnails" aria-label="Ảnh sản phẩm">
   {images.map((src,index)=><button type="button" key={src} className={active===index?'selected':''} aria-pressed={active===index} aria-label={`Xem ảnh ${index+1}`} onClick={()=>setActive(index)}><Image src={src} alt={`Góc nhìn ${index+1}`} fill sizes="100px"/></button>)}
  </div>}
 </div>
}
