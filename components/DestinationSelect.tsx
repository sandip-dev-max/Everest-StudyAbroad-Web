"use client";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { destinations } from "@/data/destinations";

const codes: Record<string, string> = {
  australia: "AU",
  canada: "CA",
  uk: "GB",
  usa: "US",
  germany: "DE",
  newzealand: "NZ",
  japan: "JP",
  india: "IN",
};

export function DestinationSelect({
  value,
  onChange,
  label = "Select destination",
}: {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = destinations.find((destination) => destination.slug === value);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative">
      <span className="pointer-events-none absolute left-4 top-2 z-10 text-[8px] font-extrabold uppercase tracking-[.14em] text-slate-400">
        {label}
      </span>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((current) => !current)}
        className="flex h-14 w-full items-center justify-between rounded-2xl bg-slate-50 px-4 pb-0 pt-4 text-left text-xs font-bold text-slate-800 outline-none ring-blue-200 focus:ring-2"
      >
        <span className="flex min-w-0 items-center gap-2">
          {selected ? (
            <>
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-sm shadow-sm">
                {selected.flag}
              </span>
              <span className="truncate">{codes[selected.slug]} · {selected.country}</span>
            </>
          ) : (
            "All destinations"
          )}
        </span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-30 max-h-72 overflow-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(15,23,42,.16)]" role="listbox">
          <button type="button" onClick={() => { onChange("all"); setOpen(false); }} className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs font-bold text-slate-700 hover:bg-slate-50">
            All destinations
            {value === "all" && <Check className="h-4 w-4 text-blue-600" />}
          </button>
          {destinations.map((destination) => (
            <button type="button" role="option" aria-selected={value === destination.slug} key={destination.slug} onClick={() => { onChange(destination.slug); setOpen(false); }} className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs font-bold text-slate-700 hover:bg-slate-50">
              <span className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-50 text-base">{destination.flag}</span>
                <span>{codes[destination.slug]} · {destination.country}</span>
              </span>
              {value === destination.slug && <Check className="h-4 w-4 text-blue-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
