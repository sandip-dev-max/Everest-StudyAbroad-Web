import type { Metadata } from 'next';
import { site } from '@/lib/site';
const title = 'Study Destinations';
const description = 'Compare international study destinations, costs, universities and pathways with Everest Global Network.';
const url = new URL('/destinations', site.siteUrl).toString();
export const metadata: Metadata = { title, description, alternates: { canonical: url }, openGraph: { type: 'website', title: `${title} | ${site.name}`, description, url }, twitter: { card: 'summary', title: `${title} | ${site.name}`, description } };
export default function Layout({children}:{children:React.ReactNode}){return children}
