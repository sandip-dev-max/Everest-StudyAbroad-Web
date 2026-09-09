export const site = {
  name: 'Everest Global Network',
  shortName: 'Everest',
  description:
    'Everest Global Network is a study abroad consultancy in Tinkune, Kathmandu, helping Nepalese students choose courses, universities and destinations worldwide.',
  email: 'Everestglobalnetwork@gmail.com',
  phone: '+977 9820556001',
  whatsapp: '9779820556001',
  address: 'Tinkune, Kathmandu, Nepal',
  hours: 'Sun – Fri · 9:30 am – 6:30 pm',
  instagram: 'https://www.instagram.com/everestglobalnetwork/',
  facebook: 'https://www.facebook.com/everestglobalnetwork/',
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
};
