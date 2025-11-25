"use client";

import type { Variants } from "motion";
import { motion } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

export function OurPromise() {
  return (
    <section className="py-20 flex w-full flex-col gap-12 lg:gap-32 lg:max-w-280 mx-auto">
      <motion.div
        variants={sectionVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="px-6 flex flex-col gap-6 lg:px-0 lg:flex-row lg:justify-between lg:gap-8"
      >
        <h3 className="text-muted-foreground uppercase grow shrink-0 min-w-">
          Our Promise
        </h3>
        <p className="font-serif text-3xl leading-tight max-w-2xl">
          We believe in handshake deals, honest timelines, and building spaces
          where families can grow.
        </p>
      </motion.div>
      <motion.ul
        className="flex flex-col lg:flex-row gap-12 px-6 lg:px-0 lg:gap-20 lg:justify-between"
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {features.map((feature, idx) => {
          return (
            <motion.li variants={itemVariants} key={feature.title}>
              <h3 className="font-serif italic text-4xl text-gray-600">
                0{idx + 1}
              </h3>
              <h4 className="text-2xl">{feature.title}</h4>
              <p className="mt-6 text-gray-600 text-lg">
                {feature.description}
              </p>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}

const features = [
  {
    title: "Local Expertise",
    description:
      "We live here too. We understand the local architecture, zoning, and the unique character of our neighborhood homes.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden corporate fees. Just honest materials and labor costs, explained clearly before we hammer the first nail.",
  },
  {
    title: "Quality Materials",
    description:
      "We source sustainable timber and stone from local suppliers whenever possible to support our community economy.",
  },
];
