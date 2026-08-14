"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, CloseIcon, MenuIcon } from "./Icons";

const links = [
  { label: "The Villa", href: "#villa" },
  { label: "Occasions", href: "#occasions" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#f7f3e9]/92 shadow-[0_1px_0_rgba(36,56,24,.12)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="group flex items-center gap-3" aria-label="The Fern Private Villas home">
          <span className="relative size-12 shrink-0 overflow-hidden rounded-full bg-[#425915] shadow-[0_8px_24px_rgba(36,56,24,.16)] ring-1 ring-[#425915]/20 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-[1.03]">
            <Image
              src="/images/fern-logo.jpg"
              alt="The Fern Private Villas logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <span className="hidden sm:block">
            <span className="block font-serif text-[18px] leading-none tracking-[0.09em] text-[#243818]">THE FERN</span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#6c775f]">Private Villas · Mabalacat</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#4d5c43] transition-colors hover:text-[#243818]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/p/The-Fern-Private-Villas-Mabalacat-City-Pampanga-61587328706577/"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#243818] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#f7f3e9] transition hover:bg-[#405d2b] sm:inline-flex"
          >
            Check availability
            <ArrowUpRight className="size-4" />
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-[#405d2b]/25 text-[#243818] lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <MenuIcon className="size-5" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] bg-[#243818] text-[#f7f3e9] transition duration-500 lg:hidden ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 py-5 sm:px-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="relative size-12 overflow-hidden rounded-full bg-[#425915] ring-1 ring-white/20">
                <Image src="/images/fern-logo.jpg" alt="The Fern Private Villas logo" fill sizes="48px" className="object-cover" />
              </span>
              <span>
                <span className="block font-serif text-lg tracking-[0.12em]">THE FERN</span>
                <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.24em] text-[#cdd6c1]">Private Villas</span>
              </span>
            </div>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-white/20"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>

          <nav className="my-auto grid gap-2" aria-label="Mobile navigation">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/12 py-5 font-serif text-[clamp(2rem,10vw,4.4rem)] leading-none tracking-[-0.035em]"
              >
                <span className="mr-3 align-top font-sans text-[10px] tracking-[0.2em] text-[#b8c4a8]">0{index + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://www.facebook.com/p/The-Fern-Private-Villas-Mabalacat-City-Pampanga-61587328706577/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-full bg-[#f7f3e9] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#243818]"
          >
            Message on Facebook
            <ArrowUpRight className="size-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
