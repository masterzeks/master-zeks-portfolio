"use client";

import { useEffect } from "react";

export default function SiteFX() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    const bar = document.querySelector<HTMLElement>(".scroll-progress");
    const glow = document.querySelector<HTMLElement>(".cursor-glow");

    if (reduce) {
      if (bar) bar.hidden = true;
      if (glow) glow.hidden = true;
      return;
    }

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let gx = mx;
    let gy = my;
    let raf = 0;
    let running = true;

    const nodes = () => Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));

    const tick = () => {
      if (!running) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (bar) bar.style.transform = `scaleX(${p})`;

      for (const node of nodes()) {
        const box = node.getBoundingClientRect();
        if (box.bottom < -80 || box.top > window.innerHeight + 80) continue;
        const mid = box.top + box.height / 2;
        const n = (mid - window.innerHeight / 2) / window.innerHeight;
        const strength = Number(node.dataset.parallax || 16);
        node.style.setProperty("--par", `${(-n * strength).toFixed(2)}px`);
      }

      if (fine && glow && !glow.hidden) {
        gx += (mx - gx) * 0.16;
        gy += (my - gy) * 0.16;
        glow.style.transform = `translate3d(${gx - 220}px, ${gy - 220}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    if (bar) bar.hidden = false;
    if (fine && glow) glow.hidden = false;

    const onMove = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
    };

    if (fine && glow) window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" hidden aria-hidden="true" />
      <div className="cursor-glow" hidden aria-hidden="true" />
    </>
  );
}
