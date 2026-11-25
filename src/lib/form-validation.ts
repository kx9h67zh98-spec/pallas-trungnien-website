/** Pure, client-side validation helpers. Server validation is required if a backend is added. */
export type ContactValues = {
  name: string;
  phone: string;
  email: string;
  topic: string;
  contactMethod: string;
  business: string;
  region: string;
  interest: string;
  message: string;
  consent: boolean;
};

export type CheckoutValues = {
  name: string;
  phone: string;
  email: string;
  address: string;
  note: string;
  contactMethod: string;
  consent: boolean;
};

export type FieldErrors<T> = Partial<Record<keyof T, string>>;

export const contactTopics = [
  { value: 'Tư vấn sản phẩm', label: 'Tư vấn sản phẩm phù hợp' },
  { value: 'Báo giá sản phẩm', label: 'Yêu cầu báo giá' },
  { value: 'Hỗ trợ đơn hàng', label: 'Hỗ trợ đơn hàng' },
  { value: 'Khác', label: 'Nội dung khác' },
];

export const dealerInterests = [
  { value: 'Đại lý phân phối', label: 'Trở thành đại lý phân phối' },
  { value: 'Nhập hàng cho garage', label: 'Nhập sản phẩm cho garage' },
  { value: 'Báo giá số lượng lớn', label: 'Báo giá số lượng lớn' },
  { value: 'Tư vấn thiết bị', label: 'Tư vấn thiết bị' },
];

export const contactMethods = [
  { value: 'Điện thoại', label: 'Điện thoại' },
  { value: 'Zalo', label: 'Zalo' },
  { value: 'Email', label: 'Email' },
];

const normalize = (value: string) => value.trim().replace(/\s+/g, ' ');

export function validateName(value: string): string | undefined {
  const name = normalize(value);
  if (!name) return 'Vui lòng nhập họ và tên.';
  if (name.length < 2) return 'Họ tên cần ít nhất 2 ký tự.';
  if (name.length > 100) return 'Họ tên không được vượt quá 100 ký tự.';
  if ((name.match(/\p{L}/gu) || []).length < 2) return 'Vui lòng nhập họ tên hợp lệ.';
  return undefined;
}

export function validatePhone(value: string): string | undefined {
  const phone = value.trim().replace(/[\s().-]/g, '');
  if (!phone) return 'Vui lòng nhập số điện thoại.';
  if (!/^(?:\+84|0)\d{9,10}$/.test(phone)) return 'Số điện thoại cần bắt đầu bằng 0 hoặc +84 và có 10–11 chữ số.';
  return undefined;
}

export function validateEmail(value: string): string | undefined {
  const email = value.trim();
  if (!email) return 'Vui lòng nhập địa chỉ email.';
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return 'Email chưa đúng định dạng (ví dụ: ten@gmail.com).';
  return undefined;
}

function validateText(value: string, label: string, min: number, max: number): string | undefined {
  const text = normalize(value);
  if (!text) return `Vui lòng nhập ${label}.`;
  if (text.length < min) return `${label} cần ít nhất ${min} ký tự.`;
  if (text.length > max) return `${label} không được vượt quá ${max} ký tự.`;
  return undefined;
}

export function validateContact(values: ContactValues, dealer: boolean): FieldErrors<ContactValues> {
  const errors: FieldErrors<ContactValues> = {};
  errors.name = validateName(values.name);
  errors.phone = validatePhone(values.phone);
  errors.email = validateEmail(values.email);
  errors.message = validateText(values.message, 'nội dung cần tư vấn', 10, 1200);
  if (!contactMethods.some(m => m.value === values.contactMethod)) errors.contactMethod = 'Vui lòng chọn cách liên hệ.';
  if (dealer) {
    errors.business = validateText(values.business, 'tên đơn vị hoặc cửa hàng', 2, 120);
    errors.region = validateText(values.region, 'khu vực hoạt động', 2, 120);
    if (!dealerInterests.some(i => i.value === values.interest)) errors.interest = 'Vui lòng chọn nhu cầu hợp tác.';
  } else if (!contactTopics.some(t => t.value === values.topic)) {
    errors.topic = 'Vui lòng chọn chủ đề tư vấn.';
  }
  if (!values.consent) errors.consent = 'Bạn cần xác nhận trước khi tiếp tục.';
  return Object.fromEntries(Object.entries(errors).filter(([, message]) => Boolean(message))) as FieldErrors<ContactValues>;
}

export function validateCheckout(values: CheckoutValues): FieldErrors<CheckoutValues> {
  const errors: FieldErrors<CheckoutValues> = {};
  errors.name = validateName(values.name);
  errors.phone = validatePhone(values.phone);
  errors.email = validateEmail(values.email);
  errors.address = validateText(values.address, 'địa chỉ nhận hàng', 10, 240);
  if (values.note.trim().length > 1000) errors.note = 'Ghi chú không được vượt quá 1.000 ký tự.';
  if (!contactMethods.some(m => m.value === values.contactMethod)) errors.contactMethod = 'Vui lòng chọn cách xác nhận đơn hàng.';
  if (!values.consent) errors.consent = 'Bạn cần xác nhận trước khi tiếp tục.';
  return Object.fromEntries(Object.entries(errors).filter(([, message]) => Boolean(message))) as FieldErrors<CheckoutValues>;
}

export function cleanFormText(value: string): string {
  return value.trim().replace(/\r\n?/g, '\n');
}
