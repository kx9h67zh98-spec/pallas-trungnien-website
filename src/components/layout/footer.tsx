import Link from 'next/link';
import Image from 'next/image';
import {ArrowUpRight, Mail, Phone, MapPin} from 'lucide-react';
import {SITE} from '@/data/site';
export default function Footer(){return <footer className="site-footer"><div className="container footer-main">
 <div className="footer-brand"><div className="footer-logo"><Image src={SITE.logo} alt="Logo PALLAS" fill sizes="180px"/></div><h3>Chăm chút từng hành trình.</h3><p>PALLAS – Trung Niên đồng hành cùng những người yêu xe và các đơn vị chăm sóc xe chuyên nghiệp.</p><div className="footer-social"><a href={`tel:${SITE.phone}`} aria-label="Gọi PALLAS"><Phone size={18}/></a><a href={`mailto:${SITE.email}`} aria-label="Email PALLAS"><Mail size={18}/></a></div></div>
 <div className="footer-col"><h4>Khám phá</h4><Link href="/san-pham">Tất cả sản phẩm</Link><Link href="/san-pham?category=foam">Bọt tuyết rửa xe</Link><Link href="/san-pham?category=touchless">Rửa không chạm</Link><Link href="/san-pham?category=wax">Dưỡng bóng & wax</Link><Link href="/san-pham?category=equipment">Thiết bị rửa xe</Link></div>
 <div className="footer-col"><h4>Về chúng tôi</h4><Link href="/ve-pallas">Câu chuyện thương hiệu</Link><Link href="/dai-ly">Trở thành đại lý</Link><Link href="/kien-thuc">Kiến thức chăm xe</Link><Link href="/lien-he">Liên hệ tư vấn</Link><Link href="/chinh-sach">Chính sách & lưu ý</Link></div>
 <div className="footer-col"><h4>Kết nối với PALLAS</h4><a href={`tel:${SITE.phone}`}><Phone size={16}/>{SITE.phoneDisplay}</a><a href={`mailto:${SITE.email}`} className="email-break"><Mail size={16}/>{SITE.email}</a><span><MapPin size={16}/>{SITE.address}</span><Link href="/lien-he" className="footer-learn">Gửi yêu cầu tư vấn <ArrowUpRight size={16}/></Link></div>
 </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} PALLAS Premium. PALLAS – Trung Niên.</span><span>Đặt hàng, thanh toán và vận chuyển được xác nhận khi liên hệ.</span></div></footer>}
