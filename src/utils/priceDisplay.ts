export type VatDisplayStatus = "for-sale" | "wanted" | "sold" | string;

type VatPriceOptions = {
  status?: VatDisplayStatus;
  value?: string | number | null;
  fallback?: string;
};

const POA_PATTERN = /\b(poa|price\s+on\s+application)\b/i;
const VAT_SUFFIX_PATTERN = /\s*\+\s*vat\b/i;

const normalizeStatus = (status?: VatDisplayStatus) => String(status || "").toLowerCase().trim();

const isWantedStatus = (status?: VatDisplayStatus) => normalizeStatus(status).includes("want");

const hasNumericPrice = (value: string) => /\d/.test(value) || /[£€$]/.test(value);

export const getVatDisplayPrice = ({ status, value, fallback = "POA" }: VatPriceOptions) => {
  const normalizedStatus = normalizeStatus(status);

  if (normalizedStatus === "sold") {
    return { primary: "SOLD", showVat: false };
  }

  if (isWantedStatus(status)) {
    const wantedValue = String(value || "").trim();
    return { primary: wantedValue || "Wanted", showVat: false };
  }

  const raw = String(value ?? "").trim();
  if (!raw) {
    return { primary: fallback, showVat: false };
  }

  if (POA_PATTERN.test(raw)) {
    return { primary: raw, showVat: false };
  }

  const primary = raw.replace(VAT_SUFFIX_PATTERN, "").trim();
  const showVat = hasNumericPrice(primary);

  return { primary, showVat };
};
