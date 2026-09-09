const courseImageAliases: Record<string, string> = {
  "BSc Business Management": "Business Management",
  "BSc (Hons) Accounting and Finance with Foundation Year":
    "Accounting and Finance - BSc (Hons)",
  "BA (Hons) Accounting and Finance with Work Placement":
    "Accounting and Finance - BSc (Hons)",
  "BSc Artificial Intelligence (including Year Abroad)":
    "Artificial Intelligence MSc",
  "Architectural Engineering - BEng (Hons), MEng (Hons)":
    "Architectural Engineering",
  "Bachelor of Business Administration": "bba-business",
};

const facultyFallbacks: Record<string, string> = {
  business: "Bachelor of Business",
  "business-economics": "Bachelor of Commerce",
  "computing-it": "computer code",
  engineering: "Architectural Engineering",
  health: "Advanced Biomedical Science MSc",
  law: "LLB Law",
  management: "Business Management",
  "arts-design": "Animation",
  "social-science": "Bachelor of Commerce",
  education: "Business Management",
  hospitality: "Bachelor of Business",
  psychology: "Advanced Biomedical Science MSc",
};

const availableCourseImages = new Set([
  "Accounting (Pathways) - BSc (Hons)",
  "Accounting and Finance - BSc (Hons)",
  "Accounting and Finance MSc",
  "Accounting and Law - BSc (Hons)",
  "Advanced Biomedical Science MSc",
  "Advertising and Public Relations Management MSc",
  "Aeronautical Engineering MSc",
  "Animation MA",
  "Animation",
  "Architectural Engineering",
  "Architecture and Sustainability MSc",
  "Artificial Intelligence MSc",
  "BA Business Management",
  "Bachelor of Business",
  "Bachelor of Commerce",
  "Business Administration",
  "Business Management",
  "bba-business",
  "computer code",
  "Computer Programming",
  "Computer Science",
  "LLB Law with Business",
  "LLB Law",
  "MBA Foundation",
  "MSc International Business",
  "Sport Management",
]);

export function courseImage(name: string, faculty: string, position = 0) {
  const candidate = courseImageAliases[name] || name;
  const fallback = facultyFallbacks[faculty] || "Business Management";
  const fileName = availableCourseImages.has(candidate)
    ? candidate
    : fallback === "Bachelor of Business" && position % 2 === 1
      ? "bba-business"
      : fallback;
  return `/assets/course/${encodeURIComponent(fileName)}.jpg`;
}
