export function ReadyToStart() {
  return (
    <section className="bg-secondary text-secondary-foreground w-full flex items-center justify-center text-center flex-col px-6 md:py-32 py-20">
      <h2 className="text-5xl md:text-6xl font-serif mb-12">
        Ready to start your project?
      </h2>
      <p className="mb-10 text-lg max-w-120 text-muted-foreground">
        We're currently booking consultations for the upcoming season. Let's sit
        down and discuss your vision.
      </p>
      <button type="button" className="text-white px-8 py-4 mb-12 bg-black">
        Schedule a Free Estimate
      </button>
      <p className="uppercase text-muted-foreground text-xs">
        Licensed & Insured • Family Owned
      </p>
    </section>
  );
}
