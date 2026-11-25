'use client';
import {T} from '@/components/i18n/t';
import {useLanguage} from '@/components/i18n/language-provider';
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useShop } from '@/components/shop/shop-provider';
export function AddToCart({ slug, quantity = 1, full = false }: {
    slug: string;
    quantity?: number;
    full?: boolean;
}) { const { add } = useShop(); return <button type="button" className={`btn btn-primary ${full ? 'btn-full' : ''}`} onClick={() => add(slug, quantity)}><ShoppingBag size={18}/><T vi={" Th\u00EAm v\u00E0o gi\u1ECF h\u00E0ng"}/></button>; }
export function ProductOrderControls({ slug }: {
    slug: string;
}) { const {tr}=useLanguage(); const [qty, setQty] = useState(1); const { add } = useShop(); return <div className="product-order-controls"><div className="quantity-control quantity-big"><button onClick={() => setQty(Math.max(1, qty - 1))} aria-label={tr("Giảm số lượng")}>−</button><span>{qty}</span><button onClick={() => setQty(Math.min(99, qty + 1))} aria-label={tr("Tăng số lượng")}>+</button></div><button className="btn btn-primary" onClick={() => add(slug, qty)}><ShoppingBag size={19}/><T vi={" Th\u00EAm v\u00E0o gi\u1ECF"}/></button><Link href="/lien-he" className="btn btn-outline"><T vi={"H\u1ECFi t\u01B0 v\u1EA5n "}/><ArrowRight size={18}/></Link></div>; }
