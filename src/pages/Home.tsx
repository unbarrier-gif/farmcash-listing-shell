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

const formatRowsShort = (value?: string) => {
  if (!value) return "";
  const match = String(value).match(/(\d+)\s*[- ]?\s*row/i);
  return match?.[1] ? `${match[1]} ROW` : "";
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
    if (rowMatch?.[1]) return `${rowMatch[1]} ROW`;

    // try to extract "9 m" / "9m"
    const mMatch = sub.match(/(\d+(\.\d+)?)\s*m/i);
    if (mMatch?.[1]) return `${mMatch[1]}M`.toUpperCase();

    // fallback: keep subtitle (trim to keep tiles tidy)
    return sub.length > 24 ? `${sub.slice(0, 24).trim()}…` : sub;
  }

  // 3) Else try common spec rows
  const rows = findSpecValue(l.specs, (label) => label === "rows" || label.includes("row"));
  const rowsShort = formatRowsShort(rows);
  if (rowsShort) return rowsShort;

  const model = findSpecValue(l.specs, (label) => label === "model");
  if (model) return String(model);

  return "";
};


const getMachineType = (l: Listing) => {
  const fromSpecs = findSpecValue(l.specs, (label) =>
    label === "machine type" || label === "type" || label === "category" || label === "configuration"
  );
  if (fromSpecs) return String(fromSpecs);
  const title = String(l.title || "").toLowerCase();
  if (title.includes("tractor")) return "Tractor";
  if (title.includes("drill")) return "Seed Drill";
  if (title.includes("sprayer")) return "Sprayer";
  if (title.includes("header")) return "Header";
  return "Machine";
};

const getHighlight = (l: Listing) => {
  const title = String(l.title || "").toLowerCase();
  const features = (l.features || []).map((f) => String(f).toLowerCase());
  const hoursNum = Number(String(l.hours || "").replace(/[^0-9.]/g, ""));

  if ((title.includes("tractor") || String(l.subtitle || "").toLowerCase().includes("tractor")) && Number.isFinite(hoursNum) && hoursNum >= 10000) {
    return "HIGH HOURS WORKING TRACTOR";
  }

  if (features.some((f) => f.includes("new") && f.includes("wheel"))) return "NEW TYRES FITTED";
  if (features.some((f) => f.includes("ready") && f.includes("season"))) return "READY FOR SEASON";
  if (features.some((f) => f.includes("prepared"))) return "FIELD READY";

  return "FIELD READY";
};

const getQuickSpec = (l: Listing) => {
  const hp = findSpecValue(l.specs, (label) => label === "hp" || label.includes("horsepower"));
  if (hp) return `${String(hp).toUpperCase()} HP`;

  const rows = findSpecValue(l.specs, (label) => label === "rows" || label.includes("row"));
  const rowsShort = formatRowsShort(rows);
  if (rowsShort) return rowsShort;

  const spec = pickTileSpec(l);
  return spec ? String(spec).toUpperCase() : "";
};

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
                  status: item.status,
                  title: item.title,
                  location: getTileLocation(item),
                  heroImage: item.heroImage?.src,
                  year: item.year,
                  priceText: item.priceText ?? "",
                  country: item.country,
                  hours: item.hours,
                  galleryCount: item.gallery?.length ?? 0,
                  highlight: getHighlight(item),
                  quickSpec: getQuickSpec(item),
                  machineType: getMachineType(item),
                }}
              />
            </React.Fragment>
          );
        })}

        {filteredListings.length < 3 ? <SourcingRequestCard /> : null}

        {/* Slot Available tile 1 */}
        <div className="h-full bg-white/50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center p-12 text-center flex-col opacity-70">
          <div className="w-12 h-1 bg-brand-gold mb-8 rounded-full" />
          <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-2">
            Slot available
          </p>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest">
            Contact us to list your machinery
          </p>
        </div>

        {/* Slot Available tile 2 */}
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
