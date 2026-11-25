import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {join} from 'node:path';
const root=process.cwd();
const read=(p)=>readFileSync(join(root,p),'utf8');

test('all primary Next.js routes exist',()=>{
 for(const route of ['src/app/page.tsx','src/app/san-pham/page.tsx','src/app/san-pham/[slug]/page.tsx','src/app/gio-hang/page.tsx','src/app/thanh-toan/page.tsx','src/app/dai-ly/page.tsx','src/app/lien-he/page.tsx','src/app/ve-pallas/page.tsx','src/app/kien-thuc/page.tsx'])assert.ok(existsSync(join(root,route)),route)
});
test('PALLAS assets packaged',()=>{
 for(const p of ['public/images/brand/pallas-logo-original.jpg','public/images/products/pallas-120-orange-6l.png','public/images/products/illustration-touchless-ex.svg'])assert.ok(existsSync(join(root,p)),p)
});
test('official contact address is centralized and is shown on contact and footer',()=>{
 assert.ok(read('src/data/site.ts').includes('121/2B Khiếu Năng Tĩnh, Phường An Lạc, Thành phố Hồ Chí Minh, Việt Nam'));
 assert.ok(read('src/app/lien-he/page.tsx').includes('SITE.address'));
 assert.ok(read('src/components/layout/footer.tsx').includes('SITE.address'));
});
test('homepage uses interactive logo reveal rather than product jug in hero',()=>{
 const hero=read('src/app/page.tsx');const panel=read('src/components/home/brand-hero-reveal.tsx');
 assert.ok(hero.includes('<BrandHeroReveal/>'));
 assert.ok(!hero.includes('hero-product-img'));
 assert.ok(panel.includes('onMouseLeave'));
 assert.ok(panel.includes('aria-expanded'));
 assert.ok(panel.includes('setExpanded(v=>!v)'));
 assert.ok(read('src/styles/globals.css').includes('brand-hero.css'));
});
test('exact-SKU published prices are displayed directly, not referenceFrom',()=>{
 const products=read('src/data/products.ts');
 const prices={'pallas-120-6l':310000,'pallas-120-21l':970000,'nano-30-1-5l':93000,'nano-ex-6l':480000,'fruitwash-apple-1-5l':83000};
 for(const [slug,price] of Object.entries(prices))assert.ok(new RegExp(`"slug": "${slug}"[\\s\\S]*?"price": ${price}`).test(products),slug);
 const view=read('src/components/shop/reference-price.tsx');assert.ok(view.includes('p.price!=null'));assert.ok(!view.includes('referenceFrom'));
 const catalog=read('src/components/shop/catalog.tsx');assert.ok(catalog.includes('a.price??Infinity'));
});
test('cart and email order use actual item prices without inventing missing prices',()=>{
 for(const f of ['src/app/gio-hang/page.tsx','src/app/thanh-toan/page.tsx','src/components/layout/cart-drawer.tsx']){
  const s=read(f);assert.ok(s.includes('p.price!=null'),f);assert.ok(s.includes('Liên hệ báo giá'),f)
 }
 const checkout=read('src/app/thanh-toan/page.tsx');assert.ok(checkout.includes('mailto:'));assert.ok(checkout.includes('chưa tự động lưu đơn hàng'));assert.ok(!checkout.includes('api/payments'));
});
test('no demo labels in customer-facing pages and components',()=>{
 const files=['src/app/page.tsx','src/app/gio-hang/page.tsx','src/app/thanh-toan/page.tsx','src/app/lien-he/page.tsx','src/app/chinh-sach/page.tsx','src/components/layout/footer.tsx','src/components/forms/contact-form.tsx','src/components/shop/reference-price.tsx'];
 for(const f of files)assert.ok(!/\bdemo\b/i.test(read(f)),f);
});
test('all twenty supplier product cutouts remain transparent RGBA PNGs',()=>{
 const folder=join(root,'public/images/products');const edited=readdirSync(folder).filter(f=>f.endsWith('-cutout.png'));
 assert.equal(edited.length,20);
 for(const file of edited){const buf=readFileSync(join(folder,file));assert.equal(buf.toString('ascii',1,4),'PNG',file);assert.equal(buf[25],6,`${file} RGBA`)}
});
