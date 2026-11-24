export interface Product {
  name: string;
  tag: string;
  description: string;
  href: string;
  /** Shown instead of the arrow when the product is not live yet. */
  status?: string;
  image: { src: string; width: number; height: number };
}

export const products: Product[] = [
  {
    name: "CoSign",
    tag: "Source-available",
    description:
      "Independent co-signing guardrail for crypto exchanges. Decodes, prices and policy-checks every withdrawal before adding a required second signature.",
    href: "https://cosignlanding-iota.vercel.app/",
    image: { src: "/products/cosign.png", width: 240, height: 240 },
  },
  {
    name: "Pay3 Wallet",
    tag: "EVM wallet",
    description:
      "One of the fastest EVM wallets. 9 major blockchains with the lowest fees possible.",
    href: "https://pay3.space",
    image: { src: "/products/pay3.png", width: 240, height: 240 },
  },
  {
    name: "WorkMail",
    tag: "Email control center",
    description:
      "Compose from noreply@, support@ or info@, test templates and use the API Playground, all through your own Resend key.",
    href: "https://workmail.space",
    image: { src: "/products/workmail.png", width: 939, height: 240 },
  },
  {
    name: "1Block",
    tag: "Blockchain",
    description:
      "One of the world's fastest single-node blockchains, with a 3 second block time.",
    href: "https://github.com/realmasrur/1block",
    image: { src: "/products/1block.png", width: 240, height: 240 },
  },
  {
    name: "VoidKin",
    tag: "Money transfer",
    description: "Multicurrency faith money transfer application.",
    href: "https://kin.voidkin.world",
    status: "In development",
    image: { src: "/products/voidkin.png", width: 329, height: 240 },
  },
];
