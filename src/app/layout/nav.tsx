"use client";

import { AnimatePresence, motion, type Variants } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useIsMobile } from "@/app/hooks/use-is-mobile";
import { useLockBodyScroll } from "@/app/hooks/use-lock-scroll";

export function NavDesktop() {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  return (
    <nav className="py-6 px-12 border-b border-border/40 gap-24 items-center hidden lg:flex sticky top-0 z-40 bg-background/90 backdrop-blur-3xl">
      <h1 className="font-serif text-2xl tracking-tighter font-medium">
        <Link href="/">Hearth & Home.</Link>
      </h1>
      <ul className="flex gap-24 text-sm uppercase font-medium text-muted-foreground tracking-wider">
        {links.map(({ text, url }) => {
          return (
            <li key={url}>
              <Link
                href={url}
                className={`pb-1 border-b-2 border-transparent transition-colors hover:text-foreground ${
                  isActiveLink(pathname, url)
                    ? "text-foreground border-foreground"
                    : ""
                }`}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="ml-auto items-center flex gap-8">
        <a href="tel:(555) 123-4567" className="font-medium">
          (555) 123-4567
        </a>
        <motion.button
          type="button"
          whileTap={{
            scale: 0.95,
          }}
          className="bg-black text-white font-serif px-4 py-2 cursor-pointer"
        >
          Book Consultation
        </motion.button>
      </div>
    </nav>
  );
}

export function NavMobile() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useLockBodyScroll(isOpen);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  if (!isMobile) {
    return null;
  }

  return (
    <nav className="py-6 px-6 border-b border-border gap-12 z-50 items-center flex md:hidden sticky top-0 bg-background">
      <h1 className="font-serif text-xl tracking-tighter font-medium z-90">
        <Link href="/" onClick={closeMenu}>
          Hearth & Home.
        </Link>
      </h1>

      <button type="button" className="ml-auto z-90" onClick={toggleOpen}>
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
            className="fixed flex items-center justify-center z-50 text-center w-full h-full left-0 top-0 bg-background/90 backdrop-blur-2xl"
          >
            <ul className="flex flex-col gap-20 text-xl uppercase font-medium text-foreground tracking-wider">
              {links.map(({ text, url }) => {
                return (
                  <motion.li key={url} variants={itemVariants}>
                    <Link
                      onClick={closeMenu}
                      href={url}
                      className={`pb-2 border-b-2 border-foreground transition-colors ${
                        isActiveLink(pathname, url)
                          ? "border-foreground"
                          : "border-transparent"
                      }`}
                    >
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

function isActiveLink(pathname: string | null, url: string) {
  if (!pathname) return false;
  if (url === "/") return pathname === "/";
  return pathname === url || pathname.startsWith(`${url}/`);
}
