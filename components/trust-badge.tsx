import type React from "react"
interface TrustBadgeProps {
  icon: React.ReactNode
  text: string
  rating?: string
}

export default function TrustBadge({ icon, text, rating }: TrustBadgeProps) {
  return (
    <>
      <div className="bg-primary p-1.5 md:p-2 rounded-full mr-2 md:mr-3 transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <span className="font-medium text-sm md:text-base">
        {text === "5-Star Rated" && rating ? (
          <>{rating.split("/")[0]} Star Rated</>
        ) : rating ? (
          `${text} (${rating})`
        ) : (
          text
        )}
      </span>
    </>
  )
}
