'use client';
import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowUpRight,CalendarDays,MapPin,Factory,MoveUpRight,Phone} from 'lucide-react';
import {SITE} from '@/data/site';

/** On desktop hover reveals the profile; on keyboard and touch the button toggles it. */
export default function BrandHeroReveal(){
  const [expanded,setExpanded]=useState(false);
  return <div className={`brand-hero-stage${expanded?' is-open':''}`} onMouseLeave={()=>setExpanded(false)} onKeyDown={e=>{if(e.key==='Escape')setExpanded(false)}}>
    <div className="brand-hero-halo brand-hero-halo-a" aria-hidden="true"/>
    <div className="brand-hero-halo brand-hero-halo-b" aria-hidden="true"/>
    <div className="brand-hero-overline">THƯƠNG HIỆU PALLAS / TRUNG NIÊN</div>
    <button type="button" className="brand-hero-logo-button" aria-controls="brand-hero-info" aria-expanded={expanded} aria-label="Khám phá thông tin PALLAS – Trung Niên" onClick={()=>setExpanded(v=>!v)}>
      <span className="brand-hero-logo-image"><Image src={SITE.logo} alt="Logo PALLAS Premium Korean Technology" fill priority sizes="(max-width: 700px) 84vw, 400px"/></span>
      <span className="brand-hero-trigger">Khám phá PALLAS <MoveUpRight size={18}/></span>
    </button>
    <div id="brand-hero-info" className="brand-hero-info" aria-label="Thông tin cơ bản về PALLAS">
      <span className="brand-hero-label">PALLAS / TRUNG NIÊN</span>
      <h2>Đồng hành cùng <em>phát triển.</em></h2>
      <p>Thương hiệu chăm sóc xe với danh mục bọt tuyết rửa xe, dung dịch không chạm, wax và sản phẩm vệ sinh chuyên dụng.</p>
      <div className="brand-hero-facts">
        <span><CalendarDays size={16}/> <b>Từ năm 2004</b> <small>Theo lịch sử doanh nghiệp</small></span>
        <span><Factory size={16}/> <b>Chăm sóc phương tiện</b> <small>Cá nhân · garage · đại lý</small></span>
        <span><MapPin size={16}/> <b>Trụ sở liên hệ</b> <small>{SITE.address}</small></span>
      </div>
      <div className="brand-hero-info-actions"><Link href="/ve-pallas">Tìm hiểu công ty <ArrowUpRight size={16}/></Link><a href={`tel:${SITE.phone}`}><Phone size={15}/> {SITE.phoneDisplay}</a></div>
    </div>
  </div>
}
