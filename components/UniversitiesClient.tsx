"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, ArrowUpRight, MapPin } from "lucide-react";
import { universities } from "@/data/catalog";
const universityImage = (name: string) => {
  const fileName = name === "Berlin School of Business and Innovation (BSBI)"
    ? "Berlin School of Business and Innovation"
    : name;
  return `/assets/universities/${encodeURIComponent(fileName)}.jpg`;
};
export function UniversitiesClient() {
  const [q, setQ] = useState("");
  const [country, setCountry] = useState("all");
  const list = useMemo(
    () =>
      universities
        .filter(
          (u) =>
            `${u.name} ${u.city} ${u.country}`
              .toLowerCase()
              .includes(q.toLowerCase()) &&
            (country === "all" || u.countrySlug === country),
        )
        .sort(
          (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
        ),
    [q, country],
  );
  return (
    <>
      <div className="grid gap-3 rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_25px_80px_rgba(15,23,42,.08)] sm:grid-cols-[1fr_auto]">
        <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="h-12 w-full bg-transparent text-sm outline-none"
            placeholder="Search universities, cities or countries..."
          />
        </div>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="rounded-2xl bg-slate-50 px-5 text-xs font-bold outline-none"
        >
          <option value="all">All countries</option>
          {[
            "australia",
            "canada",
            "uk",
            "usa",
            "germany",
            "newzealand",
            "japan",
            "india",
          ].map((x) => (
            <option key={x} value={x}>
              {x[0].toUpperCase() + x.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          <b className="text-slate-950">{list.length}</b> institutions
        </p>
        <span className="text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">
          Most visited first
        </span>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.length === 0 ? (
          <div className="md:col-span-2 xl:col-span-3 rounded-[28px] border border-slate-200 bg-[#F7F9FC] p-8 sm:p-12">
            <p className="eyebrow">No exact match</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em]">Let us help you shortlist.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">Try another country or search term, or speak with Everest for a personalised university shortlist.</p>
            <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[#087FC1] px-5 py-3 text-xs font-bold text-white">Talk to an advisor <ArrowUpRight className="ml-1 h-4 w-4"/></Link>
          </div>
        ) : list.map((u) => (
          <Link
            key={u.slug}
            href={`/universities/${u.slug}`}
            className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,23,42,.10)]"
          >
            <div className="relative h-52 overflow-hidden bg-slate-100">
              <img
                src={universityImage(u.name)}
                alt={u.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.15em]">
                {u.country}
              </span>
              {u.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-[#087FC1] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.15em] text-white">
                  Most visited
                </span>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{u.name}</h3>
                  <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="h-3 w-3" />
                    {u.city}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-300" />
              </div>
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
                {u.description}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-[10px] font-bold uppercase tracking-[.15em] text-slate-400">
                <span>{u.coursesCount || "Multiple"} programs</span>
                <span className="text-blue-600">Explore</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
