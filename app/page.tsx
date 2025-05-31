import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroForm from "@/components/hero-form"
import TestimonialCard from "@/components/testimonial-card"
import TrustBadge from "@/components/trust-badge"
import { Shield, Award, CheckCircle, Star, CreditCard, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Construction Company in Noida – Guaranteed Price & On-Time Delivery",
  description: "Experience stress-free home and commercial construction in Noida with gharbuildr.com. Guaranteed price, on-time delivery, 20-year warranty, and a 4.8-star Google rating. Build with trust and transparency.",
  openGraph: {
    title: "Construction Company in Noida – Guaranteed Price & On-Time Delivery",
    description: "Experience stress-free home and commercial construction in Noida with gharbuildr.com. Guaranteed price, on-time delivery, 20-year warranty, and a 4.8-star Google rating. Build with trust and transparency.",
    images: [
      {
        url: "/greater-noida-modern-villa.png",
        width: 1200,
        height: 630,
        alt: "Modern Home Construction in Greater Noida",
      },
    ],
  },
  alternates: {
    canonical: "https://gharbuildr.com",
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-32 md:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/greater-noida-modern-villa.png"
            alt="Modern Home Construction"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="text-white space-y-4 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left w-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Build Your Dream Home in Greater Noida with Confidence
              </h1>
              <p className="text-base md:text-lg text-gray-100 max-w-xl lg:max-w-none mx-auto lg:mx-0">
                Experience hassle-free construction with transparent pricing, guaranteed timelines, and exceptional
                quality. Your vision, our expertise.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-col md:flex-row gap-3 py-5 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center px-4 py-2.5 bg-white/20 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                  <TrustBadge icon={<Star className="h-6 w-6 text-white" />} text="4.8 Star Google Rating" />
                </div>
                <div className="flex items-center px-4 py-2.5 bg-white/20 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                  <TrustBadge icon={<Shield className="h-6 w-6 text-white" />} text="20-Year Structural Warranty" />
                </div>
              </div>
            </div>

            <div className="w-full max-w-md mx-auto lg:mx-0">
              <HeroForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="text-primary font-medium text-sm mb-2 inline-block">EXPERT SERVICES</span>
            <h2 className="mb-4 text-2xl md:text-3xl">Your Complete Partner for Building & Transforming Properties</h2>
            <p className="text-gray-600">
              From concept to completion, we handle every aspect of your construction and design needs with precision
              and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/greater-noida-modern-home.png"
                  alt="Home Construction"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-secondary">Home Construction</h3>
                <p className="text-gray-600 mb-4">
                  Crafting custom homes that perfectly blend your vision with our expertise.
                </p>
                <Link
                  href="/services/home-construction"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/noida-villa-interior.png"
                  alt="Interior Design"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-secondary">Interior Design</h3>
                <p className="text-gray-600 mb-4">
                  Transform your space with our expert interior design services tailored to your lifestyle.
                </p>
                <Link
                  href="/services/interior-design"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/greater-noida-bungalow-renovation.png"
                  alt="Renovations"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-secondary">Renovations</h3>
                <p className="text-gray-600 mb-4">
                  Breathe new life into your existing property with our comprehensive renovation services.
                </p>
                <Link
                  href="/services/renovations"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-16 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-secondary text-secondary hover:bg-secondary/5 focus:ring-secondary"
            >
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights Section */}
      <section className="py-10 md:py-16 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="mb-4">See Quality Delivered: Projects in Noida & Greater Noida</h2>
            <p className="text-gray-600">
              Browse through our portfolio of successful projects that showcase our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* House Construction Video */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://youtube.com/embed/zwvzEcQm3_4"
                  title="House Construction Project"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium text-secondary">House Construction</h3>
              </div>
            </div>

            {/* Interior Transformation Video */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://youtube.com/embed/YR6SgwhXwn0"
                  title="Interior Transformation Project"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium text-secondary">Interior Transformation</h3>
              </div>
            </div>

            {/* Renovation Video */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://youtube.com/embed/6LF3_EboQTk"
                  title="Renovation Project"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium text-secondary">Renovation</h3>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="highlight">
              <Link href="/projects">Explore All Our Transformations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Commitment / Advantage Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="mb-4">Why Choose gharbuildr.com for Your Noida/Greater Noida Project</h2>
            <p className="text-gray-600">
              We're not just builders – we're your partners in creating spaces that reflect your dreams and aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Guaranteed Price</h3>
              <p className="text-gray-600">
                No surprise costs or hidden fees. The price we quote is the price you pay.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">
                We commit to deadlines and stick to them, ensuring your project is completed on schedule.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                We use only the finest materials and employ skilled craftsmen to ensure exceptional quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Transparent Process</h3>
              <p className="text-gray-600">Regular updates and complete visibility into every stage of your project.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Our 4.8-star rating reflects our commitment to exceeding client expectations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Milestone-Based Payments</h3>
              <p className="text-gray-600">
                Pay only for completed work with our transparent milestone-based payment structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Snippets Section */}
      <section className="py-10 md:py-16 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 transform transition-transform hover:scale-105">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Read authentic reviews from our satisfied clients across Noida and Greater Noida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Excellent planning and execution. Hats off to brilliant and dedicated team for bringing life to amazing & unique ideas. All thanks to the proprietor for having the patience and accommodating changes at last moment."
              name="Sunny Chaudhary"
              location="Noida"
            />
            <TestimonialCard
              quote="gharbuildr.com constructed my 3BHK home in Greater Noida, and I'm extremely satisfied! They used double beams in the walls to ensure longevity, which shows their attention to detail."
              name="Mani Chaudhary"
              location="Greater Noida"
            />
            <TestimonialCard
              quote="I strongly recommend them for construction and interior design. They have a skilled team, creative ideas, and they finish on time, surpassing expectations."
              name="Vaibhavi Verma"
              location="Noida"
            />
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary/5">
              <Link href="/testimonials">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
