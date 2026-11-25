'use client';
import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, ShoppingBag, ArrowUpRight, Phone } from 'lucide-react';
import { MENU, SITE } from '@/data/site';
import { useShop } from '@/components/shop/shop-provider';
import { useRouter, usePathname } from 'next/navigation';
export default function Header(){
 const [open,setOpen]=useState(false);const [term,setTerm]=useState('');const [searchOpen,setSearchOpen]=useState(false);
 const {totalQuantity,setDrawerOpen}=useShop();const router=useRouter();const path=usePathname();
 const submit=(e:FormEvent)=>{e.preventDefault();router.push('/san-pham'+(term.trim()?'?q='+encodeURIComponent(term.trim()):''));setSearchOpen(false);setOpen(false)};
 return <>
 <div className="topline"><div className="container topline-inner"><span><span className="top-dot"/> PALLAS PREMIUM · GIẢI PHÁP CHĂM SÓC XE</span><a href={`tel:${SITE.phone}`}><Phone size={13}/>{SITE.phoneDisplay}</a></div></div>
 <header className="site-header"><div className="container header-inner">
  <Link href="/" className="brand-link" aria-label="PALLAS Premium - Trang chủ" onClick={()=>setOpen(false)}><span className="brand-image"><Image src={SITE.logo} alt="PALLAS Premium Korean Technology" fill sizes="148px" priority/></span><span className="brand-name"><b>PALLAS</b><small>TRUNG NIÊN GROUP</small></span></Link>
  <nav className="main-nav" aria-label="Điều hướng chính">{MENU.map(item=><Link key={item.href} href={item.href} className={path===item.href?'active':''}>{item.label}</Link>)}</nav>
  <div className="header-actions"><button type="button" onClick={()=>setSearchOpen(!searchOpen)} className="icon-button" aria-label="Tìm kiếm sản phẩm"><Search size={20}/></button><button type="button" onClick={()=>setDrawerOpen(true)} className="icon-button cart-toggle" aria-label="Mở giỏ hàng"><ShoppingBag size={20}/>{totalQuantity>0&&<span className="cart-counter">{totalQuantity}</span>}</button><button type="button" onClick={()=>setOpen(!open)} className="icon-button menu-toggle" aria-label={open?'Đóng menu':'Mở menu'}>{open?<X size={22}/>:<Menu size={22}/>}</button></div>
 </div>
 {searchOpen&&<form className="search-bar container" onSubmit={submit}><Search size={19}/><input autoFocus value={term} onChange={e=>setTerm(e.target.value)} placeholder="Tìm PALLAS 120, Nano EX, wax dưỡng bóng..." aria-label="Từ khóa tìm kiếm"/><button type="submit" className="btn btn-primary btn-small">Tìm sản phẩm <ArrowUpRight size={16}/></button></form>}
 {open&&<div className="mobile-menu"><nav aria-label="Điều hướng di động">{MENU.map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)}>{item.label}<ArrowUpRight size={15}/></Link>)}</nav><form onSubmit={submit} className="mobile-search"><input placeholder="Tìm sản phẩm..." value={term} onChange={e=>setTerm(e.target.value)}/><button type="submit" aria-label="Tìm"><Search size={18}/></button></form><a href={`tel:${SITE.phone}`} className="mobile-hotline">Hotline: {SITE.phoneDisplay}</a></div>}
 </header>
 </>;
}
