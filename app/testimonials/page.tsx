"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { Metadata } from "next"

export default function TestimonialsPage() {
  const widgetContainerRef = useRef<HTMLDivElement>(null)

  // Use effect to inject the Trustmary script directly where we want the widget to appear
  useEffect(() => {
    // Remove any existing script to avoid duplicates
    const existingScript = document.getElementById("trustmary-widget-script")
    if (existingScript) {
      existingScript.remove()
    }

    // Create and inject the script
    if (widgetContainerRef.current) {
      const script = document.createElement("script")
      script.id = "trustmary-widget-script"
      script.src = "https://widget.trustmary.com/WQtSqVjA_"
      script.async = true

      // Insert the script into our designated container
      widgetContainerRef.current.appendChild(script)
    }

    // Cleanup function
    return () => {
      const script = document.getElementById("trustmary-widget-script")
      if (script) {
        script.remove()
      }
    }
  }, [])

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/greater-noida-construction.png"
            alt="Client Testimonials"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/80"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Client Testimonials</h1>
            <p className="text-xl text-gray-100">
              Discover what our clients in Noida and Greater Noida have to say about their experience with
              gharbuildr.com
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Widget Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Real Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hear From Our Satisfied Clients</h2>
            <p className="text-lg text-gray-600">
              We take pride in delivering exceptional service and quality construction. Here's what our clients have to
              say about their experience working with us.
            </p>
          </div>

          {/* Trustmary Widget Container - The widget will render exactly here */}
          <div
            ref={widgetContainerRef}
            className="max-w-5xl mx-auto my-12"
            aria-label="Client Testimonials Widget"
          ></div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Construction Journey?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Join our satisfied clients and experience the gharbuildr difference. Contact us today for a consultation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export const metadata: Metadata = {
  title: "Client Reviews – Noida's Top-Rated Construction Company",
  description: "Read real client reviews and testimonials. Discover why gharbuildr.com is rated 4.8 stars on Google and is Noida's preferred construction partner.",
  openGraph: {
    title: "Client Reviews – Noida's Top-Rated Construction Company",
    description: "Read real client reviews and testimonials. Discover why gharbuildr.com is rated 4.8 stars on Google and is Noida's preferred construction partner.",
    images: [
      {
        url: "/greater-noida-modern-villa.png",
        width: 1200,
        height: 630,
        alt: "gharbuildr.com - Client Testimonials",
      },
    ],
  },
  alternates: {
    canonical: "https://gharbuildr.com/testimonials",
  },
}
