export interface Service {
  id: string
  icon: string
  title: string
  tag: string
  body: string
}

export interface Project {
  id: number
  name: string
  cat: string
  city: string
  year: string
  tone: 'navy' | 'cool' | 'warm' | 'stone' | 'green'
  featured?: boolean
  img?: string
  route?: string
  stat: string[]
  blurb?: string
}

export interface GalleryData {
  name: string
  cat: string
  city: string
  specs: string[]
  blurb: string
  photos: [string, string][]
}

export interface Step {
  n: string
  title: string
  body: string
}
