'use client';
import {Plus} from 'lucide-react';
import {useShop} from '@/components/shop/shop-provider';
export default function AddCardButton({slug}:{slug:string}){const {add}=useShop();return <button className="quick-add" onClick={()=>add(slug)} aria-label="Thêm sản phẩm vào giỏ" title="Thêm vào giỏ"><Plus size={22}/></button>}
