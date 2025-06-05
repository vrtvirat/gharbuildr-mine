export interface Testimonial {
  id: string
  quote: string
  name: string
  location: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'Excellent planning and execution. Hats off to brilliant and dedicated team for bringing life to amazing & unique ideas. All thanks to the proprietor for having the patience and accommodating changes at last moment.',
    name: 'Sunny Chaudhary',
    location: 'Noida'
  },
  {
    id: 'testimonial-2',
    quote: "gharbuildr.com constructed my 3BHK home in Greater Noida, and I'm extremely satisfied! They used double beams in the walls to ensure longevity, which shows their attention to detail.",
    name: 'Mani Chaudhary',
    location: 'Greater Noida'
  },
  {
    id: 'testimonial-3',
    quote: 'I strongly recommend them for construction and interior design. They have a skilled team, creative ideas, and they finish on time, surpassing expectations.',
    name: 'Vaibhavi Verma',
    location: 'Noida'
  }
] 