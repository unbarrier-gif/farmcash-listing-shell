import React from "react";
import { Link } from "react-router-dom";
import type { Listing } from "../data/listings";

const styleFor = (status: Listing["status"]) => {
  if (status === "for-sale") {
    return {
      border: "border-[#75ac49]",
      badge: "bg-[#75ac49] text-white",
      label: "FOR SALE",
    };
  }
  return {
    border: "border-[#ca9c29]",
    badge: "bg-[#ca9c29] text-white",
    label: "WANTED",
  };
};

export default function AdvertTile({ listing }: { listing: Listing }) {
  const s = styleFor(listing.status);

  return (
    <Link
      to={`/listing/${listing.id}`}
      className={[
        "group block overflow-hidden rounded-2xl border-2 bg-white",
        "transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md",
        s.border,
      ].join(" ")}
    >
      <div className="relative aspect-[16/10] bg-neutral-100">
        <img
          src={listing.heroImage.src}
          alt={listing.heroImage.alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />

        <div
          className={[
            "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold tracking-wide",
            s.badge,
          ].join(" ")}
        >
          {s.label}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-bold text-neutral-900 group-hover:underline">
            {listing.title}
          </h3>
          <span className="shrink-0 text-sm font-semibold text-neutral-600">
            {listing.year}
          </span>
        </div>

        <p className="mt-2 text-sm font-semibold text-neutral-900">
          {listing.priceText ?? "Price on enquiry"}
        </p>
      </div>
    </Link>
  );
}
