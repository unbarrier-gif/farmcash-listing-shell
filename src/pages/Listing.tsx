import React from "react";
import { Link, useParams } from "react-router-dom";
import { listings, type Listing as ListingType } from "../data/listings";
import ListingGallery from "../components/ListingGallery";

const BRAND_GREEN = "#75ac49";
const BRAND_GOLD = "#ca9c29";

const normaliseStatus = (status: ListingType["status"]) =>
  String(status || "").toLowerCase().includes("want") ? "wanted" : "for-sale";

const badgeStyles = (status: "wanted" | "for-sale") => {
  if (status === "wanted") return { bg: BRAND_GOLD, text: "WANTED" };
  return { bg: "#111111", text: "FOR SALE" };
};

const formatPhoneLabel = (phone: string) => {
  const p = String(phone || "").trim();
  if (!p) return "";
  if (p.startsWith("07")) return p;
  if (p.startsWith("+44")) return p.replace("+44", "+44 ");
  return p;
};

const Listing: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const listing = listings.find((l) => l.id === id);

  if (!listing) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <h1 className="text-2xl font-bold text-neutral-900">Advert not found</h1>
          <p className="text-gray-600 mt-2">
            This advert may have been removed or the link is incorrect.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 bg-neutral-900 text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Back to all ads
          </Link>
        </div>
      </div>
    );
  }

  const {
    heroImage,
    title,
    subtitle,
    year,
    location,
    width,
    priceText,
    serialRef,
    description,
    specs,
    notes,
    videoUrl,
    ctas,
    status,
    gallery,
  } = listing;

  const statusNorm = normaliseStatus(status);
  const badge = badgeStyles(statusNorm);

  const safeCtas = {
    whatsappUrl: ctas?.whatsappUrl ?? "https://wa.me/447393138063",
    phoneNumber: ctas?.phoneNumber ?? "07393138063",
    financeQuoteUrl:
      ctas?.financeQuoteUrl ??
      "https://www.cognitoforms.com/FarmCashLtd/AgriculturalMachineryImportFinanceRequest",
    brochureUrl: ctas?.brochureUrl ?? "",
  };

  const metaParts: string[] = [];
  if (year) metaParts.push(String(year));
  if (width) metaParts.push(String(width));
  if (serialRef) metaParts.push(`Serial Ref: ${serialRef}`);
  const metaLine = metaParts.join(" · ");

  const displayTitle = String(title || "").trim();
  const displayLocation = String(location || "").trim();
  const displayPrice = priceText ?? "POA";

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-6">
        <Link to="/" className="text-sm font-bold text-gray-600 hover:text-neutral-900 transition">
          ← Back to all ads
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* MAIN */}
        <div className="lg:col-span-2 space-y-6">
          {/* HERO */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <div className="relative">
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                <img
                  src={heroImage?.src}
                  alt={heroImage?.alt ?? displayTitle ?? "Machinery listing image"}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Badge (matches tile) */}
              <span
                className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white"
                style={{ backgroundColor: badge.bg }}
              >
                {badge.text}
              </span>
            </div>

            {/* HEADER CONTENT */}
            <div className="p-6 md:p-8">
              {/* Location (brand green) */}
              {displayLocation ? (
                <p
                  className="text-sm font-medium uppercase tracking-wide"
                  style={{ color: BRAND_GREEN }}
                >
                  {displayLocation}
                </p>
              ) : null}

              {/* Title (bold black, larger) */}
              <h1 className="mt-1 text-2xl md:text-3xl font-bold leading-snug text-black">
                {displayTitle}
              </h1>

              {/* Optional subtitle (smaller, muted) */}
              {subtitle ? (
                <p className="mt-1 text-base text-gray-600">
                  {subtitle}
                </p>
              ) : null}

              {/* Meta line */}
              {metaLine ? (
                <p className="mt-3 text-sm text-gray-500">
                  {metaLine}
                </p>
              ) : null}

              <hr className="my-6 border-gray-100" />

              {/* Price row (matches tile language) */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    {statusNorm === "wanted" ? "Request" : "Sale price"}
                  </p>
                  <p className="mt-1 text-3xl font-bold text-black">
                    {statusNorm === "wanted" ? "Get in touch" : displayPrice}
                  </p>
                </div>

                {/* Quick action: WhatsApp */}
                <div className="flex gap-3">
                  <a
                    href={safeCtas.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#75ac49] hover:opacity-90 text-white font-bold px-5 py-3 rounded-xl transition-all shadow-sm"
                  >
                    WhatsApp
                  </a>

                  <a
                    href={`tel:${safeCtas.phoneNumber}`}
                    className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold px-5 py-3 rounded-xl transition-all shadow-sm"
                  >
                    Call {formatPhoneLabel(safeCtas.phoneNumber)}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          {description ? (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900">
                  Description
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
              </div>
            </div>
          ) : null}

          {/* KEY SPECS */}
          {specs && specs.length > 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900">
                  Key specs
                </h3>
              </div>
              <div className="p-6 space-y-3">
                {specs.map((row) => (
                  <div key={row.label} className="flex justify-between gap-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
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

          {/* NOTES */}
          {notes && notes.length > 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900">
                  Notes
                </h3>
              </div>
              <div className="p-6">
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                  {notes.map((n, idx) => (
                    <li key={idx}>{n}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}

          {/* VIDEO */}
          {videoUrl ? (
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900">
                  Video
                </h3>
              </div>
              <video controls className="w-full" preload="metadata">
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
          ) : null}
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          <ListingGallery images={gallery?.length ? gallery : [heroImage]} videoUrl={videoUrl} />

          {/* Enquire card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-4">
              Enquire
            </h3>

            <div className="space-y-3">
              <a
                href={safeCtas.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#75ac49] hover:opacity-90 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                WhatsApp seller
              </a>

              <a
                href={`tel:${safeCtas.phoneNumber}`}
                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3 rounded-xl transition-all block text-center shadow-sm"
              >
                Call {formatPhoneLabel(safeCtas.phoneNumber)}
              </a>

              {safeCtas.financeQuoteUrl ? (
                <a
                  href={safeCtas.financeQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-gray-300 text-neutral-900 hover:bg-gray-50 font-bold py-3 rounded-xl transition-all text-sm uppercase tracking-widest block text-center"
                >
                  Request finance quote
                </a>
              ) : null}

              {safeCtas.brochureUrl ? (
                <a
                  href={safeCtas.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#75ac49] text-white font-bold py-3 rounded-xl transition-all block text-center shadow-sm hover:opacity-90"
                >
                  Download brochure
                </a>
              ) : null}
            </div>
          </div>

          <p className="text-xs text-gray-400">
            Listing ID: <span className="font-mono">{id}</span>
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Listing;
