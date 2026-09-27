import type { Metadata } from 'next';
import { site } from '@/lib/site';
const title = 'Universities and Institutions';
const description = 'Explore universities by destination, city and study options, and find programmes that fit your plans with Everest Global Network.';
const url = new URL('/universities', site.siteUrl).toString();
export const metadata: Metadata = { title, description, alternates: { canonical: url }, openGraph: { type: 'website', title: `${title} | ${site.name}`, description, url }, twitter: { card: 'summary', title: `${title} | ${site.name}`, description } };
export default function Layout({children}:{children:React.ReactNode}){return children}
