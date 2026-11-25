'use client';
import {useLanguage} from './language-provider';

export default function LanguageSwitch({mobile=false}:{mobile?:boolean}){
  const {language,changeLanguage}=useLanguage();
  return <div className={`language-switch${mobile?' language-switch-mobile':''}`} role="group" aria-label={language==='vi'?'Chọn ngôn ngữ':'Select language'}>
    <button type="button" lang="vi" aria-label="Chuyển sang tiếng Việt" aria-pressed={language==='vi'} className={language==='vi'?'active':''} onClick={()=>changeLanguage('vi')}>VIE</button>
    <span aria-hidden="true" className="language-separator"/>
    <button type="button" lang="en" aria-label="Switch to English" aria-pressed={language==='en'} className={language==='en'?'active':''} onClick={()=>changeLanguage('en')}>ENG</button>
  </div>;
}
