"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const HERO_IMAGES = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

function NFTPlaceholder({ rotation, animClass, delay, index }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-2xl anim-hidden ${animClass} ${delay} w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96`}
      style={{
        transform: `rotate(${rotation}deg)`,
        flexShrink: 0,
      }}
    >
      <img
        src={HERO_IMAGES[index]}
        alt={`NFT ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".anim-hidden");
    elements?.forEach((el) => {
      el.style.animationPlayState = "running";
    });
  }, []);

  const cards = [
    {
      rotation: -8,
      animClass: "animate-float-left",
      delay: "delay-500",
      index: 0,
    },
    {
      rotation: 0,
      animClass: "animate-float-center",
      delay: "delay-600",
      index: 1,
    },
    {
      rotation: 8,
      animClass: "animate-float-right",
      delay: "delay-700",
      index: 2,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#0a0008" }}
    >
      {/* Grid background overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial purple glow in center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 38%, rgba(90,20,160,0.35) 0%, transparent 70%)",
        }}
      />

      {/* Hero text content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-44 pb-12 px-6">
        <h1
          className="anim-hidden animate-fade-up delay-100 text-white leading-tight mb-5"
          style={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(2.0rem, 7vw, 4.0rem)",
            letterSpacing: "-0.02em",
            maxWidth: "720px",
          }}
        >
          Get Ready to Own
          <br />a Piece of History
        </h1>

        <p
          className="anim-hidden animate-fade-up delay-200 mb-10"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "#9b8fa8",
            maxWidth: "480px",
            lineHeight: "1.6",
          }}
        >
          Join the Ranks of Visionary Collectors and Own a Piece of History
        </p>

        {/* CTA Buttons */}
        <div className="anim-hidden animate-fade-up delay-300 flex items-center gap-4 flex-wrap justify-center">
          <Link
            href="/gallery"
            className="px-10 py-3.5 rounded-md text-white text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
            style={{
              fontFamily: "Inter, sans-serif",
              backgroundColor: "#6B21FF",
              fontSize: "0.9rem",
              letterSpacing: "0.01em",
            }}
          >
            Explore
          </Link>
          <Link
            href="/market"
            className="px-10 py-3.5 rounded-md text-white text-sm font-medium transition-all duration-200 hover:bg-white/10 active:scale-95"
            style={{
              fontFamily: "Inter, sans-serif",
              backgroundColor: "#2a2a2a",
              fontSize: "0.9rem",
              letterSpacing: "0.01em",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            Go to market
          </Link>
        </div>
      </div>

      {/* NFT Cards */}
      <div className="relative z-10 flex justify-center items-end mt-auto px-6 pb-10">
        {/* Mobile — vertical stack, centered, no rotation */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          {cards.map((card) => (
            <div
              key={card.index}
              className={`relative overflow-hidden rounded-2xl shadow-2xl anim-hidden ${card.animClass} ${card.delay} w-64 h-72`}
            >
              <img
                src={HERO_IMAGES[card.index]}
                alt={`NFT ${card.index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Desktop — fan arc layout with rotation */}
        <div className="hidden md:flex items-end justify-center">
          {cards.map((card) => (
            <NFTPlaceholder
              key={card.index}
              rotation={card.rotation}
              animClass={card.animClass}
              delay={card.delay}
              index={card.index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
