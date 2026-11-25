'use client';
import {useLanguage} from '@/components/i18n/language-provider';
import {translate} from '@/i18n/translate';
import {T} from '@/components/i18n/t';
import { useMemo, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import ProductCard from './product-card';
import { products, categories } from '@/data/products';
import { normalise } from '@/lib/format';
import { Search, SlidersHorizontal, X } from 'lucide-react';
export default function Catalog({ initialQ = '', initialCategory = '' }: {
    initialQ?: string;
    initialCategory?: string;
}) {
    const {tr}=useLanguage();
 const [q, setQ] = useState(initialQ);
    const [cat, setCat] = useState(initialCategory);
    const [sort, setSort] = useState('featured');
    const router = useRouter();
    const results = useMemo(() => { let arr = products.filter(p => (!cat || p.category === cat) && (!q || normalise(p.name + ' ' + translate(p.name,'en') + ' ' + p.summary + ' ' + translate(p.summary,'en') + ' ' + p.volume).includes(normalise(q)))); if (sort === 'price-asc')
        arr = [...arr].sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity)); if (sort === 'price-desc')
        arr = [...arr].sort((a, b) => (b.price ?? -1) - (a.price ?? -1)); return arr; }, [q, cat, sort]);
    const changeCat = (newCat: string) => { setCat(newCat); const params = new URLSearchParams(); if (q)
        params.set('q', q); if (newCat)
        params.set('category', newCat); router.replace('/san-pham' + (params.size ? '?' + params.toString() : ''), { scroll: false }); };
    const submit = (e: FormEvent) => { e.preventDefault(); const params = new URLSearchParams(); if (q)
        params.set('q', q); if (cat)
        params.set('category', cat); router.replace('/san-pham' + (params.size ? '?' + params.toString() : ''), { scroll: false }); };
    return <div className="catalog-layout"><aside className="catalog-sidebar"><div className="sidebar-head"><SlidersHorizontal size={17}/><T vi={" B\u1ED9 l\u1ECDc s\u1EA3n ph\u1EA9m"}/></div><div className="sidebar-title"><T vi={"Danh m\u1EE5c"}/></div><div className="category-filters"><button className={!cat ? 'selected' : ''} onClick={() => changeCat('')}><T vi={"T\u1EA5t c\u1EA3 s\u1EA3n ph\u1EA9m "}/><span>{products.length}</span></button>{categories.map(c => <button className={cat === c.id ? 'selected' : ''} key={c.id} onClick={() => changeCat(c.id)}><T vi={c.label}/><span>{products.filter(p => p.category === c.id).length}</span></button>)}</div><div className="filter-note"><b><T vi={"C\u1EA7n b\u00E1o gi\u00E1 s\u1ED1 l\u01B0\u1EE3ng l\u1EDBn?"}/></b><p><T vi={"\u0110\u1EC3 l\u1EA1i th\u00F4ng tin, \u0111\u1ED9i ng\u0169 PALLAS s\u1EBD t\u01B0 v\u1EA5n theo nhu c\u1EA7u garage, \u0111\u1EA1i l\u00FD."}/></p><a href="/dai-ly"><T vi={"Xem ch\u00EDnh s\u00E1ch h\u1EE3p t\u00E1c \u2192"}/></a></div></aside>
 <div className="catalog-main"><div className="catalog-toolbar"><form className="catalog-search" onSubmit={submit}><Search size={18}/><input aria-label={tr("Tìm sản phẩm")} value={q} onChange={e => setQ(e.target.value)} placeholder={tr("Tìm theo tên, dòng sản phẩm...",false)}/>{q && <button type="button" onClick={() => { setQ(''); router.replace('/san-pham' + (cat ? '?category=' + cat : ''), { scroll: false }); }} aria-label={tr("Xóa tìm kiếm")}><X size={15}/></button>}</form><select aria-label={tr("Sắp xếp sản phẩm")} value={sort} onChange={e => setSort(e.target.value)}><option value="featured">{tr("\u0110\u1EC1 xu\u1EA5t")}</option><option value="price-asc">{tr("Gi\u00E1: th\u1EA5p \u0111\u1EBFn cao")}</option><option value="price-desc">{tr("Gi\u00E1: cao \u0111\u1EBFn th\u1EA5p")}</option></select></div>
 <div className="mobile-category-scroll"><button className={!cat ? 'active' : ''} onClick={() => changeCat('')}><T vi={"T\u1EA5t c\u1EA3"}/></button>{categories.map(c => <button key={c.id} className={cat === c.id ? 'active' : ''} onClick={() => changeCat(c.id)}><T vi={c.label}/></button>)}</div>
 <div className="catalog-count"><T vi={"Hi\u1EC3n th\u1ECB "}/><b>{results.length}</b><T vi={" s\u1EA3n ph\u1EA9m "}/>{cat && <><T vi={"trong"}/> <T vi={categories.find(x=>x.id===cat)?.label??""}/></>}</div>
 {results.length ? <div className="product-grid">{results.map(p => <ProductCard key={p.slug} product={p}/>)}</div> : <div className="empty-results"><Search size={38}/><h3><T vi={"Ch\u01B0a t\u00ECm th\u1EA5y s\u1EA3n ph\u1EA9m ph\u00F9 h\u1EE3p"}/></h3><p><T vi={"H\u00E3y th\u1EED t\u1EEB kh\u00F3a kh\u00E1c ho\u1EB7c xem t\u1EA5t c\u1EA3 s\u1EA3n ph\u1EA9m."}/></p><button className="btn btn-outline" onClick={() => { setQ(''); changeCat(''); }}><T vi={"X\u00F3a b\u1ED9 l\u1ECDc"}/></button></div>}
 </div></div>;
}
