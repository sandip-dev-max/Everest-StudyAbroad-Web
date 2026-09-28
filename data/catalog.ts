export type Level = "Foundation" | "Undergraduate" | "Postgraduate" | "Doctorate" | "Diploma" | "English Language";

export interface Faculty {
  slug: string;
  name: string;
  description: string;
  overview?: string;
  modules?: string[];
  careerOutcomes?: string[];
  requirements?: string[];
}

export interface University {
  slug: string;
  name: string;
  country: string;
  countrySlug: string;
  city: string;
  featured?: boolean;
  description: string;
  coursesCount?: number;
  established?: string;
  internationalStudents?: string;
  address?: string;
  highlights?: string[];
}

export interface Course {
  slug: string;
  name: string;
  universitySlug: string;
  destination: string;
  destinationSlug: string;
  faculty: string;
  level: Level;
  mode: "Full Time" | "Part Time";
  duration: string;
  fee?: string;
  currency?: string;
  intake?: string;
  description: string;
  overview?: string;
  modules?: string[];
  careerOutcomes?: string[];
  requirements?: string[];
}

export const faculties: Faculty[] = [
  ["business", "Business", "Build practical knowledge across management, entrepreneurship, finance and strategy."],
  ["business-economics", "Business Economics", "Apply economic thinking to business decisions, markets and organisational performance."],
  ["computing-it", "Computer Science & IT", "Explore computing, software engineering, information technology and digital innovation."],
  ["law", "Law", "Prepare for professional careers through legal study, policy, justice and commercial law."],
  ["psychology", "Psychology", "Explore human behaviour, cognition, wellbeing and evidence-based psychological practice."],
  ["engineering", "Engineering", "Develop technical and analytical skills across engineering disciplines and applied technology."],
  ["health", "Health & Medicine", "Study health, life sciences and healthcare-related disciplines with career-focused pathways."],
  ["arts-design", "Arts & Design", "Turn creativity into professional capability across design, media, fashion and the arts."],
  ["social-science", "Social & Science", "Understand society, policy, people and scientific thinking through interdisciplinary study."],
  ["education", "Education", "Prepare for careers in teaching, educational psychology and learning support."],
  ["hospitality", "Hospitality & Tourism", "Build global hospitality, tourism, events and service-management expertise."],
  ["management", "Management", "Develop leadership and organisational skills for modern global workplaces."],
].map(([slug, name, description]) => ({ slug, name, description }));

export const universities: University[] = [
  { slug: "coventry-university", name: "Coventry University", country: "United Kingdom", countrySlug: "uk", city: "Coventry", featured: true, description: "A career-focused UK university with a broad portfolio of undergraduate and postgraduate study options." },
  { slug: "university-of-cambridge", name: "University of Cambridge", country: "United Kingdom", countrySlug: "uk", city: "Cambridge", featured: true, description: "One of the world's best-known research universities, offering a highly selective academic environment." },
  { slug: "university-of-greenwich", name: "University of Greenwich", country: "United Kingdom", countrySlug: "uk", city: "London", featured: true, description: "A London university offering career-oriented study across business, computing, engineering and more." },
  { slug: "de-montfort-university", name: "De Montfort University", country: "United Kingdom", countrySlug: "uk", city: "Leicester", featured: true, description: "A modern UK university with a broad international course portfolio and practical learning approach." },
  { slug: "swansea-university", name: "Swansea University", country: "United Kingdom", countrySlug: "uk", city: "Swansea", description: "A research-led university known for strong student experience and a wide range of disciplines." },
  { slug: "ulster-university", name: "Ulster University", country: "United Kingdom", countrySlug: "uk", city: "Belfast", description: "A multi-campus UK university with an extensive course catalogue across professional and academic fields." },
  { slug: "university-of-law", name: "University of Law", country: "United Kingdom", countrySlug: "uk", city: "London", description: "A specialist institution focused on legal education and related professional programmes." },
  { slug: "massachusetts-institute-of-technology", name: "Massachusetts Institute of Technology", country: "USA", countrySlug: "usa", city: "Cambridge", featured: true, description: "A globally recognised research institution with a strong focus on science, technology and innovation." },
  { slug: "san-francisco-state-university", name: "San Francisco State University", country: "USA", countrySlug: "usa", city: "San Francisco", description: "A public university offering diverse undergraduate and graduate programmes in a major global city." },
  { slug: "charles-darwin-university", name: "Charles Darwin University", country: "Australia", countrySlug: "australia", city: "Darwin", featured: true, description: "An Australian university with strengths across professional, regional and research-focused education." },
  { slug: "sydney-metropolitan-institute-of-technology", name: "Sydney Metropolitan Institute of Technology", country: "Australia", countrySlug: "australia", city: "Sydney", description: "A Sydney-based higher education provider with career-focused study options." },
  { slug: "lincoln-institute-of-higher-education", name: "Lincoln Institute of Higher Education", country: "Australia", countrySlug: "australia", city: "Melbourne", description: "An Australian higher education provider offering practical programmes for international students." },
  { slug: "niagara-college", name: "Niagara College", country: "Canada", countrySlug: "canada", city: "Ontario", featured: true, description: "A Canadian college known for applied education and career-oriented programmes." },
  { slug: "fairleigh-dickinson-university", name: "Fairleigh Dickinson University", country: "Canada", countrySlug: "canada", city: "Vancouver", description: "A globally oriented university with Canadian and international study opportunities." },
  { slug: "yorkville-university", name: "Yorkville University", country: "Canada", countrySlug: "canada", city: "Toronto", description: "A Canadian university offering flexible programmes designed around professional outcomes." },
  { slug: "berlin-school-of-business-and-innovation", name: "Berlin School of Business and Innovation (BSBI)", country: "Germany", countrySlug: "germany", city: "Berlin", featured: true, description: "A Berlin-based institution focused on business, management and innovation-oriented programmes." },
  { slug: "gisma-university-of-applied-sciences", name: "GISMA University of Applied Sciences", country: "Germany", countrySlug: "germany", city: "Potsdam", description: "An applied university offering business and technology-oriented programmes in Germany." },
  { slug: "university-of-europe-for-applied-sciences", name: "University of Europe for Applied Sciences", country: "Germany", countrySlug: "germany", city: "Berlin", description: "An applied sciences university with a strong emphasis on practice, creativity and international learning." },
  { slug: "vilnius-university", name: "Vilnius University", country: "Lithuania", countrySlug: "lithuania", city: "Vilnius", featured: true, description: "Lithuania's oldest and most prestigious university, known for research excellence and strong international engagement." },
  { slug: "kaunas-university-of-technology", name: "Kaunas University of Technology", country: "Lithuania", countrySlug: "lithuania", city: "Kaunas", featured: true, description: "A leading STEM and engineering university with a strong practical, innovation-focused learning model." },
  { slug: "vytautas-magnus-university", name: "Vytautas Magnus University", country: "Lithuania", countrySlug: "lithuania", city: "Kaunas", description: "A multidisciplinary university with broad strengths in business, social sciences, law and applied research." },
  { slug: "ism-university-of-management-and-economics", name: "ISM University of Management and Economics", country: "Lithuania", countrySlug: "lithuania", city: "Vilnius", description: "A business-facing private university specialising in management, digital business and international study pathways." },
  { slug: "lithuanian-university-of-health-sciences", name: "Lithuanian University of Health Sciences", country: "Lithuania", countrySlug: "lithuania", city: "Kaunas", description: "A health-focused university recognised for medicine, pharmacy and life-science study programmes." },
  { slug: "klaipeda-university", name: "Klaipėda University", country: "Lithuania", countrySlug: "lithuania", city: "Klaipėda", description: "A Baltic university with a strong profile in marine, social, and applied sciences alongside international study pathways." },
  { slug: "vilnius-college-of-technologies-and-design", name: "Vilnius College of Technologies and Design", country: "Lithuania", countrySlug: "lithuania", city: "Vilnius", description: "A practical university college focused on design, technology, engineering, and creative industry careers." },
  { slug: "lithuanian-sports-university", name: "Lithuanian Sports University", country: "Lithuania", countrySlug: "lithuania", city: "Kaunas", description: "A specialist university in sports science, physical education, health and athlete development." },
  { slug: "vilnius-gediminas-technical-university", name: "Vilnius Gediminas Technical University", country: "Lithuania", countrySlug: "lithuania", city: "Vilnius", description: "A leading technical university with strong demand for engineering, transportation, architecture, and master’s-level study." },
  { slug: "lcc-international-university", name: "LCC International University", country: "Lithuania", countrySlug: "lithuania", city: "Klaipėda", description: "A Christian international university with a focus on business, social sciences, and intercultural learning." },
  { slug: "kaunas-university-of-applied-sciences", name: "Kaunas University of Applied Sciences", country: "Lithuania", countrySlug: "lithuania", city: "Kaunas", description: "A practical applied-sciences institution offering industry-focused programmes and strong professional pathways." },
  { slug: "mykolas-romeris-university", name: "Mykolas Romeris University", country: "Lithuania", countrySlug: "lithuania", city: "Vilnius", description: "A modern university recognised for law, public governance, business, digital technology, and social sciences." },
  { slug: "kauno-technikos-kolegija", name: "Kauno Technikos Kolegija", country: "Lithuania", countrySlug: "lithuania", city: "Kaunas", description: "A technical college with applied learning pathways for engineering, business and technology-related study." },
  { slug: "vilnius-kolegija", name: "Vilnius Kolegija", country: "Lithuania", countrySlug: "lithuania", city: "Vilnius", description: "A college-focused institution offering applied higher education in business, technology and creative disciplines." },
  { slug: "kaunas-university-of-applied-engineering-sciences", name: "Kaunas University of Applied Engineering Sciences", country: "Lithuania", countrySlug: "lithuania", city: "Kaunas", description: "A career-oriented engineering college emphasising technical skills, applied study and industry relevance." },
  { slug: "smk-university-of-applied-sciences", name: "SMK University of Applied Sciences", country: "Lithuania", countrySlug: "lithuania", city: "Vilnius", description: "A business and applied-sciences university with a practical, international and career-focused learning model." },
  { slug: "vilnius-business-college", name: "Vilnius Business College", country: "Lithuania", countrySlug: "lithuania", city: "Vilnius", description: "A college specialising in business, commerce, entrepreneurship and professional education." },
  { slug: "klaipeda-state-college", name: "Klaipėda State College", country: "Lithuania", countrySlug: "lithuania", city: "Klaipėda", description: "A public college offering applied study pathways in business, logistics, tourism and technical fields." },
];


// Additional institutions and course records curated from the public Right Path catalogue.
// Current fees/intakes can change; verify before publishing commercially.
universities.push(
  { slug: "international-american-university", name: "International American University", country: "USA", countrySlug: "usa", city: "Los Angeles", established: "2005", description: "A Los Angeles institution offering professionally oriented business and accounting programmes with a student-centred learning environment.", highlights: ["Business and accounting pathways", "Undergraduate to doctoral study options", "Career-focused professional development"] },
  { slug: "arkansas-state-university", name: "Arkansas State University", country: "USA", countrySlug: "usa", city: "Jonesboro", established: "1909", description: "A public research university with international student services and a broad catalogue spanning business, science, health, computing and engineering.", highlights: ["International student support", "Wide undergraduate and graduate catalogue", "STEM, health and business options"] },
  { slug: "university-of-missouri-st-louis", name: "University of Missouri St Louis", country: "USA", countrySlug: "usa", city: "St. Louis", established: "1963", description: "A public research university with strengths across business, computing, education, science and social sciences, serving a diverse student population.", highlights: ["Research-led public university", "Business and accounting strengths", "Computing, science and professional programmes"] },
  { slug: "naps-national-academy-of-professional-studies", name: "NAPS (National Academy of Professional Studies)", country: "Australia", countrySlug: "australia", city: "Sydney", description: "A Sydney-based professional education provider focused on industry-relevant, nationally recognised programmes and work-ready graduates.", highlights: ["Industry-focused professional programmes", "Business and accounting pathways", "Multiple annual intakes on selected courses"] },
  { slug: "sihe-sydney-institute-of-higher-education", name: "SIHE (Sydney Institute of Higher Education)", country: "Australia", countrySlug: "australia", city: "Sydney", description: "A Sydney higher education provider offering undergraduate and postgraduate programmes with a practical, industry-focused approach.", highlights: ["Business and information technology", "Cybersecurity, data and networking pathways", "Sydney city learning environment"] },
  { slug: "algoma-university", name: "Algoma University", country: "Canada", countrySlug: "canada", city: "Sault Ste. Marie", established: "1965", description: "An Ontario university offering more than 30 academic programmes across business, humanities, social sciences and science at multiple campuses.", highlights: ["30+ academic programmes", "Business, science and social sciences", "Brampton, Sault Ste. Marie and Timmins campuses"] },
  { slug: "canada-west-university", name: "Canada West University", country: "Canada", countrySlug: "canada", city: "Vancouver", established: "2004", description: "A Vancouver institution focused on applied business and technology education, with undergraduate and graduate programmes designed around professional outcomes.", highlights: ["Business and technology focus", "Vancouver location", "Flexible undergraduate and graduate pathways"] },
  { slug: "liverpool-john-moores-university", name: "Liverpool John Moores University", country: "United Kingdom", countrySlug: "uk", city: "Liverpool", description: "A large UK university with a broad portfolio spanning business, engineering, computing, health, science, arts and social sciences.", highlights: ["Broad subject portfolio", "Liverpool city experience", "Foundation, undergraduate and postgraduate options"] },
  { slug: "university-of-east-london", name: "University of East London", country: "United Kingdom", countrySlug: "uk", city: "London", description: "A London university focused on practical learning, social justice, community engagement and strong industry links.", highlights: ["Practical career-focused learning", "Diverse London community", "Arts, business and technology pathways"] },
  { slug: "university-of-bedfordshire", name: "University of Bedfordshire", country: "United Kingdom", countrySlug: "uk", city: "Bedfordshire", established: "2006", internationalStudents: "20,000 listed on Right Path", description: "A practical and industry-focused UK university with a diverse international community and supportive learning environment.", highlights: ["Students from 100+ countries", "Practical, industry-focused teaching", "Business, law, tourism and computing options"] },
  { slug: "university-of-essex", name: "University of Essex", country: "United Kingdom", countrySlug: "uk", city: "Colchester", established: "1965", description: "A diverse research-led university with a large international community and a broad catalogue across business, computing, science and social sciences.", highlights: ["Strong research environment", "100+ global higher education partnerships", "Business, AI, data and accounting pathways"] },
  { slug: "university-of-hertfordshire", name: "University of Hertfordshire", country: "United Kingdom", countrySlug: "uk", city: "Hatfield", description: "A career-focused UK university with strong professional links and programmes across business, computing, psychology, animation and more.", highlights: ["Industry-linked learning", "Computing and cyber security", "Business, animation and psychology options"] },
);

const c = (
  slug: string,
  name: string,
  universitySlug: string,
  destination: string,
  destinationSlug: string,
  faculty: string,
  level: Level,
  duration: string,
  fee?: string,
  intake = "Multiple intakes"
): Course => ({ slug, name, universitySlug, destination, destinationSlug, faculty, level, mode: "Full Time", duration, fee, intake, description: `A career-focused ${level.toLowerCase()} programme designed to develop academic knowledge and practical skills for international study and future careers.` });

export const courses: Course[] = [
  c("accounting-and-finance-msc-dmu", "Accounting and Finance MSc", "de-montfort-university", "United Kingdom", "uk", "business", "Postgraduate", "1 year", "GBP 17,200 / year", "September"),
  c("advanced-biomedical-science-msc-dmu", "Advanced Biomedical Science MSc", "de-montfort-university", "United Kingdom", "uk", "health", "Postgraduate", "1 year", "GBP 16,300 / year", "September"),
  c("advertising-and-pr-management-msc-dmu", "Advertising and Public Relations Management MSc", "de-montfort-university", "United Kingdom", "uk", "business", "Postgraduate", "1 year", "GBP 17,200 / year", "September"),
  c("aeronautical-engineering-msc-dmu", "Aeronautical Engineering MSc", "de-montfort-university", "United Kingdom", "uk", "engineering", "Postgraduate", "1 year", "GBP 17,100 / year", "September"),
  c("architecture-and-sustainability-msc-dmu", "Architecture and Sustainability MSc", "de-montfort-university", "United Kingdom", "uk", "engineering", "Postgraduate", "1 year", "GBP 15,800 / year", "September"),
  c("artificial-intelligence-msc-dmu", "Artificial Intelligence MSc", "de-montfort-university", "United Kingdom", "uk", "computing-it", "Postgraduate", "1 year", "GBP 17,100 / year", "September"),
  c("accounting-pathways-ulster", "Accounting (Pathways) - BSc (Hons)", "ulster-university", "United Kingdom", "uk", "business", "Undergraduate", "4 years", "GBP 16,320 / year", "September"),
  c("accounting-and-finance-ulster", "Accounting and Finance - BSc (Hons)", "ulster-university", "United Kingdom", "uk", "business", "Undergraduate", "3 years", "GBP 16,320 / year", "September"),
  c("accounting-and-law-ulster", "Accounting and Law - BSc (Hons)", "ulster-university", "United Kingdom", "uk", "law", "Undergraduate", "4 years", "GBP 16,320 / year", "September"),
  c("accounting-with-computing-ulster", "Accounting with Computing - BSc (Hons)", "ulster-university", "United Kingdom", "uk", "computing-it", "Undergraduate", "4 years", "GBP 16,320 / year", "September"),
  c("animation-ulster", "Animation - BDes (Hons)", "ulster-university", "United Kingdom", "uk", "arts-design", "Undergraduate", "4 years", "GBP 16,320 / year", "September"),
  c("architectural-engineering-ulster", "Architectural Engineering - BEng (Hons), MEng (Hons)", "ulster-university", "United Kingdom", "uk", "engineering", "Undergraduate", "5 years", "GBP 16,320 / year", "September"),
  c("llb-law-university-of-law", "LLB Law", "university-of-law", "United Kingdom", "uk", "law", "Undergraduate", "3 years", "GBP 17,550 / year", "September"),
  c("llb-law-with-business", "LLB Law with Business", "university-of-law", "United Kingdom", "uk", "law", "Undergraduate", "3 years", "GBP 17,550 / year", "September"),
  c("llb-law-with-criminology", "LLB Law with Criminology", "university-of-law", "United Kingdom", "uk", "law", "Undergraduate", "3 years", "GBP 17,550 / year", "September"),
  c("llb-law-with-international-business", "LLB Law with International Business", "university-of-law", "United Kingdom", "uk", "law", "Undergraduate", "3 years", "GBP 17,550 / year", "September"),
  c("bsc-computing-coventry", "BSc Computing", "coventry-university", "United Kingdom", "uk", "computing-it", "Undergraduate", "3 years"),
  c("business-management-coventry", "BA Business Management", "coventry-university", "United Kingdom", "uk", "business", "Undergraduate", "3 years"),
  c("msc-international-business-greenwich", "MSc International Business", "university-of-greenwich", "United Kingdom", "uk", "business", "Postgraduate", "1 year"),
  c("msc-data-science-greenwich", "MSc Data Science", "university-of-greenwich", "United Kingdom", "uk", "computing-it", "Postgraduate", "1 year"),
  c("bsc-business-analytics-swansea", "BSc Business Analytics", "swansea-university", "United Kingdom", "uk", "business-economics", "Undergraduate", "3 years"),
  c("bsc-computer-science-swansea", "BSc Computer Science", "swansea-university", "United Kingdom", "uk", "computing-it", "Undergraduate", "3 years"),
  c("bsc-business-australia", "Bachelor of Business", "charles-darwin-university", "Australia", "australia", "business", "Undergraduate", "3 years"),
  c("master-information-technology-australia", "Master of Information Technology", "charles-darwin-university", "Australia", "australia", "computing-it", "Postgraduate", "2 years"),
  c("bachelor-business-sydney", "Bachelor of Business", "sydney-metropolitan-institute-of-technology", "Australia", "australia", "business", "Undergraduate", "3 years"),
  c("business-diploma-lincoln", "Diploma of Business", "lincoln-institute-of-higher-education", "Australia", "australia", "business", "Diploma", "2 years"),
  c("business-canada-niagara", "Business Administration", "niagara-college", "Canada", "canada", "business", "Undergraduate", "2 years"),
  c("computer-programming-niagara", "Computer Programming", "niagara-college", "Canada", "canada", "computing-it", "Diploma", "2 years"),
  c("mba-yorkville", "Master of Business Administration", "yorkville-university", "Canada", "canada", "management", "Postgraduate", "2 years"),
  c("business-management-bsbi", "BA Business Management", "berlin-school-of-business-and-innovation", "Germany", "germany", "management", "Undergraduate", "3 years"),
  c("international-business-gisma", "MSc International Business", "gisma-university-of-applied-sciences", "Germany", "germany", "business", "Postgraduate", "2 years"),
  c("business-management-ue", "BSc Business Management", "university-of-europe-for-applied-sciences", "Germany", "germany", "management", "Undergraduate", "3 years"),
  c("computer-science-mit", "Computer Science", "massachusetts-institute-of-technology", "USA", "usa", "computing-it", "Undergraduate", "4 years", undefined, "Fall"),
  c("computer-science-sfsu", "Computer Science", "san-francisco-state-university", "USA", "usa", "computing-it", "Undergraduate", "4 years"),
];


courses.push(
  c("ms-accountancy-sfsu", "Master of Science in Accountancy", "san-francisco-state-university", "USA", "usa", "business", "Postgraduate", "1 year", "USD 52,920 / year", "Fall"),
  c("bs-business-accounting-sfsu", "Bachelor of Science in Business Administration: Accounting", "san-francisco-state-university", "USA", "usa", "business", "Undergraduate", "4 years", "USD 52,920 / year", "Fall"),
  c("bba-iau", "Bachelor of Business Administration", "international-american-university", "USA", "usa", "business", "Undergraduate", "4 years", "USD 7,000 / year", "Multiple intakes"),
  c("mba-iau", "Master of Business Administration", "international-american-university", "USA", "usa", "management", "Postgraduate", "1 year", "USD 8,000 / year", "Multiple intakes"),
  c("data-science-arkansas-state", "Data Science and Data Analytics", "arkansas-state-university", "USA", "usa", "computing-it", "Undergraduate", "4 years", "USD 22,000 / year", "Fall"),
  c("sport-management-arkansas-state", "Sport Management", "arkansas-state-university", "USA", "usa", "management", "Undergraduate", "4 years", "USD 22,000 / year", "Fall"),
  c("mba-umsl", "Master of Business Administration", "university-of-missouri-st-louis", "USA", "usa", "management", "Postgraduate", "1 year", "USD 33,432 / year", "September"),
  c("computer-science-ms-umsl", "Computer Science, MS", "university-of-missouri-st-louis", "USA", "usa", "computing-it", "Postgraduate", "1 year", "USD 33,432 / year", "September"),
  c("business-accounting-naps", "Bachelor of Business (Accounting)", "naps-national-academy-of-professional-studies", "Australia", "australia", "business", "Undergraduate", "3 years", "AUD 9,000 / year", "March, July, November"),
  c("business-islamic-naps", "Bachelor of Business (Islamic Business)", "naps-national-academy-of-professional-studies", "Australia", "australia", "business", "Undergraduate", "3 years", "AUD 9,000 / year", "March, July, November"),
  c("business-accounting-sihe", "Bachelor of Business (Accounting)", "sihe-sydney-institute-of-higher-education", "Australia", "australia", "business", "Undergraduate", "4 years", "AUD 58,800", "January"),
  c("master-information-technology-sihe", "Master of Information Technology", "sihe-sydney-institute-of-higher-education", "Australia", "australia", "computing-it", "Postgraduate", "1 year", "AUD 58,800", "January"),
  c("business-entrepreneurship-sydney-met", "Bachelor of Business (Entrepreneurship)", "sydney-metropolitan-institute-of-technology", "Australia", "australia", "business", "Undergraduate", "4 years", "AUD 2,300 / year", "January"),
  c("bit-sydney-met", "Bachelor of Information Technology", "sydney-metropolitan-institute-of-technology", "Australia", "australia", "computing-it", "Undergraduate", "4 years", "AUD 2,300 / year", "January"),
  c("bachelor-business-information-systems-lihe", "Bachelor of Business Information Systems", "lincoln-institute-of-higher-education", "Australia", "australia", "computing-it", "Undergraduate", "36 months", "AUD 19,800", "Multiple intakes"),
  c("master-business-information-systems-lihe", "Master of Business Information Systems", "lincoln-institute-of-higher-education", "Australia", "australia", "computing-it", "Postgraduate", "24 months", "AUD 19,800", "January"),
  c("animation-ma-fdu", "Animation MA", "fairleigh-dickinson-university", "Canada", "canada", "arts-design", "Postgraduate", "1 year", "CAD 23,000", "Fall, Spring, Summer, Winter"),
  c("administrative-science-mas-fdu", "Administrative Science MAS", "fairleigh-dickinson-university", "Canada", "canada", "management", "Postgraduate", "1 year", "CAD 23,000", "Multiple intakes"),
  c("accounting-algoma", "Accounting", "algoma-university", "Canada", "canada", "business", "Undergraduate", "3 years", "CAD 10,000 / year", "September"),
  c("computer-science-algoma", "Computer Science", "algoma-university", "Canada", "canada", "computing-it", "Undergraduate", "1 year", "CAD 10,000 / year", "September"),
  c("bachelor-commerce-canada-west", "Bachelor of Commerce", "canada-west-university", "Canada", "canada", "business", "Undergraduate", "4 years", "CAD 76,800", "Spring, Fall"),
  c("mba-foundation-canada-west", "MBA Foundation", "canada-west-university", "Canada", "canada", "management", "Postgraduate", "1 year", "CAD 7,750", "Fall, Winter, Spring, Summer"),
  c("accounting-finance-foundation-ljmu", "BSc (Hons) Accounting and Finance with Foundation Year", "liverpool-john-moores-university", "United Kingdom", "uk", "business", "Undergraduate", "4 years", "GBP 17,750 / year", "September"),
  c("animal-behaviour-ljmu", "BSc (Hons) Animal Behaviour", "liverpool-john-moores-university", "United Kingdom", "uk", "health", "Undergraduate", "3 years", "GBP 18,250 / year", "September"),
  c("fine-art-uel", "BA (Hons) Fine Art", "university-of-east-london", "United Kingdom", "uk", "arts-design", "Undergraduate", "3 years", "GBP 14,160 / year", "September, January"),
  c("graphic-design-uel", "BA (Hons) Graphic Design", "university-of-east-london", "United Kingdom", "uk", "arts-design", "Undergraduate", "3-5 years", "GBP 14,160 / year", "September"),
  c("international-business-bedfordshire", "International Business BA (Hons)", "university-of-bedfordshire", "United Kingdom", "uk", "business", "Undergraduate", "3 years", "GBP 14,500 / year", "September"),
  c("law-criminology-bedfordshire", "Law with Criminology LLB (Hons)", "university-of-bedfordshire", "United Kingdom", "uk", "law", "Undergraduate", "3 years", "GBP 14,500 / year", "September, January"),
  c("accounting-essex", "BSc Accounting", "university-of-essex", "United Kingdom", "uk", "business", "Undergraduate", "3 years", "GBP 21,525 / year", "October"),
  c("ai-essex", "BSc Artificial Intelligence (including Year Abroad)", "university-of-essex", "United Kingdom", "uk", "computing-it", "Undergraduate", "4 years", "GBP 23,850 / year", "October"),
  c("accounting-finance-herts", "BA (Hons) Accounting and Finance with Work Placement", "university-of-hertfordshire", "United Kingdom", "uk", "business", "Undergraduate", "4 years", "GBP 15,965 / year", "September"),
  c("cyber-security-networks-herts", "BSc (Hons) Computer Science (Cyber Security and Networks)", "university-of-hertfordshire", "United Kingdom", "uk", "computing-it", "Undergraduate", "3 years", "GBP 15,965 / year", "September"),
  c("bba-international-business-vmu", "BBA International Business", "vytautas-magnus-university", "Lithuania", "lithuania", "business", "Undergraduate", "3 years", "EUR 3,200 / year", "September"),
  c("bsc-computer-science-kut", "BSc Computer Science", "kaunas-university-of-technology", "Lithuania", "lithuania", "computing-it", "Undergraduate", "4 years", "EUR 3,500 / year", "September"),
  c("msc-digital-business-ism", "MSc Digital Business", "ism-university-of-management-and-economics", "Lithuania", "lithuania", "management", "Postgraduate", "1.5 years", "EUR 4,200 / year", "September"),
  c("medicine-vus", "Medicine (MD)", "lithuanian-university-of-health-sciences", "Lithuania", "lithuania", "health", "Doctorate", "6 years", "EUR 6,000 / year", "September"),
  c("bsc-business-economics-vu", "BSc Business Economics", "vilnius-university", "Lithuania", "lithuania", "business-economics", "Undergraduate", "3 years", "EUR 2,800 / year", "September"),
);

courses.push(
  c("data-science-msc-coventry", "MSc Data Science", "coventry-university", "United Kingdom", "uk", "computing-it", "Postgraduate", "1 year"),
  c("mba-coventry", "Master of Business Administration", "coventry-university", "United Kingdom", "uk", "management", "Postgraduate", "1 year"),
  c("psychology-bsc-coventry", "BSc Psychology", "coventry-university", "United Kingdom", "uk", "psychology", "Undergraduate", "3 years"),
  c("adult-nursing-bsc-coventry", "BSc Adult Nursing", "coventry-university", "United Kingdom", "uk", "health", "Undergraduate", "3 years"),
  c("motorsport-engineering-beng-coventry", "BEng Motorsport Engineering", "coventry-university", "United Kingdom", "uk", "engineering", "Undergraduate", "3 years"),
  c("business-management-greenwich", "BA Business Management", "university-of-greenwich", "United Kingdom", "uk", "business", "Undergraduate", "3 years"),
  c("computer-science-greenwich", "BSc Computer Science", "university-of-greenwich", "United Kingdom", "uk", "computing-it", "Undergraduate", "3 years"),
  c("cyber-security-greenwich", "BSc Cyber Security", "university-of-greenwich", "United Kingdom", "uk", "computing-it", "Undergraduate", "3 years"),
  c("international-business-greenwich", "BA International Business", "university-of-greenwich", "United Kingdom", "uk", "business", "Undergraduate", "3 years"),
  c("construction-management-greenwich", "BSc Construction Management", "university-of-greenwich", "United Kingdom", "uk", "engineering", "Undergraduate", "3 years"),
  c("business-studies-computing-ulster", "Business Studies with Computing BSc (Hons)", "ulster-university", "United Kingdom", "uk", "business", "Undergraduate", "3 years"),
  c("computing-technologies-ulster", "Computing Technologies BSc (Hons)", "ulster-university", "United Kingdom", "uk", "computing-it", "Undergraduate", "3 years"),
  c("computing-science-ulster", "Computing Science BSc (Hons)", "ulster-university", "United Kingdom", "uk", "computing-it", "Undergraduate", "3 years"),
  c("software-engineering-ulster", "Software Engineering BSc (Hons)", "ulster-university", "United Kingdom", "uk", "computing-it", "Undergraduate", "3 years"),
  c("artificial-intelligence-msc-ulster", "Artificial Intelligence MSc", "ulster-university", "United Kingdom", "uk", "computing-it", "Postgraduate", "1 year"),
  c("business-management-dmu", "Business Management BA (Hons)", "de-montfort-university", "United Kingdom", "uk", "business", "Undergraduate", "3 years"),
  c("computer-science-dmu", "Computer Science BSc (Hons)", "de-montfort-university", "United Kingdom", "uk", "computing-it", "Undergraduate", "3 years"),
  c("cyber-security-dmu", "Cyber Security BSc (Hons)", "de-montfort-university", "United Kingdom", "uk", "computing-it", "Undergraduate", "3 years"),
  c("international-business-dmu", "International Business BA (Hons)", "de-montfort-university", "United Kingdom", "uk", "business", "Undergraduate", "3 years"),
  c("mechanical-engineering-dmu", "Mechanical Engineering BEng (Hons)", "de-montfort-university", "United Kingdom", "uk", "engineering", "Undergraduate", "3 years"),
  c("business-management-ljmu", "BA (Hons) Business Management", "liverpool-john-moores-university", "United Kingdom", "uk", "business", "Undergraduate", "3 years"),
  c("computer-science-ljmu", "BSc (Hons) Computer Science", "liverpool-john-moores-university", "United Kingdom", "uk", "computing-it", "Undergraduate", "3 years"),
  c("cyber-security-ljmu", "BSc (Hons) Cyber Security", "liverpool-john-moores-university", "United Kingdom", "uk", "computing-it", "Undergraduate", "3 years"),
  c("international-business-ljmu", "BA (Hons) International Business", "liverpool-john-moores-university", "United Kingdom", "uk", "business", "Undergraduate", "3 years"),
  c("project-management-msc-ljmu", "MSc Project Management", "liverpool-john-moores-university", "United Kingdom", "uk", "management", "Postgraduate", "1 year"),
  c("computer-science-arkansas-state", "Computer Science", "arkansas-state-university", "USA", "usa", "computing-it", "Undergraduate", "4 years"),
  c("business-administration-arkansas-state", "Business Administration", "arkansas-state-university", "USA", "usa", "business", "Undergraduate", "4 years"),
  c("accounting-arkansas-state", "Accounting", "arkansas-state-university", "USA", "usa", "business", "Undergraduate", "4 years"),
  c("engineering-management-arkansas-state", "Engineering Management", "arkansas-state-university", "USA", "usa", "engineering", "Undergraduate", "4 years"),
  c("information-systems-arkansas-state", "Information Systems", "arkansas-state-university", "USA", "usa", "computing-it", "Undergraduate", "4 years"),
  c("business-administration-umsl", "Bachelor of Science in Business Administration", "university-of-missouri-st-louis", "USA", "usa", "business", "Undergraduate", "4 years"),
  c("information-systems-umsl", "Information Systems", "university-of-missouri-st-louis", "USA", "usa", "computing-it", "Undergraduate", "4 years"),
  c("accounting-umsl", "Accounting", "university-of-missouri-st-louis", "USA", "usa", "business", "Undergraduate", "4 years"),
  c("cybersecurity-umsl", "Cybersecurity", "university-of-missouri-st-louis", "USA", "usa", "computing-it", "Undergraduate", "4 years"),
  c("business-analytics-umsl", "Business Analytics", "university-of-missouri-st-louis", "USA", "usa", "business-economics", "Undergraduate", "4 years"),
  c("bachelor-business-sihe", "Bachelor of Business", "sihe-sydney-institute-of-higher-education", "Australia", "australia", "business", "Undergraduate", "3 years"),
  c("bachelor-computer-science-sihe", "Bachelor of Computer Science", "sihe-sydney-institute-of-higher-education", "Australia", "australia", "computing-it", "Undergraduate", "3 years"),
  c("bachelor-accounting-sihe", "Bachelor of Accounting", "sihe-sydney-institute-of-higher-education", "Australia", "australia", "business", "Undergraduate", "3 years"),
  c("master-business-sihe", "Master of Business", "sihe-sydney-institute-of-higher-education", "Australia", "australia", "business", "Postgraduate", "2 years"),
  c("master-data-science-sihe", "Master of Data Science", "sihe-sydney-institute-of-higher-education", "Australia", "australia", "computing-it", "Postgraduate", "2 years"),
  c("business-administration-algoma", "Business Administration", "algoma-university", "Canada", "canada", "business", "Undergraduate", "4 years"),
  c("computer-science-business-algoma", "Computer Science and Business", "algoma-university", "Canada", "canada", "computing-it", "Undergraduate", "4 years"),
  c("psychology-algoma", "Psychology", "algoma-university", "Canada", "canada", "psychology", "Undergraduate", "4 years"),
  c("environmental-science-algoma", "Environmental Science", "algoma-university", "Canada", "canada", "social-science", "Undergraduate", "4 years"),
  c("economics-algoma", "Economics", "algoma-university", "Canada", "canada", "business-economics", "Undergraduate", "4 years"),
  c("mba-canada-west", "Master of Business Administration", "canada-west-university", "Canada", "canada", "management", "Postgraduate", "2 years"),
  c("business-analytics-canada-west", "Master of Business Analytics", "canada-west-university", "Canada", "canada", "business-economics", "Postgraduate", "2 years"),
  c("associate-commerce-canada-west", "Associate of Arts in Commerce", "canada-west-university", "Canada", "canada", "business", "Diploma", "2 years"),
  c("software-engineering-vu", "Software Engineering", "vilnius-university", "Lithuania", "lithuania", "computing-it", "Undergraduate", "4 years"),
  c("international-business-vu", "International Business", "vilnius-university", "Lithuania", "lithuania", "business", "Undergraduate", "3 years"),
  c("finance-vu", "Finance", "vilnius-university", "Lithuania", "lithuania", "business", "Undergraduate", "3 years"),
  c("data-science-msc-vu", "MSc Data Science", "vilnius-university", "Lithuania", "lithuania", "computing-it", "Postgraduate", "2 years"),
  c("marketing-vu", "Marketing", "vilnius-university", "Lithuania", "lithuania", "business", "Undergraduate", "3 years"),
);

export const getUniversity = (slug: string) => universities.find((u) => u.slug === slug);
export const getCourse = (slug: string) => courses.find((course) => course.slug === slug);
export const getFaculty = (slug: string) => faculties.find((faculty) => faculty.slug === slug);

export const courseMatchesSearch = (course: Course, query: string) => {
  const ignoredTerms = new Set(["and", "course", "courses", "of", "the", "university", "universities"]);
  const terms = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter((term) => term && !ignoredTerms.has(term));
  if (terms.length === 0) return true;

  const university = getUniversity(course.universitySlug);
  const faculty = getFaculty(course.faculty);
  const searchable = [
    course.name,
    course.universitySlug,
    university?.name,
    university?.country,
    university?.city,
    course.destination,
    course.faculty,
    faculty?.name,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return terms.every((term) => searchable.includes(term));
};
