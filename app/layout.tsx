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
  metadataBase: new URL('https://gharbuildr.com'),
  title: {
    default: "Home Construction Company in Noida | gharbuildr.com",
    template: "%s | gharbuildr.com"
  },
  description: "Premier home construction, interior design, and renovation services in Noida & Greater Noida. Transparent pricing, guaranteed timelines, and 20-year structural warranty. Get a free consultation today!",
  keywords: ["home construction", "interior design", "renovation", "Noida", "Greater Noida", "construction company", "home builder", "interior designer"],
  authors: [{ name: "gharbuildr" }],
  creator: "gharbuildr",
  publisher: "gharbuildr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gharbuildr.com",
    siteName: "gharbuildr.com",
    title: "Home Construction Company in Noida | gharbuildr.com",
    description: "Premier home construction, interior design, and renovation services in Noida & Greater Noida. Transparent pricing, guaranteed timelines, and 20-year structural warranty.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "gharbuildr.com - Home Construction & Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "Home Construction Company in Noida | gharbuildr.com",
    description: "Premier home construction, interior design, and renovation services in Noida & Greater Noida.",
    images: ["/og-image.jpg"],
    creator: "@gharbuildr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
}

// Update the RootLayout function to include the ProgressBar component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
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
