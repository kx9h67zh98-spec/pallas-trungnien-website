import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {join} from 'node:path';
const root=process.cwd();
const read=p=>readFileSync(join(root,p),'utf8');
const match=(source,pattern)=>assert.match(source,pattern);

test('all primary Next.js routes exist',()=>{
 for(const route of ['src/app/page.tsx','src/app/san-pham/page.tsx','src/app/san-pham/[slug]/page.tsx','src/app/gio-hang/page.tsx','src/app/thanh-toan/page.tsx','src/app/dai-ly/page.tsx','src/app/lien-he/page.tsx','src/app/ve-pallas/page.tsx','src/app/kien-thuc/page.tsx','src/app/chinh-sach/page.tsx'])assert.ok(existsSync(join(root,route)),route);
});
test('PALLAS assets packaged',()=>{
 for(const f of ['public/images/brand/pallas-logo-original.jpg','public/images/products/pallas-120-orange-6l.png','public/images/products/illustration-touchless-ex.svg'])assert.ok(existsSync(join(root,f)),f);
});
test('official contact information remains centralized',()=>{
 assert.ok(read('src/data/site.ts').includes('121/2B Khiếu Năng Tĩnh, Phường An Lạc, Thành phố Hồ Chí Minh, Việt Nam'));
 assert.ok(read('src/app/lien-he/page.tsx').includes('SITE.address'));
 assert.ok(read('src/components/layout/footer.tsx').includes('SITE.address'));
});
test('homepage uses logo information panel and preserves keyboard access',()=>{
 const home=read('src/app/page.tsx'),panel=read('src/components/home/brand-hero-reveal.tsx');
 match(home,/<BrandHeroReveal\s*\/>/);
 assert.ok(!home.includes('hero-product-img'));
 for(const word of ['onMouseLeave','aria-expanded','aria-controls','Escape','onClick'])assert.ok(panel.includes(word),word);
 assert.ok(read('src/styles/globals.css').includes('brand-hero.css'));
});
test('product pricing uses exact SKU and never derives unverified prices',()=>{
 const raw=read('src/data/products.ts');
 const required={'pallas-120-6l':310000,'pallas-120-21l':970000,'nano-30-1-5l':93000,'nano-ex-6l':480000,'fruitwash-apple-1-5l':83000};
 for(const [slug,price] of Object.entries(required))assert.ok(new RegExp(`"slug": "${slug}"[\\s\\S]*?"price": ${price}`).test(raw),slug);
 const ref=read('src/components/shop/reference-price.tsx');
 match(ref,/p\.price\s*!=\s*null/);assert.ok(!ref.includes('p.referenceFrom'));
 match(read('src/components/shop/catalog.tsx'),/a\.price\s*\?\?\s*Infinity/);
});
test('cart and checkout use actual prices and disclose email-only ordering',()=>{
 for(const f of ['src/app/gio-hang/page.tsx','src/app/thanh-toan/page.tsx','src/components/layout/cart-drawer.tsx']){
  const s=read(f);match(s,/(?:p|product)\.price\s*!=\s*null/);assert.ok(s.includes('Liên hệ báo giá'),f);
 }
 const checkout=read('src/app/thanh-toan/page.tsx');
 assert.ok(checkout.includes('mailto:'));assert.ok(checkout.includes('form-process-note'));
 assert.ok(!checkout.includes('api/payments'));
});
test('no demo claims in customer-facing pages and components',()=>{
 for(const f of ['src/app/page.tsx','src/app/gio-hang/page.tsx','src/app/thanh-toan/page.tsx','src/app/lien-he/page.tsx','src/app/chinh-sach/page.tsx','src/components/layout/footer.tsx','src/components/forms/contact-form.tsx','src/components/shop/reference-price.tsx'])assert.ok(!/\bdemo\b/i.test(read(f)),f);
});
test('20 original supplier cutouts remain transparent RGBA PNG',()=>{
 const folder=join(root,'public/images/products');const edited=readdirSync(folder).filter(f=>f.endsWith('-cutout.png'));
 assert.equal(edited.length,20);
 for(const file of edited){const buf=readFileSync(join(folder,file));assert.equal(buf.toString('ascii',1,4),'PNG',file);assert.equal(buf[25],6,`${file}: RGBA required`)}
});
