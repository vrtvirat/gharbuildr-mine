import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Home Construction Projects in Noida | gharbuildr.com",
  description: "Explore our portfolio of completed custom homes, villas, and residential construction projects across Noida and Greater Noida. See our commitment to quality firsthand.",
  openGraph: {
    title: "Our Home Construction Projects in Noida | gharbuildr.com",
    description: "Explore our portfolio of completed custom homes, villas, and residential construction projects across Noida and Greater Noida. See our commitment to quality firsthand.",
    images: [
      {
        url: "/greater-noida-modern-villa.png",
        width: 1200,
        height: 630,
        alt: "gharbuildr.com - Our Construction Projects",
      },
    ],
  },
  alternates: {
    canonical: "https://gharbuildr.com/projects",
  },
}

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/greater-noida-modern-villa.png" alt="Our Projects" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Our Video Portfolio</h1>
            <p className="text-xl text-gray-100">
              Browse through our showcase of successful projects that demonstrate our commitment to quality, innovation,
              and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Project Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ongoing Project - House Construction</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow the progress of our current flagship construction project.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://youtube.com/embed/BDgE-u48Ub8"
              title="Ongoing House Construction Project"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </section>

      {/* House Constructions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">House Constructions</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our completed house construction projects from foundation to finishing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <iframe
                  src="https://youtube.com/embed/zwvzEcQm3_4"
                  title="House Construction Project 1"
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
                  src="https://youtube.com/embed/rHHqpSZ2NuU"
                  title="House Construction Project 2"
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
                  src="https://youtube.com/embed/CG_s4H69ZhI"
                  title="House Construction Project 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Transformations Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interior Transformations</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Witness the stunning interior design transformations we've created for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/YR6SgwhXwn0?si=FlI5K3PTfKjKc_Ks"
                  title="Interior Transformation Project 1"
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
                  title="Interior Transformation Project 2"
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
                  title="Interior Transformation Project 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renovations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Renovations</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the dramatic before and after transformations of our renovation projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <iframe
                  src="https://youtube.com/embed/YmDLRkNAWEg"
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
                  src="https://youtube.com/embed/6LF3_EboQTk"
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
        </div>
      </section>
    </>
  )
}
