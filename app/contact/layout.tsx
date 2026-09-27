import type { Metadata } from 'next';
import { site } from '@/lib/site';
export const metadata: Metadata = { title:'Contact Everest Global Network', description:'Book a consultation with Everest Global Network in Kathmandu for course, university, destination and study visa guidance.', alternates: { canonical: new URL('/contact', site.siteUrl).toString() } };
export default function Layout({children}:{children:React.ReactNode}){return children}
