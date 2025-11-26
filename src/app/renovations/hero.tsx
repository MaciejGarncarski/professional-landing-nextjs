import { motion } from "motion/react";
import Image from "next/image";
import { fadeUp, staggerGroup } from "@/app/renovations/animations";
import { BlurIn } from "@/app/utils/blur-in";
import workersImg from "@/assets/home/home-workers.png";

const MotionImage = motion(Image);

export function HeroSection() {
  return (
    <section className="px-6 lg:px-10 py-16 lg:py-24 bg-secondary/40">
      <motion.div
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center lg:max-w-380 mx-auto"
      >
        <div className="flex flex-col gap-6">
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[0.3em] text-xs text-muted-foreground"
          >
            Renovations Studio
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl lg:text-6xl leading-tight"
          >
            <BlurIn>Craft, conserve, and reimagine every square foot.</BlurIn>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            We specialize in phased renovations for lived-in homes—upgrading
            structure and systems while protecting the stories in the walls.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-6 text-sm uppercase tracking-[0.2em] text-muted-foreground"
          >
            {heroBadges.map((badge) => (
              <span key={badge} className="border border-border px-4 py-2">
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
        <motion.div
          variants={fadeUp}
          className="relative bg-background border border-border/60 overflow-hidden"
        >
          <MotionImage
            src={workersImg}
            alt="Crew planning renovation"
            placeholder="blur"
            quality={100}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white px-6 py-4 text-sm flex justify-between">
            <p>Occupied home specialists</p>
            <p>1998 → Today</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

const heroBadges = [
  "Kitchen suites",
  "Envelope upgrades",
  "Historic review ready",
];
