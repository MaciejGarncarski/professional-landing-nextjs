export function OurPromise() {
  return (
    <section className="py-20 flex w-full flex-col gap-12 md:gap-32 md:max-w-280 mx-auto">
      <div className="px-6 flex flex-col gap-6 md:px-0 md:flex-row md:justify-between md:gap-8">
        <h3 className="text-muted-foreground uppercase grow shrink-0 min-w-">
          Our Promise
        </h3>
        <p className="font-serif text-3xl leading-tight max-w-2xl">
          We believe in handshake deals, honest timelines, and building spaces
          where families can grow.
        </p>
      </div>
      <ul className="flex flex-col md:flex-row gap-12 px-6 md:px-0 md:gap-20 md:justify-between">
        {features.map((feature, idx) => {
          return (
            <li key={feature.title}>
              <h3 className="font-serif italic text-4xl text-gray-600">
                0{idx + 1}
              </h3>
              <h4 className="text-2xl">{feature.title}</h4>
              <p className="mt-6 text-gray-600 text-lg">
                {feature.description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const features = [
  {
    title: "Local Expertise",
    description:
      "We live here too. We understand the local architecture, zoning, and the unique character of our neighborhood homes.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden corporate fees. Just honest materials and labor costs, explained clearly before we hammer the first nail.",
  },
  {
    title: "Quality Materials",
    description:
      "We source sustainable timber and stone from local suppliers whenever possible to support our community economy.",
  },
];
