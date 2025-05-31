"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function HeroForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   console.log("Form submitted:", formData)
  //   setFormData({ name: "", phone: "", service: "" })
  // }

  return (
    <div className="bg-white rounded-lg shadow-elevated p-4 md:p-6 backdrop-blur-sm bg-white/95 w-full max-w-sm mx-auto">
      <h3 className="text-base md:text-lg font-bold text-secondary mb-2">Request Your Free Consultation</h3>
      <p className="text-gray-600 text-sm mb-3">Fill out this form and we'll get back to you within 24 hours.</p>

      <form className="space-y-3" action="https://formbold.com/s/9m212" method="POST">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-gray-300 focus:border-primary focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border-gray-300 focus:border-primary focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service" className="text-sm font-medium">
            Service Type
          </Label>
          <Select onValueChange={handleServiceChange} value={formData.service}>
            <SelectTrigger id="service" className="border-gray-300 focus:border-primary focus:ring-primary">
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="home-construction">Home Construction</SelectItem>
              <SelectItem value="home-interiors">Home Interiors</SelectItem>
              <SelectItem value="home-renovations">Home Renovations</SelectItem>
              <SelectItem value="other-services">Other Services</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" variant="highlight" className="w-full">
          Request Your Free Consultation
        </Button>
      </form>

      <p className="text-xs text-gray-500 mt-2">By submitting this form, you agree to our privacy policy.</p>
    </div>
  )
}
