"use client"

import { cn } from "@/lib/utils"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

// For a full-fledged slider, consider libraries like Embla Carousel or Swiper.
// This is a simplified version.

const slides = [
  {
    image: "/placeholder.svg?width=1920&height=700",
    alt: "Collection of modern handguns",
    title: "Your Source for Quality Firearms, Training & Safety",
    subtext: "From handguns to training classes — equip yourself with the best.",
    ctas: [
      { label: "Shop Handguns", href: "/firearms/handguns", variant: "default" as const },
      { label: "Book a Range Time", href: "/range/book", variant: "outline" as const },
      { label: "Join Safety Class", href: "/training/safety-classes", variant: "outline" as const },
    ],
  },
  {
    image: "/placeholder.svg?width=1920&height=700",
    alt: "AR-15 rifle in a tactical setup",
    title: "Master the Modern Sporting Rifle",
    subtext: "Explore our wide selection of AR-15s and accessories.",
    ctas: [
      { label: "Browse AR-15s", href: "/firearms/rifles?category=ar-15", variant: "default" as const },
      { label: "Tactical Gear", href: "/accessories/gear", variant: "outline" as const },
    ],
  },
  {
    image: "/placeholder.svg?width=1920&height=700",
    alt: "Instructor teaching a gun safety class",
    title: "Expert Firearm Training",
    subtext: "Comprehensive courses for all skill levels, from beginner to advanced.",
    ctas: [
      { label: "View Class Schedule", href: "/training", variant: "default" as const },
      { label: "Meet Our Instructors", href: "/training/instructors", variant: "outline" as const },
    ],
  },
  {
    image: "/placeholder.svg?width=1920&height=700",
    alt: "Modern indoor shooting range facility",
    title: "State-of-the-Art Shooting Range",
    subtext: "Practice your skills in a safe and comfortable environment.",
    ctas: [
      { label: "Reserve Your Lane", href: "/range/book", variant: "default" as const },
      { label: "Range Memberships", href: "/range/memberships", variant: "outline" as const },
    ],
  },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000) // Auto-scroll every 7 seconds
    return () => clearInterval(timer)
  }, [nextSlide])

  const currentSlide = slides[currentIndex]

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.alt}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.alt}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
            className="brightness-50"
          />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 md:p-8 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight max-w-3xl">
          {currentSlide.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-xl">{currentSlide.subtext}</p>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
          {currentSlide.ctas.map((cta) => (
            <Button
              key={cta.label}
              asChild
              size="lg"
              className={cn(
                "font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-4",
                cta.variant === "default"
                  ? "bg-amber-700 hover:bg-amber-600 text-black"
                  : "bg-black bg-opacity-70 text-white border-white hover:bg-white hover:text-black",
              )}
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${currentIndex === index ? "bg-white w-4" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
