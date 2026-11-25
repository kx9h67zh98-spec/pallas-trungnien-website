import { EN_DICTIONARY } from './en-dictionary.ts';

export type Language = 'vi' | 'en';
export const LANGUAGES: readonly Language[] = ['vi', 'en'];

const CATEGORY_EN: Record<string,string> = {
  foam: 'foam shampoo', touchless: 'touchless wash', cleaner: 'specialist cleaning',
  wax: 'polish and wax', equipment: 'car-wash equipment',
};

function translatedPattern(value: string): string | undefined {
  const generic = value.match(/^Sản phẩm PALLAS thuộc nhóm ([a-z]+), quy cách (.+?)\. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe\. Vui lòng liên hệ để được tư vấn thêm\.$/u);
  if (generic) {
    const category = CATEGORY_EN[generic[1]] || 'vehicle care';
    const size = generic[2] === 'Nhiều quy cách' ? 'various sizes' : generic[2] === 'Liên hệ' ? 'on request' : generic[2].replaceAll('1,5L','1.5L');
    return `A PALLAS product in the ${category} range, available in ${size}. Contact our team for advice on the most suitable format`;
  }
  const pack = value.match(/^Quy cách (.+)$/u);
  if (pack) return `Pack size: ${pack[1] === 'Nhiều quy cách' ? 'various sizes' : pack[1] === 'Liên hệ' ? 'on request' : pack[1].replaceAll('1,5L','1.5L')}`;
  const required = value.match(/^Vui lòng nhập (.+)\.$/u);
  if (required) return `Please enter ${EN_DICTIONARY[required[1]] ?? required[1]}`;
  const min = value.match(/^(.+?) cần ít nhất (\d+) ký tự\.$/u);
  if (min) return `${EN_DICTIONARY[min[1]] ?? min[1]} must contain at least ${min[2]} characters`;
  const max = value.match(/^(.+?) không được vượt quá ([\d.]+) ký tự\.$/u);
  if (max) return `${EN_DICTIONARY[max[1]] ?? max[1]} must not exceed ${max[2]} characters`;
  return undefined;
}

/** UI copy omits ornamental full stops, but article paragraphs keep normal punctuation. */
export function translate(value: string, language: Language, compact = true): string {
  if (typeof value !== 'string') return String(value ?? '');
  const prefix = value.match(/^\s*/u)?.[0] ?? '';
  const suffix = value.match(/\s*$/u)?.[0] ?? '';
  const core = value.trim();
  if (!core) return value;
  const normalized = core.replace(/\s+/gu, ' ');
  const text = language === 'en' ? EN_DICTIONARY[core] ?? EN_DICTIONARY[normalized] ?? translatedPattern(normalized) ?? core : core;
  const displayed = compact ? text.replace(/(?<!\.)\.$/u, '') : text;
  return `${prefix}${displayed}${suffix}`;
}

export function isTranslated(value: string): boolean {
  const core = value.trim();
  const normalized = core.replace(/\s+/gu, ' ');
  return Boolean(EN_DICTIONARY[core] || EN_DICTIONARY[normalized] || translatedPattern(normalized) || !/[\u00C0-\u1EF9]/u.test(core));
}
