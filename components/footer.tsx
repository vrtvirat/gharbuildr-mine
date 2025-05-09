"use client"

import Link from "next/link"
import { Phone, MapPin, Facebook, Instagram, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-secondary/90 text-white">
      {/* Top Wave Divider */}
      <div className="relative h-12 md:h-16 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Column 1: About Us */}
          <div className="space-y-4 md:col-span-4">
            <Logo variant="white" className="mb-3" />
            <p className="text-gray-300 leading-relaxed">
              Building Trust, Brick by Brick. Your trusted partner for residential construction, interior design, and
              renovation in Noida & Greater Noida.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.facebook.com/gharbuildr/"
                className="text-white hover:text-primary transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/gharbuildr/"
                className="text-white hover:text-primary transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@gharbuildr"
                className="text-white hover:text-primary transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-full"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/gharbuildr/"
                className="text-white hover:text-primary transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 md:col-span-5">
            <h3 className="text-lg font-bold text-white relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-12 after:bg-primary after:mt-1">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-primary font-medium mb-3">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/services/home-construction"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                    >
                      <span className="bg-primary/20 h-1 w-0 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      Home Construction
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/interior-design"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                    >
                      <span className="bg-primary/20 h-1 w-0 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      Interior Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/renovations"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                    >
                      <span className="bg-primary/20 h-1 w-0 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      Renovations
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-primary font-medium mb-3">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about-us"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                    >
                      <span className="bg-primary/20 h-1 w-0 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                    >
                      <span className="bg-primary/20 h-1 w-0 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/testimonials"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                    >
                      <span className="bg-primary/20 h-1 w-0 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://blog.gharbuildr.com/"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                    >
                      <span className="bg-primary/20 h-1 w-0 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                    >
                      <span className="bg-primary/20 h-1 w-0 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4 md:col-span-3">
            <h3 className="text-lg font-bold text-white relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-12 after:bg-primary after:mt-1">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <div className="bg-white/10 p-2 rounded-full mr-3 group-hover:bg-primary transition-all duration-300">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Our Office</p>
                  <address className="text-gray-300 not-italic">
                    SF 212C, Harsha Mall, Alpha I,
                    <br />
                    Greater Noida, Uttar Pradesh
                  </address>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/10 p-2 rounded-full mr-3 group-hover:bg-primary transition-all duration-300">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <a href="tel:+918383878137" className="text-gray-300 hover:text-primary transition-colors">
                    +91-83838 78137
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/10 p-2 rounded-full mr-3 group-hover:bg-primary transition-all duration-300">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <a href="mailto:info@gharbuildr.com" className="text-gray-300 hover:text-primary transition-colors">
                    info@gharbuildr.com
                  </a>
                </div>
              </li>
            </ul>
            <div className="pt-4">
              <Button asChild variant="highlight" className="w-full">
                <Link href="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-3 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} gharbuildr.com. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              <Link href="/privacy-policy" className="text-gray-400 text-sm hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 text-sm hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
