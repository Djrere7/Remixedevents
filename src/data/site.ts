/**
 * Single source of truth for site-wide content.
 * Edit copy, services, testimonials and links here. Pages read from this.
 */

export const site = {
  name: 'REmixed Events',
  legalName: 'REmixed Events LLC',
  tagline: 'Anything but ordinary.',
  category: 'South Florida’s DJ Entertainment Brand',
  slogan:
    'DJ entertainment, sound, lighting, photo booths and party details for luxe weddings, brand and influencer events, and special events across South Florida.',
  location: 'Miami Beach · South Florida',
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
      'For couples who want their wedding day to feel as unique as they are. We bring the music, hosting, production and details that keep the celebration flowing beautifully, from ceremony sound to the final dance.',
    points: ['Ceremony to last dance', 'Hosting & MC', 'Custom music direction', 'Production & details'],
    image: '/img/venue-uplights.jpg',
    alt: 'Elegant wedding ballroom with custom uplighting and a monogram floor',
    href: '/weddings',
  },
  {
    tag: '02',
    title: 'Brand & Influencer Events',
    blurb:
      'For brands, agencies, creators and influencer teams who want the room to feel intentional, camera ready and full of energy. DJs, hosting, sound, lighting and content minded energy for every moment.',
    points: ['DJs & hosting', 'Sound & lighting', 'Content ready energy', 'On brand curation'],
    image: '/img/activation-aero.jpg',
    alt: 'A polished REmixed brand activation',
    href: '/corporate',
  },
  {
    tag: '03',
    title: 'Special Events',
    blurb:
      'Yacht parties, boat parties, milestone celebrations, private events, luxury dinners, proms, galas and social events that need personality, music and a team that knows how to read the room.',
    points: ['Yacht & boat parties', 'Milestones & private events', 'Proms & galas', 'Community events'],
    image: '/img/rere-khaled.jpg',
    alt: 'REmixed bringing the energy to a private celebration',
    href: '/experiences',
  },
  {
    tag: '04',
    title: 'Production & Enhancements',
    blurb:
      'Sound, lighting, microphones, DJ booths, photo booths, cold sparks, dancing on the clouds and the details that make the room feel complete.',
    points: ['Sound & lighting', 'Photo booths', 'Cold sparks', 'Dancing on clouds'],
    image: '/img/booth-setup.jpg',
    alt: 'REmixed Events DJ booth with custom uplighting',
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
      'ReRe exceeded every expectation we had. The dance floor was packed the entire night and every guest was blown away by the seamless transitions.',
    name: 'Verified Google review',
    role: 'Wedding',
    date: '5.0★',
  },
  {
    quote:
      'Super accommodating from start to finish. The DJ they sent was excellent, courteous and professional. We highly recommend REmixed.',
    name: 'Verified Google review',
    role: 'Private celebration',
    date: '5.0★',
  },
  {
    quote:
      'You understood exactly what we wanted. The energy never dropped for a second and everyone was on the dance floor all night.',
    name: 'Verified Google review',
    role: 'Brand event',
    date: '5.0★',
  },
];

export const awards: string[] = [
  'BusinessRate Top 3 DJ Service in Miami Beach',
  'Recognized 2 Years in a Row',
  'Global Wedding Vendor 2022',
  'Featured on Zola',
  'Official CHAUVET DJ Brand Partner',
  'Award Winning DJ Team',
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
  { value: '2×', label: 'BusinessRate Top 3' },
  { value: '2022', label: 'Global Wedding Vendor' },
  { value: '100%', label: 'Woman owned' },
];
