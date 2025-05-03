import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

export default function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
      <div className="mb-6 text-primary">
        <div className="bg-primary/5 p-4 rounded-lg inline-block transition-colors duration-300 group-hover:bg-primary/10">
          {icon}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>

      <p className="text-gray-600 mb-6">{description}</p>

      <Link
        href={link}
        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-all duration-300 group-hover:translate-x-1"
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  )
}
