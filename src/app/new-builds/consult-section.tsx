import { motion } from "motion/react";
import { fadeUp } from "@/app/new-builds/animations";

export function ConsultSection() {
  return (
    <section className="bg-secondary text-secondary-foreground w-full flex items-center justify-center text-center flex-col px-6 lg:py-28 py-20">
      <motion.h3
        className="text-4xl lg:text-5xl font-serif mb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Ready to break ground?
      </motion.h3>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 text-lg max-w-2xl text-secondary-foreground/80"
      >
        We host pre-design workshops to explore budget, schedule, and design
        drivers before contracts are signed.
      </motion.p>
      <motion.button
        type="button"
        className="text-white px-8 py-4 bg-black"
        whileTap={{ scale: 0.95 }}
      >
        Schedule a Site Visit
      </motion.button>
    </section>
  );
}
