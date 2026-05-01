import React from "react";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import SolutionsSection from "../components/home/SolutionsSection";
import CorporateSection from "../components/home/CorporateSection";
import AccreditationsSection from "../components/home/AccreditationsSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SolutionsSection />
      <CorporateSection />
      <AccreditationsSection />
      <CTASection />
    </>
  );
}