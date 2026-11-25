'use client';

import type {HTMLInputTypeAttribute, HTMLAttributes, ReactNode} from 'react';

type BaseProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (next: string) => void;
  onBlur?: () => void;
  error?: string;
  hint?: string;
  required?: boolean;
  full?: boolean;
};

type InputProps = BaseProps & {
  type?: HTMLInputTypeAttribute;
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  autoComplete?: string;
  placeholder?: string;
  maxLength?: number;
};

export function FormInput({id,name,label,value,onChange,onBlur,error,hint,required,full,type='text',inputMode,autoComplete,placeholder,maxLength}:InputProps){
  return <div className={`form-field${full?' span-2':''}${error?' has-error':''}`}>
    <label className="form-label" htmlFor={id}>{label}{required&&<span className="required-mark" aria-hidden="true">*</span>}</label>
    <input className="form-control" id={id} name={name} type={type} inputMode={inputMode} autoComplete={autoComplete} value={value} maxLength={maxLength} placeholder={placeholder} required={required} aria-required={required||undefined} aria-invalid={Boolean(error)} aria-describedby={error?`${id}-error`:hint?`${id}-hint`:undefined} onChange={e=>onChange(e.currentTarget.value)} onBlur={onBlur}/>
    {error?<p className="form-field-error" id={`${id}-error`} role="alert">{error}</p>:hint?<p className="form-field-hint" id={`${id}-hint`}>{hint}</p>:null}
  </div>;
}

type SelectProps = BaseProps & {options: {value: string; label: string}[]; placeholder?: string};

export function FormSelect({id,name,label,value,onChange,onBlur,error,hint,required,full,options,placeholder='Chọn một mục'}:SelectProps){
  return <div className={`form-field${full?' span-2':''}${error?' has-error':''}`}>
    <label className="form-label" htmlFor={id}>{label}{required&&<span className="required-mark" aria-hidden="true">*</span>}</label>
    <select className="form-control" id={id} name={name} value={value} required={required} aria-required={required||undefined} aria-invalid={Boolean(error)} aria-describedby={error?`${id}-error`:hint?`${id}-hint`:undefined} onChange={e=>onChange(e.currentTarget.value)} onBlur={onBlur}>
      <option value="" disabled>{placeholder}</option>
      {options.map(option=><option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
    {error?<p className="form-field-error" id={`${id}-error`} role="alert">{error}</p>:hint?<p className="form-field-hint" id={`${id}-hint`}>{hint}</p>:null}
  </div>;
}

type TextareaProps = BaseProps & {placeholder?: string; maxLength?: number; rows?: number};

export function FormTextarea({id,name,label,value,onChange,onBlur,error,hint,required,full,placeholder,maxLength=1200,rows=5}:TextareaProps){
  return <div className={`form-field${full?' span-2':''}${error?' has-error':''}`}>
    <div className="form-label-row"><label className="form-label" htmlFor={id}>{label}{required&&<span className="required-mark" aria-hidden="true">*</span>}</label><span className="form-counter">{value.length}/{maxLength}</span></div>
    <textarea className="form-control form-textarea" id={id} name={name} rows={rows} maxLength={maxLength} value={value} required={required} aria-required={required||undefined} aria-invalid={Boolean(error)} aria-describedby={error?`${id}-error`:hint?`${id}-hint`:undefined} placeholder={placeholder} onChange={e=>onChange(e.currentTarget.value)} onBlur={onBlur}/>
    {error?<p className="form-field-error" id={`${id}-error`} role="alert">{error}</p>:hint?<p className="form-field-hint" id={`${id}-hint`}>{hint}</p>:null}
  </div>;
}

export function FormConsent({id,checked,onChange,error,children}:{id:string;checked:boolean;onChange:(next:boolean)=>void;error?:string;children:ReactNode}){
  return <div className={`form-consent-group${error?' has-error':''}`}>
    <label className="form-consent" htmlFor={id}>
      <input id={id} name="consent" type="checkbox" checked={checked} aria-invalid={Boolean(error)} aria-describedby={error?`${id}-error`:undefined} onChange={e=>onChange(e.currentTarget.checked)}/>
      <span>{children}</span>
    </label>
    {error&&<p className="form-field-error" id={`${id}-error`} role="alert">{error}</p>}
  </div>;
}
