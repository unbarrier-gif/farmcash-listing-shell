import React from "react";
import { listingPillBaseClass, listingPillToneClass } from "./listingPillStyles";

const whatsappUrl =
  "https://wa.me/447939138063?text=Hi%20FarmCash%20-%20I'm%20looking%20for%20a%20machine.%20Make:%20%0AModel:%20%0AType:%20%0ABudget:%20";

const ctaWrapperClasses = "mt-auto pt-6 flex justify-center";
const ctaButtonClasses =
  "inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-2xl bg-brand-green px-4 py-3 text-base font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green";

const SourcingRequestCard: React.FC = () => {
  const handleSourcingClick = async () => {
    try {
      await fetch("/api/sourcing-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source: "portal",
          timestamp: new Date().toISOString(),
          page: window.location.pathname,
        }),
      });
    } catch (error) {
      console.error("Sourcing request logging failed", error);
    }

    window.open(whatsappUrl, "_blank");
  };

  return (
    <article className="group flex flex-col h-full overflow-hidden rounded-2xl border border-gray-200 bg-brand-green/5 shadow-sm transition transform hover:-translate-y-1 hover:shadow-lg">
      <img
        src="/images/wanted-hero-1.png"
        alt="FarmCash sourcing request – tell us what machine you need"
        className="h-48 w-full object-cover rounded-t-xl"
        loading="lazy"
      />

      <div className="flex flex-col flex-grow p-6 py-8">
        <span className={`${listingPillBaseClass} ${listingPillToneClass.newIn}`}>
          SOURCING REQUEST
        </span>

        <div className="detail-text-stack min-h-0">
          <h3 className="detail-primary-line text-xl md:text-2xl tracking-tight text-black">
            WANTED: YOUR NEXT MACHINE STORY
          </h3>

          <div className="detail-copy space-y-2 text-sm text-gray-700 leading-relaxed normal-case tracking-normal font-normal md:space-y-3">
            <p>Looking for something specific?</p>
            <p>
              Can&apos;t find the right machine?
              <br />
              Tell us the make, model or spec and we&apos;ll source it.
            </p>
            <p>We regularly source machinery across the UK and Europe.</p>
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          No obligation – just tell us what you&apos;re looking for.
        </p>

        <div className={ctaWrapperClasses}>
          <button
            type="button"
            onClick={handleSourcingClick}
            aria-label="Send your sourcing request on WhatsApp"
            className={ctaButtonClasses}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-1 4 8.5 8.5 0 0 1-7.5 4.5 8.38 8.38 0 0 1-4-1L3 21l1.1-5.4a8.38 8.38 0 0 1-1.1-4.1 8.5 8.5 0 0 1 4.5-7.5 8.38 8.38 0 0 1 4-1h.5A8.5 8.5 0 0 1 21 11v.5Z" />
            </svg>
            <span>Send your request →</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default SourcingRequestCard;
