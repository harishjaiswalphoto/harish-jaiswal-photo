"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white text-sm font-medium tracking-widest uppercase">
          Harish Jaiswal
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {["Portfolio", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[#707070] hover:text-white text-sm tracking-wide transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-[#1a1a1a] bg-[#c9a84c] px-4 py-2 text-xs tracking-widest uppercase font-medium hover:bg-[#b8973b] transition-colors duration-200"
          >
            Book a Session
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#707070] hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-white/5 px-6 py-6 flex flex-col gap-6">
          {["Portfolio", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[#a0a0a0] hover:text-white text-sm tracking-wide"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-[#1a1a1a] bg-[#c9a84c] px-4 py-3 text-xs tracking-widest uppercase font-medium text-center"
            onClick={() => setOpen(false)}
          >
            Book a Session
          </Link>
        </div>
      )}
    </nav>
  );
}
