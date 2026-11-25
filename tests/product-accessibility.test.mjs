import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=(path)=>readFileSync(path,'utf8');
test('dialogs support Escape, focus containment and safe reduced motion',()=>{
 for(const name of ['quick-quote','product-comparison']){
  const code=read(`src/components/shop/${name}.tsx`);
  assert.match(code,/aria-modal="true"/);
  assert.match(code,/Escape/);
  assert.match(code,/e\.key!=='Tab'/);
  assert.match(code,/document\.body\.style\.overflow/);
 }
 assert.match(read('src/styles/product-experience.css'),/prefers-reduced-motion:reduce/);
});
