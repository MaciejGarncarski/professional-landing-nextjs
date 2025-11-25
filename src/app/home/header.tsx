"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { BlurIn } from "@/app/utils/blur-in";
import heroImg from "@/assets/hero/hero.png";

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const MotionImage = motion(Image);

export function Header() {
  return (
    <header className="mx-auto py-10 lg:py-20 flex flex-col px-6 gap-12">
      <h2 className="font-serif text-balance text-center mx-auto text-5xl lg:text-7xl lg:max-w-240">
        <BlurIn>
          Quality construction meets{" "}
          <span className="italic">local craftsmanship.</span>
        </BlurIn>
      </h2>
      <p className="text-center text-md lg:text-xl max-w-2xl mx-auto text-muted-foreground font-light">
        <BlurIn>
          Transform your house into a home with Hearth & Home's dedicated
          residential building team. Serving our neighbors with integrity since
          1998.
        </BlurIn>
      </p>

      <MotionImage
        src={heroImg}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        placeholder="blur"
        quality={100}
        alt="Hero image"
        className="mx-auto mt-8 h-120 object-cover w-280"
      />
    </header>
  );
}
