"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ArrowUpRight,
  MapPin,
  Clock3,
} from "lucide-react";
import { courses, faculties } from "@/data/catalog";
import { courseImage } from "@/lib/course-image";
import { DestinationSelect } from "@/components/DestinationSelect";
export function CoursesClient() {
  const [q, setQ] = useState("");
  const [faculty, setFaculty] = useState("all");
  const [level, setLevel] = useState("all");
  const [destination, setDestination] = useState("all");
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setQ(p.get("q") || "");
    setFaculty(p.get("faculty") || "all");
    setLevel(p.get("level") || "all");
    setDestination(p.get("destination") || "all");
  }, []);
  const filtered = useMemo(
    () =>
      courses.filter(
        (c) =>
          `${c.name} ${c.universitySlug} ${c.destination} ${c.faculty}`
            .toLowerCase()
            .includes(q.toLowerCase()) &&
          (faculty === "all" || c.faculty === faculty) &&
          (level === "all" || c.level === level) &&
          (destination === "all" || c.destinationSlug === destination),
      ),
    [q, faculty, level, destination],
  );
  return (
    <>
      <div className="grid gap-3 rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_25px_80px_rgba(15,23,42,.07)] lg:grid-cols-[1fr_auto_auto_auto]">
        <div className="flex items-center gap-3 rounded-2xl bg-[#f5f6f8] px-4">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="h-12 w-full bg-transparent text-sm outline-none"
            placeholder="Search course, university or subject..."
          />
        </div>
        <select
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
          className="rounded-2xl border-0 bg-[#f5f6f8] px-4 py-3 text-xs font-bold outline-none"
        >
          <option value="all">All subjects</option>
          {faculties.map((f) => (
            <option key={f.slug} value={f.slug}>
              {f.name}
            </option>
          ))}
        </select>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="rounded-2xl border-0 bg-[#f5f6f8] px-4 py-3 text-xs font-bold outline-none"
        >
          <option value="all">All levels</option>
          {[
            "Foundation",
            "Undergraduate",
            "Postgraduate",
            "Doctorate",
            "Diploma",
            "English Language",
          ].map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
        <DestinationSelect value={destination} onChange={setDestination} label="Destination" />
      </div>
      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          <b className="text-slate-950">{filtered.length}</b> courses found
        </p>
        <span className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-slate-400 sm:flex">
          <SlidersHorizontal className="h-3.5 w-3.5" /> Refine your search
        </span>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.length === 0 ? (
          <div className="md:col-span-2 xl:col-span-3 rounded-[28px] border border-slate-200 bg-[#F7F9FC] p-8 sm:p-12">
            <p className="eyebrow">No exact match</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em]">We can help you find one.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">Try a broader search, remove a filter, or talk to an Everest counsellor for alternative courses and universities.</p>
            <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[#087FC1] px-5 py-3 text-xs font-bold text-white">Talk to an advisor <ArrowUpRight className="ml-1 h-4 w-4"/></Link>
          </div>
        ) : filtered.slice(0, 90).map((c, i) => (
          <Link
            key={c.slug}
            href={`/courses/${c.slug}`}
            className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(49,92,255,.10)]"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={courseImage(c.name, c.faculty, i)}
                alt={c.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.15em] text-slate-700">
                {c.level}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="line-clamp-2 text-xl font-semibold leading-tight">
                  {c.name}
                </h3>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 group-hover:text-slate-950" />
              </div>
              <p className="mt-2 text-xs font-semibold capitalize text-slate-400">
                {c.universitySlug.replaceAll("-", " ")}
              </p>
              <div className="mt-5 grid gap-2 text-xs text-slate-500">
                <span className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" />
                  {c.destination}
                </span>
                <span className="flex items-center gap-2">
                  <Clock3 className="h-3.5 w-3.5" />
                  {c.duration} · {c.intake || "Flexible intake"}
                </span>
              </div>
              <div className="mt-6 flex items-end justify-between border-t border-slate-100 pt-4">
                <span className="text-xs font-bold text-slate-400">
                  Tuition
                </span>
                <b className="text-sm text-slate-950">
                  {c.fee || "Contact for fee"}
                </b>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
