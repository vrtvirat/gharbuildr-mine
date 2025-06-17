import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { Testimonial } from '@/data/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <Card className={cn('bg-white', className)}>
      <CardContent className="p-6">
        <blockquote className="text-gray-600 mb-4">"{testimonial.quote}"</blockquote>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
