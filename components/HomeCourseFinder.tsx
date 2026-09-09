"use client";
import { useMemo, useState } from "react";
import { Search, ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { courses, faculties } from "@/data/catalog";
import Link from "next/link";
import { DestinationSelect } from "@/components/DestinationSelect";

const levels=["Foundation","Undergraduate","Postgraduate","Doctorate","Diploma","English Language"];
export function HomeCourseFinder(){
 const [destination,setDestination]=useState("all"); const [level,setLevel]=useState("all"); const [faculty,setFaculty]=useState("all"); const [q,setQ]=useState(""); const [submitted,setSubmitted]=useState(false);
 const matches=useMemo(()=>courses.filter(c=>(destination==='all'||c.destinationSlug===destination)&&(level==='all'||c.level===level)&&(faculty==='all'||c.faculty===faculty)&&(!q||`${c.name} ${c.universitySlug} ${c.destination}`.toLowerCase().includes(q.toLowerCase()))),[destination,level,faculty,q]);
 return <section className="relative z-10 -mt-1 bg-white py-8 sm:py-10"><div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10"><div className="rounded-[26px] border border-slate-200 bg-white p-3 shadow-[0_22px_70px_rgba(11,23,48,.09)]"><div className="grid gap-2 lg:grid-cols-[1.15fr_.8fr_.8fr_.9fr_auto]">
  <label className="flex h-14 items-center rounded-2xl bg-slate-50 px-4"><Search className="h-4 w-4 shrink-0 text-slate-400"/><input value={q} onChange={e=>setQ(e.target.value)} className="ml-3 w-full bg-transparent text-sm outline-none" placeholder="Search course, subject or university"/></label>
    <DestinationSelect value={destination} onChange={setDestination} />
  <Select value={level} onChange={setLevel} label="Course level"><option value="all">All levels</option>{levels.map(x=><option key={x}>{x}</option>)}</Select>
  <Select value={faculty} onChange={setFaculty} label="Faculty"><option value="all">All faculties</option>{faculties.map(f=><option key={f.slug} value={f.slug}>{f.name}</option>)}</Select>
  <button onClick={()=>setSubmitted(true)} className="h-14 rounded-2xl bg-[#087FC1] px-7 text-sm font-extrabold text-white transition hover:bg-[#0e58bb]">Search <ArrowUpRight className="ml-1.5 inline h-4 w-4"/></button>
 </div><div className="mt-3 flex items-center gap-2 px-1 text-[10px] font-semibold uppercase tracking-[.15em] text-slate-400"><SlidersHorizontal className="h-3.5 w-3.5"/> {submitted ? `${matches.length} matching programmes` : "Build your shortlist"}</div>
 {submitted && <div className="mt-3 border-t border-slate-100 pt-4">{matches.length ? <div className="flex flex-wrap gap-2">{matches.slice(0,5).map(c=><Link key={c.slug} href={`/courses/${c.slug}`} className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600">{c.name} <span className="text-slate-400">· {c.destination}</span></Link>)}{matches.length>5&&<Link href={`/courses?destination=${destination}&level=${level}&faculty=${faculty}&q=${encodeURIComponent(q)}`} className="rounded-full bg-slate-950 px-3 py-2 text-xs font-bold text-white">View all {matches.length} →</Link>}</div> : <div className="flex flex-col gap-3 rounded-2xl bg-[#f7f9fc] p-4 sm:flex-row sm:items-center sm:justify-between"><div><b className="text-sm text-slate-900">We couldn't find an exact match.</b><p className="mt-1 text-xs leading-5 text-slate-500">Don't worry — our counsellors can help you find a suitable course and university.</p></div><Link href="/contact" className="shrink-0 rounded-full bg-[#0b1730] px-4 py-2.5 text-xs font-bold text-white">We'll help you find one</Link></div>}</div>}
 </div></div></section>
}
function Select({value,onChange,label,children}:{value:string;onChange:(v:string)=>void;label:string;children:React.ReactNode}){return <label className="relative"><span className="pointer-events-none absolute left-4 top-2 text-[8px] font-extrabold uppercase tracking-[.14em] text-slate-400">{label}</span><select value={value} onChange={e=>onChange(e.target.value)} className="h-14 w-full appearance-none rounded-2xl border-0 bg-slate-50 px-4 pb-0 pt-4 text-xs font-bold text-slate-800 outline-none">{children}</select></label>}
