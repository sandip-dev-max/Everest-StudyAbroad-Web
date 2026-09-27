import type { Metadata } from 'next';
import { site } from '@/lib/site';
const title = 'Study Abroad Services';
const description = 'Explore Everest Global Network services for admissions, documentation, visa preparation, scholarships, test preparation and pre-departure support.';
const url = new URL('/services', site.siteUrl).toString();
export const metadata: Metadata = { title, description, alternates: { canonical: url }, openGraph: { type: 'website', title: `${title} | ${site.name}`, description, url }, twitter: { card: 'summary', title: `${title} | ${site.name}`, description } };
export default function Layout({children}:{children:React.ReactNode}){return children}
