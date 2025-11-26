import { motion } from "motion/react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { fadeUp, staggerGroup } from "@/app/renovations/animations";
import detailImg from "@/assets/home/detail.png";
import handshakeImg from "@/assets/home/handshake.png";
import workersImg from "@/assets/home/home-workers.png";

const MotionImage = motion(Image);

export function GallerySection() {
  return (
    <section className="px-6 lg:px-10 lg:max-w-380 mx-auto flex flex-col gap-10">
      <motion.div
        variants={staggerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-3"
      >
        <motion.p
          variants={fadeUp}
          className="uppercase tracking-[0.3em] text-xs text-muted-foreground"
        >
          Before & after gallery
        </motion.p>
        <motion.h3 variants={fadeUp} className="text-3xl font-serif">
          See how we stitch new ideas into existing shells.
        </motion.h3>
      </motion.div>
      <motion.div
        variants={fadeUp}
        className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="grid gap-6 lg:grid-rows-2">
          <GalleryCard
            image={detailImg}
            title="Parlor revival"
            caption="Custom plaster repair + millwork"
          />
          <GalleryCard
            image={handshakeImg}
            title="Garden-level suite"
            caption="Moisture mitigation + finishes"
          />
        </div>
        <GalleryCard
          image={workersImg}
          title="Attic dormer"
          caption="Structural tie-ins + skylights"
          tall
        />
      </motion.div>
    </section>
  );
}

function GalleryCard({
  image,
  title,
  caption,
  tall,
}: {
  image: StaticImageData;
  title: string;
  caption: string;
  tall?: boolean;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className={`relative overflow-hidden border border-border/60 ${
        tall ? "h-full" : ""
      }`}
    >
      <MotionImage
        src={image}
        alt={title}
        placeholder="blur"
        quality={100}
        className={`w-full object-cover ${tall ? "h-full" : "h-72"}`}
      />
      <div className="absolute inset-x-0 bottom-0 bg-black/70 text-white p-4">
        <h4 className="text-lg font-serif">{title}</h4>
        <p className="text-sm text-white/80">{caption}</p>
      </div>
    </motion.article>
  );
}
