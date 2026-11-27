import {T} from '@/components/i18n/t';
import {LanguageProvider} from '@/components/i18n/language-provider';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@/styles/globals.css';
import SiteShell from '@/components/layout/site-shell';
import Footer from '@/components/layout/footer';
import {getCatalog,getSiteSettings} from '@/lib/content';
export const metadata: Metadata = { title: { default: 'PALLAS Premium | Giải pháp chăm sóc xe chuyên dụng', template: '%s | PALLAS Premium' }, description: 'Khám phá sản phẩm PALLAS – Trung Niên: bọt tuyết rửa xe, Nano EX không chạm, wax dưỡng bóng, dung dịch chuyên dụng và thiết bị cho garage.', icons: { icon: '/favicon.png' }, metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pallas-trungnien-website.netlify.app'), openGraph:{type:'website',locale:'vi_VN',title:'PALLAS Premium',description:'Giải pháp chăm sóc xe cho cá nhân, garage và đại lý',images:[{url:'/images/brand/pallas-logo-original-transparent.png'}]}, robots: { index: process.env.NEXT_PUBLIC_SITE_PUBLIC==='true', follow: process.env.NEXT_PUBLIC_SITE_PUBLIC==='true' } };
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0B0C0F' };
export default async function RootLayout({ children }: {
    children: ReactNode;
}) { const [products,site]=await Promise.all([getCatalog(),getSiteSettings()]); return <html lang="vi"><body><LanguageProvider><a className="skip-link" href="#main-content"><T vi={"B\u1ECF qua \u0111i\u1EC1u h\u01B0\u1EDBng"}/></a><SiteShell footer={<Footer />} products={products} site={site}>{children}</SiteShell></LanguageProvider></body></html>; }
