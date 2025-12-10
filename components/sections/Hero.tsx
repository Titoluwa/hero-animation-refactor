"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const phoneRef = useRef(null);
  const dashboardRef = useRef(null);
  const pbxRef = useRef(null);
  const statsRef = useRef(null);
  const layerRef = useRef(null);
  const heroContentRef = useRef(null);

  const title = "Smart Telecom Solutions for Modern Businesses";
  const subtitle =
    "Special Numbers, Call Centres, Bulk Messaging & Digital Solutions all tailored for modern Nigerian brands.";
  const primaryButtonText = "Request Demo";
  const secondaryButtonText = "Explore Services";

  const onPrimaryClick = () => console.log("Demo clicked");
  const onSecondaryClick = () => console.log("Explore clicked");

  useEffect(() => {
    const container = containerRef.current;
    const imageContainer = imageContainerRef.current;
    const herocontainer = heroContentRef.current;

    if (!container || !imageContainer) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=200", // Shorter scroll distance - 400px
        scrub: 1,
        pin: true,
        pinSpacing: true,
        markers: true,
      },
    });

    // Fade out and move up the text content
    tl.to(
      herocontainer,
      {
        y: -20, // Reduced from -50
        opacity: 0.5,
        duration: 0.5,
      },
      0
    );

    // Scale and position images to cover viewport
    tl.to(
      imageContainer,
      {
        width: "50vw",
        y: -20,

        duration: 1,
      },
      0
    );

    // Individual image animations
    tl.to(
      phoneRef.current,
      {
        x: -1200,
        y: 200,
        scale: 1.75,
        duration: 0.4,
      },
      0.5
    );

    tl.to(
      dashboardRef.current,
      {
        scale: 1.35,
        x: -400,
        y: -100,
        duration: 0.5,
      },
      0.5
    );

    // Scale and move layer to the left
    tl.to(
      layerRef.current,
      {
        scaleX: 1.5,
        width: "90rem",
        x: -500,
        y: -300,
        duration: 1,
      },
      0.2
    );

    tl.to(
      pbxRef.current,
      {
        y: 150,
        x: -10,
        duration: 1,
      },
      0.2
    );

    // Keep stats visible but maybe adjust position
    tl.to(
      statsRef.current,
      {
        x: 300,
        duration: 0.5,
        opacity: 0,
      },
      0.2
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
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
        {/* Content Left Side */}
        <div
          ref={heroContentRef}
          className="hero-content w-full lg:w-2/3 px-6 md:px-10 lg:px-16 flex flex-col justify-center space-y-6 ml-14"
        >
          <h1 className="font-inter font-extrabold text-[64px] text-white leading-[1.3] tracking-[0.3px] align-middle max-w-[90vw] sm:max-w-[600px] md:max-w-[600px] lg:max-w-[600px] xl:max-w-[640px]">
            {title}
          </h1>

          <p className="font-inter text-[#C2C6CE] font-[400] text-[18px] md:leading-6 leading-8 tracking-[0.2px] align-left sm:w-4/6 w-full">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/about#services-showcase-section">
              <Button
                variant="outline"
                size="lg"
                onClick={onSecondaryClick}
                className="bg-white text-[#001933] border-white hover:bg-gray-100 font-semibold px-8"
              >
                {secondaryButtonText}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="default"
                size="lg"
                onClick={onPrimaryClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8"
              >
                {primaryButtonText}
              </Button>
            </Link>
          </div>
        </div>

        {/* Images Right Side */}
        <div
          ref={imageContainerRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 h-full flex items-center justify-center pointer-events-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Background Blue Layer */}
          <div
            ref={layerRef}
            className="absolute w-[100rem] h-[40rem] z-0"
            style={{
              right: "-75%",
              top: "35%",
              transform: "translateY(10%) translateX(-5%)",
            }}
          >
            <img
              src="/hero-animate/layer.png"
              alt="Layer"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Mobile Phone (right-most) */}
          <div
            ref={phoneRef}
            className="absolute z-20"
            style={{
              right: "4%",
              top: "18%",
              transform: "translateY(10%) translateX(15%)",
            }}
          >
            <img
              src="/hero-animate/phone.png"
              className="w-[255.8px] h-[514.3px] object-contain drop-shadow-2xl"
              alt="Mobile UI"
            />
          </div>

          {/* PBX Phones Group (middle-right) */}
          <div
            ref={pbxRef}
            className="absolute z-10 flex flex-col space-y-4"
            style={{
              right: "12%",
              top: "30%",
              transform: "translateY(30%) translateX(-40%)",
            }}
          >
            <img
              src="/hero-animate/desktop-phone.png"
              className="w-[337px] object-contain drop-shadow-2xl"
              alt="PBX Phone"
            />
          </div>

          {/* Dashboard Screen (bottom-right) */}
          <div
            ref={dashboardRef}
            className="absolute z-25 w-[1000px] h-[1000px]"
            style={{
              top: "30rem",
              left: "200px",
              right: "-2%",
              bottom: "12%",
              transform: "translateY(1%) translateX(10%)",
            }}
          >
            <img
              src="/hero-animate/desk-dashboard.png"
              className="w-[1574px] h-[593px] object-contain drop-shadow-2xl rounded-4xl"
              alt="Statistics Dashboard"
            />
          </div>

          {/* Circular Stats (bottom-left) */}
          <div
            ref={statsRef}
            className="absolute z-10"
            style={{
              top: "40rem",
              left: "-25%",
              bottom: "15%",
              transform: "translateY(90%) translateX(90%)",
            }}
          >
            <img
              src="/hero-animate/analytics.png"
              className="w-[289px] h-[310px] object-contain drop-shadow-2xl"
              alt="Analytics"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
