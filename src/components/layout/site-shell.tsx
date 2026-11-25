'use client';
import type {ReactNode} from 'react';
import {ShopProvider} from '@/components/shop/shop-provider';
import Header from './header';
import CartDrawer from './cart-drawer';
import {Phone} from 'lucide-react';
import {SITE} from '@/data/site';
export default function SiteShell({children,footer}:{children:ReactNode;footer:ReactNode}){return <ShopProvider><Header/><main id="main-content">{children}</main>{footer}<CartDrawer/><a className="float-contact" href={`tel:${SITE.phone}`} aria-label="Gọi tư vấn PALLAS"><Phone size={21}/><span>Gọi tư vấn</span></a></ShopProvider>}
