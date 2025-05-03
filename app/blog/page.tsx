import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

// Blog post card component
function BlogPostCard({ image, title, excerpt, date, author, category, slug }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-card border border-gray-100 hover:shadow-elevated transition-all duration-500 transform hover:-translate-y-2 group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full transform transition-transform duration-300 group-hover:scale-105">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium mt-4 transition-all duration-300 group-hover:translate-x-2"
        >
          Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      image: "/noida-modern-home.png",
      title: "5 Modern Home Design Trends in Noida for 2025",
      excerpt:
        "Discover the latest architectural and interior design trends that are shaping homes in Noida and Greater Noida this year.",
      date: "April 15, 2025",
      author: "Priya Sharma",
      category: "Design Trends",
      slug: "modern-home-design-trends-2025",
    },
    {
      image: "/modern-kitchen-transformation.png",
      title: "Renovation vs. Rebuilding: What's Right for Your Property?",
      excerpt:
        "A comprehensive guide to help you decide whether to renovate your existing property or rebuild from scratch.",
      date: "April 8, 2025",
      author: "Rajesh Kumar",
      category: "Renovation",
      slug: "renovation-vs-rebuilding",
    },
    {
      image: "/eco-friendly-building-materials.png",
      title: "Sustainable Building Materials for Eco-Friendly Homes",
      excerpt:
        "Explore environmentally friendly building materials that reduce your carbon footprint without compromising on quality or aesthetics.",
      date: "March 27, 2025",
      author: "Amit Patel",
      category: "Sustainability",
      slug: "sustainable-building-materials",
    },
    {
      image: "/modern-minimalist-kitchen.png",
      title: "Kitchen Design Ideas That Maximize Space and Functionality",
      excerpt:
        "Practical tips and creative solutions to transform your kitchen into a space that's both beautiful and highly functional.",
      date: "March 20, 2025",
      author: "Neha Gupta",
      category: "Interior Design",
      slug: "kitchen-design-ideas",
    },
    {
      image: "/blueprint-budget.png",
      title: "Creating a Realistic Budget for Your Home Construction Project",
      excerpt:
        "Learn how to plan your finances effectively and avoid common budgeting pitfalls when building your dream home.",
      date: "March 12, 2025",
      author: "Vikram Singh",
      category: "Budget Planning",
      slug: "realistic-construction-budget",
    },
    {
      image: "/vastu-harmonious-home.png",
      title: "Incorporating Vastu Principles in Modern Home Design",
      excerpt:
        "How to blend traditional Vastu Shastra principles with contemporary architecture for harmony and positive energy.",
      date: "March 5, 2025",
      author: "Sanjay Kapoor",
      category: "Vastu & Design",
      slug: "vastu-modern-home-design",
    },
  ]

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/construction-design-header.png" alt="Blog" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Construction & Design Insights</h1>
            <p className="text-xl text-gray-100">
              Expert advice, trends, and tips for building, renovating, and designing your dream space in Noida &
              Greater Noida.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative max-w-md">
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border-gray-300 focus:border-primary focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="text-sm">
                All
              </Button>
              <Button variant="outline" className="text-sm">
                Design Trends
              </Button>
              <Button variant="outline" className="text-sm">
                Construction
              </Button>
              <Button variant="outline" className="text-sm">
                Renovation
              </Button>
              <Button variant="outline" className="text-sm">
                Interior Design
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Featured Article</h2>
            <p className="text-lg text-gray-600">
              Our most popular and informative content to help you make informed decisions.
            </p>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-elevated border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-auto">
                <Image src="/greater-noida-luxury-estate.png" alt="Featured Post" fill className="object-cover" />
              </div>
              <div className="p-8 md:p-12">
                <div className="mb-4">
                  <span className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">Featured</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  The Complete Guide to Building Your Dream Home in Noida
                </h3>
                <p className="text-gray-600 mb-6">
                  From land acquisition to final touches, this comprehensive guide walks you through every step of the
                  home construction process in Noida and Greater Noida, helping you avoid common pitfalls and make
                  informed decisions.
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>April 20, 2025</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    <span>Vikram Singh</span>
                  </div>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/blog/complete-guide-home-construction">Read Full Article</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest trends, tips, and insights in construction and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/5">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
