import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, MapPin, GraduationCap } from "lucide-react";
import { universities, courses } from "@/data/catalog";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const u=universities.find(x=>x.slug===slug);if(!u)return {title:"University not found"};return {title:u.name,description:`Explore ${u.name} in ${u.city}, ${u.country}. Discover programmes and get study abroad guidance from Everest Global Network.`,alternates:{canonical:`${site.siteUrl}/universities/${u.slug}`}}}

const universityImage = (name: string) => {
  const fileName = name === "Berlin School of Business and Innovation (BSBI)"
    ? "Berlin School of Business and Innovation"
    : name;
  return `/assets/universities/${encodeURIComponent(fileName)}.jpg`;
};
export function generateStaticParams() {
  return universities.map((u) => ({ slug: u.slug }));
}
export default async function UniversityDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const u = universities.find((x) => x.slug === slug);
  if (!u) return notFound();
  const related = courses.filter((c) => c.universitySlug === slug).slice(0, 6);
  return (
    <main id="main-content" className="pt-32">
      <section className="mx-auto max-w-[1380px] px-5 pb-14 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{label:"Universities",href:"/universities"},{label:u.name}]}/>
        <Link href="/universities" className="mt-4 inline-block text-xs font-bold text-slate-400">
          ← Back to universities
        </Link>
        <div className="mt-8 overflow-hidden rounded-[38px] bg-[#061225] text-white">
          <div className="grid lg:grid-cols-[1.1fr_.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.16em]">
                {u.country}
              </span>
              <h1 className="display mt-6 text-5xl font-semibold leading-[.9] sm:text-7xl">
                {u.name}
              </h1>
              <p className="mt-5 flex items-center gap-2 text-sm text-white/55">
                <MapPin className="h-4 w-4" />
                {u.city}, {u.country}
              </p>
              <p className="mt-7 max-w-xl text-sm leading-7 text-white/60">
                {u.description}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-xs font-extrabold text-slate-950"
              >
                Ask about this university{" "}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="min-h-[420px] overflow-hidden">
              <img
                src={universityImage(u.name)}
                alt={u.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F9FC] py-14 lg:py-20">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Available programmes</p>
              <h2 className="display mt-3 text-4xl font-semibold sm:text-5xl">
                Courses at {u.name}
              </h2>
            </div>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {related.map((c) => (
              <Link
                key={c.slug}
                href={`/courses/${c.slug}`}
                className="group rounded-[24px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-[9px] font-bold uppercase tracking-[.16em] text-blue-600">
                  {c.level}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{c.name}</h3>
                <p className="mt-2 text-xs text-slate-400">
                  {c.duration} · {c.fee || "Contact for fee"}
                </p>
                <span className="mt-6 inline-flex text-xs font-bold">
                  View programme <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
