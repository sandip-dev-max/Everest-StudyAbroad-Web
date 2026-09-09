import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

const stories = [
  { route: 'Nepal → Australia', title: 'A clearer path from the first shortlist to campus.', body: 'Course discovery, university selection and application guidance brought the whole journey into focus.', image: '/assets/dest-australia.jpg' },
  { route: 'Nepal → United Kingdom', title: 'From questions to a confident application.', body: 'A practical plan helped turn a broad study goal into a focused university shortlist.', image: '/assets/dest-uk.jpg' },
  { route: 'Nepal → Canada', title: 'A plan built around the student, not the paperwork.', body: 'The right course, destination and next steps came together with personal guidance.', image: '/assets/dest-canada.jpg' },
];

export function StudentStories() {
  return <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
    <Reveal><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">Student journeys</p><h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[.93] tracking-[-.06em] sm:text-6xl">From Everest <span className="font-serif font-normal italic text-[#5F6F85]">to the world.</span></h2></div><p className="max-w-md text-sm leading-6 text-slate-500">Every student starts somewhere. We help turn the uncertainty into a practical next step.</p></div></Reveal>
    <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
      <Link href="/contact" className="group relative min-h-[470px] overflow-hidden rounded-[28px] bg-slate-900"><img src={stories[0].image} loading="lazy" decoding="async" alt="Student journey to Australia" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-[#061225] via-black/15 to-transparent"/><div className="absolute inset-x-7 bottom-7 text-white sm:inset-x-10 sm:bottom-10"><span className="text-[9px] font-bold uppercase tracking-[.2em] text-white/55">{stories[0].route}</span><h3 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">{stories[0].title}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-white/65">{stories[0].body}</p><span className="mt-6 inline-flex items-center text-xs font-bold">Talk to an advisor <ArrowUpRight className="ml-1 h-4 w-4"/></span></div></Link>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">{stories.slice(1).map(s=><Link href="/contact" key={s.route} className="group grid min-h-[222px] overflow-hidden rounded-[28px] border border-slate-200 bg-[#F7F9FC] sm:grid-cols-[.9fr_1.1fr] lg:min-h-0"><div className="overflow-hidden"><img src={s.image} alt={s.route} className="h-full min-h-[190px] w-full object-cover transition duration-700 group-hover:scale-105"/></div><div className="p-6"><span className="text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">{s.route}</span><h3 className="mt-3 text-xl font-semibold leading-tight">{s.title}</h3><p className="mt-3 text-xs leading-5 text-slate-500">{s.body}</p><span className="mt-4 inline-flex text-xs font-bold">Start your plan <ArrowUpRight className="ml-1 h-4 w-4"/></span></div></Link>)}</div>
    </div>
    <p className="mt-6 text-[11px] text-slate-400">Illustrative journey examples based on our consultancy process; individual outcomes depend on eligibility, institutions and visa requirements.</p>
  </div></section>;
}
