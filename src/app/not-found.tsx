import Link from 'next/link';import {ArrowLeft} from 'lucide-react';
export default function NotFound(){return <div className="container notfound"><span>404</span><h1>Không tìm thấy trang này.</h1><p>Địa chỉ có thể đã thay đổi. Hãy trở lại trang chủ hoặc khám phá danh mục sản phẩm PALLAS.</p><Link href="/" className="btn btn-primary"><ArrowLeft size={18}/> Về trang chủ</Link></div>}
