import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, X } from "lucide-react"
import ServiceCard from "@/components/service-card"
import { Home, Paintbrush, Hammer } from "lucide-react"
import { Metadata } from "next"

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/greater-noida-construction-interior.png"
            alt="Our Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              Explore Our Building, Design & Renovation Expertise in Noida & Greater Noida
            </h1>
            <p className="text-xl text-gray-100">
              Comprehensive construction and design services tailored to your needs, delivered with excellence and
              precision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600">
              From initial concept to final execution, we provide end-to-end solutions for all your construction and
              design needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Home className="h-10 w-10 text-primary" />}
              title="Home Construction"
              description="Custom homes built to your specifications, combining aesthetic appeal with functional design and quality construction."
              link="/services/home-construction"
            />
            <ServiceCard
              icon={<Paintbrush className="h-10 w-10 text-primary" />}
              title="Interior Design"
              description="Transform your space with our expert interior design services tailored to your lifestyle and preferences."
              link="/services/interior-design"
            />
            <ServiceCard
              icon={<Hammer className="h-10 w-10 text-primary" />}
              title="Renovations"
              description="Breathe new life into your existing property with our comprehensive renovation services."
              link="/services/renovations"
            />
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Why Choose gharbuildr.com?</h2>
            <p className="text-lg text-gray-600">
              See how our approach sets us apart from traditional contractors and delivers superior results.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="max-w-4xl mx-auto">
              <table className="w-full bg-white rounded-lg shadow-card">
                <thead>
                  <tr>
                    <th className="p-4 text-left bg-secondary text-white rounded-tl-lg text-sm">Feature</th>
                    <th className="p-4 text-left bg-primary text-white text-sm">gharbuildr.com</th>
                    <th className="p-4 text-left bg-gray-800 text-white rounded-tr-lg text-sm">
                      Traditional Contractor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium text-sm">Pricing Transparency</td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Guaranteed Price Protection - No hidden costs</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Estimates often change, potential for surprises</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium text-sm">Timeline Guarantee</td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Zero Delays, Guaranteed - We pay penalty for delays!</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Timelines often flexible, prone to delays</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium text-sm">Warranty</td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Industry-Leading 20-Year Structural Warranty</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Limited warranty, typically 1 year</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium text-sm">Communication</td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Dedicated Relationship Manager - Clear communication</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Communication can be inconsistent</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium text-sm">Project Management</td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Stress-Free Project Management</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Can be disorganized, requires client involvement</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium text-sm">Quality Control</td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Uncompromising Quality & Premium Materials</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Quality can vary significantly</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium text-sm">After-Sales Service</td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">1-Year Maintenance Support Included</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">After-sales service can be unreliable</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium text-sm">Pricing</td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Very Competitive Prices</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Pricing structures vary, potential for overspending</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium text-sm">Payment Structure</td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Milestone-Based Payment Option</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Payment schedules vary, less control for clients</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium rounded-bl-lg text-sm">Quotation Format</td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Bank-Approved Detailed Quotation Format</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50 rounded-br-lg">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Quotation formats can vary in detail and acceptance</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Streamlined Process</h2>
            <p className="text-lg text-gray-600">A transparent, efficient approach to bringing your project to life.</p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2"></div>

            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2">1. Connect & Envision</h3>
                  <p className="text-gray-600">
                    We begin by listening. Share your ideas, needs, and vision during a detailed consultation.
                  </p>
                </div>
                <div className="relative order-1 md:order-2 flex justify-center md:justify-start">
                  <div className="bg-primary text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold relative z-10">
                    1
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative flex justify-center md:justify-end">
                  <div className="bg-primary text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold relative z-10">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">2. Plan & Detail</h3>
                  <p className="text-gray-600">
                    Our experts create comprehensive plans and a transparent, detailed quotation. You'll know exactly
                    what to expect.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2">3. Design & Refine</h3>
                  <p className="text-gray-600">
                    We collaborate to finalize the project design, layouts, and material selections based on your vision
                    and the plan.
                  </p>
                </div>
                <div className="relative order-1 md:order-2 flex justify-center md:justify-start">
                  <div className="bg-primary text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold relative z-10">
                    3
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative flex justify-center md:justify-end">
                  <div className="bg-primary text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold relative z-10">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">4. Prepare & Execute</h3>
                  <p className="text-gray-600">
                    The site is prepared, and our skilled team brings the plans to life with quality craftsmanship and
                    materials. We manage the site efficiently.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2">5. Update & Monitor</h3>
                  <p className="text-gray-600">
                    Your Dedicated Relationship Manager keeps you informed with regular progress updates and site
                    visits.
                  </p>
                </div>
                <div className="relative order-1 md:order-2 flex justify-center md:justify-start">
                  <div className="bg-primary text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold relative z-10">
                    5
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative flex justify-center md:justify-end">
                  <div className="bg-primary text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold relative z-10">
                    6
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">6. Review & Perfect</h3>
                  <p className="text-gray-600">
                    We conduct thorough quality checks as milestones are completed and before final handover.
                  </p>
                </div>
              </div>

              {/* Step 7 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2">7. Handover & Support</h3>
                  <p className="text-gray-600">
                    Welcome to your completed space! We provide keys, documentation, and post-completion support
                    including warranty.
                  </p>
                </div>
                <div className="relative order-1 md:order-2 flex justify-center md:justify-start">
                  <div className="bg-primary text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold relative z-10">
                    7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="bg-white border-2 border-primary/20 rounded-xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left content area */}
              <div className="p-8 md:p-10 bg-gradient-to-br from-white to-primary/5">
                <div className="max-w-xl">
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    Let's Connect
                  </span>
                  <h2 className="text-3xl font-bold mb-6 text-secondary">Ready to Transform Your Space?</h2>
                  <p className="text-gray-700 mb-8">
                    Take the first step towards your dream project today. Our experts are ready to bring your vision to
                    life with precision, quality, and care.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base shadow-md hover:shadow-lg transition-all duration-300 animate-fadeIn hover:scale-105 active:scale-95"
                    >
                      <Link href="/contact">Schedule Free Consultation</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-2 border-secondary text-secondary hover:bg-secondary/5 px-6 py-3 text-base transition-all duration-300 hover:translate-x-1"
                    >
                      <Link href="/projects">View Our Projects</Link>
                    </Button>
                  </div>

                  {/* Trust indicators */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <div className="flex items-center bg-white/80 px-3 py-1.5 rounded-full shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#ff7a00"
                        stroke="none"
                        className="mr-1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="text-xs font-medium">4.8/5 Rating</span>
                    </div>
                    <div className="flex items-center bg-white/80 px-3 py-1.5 rounded-full shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary mr-1"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                      <span className="text-xs font-medium">60+ Projects Completed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right image area */}
              <div className="relative min-h-[300px] lg:min-h-full">
                <Image
                  src="/greater-noida-modern-villa.png"
                  alt="Modern Home in Greater Noida"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center max-w-xs">
                    <h3 className="text-xl font-bold text-secondary mb-2">Start Today</h3>
                    <p className="text-sm text-gray-700 mb-4">Get your free consultation and quote within 24 hours</p>
                    <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const metadata: Metadata = {
  title: "Construction, Interiors & Renovation Services in Noida",
  description: "Explore our complete range of construction, interior design, and renovation services in Noida. gharbuildr.com delivers quality, reliability, and peace of mind for every project.",
  openGraph: {
    title: "Construction, Interiors & Renovation Services in Noida",
    description: "Explore our complete range of construction, interior design, and renovation services in Noida. gharbuildr.com delivers quality, reliability, and peace of mind for every project.",
    images: [
      {
        url: "/greater-noida-construction-interior.png",
        width: 1200,
        height: 630,
        alt: "gharbuildr.com - Our Services",
      },
    ],
  },
  alternates: {
    canonical: "https://gharbuildr.com/services",
  },
}
