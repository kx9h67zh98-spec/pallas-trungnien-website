import type {MetadataRoute} from 'next';
export default function robots():MetadataRoute.Robots{
 const published=process.env.NEXT_PUBLIC_SITE_PUBLIC==='true';
 const site=process.env.NEXT_PUBLIC_SITE_URL||'https://pallas-trungnien-website.netlify.app';
 return {rules:[{userAgent:'*',allow:published?'/':undefined,disallow:published?['/studio/','/__forms.html']:['/']}],sitemap:published?`${site.replace(/\/$/,'')}/sitemap.xml`:undefined};
}
