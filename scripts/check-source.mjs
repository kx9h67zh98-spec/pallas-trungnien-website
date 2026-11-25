import ts from 'typescript';
import {readdirSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
const walk=p=>readdirSync(p,{withFileTypes:true}).flatMap(d=>d.isDirectory()?walk(join(p,d.name)):/\.tsx?$/.test(d.name)?[join(p,d.name)]:[]);
let failures=0;for(const f of walk('src')){const src=readFileSync(f,'utf8');const sf=ts.createSourceFile(f,src,ts.ScriptTarget.Latest,true,f.endsWith('.tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);if(sf.parseDiagnostics.length){failures+=sf.parseDiagnostics.length;console.log(f,sf.parseDiagnostics.map(d=>ts.flattenDiagnosticMessageText(d.messageText,' ')))}}
console.log('Parsed TypeScript files:',walk('src').length,'syntax errors:',failures);if(failures)process.exitCode=1;
