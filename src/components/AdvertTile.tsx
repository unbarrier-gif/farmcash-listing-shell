import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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

const BRAND_GREEN = "#75ac49";
const BRAND_GOLD = "#ca9c29";

const normaliseStatus = (status?: ListingStatus) => {
  const s = String(status || "").toLowerCase().trim();
  if (s.includes("want")) return "wanted";
  return "for-sale";
};

const formatPrice = (price?: number | string, currency = "£") => {
  if (price === undefined || price === null || price === "") return "";
  const raw = typeof price === "number" ? price : Number(String(price).replace(/[^0-9.]/g, ""));
  if (!Number.isFinite(raw)) return String(price);
  // UK formatting
  return `${currency}${raw.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`;
};

const formatYear = (year?: number | string) => {
  if (year === undefined || year === null || year === "") return "";
  return String(year).trim();
};

const buildSpec = (l: AdvertTileListing) => {
  // Prefer a curated summary if you’ve provided one
  if (l.specSummary && String(l.specSummary).trim()) return String(l.specSummary).trim();

  // Otherwise build from common fields (use whatever exists)
  const parts: string[] = [];

  // Working width / width
  const ww = l.workingWidth ?? l.width;
  if (ww !== undefined && ww !== null && String(ww).trim()) {
    const v = String(ww).trim();
    parts.push(v.toLowerCase().includes("m") ? v : `${v}m`);
  }

  // Rows
  if (l.rows !== undefined && l.rows !== null && String(l.rows).trim()) {
    parts.push(String(l.rows).trim().toLowerCase().includes("row") ? String(l.rows).trim() : `${String(l.rows).trim()}-row`);
  }

  // Hours
  if (l.hours !== undefined && l.hours !== null && String(l.hours).trim()) {
    const v = String(l.hours).trim();
    parts.push(v.toLowerCase().includes("h") ? v : `${v}h`);
  }

  // Detail (last resort)
  if (l.detail && String(l.detail).trim()) parts.push(String(l.detail).trim());

  return parts.join(" · ");
};

const badgeStyles = (status: "wanted" | "for-sale") => {
  if (status === "wanted") return { bg: BRAND_GOLD, text: "WANTED" };
  return { bg: "#111111", text: "FOR SALE" };
};

type Props = {
  listing: AdvertTileListing;
};

const AdvertTile: React.FC<Props> = ({ listing }) => {
  const status = normaliseStatus(listing.status);
  const badge = badgeStyles(status);

  const location = (listing.location || "").trim();
  const title = (listing.title || "").trim();

  const year = formatYear(listing.year);
  const spec = buildSpec(listing);

  const meta = [year, spec].filter(Boolean).join(" · ");

  const priceText = formatPrice(listing.price, listing.currency || "£");

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
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
      aria-label={title ? `Open listing: ${title}` : "Open listing"}
    >
      {/* Image */}
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden rounded-t-2xl bg-gray-100">
          <img
            src={hero || fallbackHero}
            alt={title || "Listing image"}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Badge */}
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: badge.bg }}
        >
          {badge.text}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        {location ? (
          <p className="text-sm font-medium uppercase tracking-wide" style={{ color: BRAND_GREEN }}>
            {location}
          </p>
        ) : null}

        {/* Title */}
        <h3 className="mt-1 text-lg font-bold leading-snug text-black">
          {title}
        </h3>

        {/* Meta */}
        {meta ? (
          <p className="mt-1 text-sm text-gray-500">
            {meta}
          </p>
        ) : null}

        <hr className="my-4 border-gray-100" />

        {/* Price row */}
        <div className="flex items-end gap-4">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wide text-gray-400">
              {status === "wanted" ? "Request" : "Sale price"}
            </p>

            <p className="mt-1 text-lg font-bold text-black">
              {status === "wanted" ? "Get in touch" : (priceText || "POA
