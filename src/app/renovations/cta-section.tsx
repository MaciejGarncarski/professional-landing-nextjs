import { motion } from "motion/react";
import { fadeUp } from "@/app/renovations/animations";

export function CTASection() {
  return (
    <section className="px-6 lg:px-0 lg:max-w-220 mx-auto text-center flex flex-col gap-6 py-16">
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-serif"
      >
        Ready for a quieter renovation experience?
      </motion.h3>
      <motion.p variants={fadeUp} className="text-muted-foreground text-lg">
        Schedule a walkthrough with our project architect and we&apos;ll bring a
        prioritized scope, phasing plan, and investment range within two weeks.
      </motion.p>
      <motion.div
        variants={fadeUp}
        className="flex flex-col gap-3 lg:flex-row lg:justify-center"
      >
        <button type="button" className="bg-black text-white px-8 py-4">
          Plan a Walkthrough
        </button>
        <button type="button" className="border border-border px-8 py-4">
          Download Renovation Guide
        </button>
      </motion.div>
    </section>
  );
}
