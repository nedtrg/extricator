"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const num = parseInt(target);
          const duration = 1800;
          const steps = 60;
          const increment = num / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= num) {
              setCount(num);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, mounted]);

  return (
    <span ref={ref} className="tabular-nums" suppressHydrationWarning>
      {mounted ? count : 0}
      {suffix}
    </span>
  );
}

export default function TrackRecordSection() {
  return (
    <section
      className="px-8 md:px-16 py-24 flex flex-col md:flex-row items-center gap-16"
      style={{ backgroundColor: "#080005" }}
    >
      <div className="flex-1 min-w-0 text-center md:text-left">
        <p
          data-aos="fade-left"
          data-aos-delay="200"
          className="mb-4 text-sm font-medium"
          style={{ color: "#c0392b", fontFamily: "Inter, sans-serif" }}
        >
          Track record
        </p>
        <h2
          data-aos="fade-right"
          data-aos-delay="300"
          className="text-white leading-tight"
          style={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(1.4rem, 4vw, 2.0rem)",
          }}
        >
          Positive track records
          <br />
          and milestones
          <br />
          Achieved
        </h2>
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-10 text-center md:text-left">
        <p
          data-aos="fade-right"
          data-aos-delay="200"
          className="leading-relaxed"
          style={{
            color: "#9b8fa8",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.95rem",
            lineHeight: "1.75",
          }}
        >
          Not only do our exclusive NFTs offer a unique opportunity for digital
          ownership, they also provide a platform for artists to showcase their
          creativity and connect with a community of like-minded collectors and
          enthusiasts.
        </p>

        {/* Stats row */}
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="flex items-center gap-12 flex-wrap justify-center md:justify-start"
        >
          {[
            { value: "24", suffix: "k+", label: "Collections" },
            { value: "18", suffix: "k+", label: "Auctions" },
            { value: "10", suffix: "k+", label: "Artists" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 items-center md:items-start"
            >
              <span
                className="text-white font-bold"
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </span>
              <span
                className="text-sm"
                style={{ color: "#9b8fa8", fontFamily: "Inter, sans-serif" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
