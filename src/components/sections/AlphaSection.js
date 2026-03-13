"use client";

import { useState } from "react";

export default function AlphaSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      className="px-8 md:px-16 py-12"
      style={{ backgroundColor: "#0a0008" }}
    >
      <div
        className="rounded-2xl px-10 md:px-20 py-16 flex flex-col items-center text-center"
        style={{
          background:
            "linear-gradient(135deg, #d11a7a 0%, #8b22cc 50%, #4c1d95 100%)",
        }}
      >
        <h2
          className="text-white font-bold mb-4"
          style={{
            fontFamily: "Sora, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "500",
            maxWidth: "700px",
            lineHeight: "1.15",
          }}
        >
          Sign up for early Alpha
        </h2>
        <p
          className="mb-8"
          style={{
            color: "rgba(255,255,255,0.75)",
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            maxWidth: "480px",
            lineHeight: "1.6",
          }}
        >
          Subscribe now to get early alpha from our creators and 10X your
          portfolio
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 sm:gap-0 w-full max-w-xl"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Sign up now"
            className="w-full sm:flex-1 px-5 py-3.5 text-sm outline-none rounded-md sm:rounded-r-none sm:rounded-l-md"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "white",
              fontFamily: "Inter, sans-serif",
              border: "none",
              backdropFilter: "blur(8px)",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3.5 text-white text-sm font-medium rounded-md sm:rounded-l-none sm:rounded-r-md transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-70"
            style={{
              backgroundColor: "#4c1d95",
              fontFamily: "Inter, sans-serif",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {status === "loading" ? "Signing up..." : "Get early Alpha"}
          </button>
        </form>

        {/* Feedback message */}
        {message && (
          <p
            className="mt-4 text-sm"
            style={{
              color: status === "success" ? "#a0ffb0" : "#ffaaaa",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
