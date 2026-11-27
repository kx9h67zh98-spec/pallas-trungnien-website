'use client';
import {useLanguage} from '@/components/i18n/language-provider';
import {T} from '@/components/i18n/t';
import { useMemo, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, ClipboardCopy, Info, LockKeyhole, Mail, PackageCheck, Phone, ShieldCheck } from 'lucide-react';
import {useSite} from '@/components/layout/site-settings-provider';
import { money } from '@/lib/format';
import { cleanFormText, contactMethods, validateCheckout, type CheckoutValues } from '@/lib/form-validation';
import { FormConsent, FormInput, FormSelect, FormTextarea } from '@/components/forms/form-controls';
import {directEnquiryEnabled,submitDirectEnquiry} from '@/lib/netlify-forms';
import { useShop } from '@/components/shop/shop-provider';
const initial: CheckoutValues = { name: '', phone: '', email: '', address: '', note: '', contactMethod: 'Điện thoại', consent: false };
type FieldName = keyof CheckoutValues;
export default function Checkout() {
    const SITE=useSite();
    const {tr,language}=useLanguage();
    const { items, subtotal, findProduct } = useShop();
    const [values, setValues] = useState<CheckoutValues>(initial);
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
    const errors = useMemo(() => validateCheckout(values), [values]);
    const hasUnpriced = items.some(x => findProduct(x.slug)?.price == null);
    const showError = (name: FieldName) => (attempted || touched[name]) ? errors[name] : undefined;
    const update = <K extends FieldName>(name: K, value: CheckoutValues[K]) => {
        setValues(prev => ({ ...prev, [name]: value }));
        setDraft('');
        setSubmitted(false);setSendError(false);
        setCopied(false);
        setCopyFailed(false);
    };
    const blur = (name: FieldName) => () => setTouched(prev => ({ ...prev, [name]: true }));
    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setAttempted(true);
        const nextErrors = validateCheckout(values);
        const first = Object.keys(nextErrors)[0];
        if (first) {
            formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
            return;
        }
        const lines = items.flatMap((item, index) => {
            const product = findProduct(item.slug);
            if (!product)
                return [];
            return [`${index + 1}. ${tr(product.name,false)} × ${item.quantity} — ${product.price != null ? money(product.price * item.quantity) : tr('Liên hệ báo giá')}`];
        });
        const subject = language==='en'?'PALLAS – Trung Niên order enquiry':'Yêu cầu đặt hàng PALLAS – Trung Niên';
        const body = [
            tr('THÔNG TIN KHÁCH HÀNG'),
            `${tr('Họ tên')}: ${cleanFormText(values.name)}`,
            `${tr('Số điện thoại')}: ${cleanFormText(values.phone)}`,
            `Email: ${cleanFormText(values.email)}`,
            `${tr('Địa chỉ giao hàng')}: ${cleanFormText(values.address)}`,
            `${tr('Phương thức liên hệ mong muốn')}: ${tr(values.contactMethod)}`,
            `${tr('Ghi chú')}: ${cleanFormText(values.note) || tr('Không có')}`,
            '', tr('DANH SÁCH SẢN PHẨM'), ...lines,
            '', `${tr("Tạm tính các sản phẩm có giá:")} ${subtotal === 0 && hasUnpriced ? tr('Liên hệ báo giá') : money(subtotal)}`,
            ...(hasUnpriced ? [tr('Có sản phẩm chưa có giá; vui lòng xác nhận giá riêng.',false)] : []),
            tr('Vui lòng xác nhận tồn kho, giá cuối cùng, phí giao hàng, phương thức thanh toán và thời gian nhận hàng.',false),
            tr('Yêu cầu chỉ được gửi khi khách xác nhận Gửi trong ứng dụng email.',false),
        ].join('\n');
        setDraft(body);
        setCopied(false);
        setCopyFailed(false);
        const emailUrl=`mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setFallbackEmail(emailUrl);
        if(directEnquiryEnabled){
          setSending(true);setSendError(false);setSubmitted(false);
          try {
            await submitDirectEnquiry('pallas-order',{
              name:values.name,phone:values.phone,email:values.email,address:values.address,
              contactMethod:values.contactMethod,note:values.note,orderLines:lines.join('\n'),
              subtotal:subtotal,language,consent:values.consent,source:window.location.pathname
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
    return <>
    <div className="subpage-hero"><div className="container"><span className="eyebrow eyebrow-green"><T vi={"X\u00C1C NH\u1EACN NHU C\u1EA6U MUA H\u00C0NG"}/></span><h1><T vi={"Ho\u00E0n t\u1EA5t y\u00EAu c\u1EA7u "}/><i><T vi={"\u0111\u1EB7t h\u00E0ng."}/></i></h1><p><T vi={"Ki\u1EC3m tra gi\u1ECF h\u00E0ng v\u00E0 \u0111\u1EC3 l\u1EA1i th\u00F4ng tin. Nh\u00E2n vi\u00EAn PALLAS s\u1EBD li\u00EAn h\u1EC7 x\u00E1c nh\u1EADn tr\u01B0\u1EDBc khi giao."}/></p></div></div>
    <section className="section container checkout-page">
      {!items.length ? <div className="cart-empty-page"><PackageCheck size={38}/><h2><T vi={"Gi\u1ECF h\u00E0ng \u0111ang tr\u1ED1ng"}/></h2><p><T vi={"H\u00E3y l\u1EF1a ch\u1ECDn s\u1EA3n ph\u1EA9m ph\u00F9 h\u1EE3p r\u1ED3i quay l\u1EA1i \u0111\u1EC3 g\u1EEDi y\u00EAu c\u1EA7u."}/></p><Link href="/san-pham" className="btn btn-primary"><T vi={"Xem s\u1EA3n ph\u1EA9m "}/><ArrowRight size={18}/></Link></div> :
            <div className="checkout-grid checkout-grid-refined">
        <form id="checkout-form" className="checkout-form pallas-form" ref={formRef} onSubmit={submit} noValidate>
          <div className="form-intro"><div className="form-intro-icon"><LockKeyhole size={21}/></div><div><span className="form-step-label"><T vi={"01 / LI\u00CAN H\u1EC6"}/></span><h2><T vi={"Th\u00F4ng tin ng\u01B0\u1EDDi nh\u1EADn"}/></h2><p><T vi={"Th\u00F4ng tin ch\u1EC9 d\u00F9ng \u0111\u1EC3 PALLAS x\u00E1c nh\u1EADn y\u00EAu c\u1EA7u v\u00E0 li\u00EAn h\u1EC7 giao h\u00E0ng."}/></p></div></div>
          <p className="form-required-note"><span aria-hidden="true">*</span><T vi={" Th\u00F4ng tin b\u1EAFt bu\u1ED9c"}/></p>
          {attempted && Object.keys(errors).length > 0 && <div className="form-validation-summary" role="alert"><T vi={"Vui l\u00F2ng ki\u1EC3m tra c\u00E1c tr\u01B0\u1EDDng \u0111\u01B0\u1EE3c \u0111\u00E1nh d\u1EA5u v\u00E0 th\u1EED l\u1EA1i."}/></div>}
          <div className="form-grid">
            <FormInput id="checkout-name" name="name" label="Họ và tên" value={values.name} onChange={v => update('name', v)} onBlur={blur('name')} error={showError('name')} autoComplete="name" placeholder="Ví dụ: Nguyễn Văn An" maxLength={100} required/>
            <FormInput id="checkout-phone" name="phone" label="Số điện thoại" value={values.phone} onChange={v => update('phone', v)} onBlur={blur('phone')} error={showError('phone')} type="tel" inputMode="tel" autoComplete="tel" placeholder="09xxxxxxxx" maxLength={20} required/>
            <FormInput id="checkout-email" name="email" label="Địa chỉ email" value={values.email} onChange={v => update('email', v)} onBlur={blur('email')} error={showError('email')} type="email" autoComplete="email" placeholder="ten@example.com" maxLength={254} full required/>
          </div>
          <div className="form-section-divider"/>
          <div className="form-section-heading"><span className="form-step-label"><T vi={"02 / GIAO H\u00C0NG"}/></span><h4><T vi={"Th\u00F4ng tin x\u00E1c nh\u1EADn"}/></h4></div>
          <div className="form-grid">
            <FormInput id="checkout-address" name="address" label="Địa chỉ nhận hàng" value={values.address} onChange={v => update('address', v)} onBlur={blur('address')} error={showError('address')} autoComplete="street-address" placeholder="Số nhà, đường, phường/xã, tỉnh/thành" maxLength={240} full required hint="Hãy ghi đầy đủ tỉnh/thành để được tư vấn phí vận chuyển."/>
            <FormSelect id="checkout-contactMethod" name="contactMethod" label="Xác nhận đơn qua" value={values.contactMethod} onChange={v => update('contactMethod', v)} onBlur={blur('contactMethod')} error={showError('contactMethod')} options={contactMethods} full required/>
            <FormTextarea id="checkout-note" name="note" label="Ghi chú (không bắt buộc)" value={values.note} onChange={v => update('note', v)} onBlur={blur('note')} error={showError('note')} maxLength={1000} rows={4} placeholder="Ví dụ: Giao trong giờ hành chính, cần xuất hóa đơn..." full/>
          </div>
          <FormConsent id="checkout-consent" checked={values.consent} onChange={v => update('consent', v)} error={showError('consent')}>{directEnquiryEnabled?<T vi="Tôi đồng ý gửi thông tin này đến PALLAS qua biểu mẫu trên website để được liên hệ xác nhận"/>:<T vi={"T\u00F4i \u0111\u1ED3ng \u00FD cung c\u1EA5p th\u00F4ng tin n\u00E0y \u0111\u1EC3 PALLAS li\u00EAn h\u1EC7 x\u00E1c nh\u1EADn \u0111\u01A1n h\u00E0ng. T\u00F4i hi\u1EC3u c\u1EA7n ch\u1EE7 \u0111\u1ED9ng nh\u1EA5n G\u1EEDi trong \u1EE9ng d\u1EE5ng email."}/>}</FormConsent>
          <button type="submit" disabled={sending||submitted} className="btn btn-primary form-primary-action"><Mail size={19}/>{directEnquiryEnabled?(language==='en'?(sending?'Sending...':'Send order enquiry'):(sending?'Đang gửi...':'Gửi yêu cầu đặt hàng')):<T vi="Chuẩn bị email yêu cầu đặt hàng"/>}<ArrowUpRight size={18}/></button>
          {!directEnquiryEnabled&&<p className="form-process-note"><ShieldCheck size={17}/><T vi={" Website ch\u01B0a t\u1EF1 \u0111\u1ED9ng l\u01B0u \u0111\u01A1n h\u00E0ng ho\u1EB7c thu ti\u1EC1n. Email s\u1EBD m\u1EDF \u0111\u1EC3 b\u1EA1n ki\u1EC3m tra v\u00E0 nh\u1EA5n "}/><strong><T vi={"G\u1EEDi"}/></strong></p>}
          {submitted&&<p className="form-direct-success" role="status">{language==='en'?'Order enquiry submitted. PALLAS will confirm availability and the final total':'Đã tiếp nhận yêu cầu đặt hàng. PALLAS sẽ xác nhận tồn kho và số tiền cuối cùng'}</p>}
          {sendError&&<p className="form-validation-summary" role="alert">{language==='en'?'Automatic sending failed. Please send using email':'Chưa gửi tự động được, vui lòng gửi qua email'} {fallbackEmail&&<a className="form-fallback-link" href={fallbackEmail}>{language==='en'?'Open email':'Mở ứng dụng email'}</a>}</p>}
          {draft && !submitted && <div className="form-draft-notice" role="status"><Check size={19}/><div><strong><T vi={"\u0110\u00E3 chu\u1EA9n b\u1ECB n\u1ED9i dung y\u00EAu c\u1EA7u"}/></strong><p><T vi={"N\u1EBFu \u1EE9ng d\u1EE5ng email kh\u00F4ng m\u1EDF, sao ch\u00E9p n\u1ED9i dung v\u00E0 g\u1EEDi \u0111\u1EBFn "}/><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p><button type="button" className="form-copy-button" onClick={copyDraft}><ClipboardCopy size={15}/>{tr(copied ? 'Đã sao chép' : 'Sao chép nội dung yêu cầu')}</button>{copyFailed && <p className="form-field-error"><T vi={"Kh\u00F4ng th\u1EC3 sao ch\u00E9p t\u1EF1 \u0111\u1ED9ng, vui l\u00F2ng m\u1EDF \u1EE9ng d\u1EE5ng email."}/></p>}</div></div>}
        </form>
        <aside className="checkout-summary checkout-order-card">
          <div className="checkout-summary-heading"><span className="form-step-label"><T vi={"03 / \u0110\u01A0N H\u00C0NG"}/></span><h3><T vi={"\u0110\u01A1n h\u00E0ng c\u1EE7a b\u1EA1n"}/></h3><p>{items.reduce((acc, item) => acc + item.quantity, 0)}<T vi={" s\u1EA3n ph\u1EA9m trong gi\u1ECF"}/></p></div>
          {items.map(item => { const product = findProduct(item.slug); if (!product)
                return null; return <div key={item.slug} className="checkout-product"><span><T vi={product.shortName}/><small><T vi={" \u00D7 "}/>{item.quantity}</small></span><strong>{product.price != null ? money(product.price * item.quantity) : tr('Liên hệ báo giá')}</strong></div>; })}
          <div className="summary-total"><span>{tr(hasUnpriced ? 'Tạm tính sản phẩm đã có giá' : 'Tạm tính')}</span><strong>{subtotal === 0 && hasUnpriced ? tr('Liên hệ báo giá') : money(subtotal)}</strong></div>
          <div className="checkout-price-note"><Info size={17}/><p><T vi={"Ph\u00ED v\u1EADn chuy\u1EC3n, t\u1ED3n kho v\u00E0 gi\u00E1 cu\u1ED1i c\u00F9ng s\u1EBD \u0111\u01B0\u1EE3c x\u00E1c nh\u1EADn sau khi PALLAS nh\u1EADn y\u00EAu c\u1EA7u."}/>{hasUnpriced ? tr(' Một số mặt hàng cần báo giá riêng.') : ''}</p></div>
          <Link href="/gio-hang" className="checkout-edit-link"><T vi={"Ch\u1EC9nh s\u1EEDa gi\u1ECF h\u00E0ng "}/><ArrowRight size={16}/></Link>
          <a className="checkout-support" href={`tel:${SITE.phone}`}><Phone size={17}/><T vi={" C\u1EA7n t\u01B0 v\u1EA5n? "}/>{SITE.phoneDisplay}</a>
        </aside>
      </div>}
    </section>
  </>;
}
