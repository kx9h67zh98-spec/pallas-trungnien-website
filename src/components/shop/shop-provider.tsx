'use client';
import { createContext, useContext, useEffect, useState, useCallback, useMemo, useSyncExternalStore, type ReactNode } from 'react';
import type { CartItem } from '@/types';
import type {Product} from '@/types';
const KEY='pallas-cart-v1';
type ShopContextType={items:CartItem[]; totalQuantity:number; subtotal:number; drawerOpen:boolean; setDrawerOpen:(v:boolean)=>void; add:(slug:string,qty?:number)=>void; setQuantity:(slug:string,qty:number)=>void; remove:(slug:string)=>void; clear:()=>void; products:Product[]; findProduct:(slug:string)=>Product|undefined};
const Context=createContext<ShopContextType|null>(null);
export function ShopProvider({children,products}:{children:ReactNode;products:Product[]}){
 const findProduct=useCallback((slug:string)=>products.find(p=>p.slug===slug),[products]);
 const clientReady=useSyncExternalStore(()=>()=>{},()=>true,()=>false);
 const [items,setItems]=useState<CartItem[]>(()=>{
   if(typeof window==='undefined')return [];
   try{const raw=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(raw)?raw.filter((x)=>typeof x?.slug==='string'&&Number.isInteger(x?.quantity)&&x.quantity>0&&x.quantity<=99&&findProduct(x.slug)):[]}catch{return []}
 });
 const [drawerOpen,setDrawerOpen]=useState(false);
 useEffect(()=>{if(clientReady)try{localStorage.setItem(KEY,JSON.stringify(items))}catch{}},[items,clientReady]);
 const add=useCallback((slug:string,qty=1)=>{if(!findProduct(slug))return;setItems(cur=>{const existing=cur.find(x=>x.slug===slug);if(existing)return cur.map(x=>x.slug===slug?{...x,quantity:Math.min(99,x.quantity+Math.max(1,qty))}:x);return [...cur,{slug,quantity:Math.min(99,Math.max(1,qty))}]});setDrawerOpen(true)},[findProduct]);
 const setQuantity=useCallback((slug:string,quantity:number)=>setItems(cur=>quantity<=0?cur.filter(x=>x.slug!==slug):cur.map(x=>x.slug===slug?{...x,quantity:Math.min(99,Math.max(1,quantity))}:x)),[]);
 const remove=useCallback((slug:string)=>setItems(cur=>cur.filter(x=>x.slug!==slug)),[]);
 const clear=useCallback(()=>setItems([]),[]);
 const visibleItems=clientReady?items:[];
 const totalQuantity=visibleItems.reduce((n,x)=>n+x.quantity,0);
 const subtotal=visibleItems.reduce((n,x)=>n+(findProduct(x.slug)?.price??0)*x.quantity,0);
 const value=useMemo(()=>({items:visibleItems,totalQuantity,subtotal,drawerOpen,setDrawerOpen,add,setQuantity,remove,clear,products,findProduct}),[visibleItems,totalQuantity,subtotal,drawerOpen,add,setQuantity,remove,clear,products,findProduct]);
 return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useShop(){const ctx=useContext(Context);if(!ctx)throw new Error('useShop must be used within ShopProvider');return ctx}
