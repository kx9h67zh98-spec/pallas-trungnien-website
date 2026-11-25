'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
/** Progressive enhancement: content stays fully visible without JS or motion support. */
export default function RevealOnScroll(){
  const pathname=usePathname();
  useEffect(()=>{
    if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const nodes=Array.from(document.querySelectorAll<HTMLElement>('.section-top,.category-tile,.product-card,.audience-card,.article-card,.detail-photo-col,.detail-copy,.pallas-form,.info-stack>div'));
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('reveal-in');entry.target.classList.remove('reveal-pending');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px 45px 0px'});
    nodes.forEach((node,i)=>{
      if(node.getBoundingClientRect().top<window.innerHeight*.93){node.classList.add('reveal-in');return}
      node.classList.add('reveal-pending');node.style.setProperty('--reveal-delay',`${(i%4)*45}ms`);observer.observe(node);
    });
    return()=>{observer.disconnect();nodes.forEach(node=>{node.classList.remove('reveal-pending');node.style.removeProperty('--reveal-delay')})};
  },[pathname]);
  return null;
}
