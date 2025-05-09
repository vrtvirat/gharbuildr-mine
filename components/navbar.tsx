"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Logo from "@/components/logo"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "https://blog.gharbuildr.com/" },
  { name: "Contact Us", href: "/contact" },
]

const services = [
  { name: "Home Construction", href: "/services/home-construction" },
  { name: "Interior Design", href: "/services/interior-design" },
  { name: "Renovations", href: "/services/renovations" },
  { name: "All Services", href: "/services" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent bg-gradient-to-b from-black/70 to-transparent py-2 md:py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo variant={isScrolled ? "default" : "white"} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name} className="relative group">
                <button
                  className={cn(
                    "flex items-center text-white hover:text-primary transition-colors duration-300 font-medium text-sm uppercase tracking-wide focus:outline-none",
                    isScrolled ? "text-secondary" : "text-white",
                    pathname.includes("/services") && "text-primary font-semibold",
                  )}
                >
                  {link.name} <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className={cn(
                        "block px-3 py-2 text-sm font-medium text-secondary hover:text-primary hover:bg-gray-100 transition-colors rounded-md",
                        pathname === service.href && "text-primary font-semibold",
                      )}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-white hover:text-primary transition-colors duration-300 font-medium text-sm uppercase tracking-wide relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                  isScrolled ? "text-secondary" : "text-white",
                  pathname === link.href && "text-primary font-semibold after:w-full",
                )}
              >
                {link.name}
              </Link>
            ),
          )}
        </nav>

        {/* Phone and CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+918383878137"
            className={cn(
              "flex items-center hover:text-primary transition-colors",
              isScrolled ? "text-secondary" : "text-white",
            )}
          >
            <Phone className="h-4 w-4 mr-2" />
            <span className="font-medium">+91-83838 78137</span>
          </a>
          <Button variant="highlight" size="default">
            Get Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <a
            href="tel:+918383878137"
            className={cn("hover:text-primary transition-colors", isScrolled ? "text-secondary" : "text-white")}
            aria-label="Call us"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn("hover:text-primary transition-colors", isScrolled ? "text-secondary" : "text-white")}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name} className="py-1.5">
                  <p className="font-medium text-secondary mb-1">Services</p>
                  <div className="pl-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className={cn(
                          "block text-secondary hover:text-primary transition-colors text-sm",
                          pathname === service.href && "text-primary font-semibold",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-secondary hover:text-primary transition-colors py-1.5 font-medium",
                    pathname === link.href && "text-primary font-semibold",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ),
            )}

            <Button variant="highlight" className="w-full mt-1" onClick={() => setIsOpen(false)}>
              Get Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
