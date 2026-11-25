'use client';
import Link from 'next/link';
import {Package} from 'lucide-react';
import {useLanguage} from '@/components/i18n/language-provider';
import {products} from '@/data/products';
import {getProductVariants} from '@/lib/product-experience';
import {money} from '@/lib/format';

export default function VariantSelector({slug}:{slug:string}){
  const {language} = useLanguage();
  const variants = getProductVariants(slug, products);
  if(variants.length < 2) return null;
  return <div className="variant-selector" aria-label={language==='en'?'Choose pack size':'Chọn dung tích'}>
    <div className="variant-selector-heading"><Package size={17}/><strong>{language==='en'?'Pack size':'Chọn dung tích'}</strong></div>
    <div className="variant-options">{variants.map(variant=><Link href={`/san-pham/${variant.slug}`} key={variant.slug} aria-current={variant.slug===slug?'page':undefined} className={`variant-option${variant.slug===slug?' current':''}`}>
      <span>{language==='en'?variant.volume.replace('1,5','1.5'):variant.volume}</span>
      <small>{variant.price!=null?money(variant.price):language==='en'?'Request quote':'Liên hệ báo giá'}</small>
    </Link>)}</div>
    <p className="variant-helper">{language==='en'?'Price depends on pack size. Stock and final price are confirmed when you enquire':'Giá theo từng quy cách, tình trạng hàng và giá cuối được xác nhận khi liên hệ'}</p>
  </div>;
}
