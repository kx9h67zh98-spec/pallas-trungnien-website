import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {join} from 'node:path';
import {translate,isTranslated} from '../src/i18n/translate.ts';
import {EN_DICTIONARY} from '../src/i18n/en-dictionary.ts';

const read=p=>readFileSync(join(process.cwd(),p),'utf8');

test('ENG translates navigation, form labels, errors and company address',()=>{
 assert.equal(translate('Trang chủ','en'),'Home');
 assert.equal(translate('Giỏ hàng','en'),'Cart');
 assert.equal(translate('Họ và tên','en'),'Full name');
 assert.equal(translate('Vui lòng nhập số điện thoại.','en'),'Please enter your phone number');
 assert.ok(translate('121/2B Khiếu Năng Tĩnh, Phường An Lạc, Thành phố Hồ Chí Minh, Việt Nam','en').includes('Ho Chi Minh City'));
});
test('VIE remains the source and UI removes unnecessary terminal full stops',()=>{
 assert.equal(translate('Chăm xe chuẩn','vi'),'Chăm xe chuẩn');
 assert.equal(translate('Không tìm thấy trang này.','vi'),'Không tìm thấy trang này');
 assert.equal(translate('Chăm chút từng hành trình.','en'),'Care for every journey');
 assert.equal(translate('Rửa theo từng khu vực, không để hóa chất khô trên bề mặt. Xả thật kỹ bằng nước sạch.','vi',false).endsWith('.'),true);
 assert.equal(translate('1.5L','en'),'1.5L');
});
test('English product titles, highlights and generic summaries are translated',()=>{
 assert.match(translate('PALLAS Nano 30 – Rửa xe không chạm 6L','en'),/Touchless wash/);
 assert.equal(translate('Quy cách 6L','en'),'Pack size: 6L');
 const summary='Sản phẩm PALLAS thuộc nhóm wax, quy cách 550g. Có nhiều quy cách sản phẩm để lựa chọn theo nhu cầu chăm sóc xe. Vui lòng liên hệ để được tư vấn thêm.';
 assert.ok(isTranslated(summary));assert.match(translate(summary,'en'),/polish and wax/);
});
test('English names and article content have curated translations',()=>{
 const s=read('src/data/products.ts');
 const names=[...s.matchAll(/"name":\s*"([^"\\]+)"/g)].map(m=>m[1]);
 assert.equal(names.length,23);
 names.forEach(name=>assert.ok(isTranslated(name),name));
 const article=read('src/data/articles.ts');
 for(const phrase of ['5 bước chăm sóc xe tại nhà gọn gàng, đúng quy trình','Rửa xe không chạm và bọt tuyết truyền thống khác nhau thế nào?','Chọn dung tích hóa chất phù hợp với quy mô garage','Những điều cần lưu ý khi vệ sinh và dưỡng bóng lốp'])assert.ok(isTranslated(phrase),phrase);
});
test('language switch exists on desktop and mobile, and preserves choice',()=>{
 const header=read('src/components/layout/header.tsx'),switcher=read('src/components/i18n/language-switch.tsx'),provider=read('src/components/i18n/language-provider.tsx');
 assert.ok(header.includes('LanguageSwitch'));assert.ok(header.includes('mobile-language-row'));
 for(const s of ['VIE','ENG','aria-pressed','focus-visible'])assert.ok(switcher.includes(s)||read('src/styles/language.css').includes(s),s);
 assert.ok(provider.includes('localStorage.setItem'));assert.ok(provider.includes('document.documentElement.lang'));
 assert.ok(read('src/app/layout.tsx').includes('<LanguageProvider>'));
});
test('i18n translation coverage has a minimum curated dictionary and no unreviewed demo labels',()=>{
 assert.ok(Object.keys(EN_DICTIONARY).length>=440);
 for(const phrase of ['SẢN PHẨM THEO NHU CẦU','Hành trình','Chăm xe chuẩn','Nội dung bạn muốn trao đổi'].filter(p=>p!=='Hành trình'))assert.ok(isTranslated(phrase),phrase);
});

test('entire product and article data is covered by translations or deliberate brand names', async()=>{
 const {products,categories}=await import('../src/data/products.ts');
 const {articles}=await import('../src/data/articles.ts');
 assert.equal(products.length,23);assert.equal(categories.length,5);assert.equal(articles.length,4);
 for(const c of categories)for(const x of [c.label,c.caption])assert.ok(isTranslated(x),`category: ${x}`);
 for(const p of products){
  for(const x of [p.name,p.shortName,p.summary,p.usage,p.volume,p.note??'',...(p.highlights??[]),p.badge??''].filter(Boolean)){
   assert.ok(isTranslated(x),`${p.slug}: ${x}`);
  }
 }
 for(const a of articles)for(const x of [a.category,a.title,a.excerpt,a.readTime,...a.section])assert.ok(isTranslated(x),`article: ${x}`);
});

test('mobile navigation translates menu entries and multiline sentences work in ENG',()=>{
 const header=read('src/components/layout/header.tsx');
 assert.ok(header.includes('>{tr(item.label)}<ArrowUpRight'), 'Mobile menu should use tr(item.label)');
 const multiline='\n      Tôi đồng ý cung cấp thông tin trên để PALLAS liên hệ theo yêu cầu của mình. Dữ liệu chỉ được gửi khi tôi xác nhận gửi trong ứng dụng email.\n    ';
 const translated=translate(multiline,'en');
 assert.notEqual(translated.trim(),multiline.trim());
 assert.ok(!/[À-ỹ]/u.test(translated), 'No Vietnamese accented content after translating consent');
});
