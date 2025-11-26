import { motion } from "motion/react";
import { fadeUp, staggerGroup } from "@/app/renovations/animations";

export function HighlightsSection() {
  return (
    <section className="px-6 lg:px-0 lg:max-w-280 mx-auto">
      <motion.div
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 lg:grid-cols-3"
      >
        {highlightStats.map((stat) => (
          <motion.article
            key={stat.label}
            variants={fadeUp}
            className="bg-foreground text-background p-8 flex flex-col gap-4 shadow-lg"
          >
            <p className="text-sm uppercase tracking-[0.3em] opacity-70">
              {stat.label}
            </p>
            <p className="text-5xl font-serif">{stat.value}</p>
            <p className="text-base opacity-80">{stat.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

const highlightStats = [
  {
    label: "Homes refreshed",
    value: "430+",
    description:
      "From compact bungalows to sprawling farmhouses across the county.",
  },
  {
    label: "Average dust level",
    value: "<20 μg",
    description: "HEPA filtration, negative air machines, and sealed pathways.",
  },
  {
    label: "Client referrals",
    value: "62%",
    description:
      "Neighbors call because we communicate in plain language and show up prepared.",
  },
];
