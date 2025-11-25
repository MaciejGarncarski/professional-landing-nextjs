import Image from "next/image";
import heroImg from "@/assets/hero/hero.png";

export function Header() {
  return (
    <header className="mx-auto py-10 md:py-20 flex flex-col px-6 gap-12">
      <h2 className="font-serif text-balance text-center mx-auto text-5xl md:text-7xl">
        Quality construction meets{" "}
        <span className="italic">local craftsmanship.</span>
      </h2>
      <p className="text-center text-md md:text-xl max-w-2xl mx-auto text-muted-foreground font-light">
        Transform your house into a home with Hearth & Home's dedicated
        residential building team. Serving our neighbors with integrity since
        1998.
      </p>

      <Image
        src={heroImg}
        quality={100}
        alt="Hero image"
        className="mx-auto mt-8 h-120 object-cover w-280"
      />
    </header>
  );
}
