import React from "react";
import { Link } from "react-router-dom";
import { listings } from "../data/listings";

type HomeMode = "all" | "forSale";

type Props = {
  mode?: HomeMode;
};

const isForSaleListing = (l: any) => {
  const category = String(l?.category ?? "").toLowerCase();
  const type = String(l?.type ?? "").toLowerCase();
  const kind = String(l?.kind ?? "").toLowerCase();

  return (
    l?.forSale === true ||
    l?.isForSale === true ||
    category.includes("for sale") ||
    type.includes("for sale") ||
    type === "sale" ||
    kind === "sale" ||
    kind === "forsale"
  );
};

const Home: React.FC<Props> = ({ mode = "all" }) => {
  const filtered =
    mode === "forSale" ? listings.filter((l) => isForSaleListing(l)) : listings;

  const pageTitle = mode === "forSale" ? "For sale" : "Latest Listings";
  const pageSub =
    mode === "forSale"
      ? "Available machinery currently listed"
      : "Available machinery and active sourcing requests";

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 min-h-[60vh]">
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold brand-font text-brand-black uppercase tracking-tight mb-3">
          {pageTitle}
        </h2>

        <div className="flex items-center gap-4">
          <span className="h-1 w-12 bg-brand-gold rounded-full" />
          <p className="text-gray-500 uppercase text-[10px] md:text-xs font-bold tracking-[0.3em]">
            {pageSub}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((l: any) => (
          <Link
            key={l.id}
            to={`/listing/${l.id}`}
            className="block group"
            aria-label={`View listing ${l.title ?? l.id}`}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 transition-all group-hover:shadow-lg group-hover:-translate-y-[2px]">
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                <img
                  src={l.imageUrl}
                  alt={l.imageAlt ?? l.title ?? "Machinery listing image"}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
                      {l.badge ?? l.category ?? (isForSaleListing(l) ? "For sale" : "Listing")}
                    </p>

                    <h3 className="text-xl font-bold brand-font text-brand-black uppercase tracking-tight leading-snug">
                      {l.title}
                    </h3>

                    {l.subtitle ? (
                      <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                        {l.subtitle}
                      </p>
                    ) : null}
                  </div>

                  {l.price ? (
                    <div className="text-right">
                      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                        Price
                      </p>
                      <p className="text-2xl font-bold brand-font text-brand-black whitespace-nowrap">
                        {l.price}
                      </p>
                    </div>
                  ) : null}
                </div>

                {(l.location || l.year) ? (
                  <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.15em] text-gray-400 font-bold">
                    {l.year ? <span>{l.year}</span> : null}
                    {l.location ? <span>{l.location}</span> : null}
                  </div>
                ) : null}
              </div>
            </div>
          </Link>
        ))}

        {/* Slot Available tile 1 */}
        <div className="bg-white/50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center p-12 text-center flex-col opacity-70">
          <div className="w-12 h-1 bg-brand-gold mb-8 rounded-full" />
          <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-2">
            Slot Available
          </p>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest">
            Contact us to list your machinery
          </p>
        </div>

        {/* Slot Available tile 2 */}
        <div className="bg-white/50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center p-12 text-center flex-col opacity-70">
          <div className="w-12 h-1 bg-brand-gold mb-8 rounded-full" />
          <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-2">
            Slot Available
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
