import React from "react";
import { Link } from "react-router-dom";

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
    (new Date().getTime() - new Date(listing.createdAt).getTime()) / (1000 * 60 * 60 * 24) <= 14;

  const photoCount = Math.max(listing.galleryCount || 0, hero ? 1 : 0);
  const viewLabel = photoCount > 0 ? `VIEW ${photoCount} PHOTOS →` : "VIEW LISTING →";

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
          <div className="absolute top-3 left-3 z-10 bg-brand-green text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow uppercase tracking-wider">
            NEW LISTING
          </div>
        ) : null}

        {listing.machineType ? (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 bg-white/90 px-2.5 py-1 rounded-md text-[10px] font-bold shadow uppercase tracking-wider text-gray-700">
            {listing.machineType}
          </div>
        ) : null}

        <span
          className={`absolute top-3 right-3 z-10 shadow-sm ${
            isSoldListing
              ? badgeClass
              : `rounded-full px-3 py-1 text-[10px] font-bold text-white ${badgeClass} uppercase tracking-widest`
          }`}
        >
          {badgeText}
        </span>

        {photoCount > 0 ? (
          <div className="absolute bottom-3 left-3 z-10 bg-black/70 text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
            {photoCount} photos
          </div>
        ) : null}
      </div>

      <div className="flex flex-col flex-grow p-5">
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

        <h3 className="mt-1 min-h-[3.5rem] text-lg font-semibold leading-snug text-gray-900">{title}</h3>

        <div className="mt-2 min-h-[1.5rem]">
          {meta ? <p className="text-sm text-gray-500">{meta}</p> : null}
        </div>

        <div className="mt-3 min-h-[4.5rem] space-y-1">
          {listing.highlight ? (
            <p className="inline-flex bg-amber-100 text-amber-900 border border-amber-300 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
              {listing.highlight}
            </p>
          ) : null}

          {listing.quickSpec ? (
            <p className="text-xs font-bold text-gray-800 uppercase tracking-wider">{listing.quickSpec}</p>
          ) : null}

          {listing.buyerSignal ? (
            <p className="text-xs text-brand-green font-bold uppercase tracking-wide">{listing.buyerSignal}</p>
          ) : null}
        </div>

        <div className="mt-auto pt-5">
          <span className="text-xs font-black tracking-wide text-brand-green group-hover:underline">
            {viewLabel}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AdvertTile;
