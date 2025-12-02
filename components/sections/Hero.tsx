"use client"

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
    const subtitle = "Special Numbers, Call Centres, Bulk Messaging & Digital Solutions all tailored for modern Nigerian brands.";
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
                end: "bottom center",
                scrub: 1,
                pin: true,
                pinSpacing: true,
            },
        });

        // Fade out and move up the text content
        tl.to(
            herocontainer,
            {
                y: -50,
                opacity: 0,
                duration: 1,
            }, 0
    );

        // Scale and position images to cover viewport
        tl.to(
            imageContainer,
            {
                width: "50vw",
                scale: 2.5,
                duration: 1,
            }, 0
        );

        tl.to(
            imageContainerRef.current,
            {
                // backgroundColor: "#FFFFFF0D",
                duration: 0.8,
            },
            0.2
        );

        // Individual image animations
        tl.to(
            phoneRef.current,
            {
                y: 190,
                x: -700, // Move to far left
                duration: 0.8,
            },
            0.2
        );

        tl.to(
            dashboardRef.current,
            {
                scale: 1.1,
                width: '955px',
                x: -100, // Move to center
                y: -90,
                duration: 0.8,
            },
            0.2
        );

        // Hide other elements (pbxRef, layerRef, statsRef)
        tl.to(
            [pbxRef.current, layerRef.current, statsRef.current],
            {
                opacity: 0,
                duration: 0.5,
            },
            0.2
        );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);
    
    return (
        <section ref={containerRef} className="relative w-full min-h-screen overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/herosectionbg.svg)", backgroundSize: "cover", backgroundPosition: "center"}}/>
            </div>

            <div className="relative z-10 h-screen flex items-center">
                {/* Content Left Side */}
                <div ref={heroContentRef} className="hero-content w-full lg:w-1/2 px-6 md:px-10 lg:px-16 flex flex-col justify-center space-y-6 ml-32">

                    <h1 className="font-inter font-extrabold text-[64px] text-white leading-[1.3] tracking-[0.3px] align-middle max-w-[90vw] sm:max-w-[600px] md:max-w-[600px] lg:max-w-[600px] xl:max-w-[628px]">
                        {title}
                    </h1>

                    <p className="font-inter text-[#C2C6CE] font-[400] text-[18px] md:leading-2 leading-8 tracking-[0.2px] align-left sm:w-4/6 w-full">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link href="/about#services-showcase-section">
                        <Button variant="outline" size="lg" onClick={onSecondaryClick}
                            className="bg-white text-[#001933] border-white hover:bg-gray-100 font-semibold px-8" >
                            {secondaryButtonText}
                        </Button>
                        </Link>
                        <Link href="/contact">
                        <Button variant="default" size="lg" onClick={onPrimaryClick}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8" >
                            {primaryButtonText}
                        </Button>
                        </Link>
                    </div>
                </div>

                {/* Images Right Side */}
                <div ref={imageContainerRef} className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 h-full flex items-center justify-center pointer-events-none" style={{ transformStyle: "preserve-3d",  }}>

                {/* Background Blue Layer */}
                    <div ref={layerRef} className="absolute w-[420px] h-[420px] z-0" style={{
                            right: "5%",
                            top: "30%",
                            transform: "translateY(10%) translateX(-5%)",
                        }}
                    >
                        <img src="/hero-animate/layer.png" alt="Layer" className="w-[1133px] h-[749px] object-contain"/>
                    </div>

                {/* Mobile Phone (right-most) */}
                    <div ref={phoneRef} className="absolute z-20"
                        style={{
                            right: "-3%",
                            top: "38%",
                            transform: "translateY(10%) translateX(15%)",
                        }}
                    >
                        <img src="/hero-animate/phone.png" className="w-[255.8px] h-[514.3px] object-contain drop-shadow-2xl" alt="Mobile UI"
                        />
                    </div>

                {/* PBX Phones Group (middle-right) */}
                    <div ref={pbxRef} className="absolute z-10 flex flex-col space-y-4" style={{
                            right: "2%",
                            top: "45%",
                            transform: "translateY(30%) translateX(-40%)",
                        }}
                    >
                        <img src="/hero-animate/desktop-phone.png" className="w-[337px] object-contain drop-shadow-2xl" alt="PBX Phone"/>
                    </div>

                {/* Dashboard Screen (bottom-right) */}
                    <div ref={dashboardRef} className="absolute z-[25]"
                        style={{
                            top: "558px",
                            left: "321px",
                            right: "-5%",
                            bottom: "12%",
                            transform: "translateY(1%) translateX(10%)",
                        }}
                    >
                        <img src="/hero-animate/desk-dashboard.png" className="w-[1574px] h-[593px] object-contain drop-shadow-2xl rounded-4xl" alt="Statistics Dashboard"/>
                    </div>

                {/* Circular Stats (bottom-left) */}
                    <div ref={statsRef} className="absolute z-10"
                        style={{
                            top: "686.76px",
                            left: "-11%",
                            bottom: "15%",
                            transform: "translateY(90%) translateX(90%)",
                        }}
                    >
                        <img src="/hero-animate/analytics.png" className="w-[289px] h-[310px] object-contain drop-shadow-2xl" alt="Analytics" />
                    </div>

                </div>
            </div>

            {/* Spacer for scroll */}
            <div className="h-screen" />
        </section>
    );
};

export default Hero;