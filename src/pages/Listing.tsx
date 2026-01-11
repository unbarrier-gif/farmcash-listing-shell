import React from "react";
import { Link, useParams } from "react-router-dom";
import { listings } from "../data/listings";
import ListingGallery from "../components/ListingGallery";

const badgeClass = (status: string) =>
  status === "wanted" ? "bg-[#ca9c29] text-white" : "bg-[#75ac49] text-white";

const badgeText = (status: string) => (status === "wanted" ? "Wanted" : "For sale");

const Listing: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const listing = listings.find((l) => l.id === slug);

  if (!listing) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <h1 className="text-2xl font-bold text-brand-black">Advert not found</h1>
          <p className="text-gray-600 mt-2">
            This advert may have been removed or the link is incorrect.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 bg-brand-black text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Back to all adverts
          </Link>
        </div>
      </main>
    );
  }

  const {
    heroImage,
    title,
    subtitle,
    year,
    priceText,
    serialRef,
    description,
    specs,
    notes,
    videoUrl,
    ctas,
  } = listing;

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-6">
        <Link
          to="/"
          className="text-sm font-bold text-gray-600 hover:text-brand-black transition"
        >
          ← Back to all adverts
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* MAIN */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-brand-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <div className="aspect-[16/10] bg-gray-200 relative">
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-8 left-8 space-y-2 pointer-events-none">
                <h2 className="hero-overlay-text text-3xl font-bold uppercase tracking-tight leading-none">
                  {title}
                </h2>

                {subtitle ? (
                  <h3 className="hero-overlay-text text-xl font-medium tracking-wide">
                    {subtitle}
                  </h3>
                ) : null}
              </div>

              <div
                className={[
                  "absolute top-4 left-4 px-4 py-1.5 rounded-sm font-bold text-xs shadow-md uppercase tracking-widest",
                  badgeClass(listing.status),
                ].join(" ")}
              >
                {badgeText(listing.status)}
              </div>
            </div>

            <div className="p-8">
              {serialRef ? (
                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-1">
                  Serial Ref: {serialRef}
                </p>
              ) : null}

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <h1 className="text-3xl font-bold brand-font text-brand-black leading-none uppercase tracking-tight">
                    {subtitle ?? "Advert details"}
                  </h1>
                  <p className="mt-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
                    Year: {year}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                    Price
                  </p>
                  <p className="text-4xl font-bold text-brand-black brand-font">
                    {priceText ?? "POA"}
                  </p>
                </div>
              </div>

              {description ? (
                <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                  <h4 className="font-bold text-brand-black mb-2 uppercase text-xs tracking-widest border-b pb-2">
                    Description
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
                </div>
              ) : null}

              {specs && specs.length > 0 ? (
                <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200">
                  <h4 className="font-bold text-brand-black mb-4 uppercase text-xs tracking-widest border-b pb-2">
                    Key specs
                  </h4>
                  <div className="space-y-3">
                    {specs.map((row) => (
                      <div key={row.label} className="flex justify-between gap-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                          {row.label}
                        </span>
                        <span className="text-sm font-semibold text-brand-black text-right">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {notes && notes.length > 0 ? (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-brand-black mb-2 uppercase text-xs tracking-widest border-b pb-2">
                    Notes
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                    {notes.map((n, idx) => (
                      <li key={idx}>{n}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>

          {videoUrl ? (
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <div className="p-6 border-b border-gray-100">
                <h4 className="font-bold text-brand-black uppercase tracking-widest text-xs">
                  Video
                </h4>
              </div>
              <video controls className="w-full" preload="metadata">
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
          ) : null}
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          {/* ✅ DATA-DRIVEN GALLERY */}
          <ListingGallery
            images={listing.gallery?.length ? listing.gallery : [listing.heroImage]}
            videoUrl={listing.videoUrl}
          />

          <div className="bg-brand-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h4 className="font-bold text-brand-black mb-4 brand-font uppercase tracking-wide">
              Enquire
            </h4>

            <div className="space-y-3">
              <a
                href={ctas.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#75ac49] hover:opacity-90 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
              >
                WhatsApp Seller
              </a>

              <button
                onClick={() => (window.location.href = `tel:${ctas.phoneNumber}`)}
                className="w-full bg-brand-black hover:bg-gray-900 text-white font-bold py-3 rounded-xl transition-all"
              >
                Call {ctas.phoneNumber.replace("+44", "+44 ")}
              </button>

              {ctas.financeQuoteUrl ? (
                <a
                  href={ctas.financeQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-brand-black text-brand-black hover:bg-gray-50 font-bold py-3 rounded-xl transition-all text-sm uppercase tracking-widest block text-center"
                >
                  Request finance quote
                </a>
              ) : null}

              {ctas.brochureUrl ? (
                <a
                  href={ctas.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#75ac49] text-white font-bold py-3 rounded-xl transition-all block text-center shadow-md"
                >
                  Download brochure
                </a>
              ) : null}
            </div>
          </div>

          <p className="text-xs text-gray-400">
            Listing ID: <span className="font-mono">{slug}</span>
          </p>
        </aside>
      </div>
    </main>
  );
};

export default Listing;
