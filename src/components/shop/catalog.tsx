'use client';
import {useMemo,useState,type FormEvent} from 'react';
import {useRouter} from 'next/navigation';
import ProductCard from './product-card';
import {products,categories} from '@/data/products';
import {normalise} from '@/lib/format';
import {Search,SlidersHorizontal,X} from 'lucide-react';
export default function Catalog({initialQ='',initialCategory=''}:{initialQ?:string;initialCategory?:string}){
 const [q,setQ]=useState(initialQ);const [cat,setCat]=useState(initialCategory);const [sort,setSort]=useState('featured');const router=useRouter();
 const results=useMemo(()=>{let arr=products.filter(p=>(!cat||p.category===cat)&&(!q||normalise(p.name+' '+p.summary+' '+p.volume).includes(normalise(q))));if(sort==='price-asc')arr=[...arr].sort((a,b)=>(a.price??Infinity)-(b.price??Infinity));if(sort==='price-desc')arr=[...arr].sort((a,b)=>(b.price??-1)-(a.price??-1));return arr},[q,cat,sort]);
 const changeCat=(newCat:string)=>{setCat(newCat);const params=new URLSearchParams();if(q)params.set('q',q);if(newCat)params.set('category',newCat);router.replace('/san-pham'+(params.size?'?'+params.toString():''),{scroll:false})};
 const submit=(e:FormEvent)=>{e.preventDefault();const params=new URLSearchParams();if(q)params.set('q',q);if(cat)params.set('category',cat);router.replace('/san-pham'+(params.size?'?'+params.toString():''),{scroll:false})};
 return <div className="catalog-layout"><aside className="catalog-sidebar"><div className="sidebar-head"><SlidersHorizontal size={17}/> Bộ lọc sản phẩm</div><div className="sidebar-title">Danh mục</div><div className="category-filters"><button className={!cat?'selected':''} onClick={()=>changeCat('')}>Tất cả sản phẩm <span>{products.length}</span></button>{categories.map(c=><button className={cat===c.id?'selected':''} key={c.id} onClick={()=>changeCat(c.id)}>{c.label}<span>{products.filter(p=>p.category===c.id).length}</span></button>)}</div><div className="filter-note"><b>Cần báo giá số lượng lớn?</b><p>Để lại thông tin, đội ngũ PALLAS sẽ tư vấn theo nhu cầu garage, đại lý.</p><a href="/dai-ly">Xem chính sách hợp tác →</a></div></aside>
 <div className="catalog-main"><div className="catalog-toolbar"><form className="catalog-search" onSubmit={submit}><Search size={18}/><input aria-label="Tìm sản phẩm" value={q} onChange={e=>setQ(e.target.value)} placeholder="Tìm theo tên, dòng sản phẩm..."/>{q&&<button type="button" onClick={()=>{setQ('');router.replace('/san-pham'+(cat?'?category='+cat:''),{scroll:false})}} aria-label="Xóa tìm kiếm"><X size={15}/></button>}</form><select aria-label="Sắp xếp sản phẩm" value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Đề xuất</option><option value="price-asc">Giá: thấp đến cao</option><option value="price-desc">Giá: cao đến thấp</option></select></div>
 <div className="mobile-category-scroll"><button className={!cat?'active':''} onClick={()=>changeCat('')}>Tất cả</button>{categories.map(c=><button key={c.id} className={cat===c.id?'active':''} onClick={()=>changeCat(c.id)}>{c.label}</button>)}</div>
 <div className="catalog-count">Hiển thị <b>{results.length}</b> sản phẩm {cat&&`trong ${categories.find(x=>x.id===cat)?.label||''}`}</div>
 {results.length?<div className="product-grid">{results.map(p=><ProductCard key={p.slug} product={p}/>)}</div>:<div className="empty-results"><Search size={38}/><h3>Chưa tìm thấy sản phẩm phù hợp</h3><p>Hãy thử từ khóa khác hoặc xem tất cả sản phẩm.</p><button className="btn btn-outline" onClick={()=>{setQ('');changeCat('')}}>Xóa bộ lọc</button></div>}
 </div></div>
}
