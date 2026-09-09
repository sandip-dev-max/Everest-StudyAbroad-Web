
export interface Destination {
  slug: string;
  country: string;
  flag: string;
  tagline: string;
  overview: string;
  tuition: string;
  living: string;
  workRights: string;
  topUnis: string[];
  visaNote: string;
  image: string;
}

export const destinations: Destination[] = [
  {
    slug: "australia",
    country: "Australia",
    flag: "🇦🇺",
    tagline: "Globally ranked universities and post-study work pathways.",
    overview:
      "World-class research universities, two-year post-study work rights and one of the highest student satisfaction scores worldwide.",
    tuition: "AUD 22,000 – 48,000 / year",
    living: "AUD 21,000 / year",
    workRights: "Up to 48 hrs / fortnight during term",
    topUnis: ["University of Melbourne", "ANU", "University of Sydney", "Monash University"],
    visaNote: "Subclass 500 student visa with GTE-aligned documentation.",
    image: "/assets/dest-australia.jpg",
  },
  {
    slug: "canada",
    country: "Canada",
    flag: "🇨🇦",
    tagline: "Affordable excellence with permanent residency pathways.",
    overview:
      "Welcoming immigration policies, a high quality of life, and one of the most respected post-graduate work permit programs in the world.",
    tuition: "CAD 18,000 – 40,000 / year",
    living: "CAD 15,000 / year",
    workRights: "Up to 24 hrs / week off-campus",
    topUnis: ["University of Toronto", "McGill University", "UBC", "University of Waterloo"],
    visaNote: "Study permit with SDS-eligible processing for Nepalese students.",
    image: "/assets/dest-canada.jpg",
  },
  {
    slug: "uk",
    country: "United Kingdom",
    flag: "🇬🇧",
    tagline: "Centuries of academic prestige and fast-tracked degrees.",
    overview:
      "Home to Oxford, Cambridge and Imperial. One-year master's programmes and a two-year Graduate Route post-study visa.",
    tuition: "GBP 15,000 – 38,000 / year",
    living: "GBP 12,000 / year",
    workRights: "Up to 20 hrs / week during term",
    topUnis: ["University of Oxford", "Cambridge", "Imperial College London", "UCL"],
    visaNote: "Student Route visa with CAS from a licensed sponsor.",
    image: "/assets/dest-uk.jpg",
  },
  {
    slug: "usa",
    country: "United States",
    flag: "🇺🇸",
    tagline: "Unmatched research, flexibility and Ivy League heritage.",
    overview:
      "4,000+ accredited institutions, generous merit scholarships and OPT extensions of up to 3 years for STEM graduates.",
    tuition: "USD 25,000 – 60,000 / year",
    living: "USD 14,000 / year",
    workRights: "On-campus during term, CPT/OPT off-campus",
    topUnis: ["Harvard University", "Stanford", "MIT", "Columbia University"],
    visaNote: "F-1 visa with I-20 from a SEVP-certified school.",
    image: "/assets/dest-usa.jpg",
  },
  {
    slug: "germany",
    country: "Germany",
    flag: "🇩🇪",
    tagline: "Tuition-free public universities and an engineering powerhouse.",
    overview:
      "Most public universities charge no tuition. English-taught master's programs and an 18-month job-seeker visa after graduation.",
    tuition: "EUR 0 – 1,500 / year (public)",
    living: "EUR 11,200 / year",
    workRights: "120 full or 240 half days per year",
    topUnis: ["TU Munich", "LMU Munich", "Heidelberg", "RWTH Aachen"],
    visaNote: "National D visa with blocked account of €11,208.",
    image: "/assets/dest-germany.jpg",
  },
  {
    slug: "newzealand",
    country: "New Zealand",
    flag: "🇳🇿",
    tagline: "Globally accredited degrees in a safe, welcoming country.",
    overview:
      "All eight universities ranked in the global top 3%. Up to three years of post-study work rights after a bachelor's.",
    tuition: "NZD 22,000 – 40,000 / year",
    living: "NZD 20,000 / year",
    workRights: "Up to 20 hrs / week during term",
    topUnis: ["University of Auckland", "University of Otago", "Victoria Wellington", "Canterbury"],
    visaNote: "Fee-paying student visa with INZ-approved provider.",
    image: "/assets/dest-newzealand.jpg",
  },
  {
    slug: "japan",
    country: "Japan",
    flag: "🇯🇵",
    tagline: "World-class research with generous government scholarships.",
    overview:
      "MEXT scholarships, English-medium programs at top universities and a clear post-graduate work visa pathway.",
    tuition: "JPY 535,800 – 1,500,000 / year",
    living: "JPY 1,200,000 / year",
    workRights: "Up to 28 hrs / week with permit",
    topUnis: ["University of Tokyo", "Kyoto University", "Osaka University", "Waseda"],
    visaNote: "Student visa via Certificate of Eligibility.",
    image: "/assets/dest-japan.jpg",
  },
  {
    slug: "india",
    country: "India",
    flag: "🇮🇳",
    tagline: "Globally recognised education in a dynamic, diverse destination.",
    overview:
      "A diverse study destination with respected universities, growing technology and business sectors, and a wide range of affordable academic pathways.",
    tuition: "INR 100,000 – 600,000 / year",
    living: "INR 180,000 – 400,000 / year",
    workRights: "Subject to current student visa conditions",
    topUnis: ["IIT Delhi", "IIT Bombay", "University of Delhi", "BITS Pilani"],
    visaNote: "Student visa requirements vary by programme and current immigration policy.",
    image: "/assets/india.png",
  },
];

export const bySlug = (slug: string) => destinations.find((d) => d.slug === slug);
