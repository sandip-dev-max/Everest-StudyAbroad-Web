import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { site } from '@/lib/site';

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const itemListElement = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: new URL('/', site.siteUrl).toString() },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.label,
      ...(item.href ? { item: new URL(item.href, site.siteUrl).toString() } : {}),
    })),
  ];

  return (
    <>
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-slate-400">
        <Link href="/" className="transition hover:text-slate-900">Home</Link>
        {items.map((item, index) => (
          <span key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-slate-300" aria-hidden="true" />
            {item.href ? <Link href={item.href} className="transition hover:text-slate-900">{item.label}</Link> : <span aria-current={index === items.length - 1 ? 'page' : undefined}>{item.label}</span>}
          </span>
        ))}
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement }) }} />
    </>
  );
}
