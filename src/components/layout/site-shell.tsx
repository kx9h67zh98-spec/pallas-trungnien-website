'use client';
import {T} from '@/components/i18n/t';
import type { ReactNode } from 'react';
import { ShopProvider } from '@/components/shop/shop-provider';
import Header from './header';
import RevealOnScroll from './reveal-on-scroll';
import CartDrawer from './cart-drawer';
import { Phone } from 'lucide-react';
import { SITE } from '@/data/site';
export default function SiteShell({ children, footer }: {
    children: ReactNode;
    footer: ReactNode;
}) { return <ShopProvider><RevealOnScroll/><Header /><main id="main-content">{children}</main>{footer}<CartDrawer /><a className="float-contact" href={`tel:${SITE.phone}`} aria-label="PALLAS hotline"><Phone size={21}/><span><T vi={"G\u1ECDi t\u01B0 v\u1EA5n"}/></span></a></ShopProvider>; }
