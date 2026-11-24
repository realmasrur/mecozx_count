"use client";

import { useEffect, useState } from "react";
import { LAUNCH_DATE } from "@/lib/config";

const target = new Date(LAUNCH_DATE).getTime();

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown() {
  // null until mounted: server HTML and first client render match exactly.
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);

  useEffect(() => {
    if (Number.isNaN(target)) return;
    let last = -1;

    const tick = () => {
      const s = Math.max(0, Math.floor((target - Date.now()) / 1000));
      if (s !== last) {
        last = s;
        setSecondsLeft(s); // only re-renders when the visible second changes
      }
    };

    tick();
    const id = window.setInterval(tick, 250);
    document.addEventListener("visibilitychange", tick);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", tick);
    };
  }, []);

  const ready = secondsLeft !== null;
  const t = secondsLeft ?? 0;
  const done = ready && t === 0;

  const units = [
    { label: "Days", short: "D", value: Math.floor(t / 86400) },
    { label: "Hours", short: "H", value: Math.floor((t % 86400) / 3600) },
    { label: "Minutes", short: "M", value: Math.floor((t % 3600) / 60) },
    { label: "Seconds", short: "S", value: t % 60 },
  ];

  return (
    <div className="flex flex-col items-center">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
        {done ? "Launching now" : "Time left to launch"}
      </p>

      <ul
        role="timer"
        aria-label="Time left to launch"
        className="mt-6 grid w-full max-w-sm grid-cols-2 gap-3 sm:flex sm:max-w-none sm:w-auto sm:gap-4"
      >
        {units.map((u) => (
          <li
            key={u.label}
            className="flex items-center justify-center gap-3 rounded-full bg-black py-2.5 pl-2.5 pr-6 text-white"
          >
            <span
              aria-hidden="true"
              className="grid size-9 place-items-center rounded-full bg-white font-mono text-xs font-semibold text-black"
            >
              {u.short}
            </span>
            <span className="min-w-[2ch] font-mono text-2xl tabular-nums tracking-tight sm:text-3xl">
              {ready ? pad(u.value) : "--"}
            </span>
            <span className="sr-only">{u.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
