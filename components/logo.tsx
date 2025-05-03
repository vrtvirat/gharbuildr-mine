import Link from "next/link"

interface LogoProps {
  variant?: "default" | "white"
  withText?: boolean
  className?: string
}

export default function Logo({ variant = "default", withText = true, className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative flex items-center">
        {/* Logo Text */}
        {withText && (
          <div className={`font-bold text-xl ${variant === "white" ? "text-white" : "text-primary"}`}>
            gharbuildr.com
          </div>
        )}
      </div>
    </Link>
  )
}
