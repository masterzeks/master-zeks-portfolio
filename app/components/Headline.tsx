"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

export type Word = { t: string; em?: boolean };

type Props = {
  lines: Word[][];
  as?: "h1" | "h2";
  className?: string;
};

export default function Headline({ lines, as = "h2", className = "" }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  let i = 0;
  return (
    <Tag
      ref={ref}
      className={"headline" + (inView ? " is-in" : "") + (className ? " " + className : "")}
    >
      {lines.map((line, li) => {
        const words = line.flatMap((word) =>
          word.t.split(/\s+/).filter(Boolean).map((part) => ({ t: part, em: word.em })),
        );
        return (
          <span className="headline-line" key={li}>
            {words.map((word, wi) => {
              const idx = i++;
              const WordTag = word.em ? "em" : "span";
              return (
                <WordTag
                  key={wi}
                  className="headline-word"
                  style={{ "--i": idx } as CSSProperties}
                >
                  {word.t}
                </WordTag>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
}
