import { motion } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import { fadeUp, staggerGroup } from "@/app/new-builds/animations";
import cityImg from "@/assets/home/city.png";
import detailImg from "@/assets/home/detail.png";
import handshakeImg from "@/assets/home/handshake.png";

const MotionImage = motion(Image);

export function ShowcaseSection() {
  return (
    <section className="px-6 lg:px-10 lg:max-w-380 mx-auto flex flex-col gap-10">
      <motion.div
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
      >
        <motion.h3 variants={fadeUp} className="text-4xl font-serif">
          Featured builds
        </motion.h3>
        <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl">
          Each project emphasizes passive performance, local materials, and a
          layout tuned to the property&apos;s light and views.
        </motion.p>
      </motion.div>
      <motion.ul
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-8 lg:grid-cols-3"
      >
        {projectHighlights.map((project) => (
          <motion.li
            key={project.title}
            variants={fadeUp}
            className="flex flex-col gap-4 border border-border/40 p-4"
          >
            <MotionImage
              src={project.image}
              alt={project.title}
              placeholder="blur"
              quality={100}
              className="w-full h-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            />
            <div className="flex flex-col gap-1">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {project.location}
              </p>
              <h4 className="text-xl font-serif">{project.title}</h4>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

type Project = {
  title: string;
  location: string;
  description: string;
  image: StaticImageData;
};

const projectHighlights: Project[] = [
  {
    title: "Maple Ridge Passive",
    location: "North Hill",
    description:
      "Net-zero ready home with geothermal and reclaimed timber soffits.",
    image: detailImg,
  },
  {
    title: "Lakeview Courtyard",
    location: "Shoreline",
    description:
      "Courtyard plan that balances privacy with indoor-outdoor living.",
    image: handshakeImg,
  },
  {
    title: "Cedar Bluff Ranch",
    location: "Rolling Acres",
    description:
      "One-level living with clerestory light and sheltered breezeways.",
    image: cityImg,
  },
];
