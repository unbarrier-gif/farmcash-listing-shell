export type ListingStatus = "for-sale" | "wanted";

export type Listing = {
  id: string;
  status: ListingStatus;
  title: string;
  year: string;
  priceText?: string; // e.g. "£35,000 + VAT", "POA", "Budget: £XX,XXX"
  heroImage: {
    src: string;
    alt: string;
  };
};

export const listings: Listing[] = [
  {
    id: "2",
    status: "for-sale",
    title: "Zurn Profi Cut 620",
    year: "2012",
    priceText: "POA",
    heroImage: {
      // Put the hero image in /public/images/ and use this path:
      src: "/images/zurn-proficut-620-hero.jpg",
      alt: "Zurn Profi Cut 620 forage wagon secured on low loader truck for transport, side view",
    },
  },

  // TEMPLATE: add your next FOR SALE advert here
  {
    id: "3",
    status: "for-sale",
    title: "Advert 3 Title",
    year: "Year",
    priceText: "POA",
    heroImage: {
      src: "/images/ad-3-hero.jpg",
      alt: "Hero image for advert 3",
    },
  },

  // TEMPLATE: wanted example
  {
    id: "w-1",
    status: "wanted",
    title: "Wanted: Example Machine",
    year: "Any",
    priceText: "Budget: £XX,XXX",
    heroImage: {
      src: "/images/wanted-placeholder.jpg",
      alt: "Wanted advert placeholder image for machinery requirement",
    },
  },
];

export const counts = {
  all: listings.length,
  forSale: listings.filter((l) => l.status === "for-sale").length,
  wanted: listings.filter((l) => l.status === "wanted").length,
};
