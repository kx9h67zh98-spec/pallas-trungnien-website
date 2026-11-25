'use client';

import {useMemo,useRef,useState,type FormEvent} from 'react';
import {ArrowUpRight,Check,ClipboardCopy,Mail,MessageSquareText,ShieldCheck} from 'lucide-react';
import {SITE} from '@/data/site';
import {contactMethods,contactTopics,dealerInterests,cleanFormText,validateContact,type ContactValues} from '@/lib/form-validation';
import {FormConsent,FormInput,FormSelect,FormTextarea} from './form-controls';

const initialValues:ContactValues={
  name:'',phone:'',email:'',topic:'Tư vấn sản phẩm',contactMethod:'Điện thoại',
  business:'',region:'',interest:'',message:'',consent:false,
};

type FieldName=keyof ContactValues;

export default function ContactForm({type='contact'}:{type?:'contact'|'dealer'}){
  const dealer=type==='dealer';
  const [values,setValues]=useState<ContactValues>(initialValues);
  const [touched,setTouched]=useState<Partial<Record<FieldName,boolean>>>({});
  const [attempted,setAttempted]=useState(false);
  const [draft,setDraft]=useState('');
  const [copied,setCopied]=useState(false);
  const [copyFailed,setCopyFailed]=useState(false);
  const formRef=useRef<HTMLFormElement>(null);
  const errors=useMemo(()=>validateContact(values,dealer),[values,dealer]);
  const showError=(name:FieldName)=>(attempted||touched[name])?errors[name]:undefined;
  const update=<K extends FieldName>(name:K,next:ContactValues[K])=>{
    setValues(prev=>({...prev,[name]:next}));
    setDraft('');setCopied(false);setCopyFailed(false);
  };
  const blur=(name:FieldName)=>()=>setTouched(prev=>({...prev,[name]:true}));

  function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setAttempted(true);
    const nextErrors=validateContact(values,dealer);
    const first=Object.keys(nextErrors)[0];
    if(first){formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();return}
    const lines=[
      `Họ và tên: ${cleanFormText(values.name)}`,
      `Điện thoại: ${cleanFormText(values.phone)}`,
      `Email: ${cleanFormText(values.email)}`,
      `Hình thức liên hệ mong muốn: ${values.contactMethod}`,
      ...(dealer?[
        `Đơn vị/cửa hàng: ${cleanFormText(values.business)}`,
        `Khu vực hoạt động: ${cleanFormText(values.region)}`,
        `Nhu cầu hợp tác: ${values.interest}`,
      ]:[`Chủ đề: ${values.topic}`]),
      '',
      'NỘI DUNG:',cleanFormText(values.message),
      '',
      'Vui lòng liên hệ để tư vấn và xác nhận thông tin.',
    ];
    const text=lines.join('\n');
    const subject=dealer?'Yêu cầu hợp tác đại lý PALLAS':'Yêu cầu tư vấn PALLAS';
    setDraft(text);setCopied(false);setCopyFailed(false);
    window.location.href=`mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  }

  async function copyDraft(){
    try{await navigator.clipboard.writeText(draft);setCopied(true);setCopyFailed(false)}
    catch{setCopied(false);setCopyFailed(true)}
  }

  return <form className="contact-form pallas-form" ref={formRef} onSubmit={submit} noValidate>
    <div className="form-intro">
      <div className="form-intro-icon"><MessageSquareText size={22}/></div>
      <div><span className="form-step-label">01 / THÔNG TIN CỦA BẠN</span><h3>{dealer?'Thông tin đối tác':'Thông tin liên hệ'}</h3><p>Điền các mục bên dưới để PALLAS chuẩn bị nội dung phản hồi phù hợp.</p></div>
    </div>
    <p className="form-required-note"><span aria-hidden="true">*</span> Thông tin bắt buộc</p>
    {attempted&&Object.keys(errors).length>0&&<div className="form-validation-summary" role="alert">Vui lòng kiểm tra các trường được đánh dấu và thử lại.</div>}
    <div className="form-grid">
      <FormInput id="contact-name" name="name" label="Họ và tên" value={values.name} onChange={v=>update('name',v)} onBlur={blur('name')} error={showError('name')} autoComplete="name" placeholder="Ví dụ: Nguyễn Văn An" maxLength={100} required/>
      <FormInput id="contact-phone" name="phone" label="Số điện thoại" value={values.phone} onChange={v=>update('phone',v)} onBlur={blur('phone')} error={showError('phone')} type="tel" inputMode="tel" autoComplete="tel" placeholder="09xxxxxxxx" maxLength={20} required/>
      <FormInput id="contact-email" name="email" label="Địa chỉ email" value={values.email} onChange={v=>update('email',v)} onBlur={blur('email')} error={showError('email')} type="email" autoComplete="email" placeholder="ten@example.com" maxLength={254} full required/>
    </div>

    <div className="form-section-divider"/>
    <div className="form-section-heading"><span className="form-step-label">02 / NHU CẦU</span><h4>{dealer?'Thông tin hợp tác':'Nội dung cần tư vấn'}</h4></div>
    <div className="form-grid">
      {dealer?<>
        <FormInput id="contact-business" name="business" label="Tên doanh nghiệp / garage" value={values.business} onChange={v=>update('business',v)} onBlur={blur('business')} error={showError('business')} placeholder="Tên công ty hoặc cửa hàng" maxLength={120} required/>
        <FormInput id="contact-region" name="region" label="Khu vực hoạt động" value={values.region} onChange={v=>update('region',v)} onBlur={blur('region')} error={showError('region')} placeholder="Ví dụ: TP. Hồ Chí Minh" maxLength={120} required/>
        <FormSelect id="contact-interest" name="interest" label="Hình thức hợp tác" value={values.interest} onChange={v=>update('interest',v)} onBlur={blur('interest')} error={showError('interest')} placeholder="Chọn nhu cầu hợp tác" options={dealerInterests} full required/>
      </>:<FormSelect id="contact-topic" name="topic" label="Bạn cần PALLAS hỗ trợ điều gì?" value={values.topic} onChange={v=>update('topic',v)} onBlur={blur('topic')} error={showError('topic')} options={contactTopics} full required/>}
      <FormSelect id="contact-method" name="contactMethod" label="Bạn muốn được liên hệ qua" value={values.contactMethod} onChange={v=>update('contactMethod',v)} onBlur={blur('contactMethod')} error={showError('contactMethod')} options={contactMethods} full required hint="PALLAS sẽ xem lựa chọn này khi nhận email của bạn."/>
      <FormTextarea id="contact-message" name="message" label={dealer?'Mô tả nhu cầu hợp tác':'Nội dung bạn muốn trao đổi'} value={values.message} onChange={v=>update('message',v)} onBlur={blur('message')} error={showError('message')} placeholder={dealer?'Ví dụ: Chúng tôi cần báo giá cho 20 can PALLAS Nano 30...':'Ví dụ: Tôi cần tư vấn nước rửa xe cho tiệm 3 cầu nâng...'} hint="Mô tả rõ sản phẩm, số lượng và mong muốn của bạn để được tư vấn tốt hơn." maxLength={1200} full required/>
    </div>
    <FormConsent id="contact-consent" checked={values.consent} onChange={v=>update('consent',v)} error={showError('consent')}>
      Tôi đồng ý cung cấp thông tin trên để PALLAS liên hệ theo yêu cầu của mình. Dữ liệu chỉ được gửi khi tôi xác nhận gửi trong ứng dụng email.
    </FormConsent>
    <button type="submit" className="btn btn-primary form-primary-action"><Mail size={18}/> Chuẩn bị email gửi PALLAS <ArrowUpRight size={18}/></button>
    <p className="form-process-note"><ShieldCheck size={17}/> Website không tự gửi hoặc lưu biểu mẫu. Ứng dụng email sẽ mở để bạn kiểm tra và nhấn <strong>Gửi</strong>.</p>
    {draft&&<div className="form-draft-notice" role="status"><Check size={19}/><div><strong>Nội dung email đã sẵn sàng</strong><p>Nếu ứng dụng email không mở, bạn có thể sao chép nội dung và gửi thủ công tới <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p><button type="button" className="form-copy-button" onClick={copyDraft}><ClipboardCopy size={15}/>{copied?'Đã sao chép':'Sao chép nội dung email'}</button>{copyFailed&&<p className="form-field-error">Không thể sao chép tự động. Vui lòng mở ứng dụng email và thử lại.</p>}</div></div>}
  </form>;
}
