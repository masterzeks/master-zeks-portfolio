"use client";

import { useEffect, useState } from "react";
import { IconArrow, IconBrand, IconClose, IconMenu } from "../icons";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#clips", label: "Clips" },
  { href: "#videos", label: "Videos" },
  { href: "#events", label: "Events" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={"nav-wrap" + (scrolled ? " is-scrolled" : "") + (open ? " is-open" : "")}>
      <div className="nav">
        <a href="#top" className="brand" onClick={close}>
          <IconBrand className="brand-mark" /> master zeks<span className="brand-dot">.</span>
        </a>
        <nav className="nav-desktop" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <a className="nav-contact" href="https://t.me/Master_Zeks" target="_blank" rel="noreferrer">
          Let&apos;s talk <IconArrow className="btn-icon" />
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="nav-toggle-icon" /> : <IconMenu className="nav-toggle-icon" />}
        </button>
      </div>
      <div id="mobile-menu" className={"nav-drawer" + (open ? " is-open" : "")}>
        <nav aria-label="Mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>{link.label}</a>
          ))}
          <a className="nav-drawer-talk" href="https://t.me/Master_Zeks" target="_blank" rel="noreferrer" onClick={close}>
            Let&apos;s talk <IconArrow className="btn-icon" />
          </a>
        </nav>
      </div>
    </header>
  );
}
