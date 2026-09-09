'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(localStorage.getItem('everest-cookie-consent') !== 'accepted'); }, []);
  if (!visible) return null;
  return <div role="dialog" aria-label="Cookie notice" className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_25px_80px_rgba(6,18,37,.18)] sm:inset-x-auto sm:bottom-5 sm:flex sm:items-center sm:gap-6 sm:p-5">
    <div className="min-w-0 flex-1"><p className="text-sm font-semibold text-[#0B1B3A]">A small note about cookies</p><p className="mt-1 text-xs leading-5 text-slate-500">We use essential cookies and similar technologies to keep the site working and understand how it is used. <Link href="/cookie-policy" className="font-semibold text-[#087FC1] hover:underline">Learn more</Link></p></div>
    <button type="button" onClick={() => { localStorage.setItem('everest-cookie-consent','accepted'); setVisible(false); }} className="mt-3 shrink-0 rounded-full bg-[#087FC1] px-5 py-2.5 text-xs font-bold text-white sm:mt-0">Accept</button>
  </div>;
}
