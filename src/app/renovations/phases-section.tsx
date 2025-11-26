import { motion } from "motion/react";
import { fadeUp, staggerGroup } from "@/app/renovations/animations";

export function PhasesSection() {
  return (
    <section className="px-6 lg:px-10 lg:max-w-380 mx-auto flex flex-col gap-10">
      <motion.div
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-3"
      >
        <motion.p
          variants={fadeUp}
          className="uppercase tracking-[0.3em] text-xs text-muted-foreground"
        >
          Four-phase roadmap
        </motion.p>
        <motion.h3 variants={fadeUp} className="text-3xl font-serif">
          Designed for families who stay put during construction.
        </motion.h3>
      </motion.div>
      <motion.ol
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative flex flex-col gap-8 border-l border-border/60 pl-8"
      >
        {phases.map((phase, idx) => (
          <motion.li key={phase.title} variants={fadeUp} className="space-y-2">
            <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border border-border bg-background" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Phase {idx + 1}
            </p>
            <h4 className="text-2xl font-serif">{phase.title}</h4>
            <p className="text-muted-foreground">{phase.description}</p>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}

const phases = [
  {
    title: "Discovery & protection plan",
    description:
      "Laser scans, moisture readings, and protection mapping before the first wall comes down.",
  },
  {
    title: "Selective demo & rough-in",
    description:
      "Careful removal with labeled salvage, followed by structural, mechanical, and electrical upgrades.",
  },
  {
    title: "Craft & install",
    description:
      "Cabinetry, tilework, built-ins, and finishing details executed by our in-house leads.",
  },
  {
    title: "Comfort checks",
    description:
      "Systems commissioning, punch walks, and seasonal follow-ups to ensure everything performs.",
  },
];
