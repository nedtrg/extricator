"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-12">
      {/* Logo */}
      <Link
        href="/"
        className="text-white font-bold text-xl tracking-tight"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        Extricator.
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-10">
        {["Home", "Gallery", "Roadmap"].map((item) => (
          <Link
            key={item}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="text-white text-sm font-normal hover:text-purple-400 transition-colors duration-200"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md flex flex-col items-center gap-6 py-8 md:hidden">
          {["Home", "Gallery", "Roadmap"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-white text-base font-normal hover:text-purple-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
