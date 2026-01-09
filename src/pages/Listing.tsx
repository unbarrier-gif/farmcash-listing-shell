import React from "react";
import { useParams } from "react-router-dom";
import { ListingGallery } from "../components/ListingGallery";

const Listing: React.FC = () => {
  const { slug } = useParams();

  // For now, we render the same listing regardless of slug.
  // Later we’ll map slug -> data.
  const machineHeroImage =
    "https://unbarrier.me/wp-content/uploads/2026/01/hero.png";

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-brand-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <div className="aspect-[16/10] bg-gray-200 relative">
              <img
                src={machineHeroImage}
                alt="Zürn ProfiCut 620 wholecrop header in storage, actual unit for sale."
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 space-y-2 pointer-events-none">
                <h2 className="hero-overlay-text text-3xl font-bold uppercase tracking-tight leading-none">
                  Zürn PROFI CUT 620
                </h2>
                <br />
                <h3 className="hero-overlay-text text-xl font-medium tracking-wide">
                  Direct Cut Wholecrop Header
                </h3>
              </div>
              <div className="absolute top-4 left-4 bg-brand-gold text-black px-4 py-1.5 rounded-sm font-bold text-xs shadow-md uppercase tracking-widest">
                Actual Unit for Sale
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-1">
                Serial Ref: FC-2013-620
              </p>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <h1 className="text-3xl font-bold brand-font text-brand-black leading-none uppercase tracking-tight">
                  Direct Cut Wholecrop Header
                </h1>

                <div className="text-right">
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                    Sale Price
                  </p>
                  <p className="text-4xl font-bold text-brand-black brand-font">
                    £35,000{" "}
                    <span className="text-sm font-sans font-normal text-gray-500 tracking-normal">
                      + VAT
                    </span>
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                <h4 className="font-bold text-brand-black mb-2 uppercase text-xs tracking-widest border-b pb-2">
                  Technical Description
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  This 2013 Zürn ProfiCut 620 is a high-capacity header for direct
                  harvesting of wholecrop. With a 6.20m working width, it is
                  perfectly matched for John Deere 8000 and 9000 series forage
                  harvesters. Robust drive system and professional build quality.
                  Well-maintained unit with only 1,000 hectares of total use. Sale
                  includes the transporter trolley as pictured.
                </p>
              </div>

              {/* Debug: shows the URL slug so you know routing works */}
              <p className="text-xs text-gray-400">
                Listing ID: <span className="font-mono">{slug}</span>
              </p>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <ListingGallery />

          <div className="bg-brand-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h4 className="font-bold text-brand-black mb-4 brand-font uppercase tracking-wide">
              Secure This Asset
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/447393138063"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#75ac49] hover:opacity-90 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
              >
                WhatsApp Seller
              </a>
              <button
                onClick={() => (window.location.href = "tel:+447393138063")}
                className="w-full bg-brand-black hover:bg-gray-900 text-white font-bold py-3 rounded-xl transition-all"
              >
                Call +44 7393 138063
              </button>
              <a
                href="https://www.cognitoforms.com/FarmCashLtd/AgriculturalMachineryImportFinanceRequest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-brand-black text-brand-black hover:bg-gray-50 font-bold py-3 rounded-xl transition-all text-sm uppercase tracking-widest block text-center"
              >
                Request Finance Quote
              </a>
              <a
                href="https://unbarrier.me/wp-content/uploads/2026/01/proficut_fendt_brochure_en_2015-03_web-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#75ac49] text-white font-bold py-3 rounded-xl transition-all block text-center shadow-md"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Listing;
