"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function ProgressBar() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Reset progress when route changes
    setProgress(0)
    setIsVisible(true)

    // Simulate progress
    const timer1 = setTimeout(() => setProgress(30), 100)
    const timer2 = setTimeout(() => setProgress(60), 300)
    const timer3 = setTimeout(() => setProgress(80), 600)
    const timer4 = setTimeout(() => {
      setProgress(100)
      const hideTimer = setTimeout(() => setIsVisible(false), 200)
      return () => clearTimeout(hideTimer)
    }, 1000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [pathname])

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-1 z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="h-full bg-primary transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
    </div>
  )
}
