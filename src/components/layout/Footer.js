import Link from "next/link";

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

const footerLinks = {
  Company: ["Services", "About us", "Support", "Contact Us"],
  Legal: ["Privacy policy", "Terms & Condition"],
  Location: ["Nigeria", "United State"],
};

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#080005",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-5">
          <Link
            href="/"
            className="text-white font-bold text-2xl"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Extricator.
          </Link>
          <p
            className="text-sm leading-relaxed"
            style={{
              color: "#9b8fa8",
              fontFamily: "Inter, sans-serif",
              maxWidth: "220px",
            }}
          >
            Join the Ranks of Visionary Collectors and Own a Piece of History
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-1">
            {[DiscordIcon, XIcon, TelegramIcon].map((Icon, i) => (
              <button
                key={i}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-purple-900"
                style={{
                  backgroundColor: "#1a1a2a",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <Icon />
              </button>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="flex flex-col gap-4">
            <h4
              className="font-semibold text-white text-sm"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              {heading}
            </h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{
                      color: "#9b8fa8",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="px-8 md:px-16 py-5 flex items-center justify-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p
          className="text-sm"
          style={{ color: "#9b8fa8", fontFamily: "Inter, sans-serif" }}
        >
          Copyright © 2025 Extricator
        </p>
      </div>
    </footer>
  );
}
