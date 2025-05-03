import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name?: string
  location?: string
}

export default function TestimonialCard({ quote, name, location }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-card border border-gray-100 hover:shadow-elevated transition-all duration-500 transform hover:-translate-y-2">
      <div className="text-primary mb-4 md:mb-6 transform transition-transform duration-300 hover:scale-110 inline-block">
        <Quote className="h-6 md:h-8 w-6 md:w-8" />
      </div>
      <p className="text-gray-700 mb-6 md:mb-8 italic leading-relaxed text-sm md:text-base">"{quote}"</p>
      {(name || location) && (
        <div>
          {name && (
            <h4 className="font-bold text-secondary group-hover:text-primary transition-colors duration-300">{name}</h4>
          )}
          {location && <p className="text-gray-600 text-xs md:text-sm">{location}</p>}
        </div>
      )}
    </div>
  )
}
