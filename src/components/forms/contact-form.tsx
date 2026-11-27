'use client';
import {useLanguage} from '@/components/i18n/language-provider';
import {T} from '@/components/i18n/t';
import { useMemo, useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, ClipboardCopy, Mail, MessageSquareText, ShieldCheck } from 'lucide-react';
import {useSite} from '@/components/layout/site-settings-provider';
import { contactMethods, contactTopics, dealerInterests, cleanFormText, validateContact, type ContactValues } from '@/lib/form-validation';
import { FormConsent, FormInput, FormSelect, FormTextarea } from './form-controls';
import {directEnquiryEnabled,submitDirectEnquiry} from '@/lib/netlify-forms';
const initialValues: ContactValues = {
    name: '', phone: '', email: '', topic: 'Tư vấn sản phẩm', contactMethod: 'Điện thoại',
    business: '', region: '', interest: '', message: '', consent: false,
};
type FieldName = keyof ContactValues;
export default function ContactForm({ type = 'contact' }: {
    type?: 'contact' | 'dealer';
}) {
    const SITE=useSite();
    const {tr,language}=useLanguage();
    const dealer = type === 'dealer';
    const [values, setValues] = useState<ContactValues>(initialValues);
    const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
    const [attempted, setAttempted] = useState(false);
    const [draft, setDraft] = useState('');
    const [copied, setCopied] = useState(false);
    const [copyFailed, setCopyFailed] = useState(false);
    const [sending,setSending]=useState(false);
    const [submitted,setSubmitted]=useState(false);
    const [sendError,setSendError]=useState(false);
    const [fallbackEmail,setFallbackEmail]=useState('');
    const formRef = useRef<HTMLFormElement>(null);
    const errors = useMemo(() => validateContact(values, dealer), [values, dealer]);
    const showError = (name: FieldName) => (attempted || touched[name]) ? errors[name] : undefined;
    const update = <K extends FieldName>(name: K, next: ContactValues[K]) => {
        setValues(prev => ({ ...prev, [name]: next }));
        setDraft('');
        setSubmitted(false);setSendError(false);
        setCopied(false);
        setCopyFailed(false);
    };
    const blur = (name: FieldName) => () => setTouched(prev => ({ ...prev, [name]: true }));
    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setAttempted(true);
        const nextErrors = validateContact(values, dealer);
        const first = Object.keys(nextErrors)[0];
        if (first) {
            formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
            return;
        }
        const lines = [
            `${tr('Họ và tên')}: ${cleanFormText(values.name)}`,
            `${tr('Điện thoại')}: ${cleanFormText(values.phone)}`,
            `Email: ${cleanFormText(values.email)}`,
            `${tr('Hình thức liên hệ mong muốn')}: ${tr(values.contactMethod)}`,
            ...(dealer ? [
                `${tr('Đơn vị/cửa hàng')}: ${cleanFormText(values.business)}`,
                `${tr('Khu vực hoạt động')}: ${cleanFormText(values.region)}`,
                `${tr('Nhu cầu hợp tác')}: ${tr(values.interest)}`,
            ] : [`${tr('Chủ đề')}: ${tr(values.topic)}`]),
            '',
            tr('NỘI DUNG:'), cleanFormText(values.message),
            '',
            tr('Vui lòng liên hệ để tư vấn và xác nhận thông tin.',false),
        ];
        const text = lines.join('\n');
        const subject = language==='en' ? (dealer?'PALLAS dealer partnership enquiry':'PALLAS product enquiry') : (dealer?'Yêu cầu hợp tác đại lý PALLAS':'Yêu cầu tư vấn PALLAS');
        setDraft(text);
        setCopied(false);
        setCopyFailed(false);
        const emailUrl=`mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
        setFallbackEmail(emailUrl);
        if(directEnquiryEnabled){
          setSending(true);setSendError(false);setSubmitted(false);
          try {
            await submitDirectEnquiry(dealer?'pallas-dealer':'pallas-contact',{
              name:cleanFormText(values.name),phone:cleanFormText(values.phone),email:cleanFormText(values.email),
              ...(dealer?{business:values.business,region:values.region,interest:values.interest}:{topic:values.topic}),
              contactMethod:values.contactMethod,message:cleanFormText(values.message),language,consent:values.consent,source:window.location.pathname
            });
            setSubmitted(true);
          } catch {setSendError(true)} finally {setSending(false)}
        } else window.location.href=emailUrl;
    }
    async function copyDraft() {
        try {
            await navigator.clipboard.writeText(draft);
            setCopied(true);
            setCopyFailed(false);
        }
        catch {
            setCopied(false);
            setCopyFailed(true);
        }
    }
    return <form className="contact-form pallas-form" ref={formRef} onSubmit={submit} noValidate>
    <div className="form-intro">
      <div className="form-intro-icon"><MessageSquareText size={22}/></div>
      <div><span className="form-step-label"><T vi={"01 / TH\u00D4NG TIN C\u1EE6A B\u1EA0N"}/></span><h3>{tr(dealer ? 'Thông tin đối tác' : 'Thông tin liên hệ')}</h3><p><T vi={"\u0110i\u1EC1n c\u00E1c m\u1EE5c b\u00EAn d\u01B0\u1EDBi \u0111\u1EC3 PALLAS chu\u1EA9n b\u1ECB n\u1ED9i dung ph\u1EA3n h\u1ED3i ph\u00F9 h\u1EE3p."}/></p></div>
    </div>
    <p className="form-required-note"><span aria-hidden="true">*</span><T vi={" Th\u00F4ng tin b\u1EAFt bu\u1ED9c"}/></p>
    {attempted && Object.keys(errors).length > 0 && <div className="form-validation-summary" role="alert"><T vi={"Vui l\u00F2ng ki\u1EC3m tra c\u00E1c tr\u01B0\u1EDDng \u0111\u01B0\u1EE3c \u0111\u00E1nh d\u1EA5u v\u00E0 th\u1EED l\u1EA1i."}/></div>}
    <div className="form-grid">
      <FormInput id="contact-name" name="name" label="Họ và tên" value={values.name} onChange={v => update('name', v)} onBlur={blur('name')} error={showError('name')} autoComplete="name" placeholder="Ví dụ: Nguyễn Văn An" maxLength={100} required/>
      <FormInput id="contact-phone" name="phone" label="Số điện thoại" value={values.phone} onChange={v => update('phone', v)} onBlur={blur('phone')} error={showError('phone')} type="tel" inputMode="tel" autoComplete="tel" placeholder="09xxxxxxxx" maxLength={20} required/>
      <FormInput id="contact-email" name="email" label="Địa chỉ email" value={values.email} onChange={v => update('email', v)} onBlur={blur('email')} error={showError('email')} type="email" autoComplete="email" placeholder="ten@example.com" maxLength={254} full required/>
    </div>

    <div className="form-section-divider"/>
    <div className="form-section-heading"><span className="form-step-label"><T vi={"02 / NHU C\u1EA6U"}/></span><h4>{tr(dealer ? 'Thông tin hợp tác' : 'Nội dung cần tư vấn')}</h4></div>
    <div className="form-grid">
      {dealer ? <>
        <FormInput id="contact-business" name="business" label="Tên doanh nghiệp / garage" value={values.business} onChange={v => update('business', v)} onBlur={blur('business')} error={showError('business')} placeholder="Tên công ty hoặc cửa hàng" maxLength={120} required/>
        <FormInput id="contact-region" name="region" label="Khu vực hoạt động" value={values.region} onChange={v => update('region', v)} onBlur={blur('region')} error={showError('region')} placeholder="Ví dụ: TP. Hồ Chí Minh" maxLength={120} required/>
        <FormSelect id="contact-interest" name="interest" label="Hình thức hợp tác" value={values.interest} onChange={v => update('interest', v)} onBlur={blur('interest')} error={showError('interest')} placeholder="Chọn nhu cầu hợp tác" options={dealerInterests} full required/>
      </> : <FormSelect id="contact-topic" name="topic" label="Bạn cần PALLAS hỗ trợ điều gì?" value={values.topic} onChange={v => update('topic', v)} onBlur={blur('topic')} error={showError('topic')} options={contactTopics} full required/>}
      <FormSelect id="contact-method" name="contactMethod" label="Bạn muốn được liên hệ qua" value={values.contactMethod} onChange={v => update('contactMethod', v)} onBlur={blur('contactMethod')} error={showError('contactMethod')} options={contactMethods} full required hint="PALLAS sẽ xem lựa chọn này khi nhận email của bạn."/>
      <FormTextarea id="contact-message" name="message" label={dealer ? 'Mô tả nhu cầu hợp tác' : 'Nội dung bạn muốn trao đổi'} value={values.message} onChange={v => update('message', v)} onBlur={blur('message')} error={showError('message')} placeholder={dealer ? 'Ví dụ: Chúng tôi cần báo giá cho 20 can PALLAS Nano 30...' : 'Ví dụ: Tôi cần tư vấn nước rửa xe cho tiệm 3 cầu nâng...'} hint="Mô tả rõ sản phẩm, số lượng và mong muốn của bạn để được tư vấn tốt hơn." maxLength={1200} full required/>
    </div>
    <FormConsent id="contact-consent" checked={values.consent} onChange={v => update('consent', v)} error={showError('consent')}>{directEnquiryEnabled?(language==='en'?'I agree to send these details to PALLAS through the website':'Tôi đồng ý gửi những thông tin này đến PALLAS qua biểu mẫu trên website'):<T vi={"\n      T\u00F4i \u0111\u1ED3ng \u00FD cung c\u1EA5p th\u00F4ng tin tr\u00EAn \u0111\u1EC3 PALLAS li\u00EAn h\u1EC7 theo y\u00EAu c\u1EA7u c\u1EE7a m\u00ECnh. D\u1EEF li\u1EC7u ch\u1EC9 \u0111\u01B0\u1EE3c g\u1EEDi khi t\u00F4i x\u00E1c nh\u1EADn g\u1EEDi trong \u1EE9ng d\u1EE5ng email.\n    "}/>}</FormConsent>
    <button type="submit" disabled={sending||submitted} className="btn btn-primary form-primary-action"><Mail size={18}/>{directEnquiryEnabled?(language==='en'?(sending?'Sending...':submitted?'Request received':'Send enquiry'):(sending?'Đang gửi...':submitted?'Đã gửi yêu cầu':'Gửi yêu cầu')):<T vi={" Chu\u1EA9n b\u1ECB email g\u1EEDi PALLAS "}/>}<ArrowUpRight size={18}/></button>
    {submitted&&<p className="form-direct-success" role="status">{language==='en'?'Your enquiry was submitted. PALLAS will contact you using the details provided':'Đã tiếp nhận yêu cầu trên hệ thống. PALLAS sẽ liên hệ theo thông tin bạn cung cấp'}</p>}
    {sendError&&<p className="form-validation-summary" role="alert">{language==='en'?'Automatic sending is unavailable. Please use the email fallback below':'Chưa gửi tự động được. Vui lòng dùng cách gửi qua email bên dưới'} {fallbackEmail&&<a className="form-fallback-link" href={fallbackEmail}>{language==='en'?'Open email':'Mở ứng dụng email'}</a>}</p>}
    {!directEnquiryEnabled&&<p className="form-process-note"><ShieldCheck size={17}/><T vi={" Website kh\u00F4ng t\u1EF1 g\u1EEDi ho\u1EB7c l\u01B0u bi\u1EC3u m\u1EABu. \u1EE8ng d\u1EE5ng email s\u1EBD m\u1EDF \u0111\u1EC3 b\u1EA1n ki\u1EC3m tra v\u00E0 nh\u1EA5n "}/><strong><T vi={"G\u1EEDi"}/></strong></p>}
    {draft && !submitted && <div className="form-draft-notice" role="status"><Check size={19}/><div><strong><T vi={"N\u1ED9i dung email \u0111\u00E3 s\u1EB5n s\u00E0ng"}/></strong><p><T vi={"N\u1EBFu \u1EE9ng d\u1EE5ng email kh\u00F4ng m\u1EDF, b\u1EA1n c\u00F3 th\u1EC3 sao ch\u00E9p n\u1ED9i dung v\u00E0 g\u1EEDi th\u1EE7 c\u00F4ng t\u1EDBi "}/><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p><button type="button" className="form-copy-button" onClick={copyDraft}><ClipboardCopy size={15}/>{tr(copied ? 'Đã sao chép' : 'Sao chép nội dung email')}</button>{copyFailed && <p className="form-field-error"><T vi={"Kh\u00F4ng th\u1EC3 sao ch\u00E9p t\u1EF1 \u0111\u1ED9ng. Vui l\u00F2ng m\u1EDF \u1EE9ng d\u1EE5ng email v\u00E0 th\u1EED l\u1EA1i."}/></p>}</div></div>}
  </form>;
}
