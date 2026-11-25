'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useShop } from '@/components/shop/shop-provider';
import {getProduct} from '@/data/products';
import {money} from '@/lib/format';
export default function CartDrawer(){
 const {items,totalQuantity,subtotal,drawerOpen,setDrawerOpen,setQuantity,remove}=useShop();
 const hasUnpriced=items.some(x=>getProduct(x.slug)?.price==null);
 useEffect(()=>{if(!drawerOpen)return;const previous=document.body.style.overflow;document.body.style.overflow='hidden';const esc=(e:KeyboardEvent)=>{if(e.key==='Escape')setDrawerOpen(false)};document.addEventListener('keydown',esc);return()=>{document.body.style.overflow=previous;document.removeEventListener('keydown',esc)}},[drawerOpen,setDrawerOpen]);
 if(!drawerOpen)return null;
 return <div className="drawer-root"><button className="drawer-backdrop" aria-label="Đóng giỏ hàng" onClick={()=>setDrawerOpen(false)}/><aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Giỏ hàng"><div className="drawer-heading"><div><span className="eyebrow">PALLAS SHOP</span><h3>Giỏ hàng <small>({totalQuantity})</small></h3></div><button className="icon-button" onClick={()=>setDrawerOpen(false)} aria-label="Đóng"><X/></button></div>
 <div className="drawer-content">{!items.length?<div className="empty-cart"><ShoppingBag size={56} strokeWidth={1.2}/><h4>Giỏ hàng của bạn đang trống</h4><p>Khám phá các dòng dung dịch và phụ kiện chăm sóc xe PALLAS.</p><Link className="btn btn-primary" href="/san-pham" onClick={()=>setDrawerOpen(false)}>Khám phá sản phẩm <ArrowRight size={18}/></Link></div>:
 items.map(line=>{const p=getProduct(line.slug);if(!p)return null;return <div className="drawer-line" key={p.slug}><div className="drawer-line-photo"><Image src={p.image} alt={p.name} fill sizes="92px"/></div><div className="drawer-line-info"><Link href={`/san-pham/${p.slug}`} onClick={()=>setDrawerOpen(false)}>{p.shortName}</Link><small>{p.volume} · {p.price!=null?money(p.price):'Liên hệ báo giá'}</small><div className="qty-row"><div className="quantity-control"><button aria-label="Giảm số lượng" onClick={()=>setQuantity(p.slug,line.quantity-1)}><Minus size={13}/></button><span>{line.quantity}</span><button aria-label="Tăng số lượng" onClick={()=>setQuantity(p.slug,line.quantity+1)}><Plus size={13}/></button></div><button className="remove-button" aria-label={'Xóa '+p.name} onClick={()=>remove(p.slug)}><Trash2 size={15}/></button></div></div></div>})}</div>
 {items.length>0&&<div className="drawer-foot"><div className="subtotal-row"><span>{hasUnpriced?'Tạm tính sản phẩm có giá':'Tạm tính'}</span><strong>{subtotal===0&&hasUnpriced?'Liên hệ báo giá':money(subtotal)}</strong></div>{hasUnpriced&&<p>Một số sản phẩm cần báo giá riêng. Tổng trên chưa bao gồm các sản phẩm đó và phí giao hàng.</p>}<Link href="/thanh-toan" className="btn btn-primary btn-full" onClick={()=>setDrawerOpen(false)}>Gửi yêu cầu đặt hàng <ArrowRight size={18}/></Link><Link href="/gio-hang" className="text-link center-link" onClick={()=>setDrawerOpen(false)}>Xem giỏ hàng chi tiết</Link></div>}</aside></div>
}
