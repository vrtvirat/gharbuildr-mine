import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, X } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Designers in Noida for Homes & Offices | gharbuildr.com",
  description: "Transform your space with our expert interior design services in Noida. From modular kitchens to complete home interiors, we create functional and beautiful living spaces.",
  openGraph: {
    title: "Interior Designers in Noida for Homes & Offices | gharbuildr.com",
    description: "Transform your space with our expert interior design services in Noida. From modular kitchens to complete home interiors, we create functional and beautiful living spaces.",
    images: [
      {
        url: "/greater-noida-interior-design.png",
        width: 1200,
        height: 630,
        alt: "gharbuildr.com - Interior Design Services",
      },
    ],
  },
  alternates: {
    canonical: "https://gharbuildr.com/services/interior-design",
  },
}

export default function InteriorDesignPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/noida-luxury-living.png" alt="Interior Design in Noida" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Transform Your Space with Expert Interior Design</h1>
            <p className="text-xl text-gray-100">
              Create beautiful, functional spaces that reflect your personality and lifestyle in Noida & Greater Noida.
            </p>
          </div>
        </div>
      </section>

      {/* Core Description Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Transforming Spaces, Enhancing Lifestyles in Noida & Greater Noida</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Your home's interior should be a reflection of you – beautiful, functional, and comfortable.
                  gharbuildr.com offers expert interior design services in Noida & Greater Noida, creating personalized
                  spaces that you'll love living in. We specialize in home interior design, bringing creativity and
                  precision to every project.
                </p>
                <p>Let us help you design the perfect sanctuary right here in Noida.</p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/contact">Schedule Your Design Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/noida-living-modern.png" alt="Interior Design Process" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Highlights Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Interior Design Process</h2>
            <p className="text-lg text-gray-600">
              A collaborative approach that ensures your space is perfectly tailored to your needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Understand Your Vision</h3>
              <p className="text-gray-600">
                Consultation & style capture to fully understand your preferences, lifestyle needs, and design
                aspirations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Concept Development</h3>
              <p className="text-gray-600">
                Ideas & mood boards that translate your vision into visual concepts, helping you see the potential of
                your space.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Design Finalization</h3>
              <p className="text-gray-600">
                Layouts, materials, and finishes are selected and finalized, creating a comprehensive design plan for
                your space.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Execution</h3>
              <p className="text-gray-600">
                Bringing design to life through careful implementation, quality craftsmanship, and attention to every
                detail.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Styling & Handover</h3>
              <p className="text-gray-600">
                Final touches including accessories, art, and styling elements to complete your beautifully designed
                space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Why Choose gharbuildr.com for Your Interior Project?</h2>
            <p className="text-lg text-gray-600">
              See how our interior design approach sets us apart from traditional designers in Noida and Greater Noida.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="max-w-4xl mx-auto">
              <table className="w-full bg-white rounded-lg shadow-card">
                <thead>
                  <tr>
                    <th className="p-3 text-left bg-secondary text-white rounded-tl-lg text-sm">gharbuildr.com</th>
                    <th className="p-3 text-left bg-gray-800 text-white rounded-tr-lg text-sm">
                      What You Might Expect with a Traditional Contractor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">
                          Guaranteed Price Protection - No hidden costs on your design project.
                        </span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Estimates often change during the project.</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">
                          Zero Delays, Guaranteed - We pay penalty for delays on your interior project!
                        </span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Timelines often flexible, prone to delays.</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Industry-Leading Quality.</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Quality of materials and workmanship can vary significantly.</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">
                          Dedicated Relationship Manager - Clear communication on your design project.
                        </span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Communication can be inconsistent.</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Stress-Free Project Management.</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Can be disorganized, requires client involvement.</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Uncompromising Creativity & Expertise.</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Creativity and expertise can vary.</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Up to 10-Year Warranty on Interiors.</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Warranty is typically shorter.</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Very Competitive Prices.</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Pricing structures vary, potential for overspending.</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Milestone-Based Payment Option.</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">Payment schedules vary, less control for clients.</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 bg-primary/5 rounded-bl-lg">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">Bank-Approved Detailed Quotation Format.</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50 rounded-br-lg">
                      <div className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">
                          Quotation formats can vary in detail and acceptance for financing.
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Investment/Pricing Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interior Design Investment</h2>
            <p className="text-lg text-gray-600">
              Transparent pricing with custom solutions tailored to your specific needs
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-primary/10">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative">
                  <Image src="/noida-luxury-living.png" alt="Custom Interior Design" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 mix-blend-multiply"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 inline-block">
                      <p className="text-xl font-bold text-secondary">Starting from</p>
                      <p className="text-4xl font-bold text-primary">
                        ₹750<span className="text-lg font-normal text-gray-600">/sq.ft</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">Custom Design Solutions</h3>
                  <p className="text-gray-700 mb-6">
                    Every space is unique, and so are your needs. Our design team creates tailored solutions that
                    perfectly align with your vision, requirements, and budget.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Personalized design consultation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Premium material selection</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Dedicated project management</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Up to 10-year warranty</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                  >
                    <Link href="/contact">Schedule Your Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Snippets Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Interior Design Portfolio</h2>
            <p className="text-lg text-gray-600">
              Browse through our recent interior design projects in Noida and Greater Noida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/YR6SgwhXwn0?si=FlI5K3PTfKjKc_Ks"
                  title="Interior Transformation Project"
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
                  src="https://youtube.com/embed/vn_reyEX7_8"
                  title="Modern Interior Design"
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
                  src="https://youtube.com/embed/RSv3snLonpA"
                  title="Minimalist Interior Design"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary/5">
              <Link href="/projects">View All Interior Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our interior design services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  How long does an interior design project typically take?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  The timeline varies depending on the scope and complexity of the project. A single room might take 4-6
                  weeks, while a complete home interior could take 3-6 months. During our initial consultation, we'll
                  provide a detailed timeline based on your specific requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  Do I need to vacate my home during the interior design implementation?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  It depends on the extent of the work. For minor updates or single room renovations, you can usually
                  stay in your home. For comprehensive renovations, it might be more comfortable to temporarily
                  relocate. We'll discuss this during the planning phase and help you make the best decision.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  Can I use my existing furniture in the new design?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  We're happy to incorporate your existing furniture and meaningful pieces into the new design. Our
                  designers are skilled at blending new and existing elements to create a cohesive look that reflects
                  your personal style.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  How involved will I be in the design process?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  As involved as you'd like to be! Some clients prefer to be hands-on throughout the process, while
                  others prefer to leave most decisions to our partner designers. We've partnered with top design
                  professionals who aren't in-house, giving you access to diverse expertise and styles. We coordinate
                  everything and ensure regular communication and approval at key milestones based on your preferences.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  Do you provide warranty for your interior design work?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  Yes, we provide a 10-year warranty on all our interior work, including furniture, fixtures, and
                  finishes. This reflects our confidence in the quality of our materials and craftsmanship. We also
                  offer post-installation support to address any concerns that may arise.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
