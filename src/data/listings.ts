import React from "react";
import { Link, useParams } from "react-router-dom";
import { listings } from "../data/listings";

const WHATSAPP_URL = "https://wa.me/447393138063";

function borderColour(status?: string) {
  if (status === "wanted") return "border-[#ca9c29]";
  return "border-[#75ac49]"; // default = for-sale
}

function badgeStyle(status?: string) {
  if (status === "wanted") return "bg-[#ca9c29] text-white";
  return "bg-[#75ac49] text-white";
}

function badgeText(status?: string) {
  if (status === "wanted") return "WANTED";
  return "FOR SALE";
}

export default function Listing() {
  const { slug } = useParams();

  // slug is your listing id (e.g. "ad-3")
  const listing = listings.find((l) => l.id === slug);

  if (!listing) {
    return (
      <main className="max-w-7xl mx-auto px-6 pb-14">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8">
          <h1 className="text-xl font-extrabold text-neutral-900">
            Advert not found
          </h1>
          <p className="mt-2 text-neutral-600">
            This advert may have been removed or the link is incorrect.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold hover:opacity-90 transition"
          >
            Back to all adverts
          </Link>
        </div>
      </main>
    );
  }

  // Optional fields (so this works even if your data evolves)
  const specs = (listing as any).specs as Array<{ label: string; value: string }> | undefined;
  const notes = (listing as any).notes as string[] | undefined;

  // Only show video for Ad 3 (you can later store this in data if you prefer)
  const videoUrl =
    listing.id === "ad-3" ? "/images/ad-3-kemper-490pro-9m.mp4" : undefined;

  // Brochure link (only show button if present)
  const brochureUrl = (listing as any).brochureUrl as string | undefined;

  return (
    <main className="max-w-7xl mx-auto px-6 pb-14">
      {/* Top nav */}
      <div className="pt-6 pb-6 flex items-center justify-between flex-wrap gap-4">
        <Link
          to="/"
          className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 underline underline-offset-4"
        >
          ← Back to all adverts
        </Link>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-full bg-[#75ac49] text-white font-semibold hover:brightness-105 transition shadow-md"
        >
          WhatsApp seller
        </a>
      </div>

      {/* Main layout */}
      <section className="grid gap-8 lg:grid-cols-2">
        {/* Left: hero + video */}
        <div className="space-y-6">
          <div
            className={[
              "overflow-hidden rounded-2xl border-2 bg-white",
              borderColour(listing.status),
            ].join(" ")}
          >
            <div className="relative">
              <img
                src={listing.heroImage.src}
                alt={listing.heroImage.alt}
                className="w-full object-cover"
              />
              <div
                className={[
                  "absolute left-4 top-4 rounded-full px-4 py-2 text-xs font-extrabold tracking-widest",
                  badgeStyle(listing.status),
                ].join(" ")}
              >
                {badgeText(listing.status)}
              </div>
            </div>
          </div>

          {videoUrl ? (
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <div className="p-4 border-b border-neutral-200">
                <h3 className="font-extrabold tracking-widest uppercase text-sm text-neutral-900">
                  Video
                </h3>
                <p className="text-xs text-neutral-600 mt-1">
                  Walkaround clip for this unit.
                </p>
              </div>
              <video
                controls
                className="w-full"
                preload="metadata"
                aria-label={`${listing.title} video`}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : null}
        </div>

        {/* Right: title + price + specs */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h1 className="text-3xl font-extrabold text-neutral-900">
              {listing.title}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-semibold text-neutral-700">
              <span className="px-3 py-1 rounded-full bg-neutral-100">
                Year: {listing.year}
              </span>

              <span className="px-3 py-1 rounded-full bg-neutral-100">
                Price: {listing.priceText ?? "Price on enquiry"}
              </span>
            </div>

            {/* Brochure button (only if link exists) */}
            {brochureUrl ? (
              <a
                href={brochureUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold hover:opacity-90 transition shadow-md"
              >
                Download brochure (PDF)
              </a>
            ) : (
              <p className="mt-6 text-sm text-neutral-600">
                Brochure link not available yet.
              </p>
            )}
          </div>

          {/* Specs card */}
          {specs && specs.length > 0 ? (
            <div
              className={[
                "rounded-2xl border-2 bg-white p-6",
                borderColour(listing.status),
              ].join(" ")}
            >
              <h2 className="text-lg font-extrabold tracking-widest uppercase text-neutral-900">
                Key specs
              </h2>

              <div className="mt-5 space-y-3">
                {specs.map((row, i) => (
                  <div
                    key={`${row.label}-${i}`}
                    className="flex items-start justify-between gap-6 border-b border-neutral-100 pb-3"
                  >
                    <span className="text-xs font-extrabold tracking-widest uppercase text-neutral-600">
                      {row.label}
                    </span>
                    <span className="text-sm font-semibold text-neutral-900 text-right">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* Notes */}
          {notes && notes.length > 0 ? (
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="text-lg font-extrabold tracking-widest uppercase text-neutral-900">
                Notes
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700 list-disc pl-5">
                {notes.map((n, idx) => (
                  <li key={idx}>{n}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* CTA block */}
          <div className="rounded-2xl bg-black text-white p-6">
            <h3 className="text-lg font-extrabold tracking-widest uppercase">
              Enquire
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Message for availability, delivery options, and offers.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-[#75ac49] text-white font-semibold hover:brightness-105 transition shadow-md"
            >
              WhatsApp seller
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
