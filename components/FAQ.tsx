'use client';
import { useState } from 'react';
import { Plus } from 'lucide-react';

export type FAQItem = { q: string; a: string };
export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item, i) => (
        <div key={item.q}>
          <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
            <span className="text-base font-semibold text-[#0B1B3A] sm:text-lg">{item.q}</span>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500"><Plus className={`h-4 w-4 transition-transform ${open === i ? 'rotate-45' : ''}`} /></span>
          </button>
          <div className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="min-h-0">
              <p className="max-w-3xl pb-6 text-sm leading-7 text-slate-500">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
