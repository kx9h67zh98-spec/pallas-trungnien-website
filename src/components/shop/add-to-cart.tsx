'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ShoppingBag,ArrowRight} from 'lucide-react';
import {useShop} from '@/components/shop/shop-provider';
export function AddToCart({slug,quantity=1,full=false}:{slug:string;quantity?:number;full?:boolean}){const {add}=useShop();return <button type="button" className={`btn btn-primary ${full?'btn-full':''}`} onClick={()=>add(slug,quantity)}><ShoppingBag size={18}/> Thêm vào giỏ hàng</button>}
export function ProductOrderControls({slug}:{slug:string}){const [qty,setQty]=useState(1);const {add}=useShop();return <div className="product-order-controls"><div className="quantity-control quantity-big"><button onClick={()=>setQty(Math.max(1,qty-1))} aria-label="Giảm số lượng">−</button><span>{qty}</span><button onClick={()=>setQty(Math.min(99,qty+1))} aria-label="Tăng số lượng">+</button></div><button className="btn btn-primary" onClick={()=>add(slug,qty)}><ShoppingBag size={19}/> Thêm vào giỏ</button><Link href="/lien-he" className="btn btn-outline">Hỏi tư vấn <ArrowRight size={18}/></Link></div>}
