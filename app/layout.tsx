import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Import the new components at the top of the file
import ProgressBar from "@/components/progress-bar"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Home Construcation Company in Noida | gharbuildr.com",
  description: "gharbuildr.com - Premier home construction, interior design, and renovation services in Noida & Greater Noida. Transparent pricing, guaranteed timelines, and 20-year structural warranty. Get a free consultation today!",
    generator: 'v0.dev'
}

// Update the RootLayout function to include the ProgressBar component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ProgressBar />
          <ScrollToTop />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
