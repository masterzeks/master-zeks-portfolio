"use client";

import { useEffect, useState } from "react";
import { IconChevronUp } from "../icons";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      className={"back-to-top" + (show ? " is-visible" : "")}
      aria-label="Back to top"
    >
      <IconChevronUp className="back-to-top-icon" />
    </a>
  );
}
