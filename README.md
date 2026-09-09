# Everest Global Network

The official website for Everest Global Network, a study-abroad consultancy in Tinkune, Kathmandu. The site helps Nepalese students explore international courses, universities and destinations, then request guidance for applications, documents and visa preparation.

## Highlights

- Course, university and destination discovery pages
- Dynamic detail pages generated from the catalogue data
- Consultation form with WhatsApp handoff
- Responsive layouts for mobile, tablet and desktop
- Accessible loading, error and not-found states
- Open Graph, canonical URL, sitemap and robots metadata
- Local business structured data for Kathmandu and Tinkune
- Cookie consent and policy pages

## Technology

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Project structure

```text
app/          Routes, layouts, metadata and global styles
components/   Reusable UI and interactive client components
data/         Course, university and destination catalogue data
lib/           Shared site configuration and helpers
public/       Images, video and other static assets
```

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

On macOS or Linux, use this instead of the `copy` command:

```bash
cp .env.example .env.local
```

## Environment configuration

Set `NEXT_PUBLIC_SITE_URL` to the real public domain before deploying:

```env
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
```

This value is used for canonical URLs, Open Graph metadata, structured data, `sitemap.xml` and `robots.txt`. Site contact details, business hours and social links are maintained in [`lib/site.ts`](lib/site.ts).

## Production

Build and start the production server with:

```bash
npm run build
npm start
```

For a hosted deployment, use a Node-compatible platform such as Vercel or another service that supports Next.js App Router applications. Add `NEXT_PUBLIC_SITE_URL` to the platform's production environment variables before building.

## Key routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage and course finder |
| `/about` | Company story and values |
| `/services` | Consultancy services |
| `/courses` | Course catalogue |
| `/universities` | University catalogue |
| `/destinations` | Study destinations |
| `/contact` | Consultation request form |
| `/sitemap.xml` | Search engine sitemap |
| `/robots.txt` | Crawler rules |

## Before launch

- Set the production value of `NEXT_PUBLIC_SITE_URL`.
- Verify the phone number, email, address, hours and social links in `lib/site.ts`.
- Claim and complete the Google Business Profile for the Kathmandu office.
- Confirm the Google Business Profile name, address and phone match the website exactly.
- Connect the consultation form to the preferred CRM, email or WhatsApp workflow if server-side lead storage is required.
- Review the Privacy Policy, Terms & Conditions and Cookie Policy with the business's legal adviser.
- Confirm all university, course, destination and visa guidance is current.
- Test mobile layouts at 320px, 375px, 390px and 430px widths, plus desktop breakpoints.
- Run Lighthouse for performance, accessibility, SEO and best practices.
- Submit the production sitemap to Google Search Console and Bing Webmaster Tools.

## Useful commands

```bash
npm run dev       # Start the development server
npm run build     # Create a production build and type-check the app
npm start         # Serve the production build
```

## Content and configuration

Catalogue content is stored in [`data/catalog.ts`](data/catalog.ts) and [`data/destinations.ts`](data/destinations.ts). Shared business identity, contact information and SEO defaults are stored in [`lib/site.ts`](lib/site.ts). Static media belongs in `public/assets/` and can be referenced from the site with paths beginning `/assets/`.
