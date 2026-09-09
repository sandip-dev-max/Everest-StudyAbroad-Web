# Everest Global Network

Production-ready Next.js study-abroad consultancy website.

## Run locally

```bash
npm install
npm run dev
```

## Production

Set `NEXT_PUBLIC_SITE_URL` to the real public domain before deploying. This value is used for canonical URLs, Open Graph metadata, sitemap.xml and robots.txt.

```bash
npm run build
npm start
```

## Launch checklist

- Replace the example site URL with the real production domain.
- Verify the business phone, email, address and social links in `lib/site.ts`.
- Connect the consultation form to the preferred CRM/email/WhatsApp workflow if server-side lead storage is required.
- Review Privacy Policy, Terms & Conditions and Cookie Policy with the business's legal adviser before publishing.
- Test mobile layouts at 320/375/390/430px and desktop breakpoints.
- Run Lighthouse for performance, accessibility, SEO and best practices.
# Everest-StudyAbroad-Web
