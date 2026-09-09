import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  ShieldCheck,
  WalletCards,
  Plane,
  GraduationCap,
  FileCheck2,
  BookOpenCheck,
  MapPin,
} from "lucide-react";
import { destinations } from "@/data/destinations";
import { courses, faculties, universities } from "@/data/catalog";
import { Reveal } from "@/components/Reveal";
import { EarthJourney } from "@/components/EarthJourney";
import { HomeCourseFinder } from "@/components/HomeCourseFinder";
import { StudentStories } from "@/components/StudentStories";
import { FAQ } from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Abroad Consultancy in Kathmandu, Nepal",
  description:
    "Looking for a study abroad consultancy in Kathmandu or Tinkune? Everest Global Network helps Nepalese students with courses, universities, applications and visa guidance.",
};

const universityImage = (name: string) => {
  const fileName =
    name === "Berlin School of Business and Innovation (BSBI)"
      ? "Berlin School of Business and Innovation"
      : name;

  return `/assets/universities/${encodeURIComponent(fileName)}.jpg`;
};

const isRedProgram = (index: number) => [0, 3, 4, 7].includes(index);

export default function Home() {
  const featured = universities.filter((u) => u.featured).slice(0, 6);

  return (
    <main id="main-content" className="overflow-hidden">
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="hero-clean pt-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-7 lg:px-10">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-[#F4F8FC] shadow-[0_30px_90px_rgba(7,26,53,.10)] lg:min-h-[680px]">
            {/* Background atmosphere */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-white blur-3xl" />

              <div className="absolute right-[-120px] top-[10%] h-[500px] w-[500px] rounded-full bg-[#58C4ED]/15 blur-[110px]" />

              <div className="absolute bottom-[-180px] left-[35%] h-[450px] w-[450px] rounded-full bg-[#087FC1]/10 blur-[110px]" />

              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(#071A35 1px, transparent 1px), linear-gradient(90deg, #071A35 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            {/* Giant background word */}
            <div className="pointer-events-none absolute right-[-20px] top-[70px] hidden select-none text-[170px] font-black leading-none tracking-[-.09em] text-[#071A35]/[.025] xl:block">
              WORLD
            </div>

            <div className="relative grid min-h-[720px] lg:grid-cols-[.92fr_1.08fr] lg:min-h-[680px]">
              {/* ======================================================
                  LEFT CONTENT
              ====================================================== */}
              <div className="relative z-30 flex flex-col justify-center px-6 pb-10 pt-14 sm:px-10 lg:px-14 lg:py-16">
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#087FC1]/10 bg-white/80 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[.18em] text-[#087FC1] shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-[#087FC1]" />
                    Study Abroad Consultancy
                  </span>
                </Reveal>

                <Reveal delay={0.08}>
                  <h1 className="mt-6 max-w-[680px] text-[48px] font-extrabold leading-[.94] tracking-[-.065em] text-[#071A35] sm:text-[62px] lg:text-[72px] xl:text-[80px]">
                    Your future
                    <br />
                    is{" "}
                    <span className="relative inline-block font-serif font-normal italic text-[#087FC1]">
                      waiting.
                      <svg
                        className="absolute -bottom-2 left-0 w-full"
                        viewBox="0 0 220 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 9C55 3 160 2 218 7"
                          stroke="#58C4ED"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <br />
                    <span className="font-serif font-normal italic">
                      Let&apos;s take you there.
                    </span>
                  </h1>
                </Reveal>

                <Reveal delay={0.15}>
                  <p className="mt-6 max-w-[540px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    Find the right destination, course and university — with
                    Everest Global Network beside you from your first search
                    to your first day abroad.
                  </p>
                </Reveal>

                <Reveal delay={0.22}>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/courses"
                      className="group rounded-full bg-[#087FC1] px-6 py-3.5 text-xs font-extrabold text-white shadow-[0_12px_30px_rgba(8,127,193,.22)] transition-all hover:-translate-y-1 hover:bg-[#071A35]"
                    >
                      Find your dream course
                      <ArrowUpRight className="ml-1.5 inline h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    <Link
                      href="/destinations"
                      className="rounded-full border border-[#087FC1]/20 bg-white/90 px-6 py-3.5 text-xs font-extrabold text-[#0B1B3A] transition-all hover:-translate-y-1 hover:border-[#087FC1]/40"
                    >
                      Explore destinations
                    </Link>
                  </div>
                </Reveal>

                {/* Trust points */}
                <Reveal delay={0.3}>
                  <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-[10px] font-semibold text-slate-500 sm:text-xs">
                    <span className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-[#087FC1]" />
                      University Guidance
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-[#087FC1]" />
                      Application Support
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-[#087FC1]" />
                      Visa Assistance
                    </span>
                  </div>
                </Reveal>

                <p className="mt-5 max-w-[540px] text-xs leading-5 text-slate-500">
                  Based in Tinkune, Kathmandu, we guide students across Nepal
                  toward the right international study options.
                </p>
              </div>

              {/* ======================================================
                  RIGHT VISUAL
              ====================================================== */}
              <div className="relative min-h-[340px] overflow-hidden sm:min-h-[500px] lg:min-h-[680px]">
                {/* Orbital circles */}
                <div className="absolute left-[55%] top-[48%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#087FC1]/10 sm:h-[540px] sm:w-[540px]" />

                <div className="absolute left-[55%] top-[48%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#58C4ED]/20 sm:h-[400px] sm:w-[400px]" />

                <div className="absolute left-[55%] top-[48%] h-[590px] w-[590px] -translate-x-1/2 -translate-y-1/2 rotate-[24deg] rounded-[50%] border border-[#087FC1]/10" />

                {/* Curved travel paths */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 700 680"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M65 410C130 120 515 70 665 345"
                    stroke="#087FC1"
                    strokeOpacity=".13"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M45 300C220 610 520 590 690 190"
                    stroke="#58C4ED"
                    strokeOpacity=".13"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M140 545C300 380 475 375 620 470"
                    stroke="#071A35"
                    strokeOpacity=".05"
                    strokeWidth="1"
                  />
                </svg>

                {/* Orbital dots */}
                <span className="absolute left-[14%] top-[27%] h-3 w-3 rounded-full bg-[#087FC1] shadow-[0_0_0_7px_rgba(8,127,193,.07)]" />

                <span className="absolute right-[13%] top-[32%] h-2.5 w-2.5 rounded-full bg-[#58C4ED]" />

                <span className="absolute bottom-[19%] left-[18%] h-2 w-2 rounded-full bg-[#071A35]/30" />

                <span className="absolute bottom-[20%] right-[28%] h-2.5 w-2.5 rounded-full bg-[#087FC1]/50" />

                {/* ====================================================
                    UK DESTINATION CARD
                ==================================================== */}
                <Reveal delay={0.35}>
                  <div className="absolute left-[1%] top-[17%] z-30 hidden items-center gap-3 rounded-2xl border border-white bg-white/95 p-3 shadow-[0_18px_45px_rgba(7,26,53,.12)] backdrop-blur-md sm:flex">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#F2F7FB] text-2xl">
                      🇬🇧
                    </div>

                    <div>
                      <span className="block text-[8px] font-extrabold uppercase tracking-[.16em] text-slate-400">
                        Popular destination
                      </span>

                      <b className="mt-1 block text-xs text-[#071A35]">
                        United Kingdom
                      </b>
                    </div>
                  </div>
                </Reveal>

                {/* ====================================================
                    APPLICATION CARD
                ==================================================== */}
                <Reveal delay={0.45}>
                  <div className="absolute right-[4%] top-[11%] z-30 hidden rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_18px_45px_rgba(7,26,53,.12)] backdrop-blur-md sm:block">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50">
                        <FileCheck2 className="h-5 w-5 text-emerald-600" />
                      </div>

                      <div>
                        <span className="block text-[8px] font-extrabold uppercase tracking-[.15em] text-slate-400">
                          Application status
                        </span>

                        <b className="mt-1 block text-xs text-emerald-600">
                          Ready to apply
                        </b>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* ====================================================
                    STUDENT IMAGE
                ==================================================== */}
                <Reveal
                  delay={0.12}
                  className="absolute inset-0 z-20 flex items-center justify-center"
                >
                  <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#58C4ED]/15 blur-[70px]" />

                  <img
                    src="/assets/hero-student-girl.png"
                    alt="Student planning to study abroad"
                    className="relative z-10 h-auto w-full max-w-[520px] object-contain object-center drop-shadow-[0_30px_35px_rgba(7,26,53,.18)] sm:h-[128%] sm:w-[128%] sm:translate-y-[9%] lg:h-[145%] lg:w-[145%]"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-24 bg-gradient-to-t from-[#F4F8FC] via-[#F4F8FC]/55 to-transparent" />
                </Reveal>

                {/* ====================================================
                    PASSPORT
                ==================================================== */}
                <Reveal delay={0.6}>
                  <div className="absolute bottom-[18%] left-[4%] z-40 hidden h-16 w-16 rotate-[-10deg] items-center justify-center rounded-2xl bg-[#071A35] text-2xl shadow-[0_18px_35px_rgba(7,26,53,.2)] sm:flex">
                    <BookOpenCheck className="h-7 w-7 text-[#58C4ED]" />
                  </div>
                </Reveal>

                {/* ====================================================
                    GRADUATION CAP
                ==================================================== */}
                <Reveal delay={0.65}>
                  <div className="absolute bottom-[20%] right-[5%] z-40 hidden h-16 w-16 rotate-[8deg] items-center justify-center rounded-2xl border border-white bg-white shadow-[0_18px_35px_rgba(7,26,53,.12)] sm:flex">
                    <GraduationCap className="h-7 w-7 text-[#087FC1]" />
                  </div>
                </Reveal>

                {/* ====================================================
                    AIRPLANE
                ==================================================== */}
                <Reveal delay={0.55}>
                  <div className="absolute right-[17%] top-[27%] z-40 hidden sm:block">
                    <div className="grid h-12 w-12 rotate-[-15deg] place-items-center rounded-full bg-[#087FC1] text-white shadow-[0_12px_25px_rgba(8,127,193,.25)]">
                      <Plane className="h-5 w-5" />
                    </div>
                  </div>
                </Reveal>

                {/* ====================================================
                    LOCATION PIN
                ==================================================== */}
                <Reveal delay={0.7}>
                  <div className="absolute right-[23%] top-[46%] z-40 hidden sm:block">
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-white bg-white shadow-lg">
                      <MapPin
                        className="h-[18px] w-[18px] text-[#087FC1]"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </Reveal>

                {/* ====================================================
                    NEXT CHAPTER CARD
                ==================================================== */}
                <Reveal delay={0.75}>
                  <div className="absolute bottom-[1%] left-[1%] z-50 hidden rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_20px_50px_rgba(7,26,53,.14)] backdrop-blur-md sm:block">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-[#E8F7FD]">
                        <Globe2 className="h-5 w-5 text-[#087FC1]" />
                      </div>

                      <div>
                        <span className="block text-[8px] font-extrabold uppercase tracking-[.17em] text-slate-400">
                          Your next chapter
                        </span>

                        <b className="mt-1 block text-xs text-[#071A35]">
                          Begins beyond borders
                        </b>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* ====================================================
                    CANADA CARD
                ==================================================== */}
                <Reveal delay={0.8}>
                  <div className="absolute bottom-[7%] right-[3%] z-40 hidden rounded-xl border border-white bg-white/95 px-3 py-2.5 shadow-[0_15px_35px_rgba(7,26,53,.12)] backdrop-blur-md sm:block">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🇨🇦</span>

                      <div>
                        <span className="block text-[8px] font-bold uppercase tracking-[.15em] text-slate-400">
                          Explore
                        </span>

                        <b className="block text-xs text-[#071A35]">
                          Canada
                        </b>
                      </div>
                    </div>
                  </div>
                </Reveal>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICE MARQUEE
      ============================================================ */}
      <section className="overflow-hidden border-y border-slate-200 bg-white py-5">
        <div className="marquee-track flex w-max items-center gap-8 text-[10px] font-bold uppercase tracking-[.22em] text-slate-400">
          {Array.from({ length: 2 })
            .flatMap((_, k) =>
              [
                "COURSES",
                "UNIVERSITIES",
                "DESTINATIONS",
                "APPLICATIONS",
                "VISA GUIDANCE",
                "SCHOLARSHIPS",
                "STUDENT SUPPORT",
                "CAREER PATHWAYS",
              ].map((x) => (
                <span
                  key={k + x}
                  className="flex items-center gap-8"
                >
                  <b className="h-1.5 w-1.5 rounded-full bg-[#087FC1]" />
                  {x}
                </span>
              ))
            )}
        </div>
      </section>

      {/* ============================================================
          COURSE FINDER
      ============================================================ */}
      <HomeCourseFinder />

      {/* ============================================================
          THE EVEREST WAY
      ============================================================ */}
      <section className="bg-[#f7f9fc] py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="eyebrow">The Everest way</p>

            <h2 className="mt-4 max-w-5xl text-5xl font-semibold leading-[.93] tracking-[-.06em] text-[#0B1B3A] sm:text-7xl">
              One search.{" "}
              <span className="font-serif font-normal italic text-[#5F6F85]">
                A clearer way forward.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            <Feature
              icon={Globe2}
              n="01"
              title="Explore the world"
              body="Compare destinations, universities and courses in one simple, beautifully organised experience."
            />

            <Feature
              icon={ShieldCheck}
              n="02"
              title="Plan with confidence"
              body="Get practical guidance across admissions, documents, visas, scholarships and next steps."
              highlight
            />

            <Feature
              icon={WalletCards}
              n="03"
              title="Know your options"
              body="Understand costs, intakes and pathways before you make a life-changing decision."
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          DESTINATION JOURNEY
      ============================================================ */}
      <section className="bg-[#07162f] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="eyebrow-dark">Your next destination</p>

            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[.92] tracking-[-.06em] sm:text-7xl">
              The world is{" "}
              <span className="font-serif font-normal italic text-[#a9b9ff]">
                within reach.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/50">
              Start in Nepal. Follow the routes. Discover the universities and
              destinations that could shape your next chapter.
            </p>
          </Reveal>

          <div className="mt-10">
            <EarthJourney />
          </div>
        </div>
      </section>

      {/* ============================================================
          DESTINATIONS
      ============================================================ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="eyebrow">Most visited destinations</p>

                <h2 className="mt-3 text-5xl font-semibold tracking-[-.055em] sm:text-6xl">
                  Where will you go?
                </h2>
              </div>

              <Link
                href="/destinations"
                className="hidden text-sm font-bold sm:block"
              >
                View all destinations ↗
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.slice(0, 8).map((d, i) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="group relative h-[350px] overflow-hidden rounded-[28px] bg-slate-900"
              >
                <img
                  src={d.image}
                  alt={d.country}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-lg shadow-lg">
                  {d.flag}
                </div>

                <div className="absolute inset-x-5 bottom-5">
                  <span className="text-[9px] font-bold uppercase tracking-[.18em] text-white/55">
                    0{i + 1} · Destination
                  </span>

                  <h3 className="mt-1 text-3xl font-semibold text-white">
                    {d.country}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/60">
                    {d.tagline}
                  </p>

                  <span className="mt-4 inline-flex text-xs font-bold text-white">
                    Explore
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          COURSE DISCOVERY
      ============================================================ */}
      <section className="bg-[#f4f6f9] py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <Reveal>
              <p className="eyebrow">Course discovery</p>

              <h2 className="mt-4 text-5xl font-semibold leading-[.92] tracking-[-.055em] sm:text-6xl">
                Find a field{" "}
                <span className="font-serif font-normal italic text-[#5F6F85]">
                  worth building.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
                Search the existing catalogue by subject, study level,
                destination or university.
              </p>

              <Link
                href="/courses"
                className="mt-7 inline-flex rounded-full bg-[#087FC1] px-5 py-3.5 text-xs font-extrabold text-white"
              >
                Browse {courses.length}+ courses
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {faculties.slice(0, 8).map((f, i) => (
                <Link
                  key={f.slug}
                  href={`/courses?faculty=${f.slug}`}
                  className={`group flex items-center justify-between rounded-[20px] border p-5 transition hover:-translate-y-1 hover:shadow-xl ${
                    isRedProgram(i)
                      ? "border-[#E5EAF0] bg-white text-[#0B1B3A]"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">
                      0{i + 1}
                    </span>

                    <h3 className="mt-2 text-lg font-semibold">
                      {f.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Explore programs →
                    </p>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-[#087FC1]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          UNIVERSITIES
      ============================================================ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex items-end justify-between">
              <div>
                <p className="eyebrow">University network</p>

                <h2 className="mt-3 text-5xl font-semibold leading-[.9] tracking-[-.055em] sm:text-6xl">
                  Most visited{" "}
                  <span className="font-serif font-normal italic text-slate-500">
                    universities.
                  </span>
                </h2>
              </div>

              <Link
                href="/universities"
                className="hidden text-sm font-bold sm:block"
              >
                Browse all ↗
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {featured.map((u) => (
              <Link
                key={u.slug}
                href={`/universities/${u.slug}`}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,.10)]"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={universityImage(u.name)}
                    alt={u.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.15em] text-slate-700">
                    {u.country}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {u.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-400">
                        {u.city}, {u.country}
                      </p>
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition group-hover:text-slate-950" />
                  </div>

                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
                    {u.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          STUDENT STORIES
      ============================================================ */}
      <StudentStories />

      {/* ============================================================
          FAQ
      ============================================================ */}
      <section className="bg-[#F7F9FC] py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="eyebrow">Frequently asked</p>

                <h2 className="mt-4 text-5xl font-semibold leading-[.93] tracking-[-.06em] sm:text-6xl">
                  Questions before the{" "}
                  <span className="font-serif font-normal italic text-[#5F6F85]">
                    big move.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
                  A few of the questions students ask before choosing a
                  course, university or destination.
                </p>
              </div>

              <FAQ
                items={[
                  {
                    q: "How do I choose the right course?",
                    a: "Start with your academic background, interests, career goals, budget and preferred destinations. Everest can help you compare suitable programmes and entry requirements.",
                  },
                  {
                    q: "Can Everest help me shortlist universities?",
                    a: "Yes. We can help you compare institutions, programmes, locations, costs and intakes so your shortlist reflects your goals and eligibility.",
                  },
                  {
                    q: "Which destinations can I explore?",
                    a: "Our current catalogue includes Australia, the United Kingdom, Canada, the USA, Germany, New Zealand, Japan and India. Availability varies by course and institution.",
                  },
                  {
                    q: "Can you help with visa preparation?",
                    a: "Our team provides guidance around documentation, financial evidence, preparation and application steps. Visa decisions remain with the relevant government authority.",
                  },
                  {
                    q: "What happens in a consultation?",
                    a: "We learn about your education, goals and preferences, then discuss realistic course, university and destination options and the next steps.",
                  },
                  {
                    q: "What if I cannot find the course I want?",
                    a: "Use the course finder and, if there is no exact match, contact us. Our counsellors can help identify alternative programmes and institutions.",
                  },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
      ============================================================ */}
      <section className="bg-[#f3f6ff] py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-[34px] bg-[#0B1B3A] p-8 text-white shadow-[0_35px_100px_rgba(11,27,58,.18)] sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-white/60">
                  Start your journey
                </p>

                <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[.9] tracking-[-.06em] sm:text-7xl">
                  Big decision.
                  <br />
                  <span className="font-serif font-normal italic text-white/85">
                    Clear next step.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-6 text-white/70">
                  Tell us what you are considering and let our team help you
                  turn possibilities into a practical shortlist.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex h-fit rounded-full bg-white px-7 py-4 text-sm font-extrabold text-slate-950"
              >
                Book a free consultation
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================================================================
   STAT
================================================================ */
function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <b className="block text-2xl font-semibold tracking-[-.04em] text-[#0a1733]">
        {n}
      </b>

      <span className="mt-1 block text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">
        {l}
      </span>
    </div>
  );
}

/* ================================================================
   FEATURE
================================================================ */
function Feature({
  icon: Icon,
  n,
  title,
  body,
  highlight = false,
}: {
  icon: any;
  n: string;
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <Reveal
      className={`rounded-[26px] border p-7 shadow-[0_15px_50px_rgba(15,23,42,.04)] ${
        highlight
          ? "border-[#087FC1] bg-[#087FC1] text-white"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`grid h-11 w-11 place-items-center rounded-2xl ${
            highlight
              ? "bg-white text-[#087FC1]"
              : "bg-[#0B1B3A] text-white"
          }`}
        >
          <Icon className="h-5 w-5" />
        </span>

        <span
          className={`text-[10px] font-bold tracking-[.2em] ${
            highlight ? "text-white/70" : "text-slate-300"
          }`}
        >
          {n}
        </span>
      </div>

      <h3 className="mt-8 text-2xl font-semibold tracking-[-.03em]">
        {title}
      </h3>

      <p
        className={`mt-3 text-sm leading-6 ${
          highlight ? "text-white/80" : "text-slate-500"
        }`}
      >
        {body}
      </p>

      <div
        className={`mt-6 flex items-center gap-2 text-xs font-bold ${
          highlight ? "text-white" : "text-[#087FC1]"
        }`}
      >
        <Check className="h-4 w-4" />
        Built around your goals
      </div>
    </Reveal>
  );
}