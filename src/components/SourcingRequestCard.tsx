import React from "react";

const whatsappUrl =
  "https://wa.me/447939138063?text=Hi%20FarmCash%20-%20I'm%20looking%20for%20a%20machine.%20Make:%20%0AModel:%20%0AType:%20%0ABudget:%20";

const SourcingRequestCard: React.FC = () => {
  return (
    <article className="group relative block h-full overflow-hidden rounded-2xl border border-gray-200 bg-brand-green/5 shadow-sm transition-all hover:-translate-y-[1px] hover:shadow-lg">
      <img
        src="/images/wanted-hero-1.png"
        alt="FarmCash sourcing request – tell us what machine you need"
        className="h-48 w-full object-cover rounded-t-xl"
        loading="lazy"
      />

      <div className="p-6 py-8">
        <span className="mb-3 inline-flex items-center rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-white uppercase tracking-widest">
          SOURCING REQUEST
        </span>

        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-snug text-black">
          WANTED: YOUR NEXT MACHINE STORY
        </h3>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
          <p>Looking for something specific?</p>
          <p>
            Can&apos;t find the right machine?
            <br />
            Tell us the make, model or spec and we&apos;ll source it.
          </p>
          <p>We regularly source machinery across the UK and Europe.</p>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          No obligation – just tell us what you&apos;re looking for.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send your sourcing request on WhatsApp"
          className="mt-6 inline-flex items-center rounded-lg bg-brand-green px-4 py-2 font-semibold text-white transition hover:opacity-90"
        >
          💬 Send your request →
        </a>
      </div>
    </article>
  );
};

export default SourcingRequestCard;
