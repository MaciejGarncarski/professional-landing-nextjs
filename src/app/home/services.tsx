import Image from "next/image";
import { Fragment } from "react";
import homeWorkers from "@/assets/home-workers.png";

export function Services() {
  return (
    <section className="flex flex-col-reverse md:flex-row md:max-w-380 md:mx-auto px-6 md:px-10 gap-10 md:gap-20 py-20">
      <Image
        src={homeWorkers}
        alt="Home workers"
        placeholder="blur"
        className="w-full h-auto md:max-w-180"
        quality={100}
      />
      <div>
        <h3 className="text-3xl md:text-5xl leading-relaxed font-serif">
          Renovations done right, from foundation to finish.
        </h3>
        <ul className="flex flex-col gap-2 md:gap-4">
          {items.map((item, idx) => (
            <Fragment key={item.marker}>
              <li className="mt-8 flex gap-4">
                <p className="text-sm text-primary mt-1">{item.marker}</p>
                <div className="flex flex-col">
                  <h4 className="text-xl font-semibold flex items-center gap-4">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-gray-700">{item.description}</p>
                </div>
              </li>
              {idx < items.length - 1 && (
                <div className="border-b border-gray-300 my-8" />
              )}
            </Fragment>
          ))}
        </ul>
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
