import React from "react";
import { Link } from "react-router-dom";

/**
 * Keep this component resilient:
 * - Works even if some fields are missing
 * - Meta line adapts per listing
 */

type ListingStatus = "for-sale" | "wanted" | "sale" | "for_sale" | "for sale" | string;

export type AdvertTileListing = {
  id: string;
  status?: ListingStatus;

  // Core display
  title: string;
  location?: string;

  // Image
  heroImage?: string;

  // Pricing
  priceText?: string; // e.g. "POA" or "£35,000"
  price?: number | string;
  currency?: string; // e.g. "£"

  // Meta
  year?: number | string;

  // Flexible spec fields (use any you have in your data)
  specSummary?: string; // best option: "6.2m" or "9m working width | 12-row"
  width?: number | string;
  workingWidth?: number | string;
  rows?: number | string;
  hours?: number | string;
  detail?: string; // any other short line
};

const normaliseStatus = (status?: ListingStatus) => {
  const s = String(status || "").toLowerCase().trim();
  if (s.includes("want")) return "wanted";
  return "for-sale";
};

const formatPrice = (price?: number | string, currency = "£") => {
  if (price === undefined || price === null || price === "" || price === 0) return "";
  const raw = typeof price === "number" ? price : Number(String(price).replace(/[^0-9.]/g, ""));
  if (!Number.isFinite(raw)) return String(price);
  return `${currency}${raw.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`;
};

const formatYear = (year?: number | string) => {
  if (year === undefined || year === null || year === "") return "";
  return String(year).trim();
};

const buildSpec = (l: AdvertTileListing) => {
  if (l.specSummary && String(l.specSummary).trim()) return String(l.specSummary).trim();

  const parts: string[] = [];

  const ww = l.workingWidth ?? l.width;
  if (ww !== undefined && ww !== null && String(ww).trim()) {
    const v = String(ww).trim();
    parts.push(v.toLowerCase().includes("m") ? v : `${v}m`);
  }

  if (l.rows !== undefined && l.rows !== null && String(l.rows).trim()) {
    parts.push(
      String(l.rows).trim().toLowerCase().includes("row")
        ? String(l.rows).trim()
        : `${String(l.rows).trim()}-row`
    );
  }

  if (l.hours !== undefined && l.hours !== null && String(l.hours).trim()) {
    const v = String(l.hours).trim();
    parts.push(v.toLowerCase().includes("h") ? v : `${v}h`);
  }

  if (l.detail && String(l.detail).trim()) parts.push(String(l.detail).trim());

  return parts.join(" · ");
};

type Props = {
  listing: AdvertTileListing;
};

const AdvertTile: React.FC<Props> = ({ listing }) => {
  const status = normaliseStatus(listing.status);

  const badgeText = status === "wanted" ? "WANTED" : "FOR SALE";
  const badgeClass = status === "wanted" ? "bg-brand-gold" : "bg-brand-black";

  const location = (listing.location || "").trim();
  const title = (listing.title || "").trim();

  const year = formatYear(listing.year);
  const spec = buildSpec(listing);
  const meta = [year, spec].filter(Boolean).join(" • ").toUpperCase();

  const priceText =
  (listing.priceText && String(listing.priceText).trim()) ||
  formatPrice(listing.price, listing.currency || "£");

  const hero = listing.heroImage?.trim();
  const fallbackHero =
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
        <rect width="100%" height="100%" fill="#f3f4f6"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="20">
          No image
        </text>
      </svg>`
    );

  return (
    <Link
      to={`/listing/${listing.id}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-[1px]"
      aria-label={title ? `Open listing: ${title}` : "Open listing"}
    >
      {/* Image */}
      <div className="relative">
        <div className="aspect-[16/10] overflow-hidden rounded-t-2xl bg-gray-100">
          <img
            src={hero || fallbackHero}
            alt={title || "Listing image"}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        {/* Badge */}
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold text-white ${badgeClass} uppercase tracking-widest shadow-sm`}
        >
          {badgeText}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Location */}
        {location ? (
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-green">
            {location}
          </p>
        ) : (
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-green">
            &nbsp;
          </p>
        )}

        {/* Title */}
        <h3 className="mt-2 text-xl md:text-2xl font-black uppercase tracking-tight leading-snug text-black">
          {title}
        </h3>

        {/* Meta */}
        {meta ? (
          <p className="mt-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
            {meta}
          </p>
        ) : null}

        <div className="mt-6 pt-5 border-t border-gray-100 flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
              {status === "wanted" ? "Request" : "Sale price"}
            </p>

            <p className="text-2xl font-black text-black">
              {status === "wanted" ? "Get in touch" : (priceText || "POA")}
            </p>
          </div>

          {/* Arrow (grey → green on hover) */}
          <div className="shrink-0">
            <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center transition-colors group-hover:bg-brand-green shadow-sm">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-gray-500 transition-colors group-hover:text-white"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M13 6l6 6-6 6"
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
    </Link>
  );
};

export default AdvertTile;
