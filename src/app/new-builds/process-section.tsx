import { motion } from "motion/react";
import { fadeUp, staggerGroup } from "@/app/new-builds/animations";

export function ProcessSection() {
  return (
    <section className="px-6 lg:px-0 lg:max-w-280 mx-auto flex flex-col gap-10">
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
          Process map
        </motion.p>
        <motion.h3
          variants={fadeUp}
          className="text-3xl lg:text-4xl font-serif"
        >
          A predictable rhythm from feasibility to final clean.
        </motion.h3>
      </motion.div>
      <motion.ol
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col"
      >
        {processSteps.map((step, idx) => (
          <motion.li
            key={step.title}
            variants={fadeUp}
            className="flex gap-6 py-6"
          >
            <div className="text-sm text-primary font-semibold mt-1">
              0{idx + 1}
            </div>
            <div className="flex-1 border-b border-border/50 pb-6">
              <h4 className="text-xl font-serif">{step.title}</h4>
              <p className="text-muted-foreground mt-2">{step.description}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}

const processSteps = [
  {
    title: "Discovery & feasibility",
    description:
      "Site walk, utility review, and early budget ranges with structural partners present.",
  },
  {
    title: "Design development",
    description:
      "3D massing, interior elevations, and value-aligned selections before bidding trades.",
  },
  {
    title: "Permitting & mobilization",
    description:
      "Permit monitoring, procurement, and neighbor communication before excavation.",
  },
  {
    title: "Build & closeout",
    description:
      "Transparent schedules, curated site walks, and post-move support for the first year.",
  },
];
