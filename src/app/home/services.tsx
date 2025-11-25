"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { Fragment } from "react";
import homeWorkers from "@/assets/home/home-workers.png";

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

const MotionImage = motion(Image);

export function Services() {
  return (
    <section className="flex flex-col-reverse lg:flex-row lg:max-w-380 lg:mx-auto px-6 lg:px-10 gap-10 lg:gap-20 py-20">
      <MotionImage
        src={homeWorkers}
        alt="Home workers"
        placeholder="blur"
        className="w-full h-auto lg:max-w-180"
        quality={100}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      />
      <div>
        <motion.h3
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl lg:text-5xl leading-relaxed font-serif"
        >
          Renovations done right, from foundation to finish.
        </motion.h3>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col pt-10"
        >
          {items.map((item, idx) => (
            <Fragment key={item.marker}>
              <motion.li variants={itemVariants} className="mt-8 flex gap-4">
                <p className="text-sm text-primary mt-1">{item.marker}</p>
                <div className="flex flex-col">
                  <h4 className="text-xl font-semibold flex items-center gap-4">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-gray-700">{item.description}</p>
                </div>
              </motion.li>
              {idx < items.length - 1 && (
                <div className="border-b border-border/40 my-8" />
              )}
            </Fragment>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

const items = [
  {
    marker: "A.",
    title: "Kitchens & Baths",
    description: "Modern updates that respect the original charm of your home.",
  },
  {
    marker: "B.",
    title: "Home Additions",
    description:
      "Seamless extensions that look like they've always been there.",
  },
  {
    marker: "C.",
    title: "Restorations",
    description:
      "Preserving historical details while updating structural integrity.",
  },
];
