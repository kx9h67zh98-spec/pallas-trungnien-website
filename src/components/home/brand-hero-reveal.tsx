'use client';
import {T} from '@/components/i18n/t';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays, MapPin, Factory, MoveUpRight, Phone, X, } from 'lucide-react';
import {useSite} from '@/components/layout/site-settings-provider';
export default function BrandHeroReveal() {
    const SITE=useSite();
    const [expanded, setExpanded] = useState(false);
    return (<div className={`brand-hero-stage${expanded ? ' is-open' : ''}`} onPointerLeave={(event) => {
            if (event.pointerType === 'mouse')
                setExpanded(false);
        }} onMouseLeave={() => setExpanded(false)} onKeyDown={(event) => {
            if (event.key === 'Escape')
                setExpanded(false);
        }}>
      <div className="brand-hero-halo brand-hero-halo-a" aria-hidden="true"/>
      <div className="brand-hero-halo brand-hero-halo-b" aria-hidden="true"/>
      <div className="brand-hero-overline"><T vi={"PALLAS / TRUNG NI\u00CAN"}/></div>

      <button type="button" className="brand-hero-logo-button" aria-controls="brand-hero-info" aria-expanded={expanded} aria-label={expanded ? 'Thu gọn thông tin PALLAS' : 'Khám phá thông tin PALLAS'} onPointerEnter={(event) => {
            if (event.pointerType === 'mouse')
                setExpanded(true);
        }} onClick={() => setExpanded(v => !v)}>
        <span className="brand-hero-logo-image">
          <Image src={SITE.logo} alt="PALLAS Premium Korean Technology" fill priority sizes="(max-width: 700px) 300px, 380px"/>
        </span>
        <span className="brand-hero-trigger"><T vi={"\n          Kh\u00E1m ph\u00E1 PALLAS "}/><MoveUpRight size={16} aria-hidden="true"/>
        </span>
      </button>

      <div id="brand-hero-info" className="brand-hero-info" aria-label="Giới thiệu nhanh về PALLAS" aria-hidden={!expanded} {...(!expanded ? { inert: true } : {})}>
        <button type="button" className="brand-hero-close" aria-label="Đóng thông tin PALLAS" onClick={() => setExpanded(false)}>
          <X size={17} aria-hidden="true"/>
        </button>
        <span className="brand-hero-label"><T vi={"T\u00CCM HI\u1EC2U TH\u01AF\u01A0NG HI\u1EC6U"}/></span>
        <h2><T vi={"Ch\u0103m s\u00F3c xe "}/><em><T vi={"\u0111\u00FAng nhu c\u1EA7u."}/></em></h2>
        <p><T vi={"\n          PALLAS cung c\u1EA5p dung d\u1ECBch r\u1EEDa xe, s\u1EA3n ph\u1EA9m ch\u0103m s\u00F3c b\u1EC1 m\u1EB7t v\u00E0\n          gi\u1EA3i ph\u00E1p chuy\u00EAn d\u1EE5ng cho kh\u00E1ch h\u00E0ng c\u00E1 nh\u00E2n, garage v\u00E0 \u0111\u1EA1i l\u00FD.\n        "}/></p>
        <div className="brand-hero-facts">
          <div>
            <CalendarDays size={17} aria-hidden="true"/>
            <span><b><T vi={"T\u1EEB n\u0103m 2004"}/></b><small><T vi={"Theo gi\u1EDBi thi\u1EC7u doanh nghi\u1EC7p"}/></small></span>
          </div>
          <div>
            <Factory size={17} aria-hidden="true"/>
            <span><b><T vi={"Ch\u0103m s\u00F3c xe"}/></b><small><T vi={"C\u00E1 nh\u00E2n \u00B7 garage \u00B7 \u0111\u1EA1i l\u00FD"}/></small></span>
          </div>
          <div className="brand-hero-address">
            <MapPin size={17} aria-hidden="true"/>
            <span><b><T vi={"\u0110\u1ECBa ch\u1EC9 li\u00EAn h\u1EC7"}/></b><small><T vi={SITE.address}/></small></span>
          </div>
        </div>
        <div className="brand-hero-info-actions">
          <Link href="/ve-pallas"><T vi={"V\u1EC1 PALLAS "}/><ArrowUpRight size={16} aria-hidden="true"/></Link>
          <a href={`tel:${SITE.phone}`}><Phone size={15} aria-hidden="true"/> {SITE.phoneDisplay}</a>
        </div>
      </div>
    </div>);
}
