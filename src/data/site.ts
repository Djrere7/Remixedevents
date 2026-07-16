/**
 * Single source of truth for site-wide content.
 * Edit copy, services, testimonials and links here. Pages read from this.
 */

export const site = {
  name: 'REmixed Events',
  legalName: 'REmixed Events LLC',
  tagline: 'Anything but ordinary.',
  category: 'South Florida’s Female DJ Entertainment Company',
  coreSentence:
    'REmixed Events brings stylish female DJs, polished production, and unforgettable energy to luxe weddings, brand and influencer events, yacht parties, and special events across Miami, South Florida, and beyond.',
  slogan:
    'REmixed Events is South Florida’s female DJ entertainment company for luxe weddings, brand and influencer events, and special events. Female DJs, sound, lighting, photo booths, and party details across Miami, South Florida, and beyond.',
  location: 'Based in Miami Beach · Serving South Florida',
  email: 'info@remixedeventsllc.com',
  phone: '786-910-2799',
  phoneHref: 'tel:+17869102799',
  address: '1000 5th Street, Miami Beach, Florida 33139',
  mapQuery: 'REmixed Events, 1000 5th Street, Miami Beach, FL 33139',
  googleRating: '5.0',
  reviewUrl: 'https://g.page/r/CcgSr28MvgQsEBE/review',
  mixherUrl: 'https://www.themixher.org',
  calendly: 'https://calendly.com/djrere/15min',
  // DJ Event Planner lead pipeline (CRM form)
  djid: '25716',
  quoteAction: 'https://remixedent.com/request_information.asp',
  socials: {
    instagram: 'https://www.instagram.com/remixedeventsllc',
    facebook: 'https://www.facebook.com/Remixedeventsllc',
    twitter: 'https://twitter.com/remixed_events',
    linkedin: 'https://www.linkedin.com/in/djrere/',
  },
};

export const nav = [
  { label: 'Experiences', href: '/experiences' },
  { label: 'Weddings', href: '/weddings' },
  { label: 'Meet The Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export type Service = {
  title: string;
  blurb: string;
  points: string[];
  tag: string;
  image: string;
  alt: string;
  href?: string;
};

export const services: Service[] = [
  {
    tag: '01',
    title: 'Luxe Weddings',
    blurb:
      'Female wedding DJs, hosting, ceremony sound, reception music, lighting, photo booths, dancing on clouds, cold sparks, and the details that make your wedding day feel personal from ceremony to last dance.',
    points: ['Ceremony to last dance', 'Hosting & MC', 'Photo booths & cold sparks', 'Dancing on clouds'],
    image: '/img/wed-clouds.jpg',
    alt: 'Cold sparks and dancing on clouds for a Miami wedding by REmixed Events',
    href: '/weddings',
  },
  {
    tag: '02',
    title: 'Brand & Influencer Events',
    blurb:
      'Miami female DJs, hosts, sound, lighting, and content-minded energy for launches, pop-ups, brand dinners, influencer events, and corporate moments.',
    points: ['Female DJs & hosting', 'Sound & lighting', 'Content ready moments', 'On brand curation'],
    image: '/img/activation-aero.jpg',
    alt: 'REmixed Events female DJ entertaining guests at a Miami brand event',
    href: '/corporate',
  },
  {
    tag: '03',
    title: 'Special Events',
    blurb:
      'Female DJs for yacht parties, boat parties, milestone celebrations, private events, luxury dinners, proms, galas, and social events that need personality.',
    points: ['Yacht & boat parties', 'Private celebrations', 'Proms & galas', 'Luxury dinners'],
    image: '/img/special.jpg',
    alt: 'Female DJ entertainment at a South Florida special event by REmixed Events',
    href: '/experiences',
  },
  {
    tag: '04',
    title: 'Production & Enhancements',
    blurb:
      'Sound, lighting, microphones, DJ booths, photo booths, cold sparks, dancing on clouds, and the details that make the room feel complete.',
    points: ['Sound & lighting', 'Photo booths', 'Cold sparks', 'Dancing on clouds'],
    image: '/img/cold-sparks.jpg',
    alt: 'Cold sparks and production for a Miami event by REmixed Events',
    href: '/experiences',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'I LOOOOOVE ReRe & Pink Honey. They are such a vibe, they made my wedding so so so much fun. 10/10!',
    name: 'Daniella Cabrera',
    role: 'Wedding',
    date: '5.0★',
  },
  {
    quote:
      'Came through like we know DJ ReRe would. The music was on point and the floor stayed packed. I danced all night.',
    name: 'Jonneal Justus',
    role: 'Wedding',
    date: '5.0★',
  },
  {
    quote:
      'DJ ReRe is just awesome! We used her and her group of musicians twice for our 50’s birthday and the dance floor was on fire! She understands and feels the right vibe, the right beat, at the right time. She’s the best!',
    name: 'Fabrice Canonge',
    role: 'Birthday',
    date: '5.0★',
  },
];

export const awards: string[] = [
  'BusinessRate Top 3 DJ Service in Miami Beach',
  'Recognized 2 Years in a Row',
  'Global Wedding Vendor 2022',
  'Featured on Zola',
  'Official CHAUVET DJ Brand Partner',
  'Award-Winning DJ Team',
];

export const eventTypes = [
  'Luxe Weddings',
  'Brand Events',
  'Influencer Events',
  'Yacht Parties',
  'Boat Parties',
  'Private Celebrations',
  'Luxury Dinners',
  'Galas',
  'Product Launches',
  'Proms',
  'Homecomings',
  'Community Events',
];

/** Headline stats. Company recognition, not personal accolades. */
export const stats = [
  { value: '5★', label: 'Rated on Google' },
  { value: '2×', label: 'BusinessRate Top 3 in Miami Beach' },
  { value: '2022', label: 'Global Wedding Vendor' },
  { value: '100%', label: 'Woman owned' },
];
