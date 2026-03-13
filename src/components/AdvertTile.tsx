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
  country?: "UK" | "Germany" | "Netherlands";

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
  createdAt?: string;

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

const flagMap = {
  UK: "🇬🇧",
  Germany: "🇩🇪",
  Netherlands: "🇳🇱",
} as const;

const AdvertTile: React.FC<Props> = ({ listing }) => {
  const status = normaliseStatus(listing.status);
  const isSoldListing = String(listing.status || "").toLowerCase().trim() === "sold";

  const badgeText = isSoldListing ? "SOLD" : status === "wanted" ? "WANTED" : "FOR SALE";
  const badgeClass = isSoldListing
    ? "bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide"
    : status === "wanted"
      ? "bg-brand-gold"
      : "bg-brand-black";

  const title = (listing.title || "").trim();

  const year = formatYear(listing.year);
  const hoursValue = listing.hours ? `${String(listing.hours).replace(/[^0-9,]/g, "")} hrs` : "";
  const locationValue = listing.location ? String(listing.location).trim() : "";
  const meta = [year, hoursValue, locationValue].filter(Boolean).join(" · ");

  const priceText =
    (listing.priceText && String(listing.priceText).trim()) ||
    formatPrice(listing.price, listing.currency || "£");

  const hero = listing.heroImage?.trim();
  const isNewListing =
    !!listing.createdAt &&
    (new Date().getTime() - new Date(listing.createdAt).getTime()) / (1000 * 60 * 60 * 24) <= 7;

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
      className="group relative block h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-[1px]"
      aria-label={title ? `Open listing: ${title}` : "Open listing"}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-xl bg-gray-100 ${isSoldListing ? "ring-2 ring-red-500/30" : ""}`}
      >
          <img
            src={hero || fallbackHero}
            alt={title || "Listing image"}
            className={`w-full h-48 object-cover object-center transition-transform duration-300 hover:scale-105 ${isSoldListing ? "grayscale-[30%] brightness-[0.95]" : ""}`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-transparent"></div>
          {isSoldListing ? (
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent"></div>
          ) : null}

          {isNewListing && (
            <div className="absolute bottom-3 left-3 z-10 bg-brand-green text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
              NEW LISTING
            </div>
          )}

        {/* Badge */}
        <span
          className={`absolute top-3 right-3 z-10 shadow-sm ${
            isSoldListing
              ? badgeClass
              : `rounded-full px-3 py-1 text-[10px] font-bold text-white ${badgeClass} uppercase tracking-widest`
          }`}
        >
          {badgeText}
        </span>

        {listing.country ? (
          <div className="absolute top-3 left-3 z-10 bg-white/90 px-2 py-1 rounded-md text-sm font-medium shadow">
            {flagMap[listing.country]} {listing.country}
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="p-6 pb-20">
        {/* Price / Request */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {status === "wanted" ? "Request" : "Sale price"}
          </p>

          {isSoldListing ? (
            <>
              <p className="text-2xl text-red-600 font-semibold">SOLD</p>
              <p className="text-xs text-gray-500 mt-1">Similar machines available</p>
            </>
          ) : (
            <p className="text-2xl font-bold text-gray-900">
              {status === "wanted" ? "Get in touch" : (priceText || "POA")}
            </p>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-3 text-lg font-semibold text-gray-900">
          {title}
        </h3>

        {/* Meta */}
        {meta ? (
          <p className="mt-3 text-xs font-bold text-gray-500 tracking-wide">
            {meta}
          </p>
        ) : null}
      </div>

      {/* Arrow CTA — pinned bottom-right */}
      <div className="absolute bottom-6 right-6">
        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center transition-colors group-hover:bg-brand-green shadow-sm">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-gray-500 transition-colors group-hover:text-white"
            fill="none"
            aria-hidden="true"
          >
            <path d="M5 12h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
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
    </Link>
  );
};

export default AdvertTile;
