import type { Metadata } from "next";
import { Header } from "@/app/home/header";
import { OurPromise } from "@/app/home/our-promise";
import { Services } from "@/app/home/services";

export default function Home() {
  return (
    <main>
      <Header />
      <OurPromise />
      <Services />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Professional Landing Page",
    description: "A professional landing page template built with Next.js",
  };
}
