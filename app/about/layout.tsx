import type { Metadata } from 'next';
import { site } from '@/lib/site';
export const metadata: Metadata = { title:'About Everest Global Network', description:'Meet Everest Global Network, our counsellors, mission, values and approach to helping students from Nepal study abroad.', alternates: { canonical: new URL('/about', site.siteUrl).toString() } };
export default function Layout({children}:{children:React.ReactNode}){return children}
