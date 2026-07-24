"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ title: string; slug: string; description?: string }[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  function handleChange(value: string) {
    setQuery(value);
    if (!value.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }
    // Placeholder: integrate with your content source
    setResults([]);
    setHasSearched(true);
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto mb-12">
          <h1
            className="text-3xl md:text-4xl font-semibold text-text-primary mb-6 text-center"
            style={{ fontFamily: "var(--serif)" }}
          >
            Search
          </h1>
          <input
            type="text"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={`Search ${site.name.toLowerCase()}...`}
            className="w-full px-5 py-3 rounded-lg border border-border-light bg-transparent text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent/40 transition-all"
            autoFocus
          />
        </div>

        {hasSearched && results.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-muted">
              No results found for &ldquo;{query}&rdquo;
            </p>
          </div>
        )}

        {results.length > 0 && (
          <div>
            <p className="text-sm text-text-muted mb-6">
              {results.length} result{results.length !== 1 ? "s" : ""} for
              &ldquo;{query}&rdquo;
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="group block p-6 rounded-lg border border-border hover:border-accent hover:bg-surface-hover transition-all"
                >
                  <h3
                    className="text-lg font-medium text-text-primary group-hover:text-accent transition-colors mb-2"
                    style={{ fontFamily: "var(--serif)" }}
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-text-muted line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}

        {!hasSearched && (
          <div className="text-center py-12">
            <p className="text-text-muted">
              Start typing to search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
