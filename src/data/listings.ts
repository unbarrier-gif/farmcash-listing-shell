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

  /** Main media */
  heroImage: MediaImage;

  /** Optional extra media */
  gallery?: MediaImage[];
  videoUrl?: string;

  /** Optional content */
  description?: string;
  specs?: SpecRow[];
  notes?: string[];

  /** Calls to action */
  ctas: Ctas;

  /* ---------------------------------------------------
     TILE FIELDS (to keep existing Home.tsx working)
     Home.tsx currently expects: imageUrl, imageAlt, badge, category, price
     --------------------------------------------------- */
  imageUrl: string;
  imageAlt: string;
  badge: string;
  category: string;
  price?: string;
};

const WHATSAPP_URL = "https://wa.me/447393138063";
const PHONE_NUMBER = "07393138063";
const FINANCE_FORM_URL =
  "https://www.cognitoforms.com/FarmCashLtd/AgriculturalMachineryImportFinanceRequest";

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
      src: "/images/Ad-1-zurn-proficut-620-hero.jpg",
      alt: "Zürn ProfiCut 620 wholecrop header, yellow unit stored indoors next to hay bales",
    },
    description:
      "High-capacity direct cut header designed for wholecrop harvesting. Please enquire for compatibility, condition details, and delivery options.",
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
      { src: "https://unbarrier.me/wp-content/uploads/2026/01/1-1.png", alt: "Side view of header body" },
      { src: "https://unbarrier.me/wp-content/uploads/2026/01/2-1.png", alt: "Rear-side view on transporter" },
      { src: "https://unbarrier.me/wp-content/uploads/2026/01/3.png", alt: "Manufacturer identification plate" },
      { src: "https://unbarrier.me/wp-content/uploads/2026/01/4-1.png", alt: "Transporter identification plate" },
      { src: "https://unbarrier.me/wp-content/uploads/2026/01/5.png", alt: "Rear view on transporter indoors" },
      { src: "https://unbarrier.me/wp-content/uploads/2026/01/3-1.png", alt: "Rear end view of Zürn ProfiCut 620" },
      { src: "https://unbarrier.me/wp-content/uploads/2026/01/4-2.png", alt: "Side underside view showing cutter discs" },
      { src: "https://unbarrier.me/wp-content/uploads/2026/01/hero-2.png", alt: "Rear-side view yellow housing" },
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
    },

    // Tile fields for Home.tsx
    imageUrl: "/images/Ad-1-zurn-proficut-620-hero.jpg",
    imageAlt: "Zürn ProfiCut 620 wholecrop header, yellow unit stored indoors",
    badge: "FOR SALE",
    category: "For Sale",
    price: "£35,000",
  },

  /**
   * AD 2 — FOR SALE (template-ready)
   * URL: /listing/ad-2
   */
  {
    id: "ad-2",
    status: "for-sale",
    title: "Zürn ProfiCut 620 Wholecrop Header",
    subtitle: "Direct Cut Wholecrop Header",
    year: "2012",
    location: "UK",
    width: "6.2M",
    priceText: "POA",
    heroImage: {
      src: "/images/ad-2-zurn-proficut-620-2012-hero.jpg",
      alt: "Zürn ProfiCut 620 wholecrop header, actual unit for sale",
    },
    notes: ["Template listing — details to be confirmed."],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
      brochureUrl:
        "https://unbarrier.me/wp-content/uploads/2026/01/proficut_fendt_brochure_en_2015-03_web-2.pdf",
    },

    // Tile fields
    imageUrl: "/images/ad-2-zurn-proficut-620-2012-hero.jpg",
    imageAlt: "Zürn ProfiCut 620 wholecrop header",
    badge: "FOR SALE",
    category: "For Sale",
    price: "POA",
  },

  /**
   * AD 3 — FOR SALE
   * URL: /listing/ad-3
   */
  {
    id: "ad-3",
    status: "for-sale",
    title: "Kemper 490 Plus Forager Header",
    subtitle: "9 m working width | 12-row",
    year: "2020",
    location: "UK",
    width: "9M",
    priceText: "POA / Offers",
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
      { label: "Brackets / setup", value: "Fits wide body Krone models 680–1180" },
    ],
    notes: [
      "This unit is a 490 Plus model. Newer units are referred to as 490 Pro (slightly evolved).",
      "If a brochure is needed, the available link is for the Pro model; functionally the Plus and Pro are essentially the same.",
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
    },

    // Tile fields
    imageUrl: "/images/ad-3-kemper-490pro-9m-hero.jpg",
    imageAlt: "Kemper forager header, 9 metre working width",
    badge: "FOR SALE",
    category: "For Sale",
    price: "POA",
  },

  /**
   * WANTED (template)
   * URL: /listing/wanted-1
   */
  {
    id: "wanted-1",
    status: "wanted",
    title: "Wanted: Machinery Sourcing Request",
    subtitle: "Tell us what you need and we’ll source it",
    year: "Any",
    location: "UK",
    priceText: "Budget on request",
    heroImage: {
      src: "/images/ad-3-kemper-490pro-9m-hero.jpg",
      alt: "Wanted listing placeholder image for machinery sourcing",
    },
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
    },

    // Tile fields
    imageUrl: "/images/ad-3-kemper-490pro-9m-hero.jpg",
    imageAlt: "Wanted listing placeholder image",
    badge: "WANTED",
    category: "Wanted",
    price: "Budget on request",
  },
];

export const counts = {
  all: listings.length,
  forSale: listings.filter((l) => l.status === "for-sale").length,
  wanted: listings.filter((l) => l.status === "wanted").length,
};
