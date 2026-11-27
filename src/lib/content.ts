import 'server-only';
import {products as fallbackProducts} from '@/data/products';
import {articles as fallbackArticles} from '@/data/articles';
import {SITE} from '@/data/site';
import type {Article,Product,CategoryId} from '@/types';
import {promotionIsCurrent} from '@/lib/promotion-schedule';

// Sanity integration is optional. Missing credentials / unavailable CMS never break storefront.
// Published documents only; drafts cannot appear on the public website.
const PROJECT = process.env.SANITY_PROJECT_ID?.trim();
const DATASET = process.env.SANITY_DATASET?.trim() || 'production';
const TOKEN = process.env.SANITY_READ_TOKEN?.trim();
const ENABLED = Boolean(PROJECT && /^[a-z0-9-]+$/i.test(PROJECT) && /^[a-z0-9_-]+$/i.test(DATASET));
const BASE = PROJECT ? `https://${PROJECT}.api.sanity.io/v2025-02-19/data/query/${DATASET}` : '';

async function queryCMS<T>(query:string):Promise<T | null> {
  if (!ENABLED) return null;
  try {
    const response = await fetch(`${BASE}?query=${encodeURIComponent(query)}`,{
      headers: TOKEN ? {Authorization:`Bearer ${TOKEN}`} : undefined,
      next:{revalidate:90},
    });
    if(!response.ok) { console.warn('PALLAS CMS read unavailable',response.status); return null; }
    const data:unknown = await response.json();
    return (data as {result?:T}).result ?? null;
  } catch(e) { console.warn('PALLAS CMS fallback in use',e instanceof Error?e.message:'unknown'); return null; }
}

const CATEGORY_IDS:CategoryId[]=['foam','touchless','wax','cleaner','equipment'];
const safeText=(v:unknown,max=5000)=> typeof v==='string' ? v.trim().slice(0,max) : '';
const safeImage=(v:unknown):string|undefined=>{
  const s=safeText(v,1000);
  return s.startsWith('/images/') || /^https:\/\/cdn\.sanity\.io\/images\/[\w/-]+\.(png|jpe?g|webp)(\?.*)?$/i.test(s) ? s : undefined;
};

type CMSProduct={slug?:string;name?:string;summary?:string;category?:string;volume?:string;priceMode?:string;approvedPrice?:number|null;imageUrl?:string;featured?:boolean;isActive?:boolean;highlights?:string[];usage?:string;};

export async function getCatalog():Promise<Product[]>{
  const cms=await queryCMS<CMSProduct[]>(`*[_type == "pallasProduct" && !(_id in path("drafts.**"))]{"slug":slug.current,name,category,volume,summary,priceMode,approvedPrice,"imageUrl":image.asset->url,featured,isActive,highlights,usage}`);
  if(!Array.isArray(cms)||!cms.length)return fallbackProducts;
  const result=new Map<string,Product>(fallbackProducts.map(product=>[product.slug,product] as const));
  for(const row of cms){
    const slug=safeText(row.slug,120);
    if(!/^[a-z0-9-]+$/.test(slug)) continue;
    if(row.isActive===false){result.delete(slug);continue;}
    const previous=result.get(slug);
    // A newly created SKU must be complete, so incomplete drafts are never exposed.
    if(!previous && (!safeText(row.name,150)||!safeText(row.volume,35)||!CATEGORY_IDS.includes(row.category as CategoryId)||!safeImage(row.imageUrl)))continue;
    const price=row.priceMode==='approved'&&typeof row.approvedPrice==='number'&&Number.isFinite(row.approvedPrice)&&row.approvedPrice>=0
      ? row.approvedPrice : row.priceMode==='quote'?null:previous?.price??null;
    const image=safeImage(row.imageUrl) ?? previous?.image ?? '/images/products/illustration-cleaner.svg';
    const product:Product={
      ...(previous||{slug,shortName:safeText(row.name,150),referenceFrom:null,sourceUrl:undefined,note:'Giá và tình trạng hàng cần được PALLAS xác nhận',audience:'Ca hai' as const}),
      slug,
      name:safeText(row.name,150)||previous?.name||slug,
      shortName:safeText(row.name,150)||previous?.shortName||slug,
      category:CATEGORY_IDS.includes(row.category as CategoryId)?row.category as CategoryId:previous?.category||'cleaner',
      volume:safeText(row.volume,35)||previous?.volume||'',
      summary:safeText(row.summary,2000)||previous?.summary||'Liên hệ PALLAS để được tư vấn và xác nhận thông tin sản phẩm',
      price,
      priceSheetDate: row.priceMode === 'approved' && previous && row.approvedPrice !== previous.price ? undefined : previous?.priceSheetDate,
      priceSheetRow: row.priceMode === 'approved' && previous && row.approvedPrice !== previous.price ? undefined : previous?.priceSheetRow,
      image,
      imageType:image.startsWith('/images/products/illustration-')?'illustration':'provided',
      gallery:row.imageUrl&&safeImage(row.imageUrl)?[image]:previous?.gallery??[image],
      featured:row.featured??previous?.featured??false,
      highlights:Array.isArray(row.highlights)&&row.highlights.some(x=>typeof x==='string'&&x.trim())?row.highlights.filter(x=>typeof x==='string').map(x=>safeText(x,180)).slice(0,5):previous?.highlights??[],
      usage:safeText(row.usage,1800)||previous?.usage||'Đọc kỹ hướng dẫn và cảnh báo trên nhãn trước khi sử dụng',
    };
    result.set(slug,product);
  }
  return [...result.values()];
}

import type {SiteInfo} from '@/lib/content-types';
export async function getSiteSettings():Promise<SiteInfo>{
  const row=await queryCMS<Record<string,unknown>>(`*[_type == "pallasSiteSettings" && _id == "pallasSiteSettings"][0]{company,name,phone,phoneDisplay,email,address,zaloUrl,tagline}`);
  if(!row)return SITE;
  const settings={...SITE};
  for(const key of ['company','name','phoneDisplay','address','tagline'] as const){const value=safeText(row[key],350);if(value)settings[key]=value;}
  const phone=safeText(row.phone,25).replace(/[^+0-9]/g,'');if(/^\+?\d{9,13}$/.test(phone))settings.phone=phone;
  const email=safeText(row.email,120);if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))settings.email=email;
  // Future extra contact channels are ignored until owner explicitly supplies verified URLs.
  settings.location=settings.address;
  return settings;
}

type CMSArticle={slug?:string;category?:string;title?:string;excerpt?:string;readTime?:string;section?:string[];isActive?:boolean};
export async function getArticles():Promise<Article[]>{
  const docs=await queryCMS<CMSArticle[]>(`*[_type == "pallasArticle" && !(_id in path("drafts.**"))]{"slug":slug.current,category,title,excerpt,readTime,section,isActive}`);
  if(!Array.isArray(docs)||!docs.length)return fallbackArticles;
  const map=new Map(fallbackArticles.map(a=>[a.slug,a]));
  for(const row of docs){
    const slug=safeText(row.slug,120);
    if(!/^[a-z0-9-]+$/.test(slug))continue;
    if(row.isActive===false){map.delete(slug);continue;}
    const old=map.get(slug);
    if(!old&&(!row.title||!row.section?.length))continue;
    map.set(slug,{slug,category:safeText(row.category,80)||old?.category||'Kiến thức',title:safeText(row.title,180)||old?.title||slug,excerpt:safeText(row.excerpt,400)||old?.excerpt||'',readTime:safeText(row.readTime,40)||old?.readTime||'4 phút đọc',section:Array.isArray(row.section)&&row.section.length?row.section.filter(x=>typeof x==='string').map(x=>safeText(x,2000)).slice(0,15):old?.section||[]});
  }
  return [...map.values()];
}

export type Promotion={title:string;description:string;startsAt?:string;endsAt?:string;url?:string};
export async function getCurrentPromotion():Promise<Promotion|null>{
  const docs=await queryCMS<Array<Promotion&{isActive?:boolean}>>(`*[_type == "pallasPromotion" && !(_id in path("drafts.**")) && isActive == true]{title,description,startsAt,endsAt,url}`);
  if(!Array.isArray(docs))return null;
  const now=Date.now();
  return docs.find(row=>promotionIsCurrent(row,now))??null;
}
