import Hero from "@/components/sections/Hero";
import HeroSection from "@/components/sections/hero-section";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="h-[60vh] bg-white w-full flex items-center justify-center">
        <h2 className="text-[#001933] text-4xl font-bold">
          This is the next section
        </h2>
      </div>
      {/* <HeroSection /> */}
    </main>
  );
}
