type Link = {
  text: string;
  url: string;
};

type Column = {
  title: string;
  links: Link[];
};

const columns: Column[] = [
  {
    links: [
      { text: "Renovations", url: "/renovations" },
      { text: "New Builds", url: "/new-builds" },
      { text: "About Us", url: "/about-us" },
    ],
    title: "Services",
  },
  {
    links: [
      { text: "Blog", url: "/blog" },
      { text: "Careers", url: "/careers" },
      { text: "Contact", url: "/contact" },
    ],
    title: "Resources",
  },
  {
    links: [
      { text: "Privacy Policy", url: "/privacy-policy" },
      { text: "Terms of Service", url: "/terms-of-service" },
      { text: "Sitemap", url: "/sitemap" },
    ],
    title: "Legal",
  },
  {
    title: "Contact",
    links: [
      { text: "Email Us", url: "mailto:contact@company.com" },
      { text: "Call Us", url: "tel:(555) 123-4567" },
      { text: "Visit Us", url: "/location" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black p-10 md:px-12 md:pt-20 md:pb-10 text-white flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col md:grid grid-cols-12 min-h-50">
        <h2 className="font-medium uppercase text-2xl col-span-3 mb-10 md:mb-0">
          Company
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-32 col-span-8">
          {columns.map((column) => (
            <FooterColumn
              key={column.title}
              links={column.links}
              title={column.title}
            />
          ))}
        </div>
      </div>
      <div className="h-px bg-muted-foreground w-full"></div>
      <div className="flex flex-col md:items-center text-xs justify-between text-gray-500 gap-4 md:gap-0 md:flex-row">
        <p>© 2026 Company. All rights reserved.</p>

        <div className="flex items-center justify-between md:justify-start gap-8">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: Column) {
  return (
    <div className="flex flex-col gap-4 text-xs">
      <h3 className="uppercase text-gray-500 font-bold">{title}</h3>
      <ul className="flex flex-col gap-4 text-sm">
        {links.map(({ text, url }) => (
          <li key={url}>
            <a href={"#"}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
