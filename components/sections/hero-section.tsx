"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLoading } from "@/app/context/loading-context"

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
  const { isLoading } = useLoading()
  const containerRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const dashboardRef = useRef<HTMLDivElement>(null)
  const pbxRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const layerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const contextRef = useRef<ReturnType<typeof gsap.context> | null>(null)

  const title = "Smart Telecom Solutions for Modern Businesses"
  const subtitle =
    "Special Numbers, Call Centres, Bulk Messaging & Digital Solutions all tailored for modern Nigerian brands."
  const primaryButtonText = "Request Demo"
  const secondaryButtonText = "Explore Services"

  useEffect(() => {
    if (isLoading) return

    if (!containerRef.current) return

    // Create GSAP context for proper cleanup
    const ctx = gsap.context(() => {
      const container = containerRef.current
      const imageContainer = imageContainerRef.current

      if (!container || !imageContainer) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom center",
          scrub: 1, // Ties animation to scrollbar, enables reverse
          pin: true,
          pinSpacing: true,
        },
      })

      // Fade out and move up text content - REVERSES on scroll back
      tl.to(
        contentRef.current,
        {
          y: -50,
          opacity: 0,
          duration: 1,
        },
        0,
      )

      // Scale and position image container - REVERSES on scroll back
      tl.to(
        imageContainer,
        {
          width: "calc(100vw - 40px)",
          scale: 1.2,
          duration: 1,
        },
        0,
      )

      // Phone animation - move to left - REVERSES on scroll back
      tl.to(
        phoneRef.current,
        {
          y: 120,
          x: -400,
          scale: 1,
          duration: 0.8,
        },
        0.2,
      )

      // Dashboard animation - expand and center - REVERSES on scroll back
      tl.to(
        dashboardRef.current,
        {
          scale: 1.15,
          x: -50,
          y: -60,
          duration: 0.8,
        },
        0.2,
      )

      // Hide other elements gradually - REVERSES on scroll back
      tl.to(
        [pbxRef.current, layerRef.current, statsRef.current],
        {
          opacity: 0.3,
          duration: 0.5,
        },
        0.2,
      )
    })

    contextRef.current = ctx

    return () => {
      if (contextRef.current) {
        contextRef.current.revert()
      }
    }
  }, [isLoading])

  return (
    <section ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-[#001933]">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/herosectionbg.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="relative z-10 h-screen flex items-center">
        {/* Content - Left Side */}
        {/* <div
          ref={contentRef}
          className="w-full lg:w-1/2 px-6 md:px-10 lg:px-16 flex flex-col justify-center space-y-6 transform-gpu will-change-transform"
        >
          <h1 className="font-inter font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight max-w-full sm:max-w-[600px]">
            {title}
          </h1>

          <p className="font-inter text-base md:text-lg text-gray-300 font-normal leading-relaxed max-w-full sm:max-w-2xl">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/about#services-showcase-section">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-[#001933] border-white hover:bg-gray-100 font-semibold px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                {secondaryButtonText}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="default"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                {primaryButtonText}
              </Button>
            </Link>
          </div>
        </div> */}

        <div ref={contentRef} className="hero-content w-full lg:w-1/2 px-6 md:px-10 lg:px-16 flex flex-col justify-center space-y-6 ml-32">
          <h1 className="animate-slide-in-left font-inter font-extrabold text-[64px] text-white leading-[1.3] tracking-[0.3px] align-middle max-w-[90vw] sm:max-w-[600px] md:max-w-[600px] lg:max-w-[600px] xl:max-w-[628px]">
            {title}
          </h1>

          <p className="animate-slide-in-left-delay-1 font-inter text-[#C2C6CE] font-[400] text-[18px] md:leading-2 leading-8 tracking-[0.2px] align-left sm:w-4/6 w-full">
            {subtitle}
          </p>

          <div className="animate-slide-in-left-delay-2 flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/about#services-showcase-section">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white text-[#001933] border-white hover:bg-gray-100 font-semibold px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {secondaryButtonText}
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {primaryButtonText}
              </Button>
            </Link>
          </div>
        </div>

        {/* Images - Right Side */}
        <div
          ref={imageContainerRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 h-full flex items-center justify-center pointer-events-none"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Background Blue Layer */}
          <div
            ref={layerRef}
            className="absolute w-full h-full z-0 flex items-center justify-center transform-gpu will-change-transform"
            style={{
              maxWidth: "600px",
              maxHeight: "600px",
              right: "10%",
              top: "30%",
            }}
          >
            <img src="/hero-animate/layer.png" alt="Layer" className="w-full h-full object-contain" loading="lazy" />
          </div>

          {/* Mobile Phone */}
          <div
            ref={phoneRef}
            className="absolute z-20 transform-gpu will-change-transform"
            style={{
              right: "clamp(5%, 15vw, 25%)",
              top: "clamp(20%, 40%, 50%)",
            }}
          >
            <img
              src="/hero-animate/phone.png"
              className="w-32 md:w-40 lg:w-52 h-auto object-contain drop-shadow-2xl"
              alt="Mobile UI"
              loading="lazy"
            />
          </div>

          {/* PBX Phones */}
          <div
            ref={pbxRef}
            className="absolute z-10 transform-gpu will-change-transform"
            style={{
              right: "clamp(15%, 25vw, 35%)",
              top: "clamp(30%, 45%, 55%)",
            }}
          >
            <img
              src="/hero-animate/desktop-phone.png"
              className="w-40 md:w-48 lg:w-64 h-auto object-contain drop-shadow-2xl"
              alt="PBX Phone"
              loading="lazy"
            />
          </div>

          {/* Dashboard Screen */}
          <div
            ref={dashboardRef}
            className="absolute z-[25] transform-gpu will-change-transform"
            style={{
              right: "clamp(-5%, 5vw, 15%)",
              top: "clamp(40%, 50%, 60%)",
              width: "clamp(300px, 80vw, 900px)",
            }}
          >
            <img
              src="/hero-animate/desk-dashboard.png"
              className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl md:rounded-4xl"
              alt="Statistics Dashboard"
              loading="lazy"
            />
          </div>

          {/* Circular Stats */}
          <div
            ref={statsRef}
            className="absolute z-10 transform-gpu will-change-transform"
            style={{
              left: "clamp(-10%, 5vw, 10%)",
              bottom: "clamp(10%, 20%, 30%)",
            }}
          >
            <img
              src="/hero-animate/analytics.png"
              className="w-28 md:w-36 lg:w-44 h-auto object-contain drop-shadow-2xl"
              alt="Analytics"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Spacer for scroll */}
      <div className="h-screen bg-[#001933]" />
    </section>
  )
}

export default HeroSection
