import Image from "next/image";
import Countdown from "@/components/Countdown";
import ProductCarousel from "@/components/ProductCarousel";
import ShareLink from "@/components/ShareLink";
import { TAGLINE } from "@/lib/config";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col overflow-x-clip">
      <h1 className="sr-only">Mecozx — launching soon</h1>

      {/* Logo: centre fade-in, then glides to the top (see .logo-intro) */}
      <header className="flex justify-center pt-8 sm:pt-10">
        <div className="logo-intro h-7 sm:h-10">
          <Image
            src="/mecozx-logo.png"
            alt="Mecozx"
            width={531}
            height={80}
            priority
            className="h-7 w-auto select-none sm:h-10"
          />
        </div>
      </header>

      <section className="px-6 pb-20 pt-16 sm:pt-24">
        <div className="reveal mx-auto flex max-w-3xl flex-col items-center text-center">
          <Countdown />
          <p className="mt-10 max-w-md text-balance text-base leading-relaxed text-neutral-500">
            {TAGLINE} Our full site is almost ready.
          </p>
        </div>
      </section>

      <div className="reveal" style={{ "--d": "0.15s" } as React.CSSProperties}>
        <ProductCarousel />
      </div>

      <div
        className="reveal px-6 py-20"
        style={{ "--d": "0.3s" } as React.CSSProperties}
      >
        <ShareLink />
      </div>

      <footer
        className="reveal mt-auto px-6 pb-8 text-center text-xs text-neutral-400"
        style={{ "--d": "0.4s" } as React.CSSProperties}
      >
        © {new Date().getFullYear()} Mecozx. All rights reserved.
      </footer>
    </main>
  );
}
