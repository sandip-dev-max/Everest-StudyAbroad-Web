import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: { default: `${site.name} | Study Abroad Consultancy in Kathmandu`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: ['study abroad consultancy in Kathmandu', 'education consultancy in Tinkune', 'study abroad consultancy Nepal', 'study in Australia from Nepal', 'study in UK from Nepal', 'study in Canada from Nepal', 'Everest Global Network'],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: { type: 'website', siteName: site.name, title: `${site.name} | Study Abroad`, description: site.description, images: [{ url: '/assets/hero-student.jpg', width: 1080, height: 1920, alt: 'Student preparing for an international study journey' }] },
  twitter: { card: 'summary_large_image', title: `${site.name} | Study Abroad`, description: site.description, images: ['/assets/hero-student.jpg'] },
  icons: { icon: '/assets/everest-logo.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': `${site.siteUrl}/#organization`,
    name: site.name,
    url: site.siteUrl,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    priceRange: '$$',
    address: { '@type': 'PostalAddress', streetAddress: 'Tinkune', addressLocality: 'Kathmandu', addressRegion: 'Bagmati', addressCountry: 'NP' },
    areaServed: [{ '@type': 'Place', name: 'Tinkune' }, { '@type': 'City', name: 'Kathmandu' }, { '@type': 'Country', name: 'Nepal' }],
    serviceType: ['Study abroad consultancy', 'University application guidance', 'Student visa guidance'],
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:30', closes: '18:30' }],
    sameAs: [site.instagram, site.facebook],
  };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><Navbar />{children}<Footer /><CookieConsent /></body></html>;
}
