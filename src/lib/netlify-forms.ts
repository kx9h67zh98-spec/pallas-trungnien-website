/** Opt-in, must be enabled on a real Netlify project after form detection is configured. */
export const directEnquiryEnabled = process.env.NEXT_PUBLIC_PALLAS_FORM_BACKEND === 'netlify';
export type PallasFormName='pallas-contact'|'pallas-dealer'|'pallas-quote'|'pallas-order';
export async function submitDirectEnquiry(name:PallasFormName,values:Record<string,string|number|boolean>){
  if(!directEnquiryEnabled)throw new Error('Direct forms disabled');
  const data=new URLSearchParams({'form-name':name,'bot-field':'',...Object.fromEntries(Object.entries(values).map(([k,v])=>[k,String(v)]))});
  const response=await fetch('/__forms.html',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:data.toString()});
  if(!response.ok)throw new Error(`Form request failed (${response.status})`);
}
