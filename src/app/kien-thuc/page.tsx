import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight,BookOpen} from 'lucide-react';
import {articles} from '@/data/articles';
export const metadata:Metadata={title:'Kiến thức chăm sóc xe'};
export default function Knowledge(){return <><div className="subpage-hero"><div className="container"><span className="eyebrow eyebrow-green">PALLAS JOURNAL</span><h1>Kiến thức <i>chăm xe.</i></h1><p>Tổng hợp các hướng dẫn hữu ích để bạn hiểu sản phẩm và chăm sóc phương tiện đúng cách.</p></div></div><section className="section"><div className="container"><div className="article-grid article-grid-archive">{articles.map((a,i)=><Link href={`/kien-thuc/${a.slug}`} key={a.slug} className="article-card"><div className={`article-art article-art-${i%3}`}><span>0{i+1}</span><BookOpen size={64} strokeWidth={1}/></div><div className="article-card-content"><small>{a.category} · {a.readTime}</small><h3>{a.title}</h3><p>{a.excerpt}</p><span>Đọc bài viết <ArrowUpRight size={17}/></span></div></Link>)}</div><p className="source-note space-top">Hướng dẫn trong bài viết mang tính tổng quát. Hãy tuân theo nhãn và tài liệu kỹ thuật của từng sản phẩm.</p></div></section></>}
