"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function TiltCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    if (reduce || !fine) return;

    const max = 7;
    let raf = 0;
    const onMove = (event: MouseEvent) => {
      const box = el.getBoundingClientRect();
      const px = (event.clientX - box.left) / box.width - 0.5;
      const py = (event.clientY - box.top) / box.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className={"tilt-root" + (className ? " " + className : "")}>
      {children}
    </div>
  );
}
