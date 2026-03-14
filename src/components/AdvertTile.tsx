import React from "react";
import { Link } from "react-router-dom";
import { listingPillBaseClass, listingPillToneClass } from "./listingPillStyles";

type ListingStatus = "for-sale" | "wanted" | "sale" | "for_sale" | "for sale" | string;

export type AdvertTileListing = {
  id: string;
  status?: ListingStatus;
  country?: "UK" | "Germany" | "Netherlands";
  title: string;
  location?: string;
  heroImage?: string;
  priceText?: string;
  price?: number | string;
  currency?: string;
  year?: number | string;
  createdAt?: string;
  hours?: number | string;
  highlight?: string;
  quickSpec?: string;
  buyerSignal?: string;
  machineType?: string;
  galleryCount?: number;
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

type Props = {
  listing: AdvertTileListing;
};

const AdvertTile: React.FC<Props> = ({ listing }) => {
  const status = normaliseStatus(listing.status);
  const isSoldListing = String(listing.status || "").toLowerCase().trim() === "sold";

  const badgeText = isSoldListing ? "SOLD" : status === "wanted" ? "WANTED" : "FOR SALE";
  const badgeClass = isSoldListing
    ? listingPillToneClass.sold
    : status === "wanted"
      ? listingPillToneClass.wanted
      : listingPillToneClass.dark;

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
    (new Date().getTime() - new Date(listing.createdAt).getTime()) / (1000 * 60 * 60 * 24) <= 14;

  const photoCount = Math.max(listing.galleryCount || 0, hero ? 1 : 0);
  const viewLabel = photoCount > 0 ? `${photoCount} ${photoCount === 1 ? "photo" : "photos"}` : "View";

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
      className="group flex flex-col h-full bg-white rounded-xl shadow-sm transition transform hover:-translate-y-1 hover:shadow-lg border border-gray-200 overflow-hidden"
      aria-label={title ? `Open listing: ${title}` : "Open listing"}
    >
      <div className={`relative overflow-hidden rounded-xl bg-gray-100 ${isSoldListing ? "ring-2 ring-red-500/30" : ""}`}>
        <img
          src={hero || fallbackHero}
          alt={title || "Listing image"}
          className={`w-full h-48 object-cover object-center transition-transform duration-300 hover:scale-105 ${isSoldListing ? "grayscale-[30%] brightness-[0.95]" : ""}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-transparent" />

        {isNewListing ? (
          <div className={`absolute top-3 left-3 z-10 shadow ${listingPillBaseClass} ${listingPillToneClass.success}`}>
            NEW LISTING
          </div>
        ) : null}

        <div className="absolute top-3 left-1/2 z-10 flex max-w-[calc(100%-1.5rem)] -translate-x-1/2 items-start gap-2">
          {listing.machineType ? (
            <div className={`shadow ${listingPillBaseClass} ${listingPillToneClass.neutral} max-w-[11.5rem] truncate`}>
              {listing.machineType}
            </div>
          ) : null}

          <span className={`shadow-sm ${listingPillBaseClass} ${badgeClass} shrink-0`}>
            {badgeText}
          </span>
        </div>

        {photoCount > 0 ? (
          <div className={`absolute bottom-3 left-3 z-10 ${listingPillBaseClass} ${listingPillToneClass.mutedDark}`}>
            {photoCount} photos
          </div>
        ) : null}
      </div>

      <div className="flex flex-col flex-grow p-5 sm:p-6">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {status === "wanted" ? "Request" : "Sale price"}
        </p>

        <div className="min-h-[2rem]">
          {isSoldListing ? (
            <p className="text-2xl text-red-600 font-semibold">SOLD</p>
          ) : (
            <p className="text-2xl font-bold text-gray-900">{status === "wanted" ? "Get in touch" : (priceText || "POA")}</p>
          )}
        </div>

        <h3 className="mt-2 min-h-[3.5rem] text-lg font-semibold leading-snug text-gray-900">{title}</h3>

        <div className="mt-3 min-h-[1.5rem]">
          {meta ? <p className="text-sm text-gray-500">{meta}</p> : null}
        </div>

        <div className="mt-4 min-h-[5.25rem] flex flex-col gap-2.5">
          {listing.highlight ? (
            <div>
              <p className={`${listingPillBaseClass} ${listingPillToneClass.highlight} max-w-full whitespace-normal leading-tight [overflow-wrap:anywhere]`}>
                {listing.highlight}
              </p>
            </div>
          ) : null}

          {listing.quickSpec ? (
            <p className="text-xs font-bold text-gray-800 uppercase tracking-wider leading-relaxed [overflow-wrap:anywhere]">
              {listing.quickSpec}
            </p>
          ) : null}

          {listing.buyerSignal ? <p className="detail-secondary-line">{listing.buyerSignal}</p> : null}
        </div>

        <div className="mt-auto pt-6">
          <span className="inline-flex w-fit max-w-full items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-green px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white transition-colors duration-150 group-hover:bg-brand-black group-focus-visible:bg-brand-black group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-brand-green group-active:bg-brand-green/90 sm:px-3.5 sm:py-2 sm:text-xs">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-3.5 w-3.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 7h3l2-2h4l2 2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            <span className="truncate">{viewLabel}</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AdvertTile;
