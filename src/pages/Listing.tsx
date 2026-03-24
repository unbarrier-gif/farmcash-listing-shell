import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { listings, type Listing as ListingType, type ListingHighlight, type ListingCategoryTag, type MediaImage } from "../data/listings";
import ImageLightbox from "../components/ImageLightbox";
import { listingPillBaseClass, listingPillToneClass } from "../components/listingPillStyles";
import { getVatDisplayPrice } from "../utils/priceDisplay";

const badgeClass = (listing: ListingType) =>
  listing.status === "sold" ? listingPillToneClass.sold : listing.listingType === "wanted" ? listingPillToneClass.default : listingPillToneClass.newIn;

const badgeText = (listing: ListingType) =>
  listing.status === "sold" ? "SOLD" : listing.listingType === "wanted" ? "WANTED" : "AVAILABLE";

const HIGHLIGHT_LABELS: Record<ListingHighlight, string> = {
  "12-row": "12 ROW",
  "16-row": "16 ROW",
  "low-hours": "LOW HOURS",
  vintage: "VINTAGE",
  "pro-spec": "PRO SPEC",
};

const CATEGORY_LABELS: Record<ListingCategoryTag, string> = {
  "forager-header": "FORAGER HEADER",
  "front-weights": "FRONT WEIGHTS",
  "self-propelled-sprayer": "SELF PROPELLED",
  "maize-drill": "MAIZE DRILL",
  tractor: "TRACTOR",
  "rotary-rake": "ROTARY RAKE",
};

const formatPhoneLabel = (phone: string) => {
  const p = String(phone || "").trim();
  if (!p) return "";
  if (p.startsWith("07")) return p;
  if (p.startsWith("+44")) return p.replace("+44", "+44 ");
  return p;
};

const PORTAL_URL = "https://portal.farmcash.online/";

const getNumericHours = (hours?: string) => {
  if (!hours) return null;
  const parsed = Number(hours.replace(/[^0-9.]/g, ""));
  return Number.isFinite(parsed) ? parsed : null;
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

    return [hero, ...imgs].filter((img, idx, arr) => arr.findIndex((x) => x.src === img.src) === idx);
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
    priceText,
    serialRef,
    description,
    features,
    specs,
    notes,
    ctas,
    status,
    listingType,
    hours,
    highlights,
    category,
  } = listing;

  const isWanted = listingType === "wanted";
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

  const { primary: priceValue, showVat } = getVatDisplayPrice({
    status: listingType,
    value: priceText,
    fallback: isWanted ? "Wanted" : "POA",
  });
  const isJcbGuidePriceListing = listing.id === "fc-2022-jcb-535-95-001";
  const detailPriceValue = isJcbGuidePriceListing ? "Guide price to follow" : priceValue;
  const detailPriceSecondary = isJcbGuidePriceListing ? "Only 400 hours from new" : "";

  const machineType =
    subtitle?.split("|")[0]?.trim() ||
    specs?.find((row) => /type|category|configuration/i.test(row.label))?.value ||
    "Machine";


  const detailPills = [
    ...(highlights || []).map((highlight) => HIGHLIGHT_LABELS[highlight]),
    ...(category ? [CATEGORY_LABELS[category]] : []),
  ].slice(0, 2);

  const summaryItems = [
    { label: "Year", value: year || "—", icon: "📅" },
    { label: "Hours", value: hours ? `${hours} hrs` : "—", icon: "⏱️" },
    { label: "Location", value: location || "—", icon: "📍" },
    { label: "Machine type", value: machineType, icon: "🚜" },
  ];

  const sidebarTitle = isSold ? "This machine has been sold" : isWanted ? "Help us source this" : "Secure this asset";
  const sidebarDescription = isSold
    ? "FarmCash regularly sources similar machinery across the UK and EU. Contact us to discuss current availability."
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 overflow-x-hidden">
      <ImageLightbox open={lightboxOpen} image={activeImage} onClose={closeLightbox} />

      <div className="mb-6">
        <Link to="/" className="text-sm font-bold text-gray-600 hover:text-neutral-900 transition">
          ← Back to all ads
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 space-y-6 min-w-0">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <button
              type="button"
              onClick={() => openLightbox(heroImage)}
              className="relative aspect-[16/9] bg-gray-200 w-full text-left"
              aria-label="Open hero image"
            >
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div
                className={[
                  "absolute top-4 left-4 shadow-md",
                  listingPillBaseClass,
                  badgeClass(listing),
                ].join(" ")}
              >
                {badgeText(listing)}
              </div>
            </button>

            <div className="p-6 md:p-8">
              {serialRef ? (
                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
                  Serial ref: {serialRef}
                </p>
              ) : null}

              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-900">{title}</h1>
              {subtitle ? <p className="mt-2 text-lg text-gray-700 font-semibold">{subtitle}</p> : null}

              <div className="mt-4">
                <p className={`${isSold ? "text-red-600" : "text-neutral-900"} text-4xl md:text-5xl font-black`}>
                  {detailPriceValue}
                </p>
                {detailPriceSecondary ? (
                  <p className="mt-2 max-w-full text-sm font-medium leading-snug text-gray-500 md:text-base">
                    {detailPriceSecondary}
                  </p>
                ) : null}
                {showVat ? <p className="mt-2 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">+ VAT</p> : null}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {detailPills.map((pill) => (
                  <span key={pill} className={`${listingPillBaseClass} ${listingPillToneClass.default}`}>
                    {pill}
                  </span>
                ))}
              </div>

              <div className="mt-6 overflow-x-auto">
                <div className="min-w-max grid grid-flow-col auto-cols-max gap-3">
                  {summaryItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
                    >
                      <span aria-hidden="true">{item.icon}</span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{item.label}</p>
                        <p className="text-sm font-semibold text-neutral-900">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {allImages.length > 1 ? (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Gallery</p>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {allImages.map((img) => (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => openLightbox(img)}
                        className="shrink-0 w-28 h-20 bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:opacity-95 transition"
                        aria-label={`Open image: ${img.alt || "Image"}`}
                      >
                        <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover object-center" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="bg-gray-50 rounded-xl p-6 mt-8 border border-gray-100">
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
                <div className="bg-gray-50 rounded-xl p-6 mt-6 border border-gray-100">
                  <h4 className="font-bold text-neutral-900 mb-4 uppercase text-xs tracking-widest border-b pb-2">
                    Key features
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                    {features.map((feature, idx) => (
                      <li key={idx} className="break-words">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {specs && specs.length > 0 ? (
                <div className="bg-white rounded-xl p-6 mt-6 border border-gray-200 overflow-hidden">
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
                <div className="bg-gray-50 rounded-xl p-6 mt-6 border border-gray-100">
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

        <aside className="space-y-6 min-w-0">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h4 className="font-bold text-neutral-900 mb-4 uppercase tracking-widest text-xs">{sidebarTitle}</h4>

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
                {isSold ? "WhatsApp about similar machines" : isWanted ? "WhatsApp details" : "WhatsApp seller"}
              </a>

              <a
                href={`tel:${isSold ? "07393138063" : safeCtas.phoneNumber}`}
                className="w-full bg-brand-black hover:opacity-90 text-white font-bold py-3 rounded-xl transition-all block text-center shadow-md"
              >
                {isSold ? "Call 07393 138063" : isWanted ? "Call FarmCash" : `Call ${formatPhoneLabel(safeCtas.phoneNumber)}`}
              </a>

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
