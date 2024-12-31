import React from "react";
import Navbar from "../Navbar";
import HeroSection from "./HeroSection";
import ListSection from "./ListSection";

export default function LandingPage() {
  
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="sticky top-0 z-10 w-full bg-[#f0ece0]">
      <Navbar />
      </div>
      <HeroSection />
      <ListSection/>
      
    </div>
  );
}
