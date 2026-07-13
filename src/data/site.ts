/**
 * Single source of truth for site-wide content.
 * Edit copy, services, testimonials and links here. Pages read from this.
 */

export const site = {
  name: 'REmixed Events',
  legalName: 'REmixed Events LLC',
  tagline: 'Anything but ordinary.',
  category: 'South Florida’s Female DJ Entertainment Company',
  slogan:
    'REmixed Events specializes in female DJs, polished production, and stylish entertainment experiences for weddings, brands, schools, corporate events, and private celebrations across South Florida and beyond.',
  location: 'Miami Beach · South Florida',
  email: 'info@remixedeventsllc.com',
  phone: '(305) 306-2858',
  phoneHref: 'tel:+13053062858',
  address: '1000 5th St, Suite 200-Y8, Miami Beach, FL 33139',
  mapQuery: 'REmixed Events, 1000 5th St, Miami Beach, FL 33139',
  googleRating: '5.0',
  reviewUrl: 'https://g.page/r/CcgSr28MvgQsEBE/review',
  mixherUrl: 'https://www.themixher.org',
  // DJ Event Planner lead pipeline
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
};

export const services: Service[] = [
  {
    tag: '01',
    title: 'Weddings',
    blurb:
      'For the couple who wants their wedding to feel like them. From ceremony sound to the final party set, a soundtrack that feels personal, polished and full of joy.',
    points: ['Ceremony to last dance', 'Custom edits', 'Cocktail hour music', 'Reception party sets'],
    image: '/img/venue-uplights.jpg',
    alt: 'Elegant ballroom with custom uplighting and a monogram dance floor',
  },
  {
    tag: '02',
    title: 'Brand & Corporate',
    blurb:
      'For the agency, planner or brand team that needs the room to feel on brand from the first beat. Launches, pop ups, conferences, galas and celebrations with polished DJs, sound, lighting and production.',
    points: ['On brand music direction', 'Sound & lighting', 'Content friendly moments', 'One experienced team'],
    image: '/img/corporate-acc.jpg',
    alt: 'REmixed Events branded booth at a corporate activation',
  },
  {
    tag: '03',
    title: 'Schools',
    blurb:
      'For teachers, administrators and school teams who want students to have fun without the chaos. Clean music, high energy DJs and an organized, age appropriate team.',
    points: ['Clean music', 'Proms & homecomings', 'Graduations & pep rallies', 'Professional sound & lighting'],
    image: '/img/dj-outdoor.jpg',
    alt: 'A REmixed DJ bringing high energy to an outdoor crowd',
  },
  {
    tag: '04',
    title: 'Birthdays & Private',
    blurb:
      'For the birthday girl, host or friend group that wants the night to feel cute, fun and unforgettable. We curate the music and energy around the guest of honor.',
    points: ['Birthday parties', 'Private celebrations', 'Luxury dinners', 'Custom party vibe'],
    image: '/img/rere-disco.jpg',
    alt: 'DJ ReRe bringing the party energy with a disco ball',
  },
  {
    tag: '05',
    title: 'Production & Lighting',
    blurb:
      'The right production changes the room before the first song even plays. Sound, lighting, microphones and DJ booths that make your event look and feel complete.',
    points: ['Professional sound', 'Lighting', 'Wireless microphones', 'DJ booths & setups'],
    image: '/img/booth-setup.jpg',
    alt: 'REmixed Events DJ booth with custom uplighting',
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
    role: 'Corporate event',
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
  'Weddings',
  'Brand Activations',
  'Corporate Events',
  'Product Launches',
  'School Events',
  'Proms',
  'Homecomings',
  'Birthdays',
  'Private Parties',
  'Luxury Dinners',
  'Influencer Events',
  'Galas',
  'Holiday Parties',
  'Girls’ Nights',
  'Community Events',
];

/** Headline stats. Company recognition, not personal accolades. */
export const stats = [
  { value: '5★', label: 'Rated on Google' },
  { value: '2×', label: 'BusinessRate Top 3' },
  { value: '2022', label: 'Global Wedding Vendor' },
  { value: '100%', label: 'Female DJ powered' },
];
