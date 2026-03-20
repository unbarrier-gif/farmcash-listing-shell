import React from "react";
import { Link } from "react-router-dom";
import { listingPillBaseClass, listingPillToneClass } from "./listingPillStyles";
import { getVatDisplayPrice } from "../utils/priceDisplay";

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
  const isWantedListing = status === "wanted";

  const badgeText = isSoldListing ? "SOLD" : isWantedListing ? "WANTED" : "FOR SALE";
  const badgeClass = isSoldListing
    ? listingPillToneClass.sold
    : isWantedListing
      ? listingPillToneClass.wanted
      : listingPillToneClass.dark;

  const title = (listing.title || "").trim();
  const year = formatYear(listing.year);
  const hoursValue = listing.hours ? `${String(listing.hours).replace(/[^0-9,]/g, "")} hrs` : "";
  const locationValue = listing.location ? String(listing.location).trim() : "";
  const meta = [year, hoursValue, locationValue].filter(Boolean).join(" • ");

  const priceText =
    (listing.priceText && String(listing.priceText).trim()) ||
    formatPrice(listing.price, listing.currency || "£");
  const { primary: pricePrimary, showVat } = getVatDisplayPrice({
    status: listing.status,
    value: priceText,
    fallback: "POA",
  });

  const hero = listing.heroImage?.trim();
  const isNewListing =
    !!listing.createdAt &&
    (new Date().getTime() - new Date(listing.createdAt).getTime()) / (1000 * 60 * 60 * 24) <= 7;

  const photoCount = Math.max(listing.galleryCount || 0, hero ? 1 : 0);
  const ctaLabel = isWantedListing ? "VIEW REQUEST" : "VIEW LISTING";
  const activitySignal = listing.buyerSignal?.trim();
  const secondaryBadges = isWantedListing
    ? ["BUYER WAITING", "ACTIVE SEARCH"]
    : [listing.highlight || "FIELD READY", listing.quickSpec].filter(Boolean);
  const hasSecondaryBadges = secondaryBadges.length > 0;

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
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg active:scale-[0.99] active:ring-2 active:ring-brand-green/30"
      aria-label={title ? `Open listing: ${title}` : "Open listing"}
    >
      <div className={`relative overflow-hidden rounded-t-xl bg-gradient-to-br from-gray-50 via-white to-gray-200 ${isSoldListing ? "ring-2 ring-red-500/30" : ""}`}>
        <img
          src={hero || fallbackHero}
          alt={title || "Listing image"}
          className={`h-48 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 ${isSoldListing ? "grayscale-[30%] brightness-[0.95]" : ""}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/25 transition-opacity duration-300 group-hover:from-black/40 group-hover:to-black/50" />

        <div className="absolute left-3 right-3 top-3 z-10 flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            {listing.machineType ? (
              <div className={`shadow ${listingPillBaseClass} ${listingPillToneClass.neutral} max-w-[9.5rem] truncate`}>
                {listing.machineType}
              </div>
            ) : null}

            {isNewListing ? (
              <div className={`shadow ${listingPillBaseClass} ${listingPillToneClass.success}`}>NEW LISTING</div>
            ) : null}
          </div>

          <span className={`shadow-sm ${listingPillBaseClass} ${badgeClass} shrink-0`}>{badgeText}</span>
        </div>

        <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10 flex items-center justify-between gap-2">
          {photoCount > 0 ? (
            <div className="inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
              📷 {photoCount} {photoCount === 1 ? "PHOTO" : "PHOTOS"}
            </div>
          ) : (
            <span />
          )}

          <span className="hidden translate-y-1 rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 md:inline-flex">
            {ctaLabel} →
          </span>
        </div>
      </div>

      <div className="flex flex-grow flex-col p-5 sm:p-6">
        <div>
          {isSoldListing ? (
            <p className="text-2xl font-semibold text-red-600">SOLD</p>
          ) : isWantedListing ? (
            <p className="text-3xl font-bold leading-tight text-gray-900">Get in touch</p>
          ) : (
            <div>
              <p className="text-3xl font-bold leading-tight text-gray-900">{pricePrimary}</p>
              {showVat ? <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">+ VAT</p> : null}
            </div>
          )}
        </div>

        <h3 className="mt-2 min-h-[3.5rem] text-lg font-semibold leading-snug text-gray-900">{title}</h3>

        <div className="mt-2 min-h-[1.5rem]">
          {meta ? <p className="text-sm text-gray-500">{meta}</p> : null}
        </div>

        {activitySignal ? <p className="mt-1 text-xs font-medium text-gray-500">{activitySignal}</p> : null}

        {hasSecondaryBadges ? (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {secondaryBadges.map((badge) => (
              <span
                key={badge}
                className={`${listingPillBaseClass} ${listingPillToneClass.highlight} max-w-full whitespace-normal leading-tight [overflow-wrap:anywhere]`}
              >
                {badge}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-auto pt-4">
          <span className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-green px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-150 group-hover:bg-brand-black group-focus-visible:bg-brand-black group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-brand-green group-active:bg-brand-green/90">
            <span>{ctaLabel}</span>
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AdvertTile;
