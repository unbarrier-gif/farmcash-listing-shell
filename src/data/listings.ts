export type ListingStatus = "for-sale" | "wanted";

export type ListingSpecRow = {
  label: string;
  value: string;
};

export type Listing = {
  id: string;
  status: ListingStatus;
  title: string;
  year: string;
  priceText?: string;

  heroImage: {
    src: string;
    alt: string;
  };

  /** Optional: shown on listing detail page */
  specs?: ListingSpecRow[];

  /** Optional: brochure link shown on listing detail page */
  brochureUrl?: string;

  /** Optional: small note shown on listing detail page */
  notes?: string[];
};

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
  heroImage: {
    src: "/images/Ad 1 zurn-proficut-620-hero.jpg",
    alt: "Zurn Profi Cut 620 forage wagon secured on low loader truck for transport, side view",
  },
},

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
    heroImage: {
      src: "/images/ad-2-zurn-proficut-620-2012-hero.jpg",
      alt: "Zurn ProfiCut 620 2012 forage wagon shown in transport position",
    },
  },

  /**
   * AD 3 — FOR SALE (client specs added)
   */
  {
    id: "ad-3",
    status: "for-sale",
    title: "Kemper 490 Plus Forager Header",
    year: "2020",
    priceText: "POA / Offers",
    heroImage: {
      src: "/images/ad-3-kemper-490pro-9m-hero.jpg",
      alt: "Kemper forager header with 9.0 metre working width",
    },

    specs: [
      { label: "Model", value: "Kemper 490 Plus" },
      { label: "Working width", value: "9 m" },
      { label: "Rows", value: "12-row" },
      { label: "Year (MY)", value: "2020" },
      {
        label: "Brackets / setup",
        value: "Fits wide body Krone models 680–1180",
      },
    ],

    brochureUrl:
      "https://unbarrier.me/wp-content/uploads/2026/01/proficut_fendt_brochure_en_2015-03_web-2.pdf",

    notes: [
      "This unit is a 490 Plus model. Newer units are referred to as 490 Pro (a slightly evolved version).",
      "The brochure link available is for the Pro model; functionally the Plus and Pro are essentially the same.",
    ],
  },

  /**
   * WANTED — TEMPLATE
   */
  {
    id: "wanted-1",
    status: "wanted",
    title: "Wanted: Forager Header",
    year: "Any",
    priceText: "Budget on request",
    heroImage: {
      src: "/images/ad-3-kemper-490pro-9m-hero.jpg",
      alt: "Wanted advert placeholder for forager header requirement",
    },
  },
];

export const counts = {
  all: listings.length,
  forSale: listings.filter((l) => l.status === "for-sale").length,
  wanted: listings.filter((l) => l.status === "wanted").length,
};
