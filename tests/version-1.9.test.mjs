import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {promotionIsCurrent} from '../src/lib/promotion-schedule.ts';
const src=(file)=>readFileSync(file,'utf8');

test('v1.9 keeps a complete fallback storefront without CMS credentials',()=>{
 const content=src('src/lib/content.ts');
 assert.match(content,/if \(!ENABLED\) return null/);
 assert.match(content,/return fallbackProducts/);
 assert.match(content,/return fallbackArticles/);
 assert.match(content,/pallasProduct/);
 assert.match(content,/pallasArticle/);
});
test('CMS never reads draft documents and uses owner-approved SKU price policy',()=>{
 const content=src('src/lib/content.ts');
 assert.match(content,/drafts\.\*\*/);
 assert.match(content,/priceMode==='approved'/);
 assert.match(content,/priceMode==='quote'/);
 assert.match(content,/approvedPrice/);
 assert.match(content,/row\.isActive===false/);
 assert.match(content,/revalidate:90/);
});
test('all Netlify form skeletons match the four contact and order flows',()=>{
 const html=src('public/__forms.html');
 for(const name of ['pallas-contact','pallas-dealer','pallas-quote','pallas-order'])assert.match(html,new RegExp(`name="${name}"`));
 for(const field of ['form-name','bot-field','name','phone','email','orderLines','quantity','consent'])assert.ok(html.includes(`name="${field}"`),field);
 const js=src('src/lib/netlify-forms.ts');
 assert.match(js,/NEXT_PUBLIC_PALLAS_FORM_BACKEND/);
 assert.match(js,/new URLSearchParams/);
});
test('direct submission is opt-in, with mailto fallback and no automatic payment',()=>{
 const contact=src('src/components/forms/contact-form.tsx');
 const order=src('src/app/thanh-toan/page.tsx');
 const quote=src('src/components/shop/quick-quote.tsx');
 assert.match(contact,/directEnquiryEnabled/);assert.match(contact,/mailto:/);
 assert.match(order,/submitDirectEnquiry\('pallas-order'/);assert.match(order,/mailto:/);
 assert.match(quote,/submitDirectEnquiry\('pallas-quote'/);assert.match(quote,/quoteEmail/);
});
test('homepage v1.9 includes clear buying guide, FAQ and expiring promotions',()=>{
 const home=src('src/app/page.tsx');
 for(const component of ['DiscoveryGuide','PurchaseSteps','CustomerFAQ','PromotionSpotlight'])assert.ok(home.includes(`<${component}`));
 const cms=src('src/lib/content.ts');
 assert.match(cms,/promotionIsCurrent\(row,now\)/);
 const css=src('src/styles/editorial-v19.css');
 assert.match(css,/prefers-reduced-motion:reduce/);
 assert.match(css,/max-width:700px/);
});
test('SEO remains noindex until business signoff',()=>{
 assert.match(src('src/app/layout.tsx'),/NEXT_PUBLIC_SITE_PUBLIC==='true'/);
 assert.match(src('src/app/robots.ts'),/NEXT_PUBLIC_SITE_PUBLIC==='true'/);
 assert.match(src('src/app/sitemap.ts'),/NEXT_PUBLIC_SITE_PUBLIC!=='true'/);
 assert.match(src('.env.example'),/NEXT_PUBLIC_SITE_PUBLIC=false/);
});
test('owner CMS has product, article, promotion and central company settings',()=>{
 const schema=src('studio/schemas/index.ts');
 for(const kind of ['pallasProduct','pallasArticle','pallasPromotion','pallasSiteSettings'])assert.ok(schema.includes(kind),kind);
 for(const field of ['approvedPrice','priceMode','startsAt','endsAt','isActive'])assert.ok(schema.includes(field),field);
 assert.ok(existsSync('docs/LEGACY_CATALOG_AUDIT_v1.9.csv'));
});

test('expired, future, invalid and incomplete promotions are not displayed',()=>{
 const now=Date.parse('2026-11-27T12:00:00Z');
 assert.equal(promotionIsCurrent({title:'Black Friday',startsAt:'2026-11-26T00:00:00Z',endsAt:'2026-11-28T00:00:00Z'},now),true);
 assert.equal(promotionIsCurrent({title:'Expired',startsAt:'2024-05-16T00:00:00Z',endsAt:'2024-06-16T00:00:00Z'},now),false);
 assert.equal(promotionIsCurrent({title:'Future',startsAt:'2026-12-01T00:00:00Z',endsAt:'2026-12-05T00:00:00Z'},now),false);
 assert.equal(promotionIsCurrent({title:'Missing',startsAt:'2026-11-27T00:00:00Z'},now),false);
 assert.equal(promotionIsCurrent({title:'Invalid',startsAt:'?',endsAt:'??'},now),false);
 assert.equal(promotionIsCurrent({title:'',startsAt:'2026-11-26T00:00:00Z',endsAt:'2026-11-28T00:00:00Z'},now),false);
});
