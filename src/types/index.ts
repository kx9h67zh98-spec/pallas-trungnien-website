export type CategoryId = 'foam' | 'touchless' | 'wax' | 'cleaner' | 'equipment';
export interface Category { id: CategoryId; label: string; caption: string; image: string; }
export interface Product {
  slug: string;
  name: string;
  shortName: string;
  category: CategoryId;
  volume: string;
  price: number | null;
  referenceFrom?: number | null;
  gallery?: string[];
  note?: string;
  image: string;
  imageType: 'provided' | 'illustration';
  badge?: string | null;
  summary: string;
  highlights: string[];
  usage: string;
  audience: 'Ca nhan' | 'Chuyen nghiep' | 'Ca hai';
  featured?: boolean;
  sourceUrl?: string;
}
export interface CartItem { slug: string; quantity: number; }
export interface Article { slug: string; category: string; title: string; excerpt: string; readTime: string; section: string[]; }
