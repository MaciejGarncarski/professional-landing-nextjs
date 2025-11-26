import { motion } from "motion/react";
import Image from "next/image";
import { fadeUp, staggerGroup } from "@/app/new-builds/animations";
import cityImg from "@/assets/home/city.png";

const MotionImage = motion(Image);

export function ScopeSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row gap-10 px-6 lg:px-10 items-center lg:max-w-380 mx-auto">
      <motion.div
        className="flex flex-col gap-6 flex-1"
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={fadeUp}
          className="text-muted-foreground uppercase tracking-[0.3em] text-xs"
        >
          Project scope
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-3xl lg:text-5xl font-serif leading-tight"
        >
          A single partner for site, structure, and finish.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-lg text-gray-700">
          We manage land surveys, energy code coordination, and structural
          engineering so you can focus on how your family wants to live each
          day. Expect transparent budgets and milestone walk-throughs before
          concrete is poured.
        </motion.p>
        <motion.ul
          variants={staggerGroup}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {scopePoints.map((point) => (
            <motion.li
              key={point.title}
              variants={fadeUp}
              className="border border-border/60 p-4"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {point.title}
              </p>
              <p className="text-lg mt-2 text-foreground">{point.detail}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <MotionImage
        src={cityImg}
        alt="Modern custom home exterior"
        placeholder="blur"
        quality={100}
        className="w-full max-w-140 lg:max-w-160 border border-border/60"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      />
    </section>
  );
}

const scopePoints = [
  {
    title: "Site studies",
    detail: "Solar, drainage, and zoning coordination.",
  },
  { title: "Permitting", detail: "We manage submittals with local reviewers." },
  {
    title: "Interior packages",
    detail: "Custom millwork, lighting, and hardware specs.",
  },
  {
    title: "Owner dashboards",
    detail: "Weekly reports with budget + schedule snapshots.",
  },
];
