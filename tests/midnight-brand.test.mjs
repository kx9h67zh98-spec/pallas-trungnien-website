import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';

const read=(path)=>readFileSync(path,'utf8');
test('Midnight palette is loaded after the legacy component styles',()=>{
 const global=read('src/styles/globals.css');
 assert.ok(global.indexOf("editorial-v19.css")<global.indexOf("midnight-brand.css"));
 const css=read('src/styles/midnight-brand.css');
 for(const token of ['--pallas-midnight:#0b0c0f','--pallas-gold:#e8c476','--pallas-red:#d83f40','.site-header','.mobile-menu','.product-card','.variant-selector','.compare-tray','.site-footer'])assert.ok(css.includes(token),token);
});
test('Original PALLAS logo is used on black matte and the JPG source remains intact',()=>{
 assert.ok(existsSync('public/images/brand/pallas-logo-original-transparent.png'));
 assert.ok(existsSync('public/images/brand/pallas-logo-original.jpg'));
 assert.match(read('src/data/site.ts'),/pallas-logo-original-transparent\.png/);
 assert.ok(existsSync('docs/BRAND_PALETTE_v1.9.1.md'));
});
