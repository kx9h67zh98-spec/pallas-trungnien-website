'use client';
import {T} from '@/components/i18n/t';
import type { ReactNode } from 'react';
import { ShopProvider } from '@/components/shop/shop-provider';
import Header from './header';
import RevealOnScroll from './reveal-on-scroll';
import CartDrawer from './cart-drawer';
import { Phone } from 'lucide-react';
import {SiteSettingsProvider,useSite} from '@/components/layout/site-settings-provider';
import type {Product} from '@/types';
import type {SiteInfo} from '@/lib/content-types';
export default function SiteShell({ children, footer, products, site }: {
    children: ReactNode;
    footer: ReactNode;
    products: Product[];
    site: SiteInfo;
}) { return <SiteSettingsProvider value={site}><ShopProvider products={products}><RevealOnScroll/><Header /><main id="main-content">{children}</main>{footer}<CartDrawer /><FloatContact/></ShopProvider></SiteSettingsProvider>; }
function FloatContact(){const site=useSite();return <a className="float-contact" href={`tel:${site.phone}`} aria-label="PALLAS hotline"><Phone size={21}/><span><T vi="Gọi tư vấn"/></span></a>}
