import type {MetadataRoute} from 'next';
import {getCatalog,getArticles} from '@/lib/content';
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
 if(process.env.NEXT_PUBLIC_SITE_PUBLIC!=='true')return [];
 const base=(process.env.NEXT_PUBLIC_SITE_URL||'https://pallas-trungnien-website.netlify.app').replace(/\/$/,'');
 const [products,articles]=await Promise.all([getCatalog(),getArticles()]);
 return [
  '/', '/san-pham', '/ve-pallas', '/kien-thuc', '/dai-ly','/lien-he','/chinh-sach',
  ...products.map(p=>`/san-pham/${p.slug}`),
  ...articles.map(a=>`/kien-thuc/${a.slug}`),
 ].map(path=>({url:base+path,changeFrequency:path==='/'?'weekly':'monthly' as const}));
}
