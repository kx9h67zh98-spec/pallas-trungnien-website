'use client';

import {useMemo,useRef,useState,type FormEvent} from 'react';
import Link from 'next/link';
import {ArrowRight,ArrowUpRight,Check,ClipboardCopy,Info,LockKeyhole,Mail,PackageCheck,Phone,ShieldCheck} from 'lucide-react';
import {getProduct} from '@/data/products';
import {SITE} from '@/data/site';
import {money} from '@/lib/format';
import {cleanFormText,contactMethods,validateCheckout,type CheckoutValues} from '@/lib/form-validation';
import {FormConsent,FormInput,FormSelect,FormTextarea} from '@/components/forms/form-controls';
import {useShop} from '@/components/shop/shop-provider';

const initial: CheckoutValues={name:'',phone:'',email:'',address:'',note:'',contactMethod:'Điện thoại',consent:false};
type FieldName=keyof CheckoutValues;

export default function Checkout(){
  const {items,subtotal}=useShop();
  const [values,setValues]=useState<CheckoutValues>(initial);
  const [touched,setTouched]=useState<Partial<Record<FieldName,boolean>>>({});
  const [attempted,setAttempted]=useState(false);
  const [draft,setDraft]=useState('');
  const [copied,setCopied]=useState(false);
  const [copyFailed,setCopyFailed]=useState(false);
  const formRef=useRef<HTMLFormElement>(null);
  const errors=useMemo(()=>validateCheckout(values),[values]);
  const hasUnpriced=items.some(x=>getProduct(x.slug)?.price==null);
  const showError=(name:FieldName)=>(attempted||touched[name])?errors[name]:undefined;
  const update=<K extends FieldName>(name:K,value:CheckoutValues[K])=>{
    setValues(prev=>({...prev,[name]:value}));setDraft('');setCopied(false);setCopyFailed(false);
  };
  const blur=(name:FieldName)=>()=>setTouched(prev=>({...prev,[name]:true}));

  function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setAttempted(true);
    const nextErrors=validateCheckout(values);
    const first=Object.keys(nextErrors)[0];
    if(first){formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();return}
    const lines=items.flatMap((item,index)=>{
      const product=getProduct(item.slug);
      if(!product)return [];
      return [`${index+1}. ${product.name} × ${item.quantity} — ${product.price!=null?money(product.price*item.quantity):'Liên hệ báo giá'}`];
    });
    const subject='Yêu cầu đặt hàng PALLAS – Trung Niên';
    const body=[
      'THÔNG TIN KHÁCH HÀNG',
      `Họ tên: ${cleanFormText(values.name)}`,
      `Số điện thoại: ${cleanFormText(values.phone)}`,
      `Email: ${cleanFormText(values.email)}`,
      `Địa chỉ giao hàng: ${cleanFormText(values.address)}`,
      `Phương thức liên hệ mong muốn: ${values.contactMethod}`,
      `Ghi chú: ${cleanFormText(values.note)||'Không có'}`,
      '', 'DANH SÁCH SẢN PHẨM', ...lines,
      '', `Tạm tính các sản phẩm có giá: ${subtotal===0&&hasUnpriced?'Liên hệ báo giá':money(subtotal)}`,
      ...(hasUnpriced?['Có sản phẩm chưa có giá; vui lòng xác nhận giá riêng.']:[]),
      'Vui lòng xác nhận tồn kho, giá cuối cùng, phí giao hàng, phương thức thanh toán và thời gian nhận hàng.',
      'Yêu cầu chỉ được gửi khi khách xác nhận Gửi trong ứng dụng email.',
    ].join('\n');
    setDraft(body);setCopied(false);setCopyFailed(false);
    window.location.href=`mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function copyDraft(){
    try{await navigator.clipboard.writeText(draft);setCopied(true);setCopyFailed(false)}
    catch{setCopied(false);setCopyFailed(true)}
  }

  return <>
    <div className="subpage-hero"><div className="container"><span className="eyebrow eyebrow-green">XÁC NHẬN NHU CẦU MUA HÀNG</span><h1>Hoàn tất yêu cầu <i>đặt hàng.</i></h1><p>Kiểm tra giỏ hàng và để lại thông tin. Nhân viên PALLAS sẽ liên hệ xác nhận trước khi giao.</p></div></div>
    <section className="section container checkout-page">
      {!items.length?<div className="cart-empty-page"><PackageCheck size={38}/><h2>Giỏ hàng đang trống</h2><p>Hãy lựa chọn sản phẩm phù hợp rồi quay lại để gửi yêu cầu.</p><Link href="/san-pham" className="btn btn-primary">Xem sản phẩm <ArrowRight size={18}/></Link></div>:
      <div className="checkout-grid checkout-grid-refined">
        <form id="checkout-form" className="checkout-form pallas-form" ref={formRef} onSubmit={submit} noValidate>
          <div className="form-intro"><div className="form-intro-icon"><LockKeyhole size={21}/></div><div><span className="form-step-label">01 / LIÊN HỆ</span><h2>Thông tin người nhận</h2><p>Thông tin chỉ dùng để PALLAS xác nhận yêu cầu và liên hệ giao hàng.</p></div></div>
          <p className="form-required-note"><span aria-hidden="true">*</span> Thông tin bắt buộc</p>
          {attempted&&Object.keys(errors).length>0&&<div className="form-validation-summary" role="alert">Vui lòng kiểm tra các trường được đánh dấu và thử lại.</div>}
          <div className="form-grid">
            <FormInput id="checkout-name" name="name" label="Họ và tên" value={values.name} onChange={v=>update('name',v)} onBlur={blur('name')} error={showError('name')} autoComplete="name" placeholder="Ví dụ: Nguyễn Văn An" maxLength={100} required/>
            <FormInput id="checkout-phone" name="phone" label="Số điện thoại" value={values.phone} onChange={v=>update('phone',v)} onBlur={blur('phone')} error={showError('phone')} type="tel" inputMode="tel" autoComplete="tel" placeholder="09xxxxxxxx" maxLength={20} required/>
            <FormInput id="checkout-email" name="email" label="Địa chỉ email" value={values.email} onChange={v=>update('email',v)} onBlur={blur('email')} error={showError('email')} type="email" autoComplete="email" placeholder="ten@example.com" maxLength={254} full required/>
          </div>
          <div className="form-section-divider"/>
          <div className="form-section-heading"><span className="form-step-label">02 / GIAO HÀNG</span><h4>Thông tin xác nhận</h4></div>
          <div className="form-grid">
            <FormInput id="checkout-address" name="address" label="Địa chỉ nhận hàng" value={values.address} onChange={v=>update('address',v)} onBlur={blur('address')} error={showError('address')} autoComplete="street-address" placeholder="Số nhà, đường, phường/xã, tỉnh/thành" maxLength={240} full required hint="Hãy ghi đầy đủ tỉnh/thành để được tư vấn phí vận chuyển."/>
            <FormSelect id="checkout-contactMethod" name="contactMethod" label="Xác nhận đơn qua" value={values.contactMethod} onChange={v=>update('contactMethod',v)} onBlur={blur('contactMethod')} error={showError('contactMethod')} options={contactMethods} full required/>
            <FormTextarea id="checkout-note" name="note" label="Ghi chú (không bắt buộc)" value={values.note} onChange={v=>update('note',v)} onBlur={blur('note')} error={showError('note')} maxLength={1000} rows={4} placeholder="Ví dụ: Giao trong giờ hành chính, cần xuất hóa đơn..." full/>
          </div>
          <FormConsent id="checkout-consent" checked={values.consent} onChange={v=>update('consent',v)} error={showError('consent')}>Tôi đồng ý cung cấp thông tin này để PALLAS liên hệ xác nhận đơn hàng. Tôi hiểu cần chủ động nhấn Gửi trong ứng dụng email.</FormConsent>
          <button type="submit" className="btn btn-primary form-primary-action"><Mail size={19}/> Chuẩn bị email yêu cầu đặt hàng <ArrowUpRight size={18}/></button>
          <p className="form-process-note"><ShieldCheck size={17}/> Website chưa tự động lưu đơn hàng hoặc thu tiền. Email sẽ mở để bạn kiểm tra và nhấn <strong>Gửi</strong>.</p>
          {draft&&<div className="form-draft-notice" role="status"><Check size={19}/><div><strong>Đã chuẩn bị nội dung yêu cầu</strong><p>Nếu ứng dụng email không mở, sao chép nội dung và gửi đến <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p><button type="button" className="form-copy-button" onClick={copyDraft}><ClipboardCopy size={15}/>{copied?'Đã sao chép':'Sao chép nội dung yêu cầu'}</button>{copyFailed&&<p className="form-field-error">Không thể sao chép tự động, vui lòng mở ứng dụng email.</p>}</div></div>}
        </form>
        <aside className="checkout-summary checkout-order-card">
          <div className="checkout-summary-heading"><span className="form-step-label">03 / ĐƠN HÀNG</span><h3>Đơn hàng của bạn</h3><p>{items.reduce((acc,item)=>acc+item.quantity,0)} sản phẩm trong giỏ</p></div>
          {items.map(item=>{const product=getProduct(item.slug);if(!product)return null;return <div key={item.slug} className="checkout-product"><span>{product.shortName}<small> × {item.quantity}</small></span><strong>{product.price!=null?money(product.price*item.quantity):'Liên hệ báo giá'}</strong></div>})}
          <div className="summary-total"><span>{hasUnpriced?'Tạm tính sản phẩm đã có giá':'Tạm tính'}</span><strong>{subtotal===0&&hasUnpriced?'Liên hệ báo giá':money(subtotal)}</strong></div>
          <div className="checkout-price-note"><Info size={17}/><p>Phí vận chuyển, tồn kho và giá cuối cùng sẽ được xác nhận sau khi PALLAS nhận yêu cầu.{hasUnpriced?' Một số mặt hàng cần báo giá riêng.':''}</p></div>
          <Link href="/gio-hang" className="checkout-edit-link">Chỉnh sửa giỏ hàng <ArrowRight size={16}/></Link>
          <a className="checkout-support" href={`tel:${SITE.phone}`}><Phone size={17}/> Cần tư vấn? {SITE.phoneDisplay}</a>
        </aside>
      </div>}
    </section>
  </>;
}
