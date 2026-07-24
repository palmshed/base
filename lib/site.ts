export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  accent: string;
  logo?: string;
  navigation: { label: string; href: string }[];
  footer: {
    sections: {
      title: string;
      links: { label: string; href: string }[];
    }[];
  };
  socials?: {
    platform: string;
    url: string;
  }[];
}

export const site: SiteConfig = {
  name: "Base",
  description:
    "A reusable foundation for static-first websites.",
  url: "https://example.com",
  accent: "#B8860B",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Search", href: "/search" },
    { label: "About", href: "/about" },
  ],
  footer: {
    sections: [
      {
        title: "Browse",
        links: [
          { label: "Home", href: "/" },
          { label: "Search", href: "/search" },
        ],
      },
      {
        title: "About",
        links: [
          { label: "About", href: "/about" },
          { label: "Accessibility", href: "/accessibility" },
        ],
      },
    ],
  },
};
