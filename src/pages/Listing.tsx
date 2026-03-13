import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { listings, type Listing as ListingType, type MediaImage } from "../data/listings";
import ImageLightbox from "../components/ImageLightbox";

const badgeClass = (status: ListingType["status"]) =>
  status === "wanted"
    ? "bg-brand-gold text-white"
    : status === "sold"
      ? "bg-red-600 text-white"
      : "bg-brand-green text-white";

const badgeText = (status: ListingType["status"]) =>
  status === "wanted" ? "Wanted" : status === "sold" ? "Sold" : "For sale";

const formatPhoneLabel = (phone: string) => {
  const p = String(phone || "").trim();
  if (!p) return "";
  if (p.startsWith("07")) return p;
  if (p.startsWith("+44")) return p.replace("+44", "+44 ");
  return p;
};

const PORTAL_URL = "https://portal.farmcash.online/";

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

    // Ensure hero is included first, even if gallery exists
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
    features,
    specs,
    notes,
    ctas,
    status,
  } = listing;

  const isWanted = status === "wanted";
  const isSold = status === "sold";

  const safeCtas = {
    whatsappUrl: ctas?.whatsappUrl ?? "https://wa.me/447393138063",
    phoneNumber: ctas?.phoneNumber ?? "07393138063",
    financeQuoteUrl:
      ctas?.financeQuoteUrl ??
      "https://www.cognitoforms.com/FarmCashLtd/AgriculturalMachineryImportFinanceRequest",
    brochureUrl: ctas?.brochureUrl ?? "",
    portalUrl: ctas?.portalUrl ?? PORTAL_URL,
  };

  const detailThumbs = allImages;

  const priceLabel = isSold ? "Status" : isWanted ? "Budget" : "Price";
  const priceValue = isSold ? "SOLD" : priceText ?? (isWanted ? "Wanted" : "POA");

  const sidebarTitle = isSold ? "This machine has been sold" : isWanted ? "Help us source this" : "Secure this asset";
  const sidebarDescription = isSold
    ? "FarmCash regularly sources similar machinery across the UK and EU. Contact us to discuss current availability."
    : null;
  const whatsappLabel = isSold
    ? "WhatsApp about similar machines"
    : isWanted
      ? "WhatsApp details"
      : "WhatsApp seller";
  const callLabel = isSold
    ? "Call 07393 138063"
    : isWanted
      ? "Call FarmCash"
      : `Call ${formatPhoneLabel(safeCtas.phoneNumber)}`;

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

              {isSold ? (
                <div className="absolute bottom-6 left-6 bg-black/60 text-white px-5 py-3 rounded-lg text-sm">
                  <p className="font-bold">SOLD</p>
                  <p>This machine has now been sold.</p>
                  <p>Similar machines available through FarmCash.</p>
                </div>
              ) : null}

              {/* Title/subtitle overlay */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                <div className="inline-block max-w-full bg-black/35 backdrop-blur-[1px] rounded-2xl px-4 md:px-5 py-3 md:py-4">
                  <h2 className="text-white text-2xl md:text-5xl font-black uppercase tracking-tight leading-tight break-words max-w-full drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    {String(title || "").toUpperCase()}
                  </h2>

                  {subtitle ? (
                    <p className="mt-2 text-white/95 text-sm md:text-xl font-semibold tracking-wide break-words max-w-full drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                      {subtitle}
                    </p>
                  ) : null}
                </div>
              </div>
            </button>

            <div className="p-6 md:p-8">
              {serialRef ? (
                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
                  Serial ref: {serialRef}
                </p>
              ) : null}

              {/* Title + meta + price/budget */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 min-w-0">
                <div className="min-w-0">
                  <h1 className="text-3xl md:text-4xl font-black leading-none uppercase tracking-tight text-neutral-900 break-words">
                    {subtitle ? String(subtitle).toUpperCase() : "ADVERT DETAILS"}
                  </h1>

                  {isSold ? (
                    <p className="mt-2 text-xs text-gray-500 uppercase tracking-wide">Recently sold by FarmCash</p>
                  ) : null}

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.15em] text-gray-500 font-bold">
                    {year ? <span>Year: {year}</span> : null}
                    {width ? <span>Width: {width}</span> : null}
                    {location ? <span>{location}</span> : null}
                  </div>
                </div>

                <div className="text-left md:text-right w-full md:w-auto">
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{priceLabel}</p>
                  <p
                    className={`break-words ${
                      isSold ? "text-red-600 font-bold text-3xl" : "text-4xl font-black text-neutral-900"
                    }`}
                  >
                    {priceValue}
                  </p>
                </div>
              </div>

              {/* Technical Description */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-100">
                <h4 className="font-bold text-neutral-900 mb-4 uppercase text-xs tracking-widest border-b pb-2">
                  {isWanted ? "Wanted description" : "Technical description"}
                </h4>
                {description ? (
                  <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                    {description
                      .split(/\n\s*\n/)
                      .map((paragraph) => paragraph.trim())
                      .filter(Boolean)
                      .map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                  </div>
                ) : (
                  <p className="text-gray-700 leading-relaxed text-sm">Details coming soon.</p>
                )}
              </div>

              {!isWanted && features && features.length > 0 ? (
                <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                  <h4 className="font-bold text-neutral-900 mb-4 uppercase text-xs tracking-widest border-b pb-2">
                    Key features
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 mb-4">
                    {features.map((feature, idx) => (
                      <li key={idx} className="break-words">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold text-neutral-900">Price: {priceValue}</p>
                </div>
              ) : null}

              {/* Technical specs */}
              {specs && specs.length > 0 ? (
                <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200 overflow-hidden">
                  <h4 className="font-bold text-neutral-900 mb-4 uppercase text-xs tracking-widest border-b pb-2">
                    Technical specs
                  </h4>

                  <div className="space-y-3">
                    {specs.map((row) => (
                      <div
                        key={row.label}
                        className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-6 border-b border-gray-100 pb-2"
                      >
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 break-words">
                          {row.label}
                        </span>
                        <span className="text-sm font-bold text-neutral-900 sm:text-right break-words">
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
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6 min-w-0">
          {/* Detailed images */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 min-w-0">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-neutral-900 uppercase tracking-widest text-xs">
                Detailed images
              </h4>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
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

          {/* CTA box */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h4 className="font-bold text-neutral-900 mb-4 uppercase tracking-widest text-xs">
              {sidebarTitle}
            </h4>

            {sidebarDescription ? (
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{sidebarDescription}</p>
            ) : null}

            <div className="space-y-3">
              {!isSold ? (
                <a
                  href={safeCtas.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-brand-black text-brand-black hover:bg-gray-50 font-bold py-3 rounded-xl transition-all text-sm uppercase tracking-widest block text-center"
                >
                  View on portal
                </a>
              ) : null}

              <a
                href={safeCtas.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-green hover:opacity-90 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
              >
                {whatsappLabel}
              </a>

              <a
                href={`tel:${isSold ? "07393138063" : safeCtas.phoneNumber}`}
                className="w-full bg-brand-black hover:opacity-90 text-white font-bold py-3 rounded-xl transition-all block text-center shadow-md"
              >
                {callLabel}
              </a>

              {isSold ? (
                <a
                  href={safeCtas.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-brand-black text-brand-black hover:bg-gray-50 font-bold py-3 rounded-xl transition-all text-sm uppercase tracking-widest block text-center"
                >
                  Request machine sourcing
                </a>
              ) : null}

              {/* Finance quote CTA: hide for Wanted by default */}
              {!isSold && !isWanted && safeCtas.financeQuoteUrl ? (
                <a
                  href={safeCtas.financeQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-brand-black text-brand-black hover:bg-gray-50 font-bold py-3 rounded-xl transition-all text-sm uppercase tracking-widest block text-center"
                >
                  Request finance quote
                </a>
              ) : null}

              {/* Brochure CTA (sales listings typically) */}
              {!isSold && safeCtas.brochureUrl ? (
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

            {isWanted ? (
              <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                Have a suitable machine? Send photos, spec, price and location via WhatsApp or the portal.
              </p>
            ) : null}
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
