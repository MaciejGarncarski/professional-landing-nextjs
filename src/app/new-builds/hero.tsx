import { motion } from "motion/react";
import { fadeUp, staggerGroup } from "@/app/new-builds/animations";
import { BlurIn } from "@/app/utils/blur-in";

export function HeroSection() {
  return (
    <section className="mx-auto px-6 lg:px-0 py-16 lg:py-24 text-center flex flex-col gap-6 lg:max-w-220">
      <motion.div
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-4"
      >
        <motion.p
          variants={fadeUp}
          className="uppercase tracking-[0.3em] text-xs text-muted-foreground"
        >
          New Builds
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-serif text-4xl lg:text-6xl text-balance"
        >
          <BlurIn>Ground-up homes crafted for every season of living.</BlurIn>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          From sun studies to the final punch list, we guide you through a
          transparent design-build process that feels collaborative and calm.
        </motion.p>
      </motion.div>
    </section>
  );
}
