export type Glyph = "ring" | "grid" | "bars" | "dots" | "diamond";

export interface Product {
  name: string;
  tag: string;
  description: string;
  glyph: Glyph;
}

/**
 * Placeholder product cards - edit freely.
 * Add `href` support in components/ProductCarousel.tsx when product pages exist.
 */
export const products: Product[] = [
  {
    name: "Mecozx Vault",
    tag: "Hardware wallet",
    description: "Cold storage with transparent, auditable hardware.",
    glyph: "ring",
  },
  {
    name: "Mecozx Bio",
    tag: "Biometric key",
    description: "Fingerprint-secured signing that never leaves the device.",
    glyph: "dots",
  },
  {
    name: "Mecozx Node",
    tag: "Web3 infrastructure",
    description: "Plug-in hardware to run your own decentralized node.",
    glyph: "grid",
  },
  {
    name: "Mecozx Sign",
    tag: "Secure signer",
    description: "Offline transaction signing, verified on a clear display.",
    glyph: "bars",
  },
  {
    name: "Mecozx Shield",
    tag: "Backup",
    description: "Durable recovery hardware for the keys that matter.",
    glyph: "diamond",
  },
];
