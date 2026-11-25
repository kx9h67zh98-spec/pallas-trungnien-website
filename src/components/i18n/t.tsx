'use client';
import {useLanguage} from './language-provider';
import {translate} from '@/i18n/translate';

/** Display a bilingual string without adding a span or disturbing the document structure. */
export function T({vi,en,compact=true}:{vi:string;en?:string;compact?:boolean}){
  const {tr,language}=useLanguage();
  return <>{language==='en'&&en!==undefined?translate(en,'vi',compact):tr(vi,compact)}</>;
}
