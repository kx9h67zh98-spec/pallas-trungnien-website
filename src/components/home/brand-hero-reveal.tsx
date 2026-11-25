'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Factory,
  MoveUpRight,
  Phone,
  X,
} from 'lucide-react';
import { SITE } from '@/data/site';

export default function BrandHeroReveal() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`brand-hero-stage${expanded ? ' is-open' : ''}`}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') setExpanded(false);
      }}
      onMouseLeave={() => setExpanded(false)}
      onKeyDown={(event) => {
        if (event.key === 'Escape') setExpanded(false);
      }}
    >
      <div className="brand-hero-halo brand-hero-halo-a" aria-hidden="true" />
      <div className="brand-hero-halo brand-hero-halo-b" aria-hidden="true" />
      <div className="brand-hero-overline">PALLAS / TRUNG NIÊN</div>

      <button
        type="button"
        className="brand-hero-logo-button"
        aria-controls="brand-hero-info"
        aria-expanded={expanded}
        aria-label={expanded ? 'Thu gọn thông tin PALLAS' : 'Khám phá thông tin PALLAS'}
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') setExpanded(true);
        }}
        onClick={() => setExpanded(v=>!v)}
      >
        <span className="brand-hero-logo-image">
          <Image
            src={SITE.logo}
            alt="PALLAS Premium Korean Technology"
            fill
            priority
            sizes="(max-width: 700px) 300px, 380px"
          />
        </span>
        <span className="brand-hero-trigger">
          Khám phá PALLAS <MoveUpRight size={16} aria-hidden="true" />
        </span>
      </button>

      <div
        id="brand-hero-info"
        className="brand-hero-info"
        aria-label="Giới thiệu nhanh về PALLAS"
        aria-hidden={!expanded}
        {...(!expanded ? { inert: true } : {})}
      >
        <button
          type="button"
          className="brand-hero-close"
          aria-label="Đóng thông tin PALLAS"
          onClick={() => setExpanded(false)}
        >
          <X size={17} aria-hidden="true" />
        </button>
        <span className="brand-hero-label">TÌM HIỂU THƯƠNG HIỆU</span>
        <h2>Chăm sóc xe <em>đúng nhu cầu.</em></h2>
        <p>
          PALLAS cung cấp dung dịch rửa xe, sản phẩm chăm sóc bề mặt và
          giải pháp chuyên dụng cho khách hàng cá nhân, garage và đại lý.
        </p>
        <div className="brand-hero-facts">
          <div>
            <CalendarDays size={17} aria-hidden="true" />
            <span><b>Từ năm 2004</b><small>Theo giới thiệu doanh nghiệp</small></span>
          </div>
          <div>
            <Factory size={17} aria-hidden="true" />
            <span><b>Chăm sóc xe</b><small>Cá nhân · garage · đại lý</small></span>
          </div>
          <div className="brand-hero-address">
            <MapPin size={17} aria-hidden="true" />
            <span><b>Địa chỉ liên hệ</b><small>{SITE.address}</small></span>
          </div>
        </div>
        <div className="brand-hero-info-actions">
          <Link href="/ve-pallas">Về PALLAS <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <a href={`tel:${SITE.phone}`}><Phone size={15} aria-hidden="true" /> {SITE.phoneDisplay}</a>
        </div>
      </div>
    </div>
  );
}
