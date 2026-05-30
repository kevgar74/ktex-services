import type { Service, Project, GalleryData } from './types'

export const SERVICES: Service[] = [
  {
    id: 'acquisitions',
    icon: 'pin',
    title: 'Acquisitions & Sales',
    tag: 'Buy · Sell · Represent',
    body: 'We source and acquire land and homes with real upside, then bring finished property to market — representing you on both sides of the deal.',
  },
  {
    id: 'design',
    icon: 'ruler',
    title: 'Residential Design',
    tag: 'Plans · Interiors · Detail',
    body: 'In-house design and development that balances livability, resale value, and modern architectural detail — drawn to build, not just to look good.',
  },
  {
    id: 'construction',
    icon: 'csquare',
    title: 'Development & Construction',
    tag: 'Ground-up · Development',
    body: 'Subdivision development and ground-up builds managed end to end — on schedule, on budget, and to spec, with one team accountable throughout.',
  },
]

export const STEPS = [
  ['01', 'Acquire', 'We source land and homes with real upside across greater Houston.'],
  ['02', 'Design', 'In-house plans tuned for livability and resale value.'],
  ['03', 'Build', 'Managed construction, on schedule and to spec.'],
  ['04', 'Sell', 'We represent the finished home to market.'],
]

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Beall Street Townhomes',
    cat: 'Development',
    city: 'Highland Heights, Houston, TX',
    year: '2025',
    tone: 'navy',
    featured: true,
    img: '/assets/beall-street.jpg',
    stat: ['12 units', '3-story', '9-month build'],
    blurb:
      'A twelve-unit townhome development in Highland Heights — K-Tex assisted the owner in acquiring the parcel, coordinated the civil and structural engineering, designed and permitted the townhome plans, developed the 12-lot property and is in the process of building out all twelve homes around the shared drive.',
  },
  {
    id: 2,
    name: 'Oak Forest Infill',
    cat: 'Resale',
    city: 'Houston, TX',
    year: '',
    tone: 'cool',
    route: 'gallery/oak-forest',
    img: '/assets/cedar-ridge-sm.jpg',
    stat: ['4 bd / 3.5 ba', '3,901 sqft'],
  },
  {
    id: 3,
    name: 'Fortune Street Duplexes',
    cat: 'Duplex',
    city: 'Acres Homes - Houston, TX',
    year: '2026',
    tone: 'stone',
    route: 'gallery/fortune',
    img: '/assets/fortune-street.jpg',
    stat: ['4 Duplexes', '2,656 sqft'],
  },
  {
    id: 4,
    name: 'Timbergrove Custom Home',
    cat: 'Custom Home',
    city: 'Houston, TX',
    year: '2026',
    tone: 'green',
    route: 'contact',
    img: '/assets/timbergrove.jpg',
    stat: ['4 bd / 3.5 ba', '3,872 sqft'],
  },
  {
    id: 5,
    name: 'Acres Homes New Build',
    cat: 'New Build',
    city: 'Houston, TX',
    year: '2025',
    tone: 'navy',
    route: 'gallery/acres',
    img: '/assets/acres-home.jpg',
    stat: ['3 bd / 2.5 ba', '1,876 sqft'],
  },
]

export const GALLERY_OAKFOREST: GalleryData = {
  name: 'Oak Forest Infill',
  cat: 'Resale',
  city: 'Houston, TX',
  specs: ['4 bd / 3.5 ba', '3,901 sqft', 'New build'],
  blurb: 'A modern craftsman new-build in Oak Forest — designed and built by K-Tex, from stone-and-shingle elevation to white-oak floors and coffered ceilings throughout.',
  photos: [
    ['/assets/gallery/of-01.jpg', 'Front elevation'],
    ['/assets/gallery/of-02.jpg', 'Front elevation at dusk'],
    ['/assets/gallery/of-03.jpg', 'Two-story foyer & staircase'],
    ['/assets/gallery/of-04.jpg', 'Curved staircase'],
    ['/assets/gallery/of-05.jpg', 'Formal dining, coffered ceiling'],
    ['/assets/gallery/of-06.jpg', "Butler's pantry"],
    ['/assets/gallery/of-07.jpg', 'Open living & kitchen'],
    ['/assets/gallery/of-08.jpg', 'Kitchen island'],
    ['/assets/gallery/of-09.jpg', "Chef's kitchen"],
    ['/assets/gallery/of-10.jpg', 'Family room with fireplace'],
    ['/assets/gallery/of-11.jpg', 'Primary suite'],
    ['/assets/gallery/of-12.jpg', 'Primary bath'],
    ['/assets/gallery/of-13.jpg', 'Spa shower & soaking tub'],
    ['/assets/gallery/of-14.jpg', 'Walk-in closet'],
    ['/assets/gallery/of-15.jpg', 'Upstairs landing & game room'],
    ['/assets/gallery/of-16.jpg', 'Bonus / media room'],
    ['/assets/gallery/of-17.jpg', 'Secondary bath'],
  ],
}

export const GALLERY_FORTUNE: GalleryData = {
  name: 'Fortune Street Duplexes',
  cat: 'Duplex',
  city: 'Acres Homes — Houston, TX',
  specs: ['4 duplexes', '2,656 sqft', '2026'],
  blurb: 'A four-duplex development in Acres Homes — acquired, designed, and built by K-Tex, with white-quartz kitchens, black-matte fixtures, and durable plank floors throughout.',
  photos: [
    ['/assets/gallery/fs-01.jpg', 'Exterior — 783 A & B'],
    ['/assets/gallery/fs-02.jpg', 'Kitchen & dining (staged)'],
    ['/assets/gallery/fs-03.jpg', 'Living room (staged)'],
    ['/assets/gallery/fs-04.jpg', 'Primary bedroom (staged)'],
    ['/assets/gallery/fs-05.jpg', "Chef's kitchen"],
    ['/assets/gallery/fs-06.jpg', 'Open kitchen & great room'],
    ['/assets/gallery/fs-07.jpg', 'Primary bath'],
    ['/assets/gallery/fs-08.jpg', 'Double-vanity bath'],
    ['/assets/gallery/fs-09.jpg', 'Guest bath'],
    ['/assets/gallery/fs-10.jpg', 'Secondary bedroom'],
  ],
}

export const GALLERY_ACRES: GalleryData = {
  name: 'Acres Homes New Build',
  cat: 'New Build',
  city: 'Acres Homes — Houston, TX',
  specs: ['3 bd / 2.5 ba', '1,876 sqft', '2025'],
  blurb: 'A modern two-story new build in Acres Homes — acquired, designed, and built by K-Tex, with an open great room, navy-island kitchen, marble-tiled baths, and a moody primary suite.',
  photos: [
    ['/assets/gallery/ac-01.jpg', 'Front elevation — 2517B'],
    ['/assets/gallery/ac-02.jpg', 'Great room & stair'],
    ['/assets/gallery/ac-03.jpg', 'Living room'],
    ['/assets/gallery/ac-04.jpg', 'Living & fireplace'],
    ['/assets/gallery/ac-05.jpg', 'Entry & dining'],
    ['/assets/gallery/ac-06.jpg', 'Kitchen with navy island'],
    ['/assets/gallery/ac-07.jpg', 'Kitchen & breakfast'],
    ['/assets/gallery/ac-08.jpg', "Chef's kitchen"],
    ['/assets/gallery/ac-09.jpg', 'Powder room'],
    ['/assets/gallery/ac-10.jpg', 'Primary suite'],
    ['/assets/gallery/ac-11.jpg', 'Primary bedroom'],
    ['/assets/gallery/ac-12.jpg', 'Primary bedroom'],
    ['/assets/gallery/ac-13.jpg', 'Primary bath'],
    ['/assets/gallery/ac-14.jpg', 'Primary bath — soaking tub'],
    ['/assets/gallery/ac-15.jpg', 'Primary bath & shower'],
    ['/assets/gallery/ac-16.jpg', 'Secondary bath'],
    ['/assets/gallery/ac-17.jpg', 'Walk-in closet'],
  ],
}

export const GALLERIES: Record<string, GalleryData> = {
  'oak-forest': GALLERY_OAKFOREST,
  fortune: GALLERY_FORTUNE,
  acres: GALLERY_ACRES,
}
