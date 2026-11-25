'use client';
import {useEffect,useRef,useState,type FormEvent} from 'react';
import {MessageSquareText,X,Mail,ClipboardCopy,Check,Phone} from 'lucide-react';
import type {Product} from '@/types';
import {SITE} from '@/data/site';
import {useLanguage} from '@/components/i18n/language-provider';
import {validateName,validatePhone,cleanFormText} from '@/lib/form-validation';
import {isValidQuoteQuantity,quoteEmail} from '@/lib/product-experience';

export default function QuickQuote({product,quantity=1}:{product:Product;quantity?:number}){
  const {language,tr}=useLanguage();
  const en=language==='en';
  const [open,setOpen]=useState(false);
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [note,setNote]=useState('');
  const [qty,setQty]=useState(quantity);
  const [consent,setConsent]=useState(false);
  const [attempted,setAttempted]=useState(false);
  const [draft,setDraft]=useState('');
  const [copied,setCopied]=useState(false);
  const [copyError,setCopyError]=useState(false);
  const firstInput=useRef<HTMLInputElement>(null);
  const phoneInput=useRef<HTMLInputElement>(null);
  const qtyInput=useRef<HTMLInputElement>(null);
  const consentInput=useRef<HTMLInputElement>(null);
  const trigger=useRef<HTMLButtonElement>(null);
  const modal=useRef<HTMLDivElement>(null);
  const wasOpen=useRef(false);
  useEffect(()=>{
    if(!open){if(wasOpen.current)trigger.current?.focus();wasOpen.current=false;return}
    wasOpen.current=true;
    const originalOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
    firstInput.current?.focus();
    const onKey=(e:KeyboardEvent)=>{
      if(e.key==='Escape'){e.preventDefault();setOpen(false)}
      if(e.key!=='Tab'||!modal.current)return;
      const controls=Array.from(modal.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled])'));
      const first=controls[0],last=controls[controls.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus()}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}
    };
    document.addEventListener('keydown',onKey);
    return()=>{document.removeEventListener('keydown',onKey);document.body.style.overflow=originalOverflow};
  },[open]);
  const nameError=attempted?validateName(name):undefined;
  const phoneError=attempted?validatePhone(phone):undefined;
  const qtyError=attempted&&!isValidQuoteQuantity(qty);
  const consentError=attempted&&!consent;
  const close=()=>{setOpen(false);setAttempted(false);setCopied(false);setCopyError(false);setDraft('')};
  function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();setAttempted(true);
    if(validateName(name)||validatePhone(phone)||!isValidQuoteQuantity(qty)||!consent){
      if(validateName(name))firstInput.current?.focus();
      else if(validatePhone(phone))phoneInput.current?.focus();
      else if(!isValidQuoteQuantity(qty))qtyInput.current?.focus();
      else consentInput.current?.focus();
      return;
    }
    const message=quoteEmail({name:cleanFormText(name),phone:cleanFormText(phone),note:cleanFormText(note),product:{...product,name:tr(product.name)},quantity:qty,email:SITE.email,language});
    setDraft(message.text);setCopied(false);window.location.href=message.url;
  }
  async function copy(){try{await navigator.clipboard.writeText(draft);setCopied(true);setCopyError(false)}catch{setCopyError(true)}}
  return <>
    <button type="button" className="btn btn-outline quote-trigger" ref={trigger} onClick={()=>{setQty(quantity);setOpen(true)}}><MessageSquareText size={18}/>{en?'Quick quote':'Báo giá nhanh'}</button>
    {open&&<div className="experience-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)close()}}>
      <div ref={modal} className="experience-dialog quote-dialog" role="dialog" aria-modal="true" aria-labelledby="quick-quote-heading">
        <div className="experience-dialog-head"><div><span className="experience-eyebrow">PALLAS / {en?'PRODUCT ENQUIRY':'YÊU CẦU BÁO GIÁ'}</span><h2 id="quick-quote-heading">{en?'Get a quotation':'Nhận báo giá sản phẩm'}</h2></div><button type="button" className="experience-close" aria-label={en?'Close':'Đóng'} onClick={close}><X size={21}/></button></div>
        <p className="quote-product-name">{tr(product.name)} <small>· {product.volume}</small></p>
        <form className="quote-fields" noValidate onSubmit={submit}>
          <div className="quote-field"><label htmlFor="quote-name">{en?'Full name':'Họ và tên'} <b>*</b></label><input ref={firstInput} id="quote-name" autoComplete="name" value={name} maxLength={100} aria-invalid={Boolean(nameError)} aria-describedby={nameError?'quote-name-error':undefined} onChange={e=>{setName(e.target.value);setDraft('')}} placeholder={en?'Your full name':'Tên của bạn'}/>{nameError&&<span className="quote-error" id="quote-name-error" role="alert">{tr(nameError)}</span>}</div>
          <div className="quote-field"><label htmlFor="quote-phone">{en?'Phone number':'Số điện thoại'} <b>*</b></label><input ref={phoneInput} id="quote-phone" type="tel" inputMode="tel" autoComplete="tel" value={phone} maxLength={20} aria-invalid={Boolean(phoneError)} aria-describedby={phoneError?'quote-phone-error':undefined} onChange={e=>{setPhone(e.target.value);setDraft('')}} placeholder="09xxxxxxxx"/>{phoneError&&<span className="quote-error" id="quote-phone-error" role="alert">{tr(phoneError)}</span>}</div>
          <div className="quote-field"><label htmlFor="quote-quantity">{en?'Quantity':'Số lượng'} <b>*</b></label><input ref={qtyInput} id="quote-quantity" type="number" min={1} max={99} step={1} value={qty} aria-invalid={Boolean(qtyError)} aria-describedby={qtyError?'quote-qty-error':undefined} onChange={e=>{setQty(Number(e.target.value));setDraft('')}}/>{qtyError&&<span className="quote-error" id="quote-qty-error" role="alert">{en?'Enter a whole number from 1 to 99':'Nhập số nguyên từ 1 đến 99'}</span>}</div>
          <div className="quote-field quote-field-wide"><label htmlFor="quote-note">{en?'Notes (optional)':'Ghi chú (không bắt buộc)'}</label><textarea id="quote-note" rows={3} maxLength={500} value={note} onChange={e=>{setNote(e.target.value);setDraft('')}} placeholder={en?'Delivery area or your business needs':'Khu vực giao hàng hoặc nhu cầu của bạn'}/></div>
          <label className="quote-consent quote-field-wide"><input ref={consentInput} type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)}/><span>{en?'I agree to include these details in an email to PALLAS':'Tôi đồng ý đưa thông tin trên vào email yêu cầu gửi đến PALLAS'}</span></label>
          {consentError&&<span className="quote-error quote-field-wide" role="alert">{en?'Please confirm before proceeding':'Vui lòng xác nhận trước khi tiếp tục'}</span>}
          <button type="submit" className="btn btn-primary quote-submit"><Mail size={18}/>{en?'Prepare quotation email':'Chuẩn bị email báo giá'}</button>
          <p className="quote-privacy"><Phone size={15}/>{en?'You must press Send in your email app. No order is stored or paid for here':'Bạn cần nhấn Gửi trong ứng dụng email. Website chưa lưu đơn hoặc thu tiền'}</p>
        </form>
        {draft&&<div className="quote-draft" role="status"><strong>{en?'Your email draft is ready':'Nội dung email đã sẵn sàng'}</strong><p>{en?'If your email app did not open, copy the request and email it to':'Nếu ứng dụng email không mở, hãy sao chép nội dung và gửi thủ công tới'} {SITE.email}</p><button type="button" className="quote-copy" onClick={copy}>{copied?<Check size={17}/>:<ClipboardCopy size={17}/>} {copied?(en?'Copied':'Đã sao chép'):(en?'Copy email text':'Sao chép nội dung')}</button>{copyError&&<span className="quote-error">{en?'Clipboard unavailable. Please use your email app':'Không thể sao chép tự động, vui lòng dùng ứng dụng email'}</span>}</div>}
      </div>
    </div>}
  </>;
}
