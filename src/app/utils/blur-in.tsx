"use client";
import { motion, useInView } from "motion/react";
import * as React from "react";

export const BlurIn = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.span
      ref={ref}
      initial={{ filter: "blur(12px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
};
