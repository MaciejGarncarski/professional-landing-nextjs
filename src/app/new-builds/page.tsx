"use client";

import { ConsultSection } from "@/app/new-builds/consult-section";
import { HeroSection } from "@/app/new-builds/hero";
import { ProcessSection } from "@/app/new-builds/process-section";
import { ScopeSection } from "@/app/new-builds/scope-section";
import { ShowcaseSection } from "@/app/new-builds/showcase-section";
import { SpecsSection } from "@/app/new-builds/specs-section";

export default function NewBuildsPage() {
  return (
    <main className="flex flex-col gap-24 lg:gap-32">
      <HeroSection />
      <ScopeSection />
      <SpecsSection />
      <ProcessSection />
      <ShowcaseSection />
      <ConsultSection />
    </main>
  );
}
