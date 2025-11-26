import { motion } from "motion/react";
import { fadeUp, staggerGroup } from "@/app/renovations/animations";

export function PackagesSection() {
  return (
    <section className="px-6 lg:px-10 lg:max-w-380 mx-auto flex flex-col gap-12">
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
          Renovation packages
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-3xl lg:text-5xl font-serif max-w-3xl"
        >
          Choose the level of support that fits your home and pace.
        </motion.h2>
      </motion.div>
      <motion.div
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 lg:grid-cols-2"
      >
        {packages.map((pkg) => (
          <motion.article
            key={pkg.title}
            variants={fadeUp}
            className="border border-border/60 p-8 flex flex-col gap-6 bg-background"
          >
            <div className="flex flex-col lg:flex-row items-baseline gap-3">
              <h3 className="text-3xl font-serif">{pkg.title}</h3>
            </div>
            <p className="text-muted-foreground">{pkg.summary}</p>
            <ul className="flex flex-col gap-3">
              {pkg.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 bg-primary" />
                  <p className="text-sm text-foreground/80">{point}</p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-auto w-fit border border-border px-4 py-2 text-sm uppercase tracking-[0.2em]"
            >
              Book {pkg.cta}
            </button>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

const packages = [
  {
    title: "Refresh Track",
    duration: "8-12 weeks",
    summary:
      "Ideal for kitchens, baths, and finish upgrades that need precision without a full gut.",
    points: [
      "Scope locking workshop + finish board",
      "City submittals + trade coordination",
      "Weekly dust + progress reports",
    ],
    cta: "a Refresh Consult",
  },
  {
    title: "Reimagine Track",
    duration: "16-24 weeks",
    summary:
      "Adds square footage, structural tie-ins, or mechanical overhauls while you live on-site.",
    points: [
      "Phased demo + temporary walls",
      "Custom millwork + lighting procurement",
      "Post-move support + 90-day tune-up",
    ],
    cta: "a Reimagine Consult",
  },
];
