import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
const get=(path)=>readFileSync(path,'utf8');
test('v1.9.2 uses original brand artwork on black, not a reconstructed concept',()=>{
 assert.ok(existsSync('public/images/brand/pallas-logo-original.jpg'));
 assert.ok(existsSync('public/images/brand/pallas-logo-original-transparent.png'));
 assert.match(get('src/data/site.ts'),/pallas-logo-original-transparent\.png/);
 assert.doesNotMatch(get('src/data/site.ts'),/black-concept/);
 assert.match(get('src/app/layout.tsx'),/pallas-logo-original-transparent\.png/);
 assert.ok(!existsSync('public/images/brand/pallas-logo-black-concept.webp'));
});
test('header uses accessible animated nav and reduced motion support',()=>{
 const header=get('src/components/layout/header.tsx');
 const motion=get('src/styles/header-motion.css');
 assert.match(header,/aria-label=\{tr\("Điều hướng chính"\)\}/);
 assert.match(motion,/\.main-nav a:hover::after/);
 assert.match(motion,/:focus-visible/);
 assert.match(motion,/prefers-reduced-motion:reduce/);
 assert.match(motion,/hover:hover/);
 assert.match(get('src/styles/globals.css'),/header-motion\.css/);
});
