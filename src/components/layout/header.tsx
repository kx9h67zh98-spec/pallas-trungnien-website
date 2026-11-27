'use client';
import {T} from '@/components/i18n/t';
import LanguageSwitch from '@/components/i18n/language-switch';
import {useLanguage} from '@/components/i18n/language-provider';
import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, ShoppingBag, ArrowUpRight, Phone } from 'lucide-react';
import { MENU } from '@/data/site';
import {useSite} from '@/components/layout/site-settings-provider';
import { useShop } from '@/components/shop/shop-provider';
import { useRouter, usePathname } from 'next/navigation';
export default function Header() {
    const SITE=useSite();
    const {tr}=useLanguage();
    const [open, setOpen] = useState(false);
    const [term, setTerm] = useState('');
    const [searchOpen, setSearchOpen] = useState(false);
    const { totalQuantity, setDrawerOpen } = useShop();
    const router = useRouter();
    const path = usePathname();
    const submit = (e: FormEvent) => { e.preventDefault(); router.push('/san-pham' + (term.trim() ? '?q=' + encodeURIComponent(term.trim()) : '')); setSearchOpen(false); setOpen(false); };
    return <>
 <div className="topline"><div className="container topline-inner"><span><span className="top-dot"/><T vi={" PALLAS PREMIUM \u00B7 GI\u1EA2I PH\u00C1P CH\u0102M S\u00D3C XE"}/></span><a href={`tel:${SITE.phone}`}><Phone size={13}/>{SITE.phoneDisplay}</a></div></div>
 <header className="site-header"><div className="container header-inner">
  <Link href="/" className="brand-link" aria-label={tr("PALLAS Premium - Trang chủ")} onClick={() => setOpen(false)}><span className="brand-image"><Image src={SITE.logo} alt="PALLAS Premium Korean Technology" fill sizes="148px" priority/></span><span className="brand-name"><b>{SITE.name}</b><small><T vi={"TRUNG NI\u00CAN GROUP"}/></small></span></Link>
  <nav className="main-nav" aria-label={tr("Điều hướng chính")}>{MENU.map(item => <Link key={item.href} href={item.href} className={path === item.href ? 'active' : ''}>{tr(item.label)}</Link>)}</nav>
  <div className="header-actions"><LanguageSwitch/><button type="button" onClick={() => { setSearchOpen(!searchOpen); setOpen(false); }} className="icon-button" aria-expanded={searchOpen} aria-controls="site-search" aria-label={tr("Tìm kiếm sản phẩm")}><Search size={20}/></button><button type="button" onClick={() => setDrawerOpen(true)} className="icon-button cart-toggle" aria-label={tr("Mở giỏ hàng")}><ShoppingBag size={20}/>{totalQuantity > 0 && <span className="cart-counter">{totalQuantity}</span>}</button><button type="button" onClick={() => { setOpen(!open); setSearchOpen(false); }} className="icon-button menu-toggle" aria-expanded={open} aria-controls="site-mobile-nav" aria-label={tr(open ? 'Đóng menu' : 'Mở menu')}>{open ? <X size={22}/> : <Menu size={22}/>}</button></div>
 </div>
 {searchOpen && <form id="site-search" role="search" className="search-bar container" onSubmit={submit}><Search size={19}/><input autoFocus value={term} onChange={e => setTerm(e.target.value)} placeholder={tr("Tìm PALLAS 120, Nano EX, wax dưỡng bóng...",false)} aria-label={tr("Từ khóa tìm kiếm")}/><button type="submit" className="btn btn-primary btn-small"><T vi={"T\u00ECm s\u1EA3n ph\u1EA9m "}/><ArrowUpRight size={16}/></button></form>}
 {open && <div id="site-mobile-nav" className="mobile-menu"><div className="mobile-language-row"><span>{tr('Ngôn ngữ')}</span><LanguageSwitch mobile/></div><nav aria-label={tr("Điều hướng di động")}>{MENU.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{tr(item.label)}<ArrowUpRight size={15}/></Link>)}</nav><form onSubmit={submit} className="mobile-search"><input placeholder={tr("Tìm sản phẩm...",false)} value={term} onChange={e => setTerm(e.target.value)}/><button type="submit" aria-label={tr("Tìm")}><Search size={18}/></button></form><a href={`tel:${SITE.phone}`} className="mobile-hotline">{tr("Hotline")}: {SITE.phoneDisplay}</a></div>}
 </header>
 </>;
}
