import test from 'node:test';
import assert from 'node:assert/strict';
import {products, categories, OFFICIAL_PRICE_DATE} from '../src/data/products.ts';
import {existsSync,readFileSync} from 'node:fs';
const bySlug=(slug)=>products.find(p=>p.slug===slug);
test('only 32 unique official SKUs, exact published date and tax context',()=>{
 assert.equal(OFFICIAL_PRICE_DATE,'2026-03-15');
 assert.equal(products.length,32);
 assert.equal(new Set(products.map(p=>p.slug)).size,32);
 assert.equal(bySlug('pallas-120-6l').price,310000);
 assert.equal(bySlug('pallas-60-21l').price,720000);
 assert.equal(bySlug('nano-ex-6l').price,480000);
 assert.equal(bySlug('binh-phun-bot-tuyet-60l').price,7700000);
 assert.equal(bySlug('kem-bot-sieu-bong-trang-suc-160ml').price,150000);
 assert.equal(bySlug('pallas-80-6l'),undefined);
 assert.equal(bySlug('nano-30-1-5l'),undefined);
});
test('every catalog product uses a dedicated product-only official image',()=>{
 for(const p of products){
  assert.ok(p.image.startsWith('/images/products/official-2026-03/'));
  assert.ok(existsSync('public'+p.image),p.image);
  assert.deepEqual(p.gallery,[p.image]);
 }
 for(const c of categories)assert.ok(existsSync('public'+c.image));
});
test('original cPanel PNG logo is used in site settings',()=>{
 assert.ok(existsSync('public/images/brand/pallas-logo-original-transparent.png'));
 assert.match(readFileSync('src/data/site.ts','utf8'),/pallas-logo-original-transparent\.png/);
});
