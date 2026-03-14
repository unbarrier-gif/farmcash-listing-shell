import React from "react";
import { listings } from "../data/listings";
import type { Listing, SpecRow } from "../data/listings";
import AdvertTile from "../components/AdvertTile";
import SourcingRequestCard from "../components/SourcingRequestCard";

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


const getMachineType = (l: Listing) => {
  const fromSpecs = findSpecValue(l.specs, (label) =>
    label === "machine type" || label === "type" || label === "category" || label === "configuration"
  );
  return fromSpecs ? String(fromSpecs) : "Machine";
};

const Wanted: React.FC = () => {
  const sortedListings = [...listings].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  const filteredListings = sortedListings.filter(isWanted);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 items-stretch">
        {filteredListings.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              {index === 2 && <SourcingRequestCard />}
              <AdvertTile
                listing={{
                  id: item.id,
                  status: item.status,
                  title: item.title,
                  location: getTileLocation(item),
                  heroImage: item.heroImage?.src,
                  year: item.year,
                  price: item.priceText ?? item.price ?? "",
                  country: item.country,
                  hours: item.hours,
                  galleryCount: item.gallery?.length ?? 0,
                  highlight: "EXPORT READY",
                  quickSpec: formatWidthShort(getTileWidth(item)) || "ACTIVE SOURCING REQUEST",
                  buyerSignal: "Popular buyer request",
                  machineType: getMachineType(item),
                }}
              />
            </React.Fragment>
          );
        })}

        {filteredListings.length < 3 ? <SourcingRequestCard /> : null}
      </div>
    </main>
  );
};

export default Wanted;
