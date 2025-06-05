import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroForm from "@/components/hero-form"
import { TestimonialCard } from "@/components/testimonial-card"
import TrustBadge from "@/components/trust-badge"
import { Shield, Award, CheckCircle, Star, CreditCard, Clock, ArrowRight } from "lucide-react"
import { Suspense } from 'react'

// Import data
import { testimonials } from '@/data/testimonials'
import type { Testimonial } from '@/data/testimonials'

export const metadata: Metadata = {
  title: "Home Construction Company in Noida | Guaranteed Price | gharbuildr.com",
  description: "Leading home construction services in Noida & Greater Noida. We build custom homes with a 20-year warranty, on-time delivery, and transparent pricing. Get your free quote!",
  openGraph: {
    title: "Home Construction Company in Noida | Guaranteed Price | gharbuildr.com",
    description: "Leading home construction services in Noida & Greater Noida. We build custom homes with a 20-year warranty, on-time delivery, and transparent pricing. Get your free quote!",
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
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/greater-noida-modern-villa.png"
            alt="Modern home construction"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Build Your Dream Home with Confidence
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Noida's most trusted construction company with 20+ years of experience
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20">
                  <Link href="/projects">View Our Projects</Link>
                </Button>
              </div>
            </div>
            
            <Suspense fallback={<div className="animate-pulse bg-gray-200 h-[400px] rounded-lg" />}>
              <HeroForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction and renovation solutions for your dream home
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/greater-noida-modern-home.png"
                  alt="Home Construction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-secondary">Home Construction</h3>
                <p className="text-gray-600 mb-4">Crafting custom homes that perfectly blend your vision with our expertise.</p>
                <Link href="/services/home-construction" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/noida-living-modern.png"
                  alt="Interior Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-secondary">Interior Design</h3>
                <p className="text-gray-600 mb-4">Transform your space with our expert interior design services tailored to your lifestyle.</p>
                <Link href="/services/interior-design" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/greater-noida-living-room.png"
                  alt="Renovations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-secondary">Renovations</h3>
                <p className="text-gray-600 mb-4">Breathe new life into your existing property with our comprehensive renovation services.</p>
                <Link href="/services/renovations" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial: Testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 text-gray-200">
              Get in touch with us today for a free consultation and quote
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
