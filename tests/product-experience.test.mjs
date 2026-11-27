import test from 'node:test';
import assert from 'node:assert/strict';
import {getProductVariants,toggleComparison,MAX_COMPARE_ITEMS,isValidQuoteQuantity,quoteEmail,PRODUCT_VARIANT_GROUPS} from '../src/lib/product-experience.ts';
import {products} from '../src/data/products.ts';
import {readFileSync} from 'node:fs';
const source=(p)=>readFileSync(p,'utf8');
test('verified product families switch between exact pack-size SKUs',()=>{
  for(const group of Object.values(PRODUCT_VARIANT_GROUPS)){
    const actual=getProductVariants(group[0],products);
    assert.deepEqual(actual.map(p=>p.slug),[...group]);
    assert.ok(actual.every(p=>p.price===null||p.price>=0));
  }
  assert.deepEqual(getProductVariants('random',products),[]);
});
test('comparison is reversible and limited to three products',()=>{
  assert.equal(MAX_COMPARE_ITEMS,3);
  let selected=[];
  for(const id of ['a','b','c','d'])selected=toggleComparison(selected,id);
  assert.deepEqual(selected,['a','b','c']);
  selected=toggleComparison(selected,'b');assert.deepEqual(selected,['a','c']);
  assert.deepEqual(toggleComparison(selected,'d'),['a','c','d']);
});
test('quote quantity validation rejects negative, zero, non-integer and overflow values',()=>{
  for(const v of [0,-1,1.5,100,NaN,Infinity])assert.equal(isValidQuoteQuantity(v),false);
  for(const v of [1,25,99])assert.equal(isValidQuoteQuantity(v),true);
});
test('quotes contain truthful SKU, pack size and customer details in both languages',()=>{
  const product=products.find(p=>p.slug==='nano-ex-6l');
  assert.equal(product.price,480000);
  const a=quoteEmail({name:'Nguyễn An',phone:'090 123 4567',note:'20 can',product,quantity:20,email:'test@example.org',language:'vi'});
  assert.match(a.text,/nano-ex-6l/);assert.match(a.text,/Số lượng: 20/);assert.ok(a.url.startsWith('mailto:test@example.org?'));
  const b=quoteEmail({name:'Alex',phone:'+84901234567',note:'',product,quantity:2,email:'test@example.org',language:'en'});
  assert.match(b.text,/Quantity: 2/);assert.match(decodeURIComponent(b.url),/Pack size: 6L/);
});
test('detail, listing and shell integrate all new experiences',()=>{
 const detail=source('src/app/san-pham/[slug]/page.tsx');
 assert.match(detail,/VariantSelector/);
 assert.match(source('src/components/shop/add-to-cart.tsx'),/QuickQuote/);
 assert.match(source('src/components/shop/catalog.tsx'),/ProductComparison/);
 assert.match(source('src/components/layout/site-shell.tsx'),/RevealOnScroll/);
 assert.match(source('src/styles/product-experience.css'),/prefers-reduced-motion:reduce/);
});
