import { motion } from "motion/react";
import { fadeUp } from "@/app/renovations/animations";

export function TestimonialSection() {
  return (
    <section className="px-6 lg:px-0 lg:max-w-220 mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-black text-white p-10 lg:p-16 flex flex-col gap-6"
      >
        <p className="uppercase tracking-[0.4em] text-xs text-white/60">
          Homeowner note
        </p>
        <p className="text-3xl font-serif leading-snug">
          “They turned our drafty 1920s bungalow into a calm, livable space
          without erasing any of its quirks. Every week we knew what was
          happening next.”
        </p>
        <p className="text-sm text-white/70">
          — Dana & Elijah · Maple Avenue Restoration
        </p>
      </motion.div>
    </section>
  );
}
