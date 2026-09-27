import type { Metadata } from 'next';
import { site } from '@/lib/site';
const title = 'Courses and Study Programmes';
const description = 'Search courses by subject, study level, destination and university. Compare study programmes with guidance from Everest Global Network.';
const url = new URL('/courses', site.siteUrl).toString();
export const metadata: Metadata = { title, description, alternates: { canonical: url }, openGraph: { type: 'website', title: `${title} | ${site.name}`, description, url }, twitter: { card: 'summary', title: `${title} | ${site.name}`, description } };
export default function Layout({children}:{children:React.ReactNode}){return children}
