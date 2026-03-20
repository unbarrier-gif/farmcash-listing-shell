import React from "react";
import { listings } from "../data/listings";
import type { Listing } from "../data/listings";
import AdvertTile from "../components/AdvertTile";
import SourcingRequestCard from "../components/SourcingRequestCard";

type HomeMode = "all" | "forSale";

type Props = {
  mode?: HomeMode;
};

const isForSale = (l: Listing) => l.listingType === "for-sale";

const Home: React.FC<Props> = ({ mode = "all" }) => {
  const sortedListings = [...listings].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  const filteredListings = mode === "forSale" ? sortedListings.filter(isForSale) : sortedListings;

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
          <span className="h-1 w-12 bg-brand-gold rounded-full" />
          <p className="text-gray-500 uppercase text-[10px] md:text-xs font-bold tracking-[0.3em]">
            {pageSub}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 items-stretch">
        {filteredListings.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              {index === 2 && <SourcingRequestCard />}
              <AdvertTile
                listing={{
                  id: item.id,
                  listingType: item.listingType,
                  status: item.status,
                  title: item.title,
                  location: item.location,
                  heroImage: item.heroImage?.src,
                  year: item.year,
                  priceText: item.priceText ?? "",
                  country: item.country,
                  hours: item.hours,
                  galleryCount: item.gallery?.length ?? 0,
                  createdAt: item.createdAt,
                  highlights: item.highlights,
                  category: item.category,
                }}
              />
            </React.Fragment>
          );
        })}

        {filteredListings.length < 3 ? <SourcingRequestCard /> : null}

        <div className="h-full bg-white/50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center p-12 text-center flex-col opacity-70">
          <div className="w-12 h-1 bg-brand-gold mb-8 rounded-full" />
          <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-2">
            Slot available
          </p>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest">
            Contact us to list your machinery
          </p>
        </div>

        <div className="h-full bg-white/50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center p-12 text-center flex-col opacity-70">
          <div className="w-12 h-1 bg-brand-gold mb-8 rounded-full" />
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
