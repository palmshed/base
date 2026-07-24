import { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container-narrow">
        <h1
          className="text-4xl md:text-5xl font-semibold text-text-primary mb-8"
          style={{ fontFamily: "var(--serif)" }}
        >
          About {site.name}
        </h1>

        <div className="prose max-w-none">
          <p className="text-text-secondary leading-relaxed text-lg">
            {site.description}
          </p>

          <div className="divider" />

          <h2
            className="text-2xl font-semibold text-text-primary mb-4"
            style={{ fontFamily: "var(--serif)" }}
          >
            Accessibility
          </h2>

          <p className="text-text-secondary leading-relaxed">
            {site.name} includes built-in accessibility features. You can adjust
            text size, line spacing, letter spacing, contrast, theme, and font
            from the reading preferences panel in the bottom-right corner.
          </p>

          <p className="text-text-secondary leading-relaxed">
            Reading mode is available on detail pages for a distraction-free
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}
