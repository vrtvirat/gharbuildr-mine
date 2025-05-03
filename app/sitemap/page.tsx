import Link from "next/link"
import { ChevronRight, Home, Briefcase, FileText, Star, Newspaper } from "lucide-react"

export default function SitemapPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Sitemap</h1>
            <p className="text-xl text-gray-100">
              Find your way around our website with this comprehensive guide to all our pages and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Navigation */}
            <div className="col-span-1">
              <div className="bg-muted p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                <div className="flex items-center mb-6">
                  <Home className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl">Main Navigation</h2>
                </div>
                <ul className="space-y-4">
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link href="/" className="flex items-center text-secondary hover:text-primary">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Home</span>
                    </Link>
                    <p className="text-sm text-gray-600 mt-1 ml-6">Our main landing page with service overview</p>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link href="/about-us" className="flex items-center text-secondary hover:text-primary">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">About Us</span>
                    </Link>
                    <p className="text-sm text-gray-600 mt-1 ml-6">Learn about our company history and team</p>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link href="/services" className="flex items-center text-secondary hover:text-primary">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Services</span>
                    </Link>
                    <p className="text-sm text-gray-600 mt-1 ml-6">Overview of all our construction services</p>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link href="/projects" className="flex items-center text-secondary hover:text-primary">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Projects</span>
                    </Link>
                    <p className="text-sm text-gray-600 mt-1 ml-6">Portfolio of our completed work</p>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link href="/blog" className="flex items-center text-secondary hover:text-primary">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Blog</span>
                    </Link>
                    <p className="text-sm text-gray-600 mt-1 ml-6">Construction and design insights</p>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link href="/testimonials" className="flex items-center text-secondary hover:text-primary">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Testimonials</span>
                    </Link>
                    <p className="text-sm text-gray-600 mt-1 ml-6">What our clients say about us</p>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link href="/contact" className="flex items-center text-secondary hover:text-primary">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Contact</span>
                    </Link>
                    <p className="text-sm text-gray-600 mt-1 ml-6">Get in touch with our team</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services Pages */}
            <div className="col-span-1">
              <div className="bg-muted p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl">Services</h2>
                </div>
                <ul className="space-y-4">
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link
                      href="/services/home-construction"
                      className="flex items-center text-secondary hover:text-primary"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Home Construction</span>
                    </Link>
                    <p className="text-sm text-gray-600 mt-1 ml-6">Custom home building services</p>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link
                      href="/services/interior-design"
                      className="flex items-center text-secondary hover:text-primary"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Interior Design</span>
                    </Link>
                    <p className="text-sm text-gray-600 mt-1 ml-6">Transform your space with expert design</p>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link href="/services/renovations" className="flex items-center text-secondary hover:text-primary">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Renovations</span>
                    </Link>
                    <p className="text-sm text-gray-600 mt-1 ml-6">Breathe new life into existing properties</p>
                  </li>
                </ul>

                <div className="flex items-center mt-10 mb-6">
                  <Star className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl">Projects</h2>
                </div>
                <ul className="space-y-4">
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link href="/projects" className="flex items-center text-secondary hover:text-primary">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">All Projects</span>
                    </Link>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link
                      href="/projects?category=construction"
                      className="flex items-center text-secondary hover:text-primary"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Construction Projects</span>
                    </Link>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link
                      href="/projects?category=interior"
                      className="flex items-center text-secondary hover:text-primary"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Interior Design Projects</span>
                    </Link>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link
                      href="/projects?category=renovation"
                      className="flex items-center text-secondary hover:text-primary"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Renovation Projects</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Other Pages */}
            <div className="col-span-1">
              <div className="bg-muted p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                <div className="flex items-center mb-6">
                  <Newspaper className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl">Blog</h2>
                </div>
                <ul className="space-y-4">
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link href="/blog" className="flex items-center text-secondary hover:text-primary">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">All Articles</span>
                    </Link>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link
                      href="/blog?category=design-trends"
                      className="flex items-center text-secondary hover:text-primary"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Design Trends</span>
                    </Link>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link
                      href="/blog?category=construction"
                      className="flex items-center text-secondary hover:text-primary"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Construction</span>
                    </Link>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link
                      href="/blog?category=renovation"
                      className="flex items-center text-secondary hover:text-primary"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Renovation</span>
                    </Link>
                  </li>
                </ul>

                <div className="flex items-center mt-10 mb-6">
                  <FileText className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl">Legal Pages</h2>
                </div>
                <ul className="space-y-4">
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link href="/privacy-policy" className="flex items-center text-secondary hover:text-primary">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Privacy Policy</span>
                    </Link>
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    <Link href="/terms-of-service" className="flex items-center text-secondary hover:text-primary">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span className="font-medium">Terms of Service</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Visual Sitemap */}
          <div className="mt-16">
            <h2 className="text-center mb-12">Visual Site Structure</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="flex flex-col items-center">
                  {/* Home Node */}
                  <div className="bg-primary text-white px-6 py-3 rounded-lg font-medium mb-4">Home</div>

                  {/* Level 1 Connector */}
                  <div className="h-8 w-px bg-gray-300"></div>

                  {/* Level 1 Nodes */}
                  <div className="flex justify-center space-x-4 mb-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-secondary text-white px-4 py-2 rounded-lg font-medium">About Us</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-secondary text-white px-4 py-2 rounded-lg font-medium">Services</div>
                      {/* Level 2 Connector */}
                      <div className="h-8 w-px bg-gray-300"></div>
                      {/* Level 2 Nodes */}
                      <div className="flex justify-center space-x-2">
                        <div className="bg-gray-200 px-3 py-1 rounded-lg text-sm">Home Construction</div>
                        <div className="bg-gray-200 px-3 py-1 rounded-lg text-sm">Interior Design</div>
                        <div className="bg-gray-200 px-3 py-1 rounded-lg text-sm">Renovations</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-secondary text-white px-4 py-2 rounded-lg font-medium">Projects</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-secondary text-white px-4 py-2 rounded-lg font-medium">Blog</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-secondary text-white px-4 py-2 rounded-lg font-medium">Testimonials</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-secondary text-white px-4 py-2 rounded-lg font-medium">Contact</div>
                    </div>
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
