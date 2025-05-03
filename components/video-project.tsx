"use client"

import { useState } from "react"
import { Play, Maximize2 } from "lucide-react"

interface VideoProjectProps {
  videoId: string
  title: string
  location: string
  category: string
  thumbnail?: string
}

export default function VideoProject({ videoId, title, location, category, thumbnail }: VideoProjectProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  // Default thumbnail using YouTube's high-quality thumbnail URL if none provided
  const videoThumbnail = thumbnail || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
      <div className="relative aspect-video w-full">
        {!isPlaying ? (
          <div
            className="absolute inset-0 bg-cover bg-center cursor-pointer group"
            style={{ backgroundImage: `url(${videoThumbnail})` }}
            onClick={handlePlay}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-white transform transition-transform duration-300 group-hover:scale-110">
                <Play size={28} fill="white" className="ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <span className="text-sm font-medium bg-primary px-2 py-1 rounded-sm">{category}</span>
            </div>
            <div className="absolute top-4 right-4">
              <Maximize2 size={20} className="text-white opacity-70 hover:opacity-100" />
            </div>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-gray-600">{location}</p>
      </div>
    </div>
  )
}
