import React from "react";
import { listings } from "../data/listings";
import type { Listing, SpecRow } from "../data/listings";
import AdvertTile from "../components/AdvertTile";
import SourcingRequestCard from "../components/SourcingRequestCard";

type HomeMode = "all" | "forSale";

type Props = {
  mode?: HomeMode;
};

const isForSale = (l: Listing) => String(l.status).toLowerCase().includes("for");

const findSpecValue = (specs: SpecRow[] | undefined, match: (label: string) => boolean) => {
  if (!specs) return undefined;
  const row = specs.find((s) => match(String(s.label).toLowerCase()));
  return row?.value;
};

const getTileLocation = (l: Listing) => l.location as string | undefined;

const getWidthRaw = (l: Listing) => {
  return (
    (l.width as string | undefined) ||
    findSpecValue(l.specs, (label) => label.includes("working width") || label === "width") ||
    undefined
  );
};

const formatWidthShort = (widthRaw?: string) => {
  if (!widthRaw) return "";
  // Converts "6.20 m (20 ft)" -> "6.2M"
  const mMatch = String(widthRaw).match(/(\d+(\.\d+)?)/);
  if (!mMatch) return String(widthRaw).toUpperCase();
  return `${mMatch[1]}M`.toUpperCase();
};

const pickTileSpec = (l: Listing) => {
  // 1) Prefer width (short)
  const w = formatWidthShort(getWidthRaw(l));
  if (w) return w;

  // 2) If subtitle contains something like "12-row" or "9 m working width", use it
  const sub = String(l.subtitle || "").trim();
  if (sub) {
    // try to extract "12-row" or "12 row"
    const rowMatch = sub.match(/(\d+)\s*-\s*row/i) || sub.match(/(\d+)\s*row/i);
    if (rowMatch?.[0]) return rowMatch[0].replace(/\s+/g, " ").toUpperCase();

    // try to extract "9 m" / "9m"
    const mMatch = sub.match(/(\d+(\.\d+)?)\s*m/i);
    if (mMatch?.[1]) return `${mMatch[1]}M`.toUpperCase();

    // fallback: keep subtitle (trim to keep tiles tidy)
    return sub.length > 24 ? `${sub.slice(0, 24).trim()}…` : sub;
  }

  // 3) Else try common spec rows
  const rows = findSpecValue(l.specs, (label) => label === "rows" || label.includes("row"));
  if (rows) return String(rows).toUpperCase();

  const model = findSpecValue(l.specs, (label) => label === "model");
  if (model) return String(model);

  return "";
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
          <span className="h-1 w-12 bg-brand-gold rounded-full" />
          <p className="text-gray-500 uppercase text-[10px] md:text-xs font-bold tracking-[0.3em]">
            {pageSub}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((l, index) => (
          <React.Fragment key={l.id}>
            <AdvertTile
              listing={{
                id: l.id,
                status: l.status,
                title: l.title,
                location: getTileLocation(l),
                heroImage: l.heroImage?.src,
                year: l.year,
                priceText: l.priceText ?? "",
                specSummary: pickTileSpec(l),
              }}
            />

            {index === 1 ? <SourcingRequestCard /> : null}
          </React.Fragment>
        ))}

        {filtered.length < 2 ? <SourcingRequestCard /> : null}

        {/* Slot Available tile 1 */}
        <div className="bg-white/50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center p-12 text-center flex-col opacity-70">
          <div className="w-12 h-1 bg-brand-gold mb-8 rounded-full" />
          <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-2">
            Slot available
          </p>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest">
            Contact us to list your machinery
          </p>
        </div>

        {/* Slot Available tile 2 */}
        <div className="bg-white/50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center p-12 text-center flex-col opacity-70">
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
