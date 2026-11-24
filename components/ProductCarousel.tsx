"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { products } from "@/lib/products";
import Image from "next/image";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export default function ProductCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const start = el.scrollLeft <= 4;
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    // Same value -> React bails out, so scrolling stays cheap.
    setEdge((p) => (p.start === start && p.end === end ? p : { start, end }));
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [update]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const btn =
    "grid size-10 place-items-center rounded-full border border-neutral-300 bg-white text-neutral-900 transition-[opacity,transform] duration-200 hover:border-neutral-900 active:scale-95 disabled:pointer-events-none disabled:opacity-30";

  return (
    <section aria-labelledby="products-title" className="bg-neutral-100 py-16">
      <div className="mx-auto flex max-w-6xl items-end justify-between px-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
            Products
          </p>
          <h2
            id="products-title"
            className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Built for what&apos;s next.
          </h2>
        </div>

        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            className={btn}
            onClick={() => scrollByPage(-1)}
            disabled={edge.start}
            aria-label="Previous products"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            className={btn}
            onClick={() => scrollByPage(1)}
            disabled={edge.end}
            aria-label="Next products"
          >
            <Chevron dir="right" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={update}
        tabIndex={0}
        role="region"
        aria-label="Mecozx products"
        className="no-scrollbar track-pad mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 outline-offset-4"
      >
        {products.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[24rem] w-64 shrink-0 snap-start flex-col justify-between rounded-md bg-white p-5 transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none"
          >
            <Image
              src={p.image.src}
              alt={`${p.name} logo`}
              width={p.image.width}
              height={p.image.height}
              className="h-14 w-auto max-w-full select-none rounded-lg object-contain object-left"
            />

            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                {p.tag}
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight">
                {p.name}
              </h3>
              <p className="mt-2 text-sm leading-snug text-neutral-500">
                {p.description}
              </p>
              <div className="mt-5 flex items-center justify-between text-xs font-medium text-neutral-900">
                <span className="inline-flex items-center gap-2">
                  {p.status && (
                    <span className="size-1.5 rounded-full bg-amber-400" />
                  )}
                  {p.status ?? "Visit"}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
