"use client";

import { CTASection } from "@/app/renovations/cta-section";
import { GallerySection } from "@/app/renovations/gallery-section";
import { HeroSection } from "@/app/renovations/hero";
import { HighlightsSection } from "@/app/renovations/highlights-section";
import { PackagesSection } from "@/app/renovations/packages-section";
import { PhasesSection } from "@/app/renovations/phases-section";
import { TestimonialSection } from "@/app/renovations/testimonial-section";

export default function RenovationsPage() {
  return (
    <main className="flex flex-col gap-24 lg:gap-32 pb-20">
      <HeroSection />
      <HighlightsSection />
      <PackagesSection />
      <PhasesSection />
      <GallerySection />
      <TestimonialSection />
      <CTASection />
    </main>
  );
}
