import React from "react";
import { Link } from "react-router-dom";
import { listingPillBaseClass, listingPillToneClass } from "./listingPillStyles";
import { getVatDisplayPrice } from "../utils/priceDisplay";
import type { ListingCategoryTag, ListingHighlight, ListingStatus, ListingType } from "../data/listings";

type AdvertTileListing = {
  id: string;
  listingType: ListingType;
  status: ListingStatus;
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
  highlights?: ListingHighlight[];
  category?: ListingCategoryTag;
  galleryCount?: number;
};

const STRUCTURAL_PILL_LABELS: Partial<Record<ListingStatus | "new-in", string>> = {
  sold: "SOLD",
  reserved: "RESERVED",
  "new-in": "NEW IN",
};

const HIGHLIGHT_PILL_LABELS: Record<ListingHighlight, string> = {
  "12-row": "12 ROW",
  "16-row": "16 ROW",
  "low-hours": "LOW HOURS",
  vintage: "VINTAGE",
  "pro-spec": "PRO SPEC",
};

const CATEGORY_PILL_LABELS: Record<ListingCategoryTag, string> = {
  "forager-header": "FORAGER HEADER",
  "front-weights": "FRONT WEIGHTS",
  "self-propelled-sprayer": "SELF PROPELLED",
  "maize-drill": "MAIZE DRILL",
  tractor: "TRACTOR",
  "rotary-rake": "ROTARY RAKE",
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

const getListingPills = (listing: AdvertTileListing) => {
  const pills: { label: string; tone: keyof typeof listingPillToneClass }[] = [];
  const isNewIn =
    !!listing.createdAt &&
    (new Date().getTime() - new Date(listing.createdAt).getTime()) / (1000 * 60 * 60 * 24) <= 7;

  if (listing.status !== "available") {
    pills.push({ label: STRUCTURAL_PILL_LABELS[listing.status] || String(listing.status).toUpperCase(), tone: "sold" });
  } else if (isNewIn) {
    pills.push({ label: STRUCTURAL_PILL_LABELS["new-in"]!, tone: "newIn" });
  }

  const highlight = listing.highlights?.[0];
  if (highlight && pills.length < 2) {
    pills.push({ label: HIGHLIGHT_PILL_LABELS[highlight], tone: "default" });
  }

  if (listing.category && pills.length < 2) {
    const categoryLabel = CATEGORY_PILL_LABELS[listing.category];
    const alreadyHasCategory = pills.some((pill) => pill.label === categoryLabel);
    if (!alreadyHasCategory) {
      pills.push({ label: categoryLabel, tone: "default" });
    }
  }

  return pills.slice(0, 2);
};

type Props = {
  listing: AdvertTileListing;
};

const AdvertTile: React.FC<Props> = ({ listing }) => {
  const isSoldListing = listing.status === "sold";
  const isWantedListing = listing.listingType === "wanted";
  const title = (listing.title || "").trim();
  const year = formatYear(listing.year);
  const hoursValue = listing.hours ? `${String(listing.hours).replace(/[^0-9,]/g, "")} hrs` : "";
  const locationValue = listing.location ? String(listing.location).trim() : "";
  const meta = [year, hoursValue, locationValue].filter(Boolean).join(" • ");

  const priceText =
    (listing.priceText && String(listing.priceText).trim()) ||
    formatPrice(listing.price, listing.currency || "£");
  const { primary: pricePrimary, showVat } = getVatDisplayPrice({
    status: listing.listingType,
    value: priceText,
    fallback: isWantedListing ? "Wanted" : "POA",
  });

  const hero = listing.heroImage?.trim();
  const pills = getListingPills(listing);
  const photoCount = Math.max(listing.galleryCount || 0, hero ? 1 : 0);
  const ctaLabel = isWantedListing ? "VIEW REQUEST" : "VIEW LISTING";

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

        <div className="absolute left-3 right-3 top-3 z-10 flex min-h-7 items-start justify-between gap-2">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            {pills.map((pill) => (
              <span key={pill.label} className={`shadow-sm ${listingPillBaseClass} ${listingPillToneClass[pill.tone]}`}>
                {pill.label}
              </span>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10 flex items-center justify-between gap-2">
          {photoCount > 0 ? (
            <div className={`${listingPillBaseClass} ${listingPillToneClass.subtle}`}>
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
            <p className="text-3xl font-bold leading-tight text-gray-900">Wanted</p>
          ) : (
            <div>
              <p className="text-3xl font-bold leading-tight text-gray-900">{pricePrimary}</p>
              {showVat ? <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">+ VAT</p> : null}
            </div>
          )}
        </div>

        <h3 className="mt-2 min-h-[3.5rem] text-lg font-semibold leading-snug text-gray-900">{title}</h3>
        <div className="mt-2 min-h-[1.5rem]">{meta ? <p className="text-sm text-gray-500">{meta}</p> : null}</div>
        <div className="mt-3 min-h-[2rem]" />

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
