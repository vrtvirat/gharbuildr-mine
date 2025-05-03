import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  image: string
  title: string
  location: string
  category: string
  link: string
}

export default function ProjectCard({ image, title, location, category, link }: ProjectCardProps) {
  return (
    <Link href={link} className="group block">
      <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 transform hover:-translate-y-2">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-sm font-medium bg-primary px-2 py-1 rounded-sm">{category}</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
    </Link>
  )
}
