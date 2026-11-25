import type {Product} from '@/types';
import {money} from '@/lib/format';
export default function ReferencePrice({product:p}:{product:Product}){
  return p.price!=null
    ? <strong className="reference-price">{money(p.price)}</strong>
    : <strong className="reference-price">Liên hệ báo giá</strong>;
}
