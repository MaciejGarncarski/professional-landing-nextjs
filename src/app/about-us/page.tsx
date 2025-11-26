"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { BlurIn } from "@/app/utils/blur-in";
import handshakeImg from "@/assets/home/handshake.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerGroup: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const MotionImage = motion(Image);

export default function AboutUsPage() {
  return (
    <main className="flex flex-col gap-24 lg:gap-32 pb-20">
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="mx-auto px-6 lg:px-0 py-16 lg:py-24 text-center flex flex-col gap-6 lg:max-w-220">
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
          About Us
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-serif text-4xl lg:text-6xl text-balance"
        >
          <BlurIn>Neighbors building neighbors&apos; homes.</BlurIn>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Hearth &amp; Home is a small, family-run studio rooted in the belief
          that craftsmanship and community go hand in hand. We partner with
          homeowners to restore, expand, and reimagine the spaces where their
          stories unfold.
        </motion.p>
      </motion.div>
    </section>
  );
}

function StorySection() {
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
          Our story
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-3xl lg:text-5xl font-serif leading-tight"
        >
          Built on trust, refined by experience.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-lg text-gray-700">
          What began as a single-crew renovation shop has grown into a
          full-service residential team trusted by neighbors across the county.
          Every project still starts with coffee at your kitchen table and a
          clear conversation about goals, timelines, and investment.
        </motion.p>
        <motion.p variants={fadeUp} className="text-lg text-gray-700">
          We collaborate with local trades, source sustainable materials, and
          document every milestone so you always know what comes next. No loud
          sales pitch, just honest guidance from people who live where they
          work.
        </motion.p>
        <motion.dl
          variants={staggerGroup}
          className="grid grid-cols-2 gap-6 border-t border-border/50 pt-6"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <dt className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="text-3xl font-serif mt-2">{stat.value}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>
      <MotionImage
        src={handshakeImg}
        alt="Homeowners meeting with our team"
        placeholder="blur"
        quality={100}
        className="w-full max-w-140 lg:max-w-160  border border-border/60"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      />
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="px-6 lg:px-0 lg:max-w-280 mx-auto flex flex-col gap-12">
      <motion.div
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
      >
        <motion.p
          variants={fadeUp}
          className="text-muted-foreground uppercase tracking-[0.3em] text-xs"
        >
          What guides us
        </motion.p>
        <motion.h3
          variants={fadeUp}
          className="text-3xl lg:text-4xl font-serif max-w-3xl"
        >
          Every nail, beam, and detail is an opportunity to honor the homes we
          grew up visiting.
        </motion.h3>
      </motion.div>
      <motion.ul
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-10 lg:grid-cols-3"
      >
        {coreValues.map((value, idx) => (
          <motion.li
            key={value.title}
            variants={fadeUp}
            className="border border-border/50 p-6  flex flex-col gap-4"
          >
            <p className="text-sm text-primary/80 tracking-[0.2em]">
              0{idx + 1}
            </p>
            <h4 className="text-2xl font-serif">{value.title}</h4>
            <p className="text-muted-foreground">{value.description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="bg-secondary text-secondary-foreground py-16 px-6">
      <div className="mx-auto flex flex-col gap-10 lg:max-w-280">
        <motion.div
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <motion.h3 variants={fadeUp} className="text-4xl font-serif">
            Meet the crew
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="text-secondary-foreground/70 max-w-2xl"
          >
            Our leadership team works on-site, manages permits, and gives you a
            single point of contact from schematic sketches to final
            walk-throughs.
          </motion.p>
        </motion.div>
        <motion.div
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {teamMembers.map((member) => (
            <motion.article
              key={member.name}
              variants={fadeUp}
              className="bg-background text-foreground border border-border/60 p-6 flex flex-col gap-3"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {member.tenure}
              </p>
              <h4 className="text-2xl font-serif">{member.name}</h4>
              <p className="text-sm text-primary/80 font-semibold">
                {member.role}
              </p>
              <p className="text-muted-foreground">{member.bio}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="px-6 lg:px-0 lg:max-w-280 mx-auto flex flex-col gap-8">
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
          Milestones
        </motion.p>
        <motion.h3
          variants={fadeUp}
          className="text-3xl lg:text-4xl font-serif max-w-3xl"
        >
          A steady cadence of thoughtful growth.
        </motion.h3>
      </motion.div>
      <motion.ul
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col"
      >
        {milestones.map((milestone, idx) => (
          <motion.li
            key={milestone.year}
            variants={fadeUp}
            className="flex gap-6 py-6"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-1">
              {milestone.year}
            </div>
            <div className="flex-1 border-b border-border/50 pb-6">
              <h4 className="text-xl font-serif">{milestone.title}</h4>
              <p className="text-muted-foreground mt-2">
                {milestone.description}
              </p>
              {idx === milestones.length - 1 && (
                <p className="text-sm text-primary mt-4">
                  Currently booking new builds &amp; restorative work.
                </p>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

const stats = [
  { label: "Years serving", value: "27" },
  { label: "Projects delivered", value: "430+" },
  { label: "On-time completions", value: "98%" },
  { label: "Local partners", value: "35" },
];

const coreValues = [
  {
    title: "Honest Communication",
    description:
      "We offer transparent bids, weekly updates, and one project lead so expectations stay aligned.",
  },
  {
    title: "Craft Before Speed",
    description:
      "Our crews take the time to mock up details, test finishes, and protect original character.",
  },
  {
    title: "Community Investment",
    description:
      "We hire local trades and source regional materials to keep every project rooted in place.",
  },
];

const teamMembers = [
  {
    name: "Mara Collins",
    role: "Founder & General Contractor",
    tenure: "Since 1998",
    bio: "Guides every project scope, coordinates with permitting offices, and walks homeowners through each milestone.",
  },
  {
    name: "Luis Herrera",
    role: "Lead Carpenter",
    tenure: "Since 2004",
    bio: "Oversees framing crews, custom cabinetry, and on-site quality checks with a focus on timeless detailing.",
  },
  {
    name: "Nina Patel",
    role: "Project Architect",
    tenure: "Since 2012",
    bio: "Translates family wish-lists into drawings, manages consultants, and ensures every addition blends seamlessly.",
  },
  {
    name: "Evan Brooks",
    role: "Client Experience Lead",
    tenure: "Since 2016",
    bio: "Keeps schedules synced, shares weekly progress notes, and makes sure your home stays livable during work.",
  },
];

const milestones = [
  {
    year: "1998",
    title: "Company founded",
    description:
      "Launched as a two-person renovation outfit focused on historic bungalows.",
  },
  {
    year: "2007",
    title: "Expanded services",
    description:
      "Added design-build capabilities and grew trusted partnerships with local artisans.",
  },
  {
    year: "2015",
    title: "Sustainability pledge",
    description:
      "Committed to waste diversion on job sites and prioritized FSC-certified lumber.",
  },
  {
    year: "Today",
    title: "Neighborhood first",
    description:
      "Focused on a handful of projects each season so every client receives dedicated attention.",
  },
];
