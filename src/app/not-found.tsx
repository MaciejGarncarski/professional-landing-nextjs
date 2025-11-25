"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-6 py-20 md:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-8xl md:text-9xl font-serif font-bold text-foreground/30 mb-4">
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            We couldn't find the page you're looking for. It might have moved,
            or perhaps the address was entered incorrectly.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 rounded-sm font-medium hover:bg-foreground/90 transition-colors group"
          >
            <span>Return Home</span>
          </Link>

          <Link
            href="/renovations"
            className="flex items-center justify-center gap-2 border-2 border-foreground/30 px-6 py-4 rounded-sm font-medium hover:border-foreground/60 transition-colors group"
          >
            <span>View Renovations</span>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-sm text-muted-foreground mb-6">
            Or explore our other services:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/renovations"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              Renovations
            </Link>
            <span className="text-muted-foreground/30">•</span>
            <Link
              href="/new-builds"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              New Builds
            </Link>
            <span className="text-muted-foreground/30">•</span>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              About Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 pt-12 border-t border-border/40"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Still need help? Get in touch with us
          </p>
          <Link
            href="tel:5551234567"
            className="text-lg font-serif font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            (555) 123-4567
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
