'use client';
import {createContext,useContext,type ReactNode} from 'react';
import {SITE} from '@/data/site';
import type {SiteInfo} from '@/lib/content-types';
const Context=createContext<SiteInfo>(SITE);
export function SiteSettingsProvider({value,children}:{value:SiteInfo;children:ReactNode}){return <Context.Provider value={value}>{children}</Context.Provider>}
export function useSite(){return useContext(Context)}
