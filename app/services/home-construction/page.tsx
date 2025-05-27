import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, X } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Add this CSS class for the pattern grid
const patternGridStyles = {
  backgroundImage:
    "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
  backgroundSize: "20px 20px",
}

// Add this animation style at the top of the file with other styles
const animationStyles = `
  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-gradient {
    background-size: 200% auto;
    animation: gradientFlow 5s ease infinite;
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes pulse-border {
    0% { border-color: rgba(var(--primary-rgb), 0.3); }
    50% { border-color: rgba(var(--primary-rgb), 0.8); }
    100% { border-color: rgba(var(--primary-rgb), 0.3); }
  }
  .pulse-border {
    animation: pulse-border 2s infinite;
  }
`

export default function HomeConstructionPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/greater-noida-villa.png"
            alt="Home Construction in Greater Noida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Build Your Dream Home in Noida & Greater Noida</h1>
            <p className="text-xl text-gray-100">
              Expert home construction services with guaranteed timelines, transparent pricing, and exceptional quality.
            </p>
          </div>
        </div>
      </section>

      {/* Core Description Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Your Dream Home, Built Right in Noida & Greater Noida</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Building a new home on your plot in Noida or Greater Noida is a monumental step. It's about creating a
                  space that perfectly fits your life and stands the test of time. gharbuildr.com specializes in
                  residential construction services in this region, turning your vision into a durable, beautiful
                  reality. We are your trusted home builder for new house construction on your plot in Noida, dedicated
                  to quality from the ground up.
                </p>
                <p>
                  We handle the complexities of house building in Noida so you can focus on the excitement of your new
                  home.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild variant="highlight">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/greater-noida-modern-home.png"
                alt="Home Construction Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Highlights Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Home Construction Process</h2>
            <p className="text-lg text-gray-600">
              A systematic approach that ensures quality, efficiency, and transparency at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Plan Your Vision</h3>
              <p className="text-gray-600">Detailed consultation & site analysis on your Noida plot.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Design & Approval</h3>
              <p className="text-gray-600">
                Expert architectural/structural design & navigating Noida Authority permits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Lay Foundation</h3>
              <p className="text-gray-600">Precise excavation, steel work, and concrete pouring for a strong base.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Build Structure</h3>
              <p className="text-gray-600">Erecting columns, beams, and slabs with quality materials.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Finishing Touches</h3>
              <p className="text-gray-600">Walls, plastering, flooring, and essential fittings.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">6</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Checks</h3>
              <p className="text-gray-600">Rigorous inspections at every stage.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">7</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Handover</h3>
              <p className="text-gray-600">Welcome to your completed dream home.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">8</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Post-Build Support</h3>
              <p className="text-gray-600">Warranty & maintenance for peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Why Choose gharbuildr.com for Your Home Build?</h2>
            <p className="text-lg text-gray-600">
              See how our home construction approach sets us apart from traditional contractors in Noida and Greater
              Noida.
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
                    <td className="p-3 font-medium">
                      <span className="text-sm">Pricing Transparency</span>
                    </td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">
                          Guaranteed Price Protection - No hidden costs on your new house build
                        </span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">Estimates often change during construction</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium">
                      <span className="text-sm">Timeline Guarantee</span>
                    </td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">
                          Zero Delays, Guaranteed - We pay penalty for delays on your new home build!
                        </span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">Timelines often flexible, prone to delays</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium">
                      <span className="text-sm">Warranty</span>
                    </td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">Industry-Leading 20-Year Structural Warranty</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">Limited structural warranty, typically 1 year</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium">
                      <span className="text-sm">Communication</span>
                    </td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">
                          Dedicated Relationship Manager - Clear communication on your construction project
                        </span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">Communication can be inconsistent</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium">
                      <span className="text-sm">Project Management</span>
                    </td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">Stress-Free Project Management</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">Can be disorganized, requires client involvement</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium">
                      <span className="text-sm">Quality Control</span>
                    </td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">Uncompromising Quality & Premium Materials</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">Quality of materials and workmanship can vary significantly</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium">
                      <span className="text-sm">After-Sales Service</span>
                    </td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">1-Year Maintenance Support Included</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">After-sales service can be unreliable for new builds</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium">
                      <span className="text-sm">Pricing</span>
                    </td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">Very Competitive Prices</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">Pricing structures vary, potential for overspending</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium">
                      <span className="text-sm">Payment Structure</span>
                    </td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">Milestone-Based Payment Option</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50">
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">Payment schedules vary, less control for clients</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium rounded-bl-lg">
                      <span className="text-sm">Quotation Format</span>
                    </td>
                    <td className="p-3 bg-primary/5">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">Bank-Approved Detailed Quotation Format</span>
                      </div>
                    </td>
                    <td className="p-3 bg-gray-50 rounded-br-lg">
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">
                          Quotation formats can vary in detail and acceptance for financing
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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary/10 to-blue-100 relative">
        <div className="absolute inset-0 opacity-10" style={patternGridStyles}></div>
        <div className="container max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full"></div>
            <div className="absolute -left-4 -top-4 w-8 h-8 rounded-full bg-primary/20 animate-pulse"></div>
            <div
              className="absolute -right-4 -top-4 w-8 h-8 rounded-full bg-blue-200 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Main heading with animation */}
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-primary to-gray-800 animate-gradient">
                Our Construction Packages
              </span>
            </h2>

            {/* Subheading with highlight */}
            <p className="text-lg text-gray-600 mt-4 relative">
              Transparent pricing with no hidden costs –
              <span className="font-medium relative inline-block">
                choose the package that fits your needs
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20"></span>
              </span>
            </p>

            {/* Call to action badge */}
            <div
              className="mt-4 inline-block px-4 py-1 bg-primary/20 text-primary font-medium text-sm rounded-full animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              Limited Time Offers Available
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
            {/* Structure Only Package */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:translate-y-[-12px] group relative">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                <div className="absolute transform rotate-45 bg-gray-200 text-gray-600 font-medium py-1 left-[-40px] top-[16px] w-[170px] text-center text-xs">
                  STRUCTURE
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-800 p-8 text-center relative">
                <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="mb-3 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">Structure Package</h3>
                <div className="w-12 h-1 bg-gray-300 mx-auto my-3"></div>
                <p className="text-4xl font-bold mt-4 mb-1 group-hover:scale-110 transition-transform duration-300">
                  ₹1,250<span className="text-sm font-normal">/sq.ft</span>
                </p>
                <p className="text-xs text-gray-500">(Exclusive of GST)</p>
              </div>

              <div className="divide-y divide-gray-100">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="site-preparation" className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium text-sm">
                      Site Preparation
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      <ul className="text-xs space-y-1.5 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Site Cleaning</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Leveling</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Excavation up to 5 feet depth</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Anti-termite treatment</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="structure" className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium text-sm">
                      Structure
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      <ul className="text-xs space-y-1.5 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Earthquake resistant design</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Steel: Rathi, Kamdhenu or equivalent - 550 Fe grade</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Cement: Ultratech, Ambuja - 43 Grade</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Aggregates: 20 mm and 40 mm - Fine grade</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Brick: High Quality Redbrick</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>RCC: M20/M25 grade concrete</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Ceiling height: 10 feet</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="provisions" className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium text-sm">
                      Included Provisions
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      <ul className="text-xs space-y-1.5 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Flooring: Brick Blast filling</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Electric: Concealed conduit pipe laying, Inner box fitting</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Bathroom: Internal plumbing pipe laying, Waterproofing</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Staircase: RCC Staircase structure construction</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>AC: Conduit provision for AC piping where required</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="p-8 text-center bg-gradient-to-b from-white to-gray-50">
                <div className="space-y-4">
                  <Button
                    asChild
                    className="w-full bg-gray-700 hover:bg-gray-800 text-white text-sm py-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.03] relative overflow-hidden group"
                  >
                    <Link href="tel:+917065120100" className="flex items-center justify-center">
                      <span className="relative flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        Call Now
                      </span>
                    </Link>
                  </Button>
                  <div className="text-sm text-gray-500 flex items-center justify-center">
                    <span className="inline-block animate-pulse mr-2 text-gray-600">✓</span> Free consultation & quote
                  </div>
                </div>
              </div>
            </div>

            {/* Structure + Premium Interior Package */}
            <div
              className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-primary/30 transition-all duration-500 hover:shadow-2xl hover:translate-y-[-12px] relative z-10 transform md:scale-[1.05] group animate-float"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-2 rounded-bl-lg z-20">
                MOST POPULAR
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary/20 animate-pulse"></div>
              <div
                className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-primary/10 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              <div className="bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 text-gray-800 p-8 text-center relative">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="mb-3 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">Structure + Premium Interiors</h3>
                <div className="w-12 h-1 bg-primary/40 mx-auto my-3"></div>
                <p className="text-4xl font-bold mt-4 mb-1 group-hover:scale-110 transition-transform duration-300">
                  ₹2,250<span className="text-sm font-normal">/sq.ft</span>
                </p>
                <p className="text-xs text-gray-500">(Exclusive of GST)</p>
              </div>

              <div className="divide-y divide-gray-100">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="kitchen" className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium text-sm">
                      Kitchen
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      <ul className="text-xs space-y-1.5 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Sink: SS 304 Grade Stainless Steel Sink</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>
                            Wall Tiles: Tiles up to 2 feet above the kitchen slab (Material cost up to ₹60/Sq. Ft.)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Slab: Natural Granite Slab (Standard thickness and finish)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Storage: Modular Kitchen Storage as per requirement</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Accessory planning</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="bathroom" className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium text-sm">
                      Bathroom
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      <ul className="text-xs space-y-1.5 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>All Sanitary Fittings: Jaguar or equivalent</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Wall mounted seats: Jaguar or equivalent</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Vanity: Vanity up to 24 inches size</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Tiles: Wall Tiles up to ceiling height (Material cost up to ₹60/Sq. Ft.)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Doors/Door frames: UPVC doors/Door frames</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="doors-windows" className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium text-sm">
                      Doors & Windows
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      <ul className="text-xs space-y-1.5 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Windows: UPVC/Aluminum/Iron Windows</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Doors: Flush doors with laminate finish</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Entry door: Designer wooden door with veneer and 1 SS 304 grade safety door</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>House main gate: SS 304 grade</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="painting" className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium text-sm">
                      Painting
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      <ul className="text-xs space-y-1.5 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>
                            Interior: Putty (2 coats), Primer (2 coats), Paint (3 coats) - Waterproof emulsion paint
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>
                            Exterior: Putty (2 coats), Primer (2 coats), Paint (3 coats) - Weatherproof paint (Apex or
                            equivalent)
                          </span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="flooring" className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium text-sm">
                      Flooring
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      <ul className="text-xs space-y-1.5 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Rooms & Drawing rooms: Tiles (Material cost up to ₹65/Sq. Ft.)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Other areas: Anti-skid tiles (Material cost up to ₹65/Sq. Ft.)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Staircase: Natural Granite</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="electrical" className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium text-sm">
                      Electrical
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      <ul className="text-xs space-y-1.5 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Wiring: All wiring fireproof (Polycab, KEI or equivalent)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Switches: Anchor, Havells or equivalent (Material cost up to ₹50/switch)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>MCB: Havells or equivalent</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Accessory provisions</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="other" className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium text-sm">
                      Other
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      <ul className="text-xs space-y-1.5 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Water Tank: 4 Layer Sintex tank of 1000 Ltrs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Staircase & Balcony railings: SS 304 grade</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Window grill: SS 304 grade/MS</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="p-8 text-center bg-gradient-to-b from-white to-primary/5">
                <div className="space-y-4">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white text-sm py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03] relative overflow-hidden pulse-border"
                  >
                    <Link href="tel:+917065120100" className="flex items-center justify-center">
                      <span className="relative flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        Call Now
                      </span>
                    </Link>
                  </Button>
                  <div className="text-sm text-gray-600 flex items-center justify-center">
                    <span className="inline-block animate-pulse mr-2 text-primary">✓</span> Most popular choice
                  </div>
                </div>
              </div>
            </div>

            {/* Luxury Finish Package */}
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-300 transition-all duration-500 hover:shadow-2xl hover:translate-y-[-12px] group relative animate-float"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute transform rotate-45 bg-blue-500 text-white font-medium py-1 right-[-40px] top-[16px] w-[170px] text-center text-xs">
                  PREMIUM
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 text-gray-800 p-8 text-center relative">
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="mb-3 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">Luxury Finish</h3>
                <div className="w-12 h-1 bg-blue-300 mx-auto my-3"></div>
                <p className="text-4xl font-bold mt-4 mb-1 group-hover:scale-110 transition-transform duration-300">
                  Custom<span className="text-sm font-normal"> Quote</span>
                </p>
                <p className="text-xs text-gray-500">(Tailored to your needs)</p>
              </div>

              <div className="divide-y divide-gray-100">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="premium-features" className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium text-sm">
                      Premium Features
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      <ul className="text-xs space-y-1.5 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>All features from Structure + Premium Interiors package</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Upgraded materials and finishes</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="imported-materials" className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium text-sm">
                      Imported Materials
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      <ul className="text-xs space-y-1.5 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Premium imported tiles and flooring options</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>High-end fixtures and fittings</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="smart-home" className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium text-sm">
                      Smart Home Integration
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      <ul className="text-xs space-y-1.5 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Smart lighting and climate control</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Home automation systems</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Security and surveillance integration</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="custom-design" className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium text-sm">
                      Custom Design Elements
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      <ul className="text-xs space-y-1.5 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Bespoke architectural features</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Custom cabinetry and millwork</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Designer lighting solutions</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="consultation" className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium text-sm">
                      Personalized Consultation
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-0">
                      <ul className="text-xs space-y-1.5 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Dedicated design team</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>Material selection assistance</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="p-8 text-center bg-gradient-to-b from-white to-blue-50">
                <div className="space-y-4">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm py-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.03] relative overflow-hidden group"
                  >
                    <Link href="tel:+917065120100" className="flex items-center justify-center">
                      <span className="relative flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        Call Now
                      </span>
                    </Link>
                  </Button>
                  <div className="text-sm text-gray-600 flex items-center justify-center">
                    <span className="inline-block animate-pulse mr-2 text-blue-600">✓</span> Custom luxury solutions
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="text-sm text-gray-600 bg-white p-6 rounded-lg max-w-2xl mx-auto border border-gray-200 shadow-md hover:border-primary/30 transition-colors duration-300 flex items-center justify-center group hover:bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>
                <strong className="text-primary">Note:</strong> These are our standard packages. All prices are
                exclusive of GST. The final cost may vary based on your specific requirements, plot location, soil
                conditions, and material selections. Contact us for a customized quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Snippets Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Recent Home Construction Projects</h2>
            <p className="text-lg text-gray-600">
              Take a look at some of our recent construction projects in Noida and Greater Noida. Each project showcases
              our commitment to quality, innovation, and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Project 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/BDgE-u48Ub8`}
                  title="Ongoing Construction Project in Greater Noida"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ongoing Construction Project</h3>
              </div>
            </div>

            {/* Video Project 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/zwvzEcQm3_4`}
                  title="Luxury Home Construction in Noida"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Luxury Home Construction</h3>
              </div>
            </div>

            {/* Video Project 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/rHHqpSZ2NuU`}
                  title="Modern Bungalow Construction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Modern Bungalow Construction</h3>
              </div>
            </div>

            {/* Video Project 4 */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/CG_s4H69ZhI`}
                  title="Residential Complex Construction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Residential Complex Construction</h3>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our home construction services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  How long does it take to build a house in Noida/Greater Noida?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  The construction timeline depends on the size and complexity of your project. Typically, a standard
                  3-4 bedroom house takes 8-12 months from design approval to handover. We provide a detailed timeline
                  during the planning phase and commit to meeting these deadlines.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  Do you handle all necessary approvals and permits?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  Yes, we handle all required approvals and permits from local authorities, including building permits,
                  NOCs, and completion certificates. Our team has extensive experience navigating the regulatory
                  requirements in Noida and Greater Noida.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  What type of warranty do you offer on construction?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  We offer a 20-year structural warranty and a 10-year warranty on interior work. This includes
                  plumbing, electrical systems, waterproofing, and more. We also provide a detailed maintenance schedule
                  and support after handover.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  Can I make changes to the design during construction?
                </AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  What payment structure do you follow?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  We follow a milestone-based payment structure, where payments are tied to specific construction
                  milestones. This typically includes an initial deposit, followed by payments at foundation completion,
                  structure completion, finishing stages, and final handover. This ensures you only pay for work that
                  has been completed to your satisfaction.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
