import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, X } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Renovation Contractors in Noida – Hassle-Free Upgrades",
  description: "Upgrade your property with gharbuildr.com's hassle-free renovation solutions in Noida. From kitchens to complete makeovers, we deliver on time and within budget.",
  openGraph: {
    title: "Renovation Contractors in Noida – Hassle-Free Upgrades",
    description: "Upgrade your property with gharbuildr.com's hassle-free renovation solutions in Noida. From kitchens to complete makeovers, we deliver on time and within budget.",
    images: [
      {
        url: "/greater-noida-renovation.png",
        width: 1200,
        height: 630,
        alt: "gharbuildr.com - Renovation Services",
      },
    ],
  },
  alternates: {
    canonical: "https://gharbuildr.com/services/renovations",
  },
}

export default function RenovationsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/greater-noida-bungalow-renovation.png"
            alt="Renovations in Greater Noida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Breathe New Life Into Your Existing Property</h1>
            <p className="text-xl text-gray-100">
              Expert renovation services to transform your space with minimal disruption and maximum value.
            </p>
          </div>
        </div>
      </section>

      {/* Core Description Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Revitalize Your Property, Enhance Your Life in Noida & Greater Noida</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Your existing home has potential. gharbuildr.com specializes in home renovation services in Noida &
                  Greater Noida, breathing new life into properties, improving functionality, and increasing value.
                  Whether it's a single room or a full house remodel, we are your trusted renovation contractor in
                  Noida.
                </p>
                <p>Unlock the hidden potential of your property right here in Noida.</p>
              </div>
              <div className="mt-8">
                <Button asChild variant="highlight">
                  <Link href="/contact">Schedule Your Renovation Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 h-full">
                <div className="relative">
                  <Image
                    src="/outdated-noida-living-room.png"
                    alt="Before: Home Renovation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-center">Before</div>
                </div>
                <div className="relative">
                  <Image
                    src="/greater-noida-living-room.png"
                    alt="After: Home Renovation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white p-2 text-center">After</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Before & After Transformations</h2>
            <p className="text-lg text-gray-600">
              See the dramatic difference our renovation services can make to your space.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kitchen Transformation */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-secondary">Kitchen Renovation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image src="/noida-kitchen-relic.png" alt="Before: Outdated Kitchen" fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-center">Before</div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image src="/noida-modern-kitchen.png" alt="After: Modern Kitchen" fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white p-2 text-center">After</div>
                </div>
              </div>
              <p className="text-gray-700">
                This kitchen transformation in Sector 50, Noida, involved replacing outdated cabinets, upgrading
                appliances, installing modern lighting, and creating a more functional layout. The result is a bright,
                spacious kitchen that's perfect for both cooking and entertaining.
              </p>
            </div>

            {/* Living Room Transformation */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-secondary">Living Room Renovation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/outdated-noida-living-room.png"
                    alt="Before: Outdated Living Room"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-center">Before</div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/greater-noida-living-room.png"
                    alt="After: Modern Living Room"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white p-2 text-center">After</div>
                </div>
              </div>
              <p className="text-gray-700">
                This living room in Greater Noida was transformed from a dark, cramped space to an open, airy gathering
                area. We removed a non-load-bearing wall, installed new flooring, updated the lighting, and created a
                cohesive design scheme that maximizes both functionality and style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Renovation Services */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Comprehensive Renovation Services</h2>
            <p className="text-lg text-gray-600">
              From single rooms to complete home transformations, we offer a wide range of renovation services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Kitchen Renovations</h3>
              <p className="text-gray-600 mb-4">
                Transform the heart of your home with modern cabinets, countertops, appliances, and thoughtful layouts
                that enhance both functionality and aesthetics.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Custom cabinetry and storage solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Premium countertops and backsplashes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Energy-efficient appliance upgrades</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Bathroom Renovations</h3>
              <p className="text-gray-600 mb-4">
                Create a spa-like retreat with luxurious fixtures, modern tiles, efficient storage, and water-saving
                features that combine comfort with sustainability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Luxury shower and bath installations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Custom vanities and storage solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Water-efficient fixtures and fittings</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Complete Home Renovations</h3>
              <p className="text-gray-600 mb-4">
                Transform your entire home with comprehensive renovations that address layout, functionality,
                aesthetics, and energy efficiency for a complete makeover.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Structural modifications and layout changes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Complete interior and exterior updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Energy efficiency improvements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Room Additions</h3>
              <p className="text-gray-600 mb-4">
                Expand your living space with seamlessly integrated room additions that match your home's existing
                architecture while adding valuable square footage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Bedroom and bathroom additions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Home office and study spaces</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Sunrooms and enclosed patios</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Floor Additions</h3>
              <p className="text-gray-600 mb-4">
                Expand your living space vertically with expertly designed and constructed additional floors that
                seamlessly integrate with your existing home structure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Structural engineering and reinforcement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Complete floor additions with staircases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Seamless integration with existing architecture</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Exterior Renovations</h3>
              <p className="text-gray-600 mb-4">
                Enhance your home's curb appeal and protect it from the elements with exterior renovations including
                siding, roofing, windows, and landscaping.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Facade updates and improvements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Window and door replacements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Outdoor living space creation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Why Choose gharbuildr.com for Your Renovation Project?</h2>
            <p className="text-lg text-gray-600">
              See how our renovation approach sets us apart from traditional contractors in Noida and Greater Noida.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-secondary text-white rounded-tl-lg">Feature</th>
                  <th className="p-4 text-left bg-primary text-white">gharbuildr.com</th>
                  <th className="p-4 text-left bg-gray-800 text-white rounded-tr-lg">Traditional Contractor</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium">Pricing</td>
                  <td className="p-3 bg-primary/5">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>Guaranteed Price Protection - No hidden costs</span>
                    </div>
                  </td>
                  <td className="p-3 bg-gray-50">
                    <div className="flex items-center">
                      <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                      <span>Estimates often change during the project</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium">Timeline</td>
                  <td className="p-3 bg-primary/5">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>Zero Delays, Guaranteed - We pay penalty for delays</span>
                    </div>
                  </td>
                  <td className="p-3 bg-gray-50">
                    <div className="flex items-center">
                      <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                      <span>Timelines often flexible, prone to delays</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium">Quality</td>
                  <td className="p-3 bg-primary/5">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>Industry-Leading Quality</span>
                    </div>
                  </td>
                  <td className="p-3 bg-gray-50">
                    <div className="flex items-center">
                      <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                      <span>Quality of materials and workmanship can vary significantly</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium">Communication</td>
                  <td className="p-3 bg-primary/5">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>Dedicated Relationship Manager - Clear communication</span>
                    </div>
                  </td>
                  <td className="p-3 bg-gray-50">
                    <div className="flex items-center">
                      <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                      <span>Communication can be inconsistent</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium">Project Management</td>
                  <td className="p-3 bg-primary/5">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>Stress-Free Project Management</span>
                    </div>
                  </td>
                  <td className="p-3 bg-gray-50">
                    <div className="flex items-center">
                      <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                      <span>Can be disorganized, requires client involvement</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium">Expertise</td>
                  <td className="p-3 bg-primary/5">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>Uncompromising Expertise</span>
                    </div>
                  </td>
                  <td className="p-3 bg-gray-50">
                    <div className="flex items-center">
                      <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                      <span>Expertise can vary</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium">Warranty</td>
                  <td className="p-3 bg-primary/5">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>Up to 10-Year Warranty on Renovations</span>
                    </div>
                  </td>
                  <td className="p-3 bg-gray-50">
                    <div className="flex items-center">
                      <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                      <span>Warranty is typically shorter</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium">Pricing</td>
                  <td className="p-3 bg-primary/5">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>Very Competitive Prices</span>
                    </div>
                  </td>
                  <td className="p-3 bg-gray-50">
                    <div className="flex items-center">
                      <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                      <span>Pricing structures vary, potential for overspending</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium">Payment</td>
                  <td className="p-3 bg-primary/5">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>Milestone-Based Payment Option</span>
                    </div>
                  </td>
                  <td className="p-3 bg-gray-50">
                    <div className="flex items-center">
                      <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                      <span>Payment schedules vary, less control for clients</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium rounded-bl-lg">Quotation</td>
                  <td className="p-3 bg-primary/5">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>Bank-Approved Detailed Quotation Format</span>
                    </div>
                  </td>
                  <td className="p-3 bg-gray-50 rounded-br-lg">
                    <div className="flex items-center">
                      <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                      <span>Quotation formats can vary in detail and acceptance for financing</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Our Renovation Process */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Renovation Process</h2>
            <p className="text-lg text-gray-600">
              A systematic approach that ensures quality, efficiency, and minimal disruption.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-secondary/20 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 relative h-full border border-gray-100">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3 text-center">Assessment & Planning</h3>
                    <p className="text-gray-600 text-center">
                      We evaluate your space, understand your needs, and define clear goals for your renovation project.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 relative h-full border border-gray-100">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3 text-center">Design & Budget</h3>
                    <p className="text-gray-600 text-center">
                      Our experts create detailed plans and provide transparent cost estimates for your approval.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 relative h-full border border-gray-100">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3 text-center">Preparation</h3>
                    <p className="text-gray-600 text-center">
                      We set up the site, protect surrounding areas, and begin the careful demolition process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 relative h-full border border-gray-100">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3 text-center">Construction & Execution</h3>
                    <p className="text-gray-600 text-center">
                      Our skilled team brings your plans to life with precision and attention to detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 relative z-10">
              {/* Step 5 */}
              <div className="group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 relative h-full border border-gray-100">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">5</span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3 text-center">Finishing</h3>
                    <p className="text-gray-600 text-center">
                      We complete all painting, flooring, and final installations to perfect your space.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 relative h-full border border-gray-100">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">6</span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3 text-center">Quality Check</h3>
                    <p className="text-gray-600 text-center">
                      Our rigorous inspection ensures all work meets our high standards of excellence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 relative h-full border border-gray-100">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">7</span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3 text-center">Handover</h3>
                    <p className="text-gray-600 text-center">
                      We present your beautifully renovated space and guide you through all new features.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 8 */}
              <div className="group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 relative h-full border border-gray-100">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">8</span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3 text-center">Post-Renovation Support</h3>
                    <p className="text-gray-600 text-center">
                      We provide ongoing assistance and maintenance to ensure lasting satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="highlight">
              <Link href="/contact">Start Your Renovation Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Snippets Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Recent Renovation Projects</h2>
            <p className="text-lg text-gray-600">
              Browse through our portfolio of successful renovation projects in Noida and Greater Noida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <iframe
                  src="https://youtube.com/embed/6LF3_EboQTk"
                  title="Renovation Project 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <iframe
                  src="https://youtube.com/embed/YmDLRkNAWEg"
                  title="Renovation Project 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <iframe
                  src="https://youtube.com/embed/QXIW7v5A73o"
                  title="Renovation Project 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary/5">
              <Link href="/projects">View All Renovation Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common questions about our renovation services.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  How long does a typical renovation project take?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  The timeline depends on the scope and complexity of your renovation. A single room renovation might
                  take 3-6 weeks, while a complete home renovation could take 3-6 months. During our initial
                  consultation, we'll provide a detailed timeline based on your specific requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  Do I need to move out during the renovation?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  It depends on the extent of the renovation. For minor updates or single room renovations, you can
                  usually stay in your home. For extensive renovations that affect multiple areas or utilities, it might
                  be more comfortable to temporarily relocate. We'll discuss this during the planning phase and help you
                  make the best decision based on your specific situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  How do you handle unexpected issues discovered during renovation?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  Our thorough initial assessment helps minimize surprises, but renovations can sometimes reveal hidden
                  issues like water damage or electrical problems. If we discover any unexpected issues, we'll
                  immediately inform you, explain the implications, and present options for addressing them. We maintain
                  transparent communication throughout the process and never proceed with additional work without your
                  approval.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  Can I use my existing furniture and fixtures in the renovated space?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  We're happy to incorporate your existing furniture, fixtures, and meaningful items into the renovated
                  space. Our designers are skilled at blending new and existing elements to create a cohesive look.
                  During the planning phase, we'll discuss which items you'd like to keep and how best to integrate them
                  into the new design.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  What warranty do you offer on renovation work?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  We provide a 10-year warranty on all our renovation work, covering both materials and workmanship.
                  This reflects our confidence in the quality of our renovations and our commitment to your
                  satisfaction. We also offer post-renovation support to address any concerns that may arise after
                  project completion.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Ready to Transform Your Space?</h2>
            <p className="text-lg text-gray-600">
              Take the first step towards your dream renovation. Our experts are ready to bring your vision to life with
              quality craftsmanship and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[400px]">
              <Image src="/noida-home-transformation.png" alt="Home Transformation" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-white text-sm">Recent Project</span>
                </div>
                <h3 className="text-white text-xl font-bold">Luxury Villa Renovation</h3>
                <p className="text-gray-200 text-sm">Sector 78, Noida</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <span className="text-primary font-bold text-xl">₹</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Affordable Excellence</h3>
                    <p className="text-primary font-medium">Starting from just Rs 900/sqft</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Our competitive pricing ensures you get the best value for your renovation investment without
                  compromising on quality.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">10-Year Warranty on all renovation work</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Guaranteed Price Protection - No hidden costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Zero Delays, Guaranteed - We pay penalty for delays</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild variant="highlight" size="lg">
                  <Link href="/contact">Schedule Your Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-secondary text-secondary hover:bg-secondary/5"
                >
                  <Link href="/projects">View Our Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
