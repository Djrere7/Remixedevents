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
  location: 'Miami · South Florida',
  email: 'info@remixedeventsllc.com',
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
  { label: 'Corporate & Brands', href: '/corporate' },
  { label: 'Weddings', href: '/weddings' },
  { label: 'Meet The Team', href: '/team' },
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
    title: 'Female DJ Experiences',
    blurb:
      'This is what we are known for. Our female DJs bring presence, personality and a fresh kind of energy, with the soundtrack curated around your crowd and the feeling you want your guests to remember.',
    points: ['Female DJ talent', 'Open format music', 'Custom music direction', 'MC & hosting options'],
    image: '/img/activation-aero.jpg',
    alt: 'A REmixed female DJ on the decks at an event',
  },
  {
    tag: '02',
    title: 'Brand & Corporate',
    blurb:
      'For the agency, planner or brand team that needs the room to feel on brand from the first beat. Launches, pop ups, conferences, galas and celebrations with female DJs, sound, lighting and polished production.',
    points: ['Female DJs', 'Brand friendly music direction', 'Sound & lighting', 'Content friendly moments'],
    image: '/img/corporate-acc.jpg',
    alt: 'REmixed Events branded booth at a corporate activation',
  },
  {
    tag: '03',
    title: 'Weddings',
    blurb:
      'For the couple who wants their wedding to feel like them. From ceremony sound to the final party set, a soundtrack that feels personal, polished and full of joy.',
    points: ['Ceremony to last dance', 'Custom edits', 'Cocktail hour music', 'Reception party sets'],
    image: '/img/venue-uplights.jpg',
    alt: 'Elegant ballroom with custom uplighting and a monogram dance floor',
  },
  {
    tag: '04',
    title: 'Schools',
    blurb:
      'For teachers, administrators and school teams who want students to have fun without the chaos. Clean music, high energy DJs and an organized, age appropriate team.',
    points: ['Clean music', 'Proms & homecomings', 'Graduations & pep rallies', 'Professional sound & lighting'],
    image: '/img/team.jpg',
    alt: 'The all female REmixed Events team',
  },
  {
    tag: '05',
    title: 'Birthdays & Private',
    blurb:
      'For the birthday girl, host or friend group that wants the night to feel cute, fun and unforgettable. We curate the music and energy around the guest of honor.',
    points: ['Birthday parties', 'Private celebrations', 'Luxury dinners', 'Custom party vibe'],
    image: '/img/rere-khaled.jpg',
    alt: 'REmixed at a high profile private celebration',
  },
  {
    tag: '06',
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
      'You understood exactly what we wanted. The energy never dropped for a second and every single guest was on the dance floor.',
    name: 'Tony Terry',
    role: 'Director of Media, Universe Communications Inc.',
    date: 'Corporate',
  },
  {
    quote:
      'You’ve nailed it. Thank you so much for making our wedding absolutely perfect. Every single detail was exactly what we dreamed of.',
    name: 'Austin Peterson',
    role: 'CEO, Bella Wear',
    date: 'Wedding',
  },
  {
    quote:
      'Booked last minute and it could not have turned out better. Our DJ was super accommodating and read the room flawlessly all night.',
    name: 'Migdy Moya',
    role: 'Private Celebration, Kendall FL',
    date: 'Private',
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
  { value: '100%', label: 'Female DJ powered' },
  { value: '2×', label: 'BusinessRate Top 3' },
  { value: '2022', label: 'Global Wedding Vendor' },
  { value: '5★', label: 'Top rated on Google' },
];
