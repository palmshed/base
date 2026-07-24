import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import "./globals.css";
import { A11yProvider } from "@/components/a11y-provider";
import A11yPanel from "@/components/a11y-panel";

export const metadata: Metadata = {
  title: {
    default: `${site.name}. ${site.description}`,
    template: `%s. ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/base/favicon.ico" sizes="any" />
        <link rel="icon" href="/base/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href={site.url} />
      </head>
      <body className="antialiased">
        <A11yProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>

          <header className="site-header border-b border-border">
            <div className="container-wide py-6 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <span
                  className="text-2xl font-semibold tracking-tight"
                  style={{ fontFamily: "var(--serif)" }}
                >
                  {site.name}
                </span>
              </Link>
              <nav
                className="hidden md:flex items-center gap-8 text-sm text-text-secondary"
                aria-label="Main navigation"
              >
                {site.navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main id="main-content" className="min-h-screen">
            {children}
          </main>

          <footer className="site-footer border-t border-border mt-24">
            <div className="container-wide py-12">
              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                  <span
                    className="text-lg font-semibold"
                    style={{ fontFamily: "var(--serif)" }}
                  >
                    {site.name}
                  </span>
                  <p className="text-sm text-text-muted mt-2 max-w-sm">
                    {site.description}
                  </p>
                </div>
                <div className="flex gap-12 text-sm text-text-secondary">
                  {site.footer.sections.map((section) => (
                    <div key={section.title} className="flex flex-col gap-2">
                      <span className="text-text-muted uppercase text-xs tracking-wider">
                        {section.title}
                      </span>
                      {section.links.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-accent">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-border-light text-xs text-text-muted">
                Built by Palmshed.
              </div>
            </div>
          </footer>

          <A11yPanel />
        </A11yProvider>
      </body>
    </html>
  );
}
