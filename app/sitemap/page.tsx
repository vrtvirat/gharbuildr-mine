import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Find all pages and resources on gharbuildr.com. Navigate easily to learn more about our construction, interiors, and renovation services in Noida.",
  openGraph: {
    title: "Sitemap",
    description: "Find all pages and resources on gharbuildr.com. Navigate easily to learn more about our construction, interiors, and renovation services in Noida.",
    images: [
      {
        url: "/greater-noida-modern-villa.png",
        width: 1200,
        height: 630,
        alt: "gharbuildr.com - Sitemap",
      },
    ],
  },
  alternates: {
    canonical: "https://gharbuildr.com/sitemap",
  },
}

export default function SitemapPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Main Pages</h2>
          <ul className="space-y-2">
            <li><a href="/" className="text-primary hover:underline">Home</a></li>
            <li><a href="/about-us" className="text-primary hover:underline">About Us</a></li>
            <li><a href="/contact" className="text-primary hover:underline">Contact</a></li>
            <li><a href="/projects" className="text-primary hover:underline">Projects</a></li>
            <li><a href="/testimonials" className="text-primary hover:underline">Testimonials</a></li>
            <li><a href="https://blog.gharbuildr.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <ul className="space-y-2">
            <li><a href="/services" className="text-primary hover:underline">All Services</a></li>
            <li><a href="/services/home-construction" className="text-primary hover:underline">Home Construction</a></li>
            <li><a href="/services/interior-design" className="text-primary hover:underline">Interior Design</a></li>
            <li><a href="/services/renovations" className="text-primary hover:underline">Renovations</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Legal</h2>
          <ul className="space-y-2">
            <li><a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="text-primary hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 