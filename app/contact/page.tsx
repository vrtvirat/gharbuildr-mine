import type { Metadata } from "next"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Contact gharbuildr.com | Construction Experts in Noida",
  description: "Get in touch with gharbuildr.com—Noida's leading construction experts. Request a quote, ask about our services, or schedule a site visit. We're here to help you build with confidence.",
  openGraph: {
    title: "Contact gharbuildr.com – Leading Construction Company in Noida",
    description: "Get in touch with gharbuildr.com—Noida's leading construction experts. Request a quote, ask about our services, or schedule a site visit. We're here to help you build with confidence.",
    images: [
      {
        url: "/greater-noida-construction-office.png",
        width: 1200,
        height: 630,
        alt: "Contact gharbuildr.com - Construction Office",
      },
    ],
  },
  alternates: {
    canonical: "https://gharbuildr.com/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/greater-noida-construction-office.png" alt="Contact Us" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Let's Connect: Start Your Noida/Greater Noida Project Journey Today</h1>
            <p className="text-xl text-gray-100">
              We're excited to hear about your project. Reach out to us through any of the channels below, and we'll get
              back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Send Us Your Inquiry</h2>
              <form className="space-y-6"  action="https://formbold.com/s/35A87" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Your Email" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Your Phone Number" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <Select>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction">Residential Construction</SelectItem>
                        <SelectItem value="interior">Interior Design</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project and requirements" rows={6} required />
                </div>

                <Button type="submit" variant="highlight" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6">Prefer to Talk or Visit?</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Phone</h3>
                    <a href="tel:+917065120100" className="text-lg text-secondary hover:text-primary transition-colors">
                      +91-70651 20100
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email</h3>
                    <a
                      href="mailto:info@gharbuildr.com"
                      className="text-lg text-secondary hover:text-primary transition-colors"
                    >
                      info@gharbuildr.com
                    </a>
                    <p className="text-gray-600 mt-1">We respond to all inquiries within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Office Address</h3>
                    <p className="text-lg">
                      SF 212C, Harsha Mall, Alpha-I Commercial Belt,
                      <br />
                      Block E, Alpha I, Greater Noida, Uttar Pradesh 201308
                    </p>
                    <p className="text-gray-600 mt-1">Visit us during business hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find quick answers to common questions about our services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2">What areas do you serve?</h3>
              <p className="text-gray-700">
                We primarily serve Noida and Greater Noida. However, we may consider projects in nearby areas of NCR on
                a case-by-case basis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2">How do I get a quote for my project?</h3>
              <p className="text-gray-700">
                You can request a quote by filling out our contact form, calling us directly, or visiting our office.
                We'll schedule a consultation to understand your requirements before providing a detailed quote.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2">What is your typical project timeline?</h3>
              <p className="text-gray-700">
                Project timelines vary based on scope and complexity. A typical residential construction project may
                take 6-12 months, while renovations might take 2-4 months. We'll provide a specific timeline during the
                consultation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Do you offer warranties on your work?</h3>
              <p className="text-gray-700">
                Yes, we offer a 20-year structure warranty and 10 years of workmanship warranty on all other work. This
                reflects our confidence in the quality of our construction and materials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
