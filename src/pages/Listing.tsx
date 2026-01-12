// src/pages/Listing.tsx
import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { listings, type Listing as ListingType, type MediaImage } from "../data/listings";
import ImageLightbox from "../components/ImageLightbox";

const badgeClass = (status: ListingType["status"]) =>
  status === "wanted" ? "bg-brand-gold text-white" : "bg-brand-green text-white";

const badgeText = (status: ListingType["status"]) => (status === "wanted" ? "Wanted" : "For sale");

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

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<MediaImage | null>(null);

  const openLightbox = (img: MediaImage) => {
    setActiveImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveImage(null);
  };

  const allImages = useMemo(() => {
    if (!listing) return [];
    const hero = listing.heroImage;
    const imgs = (listing.gallery?.length ? listing.gallery : [hero]).filter(Boolean);

    // Ensure hero is included (first) even if gallery exists but doesn’t include it
    const dedup = [hero, ...imgs].filter(
      (img, idx, arr) => arr.findIndex((x) => x.src === img.src) === idx
    );

    return dedup;
  }, [listing]);

  if (!listing) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <h1 className="text-2xl font-bold text-neutral-900">Advert not found</h1>
          <p className="text-gray-600 mt-2">This advert may have been removed or the link is incorrect.</p>
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
  } = listing;

  const safeCtas = {
    whatsappUrl: ctas?.whatsappUrl ?? "https://wa.me/447393138063",
    phoneNumber: ctas?.phoneNumber ?? "07393138063",
    financeQuoteUrl:
      ctas?.financeQuoteUrl ??
      "https://www.cognitoforms.com/FarmCashLtd/AgriculturalMachineryImportFinanceRequest",
    brochureUrl: ctas?.brochureUrl ?? "",
  };

  const detailThumbs = allImages;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 overflow-x-hidden">
      <ImageLightbox open={lightboxOpen} image={activeImage} onClose={closeLightbox} />

      <div className="mb-6">
        <Link to="/" className="text-sm font-bold text-gray-600 hover:text-neutral-900 transition">
          ← Back to all ads
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* MAIN */}
        <div className="lg:col-span-2 space-y-6 min-w-0">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            {/* HERO (clickable) */}
            <button
              type="button"
              onClick={() => openLightbox(heroImage)}
              className="relative aspect-[16/10] bg-gray-200 w-full text-left"
              aria-label="Open hero image"
            >
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Dark gradient to make white text readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Badge */}
              <div
                className={[
                  "absolute top-4 left-4 px-4 py-1.5 rounded-full font-bold text-[10px] shadow-md uppercase tracking-widest",
                  badgeClass(status),
                ].join(" ")}
              >
                {badgeText(status)}
              </div>

              {/* White title/subtitle overlay */}
              <div className="absolute bottom-6 left-6 right-6 min-w-0">
                <div className="inline-block bg-black/35 backdrop-blur-[1px] rounded-2xl px-5 py-4 max-w-full min-w-0">
                  <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight break-words max-w-full drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    {String(title || "").toUpperCase()}
                  </h2>

                  {subtitle ? (
                    <p className="mt-2 text-white/95 text-base md:text-xl font-semibold tracking-wide break-words max-w-full drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                      {subtitle}
                    </p>
                  ) : null}
                </div>
              </div>
            </button>

            <div className="p-6 md:p-8 min-w-0">
              {serialRef ? (
                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-2 break-words">
                  Serial ref: {serialRef}
                </p>
              ) : null}

              {/* Title + meta + price */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 min-w-0">
                <div className="min-w-0">
                  <h1 className="text-3xl md:text-4xl font-black leading-none uppercase tracking-tight text-neutral-900 break-words">
                    {subtitle ? String(subtitle).toUpperCase() : "ADVERT DETAILS"}
                  </h1>

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.15em] text-gray-500 font-bold">
                    {year ? <span className="break-words">Year: {year}</span> : null}
                    {width ? <span className="break-words">Width: {width}</span> : null}
                    {location ? <span className="break-words">{location}</span> : null}
                  </div>
                </div>

                <div className="text-right w-full md:w-auto shrink-0">
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Price</p>
                  <p className="text-4xl font-black text-neutral-900 break-words">{priceText ?? "POA"}</p>
                </div>
              </div>

              {/* Technical Description */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                <h4 className="font-bold text-neutral-900 mb-2 uppercase text-xs tracking-widest border-b pb-2">
                  Technical description
                </h4>
                <p className="text-gray-700 leading-relaxed text-sm break-words">
                  {description ? description : "Details coming soon."}
                </p>
              </div>

              {/* Technical specs */}
              {specs && specs.length > 0 ? (
                <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200 min-w-0">
                  <h4 className="font-bold text-neutral-900 mb-4 uppercase text-xs tracking-widest border-b pb-2">
                    Technical specs
                  </h4>

                  <div className="space-y-3">
                    {specs.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-start justify-between gap-6 border-b border-gray-100 pb-2 min-w-0"
                      >
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 break-words min-w-0 pr-2">
                          {row.label}
                        </span>
                        <span className="text-sm font-bold text-neutral-900 text-right break-words min-w-0">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {notes && notes.length > 0 ? (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-neutral-900 mb-2 uppercase text-xs tracking-widest border-b pb-2">
                    Notes
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                    {notes.map((n, idx) => (
                      <li key={idx} className="break-words">
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>

          {videoUrl ? (
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <div className="p-6 border-b border-gray-100">
                <h4 className="font-bold text-neutral-900 uppercase tracking-widest text-xs">Video</h4>
              </div>
              <video controls className="w-full" preload="metadata">
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
          ) : null}
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6 min-w-0">
          {/* Detailed images */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 min-w-0">
            <div className="flex items-center justify-between mb-4 min-w-0">
              <h4 className="font-bold text-neutral-900 uppercase tracking-widest text-xs">Detailed images</h4>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest shrink-0">
                {detailThumbs.length}/{allImages.length}
              </span>
            </div>

            <div className="max-h-[420px] overflow-auto pr-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
                {detailThumbs.map((img) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => openLightbox(img)}
                    className="aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:opacity-95 transition"
                    aria-label={`Open image: ${img.alt || "Image"}`}
                  >
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
              {allImages.length} high resolution images available
            </p>
          </div>

          {/* Secure this asset */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h4 className="font-bold text-neutral-900 mb-4 uppercase tracking-widest text-xs">Secure this asset</h4>

            <div className="space-y-3">
              <a
                href={safeCtas.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-green hover:opacity-90 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
              >
                WhatsApp seller
              </a>

              <a
                href={`tel:${safeCtas.phoneNumber}`}
                className="w-full bg-brand-black hover:opacity-90 text-white font-bold py-3 rounded-xl transition-all block text-center shadow-md"
              >
                Call {formatPhoneLabel(safeCtas.phoneNumber)}
              </a>

              {safeCtas.financeQuoteUrl ? (
                <a
                  href={safeCtas.financeQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-brand-black text-brand-black hover:bg-gray-50 font-bold py-3 rounded-xl transition-all text-sm uppercase tracking-widest block text-center"
                >
                  Request finance quote
                </a>
              ) : null}

              {safeCtas.brochureUrl ? (
                <a
                  href={safeCtas.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-green text-white font-bold py-3 rounded-xl transition-all block text-center shadow-md hover:opacity-90"
                >
                  Download brochure
                </a>
              ) : null}
            </div>
          </div>

          <p className="text-xs text-gray-400 break-words">
            Listing ID: <span className="font-mono">{id}</span>
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Listing;
