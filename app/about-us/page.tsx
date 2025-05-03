import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Clock, Award, CheckCircle } from "lucide-react"

export default function AboutUsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/greater-noida-construction.png" alt="Our Team" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Our Story & Commitment: Building Trust in Noida & Greater Noida</h1>
            <p className="text-xl text-gray-100">
              Discover the team behind gharbuildr.com and our mission to transform the construction experience in Noida
              and Greater Noida.
            </p>
          </div>
        </div>
      </section>

      {/* Our Foundation Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Foundation of Trust & Excellence in Noida Construction</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our journey began in 2012 under the name Virat Infra, laying strong foundations across diverse
                  projects, from commercial spaces nationwide to significant infrastructure in the NCR. Through these
                  years, we honed our skills, embraced precision, and built a reputation for reliability. We
                  successfully completed over 60+ projects in total, gaining invaluable experience in the complexities
                  of the construction world.
                </p>
                <p>
                  In 2020, we recognized a deeper calling – the profound impact of building spaces where families live,
                  laugh, and create memories. This led us to focus our expertise entirely on residential construction,
                  interior design, and renovation in the Noida and Greater Noida region. Since this pivot, we have
                  proudly completed over 20+ residential projects, each one crafted with personal attention and an
                  unwavering commitment to quality.
                </p>
                <p>
                  This evolution is now embodied in gharbuildr.com. While our name has changed, the core values forged
                  over years of experience remain our bedrock. We are the same dedicated team, bringing our proven track
                  record and passion for building to help you create your dream home or transform your existing space
                  right here in Noida and Greater Noida.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/noida-construction-meet.png" alt="Our Team at Work" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Blueprint for Building in Noida</h2>
            <p className="text-lg text-gray-600">
              Building or renovating your home is a significant undertaking, and we believe it should be an experience
              filled with excitement, not anxiety. At gharbuildr.com, we've built our process around ensuring your
              complete peace of mind.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              We understand the unique challenges and opportunities of building in Noida and Greater Noida – from
              navigating local regulations to understanding the specific needs of homeowners in this dynamic region. Our
              commitment goes beyond just construction; it's about a partnership built on transparency, reliability, and
              genuine care.
            </p>
            <p className="text-xl font-medium text-secondary mt-8 mb-6">We stand by our promises:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Your Investment is Secure</h3>
                  <p className="text-gray-600">
                    With Guaranteed Price Protection and transparent, bank-approved quotations, you have financial
                    certainty from day one.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Your Time is Respected</h3>
                  <p className="text-gray-600">
                    Our Zero Delays, Guaranteed promise means we are committed to delivering your project on schedule.
                    We even pay a penalty if there's an avoidable delay.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Your Future is Protected</h3>
                  <p className="text-gray-600">
                    We build with superior quality materials and craftsmanship, backed by an Industry-Leading 20-Year
                    Structural Warranty for lasting durability and peace of mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">You're Always Informed</h3>
                  <p className="text-gray-600">
                    Your Dedicated Relationship Manager ensures clear, proactive communication, keeping you updated and
                    supported throughout your project journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">We Know Noida</h3>
                  <p className="text-gray-600">
                    Our deep Local Expertise means we understand the specific requirements and best practices for
                    building and renovating right here in your area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Voices Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Modern background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 opacity-80 z-0"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9InN2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMDAyOTVjIiBmaWxsLW9wYWNpdHk9IjAuMDMiPjxwYXRoIGQ9Ik0zNiAzNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bTItMmgxdjFoLTF2LTF6bTIgMmgxdjRoLTF2LTR6bTItMmoxdjJoLTF2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 z-0"></div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-700 mb-4 italic">
                "Excellent planning and execution. Hats off to brilliant and dedicated team for bringing life to amazing
                & unique ideas. All thanks to the proprietor for having the patience and accommodating changes at last
                moment. Highly recommended if you want a home to match the kind of life you want to lead inside."
              </p>
              <div>
                <h4 className="font-bold text-secondary">Sunny Chaudhary</h4>
                <p className="text-gray-600 text-sm">1 month ago</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-700 mb-4 italic">
                "gharbuildr.com constructed my 3BHK home in Greater Noida, and I'm extremely satisfied! They used double
                beams in the walls to ensure longevity, which shows their attention to detail. Udham Ji personally
                supervised the project and ensured everything was perfect. Highly recommend them for house
                construction!"
              </p>
              <div>
                <h4 className="font-bold text-secondary">Mani Chaudhary</h4>
                <p className="text-gray-600 text-sm">2 months ago</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-700 mb-4 italic">
                "I strongly recommend them for construction and interior design. They have a skilled team, creative
                ideas, and they finish on time, surpassing expectations. They care about customers and the environment,
                making their services outstanding!"
              </p>
              <div>
                <h4 className="font-bold text-secondary">Vaibhavi Verma</h4>
                <p className="text-gray-600 text-sm">1 year ago</p>
              </div>
            </div>
          </div>

          {/* Modern decorative elements */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl -z-10"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="relative bg-white rounded-xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjdhMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptMiAyaDF2NGgtMXYtNHptLTIgMmgxdjJoLTF2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>

            {/* Content container with border */}
            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-0 border-8 border-primary/10 rounded-xl overflow-hidden">
              {/* Left content area */}
              <div className="lg:col-span-3 p-8 md:p-12 bg-white">
                <div className="max-w-xl">
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    Let's Connect
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Your Vision, Our Expertise</h2>
                  <p className="text-gray-700 text-lg mb-8">
                    Every great home begins with a conversation. Share your dreams with us, and let's create something
                    extraordinary together in Noida & Greater Noida.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Link href="/contact">Book Your Free Consultation</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-2 border-secondary text-secondary hover:bg-secondary/5 px-8 py-3 text-base"
                    >
                      <Link href="/projects">Browse Our Projects</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right image area */}
              <div className="lg:col-span-2 relative min-h-[300px]">
                <Image
                  src="/greater-noida-modern-villa.png"
                  alt="Modern Home in Greater Noida"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#ff7a00"
                          stroke="none"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white text-sm font-medium">4.8/5 Rating</span>
                  </div>
                  <p className="text-white text-sm mt-1">Based on 50+ client reviews</p>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-600">20-Year Warranty</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-600">On-Time Delivery</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-600">Quality Assured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-600">Transparent Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
