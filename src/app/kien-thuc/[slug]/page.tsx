import {T} from '@/components/i18n/t';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, BookOpen } from 'lucide-react';
import { articles, getArticle } from '@/data/articles';
export function generateStaticParams() { return articles.map(a => ({ slug: a.slug })); }
export async function generateMetadata({ params }: {
    params: Promise<{
        slug: string;
    }>;
}): Promise<Metadata> { const { slug } = await params; return { title: getArticle(slug)?.title || 'Bài viết' }; }
export default async function ArticlePage({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) { const { slug } = await params; const a = getArticle(slug); if (!a)
    notFound(); return <><section className="article-header"><div className="container article-header-inner"><Link href="/kien-thuc" className="backlink"><ArrowLeft size={17}/><T vi={" T\u1EA5t c\u1EA3 b\u00E0i vi\u1EBFt"}/></Link><span className="eyebrow"><T vi={a.category}/> · <T vi={a.readTime}/></span><h1><T vi={a.title}/></h1><p><T vi={a.excerpt} compact={false}/></p><div className="article-header-mark"><BookOpen size={65}/></div></div></section><article className="container prose-article"><p className="article-intro"><T compact={false} vi={"B\u00E0i vi\u1EBFt \u0111\u01B0\u1EE3c bi\u00EAn t\u1EADp nh\u1EB1m cung c\u1EA5p th\u00F4ng tin tham kh\u1EA3o v\u1EC1 quy tr\u00ECnh ch\u0103m s\u00F3c xe. H\u00E3y \u01B0u ti\u00EAn h\u01B0\u1EDBng d\u1EABn tr\u00EAn bao b\u00EC c\u1EE7a t\u1EEBng s\u1EA3n ph\u1EA9m."}/></p>{a.section.map((p, i) => <div key={i} className="article-paragraph"><span>{String(i + 1).padStart(2, '0')}</span><p><T vi={p} compact={false}/></p></div>)}<div className="article-note"><strong><T vi={"L\u01B0u \u00FD an to\u00E0n"}/></strong><p><T vi={"\u0110\u1ECDc k\u1EF9 nh\u00E3n s\u1EA3n ph\u1EA9m, kh\u00F4ng pha tr\u1ED9n h\u00F3a ch\u1EA5t kh\u00F4ng t\u01B0\u01A1ng th\u00EDch, b\u1EA3o qu\u1EA3n xa tr\u1EBB em v\u00E0 s\u1EED d\u1EE5ng thi\u1EBFt b\u1ECB b\u1EA3o h\u1ED9 khi c\u1EA7n."}/></p></div><Link className="btn btn-outline" href="/san-pham"><T vi={"Kh\u00E1m ph\u00E1 s\u1EA3n ph\u1EA9m PALLAS "}/><ArrowUpRight size={19}/></Link></article></>; }
