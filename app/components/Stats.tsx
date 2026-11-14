"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 100, suffix: "+", label: "People onboarded" },
  { value: 500, suffix: "+", label: "Event participants" },
  { value: 10, suffix: "+", label: "Web3 teams & communities" },
  { value: 3.6, decimals: 1, suffix: "K+", label: "X followers" },
];

function format(value: number, decimals = 0) {
  return decimals ? value.toFixed(decimals) : String(Math.round(value));
}

export default function Stats() {
  const ref = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        if (reduce) {
          setProgress(1);
          return;
        }
        const start = performance.now();
        const dur = 1100;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          setProgress(eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref as never} className="stats" aria-label="Highlights">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <strong>
            {format(stat.value * progress, stat.decimals)}
            <span>{stat.suffix}</span>
          </strong>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
