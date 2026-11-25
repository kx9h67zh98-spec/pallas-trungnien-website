import {T} from '@/components/i18n/t';
import type { Product } from '@/types';
import { money } from '@/lib/format';
export default function ReferencePrice({ product: p }: {
    product: Product;
}) {
    return p.price != null
        ? <strong className="reference-price">{money(p.price)}</strong>
        : <strong className="reference-price"><T vi={"Li\u00EAn h\u1EC7 b\u00E1o gi\u00E1"}/></strong>;
}
