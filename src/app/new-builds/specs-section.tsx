import { motion } from "motion/react";
import { fadeUp, staggerGroup } from "@/app/new-builds/animations";

export function SpecsSection() {
  return (
    <section className="px-6 lg:px-0 lg:max-w-280 mx-auto flex flex-col gap-12">
      <motion.div
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
      >
        <motion.p
          variants={fadeUp}
          className="text-muted-foreground uppercase tracking-[0.3em] text-xs"
        >
          What we deliver
        </motion.p>
        <motion.h3
          variants={fadeUp}
          className="text-3xl lg:text-4xl font-serif max-w-3xl"
        >
          Tailored selections, durable systems, and timeless curb appeal.
        </motion.h3>
      </motion.div>
      <motion.ul
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 lg:grid-cols-3"
      >
        {deliverables.map((item) => (
          <motion.li
            key={item.title}
            variants={fadeUp}
            className="border border-border/60 p-6 flex flex-col gap-3"
          >
            <h4 className="text-2xl font-serif">{item.title}</h4>
            <p className="text-muted-foreground">{item.description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

const deliverables = [
  {
    title: "High-performance shells",
    description:
      "Tight envelopes, continuous insulation, and triple-pane glazing to keep energy spend predictable.",
  },
  {
    title: "Crafted interiors",
    description:
      "Cabinetry, tile, and fixture packages curated with local artisans and vetted suppliers.",
  },
  {
    title: "Landscape-ready",
    description:
      "Turnkey outdoor lighting, rain gardens, and native plantings tied to your home&apos;s architecture.",
  },
];
