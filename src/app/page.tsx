import { Header } from "@/app/header";
import type { Metadata } from "next";

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Professional Landing Page",
    description: "A professional landing page template built with Next.js",
  };
}
