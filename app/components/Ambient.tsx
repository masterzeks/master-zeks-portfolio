"use client";

import { useEffect } from "react";

export default function Ambient() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const onScroll = () => {
      document.documentElement.style.setProperty("--scroll-y", String(window.scrollY));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
    </>
  );
}
