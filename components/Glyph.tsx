import type { Glyph as GlyphName } from "@/lib/products";

export default function Glyph({ name }: { name: GlyphName }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "ring":
      return (
        <svg {...common}>
          <circle cx="14" cy="14" r="10" />
          <circle cx="14" cy="14" r="3.5" />
        </svg>
      );
    case "grid":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="8" height="8" rx="1.5" />
          <rect x="16" y="4" width="8" height="8" rx="1.5" />
          <rect x="4" y="16" width="8" height="8" rx="1.5" />
          <rect x="16" y="16" width="8" height="8" rx="1.5" />
        </svg>
      );
    case "bars":
      return (
        <svg {...common}>
          <path d="M5 8h18M5 14h12M5 20h18" />
        </svg>
      );
    case "dots":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="2.2" />
          <circle cx="20" cy="8" r="2.2" />
          <circle cx="8" cy="20" r="2.2" />
          <circle cx="20" cy="20" r="2.2" />
          <circle cx="14" cy="14" r="2.2" />
        </svg>
      );
    case "diamond":
      return (
        <svg {...common}>
          <path d="M14 3l11 11-11 11L3 14 14 3z" />
        </svg>
      );
  }
}
