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
    const imgs = (listing.gallery?.length ? listing.gallery : [listing.heroImage]).filter(Boolean);
    // Ensure hero is included (first) even if gallery exists but doesn’t include it
    const hero = listing.heroImage;
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
  } = listing;

  const safeCtas = {
    whatsappUrl: ctas?.whatsappUrl ?? "https://wa.me/447393138063",
    phoneNumber: ctas?.phoneNumber ?? "07393138063",
    financeQuoteUrl:
      ctas?.financeQuoteUrl ??
      "https://www.cognitoforms.com/FarmCashLtd/AgriculturalMachineryImportFinanceRequest",
    brochureUrl: ctas?.brochureUrl ?? "",
  };

  const detailThumbs = allImages.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <ImageLightbox open={lightboxOpen} image={activeImage} onClose={closeLightbox} />

      <div className="mb-6">
        <Link to="/" className="text-sm font-bold text-gray-600 hover:text-neutral-900 transition">
          ← Back to all ads
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* MAIN */}
        <div className="lg:col-span-2 space-y-6">
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
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block bg-black/35 backdrop-blur-[1px] rounded-2xl px-5 py-4">
                  <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    {String(title || "").toUpperCase()}
                  </h2>

                  {subtitle ? (
