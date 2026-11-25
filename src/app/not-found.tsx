import {T} from '@/components/i18n/t';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function NotFound() { return <div className="container notfound"><span>404</span><h1><T vi={"Kh\u00F4ng t\u00ECm th\u1EA5y trang n\u00E0y."}/></h1><p><T vi={"\u0110\u1ECBa ch\u1EC9 c\u00F3 th\u1EC3 \u0111\u00E3 thay \u0111\u1ED5i. H\u00E3y tr\u1EDF l\u1EA1i trang ch\u1EE7 ho\u1EB7c kh\u00E1m ph\u00E1 danh m\u1EE5c s\u1EA3n ph\u1EA9m PALLAS."}/></p><Link href="/" className="btn btn-primary"><ArrowLeft size={18}/><T vi={" V\u1EC1 trang ch\u1EE7"}/></Link></div>; }
