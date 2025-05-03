"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"

// Google reviews data from the provided image
const googleReviews = [
  {
    id: 1,
    name: "Sunny Chaudhary",
    avatar: "/confident-indian-professional.png", // Using placeholder image
    verified: true,
    rating: 5,
    date: "1 month ago",
    text: "Excellent planning and execution. Hats off to brilliant and dedicated team for bringing life to amazing & unique ideas. All thanks to the proprietor for having the patience and accommodating changes at last moment. Highly recommended if you want a home to match the kind of life you want to lead inside.",
  },
  {
    id: 2,
    name: "Mani Chaudhary",
    avatar: "/confident-indian-professional.png", // Using placeholder image
    verified: true,
    rating: 5,
    date: "2 months ago",
    text: "gharbuildr.com constructed my 3BHK home in Greater Noida, and I'm extremely satisfied! They used double beams in the walls to ensure longevity, which shows their attention to detail. Udham Ji personally supervised the project and ensured everything was perfect. Highly recommend them for house construction!",
  },
  {
    id: 3,
    name: "Vaibhavi Verma",
    avatar: "/confident-coder.png", // Using placeholder image
    verified: true,
    rating: 5,
    date: "1 year ago",
    text: "I strongly recommend them for construction and interior design. They have a skilled team, creative ideas, and they finish on time, surpassing expectations. They care about customers and the environment, making their services outstanding!",
  },
  {
    id: 4,
    name: "Hemendra Chaudhary",
    avatar: "/distinguished-indian-leader.png", // Using placeholder image
    verified: true,
    rating: 5,
    date: "1 year ago",
    text: "They provided exceptional interior renovation services. Their professionalism, attention to detail, and commitment to quality exceeded my expectations. The team delivered a beautifully crafted space on time. I highly recommend their top-notch construction services.",
  },
  {
    id: 5,
    name: "Prameet Haneja",
    avatar: "",
    initials: "P",
    verified: true,
    rating: 5,
    date: "2 years ago",
    text: "100% professional. Affordable with amazing customer service. Highly recommended for anyone looking to build or renovate their home.",
  },
  {
    id: 6,
    name: "Jayant Nagar",
    avatar: "",
    initials: "J",
    verified: true,
    rating: 5,
    date: "3 years ago",
    text: "Very unique and excellent finish kitchen renovation.",
  },
  {
    id: 7,
    name: "Harsh Kumar",
    avatar: "/thoughtful-gentleman.png", // Using placeholder image
    verified: true,
    rating: 5,
    date: "3 years ago",
    text: "they are really incredible with there work and they literally helped us lot for house construction.",
  },
  {
    id: 8,
    name: "Vikkuu Pant",
    avatar: "/vibrant-indian-couple.png", // Using placeholder image
    verified: true,
    rating: 5,
    date: "3 years ago",
    text: "We purchased a new flat and contacted them for interior work specially for kitchen and wardrobes.",
  },
  {
    id: 9,
    name: "Kunal Pandey",
    avatar: "",
    initials: "K",
    verified: true,
    rating: 5,
    date: "3 years ago",
    text: "Kitchen renovation turned out to be great, will definitely recommend for",
  },
]

// AI-Generated Summary
const aiSummary = {
  points: [
    "Highly praised for professionalism and attention to detail.",
    "Clients appreciate timely project completion and excellent communication.",
    "Renowned for delivering high-quality work in both construction and interior design.",
  ],
}

// Review summary data
const reviewSummary = {
  averageRating: 4.9,
  totalReviews: 56,
  reviewDistribution: {
    5: 52,
    4: 3,
    3: 1,
    2: 0,
    1: 0,
  },
}

// Component for displaying star ratings
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  )
}

// Component for individual review
const ReviewCard = ({ review }: { review: (typeof googleReviews)[0] }) => {
  const [expanded, setExpanded] = useState(false)
  const isLongText = review.text.length > 150

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center">
              <p className="font-medium">{review.name}</p>
              {review.verified && (
                <div className="ml-1 text-primary">
                  <CheckCircle className="h-4 w-4" />
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500">{review.date}</p>
          </div>
          <StarRating rating={review.rating} />
        </div>
      </div>
      <p className="text-sm mb-2">
        {expanded ? review.text : isLongText ? `${review.text.substring(0, 150)}...` : review.text}
      </p>
      {isLongText && (
        <button onClick={() => setExpanded(!expanded)} className="text-primary text-sm hover:underline">
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  )
}

// Component for AI-generated summary
const AISummaryCard = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">AI-Generated Summary</p>
            <p className="text-xs text-gray-500">Based on 56 Google reviews</p>
          </div>
          <StarRating rating={5} />
        </div>
      </div>
      <ul className="text-sm space-y-2 list-none">
        {aiSummary.points.map((point, index) => (
          <li key={index} className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500 mr-2 mt-1 flex-shrink-0"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function GoogleReviews() {
  const [currentPage, setCurrentPage] = useState(0)
  const reviewsPerPage = 4
  const totalPages = Math.ceil((googleReviews.length + 1) / reviewsPerPage) // +1 for AI summary

  // Create a new array with AI summary as the first item
  const allItems = [{ isAISummary: true }, ...googleReviews.map((review) => ({ isAISummary: false, review }))]

  const paginatedItems = allItems.slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="bg-white rounded-lg shadow-card border border-gray-100 overflow-hidden">
      {/* Google Reviews Header */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 border-b border-gray-100">
        <div className="flex items-center mb-4 md:mb-0">
          <Image src="/google-logo.png" alt="Google" width={60} height={24} className="object-contain mr-3" />
          <div>
            <h3 className="font-bold text-xl text-secondary mb-1">Google Reviews</h3>
            <div className="flex items-center">
              <span className="text-3xl font-bold mr-2 text-primary">{reviewSummary.averageRating}</span>
              <StarRating rating={reviewSummary.averageRating} />
              <span className="ml-2 text-sm text-gray-600">({reviewSummary.totalReviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Grid - update padding to match new container style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        {paginatedItems.map((item, index) =>
          item.isAISummary ? (
            <AISummaryCard key="ai-summary" />
          ) : (
            <ReviewCard key={item.review?.id || index} review={item.review!} />
          ),
        )}
      </div>

      {/* Pagination - update padding to match new container style */}
      <div className="flex justify-between items-center px-6 py-4 bg-muted border-t border-gray-100">
        <div className="text-sm text-gray-600">
          Showing {currentPage * reviewsPerPage + 1}-{Math.min((currentPage + 1) * reviewsPerPage, allItems.length)} of{" "}
          {allItems.length} items
        </div>
        <div className="flex space-x-2">
          <button
            onClick={prevPage}
            className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextPage}
            className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
