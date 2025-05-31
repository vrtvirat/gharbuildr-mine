import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Construction Tips, Trends & Guides for Noida",
  description: "Get expert tips, industry news, and inspiration for your next construction or renovation project in Noida. gharbuildr.com's blog keeps you informed and inspired.",
  openGraph: {
    title: "Construction Tips, Trends & Guides for Noida",
    description: "Get expert tips, industry news, and inspiration for your next construction or renovation project in Noida. gharbuildr.com's blog keeps you informed and inspired.",
    images: [
      {
        url: "/greater-noida-modern-villa.png",
        width: 1200,
        height: 630,
        alt: "gharbuildr.com - Construction Blog",
      },
    ],
  },
  alternates: {
    canonical: "https://gharbuildr.com/blog",
  },
}

export default function BlogPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Construction Tips, Trends & Guides for Noida</h1>
      <p className="text-lg text-gray-600 mb-8">
        Coming soon: Expert insights, latest trends, and comprehensive guides for home construction, interior design, and renovation in Noida & Greater Noida.
      </p>
    </div>
  )
} 