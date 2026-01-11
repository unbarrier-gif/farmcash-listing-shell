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
  phoneNumber: string;
  financeQuoteUrl?: string;
  brochureUrl?: string;
};

export type Listing = {
  /** This is the URL id: /listing/:id */
  id: string;

  status: ListingStatus;
  title: string;

  /** Keep this as display text (not a number) so you never fight formatting */
  year: string;

  /** Display exactly as needed */
  priceText?: string;

  /** Optional “what is it” line under title */
  subtitle?: string;

  /** Optional reference for internal use */
  serialRef?: string;

  heroImage: MediaImage;

  /** Optional extra media */
  gallery?: MediaImage[];
  videoUrl?: string;

  /** Optional content */
  description?: string;
  specs?: SpecRow[];
  notes?: string[];

  ctas: Ctas;
};

const WHATSAPP_URL = "https://wa.me/447393138063";
const PHONE_NUMBER = "+447393138063";
const FINANCE_URL =
  "https://www.cognitoforms.com/FarmCashLtd/AgriculturalMachineryImportFinanceRequest";

export const listings: Listing[] = [
  /**
   * AD 1 — FOR SALE
   */
  {
    id: "ad-1",
    status: "for-sale",
    title: "Zurn Profi Cut 620",
    year: "2012",
    priceText: "£35,000 + VAT",
    subtitle: "Direct Cut Wholecrop Header",
    heroImage: {
      // ✅ matches: public/images/Ad-1-zurn-proficut-620-hero.jpg
      src: "/images/Ad-1-zurn-proficut-620-hero.jpg",
      alt: "Zurn Profi Cut 620 forage wagon secured on low loader truck for transport, side view",
    },
    description:
      "High-capacity direct cut header designed for wholecrop harvesting. Please enquire for compatibility, condition details, and delivery options.",
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_URL,
    },
  },

  /**
   * AD 2 — FOR SALE
   */
  {
    id: "ad-2",
    status: "for-sale",
    title: "Zurn ProfiCut 620",
    year: "2012",
    priceText: "POA",
    subtitle: "Direct Cut Wholecrop Header",
    heroImage: {
      src: "/images/ad-2-zurn-proficut-620-2012-hero.jpg",
      alt: "Zurn ProfiCut 620 wholecrop header, actual unit for sale",
    },
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_URL,
      brochureUrl:
        "https://unbarrier.me/wp-content/uploads/2026/01/proficut_fendt_brochure_en_2015-03_web-2.pdf",
    },
  },

  /**
   * AD 3 — FOR SALE
   */
  {
    id: "ad-3",
    status: "for-sale",
    title: "Kemper 490 Plus Forager Header",
    year: "MY 2020",
    priceText: "POA / Offers",
    subtitle: "9 m working width | 12-row",
    heroImage: {
      src: "/images/ad-3-kemper-490pro-9m-hero.jpg",
      alt: "Kemper forager header with 9 metre working width",
    },
    videoUrl: "/images/ad-3-kemper-490pro-9m.mp4",
    specs: [
      { label: "Model", value: "Kemper 490 Plus" },
      { label: "Working width", value: "9 m" },
      { label: "Rows", value: "12-row" },
      { label: "Made in / MY", value: "2020" },
      {
        label: "Brackets / setup",
        value: "Fits wide body Krone models 680–1180",
      },
    ],
    notes: [
      "This unit is a 490 Plus model. Newer units are referred to as 490 Pro (slightly evolved).",
      "If a brochure is needed, the available link is for the Pro model; functionally the Plus and Pro are essentially the same.",
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_URL,
    },
  },

  /**
   * WANTED (template)
   */
  {
    id: "wanted-1",
    status: "wanted",
    title: "Wanted: Machinery Sourcing Request",
    year: "Any",
    priceText: "Budget on request",
    subtitle: "Tell us what you need and we’ll source it",
    heroImage: {
      // Fine as a placeholder, but you can swap later
      src: "/images/ad-3-kemper-490pro-9m-hero.jpg",
      alt: "Wanted listing placeholder image for machinery sourcing",
    },
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_URL,
    },
  },
];

export const counts = {
  all: listings.length,
  forSale: listings.filter((l) => l.status === "for-sale").length,
  wanted: listings.filter((l) => l.status === "wanted").length,
};
