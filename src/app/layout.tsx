import {T} from '@/components/i18n/t';
import {LanguageProvider} from '@/components/i18n/language-provider';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@/styles/globals.css';
import SiteShell from '@/components/layout/site-shell';
import Footer from '@/components/layout/footer';
export const metadata: Metadata = { title: { default: 'PALLAS Premium | Giải pháp chăm sóc xe chuyên dụng', template: '%s | PALLAS Premium' }, description: 'Khám phá sản phẩm PALLAS – Trung Niên: bọt tuyết rửa xe, Nano EX không chạm, wax dưỡng bóng, dung dịch chuyên dụng và thiết bị cho garage.', icons: { icon: '/favicon.png' }, robots: { index: false, follow: false } };
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#14241C' };
export default function RootLayout({ children }: {
    children: ReactNode;
}) { return <html lang="vi"><body><LanguageProvider><a className="skip-link" href="#main-content"><T vi={"B\u1ECF qua \u0111i\u1EC1u h\u01B0\u1EDBng"}/></a><SiteShell footer={<Footer />}>{children}</SiteShell></LanguageProvider></body></html>; }
