import React from "react";
import { Link } from "react-router-dom";
import { listings } from "../data/listings";
import type { Listing, SpecRow } from "../data/listings";

type HomeMode = "all" | "forSale";

type Props = {
  mode?: HomeMode;
};

const isForSale = (l: Listing) => l.status === "for-sale";

const findSpecValue = (specs: SpecRow[] | undefined, match: (label: string) => boolean) => {
  if (!specs) return undefined;
  const row = specs.find((s) => match(String(s.label).toLowerCase()));
  return row?.value;
};

const getTileLocation = (l: any) => l.location as string | undefined;

const getTileWidth = (l: any) => {
  // Prefer explicit tile width if you add it later, else infer from specs
  return (
    (l.width as string | undefined) ||
    findSpecValue(l.specs, (label) => label.includes("working width") || label === "width") ||
    undefined
  );
};

const formatWidthShort = (widthRaw?: string) => {
  if (!widthRaw) return undefined;
  // Converts "6.20 m (20 ft)" -> "6.2M" style (simple, readable)
  const mMatch = widthRaw.match(/(\d+(\.\d+)?)/);
  if (!mMatch) return widthRaw.toUpperCase();
  return `${mMatch[1]}M`.toUpperCase();
};

const TileBadge: React.FC<{ status: Listing["status"] }> = ({ status }) => {
  if (status === "wanted") {
    return (
      <span className="absolute top-4 left-4 bg-[#ca9c29] text-white px-3 py-1 rounded-full font-bold text-[10px] shadow-md uppercase tracking-widest">
        Wanted
      </span>
    );
  }
  return (
    <span className="absolute top-4 left-4 bg-neutral-900 text-white px-3 py-1 rounded-full font-bold text-[10px] shadow-md uppercase tracking-widest">
      For sale
    </span>
  );
};

const Home: React.FC<Props> = ({ mode = "all" }) => {
  const filtered = mode === "forSale" ? listings.filter(isForSale) : listings;

  const pageTitle = mode === "forSale" ? "For sale" : "All ads";
  const pageSub =
    mode === "forSale"
      ? "Available machinery currently listed"
      : "Available machinery and active sourcing requests";

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 min-h-[60vh]">
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold brand-font text-neutral-900 uppercase tracking-tight mb-3">
          {pageTitle}
        </h2>

        <div className="flex items-center gap-4">
          <span className="h-1 w-12 bg-[#ca9c29] rounded-full" />
          <p className="text-gray-500 uppercase text-[10px] md:text-xs font-bold tracking-[0.3em]">
            {pageSub}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((l: any) => {
          const location = getTileLocation(l);
          const widthShort = formatWidthShort(getTileWidth(l));
          const year = l.year as string | undefined;
          const priceText = (l.priceText as string | undefined) ?? "POA";

          return (
            <Link
              key={l.id}
              to={`/listing/${l.id}`}
              className="block group"
              aria-label={`View listing ${l.title ?? l.id}`}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 transition-all group-hover:shadow-lg group-hover:-translate-y-[2px]">
                <div className="relative">
                  <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                    <img
                      src={l.heroImage?.src}
                      alt={l.heroImage?.alt ?? l.title ?? "Machinery listing image"}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>

                  <TileBadge status={l.status} />
                </div>

                <div className="p-6">
                  {/* Location */}
                  {location ? (
                    <p className="text-[#75ac49] text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
                      {location}
                    </p>
                  ) : (
                    <p className="text-[#75ac49] text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
                      &nbsp;
                    </p>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-black uppercase tracking-tight leading-snug text-[#75ac49]">
                    {String(l.title ?? "").toUpperCase()}
                  </h3>

                  {/* Year + width */}
                  {(year || widthShort) ? (
                    <div className="mt-3 flex items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {year ? <span>{year}</span> : null}
                      {year && widthShort ? <span>•</span> : null}
                      {widthShort ? <span>{widthShort}</span> : null}
                    </div>
                  ) : null}

                  {/* Divider */}
                  <div className="mt-6 pt-5 border-t border-gray-100 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                        Sale price
                      </p>
                      <p className="text-2xl font-black text-neutral-900">{priceText}</p>
                    </div>

                    {/* Arrow button (green) */}
                    <div className="shrink-0">
                      <div className="w-11 h-11 rounded-xl bg-[#75ac49] shadow-md flex items-center justify-center transition-all group-hover:brightness-110">
                        <svg
                          className="w-5 h-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}

        {/* Slot Available tile 1 */}
        <div className="bg-white/50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center p-12 text-center flex-col opacity-70">
          <div className="w-12 h-1 bg-[#ca9c29] mb-8 rounded-full" />
          <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-2">
            Slot available
          </p>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest">
            Contact us to list your machinery
          </p>
        </div>

        {/* Slot Available tile 2 */}
        <div className="bg-white/50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center p-12 text-center flex-col opacity-70">
          <div className="w-12 h-1 bg-[#ca9c29] mb-8 rounded-full" />
          <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-2">
            Slot available
          </p>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest">
            Bridging finance available
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
