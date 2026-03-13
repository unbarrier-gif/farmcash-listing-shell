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
  portalUrl?: string;
};

export type Listing = {
  /** This is the URL id: /listing/:id */
  id: string;

  /** "for-sale" | "wanted" */
  status: ListingStatus;

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
  /**
   * AD 1 — FOR SALE
   * URL: /listing/fc-2013-620
   */
  {
    id: "fc-2013-620",
    status: "for-sale",
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

  /**
   * AD 2 — FOR SALE
   * URL: /listing/fc-2012-620
   */
  {
    id: "fc-2012-620",
    status: "sold",
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

  /**
   * AD 3 — FOR SALE
   * URL: /listing/fc-2020-490
   */
  {
    id: "fc-2020-490",
    status: "for-sale",
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

  /**
   * AD 4 — FOR SALE
   * URL: /listing/fc-ford-weights
   */
  {
    id: "fc-ford-weights",
    status: "for-sale",
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

  /**
   * AD 5 — FOR SALE
   * URL: /listing/bateman-rb35-2019
   */
  {
    id: "bateman-rb35-2019",
    status: "for-sale",
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

  /**
   * WANTED 2
   * URL: /listing/wanted-2
   */
  {
    id: "wanted-2",
    status: "wanted",
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
  forSale: listings.filter((l) => l.status === "for-sale").length,
  wanted: listings.filter((l) => l.status === "wanted").length,
};
