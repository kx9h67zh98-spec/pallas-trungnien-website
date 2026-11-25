'use client';
import {createContext,useContext,useEffect,useMemo,useState,type ReactNode} from 'react';
import {type Language,translate} from '@/i18n/translate';

const STORAGE_KEY='pallas-site-language';
type LanguageContextType={language:Language;changeLanguage:(value:Language)=>void;tr:(value:string,compact?:boolean)=>string};
const LanguageContext=createContext<LanguageContextType|null>(null);

export function LanguageProvider({children}:{children:ReactNode}){
  const [language,setLanguage]=useState<Language>('vi');
  useEffect(()=>{
    try {
      const saved=localStorage.getItem(STORAGE_KEY);
      if(saved==='vi'||saved==='en')setLanguage(saved);
    }catch{/* Browsers blocking storage should still support a session language toggle */}
  },[]);
  useEffect(()=>{document.documentElement.lang=language},[language]);
  const value=useMemo<LanguageContextType>(()=>({
    language,
    changeLanguage:(next)=>{
      setLanguage(next);
      document.documentElement.lang=next;
      try{localStorage.setItem(STORAGE_KEY,next)}catch{/* optional persistence */}
    },
    tr:(message,compact=true)=>translate(message,language,compact),
  }),[language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(){
  const context=useContext(LanguageContext);
  if(!context)throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
