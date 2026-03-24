export type ListingType = "for-sale" | "wanted";
export type ListingStatus = "available" | "sold" | "reserved";
export type ListingHighlight = "12-row" | "16-row" | "low-hours" | "vintage" | "pro-spec";
export type ListingCategoryTag = "forager-header" | "front-weights" | "self-propelled-sprayer" | "maize-drill" | "tractor" | "rotary-rake";

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
  portalUrl?: string;
};

export type Listing = {
  /** This is the URL id: /listing/:id */
  id: string;

  /** Feed grouping */
  listingType: ListingType;

  /** Commercial availability */
  status: ListingStatus;
  highlights?: ListingHighlight[];
  category?: ListingCategoryTag;

  /** Main display title */
  title: string;

  /** ISO timestamp used for feed ordering */
  createdAt: string;

  /** Optional subtitle shown under title on listing page */
  subtitle?: string;

  /** Keep as display text (not number) to avoid formatting battles */
  year: string;

  /** Optional tile metadata */
  location?: string;
  width?: string;
  /** Current machine location country (not build/manufacture origin) */
  country: "UK" | "Germany" | "Netherlands";

  /** Optional reference */
  serialRef?: string;

  /** Display exactly as needed on detail page */
  priceText?: string;
  price?: string;
  hours?: string;

  /** Main media (also used for Home/Wanted tile image) */
  heroImage: MediaImage;

  /** Optional extra images for the lightbox + detail thumbs */
  gallery?: MediaImage[];

  /** Optional content */
  description?: string;
  features?: string[];
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
  {
    id: "fc-2013-620",
    listingType: "for-sale",
    status: "available",
    category: "forager-header",
    createdAt: "2026-03-08T09:00:00Z",
    title: "Zürn ProfiCut 620 Wholecrop Header",
    subtitle: "Direct Cut Wholecrop Header",
    year: "2013",
    location: "Somerset, UK",
    country: "UK",
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
      { src: "/images/FC-2013-620/FC-2013-620-1.png", alt: "Zürn ProfiCut 620 wholecrop header stored indoors (view 1)." },
      { src: "/images/FC-2013-620/FC-2013-620-2.png", alt: "Side/rear view of the header assembly (view 2)." },
      { src: "/images/FC-2013-620/FC-2013-620-3.png", alt: "Transport position view of the header (view 3)." },
      { src: "/images/FC-2013-620/FC-2013-620-4.png", alt: "Detail view of cutting / intake area (view 4)." },
      { src: "/images/FC-2013-620/FC-2013-620-5.png", alt: "Rear-side view on transporter trolley (view 5)." },
      { src: "/images/FC-2013-620/FC-2013-620-6.png", alt: "Header detail view (view 6)." },
      { src: "/images/FC-2013-620/FC-2013-620-7.png", alt: "Header detail view (view 7)." },
      { src: "/images/FC-2013-620/FC-2013-620-8.png", alt: "Header detail view (view 8)." },
      { src: "/images/FC-2013-620/FC-2013-620-9.png", alt: "Header detail view (view 9)." },
      { src: "/images/FC-2013-620/FC-2013-620-10.png", alt: "Header detail view (view 10)." },
      { src: "/images/FC-2013-620/FC-2013-620-11.png", alt: "Header detail view (view 11)." },
      { src: "/images/FC-2013-620/FC-2013-620-12.png", alt: "Header detail view (view 12)." },
      { src: "/images/FC-2013-620/FC-2013-620-13.png", alt: "Header detail view (view 13)." },
      { src: "/images/FC-2013-620/FC-2013-620-backend-hero.png", alt: "Alternative rear/side hero image of the Zürn ProfiCut 620." },
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
      brochureUrl: PROFICUT_BROCHURE_URL,
    },
  },
  {
    id: "fc-2012-620",
    listingType: "for-sale",
    status: "sold",
    category: "forager-header",
    createdAt: "2026-03-07T09:00:00Z",
    title: "Zürn ProfiCut 620",
    subtitle: "Direct Cut Wholecrop Header",
    year: "2012",
    location: "UK",
    country: "UK",
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
  {
    id: "fc-2020-490",
    listingType: "for-sale",
    status: "available",
    highlights: ["12-row"],
    category: "forager-header",
    createdAt: "2026-03-06T09:00:00Z",
    title: "Kemper 490 Plus Forager Header",
    subtitle: "9.0 m working width | 12-row",
    year: "2020",
    location: "UK",
    country: "UK",
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
  {
    id: "fc-ford-weights",
    listingType: "for-sale",
    status: "available",
    highlights: ["vintage"],
    category: "front-weights",
    createdAt: "2026-03-05T09:00:00Z",
    title: "Ford Tractor Front Weights",
    subtitle: "Full set on stand — proper old-school ballast",
    year: "Vintage",
    location: "Bradford-on-Avon",
    country: "UK",
    serialRef: "FC-Ford-Weights",
    priceText: "Offers",
    heroImage: {
      src: "/images/FC-Ford-Weights/FC-Ford-Weights-hero.jpg",
      alt: "Ford-branded suitcase weights on front bracket — close-up showing cast FORD lettering.",
    },
    description:
      "Honestly? We're not entirely sure what breed of Ford these came off — but they're the real deal. Genuine Ford cast-iron front weights, full set on the original stand, built like absolute tanks. They've got that proper lived-in patina that only comes from decades of honest work. If your tractor's front end needs some extra conviction, or you just appreciate a nice bit of Ford iron, give us a shout.",
    specs: [
      { label: "Make", value: "Ford" },
      { label: "Type", value: "Front tractor weights (cast iron)" },
      { label: "Condition", value: "Used — honest patina, solid throughout" },
    ],
    notes: [
      "Not sure if these fit your setup? Drop us a message — we won't judge the question.",
    ],
    gallery: [
      { src: "/images/FC-Ford-Weights/FC-Ford-Weights-1.jpg", alt: "Full stack of Ford wheel weights on stand — showing the sheer quantity of cast-iron ballast." },
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
    },
  },
  {
    id: "bateman-rb35-2019",
    listingType: "for-sale",
    status: "available",
    category: "self-propelled-sprayer",
    createdAt: "2026-03-12T10:45:00Z",
    title: "2019 Bateman RB35 Self Propelled Sprayer",
    subtitle: "30/24m VG contour boom | 4-speed 60k transmission",
    year: "2019",
    location: "UK",
    country: "UK",
    serialRef: "FC-2019-BATEMAN-RB35-001",
    priceText: "£165,000 + VAT",
    price: "£165,000 + VAT",
    hours: "4,700",
    heroImage: {
      src: "/images/FC-2019-BATEMAN-RB35-001/FC-2019-BATEMAN-RB35-001-hero.jpg",
      alt: "2019 Bateman RB35 self propelled sprayer (hero view).",
    },
    gallery: [
      { src: "/images/FC-2019-BATEMAN-RB35-001/FC-2019-BATEMAN-RB35-001-front.jpg", alt: "Front view of the Bateman RB35 sprayer." },
      { src: "/images/FC-2019-BATEMAN-RB35-001/FC-2019-BATEMAN-RB35-001-rear.jpg", alt: "Rear view of the Bateman RB35 sprayer." },
      { src: "/images/FC-2019-BATEMAN-RB35-001/FC-2019-BATEMAN-RB35-001-side-left.jpg", alt: "Left side view of the Bateman RB35 sprayer." },
      { src: "/images/FC-2019-BATEMAN-RB35-001/FC-2019-BATEMAN-RB35-001-side-right.jpg", alt: "Right side view of the Bateman RB35 sprayer." },
      { src: "/images/FC-2019-BATEMAN-RB35-001/FC-2019-BATEMAN-RB35-001-cab.jpg", alt: "Cab view of the Bateman RB35 sprayer." },
      { src: "/images/FC-2019-BATEMAN-RB35-001/FC-2019-BATEMAN-RB35-001-controls.jpg", alt: "Operator controls inside the Bateman RB35 sprayer." },
      { src: "/images/FC-2019-BATEMAN-RB35-001/FC-2019-BATEMAN-RB35-001-cert.jpg", alt: "Certification and documentation image for the Bateman RB35 sprayer." },
      { src: "/images/FC-2019-BATEMAN-RB35-001/FC-2019-BATEMAN-RB35-001-field.jpg", alt: "Bateman RB35 sprayer in field working context." },
    ],
    description: `Bateman RB35 Self Propelled Sprayer – 2019 – 4,700 Hours

A well maintained Bateman RB35 self propelled sprayer equipped with a 30/24m VG contour boom and Norac BBL contour following system.

This machine has covered approximately 4,700 hours and comes with a full service history. The RB35 is fitted with autosteer, a 4 speed 60k transmission, autolube system, and a 5 way nozzle setup.

Track width can be adjusted from the cab and the machine comes with two wheel sets (420 and 600) making it suitable for a wide range of spraying conditions.

The sprayer is in good working order and ready for the coming season.

Transport and finance options available.

Viewings welcome.

Contact FarmCash for full details.`,
    features: [
      "2019 Bateman RB35",
      "4,700 hours",
      "30/24m VG contour boom",
      "Norac BBL contour following",
      "Autosteer fitted",
      "4 speed transmission (60k)",
      "Autolube system",
      "5 way nozzle setup",
      "Track adjustment from cab",
      "Two wheel sets (420 & 600)",
      "Full service history",
    ],
    specs: [
      { label: "Make", value: "Bateman" },
      { label: "Model", value: "RB35" },
      { label: "Machine type", value: "Self Propelled Sprayer" },
      { label: "Year", value: "2019" },
      { label: "Hours", value: "4,700" },
      { label: "Price", value: "£165,000 + VAT" },
      { label: "Location", value: "UK" },
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
    },
  },
  {
    id: "fc-2012-horsch-maestro-1275-001",
    listingType: "for-sale",
    status: "available",
    highlights: ["12-row"],
    createdAt: "2026-03-13T09:00:00Z",
    title: "2012 Horsch Maestro 12.75 SW",
    subtitle: "12 row maize drill",
    year: "2012",
    location: "UK",
    country: "UK",
    serialRef: "FC-2012-HORSCH-MAESTRO-1275-001",
    priceText: "£50,000",
    price: "£50,000",
    heroImage: {
      src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/6.png",
      alt: "2012 Horsch Maestro 12.75 SW seed drill shown in full side profile.",
    },
    gallery: [
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/1.png", alt: "Horsch Maestro 12.75 SW image 1." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/2.png", alt: "Horsch Maestro 12.75 SW image 2." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/3.png", alt: "Horsch Maestro 12.75 SW image 3." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/4.png", alt: "Horsch Maestro 12.75 SW image 4." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/5.png", alt: "Horsch Maestro 12.75 SW image 5." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/6.png", alt: "Horsch Maestro 12.75 SW image 6." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/7.png", alt: "Horsch Maestro 12.75 SW image 7." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/8.png", alt: "Horsch Maestro 12.75 SW image 8." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/9.png", alt: "Horsch Maestro 12.75 SW image 9." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/10.png", alt: "Horsch Maestro 12.75 SW image 10." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/11.png", alt: "Horsch Maestro 12.75 SW image 11." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/12.png", alt: "Horsch Maestro 12.75 SW image 12." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/13.png", alt: "Horsch Maestro 12.75 SW image 13." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/14.png", alt: "Horsch Maestro 12.75 SW image 14." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/15.png", alt: "Horsch Maestro 12.75 SW image 15." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/16.png", alt: "Horsch Maestro 12.75 SW image 16." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/17.png", alt: "Horsch Maestro 12.75 SW image 17." },
      { src: "/images/FC-2012-HORSCH-MAESTRO-1275-001/18.png", alt: "Horsch Maestro 12.75 SW image 18." },
    ],
    description:
      "2012 Horsch Maestro 12.75 SW seed drill in good working order and prepared for the coming season. This 12 row maize drill has covered approximately 10,000 hectares and is fitted with brand new 520/85R42 wheels.",
    features: [
      "12 row maize drill",
      "10,000 hectares",
      "Prepared and ready for the coming season",
      "Brand new 520/85R42 wheels fitted",
    ],
    specs: [
      { label: "Brand", value: "Horsch" },
      { label: "Model", value: "Maestro 12.75 SW" },
      { label: "Category", value: "Seed Drill" },
      { label: "Year", value: "2012" },
      { label: "Machine number", value: "12229" },
      { label: "Location", value: "UK" },
      { label: "Price", value: "£50,000" },
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
    },
  },
  {
    id: "fc-2014-new-holland-t6-140-001",
    listingType: "for-sale",
    status: "available",
    highlights: ["low-hours"],
    category: "tractor",
    createdAt: "2026-03-13T12:00:00Z",
    title: "New Holland T6 140",
    subtitle: "New listing",
    year: "2014",
    location: "UK",
    country: "UK",
    serialRef: "FC-2014-NEW-HOLLAND-T6-140-001",
    priceText: "New Listing... More pictures and info to follow",
    price: "New Listing... More pictures and info to follow",
    hours: "17,000",
    heroImage: {
      src: "/images/FC-2014-NEW-HOLLAND-T6-140-001/hero.jpeg",
      alt: "New Holland T6.140 tractor (hero view).",
    },
    gallery: [
      { src: "/images/FC-2014-NEW-HOLLAND-T6-140-001/hero.jpeg", alt: "New Holland T6.140 tractor image 1 (hero)." },
      { src: "/images/FC-2014-NEW-HOLLAND-T6-140-001/1.jpeg", alt: "New Holland T6.140 tractor image 2." },
    ],
    description:
      "New Holland T6 140 with 17,000 hours. New listing — more pictures and info to follow.",
    specs: [
      { label: "Brand", value: "New Holland" },
      { label: "Model", value: "T6 140" },
      { label: "Year", value: "2014" },
      { label: "Hours", value: "17,000" },
      { label: "Configuration", value: "Cab tractor" },
      { label: "Listing status", value: "New listing" },
      { label: "Location", value: "UK" },
      { label: "Update", value: "More pictures and info to follow" },
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
    },
  },
  {
    id: "fc-2019-horsch-maestro-1275-002",
    listingType: "for-sale",
    status: "available",
    highlights: ["12-row"],
    createdAt: "2026-03-17T09:00:00Z",
    title: "2019 Horsch Maestro 12.75 SW",
    subtitle: "12 row maize drill",
    year: "2019",
    location: "UK",
    country: "UK",
    serialRef: "FC-2019-HORSCH-MAESTRO-1275-002",
    priceText: "£62,500 + VAT",
    price: "£62,500 + VAT",
    heroImage: {
      src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/hero.png",
      alt: "2019 Horsch Maestro 12.75 SW maize drill hero view.",
    },
    gallery: [
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/hero.png", alt: "Horsch Maestro 12.75 SW hero view." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/2.png", alt: "Horsch Maestro 12.75 SW image 2." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/3.png", alt: "Horsch Maestro 12.75 SW image 3." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/4.png", alt: "Horsch Maestro 12.75 SW image 4." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/5.png", alt: "Horsch Maestro 12.75 SW image 5." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/6.png", alt: "Horsch Maestro 12.75 SW image 6." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/7.png", alt: "Horsch Maestro 12.75 SW image 7." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/8.png", alt: "Horsch Maestro 12.75 SW image 8." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/9.png", alt: "Horsch Maestro 12.75 SW image 9." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/10.png", alt: "Horsch Maestro 12.75 SW image 10." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/11.png", alt: "Horsch Maestro 12.75 SW image 11." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/12.png", alt: "Horsch Maestro 12.75 SW image 12." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/13.png", alt: "Horsch Maestro 12.75 SW image 13." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/14.png", alt: "Horsch Maestro 12.75 SW image 14." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/15.png", alt: "Horsch Maestro 12.75 SW image 15." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/16.png", alt: "Horsch Maestro 12.75 SW image 16." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/17.png", alt: "Horsch Maestro 12.75 SW image 17." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/18.png", alt: "Horsch Maestro 12.75 SW image 18." },
      { src: "/images/FC-2019-HORSCH-MAESTRO-1275-002/19.png", alt: "Horsch Maestro 12.75 SW image 19." },
    ],
    description:
      "2019 Horsch Maestro 12.75 SW 12-row maize drill with approximately 5,500 hectares completed. A well-known, high-capacity precision drill designed for efficient large-scale planting.\n\nThe machine presents well and is in good working condition, with expected wear for its age and workload. Some wear parts may require attention depending on buyer preference, which can be reviewed as part of the sale process.\n\nA solid, value-led option for operators looking for a reliable Maestro system without new machine pricing.",
    features: [
      "Proven high-output Horsch precision drilling system",
      "Large hopper capacity reduces fill time in the field",
      "Strong hectare output — built for scale and efficiency",
      "Clean, straight machine with good commercial value",
    ],
    specs: [
      { label: "Brand", value: "Horsch" },
      { label: "Model", value: "Maestro 12.75 SW" },
      { label: "Year", value: "2019" },
      { label: "Rows", value: "12 row maize drill" },
      { label: "Serial / Ref", value: "Machine 14687" },
      { label: "Work done", value: "Approx. 5,500 hectares" },
      { label: "Hopper capacity", value: "9,500 kg" },
      { label: "Condition", value: "Good working order, typical wear for age/use" },
      { label: "Location", value: "UK" },
      { label: "Price", value: "£62,500 + VAT" },
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
    },
  },
  {
    id: "fc-2017-horsch-maestro-1275-003",
    listingType: "for-sale",
    status: "available",
    highlights: ["16-row"],
    createdAt: "2026-03-20T09:00:00Z",
    title: "2017 Horsch Maestro 16.75 SW",
    subtitle: "16 row maize drill",
    year: "2017",
    location: "UK",
    country: "UK",
    serialRef: "FC-2017-HORSCH-MAESTRO-1275-003",
    priceText: "£99,500 + VAT",
    price: "£99,500 + VAT",
    heroImage: {
      src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/hero.png",
      alt: "2017 Horsch Maestro 16.75 SW maize drill hero view.",
    },
    gallery: [
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/hero.png", alt: "Horsch Maestro 16.75 SW hero view." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/1.png", alt: "Horsch Maestro 16.75 SW image 1." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/2.png", alt: "Horsch Maestro 16.75 SW image 2." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/3.png", alt: "Horsch Maestro 16.75 SW image 3." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/4.png", alt: "Horsch Maestro 16.75 SW image 4." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/5.png", alt: "Horsch Maestro 16.75 SW image 5." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/6.png", alt: "Horsch Maestro 16.75 SW image 6." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/7.png", alt: "Horsch Maestro 16.75 SW image 7." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/8.png", alt: "Horsch Maestro 16.75 SW image 8." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/9.png", alt: "Horsch Maestro 16.75 SW image 9." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/10.png", alt: "Horsch Maestro 16.75 SW image 10." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/11.png", alt: "Horsch Maestro 16.75 SW image 11." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/12.png", alt: "Horsch Maestro 16.75 SW image 12." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/13.png", alt: "Horsch Maestro 16.75 SW image 13." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/14.png", alt: "Horsch Maestro 16.75 SW image 14." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/15.png", alt: "Horsch Maestro 16.75 SW image 15." },
      { src: "/images/FC-2017-HORSCH-MAESTRO-1275-003/16.png", alt: "Horsch Maestro 16.75 SW image 16." },
    ],
    description:
      "2017 Horsch Maestro 16.75 SW 16-row maize drill with approximately 5,100 hectares completed. A high-capacity precision drill built for large-scale operations looking to maximise output and efficiency.\n\nThe machine is in good working condition with expected wear for its age and workload. A well-regarded model offering reliable performance and strong field results.\n\nA great option for buyers looking to step up capacity without committing to new machine cost.",
    features: [
      "16 row capacity for serious output and scale",
      "Proven Horsch Maestro precision planting system",
      "High hectare efficiency with fewer passes",
      "Strong commercial alternative to new pricing",
    ],
    specs: [
      { label: "Brand", value: "Horsch" },
      { label: "Model", value: "Maestro 16.75 SW" },
      { label: "Year", value: "2017" },
      { label: "Rows", value: "16 row maize drill" },
      { label: "Serial / Ref", value: "Machine 13447" },
      { label: "Work done", value: "Approx. 5,100 hectares" },
      { label: "Hopper capacity", value: "Large central hopper system" },
      { label: "Condition", value: "Good working order, typical wear for age/use" },
      { label: "Location", value: "UK" },
      { label: "Price", value: "£99,500 + VAT" },
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
    },
  },
  {
    id: "fc-2016-horsch-maestro-1275-004",
    listingType: "for-sale",
    status: "available",
    highlights: ["12-row"],
    createdAt: "2026-03-20T09:00:00Z",
    title: "2016 Horsch Maestro 12.75 SW",
    subtitle: "12 row maize drill",
    year: "2016",
    location: "UK",
    country: "UK",
    serialRef: "FC-2016-HORSCH-MAESTRO-1275-004",
    priceText: "£59,500 + VAT",
    price: "£59,500 + VAT",
    heroImage: {
      src: "/images/FC-2016-HORSCH-MAESTRO-1275-004/hero.png",
      alt: "2016 Horsch Maestro 12.75 SW maize drill side profile.",
    },
    gallery: [
      { src: "/images/FC-2016-HORSCH-MAESTRO-1275-004/hero.png", alt: "2016 Horsch Maestro 12.75 SW maize drill side profile." },
      { src: "/images/FC-2016-HORSCH-MAESTRO-1275-004/1.png", alt: "Horsch Maestro 12.75 SW — close-up of chassis, axle and tyre condition." },
    ],
    description:
      "2016 Horsch Maestro 12.75 SW 12-row maize drill with approximately 7,600 hectares completed.\n\nA well-proven precision drill offering strong output and reliable performance. This machine sits in a practical middle ground — newer than early models, but still representing good value against later machines.\n\nThe drill is in good working condition with expected wear for its age and workload. Some wear parts may require attention depending on buyer preference, which can be discussed as part of the sale.\n\nA solid option for operators looking for dependable Horsch performance without stepping up to newer price points.",
    features: [
      "12 row precision maize drill",
      "Proven Horsch Maestro system",
      "Approx. 7,600 hectares completed",
      "Strong balance of price vs performance",
      "Straight, honest machine ready for work",
    ],
    specs: [
      { label: "Brand", value: "Horsch" },
      { label: "Model", value: "Maestro 12.75 SW" },
      { label: "Year", value: "2016" },
      { label: "Rows", value: "12 row maize drill" },
      { label: "Serial / Ref", value: "Machine 14806" },
      { label: "Work done", value: "Approx. 7,600 hectares" },
      { label: "Condition", value: "Good working order, typical wear for age/use" },
      { label: "Location", value: "UK" },
      { label: "Price", value: "£59,500 + VAT" },
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
    },
  },
  {
    id: "fc-2022-jcb-535-95-001",
    listingType: "for-sale",
    status: "available",
    highlights: ["low-hours"],
    createdAt: "2026-03-24T10:00:00Z",
    title: "2022 JCB 535-95",
    subtitle: "9.5m lift height telehandler",
    year: "2022",
    location: "UK (exact location to be confirmed)",
    country: "UK",
    serialRef: "FC-2022-JCB-535-95-001",
    priceText: "Price on Application",
    price: "Price on Application",
    hours: "400",
    heroImage: {
      src: "/images/FC-2022-JCB-53595-001/hero.png",
      alt: "2022 JCB 535-95 telehandler hero image.",
    },
    gallery: [
      { src: "/images/FC-2022-JCB-53595-001/1.png", alt: "2022 JCB 535-95 telehandler image 1." },
      { src: "/images/FC-2022-JCB-53595-001/2.png", alt: "2022 JCB 535-95 telehandler image 2." },
      { src: "/images/FC-2022-JCB-53595-001/3.png", alt: "2022 JCB 535-95 telehandler image 3." },
      { src: "/images/FC-2022-JCB-53595-001/4.png", alt: "2022 JCB 535-95 telehandler image 4." },
      { src: "/images/FC-2022-JCB-53595-001/5.png", alt: "2022 JCB 535-95 telehandler image 5." },
      { src: "/images/FC-2022-JCB-53595-001/6.png", alt: "2022 JCB 535-95 telehandler image 6." },
      { src: "/images/FC-2022-JCB-53595-001/7.png", alt: "2022 JCB 535-95 telehandler image 7." },
    ],
    description:
      "2022 JCB 535-95 telehandler with only 400 hours from new. A very clean, low-use example that’s ready for immediate work. Modern spec machine with strong demand across agriculture and construction. More information available on request.",
    features: [
      "Exceptionally low hours — only 400",
      "Modern, high-demand telehandler",
      "Ready to go straight to work",
    ],
    specs: [
      { label: "Brand", value: "JCB" },
      { label: "Model", value: "535-95" },
      { label: "Machine type", value: "Telehandler" },
      { label: "Year", value: "2022" },
      { label: "Hours", value: "400" },
      { label: "Lift height", value: "9.5 m" },
      { label: "Condition", value: "Very low hours, clean example" },
      { label: "Location", value: "UK (exact location to be confirmed)" },
      { label: "Price", value: "Price on Application" },
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
      financeQuoteUrl: FINANCE_FORM_URL,
    },
  },
  {
    id: "wanted-2",
    listingType: "wanted",
    status: "available",
    category: "rotary-rake",
    createdAt: "2026-03-10T09:00:00Z",
    title: "Claas Liner 2700 / 2800 Rotary Rake",
    subtitle: "Twin rotor rotary rake",
    year: "2014–2017",
    location: "UK preferred",
    country: "UK",
    priceText: "Open to market",
    heroImage: {
      src: "/images/FC-2026-wanted-2/hero.jpg",
      alt: "Claas Liner twin-rotor rotary rake shown in working position, with two circular rotors fitted with red spring tines, a central drawbar hitch, and rear transport wheels raised for field operation.",
    },
    description:
      "We are looking to source a Claas Liner 2700 or 2800 twin-rotor rotary rake from 2014–2017. Preference is for tidy, field-ready machines with good tine condition and a straight chassis. UK-based units are ideal; we can consider mainland Europe for the right machine.",
    specs: [
      { label: "Make", value: "Claas" },
      { label: "Model", value: "Liner 2700 / 2800" },
      { label: "Type", value: "Twin-rotor rotary rake" },
      { label: "Model years", value: "2014–2017" },
      { label: "Location preference", value: "UK preferred" },
    ],
    ctas: {
      whatsappUrl: WHATSAPP_URL,
      phoneNumber: PHONE_NUMBER,
    },
  },
];

export const counts = {
  all: listings.length,
  forSale: listings.filter((l) => l.listingType === "for-sale").length,
  wanted: listings.filter((l) => l.listingType === "wanted").length,
};
