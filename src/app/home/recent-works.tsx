"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { BlurIn } from "@/app/utils/blur-in";
import city from "@/assets/home/city.png";
import detail from "@/assets/home/detail.png";
import handshake from "@/assets/home/handshake.png";

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

const items = [
  {
    title: "Maple Avenue",
    work: "Full Restoration",
    image: handshake,
  },
  {
    title: "Oakwood Drive",
    work: "Kitchen Extension",
    image: detail,
  },
  {
    title: "Highland Park",
    work: "New build",
    image: city,
  },
];

const MotionImage = motion(Image);

export function RecentWorks() {
  return (
    <section className="py-20 lg:mx-auto px-6 lg:px-20 flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row justify-between border-b border-border/40 pb-10 gap-5 lg:items-end">
        <h2 className="text-5xl font-serif">
          <BlurIn>Recent Works</BlurIn>
        </h2>
        <p className="text-muted-foreground max-w-lg">
          <BlurIn>
            A selection of homes we've had the privilege to work on in your
            neighborhood.
          </BlurIn>
        </p>
      </div>
      <motion.ul
        className="flex flex-col lg:flex-row gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {items.map((item) => {
          return (
            <motion.li
              variants={itemVariants}
              key={item.title}
              className="flex flex-col gap-5 border-b border-transparent hover:border-border pb-4 transition-[border-color]"
            >
              <div className="overflow-hidden cursor-pointer">
                <MotionImage
                  src={item.image}
                  alt={item.title}
                  quality={100}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                />
              </div>
              <div className="flex justify-between">
                <h3 className="font-serif">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.work}</p>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
