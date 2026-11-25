'use client';
import {useLanguage} from '@/components/i18n/language-provider';
import {T} from '@/components/i18n/t';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useShop } from '@/components/shop/shop-provider';
import { getProduct } from '@/data/products';
import { money } from '@/lib/format';
export default function CartDrawer() {
    const {tr}=useLanguage();
    const { items, totalQuantity, subtotal, drawerOpen, setDrawerOpen, setQuantity, remove } = useShop();
    const hasUnpriced = items.some(x => getProduct(x.slug)?.price == null);
    useEffect(() => { if (!drawerOpen)
        return; const previous = document.body.style.overflow; document.body.style.overflow = 'hidden'; const esc = (e: KeyboardEvent) => { if (e.key === 'Escape')
        setDrawerOpen(false); }; document.addEventListener('keydown', esc); return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', esc); }; }, [drawerOpen, setDrawerOpen]);
    if (!drawerOpen)
        return null;
    return <div className="drawer-root"><button className="drawer-backdrop" aria-label={tr("Đóng giỏ hàng")} onClick={() => setDrawerOpen(false)}/><aside className="cart-drawer" role="dialog" aria-modal="true" aria-label={tr("Giỏ hàng")}><div className="drawer-heading"><div><span className="eyebrow"><T vi={"PALLAS SHOP"}/></span><h3><T vi={"Gi\u1ECF h\u00E0ng "}/><small>({totalQuantity})</small></h3></div><button className="icon-button" onClick={() => setDrawerOpen(false)} aria-label={tr("Đóng")}><X /></button></div>
 <div className="drawer-content">{!items.length ? <div className="empty-cart"><ShoppingBag size={56} strokeWidth={1.2}/><h4><T vi={"Gi\u1ECF h\u00E0ng c\u1EE7a b\u1EA1n \u0111ang tr\u1ED1ng"}/></h4><p><T vi={"Kh\u00E1m ph\u00E1 c\u00E1c d\u00F2ng dung d\u1ECBch v\u00E0 ph\u1EE5 ki\u1EC7n ch\u0103m s\u00F3c xe PALLAS."}/></p><Link className="btn btn-primary" href="/san-pham" onClick={() => setDrawerOpen(false)}><T vi={"Kh\u00E1m ph\u00E1 s\u1EA3n ph\u1EA9m "}/><ArrowRight size={18}/></Link></div> :
            items.map(line => { const p = getProduct(line.slug); if (!p)
                return null; return <div className="drawer-line" key={p.slug}><div className="drawer-line-photo"><Image src={p.image} alt={p.name} fill sizes="92px"/></div><div className="drawer-line-info"><Link href={`/san-pham/${p.slug}`} onClick={() => setDrawerOpen(false)}><T vi={p.shortName}/></Link><small><T vi={p.volume}/> · {p.price != null ? money(p.price) : tr('Liên hệ báo giá')}</small><div className="qty-row"><div className="quantity-control"><button aria-label={tr("Giảm số lượng")} onClick={() => setQuantity(p.slug, line.quantity - 1)}><Minus size={13}/></button><span>{line.quantity}</span><button aria-label={tr("Tăng số lượng")} onClick={() => setQuantity(p.slug, line.quantity + 1)}><Plus size={13}/></button></div><button className="remove-button" aria-label={tr('Xóa')+' '+tr(p.name)} onClick={() => remove(p.slug)}><Trash2 size={15}/></button></div></div></div>; })}</div>
 {items.length > 0 && <div className="drawer-foot"><div className="subtotal-row"><span>{tr(hasUnpriced ? 'Tạm tính sản phẩm có giá' : 'Tạm tính')}</span><strong>{subtotal === 0 && hasUnpriced ? tr('Liên hệ báo giá') : money(subtotal)}</strong></div>{hasUnpriced && <p><T vi={"M\u1ED9t s\u1ED1 s\u1EA3n ph\u1EA9m c\u1EA7n b\u00E1o gi\u00E1 ri\u00EAng. T\u1ED5ng tr\u00EAn ch\u01B0a bao g\u1ED3m c\u00E1c s\u1EA3n ph\u1EA9m \u0111\u00F3 v\u00E0 ph\u00ED giao h\u00E0ng."}/></p>}<Link href="/thanh-toan" className="btn btn-primary btn-full" onClick={() => setDrawerOpen(false)}><T vi={"G\u1EEDi y\u00EAu c\u1EA7u \u0111\u1EB7t h\u00E0ng "}/><ArrowRight size={18}/></Link><Link href="/gio-hang" className="text-link center-link" onClick={() => setDrawerOpen(false)}><T vi={"Xem gi\u1ECF h\u00E0ng chi ti\u1EBFt"}/></Link></div>}</aside></div>;
}
