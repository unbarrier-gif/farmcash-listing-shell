import React from "react";
import { listings } from "../data/listings";
import type { Listing, SpecRow } from "../data/listings";
import AdvertTile from "../components/AdvertTile";
import SourcingRequestCard from "../components/SourcingRequestCard";

type DisplayItem = Listing | { type: "sourcing" };

const isWanted = (l: Listing) => String(l.status || "").toLowerCase().includes("want");

const findSpecValue = (specs: SpecRow[] | undefined, match: (label: string) => boolean) => {
  if (!specs) return undefined;
  const row = specs.find((s) => match(String(s.label).toLowerCase()));
  return row?.value;
};

const getTileLocation = (l: Listing) => l.location as string | undefined;

const getTileWidth = (l: Listing) => {
  return (
    (l.width as string | undefined) ||
    findSpecValue(l.specs, (label) => label.includes("working width") || label === "width") ||
    undefined
  );
};

const formatWidthShort = (widthRaw?: string) => {
  if (!widthRaw) return "";
  const mMatch = widthRaw.match(/(\d+(\.\d+)?)/);
  if (!mMatch) return String(widthRaw).toUpperCase();
  return `${mMatch[1]}M`.toUpperCase();
};

const Wanted: React.FC = () => {
  const sortedListings = [...listings].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  const filteredListings = sortedListings.filter(isWanted);

  const displayListings: DisplayItem[] =
    filteredListings.length < 2
      ? [...filteredListings, { type: "sourcing" }]
      : [filteredListings[0], filteredListings[1], { type: "sourcing" }, ...filteredListings.slice(2)];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 min-h-[60vh]">
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold brand-font text-neutral-900 uppercase tracking-tight mb-3">
          Wanted
        </h2>

        <div className="flex items-center gap-4">
          <span className="h-1 w-12 bg-brand-gold rounded-full" />
          <p className="text-gray-500 uppercase text-[10px] md:text-xs font-bold tracking-[0.3em]">
            Active sourcing requests
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayListings.map((item) => {
          if ("type" in item) {
            return <SourcingRequestCard key="sourcing-card" />;
          }

          return (
            <AdvertTile
              key={item.id}
              listing={{
                id: item.id,
                status: item.status,
                title: item.title,
                location: getTileLocation(item),
                heroImage: item.heroImage?.src,
                year: item.year,
                price: item.priceText ?? item.price ?? "",
                specSummary: formatWidthShort(getTileWidth(item)),
              }}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Wanted;
