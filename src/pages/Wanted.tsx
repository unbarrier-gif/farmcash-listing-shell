import React from "react";
import { listings } from "../data/listings";
import type { SpecRow } from "../data/listings";
import AdvertTile from "../components/AdvertTile";
import SourcingRequestCard from "../components/SourcingRequestCard";

const isWanted = (l: any) => String(l.status || "").toLowerCase().includes("want");

const findSpecValue = (specs: SpecRow[] | undefined, match: (label: string) => boolean) => {
  if (!specs) return undefined;
  const row = specs.find((s) => match(String(s.label).toLowerCase()));
  return row?.value;
};

const getTileLocation = (l: any) => l.location as string | undefined;

const getTileWidth = (l: any) => {
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
  const filtered = listings.filter(isWanted);

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
        {filtered.map((l: any, index: number) => (
          <React.Fragment key={l.id}>
            <AdvertTile
              listing={{
                id: l.id,
                status: l.status,
                title: l.title,
                location: getTileLocation(l),
                heroImage: l.heroImage?.src,
                year: l.year,
                price: l.priceText ?? l.price ?? "",
                specSummary: formatWidthShort(getTileWidth(l)),
              }}
            />

            {index === 1 ? <SourcingRequestCard /> : null}
          </React.Fragment>
        ))}

        {filtered.length < 2 ? <SourcingRequestCard /> : null}
      </div>
    </main>
  );
};

export default Wanted;
