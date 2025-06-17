'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const ProgressBar = dynamic(() => import("@/components/progress-bar"), { ssr: false })
const ScrollToTop = dynamic(() => import("@/components/scroll-to-top"), { ssr: false })

interface ClientWrapperProps {
  children: React.ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <>
      <ProgressBar />
      <ScrollToTop />
      {children}
    </>
  )
} 