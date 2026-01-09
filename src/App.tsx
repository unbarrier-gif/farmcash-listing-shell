
import React from 'react';
import { ListingGallery, techSpecImages } from './components/ListingGallery';
import { VeoStudio } from './components/VeoStudio';

const App: React.FC = () => {
  // Main hero image
  const machineHeroImage = "https://unbarrier.me/wp-content/uploads/2026/01/hero.png"; 

  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      {/* Top Utility Bar */}
      <div className="bg-brand-black border-b border-gray-800 py-2 px-6 text-white text-xs font-semibold h-10">
        <div className="max-w-7xl mx-auto flex justify-end items-center h-full">
          <span className="text-gray-500 uppercase tracking-[0.3em]">Official FarmCash Sales Portal</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-brand-white border-b border-gray-100 py-6 px-6 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col">
            <div className="text-5xl logo-font leading-[0.9] flex">
              <span className="text-brand-green">Farm</span>
              <span className="text-brand-gold">Cash</span>
            </div>
            <div className="text-brand-gold font-bold text-sm tracking-tight ml-[1.6em] whitespace-nowrap logo-font uppercase">
              Input Finance and Machinery Import
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a 
              href="https://unbarrier.me/wp-content/uploads/2026/01/proficut_fendt_brochure_en_2015-03_web-2.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#75ac49] text-white px-6 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:brightness-105 transition-all shadow-md flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              Download Brochure
            </a>
            <a 
              href="https://wa.me/447393138063" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#75ac49] text-white px-6 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:brightness-105 transition-all shadow-md flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.143 1.44 4.766 1.441 5.424 0 9.84-4.417 9.844-9.841.002-2.628-1.022-5.1-2.884-6.963-1.862-1.864-4.333-2.887-6.963-2.888-5.423 0-9.839 4.417-9.844 9.841-.001 1.737.459 3.432 1.33 4.931l-1.066 3.896 3.991-1.047zm11.332-6.759c-.313-.156-1.851-.913-2.137-1.018-.286-.105-.494-.156-.702.156s-.806 1.018-.988 1.226c-.182.208-.364.234-.677.078-.312-.156-1.32-.486-2.515-1.553-.93-.829-1.558-1.854-1.74-2.166-.182-.312-.02-.481.136-.636.141-.14.312-.364.469-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.702-1.691-.962-2.315-.253-.607-.511-.524-.702-.534-.18-.01-.39-.011-.6-.011-.208 0-.546.078-.832.39-.286.312-1.092 1.067-1.092 2.601 0 1.534 1.118 3.017 1.274 3.225.156.208 2.199 3.359 5.327 4.71.744.322 1.325.514 1.777.658.748.237 1.428.204 1.967.123.6-.09 1.851-.755 2.112-1.484.26-.73.26-1.353.182-1.484-.077-.13-.285-.208-.598-.364z"/></svg>
              WhatsApp Seller
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-brand-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="aspect-[16/10] bg-gray-200 relative">
                <img 
                  src={machineHeroImage} 
                  alt="Zürn ProfiCut 620 wholecrop header" 
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
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-1">Serial Ref: FC-2013-620</p>
                    <h2 className="text-3xl font-bold brand-font text-brand-black leading-none uppercase tracking-tight">Direct Cut Wholecrop Header</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Sale Price</p>
                    <p className="text-4xl font-bold text-brand-black brand-font">£35,000 <span className="text-sm font-sans font-normal text-gray-500 tracking-normal">+ VAT</span></p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                  <h4 className="font-bold text-brand-black mb-2 uppercase text-xs tracking-widest border-b pb-2">Technical Description</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    This 2013 Zürn ProfiCut 620 is a high-capacity header for direct harvesting of wholecrop. With a 6.20m working width, it is perfectly matched for John Deere 8000 and 9000 series forage harvesters. Robust drive system and professional build quality. Well-maintained unit with only 1,000 hectares of total use. Sale includes the transporter trolley as pictured.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-brand-white p-4 rounded-xl border border-gray-200 text-center shadow-sm">
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Year</p>
                    <p className="text-lg font-bold brand-font text-brand-black">2013</p>
                  </div>
                  <div className="bg-brand-white p-4 rounded-xl border border-gray-200 text-center shadow-sm">
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Width</p>
                    <p className="text-lg font-bold brand-font text-brand-black">6.2 m</p>
                  </div>
                  <div className="bg-brand-white p-4 rounded-xl border border-gray-200 text-center shadow-sm">
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Usage</p>
                    <p className="text-lg font-bold brand-font text-brand-black">1,000 ha</p>
                  </div>
                  <div className="bg-brand-white p-4 rounded-xl border border-gray-200 text-center shadow-sm">
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Condition</p>
                    <p className="text-lg font-bold brand-font text-brand-black">Excellent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <ListingGallery />

            <div className="bg-brand-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h4 className="font-bold text-brand-black mb-4 brand-font uppercase tracking-wide">Secure This Asset</h4>
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
                  onClick={() => window.location.href = 'tel:+447393138063'}
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
              </div>
            </div>
          </aside>
        </div>

        {/* AI Cinematic Studio Section */}
        <div className="mt-12">
          <VeoStudio listingImages={techSpecImages} />
        </div>
      </main>

      <footer className="bg-brand-black text-white py-20 px-6 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-sm">
          <div>
            <div className="flex flex-col mb-8">
              <div className="text-3xl logo-font leading-none flex">
                <span className="text-brand-green">Farm</span>
                <span className="text-brand-gold">Cash</span>
              </div>
              <div className="text-brand-gold font-bold text-[10px] tracking-tight ml-[1.6em] logo-font uppercase">
                Input Finance and Machinery Import
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 text-xs uppercase tracking-widest">
              Professional Financial Services for Modern Agriculture. Specializing in Machinery Import Bridging.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-white mb-8 brand-font uppercase tracking-widest text-lg">Headquarters</h5>
            <p className="text-gray-400 leading-relaxed uppercase text-xs tracking-[0.15em] space-y-1">
              Monkley Stables, Monkley Lane<br />
              Monkley, Rode, Frome, BA11 6QQ<br />
              United Kingdom
            </p>
            <p className="mt-6 text-white font-bold uppercase tracking-widest text-xs">
              <a href="https://farmcash.co.uk/" target="_blank" className="hover:text-brand-gold transition-colors underline decoration-brand-gold underline-offset-4">farmcash.co.uk</a>
            </p>
          </div>
          <div>
             <h5 className="font-bold text-white mb-8 brand-font uppercase tracking-widest text-lg">Legal</h5>
             <div className="space-y-4 text-gray-500 uppercase text-[10px] tracking-widest">
               <p>FarmCash Ltd | Registered No: 14016448</p>
               <p>© 2024 FarmCash. Professional Machinery Sales.</p>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
