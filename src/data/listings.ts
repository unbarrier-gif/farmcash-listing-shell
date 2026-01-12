export type ListingStatus = "for-sale" | "wanted";

export type MediaImage = {
  src: string;
  alt: string;
};

export type SpecRow = {
  label: string;
  value: string;
};

export type Ctas = {
  whatsappUrl: string;
  phoneNumber: string; // store either 0739... or +447...
  financeQuoteUrl?: string;
  brochureUrl?: string;
};

export type Listing = {
  /** This is the URL id: /listing/:id */
  id: string;

  /** "for-sale" | "wanted" */
  status: ListingStatus;

  /** Main display title */
  title: string;

  /** Optional subtitle shown under title on listing page */
  subtitle?: string;

  /** Keep as display text (not number) to avoid formatting battles */
  year: string;

  /** Optional tile metadata */
  location?: string;
  width?: string;

  /** Optional reference */
  serialRef?: string;

  /** Display exactly as needed on detail page */
  priceText?: string;

  /** Main media (also used for Home/Wanted tile image) */
  heroImage: MediaImage;

  /** Optional content */
  description?: string;
  specs?: SpecRow[];
  notes?: string[];

  /** Calls to action */
  ctas: Ctas;
};

const WHATSAPP_URL = "https://wa.me/447393138063";
const PHONE_NUMBER = "07393138063";
const FINANCE_FORM_URL =
  "https://www.cognitoforms.com/FarmCashLtd/AgriculturalMachineryImportFinanceRequest";

const PROFICUT_BROCHURE_URL = "/brochures/proficut_fendt_brochure_en_2015-03_web.pdf";

export const listings: Listing[] = [

  
    /**
   * AD 1 — FOR SALE
   * URL: /listing/fc-2013-620
   */
  {
    id: "fc-2013-620",
    status: "for-sale",
    title: "Zürn ProfiCut 620 Wholecrop Header",
    subtitle: "Direct Cut Wholecrop Header",
    year: "2013",
    location: "Somerset, UK",
    width: "6.2M",
    serialRef: "FC-2013-620",
    priceText: "£35,000",
    heroImage: {
      src: "/images/FC-2013-620/FC-2013-620-hero.png",
      alt: "Zürn ProfiCut 620 wholecrop header stored indoors (hero view).",
    },
    description:
      "This 2013 Zürn ProfiCut 620 is a high-capacity header for direct harvesting of wholecrop. With a 6.20m working width, it is perfectly matched for John Deere 8000 and 9000 series forage harvesters. Robust drive system and professional build quality. Well-maintained unit with only 1,000 hectares of total use. Sale includes the transporter trolley as pictured.",
    specs: [
      { label: "Working width", value: "6.20 m (20 ft)" },
      { label: "Operating speed", value: "5–15 km/h" },
      { label: "Work rate", value: "Up to 6 ha/h" },
      { label: "Cutting height", value: "5–15 cm" },
      { label: "Qty. mower discs", value: "2 × 8" },
      { label: "Qty. knives", value: "32 (2/disc)" },
      { label: "RPM mower discs", value: "3,000 min⁻¹" },
      { label: "Feeding auger Ø", value: "600 mm" },
      { label: "Weight (unit)", value: "3,050 kg" },
      { label: "Coupling", value: "JD 8000/9000" },
    ],
    gallery: [
      {
        src: "/images/FC-2013-620/FC-2013-620-1.png",
        alt: "Zürn ProfiCut 620 wholecrop header stored indoors (view 1).",
      },
      {
        src: "/images/FC-2013-620/FC-2013-620-2.png",
        alt: "Side/rear view of the header assembly (view 2).",
      },
      {
        src: "/images/FC-2013-620/FC-2013-620-3.png",
        alt: "Transport position view of the header (view 3).",
      },
      {
        src: "/images/FC-2013-620/FC-2013-620-4.png",
        alt: "Detail view of cutting / intake area (view 4).",
      },
      {
        src: "/images/FC-2013-620/FC-2013-620-5.png",
        alt: "Rear-side view on transporter trolley (view 5).",
      },
      {
        src: "/images/FC-2013-620/FC-2013-620-6.png",
        alt: "Header detail view (view 6).",
      },
      {
        src: "/images/FC-2013-620/FC-2013-620-7.png",
        alt: "Header detail view (view 7).",
      },
      {
        src: "/images/FC-2013-620/FC-2013-620-8.png",
        alt: "Header detail view (view 8).",
      },
      {
        src: "/images/FC-2013-620/FC-2013-620-9.png",
        alt: "Header detail view (view 9).",
      },
      {
        src: "/images/FC-2013-620/FC-2013-620-10.png",
        alt: "Header detail view (view 10).",
      },
      {
        src: "/images/FC-2013-620/FC-2013-620-11.png",
        alt: "Header detail view (view 11).",
      },
      {
        src: "/images/FC-2013-620/FC-2013-620-12.png",
        alt: "Header detail view (view 12).",
      },
      {
        src: "/images/FC-2013-620/FC-2013-620-13.png",
        alt: "Header detail view (view 13).",
      },
      {
        src: "/images/FC-2013-620/FC-2013-620-backend-hero.png",
        alt: "Alternative rear/side hero image of the Zürn ProfiCut 620.",
      },
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
      brochureUrl: "/brochures/proficut_fendt_brochure_en_2015-03_web.pdf",
    },
  },


  /**
   * AD 2 — FOR SALE
   * URL: /listing/fc-2012-620
   */
  {
    id: "fc-2012-620",
    status: "for-sale",
    title: "Zürn ProfiCut 620",
    subtitle: "Direct Cut Wholecrop Header",
    year: "2012",
    location: "UK",
    width: "6.20 m",
    serialRef: "FC-2012-620",
    priceText: "£27,000 + VAT",
    heroImage: {
      src: "/images/FC-2012-620/FC-2012-620-hero.png",
      alt: "Zürn ProfiCut 620 (2012) wholecrop header (hero view).",
    },
    description:
      "2012 Zürn ProfiCut 620 header in good used condition. Green unit, compatible with a Fendt SPFH forage harvester. Approx. 2,500 hectares of use. Transporter trolley included. Enquire for availability, viewing, and delivery options.",
    specs: [
      { label: "Working width", value: "6.20 m" },
      { label: "Colour", value: "Green" },
      { label: "Compatibility", value: "Fendt SPFH" },
      { label: "Usage", value: "Approx. 2,500 hectares" },
      { label: "Transport trolley", value: "Included" },
    ],
    gallery: [
      { src: "/images/FC-2012-620/FC-2012-620-hero-chilling.png", alt: "Header (alternate hero view)." },
      { src: "/images/FC-2012-620/FC-2012-620-1.png", alt: "Yard view of the header (image 1)." },
      { src: "/images/FC-2012-620/FC-2012-620-2.png", alt: "Yard view of the header (image 2)." },
      { src: "/images/FC-2012-620/FC-2012-620-3.png", alt: "Detail view of header components (image 3)." },
      { src: "/images/FC-2012-620/FC-2012-620-4.png", alt: "Side view / transport position (image 4)." },
      { src: "/images/FC-2012-620/FC-2012-620-5.png", alt: "Rear/side view (image 5)." },
      { src: "/images/FC-2012-620/FC-2012-620-6.png", alt: "Detail view (image 6)." },
      { src: "/images/FC-2012-620/FC-2012-620-7.png", alt: "Detail view (image 7)." },
      { src: "/images/FC-2012-620/FC-2012-620-8.png", alt: "Detail view (image 8)." },
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
      brochureUrl: PROFICUT_BROCHURE_URL,
    },
  },

  /**
   * AD 3 — FOR SALE
   * URL: /listing/fc-2020-490
   */
  {
    id: "fc-2020-490",
    status: "for-sale",
    title: "Kemper 490 Plus Forager Header",
    subtitle: "9.0 m working width | 12-row",
    year: "2020",
    location: "UK",
    width: "9.0 m",
    serialRef: "FC-2020-490",
    priceText: "POA (Open to offers)",
    heroImage: {
      src: "/images/FC-2020-490/FC-2020-490-hero.png",
      alt: "Kemper 490 Plus forager header (hero view).",
    },
    description:
      "Kemper 490 Plus forager header with 9.0 m working width and 12-row configuration. Manufactured in 2020 and supplied with brackets and setup to fit wide body Krone forage harvesters (models 680–1180). This is the Plus version of the current 490 Pro model – functionally very similar, with minor evolutionary updates in the newer Pro range.",
    specs: [
      { label: "Model", value: "Kemper 490 Plus" },
      { label: "Working width", value: "9.0 m" },
      { label: "Rows", value: "12-row" },
      { label: "Made in / MY", value: "2020" },
      { label: "Fitment", value: "Brackets/setup to fit wide body Krone 680–1180" },
    ],
    gallery: [
      { src: "/images/FC-2020-490/FC-2020-490-hero-chilling.png", alt: "Kemper header (alternate hero view)." },
      { src: "/images/FC-2020-490/FC-2020-490-1.png", alt: "Kemper header image 1." },
      { src: "/images/FC-2020-490/FC-2020-490-2.png", alt: "Kemper header image 2." },
      { src: "/images/FC-2020-490/FC-2020-490-3.png", alt: "Kemper header image 3." },
      { src: "/images/FC-2020-490/FC-2020-490-4.png", alt: "Kemper header image 4." },
      { src: "/images/FC-2020-490/FC-2020-490-5.png", alt: "Kemper header image 5." },
      { src: "/images/FC-2020-490/FC-2020-490-6.png", alt: "Kemper header image 6." },
      { src: "/images/FC-2020-490/FC-2020-490-7.png", alt: "Kemper header image 7." },
    ],
    
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
    },
  },

  /**
   * WANTED (template)
   * URL: /listing/wanted-1
   */
  
    {
    id: "wanted-1",
    status: "wanted",
    title: "Wanted: Your next machine story",
    subtitle: "We match good kit with good buyers",
    year: "Any",
    location: "UK",
    priceText: "Tell us what you’ve got",
    heroImage: {
      src: "/images/wanted-hero-1.png",
      alt: "Playful tractor image used as the FarmCash wanted listing hero tile.",
    },
    description:
      "Got a machine that needs a new home? We’re always looking for quality kit — forage, arable, handling, trailers, headers, the lot. Send a quick message with make/model, year, condition, location, and a couple of photos. We’ll do the legwork and match it to the right buyer.",
    notes: [
      "This tile stays live permanently so buyers and sellers can always reach us.",
      "If you’re not sure it’s ‘worth listing’, send it anyway — we’ll be straight with you.",
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
  },
},

    },
  },
];

export const counts = {
  all: listings.length,
  forSale: listings.filter((l) => l.status === "for-sale").length,
  wanted: listings.filter((l) => l.status === "wanted").length,
};
