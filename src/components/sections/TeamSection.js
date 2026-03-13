"use client";

import Image from "next/image";

// Social icon SVGs
function DiscordIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.027.018.052.04.067a19.978 19.978 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 13.94 13.94 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.184 13.184 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .039-.066c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const TEAM_IMAGES = [
  "/images/team1.jpg",
  "/images/team2.jpg",
  "/images/team3.jpg",
  "/images/team4.jpg",
];

function TeamCard({ member, index }) {
  return (
    <div
      className="rounded-xl overflow-hidden relative group"
      style={{ backgroundColor: "#1a0f15" }}
    >
      <div className="relative overflow-hidden" style={{ height: "320px" }}>
        <img
          src={TEAM_IMAGES[index]}
          alt={member.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center text-center"
        style={{
          background:
            "linear-gradient(to top, rgba(10,0,8,0.97) 60%, transparent)",
        }}
      >
        {/* Social icons */}
        <div className="flex items-center justify-center gap-2 mb-3">
          {[DiscordIcon, XIcon, TelegramIcon].map((Icon, i) => (
            <button
              key={i}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: "#2a2a3a", color: "white" }}
            >
              <Icon />
            </button>
          ))}
        </div>
        <p
          className="text-white font-semibold text-base"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          {member.name}
        </p>
        <p
          className="text-sm"
          style={{ color: "#9b8fa8", fontFamily: "Inter, sans-serif" }}
        >
          {member.role}
        </p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const team = [
    { id: 1, name: "Alexander yuu", role: "CEO & Founder" },
    { id: 2, name: "Muyiwa Dagrin", role: "CTO" },
    { id: 3, name: "Victory Kim", role: "Head of Art" },
    { id: 4, name: "Bilikisu wonder", role: "Chief Marketing oficer" },
  ];

  return (
    <section
      className="px-8 md:px-16 py-20"
      style={{ backgroundColor: "#0a0008" }}
    >
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-80 flex-shrink-0 text-center md:text-left">
          <h2
            className="text-white font-bold leading-tight mb-4"
            style={{
              fontFamily: "Sora, sans-serif",
              fontWeight: "500",
              fontSize: "clamp(2.5rem, 4vw, 2.0rem)",
            }}
          >
            Meet the Team
          </h2>
          <p
            style={{
              color: "#9b8fa8",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.95rem",
              lineHeight: "1.6",
            }}
          >
            The Creators Who Are Pushing the Boundaries of Art and Technology
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
