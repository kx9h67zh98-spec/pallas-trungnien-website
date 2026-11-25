'use client';
import {useEffect,useRef,useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowUpRight,Check,GitCompareArrows,Plus,X} from 'lucide-react';
import type {Product} from '@/types';
import {getCategory} from '@/data/products';
import {useLanguage} from '@/components/i18n/language-provider';
import {money} from '@/lib/format';
import {MAX_COMPARE_ITEMS} from '@/lib/product-experience';

export default function ProductComparison({selected,onRemove,onClear}:{selected:Product[];onRemove:(slug:string)=>void;onClear:()=>void}){
  const {language,tr}=useLanguage();const en=language==='en';
  const [open,setOpen]=useState(false);
  const openButton=useRef<HTMLButtonElement>(null);
  const closeButton=useRef<HTMLButtonElement>(null);
  const modal=useRef<HTMLDivElement>(null);
  const wasOpen=useRef(false);
  useEffect(()=>{
    if(!open){if(wasOpen.current)openButton.current?.focus();wasOpen.current=false;return}
    wasOpen.current=true;
    const originalOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
    closeButton.current?.focus();
    const onKey=(e:KeyboardEvent)=>{
      if(e.key==='Escape'){e.preventDefault();setOpen(false)}
      if(e.key!=='Tab'||!modal.current)return;
      const controls=Array.from(modal.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled])'));
      const first=controls[0],last=controls[controls.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus()}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}
    };
    document.addEventListener('keydown',onKey);
    return()=>{document.removeEventListener('keydown',onKey);document.body.style.overflow=originalOverflow};
  },[open]);
  if(selected.length===0)return null;
  return <>
    <div className="compare-tray" role="region" aria-label={en?'Product comparison':'So sánh sản phẩm'}>
      <div className="compare-tray-caption"><GitCompareArrows size={20}/><div><strong>{en?'Compare products':'So sánh sản phẩm'}</strong><small>{selected.length}/{MAX_COMPARE_ITEMS} {en?'selected':'đã chọn'}</small></div></div>
      <div className="compare-tray-picks">{selected.map(product=><span className="compare-chip" key={product.slug}><span title={tr(product.name)}>{tr(product.shortName)}</span><button type="button" onClick={()=>onRemove(product.slug)} aria-label={`${en?'Remove':'Bỏ'} ${tr(product.name)}`}><X size={14}/></button></span>)}</div>
      <div className="compare-tray-actions"><button type="button" className="compare-clear" onClick={onClear}>{en?'Clear':'Xóa chọn'}</button><button ref={openButton} type="button" className="btn btn-lime" disabled={selected.length<2} onClick={()=>setOpen(true)}>{en?'Compare now':'So sánh ngay'}<ArrowUpRight size={16}/></button></div>
    </div>
    {open&&<div className="experience-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setOpen(false)}}><div ref={modal} className="experience-dialog compare-dialog" role="dialog" aria-modal="true" aria-labelledby="compare-dialog-title">
      <div className="experience-dialog-head"><div><span className="experience-eyebrow">PALLAS / {en?'PRODUCT GUIDE':'THÔNG TIN SẢN PHẨM'}</span><h2 id="compare-dialog-title">{en?'Compare at a glance':'So sánh nhanh sản phẩm'}</h2><p>{en?'Information is based on the current catalogue. Check label instructions before use':'Thông tin dựa trên danh mục hiện tại, hãy kiểm tra hướng dẫn trên bao bì trước khi dùng'}</p></div><button ref={closeButton} type="button" className="experience-close" aria-label={en?'Close comparison':'Đóng so sánh'} onClick={()=>setOpen(false)}><X size={21}/></button></div>
      <div className="compare-table-scroll"><table className="compare-table"><thead><tr><th scope="col">{en?'Detail':'Tiêu chí'}</th>{selected.map(p=><th scope="col" key={p.slug}><Link href={`/san-pham/${p.slug}`} onClick={()=>setOpen(false)} className="compare-product-top"><span className="compare-product-photo"><Image src={p.image} alt="" fill sizes="125px"/></span><span>{tr(p.shortName)}</span><ArrowUpRight size={15}/></Link></th>)}</tr></thead><tbody>
      <tr><th scope="row">{en?'Category':'Danh mục'}</th>{selected.map(p=><td key={p.slug}>{tr(getCategory(p.category)?.label||p.category)}</td>)}</tr>
      <tr><th scope="row">{en?'Pack size':'Quy cách'}</th>{selected.map(p=><td key={p.slug}>{en?p.volume.replace('1,5','1.5'):p.volume}</td>)}</tr>
      <tr><th scope="row">{en?'Listed price':'Giá niêm yết'}</th>{selected.map(p=><td key={p.slug} className="compare-price">{p.price!=null?money(p.price):en?'Request quote':'Liên hệ báo giá'}</td>)}</tr>
      <tr><th scope="row">{en?'Highlights':'Điểm nổi bật'}</th>{selected.map(p=><td key={p.slug}><ul>{p.highlights.slice(0,3).map((h,i)=><li key={i}><Check size={13}/>{tr(h)}</li>)}</ul></td>)}</tr>
      <tr><th scope="row">{en?'Description':'Mô tả'}</th>{selected.map(p=><td key={p.slug}>{tr(p.summary)}</td>)}</tr>
      </tbody></table></div>
      <p className="compare-footnote">{en?'Prices, availability and dilution ratios must be confirmed with PALLAS or checked on the actual label':'Giá, tồn kho và tỷ lệ pha cần được xác nhận với PALLAS hoặc kiểm tra trực tiếp trên nhãn'}</p>
    </div></div>}
  </>;
}

export function CompareToggle({selected,disabled,onToggle}:{selected:boolean;disabled:boolean;onToggle:()=>void}){
 const {language}=useLanguage();const en=language==='en';return <button type="button" className={`compare-toggle${selected?' selected':''}`} aria-pressed={selected} disabled={disabled&&!selected} onClick={onToggle} title={disabled&&!selected?(en?'Compare up to three products':'Chỉ so sánh tối đa ba sản phẩm'):undefined}>{selected?<Check size={16}/>:<Plus size={16}/>}<span>{selected?(en?'Selected':'Đã chọn'):(en?'Compare':'So sánh')}</span></button>;
}
