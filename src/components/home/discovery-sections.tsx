import Link from 'next/link';
import {ArrowUpRight,Box,ClipboardCheck,Headphones,ShieldCheck,Search,ChevronRight} from 'lucide-react';
import {T} from '@/components/i18n/t';
import type {Promotion} from '@/lib/content';

/** Browsing help, no unverifiable performance or commercial promises. */
export function DiscoveryGuide(){return <section className="section v19-discovery" aria-labelledby="guide-title"><div className="container">
  <div className="v19-section-head"><div><span className="eyebrow eyebrow-green"><T vi="TÌM ĐÚNG GIẢI PHÁP"/></span><h2 id="guide-title"><T vi="Bạn cần chăm sóc"/> <i><T vi="phần nào của xe?"/></i></h2><p><T vi="Chọn nhóm sản phẩm theo nhu cầu hoặc hỏi trực tiếp PALLAS để được tư vấn"/></p></div><Link className="text-link" href="/san-pham"><T vi="Khám phá toàn bộ"/> <ArrowUpRight size={18}/></Link></div>
  <div className="v19-discovery-grid">
    <Link href="/san-pham?category=foam" className="v19-discovery-card v19-discovery-card-featured"><div className="v19-discovery-art"><span>01</span><Box size={44} strokeWidth={1.35}/></div><div><small><T vi="CHĂM SÓC HẰNG NGÀY"/></small><h3><T vi="Bọt tuyết rửa xe"/></h3><p><T vi="Khám phá các dòng PALLAS 60, 80, 120 và hương trái cây"/></p><span className="v19-discovery-action"><T vi="Xem sản phẩm"/> <ArrowUpRight size={17}/></span></div></Link>
    <Link href="/san-pham?category=touchless" className="v19-discovery-card"><div className="v19-discovery-art"><span>02</span><Search size={42} strokeWidth={1.35}/></div><div><small><T vi="GIẢI PHÁP CHUYÊN DỤNG"/></small><h3><T vi="Rửa xe không chạm"/></h3><p><T vi="Tìm hiểu dòng Nano 30 và Nano EX theo từng quy cách"/></p><span className="v19-discovery-action"><T vi="Khám phá dòng sản phẩm"/> <ArrowUpRight size={17}/></span></div></Link>
    <Link href="/san-pham?category=wax" className="v19-discovery-card"><div className="v19-discovery-art"><span>03</span><ShieldCheck size={42} strokeWidth={1.35}/></div><div><small><T vi="HOÀN THIỆN BỀ MẶT"/></small><h3><T vi="Wax & dưỡng bóng"/></h3><p><T vi="Các nhóm sản phẩm dành cho sơn, lốp và nội thất"/></p><span className="v19-discovery-action"><T vi="Xem các lựa chọn"/> <ArrowUpRight size={17}/></span></div></Link>
  </div>
 </div></section>}

export function PurchaseSteps(){return <section className="section v19-process" aria-labelledby="process-title"><div className="container"><div className="v19-process-top"><div><span className="eyebrow"><T vi="MUA HÀNG ĐƠN GIẢN"/></span><h2 id="process-title"><T vi="Từ lựa chọn đến"/> <i><T vi="được tư vấn"/></i></h2><p><T vi="Website giúp bạn chuẩn bị yêu cầu; giá cuối, phí vận chuyển và tình trạng hàng sẽ được PALLAS xác nhận"/></p></div><Link href="/lien-he" className="btn btn-lime"><T vi="Liên hệ PALLAS"/><ArrowUpRight size={17}/></Link></div>
 <div className="v19-step-grid"><div className="v19-step"><span>01</span><Search size={27}/><h3><T vi="Khám phá sản phẩm"/></h3><p><T vi="Tìm kiếm, lọc danh mục, chọn dung tích và so sánh các mã phù hợp"/></p></div><div className="v19-step"><span>02</span><ClipboardCheck size={27}/><h3><T vi="Gửi yêu cầu"/></h3><p><T vi="Cho sản phẩm vào giỏ hoặc gửi báo giá nhanh với thông tin liên hệ"/></p></div><div className="v19-step"><span>03</span><Headphones size={27}/><h3><T vi="Nhận xác nhận"/></h3><p><T vi="Đội ngũ PALLAS trao đổi về giá, tồn kho, vận chuyển và cách thanh toán"/></p></div></div>
 </div></section>}

export function CustomerFAQ(){return <section className="section v19-faq" aria-labelledby="faq-title"><div className="container v19-faq-grid"><div><span className="eyebrow eyebrow-green"><T vi="CÂU HỎI THƯỜNG GẶP"/></span><h2 id="faq-title"><T vi="Những điều bạn"/><br/><i><T vi="cần biết"/></i></h2><p><T vi="Thông tin rõ ràng giúp bạn yên tâm hơn khi gửi yêu cầu và chọn sản phẩm"/></p><Link className="text-link" href="/chinh-sach"><T vi="Xem chính sách"/> <ChevronRight size={16}/></Link></div><div className="v19-faq-questions">
 <details><summary><T vi="Giá trên website có phải giá thanh toán cuối cùng không?"/></summary><p><T vi="Giá hiển thị theo bảng giá ngày 15/03/2026, đã bao gồm thuế. PALLAS sẽ xác nhận lại giá hiện hành, tồn kho và phí giao hàng trước khi chốt đơn" compact={false}/></p></details>
 <details><summary><T vi="Có thể nhận báo giá số lượng lớn cho garage không?"/></summary><p><T vi="Có thể gửi nhu cầu và số lượng qua nút Báo giá nhanh hoặc trang Dành cho đại lý để PALLAS liên hệ tư vấn" compact={false}/></p></details>
 <details><summary><T vi="Website đã hỗ trợ thanh toán trực tuyến chưa?"/></summary><p><T vi="Hiện website tiếp nhận yêu cầu mua hàng, chưa thu tiền trực tuyến. Phương thức thanh toán được thống nhất khi PALLAS xác nhận yêu cầu" compact={false}/></p></details>
 <details><summary><T vi="Làm sao chọn đúng tỷ lệ pha và cách sử dụng?"/></summary><p><T vi="Vui lòng tham khảo nhãn và tài liệu kỹ thuật của đúng mã sản phẩm. Không tự suy đoán tỷ lệ pha chỉ từ tên hoặc màu bao bì" compact={false}/></p></details>
 </div></div></section>}

export function PromotionSpotlight({promotion}:{promotion:Promotion|null}){
 if(!promotion)return null;
 const path=promotion.url&&(/^(\/[^\/]|https:\/\/)/.test(promotion.url))?promotion.url:'/lien-he';
 return <section className="v19-promo"><div className="container v19-promo-inner"><span className="v19-promo-tag"><T vi="ƯU ĐÃI ĐANG ÁP DỤNG"/></span><div><h2>{promotion.title}</h2>{promotion.description&&<p>{promotion.description}</p>}</div><Link className="btn btn-lime" href={path}><T vi="Tìm hiểu thêm"/><ArrowUpRight size={17}/></Link></div></section>;
}
