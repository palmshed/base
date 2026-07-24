import { site } from "@/lib/site";

export default function Home() {
  return (
    <div>
      <section className="py-20 md:py-28">
        <div className="container-narrow text-center">
          <h1
            className="text-4xl md:text-5xl font-semibold text-text-primary mb-6"
            style={{ fontFamily: "var(--serif)" }}
          >
            {site.name}
          </h1>
          <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
            {site.description}
          </p>
          <div className="max-w-md mx-auto">
            <form action="/base/search" method="GET" role="search">
              <label htmlFor="home-search" className="sr-only">
                Search
              </label>
              <input
                id="home-search"
                type="text"
                name="q"
                placeholder={`Search ${site.name.toLowerCase()}...`}
                className="w-full px-5 py-3 rounded-lg border border-border-light/60 bg-transparent text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-border transition-colors"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
