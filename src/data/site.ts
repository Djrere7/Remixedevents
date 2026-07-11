/**
 * Single source of truth for site-wide content.
 * Edit copy, services, testimonials and links here. Pages read from this.
 */

export const site = {
  name: 'REmixed Events',
  legalName: 'REmixed Events LLC',
  tagline: 'Anything But Ordinary',
  slogan: "We don't just play music. We design experiences that move people.",
  location: 'Miami · South Florida',
  email: 'info@remixedeventsllc.com',
  // DJ Event Planner lead pipeline
  djid: '25716',
  quoteAction: 'https://remixedent.com/request_information.asp',
  socials: {
    instagram: 'https://www.instagram.com/remixedeventsllc',
    facebook: 'https://www.facebook.com/ReReTheDJ',
    twitter: 'https://twitter.com/remixed_events',
    linkedin: 'https://www.linkedin.com/in/djrere/',
  },
};

export const nav = [
  { label: 'Experiences', href: '/experiences' },
  { label: 'Corporate & Brands', href: '/corporate' },
  { label: 'Weddings', href: '/weddings' },
  { label: 'About', href: '/about' },
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
    title: 'Brand Activations',
    blurb:
      'Pop ups, product launches and experiential moments engineered to make people stop scrolling and start feeling your brand.',
    points: ['Custom branded DJ booths', 'On theme sound design', 'Content ready moments', 'Multi day footprints'],
    image: '/img/activation-aero.jpg',
    alt: 'DJ ReRe at an Aeropostale brand activation booth',
  },
  {
    tag: '02',
    title: 'Corporate Events',
    blurb:
      'Galas, conferences, holiday parties and VIP dinners with the polish your stakeholders expect and the energy they don’t.',
    points: ['Full production management', 'MC & host services', 'Seamless run of show', 'Enterprise reliability'],
    image: '/img/corporate-acc.jpg',
    alt: 'REmixed Events branded booth at an ACC corporate activation',
  },
  {
    tag: '03',
    title: 'Luxury Weddings',
    blurb:
      'Award winning wedding entertainment, from a ceremony string trio to a reception that never sees an empty dance floor.',
    points: ['Ceremony to last dance', 'Live musician add ons', 'Custom mixes & remixes', 'Bilingual hosting'],
    image: '/img/venue-uplights.jpg',
    alt: 'Elegant ballroom with custom uplighting and a monogram dance floor',
  },
  {
    tag: '04',
    title: 'VIP & Influencer',
    blurb:
      'Soirées, suites and tastemaker gatherings where the guest list is small, the standards are high and the vibe is everything.',
    points: ['Discreet, white glove service', 'Curated open format sets', 'Vibe curation', 'Last minute capable'],
    image: '/img/rere-khaled.jpg',
    alt: 'DJ ReRe with DJ Khaled at a VIP event',
  },
  {
    tag: '05',
    title: 'Women-Led Experiences',
    blurb:
      'Wellness retreats, summits and community celebrations powered by our all female collective and the MixHer mission.',
    points: ['All female talent', 'Empowerment programming', 'Soundscapes & ambiance', 'Mission aligned'],
    image: '/img/team.jpg',
    alt: 'The all female REmixed Events team',
  },
  {
    tag: '06',
    title: 'Production & Lighting',
    blurb:
      'Concert grade sound, intelligent lighting and staging that turns any room into a headline venue.',
    points: ['Line array sound systems', 'Intelligent lighting', 'Stage & DJ facades', 'On site engineers'],
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
      'DJ ReRe of REmixed Events is one of the best and most versatile entertainers that I have witnessed. The energy never dropped for a second.',
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
      'Booked last minute and it could not have turned out better. ReRe was super accommodating and read the room flawlessly all night.',
    name: 'Migdy Moya',
    role: 'Community Event, Kendall FL',
    date: 'Community',
  },
];

export const awards: string[] = [
  'DJane Mag · Top 100 Female DJs',
  'Global Wedding Awards · Best Female Wedding DJ Provider',
  '3× National DJ Award Winner',
  'Featured · Rolling Out Magazine',
  'Editor’s Choice · WeddingRule',
];

export const eventTypes = [
  'Brand Activation',
  'Product Launch',
  'Corporate Gala',
  'Conference',
  'Holiday Party',
  'Luxury Wedding',
  'VIP Soirée',
  'Influencer Event',
  'Wellness Retreat',
  'Private Party',
];

/** Headline stats. Adjust to taste / true numbers. */
export const stats = [
  { value: '20+', label: 'Years on the decks' },
  { value: '15+', label: 'Countries performed' },
  { value: '500+', label: 'Events designed' },
  { value: '3×', label: 'National award winner' },
];
