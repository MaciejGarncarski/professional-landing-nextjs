"use client";

import { AnimatePresence, motion, type Variants } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { useLockBodyScroll } from "@/app/use-lock-scroll";

export function NavDesktop() {
  return (
    <nav className="py-6 px-12 border-b border-border gap-12 items-center hidden md:flex">
      <h1 className="font-serif text-2xl tracking-tighter font-medium">
        <Link href="/">Hearth & Home.</Link>
      </h1>
      <ul className="flex gap-20 text-sm uppercase font-medium text-muted-foreground tracking-wider">
        {links.map(({ text, url }) => {
          return (
            <li key={url} className="hover:text-foreground transition-colors">
              <Link href={url}>{text}</Link>
            </li>
          );
        })}
      </ul>

      <div className="ml-auto items-center flex gap-8">
        <a href="tel:(555) 123-4567" className="font-medium">
          (555) 123-4567
        </a>
        <button
          type="button"
          className="bg-black text-white font-serif px-4 py-2 cursor-pointer"
        >
          Book Consultation
        </button>
      </div>
    </nav>
  );
}

export function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  useLockBodyScroll(isOpen);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="py-6 px-6 border-b border-border gap-12 items-center flex md:hidden sticky top-0 bg-background">
      <h1 className="font-serif text-xl tracking-tighter font-medium z-20">
        <Link href="/" onClick={closeMenu}>
          Hearth & Home.
        </Link>
      </h1>

      <button type="button" className="ml-auto z-20" onClick={toggleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>Menu</title>
          <path d="M3 5h18" />
          <path d="M3 12h18" />
          <path d="M3 19h18" />
        </svg>
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed flex items-center justify-center text-center w-full h-full left-0 top-0 bg-background/90 backdrop-blur-2xl"
          >
            <ul className="flex flex-col gap-20 text-xl uppercase font-medium text-foreground tracking-wider">
              {links.map(({ text, url }) => {
                return (
                  <motion.li key={url} variants={itemVariants}>
                    <Link onClick={closeMenu} href={url}>
                      {text}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  exit: { opacity: 0, transition: { when: "afterChildren" } },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: { type: "spring", stiffness: 300 },
  },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

type LinkT = {
  text: string;
  url: string;
};

const links: LinkT[] = [
  { text: "Renovations", url: "/renovations" },
  { text: "New Builds", url: "/new-builds" },
  { text: "About US", url: "/about-us" },
];
