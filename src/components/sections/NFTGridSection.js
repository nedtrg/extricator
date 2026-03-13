"use client";

import { useState } from "react";

const NFT_IMAGES = [
  "/images/nft1.jpg",
  "/images/nft2.jpg",
  "/images/nft3.jpg",
  "/images/nft4.jpg",
  "/images/nft5.jpg",
  "/images/nft6.jpg",
];

function NFTGridCard({ nft, index }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(nft.likes);

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div
      className="rounded-xl overflow-hidden group cursor-pointer"
      style={{ backgroundColor: "#2a1a20" }}
    >
      <div className="relative overflow-hidden" style={{ height: "260px" }}>
        <img
          src={NFT_IMAGES[index % NFT_IMAGES.length]}
          alt={nft.name}
          className="w-full h-full object-cover"
        />

        {/* Like badge */}
        <button
          onClick={handleLike}
          className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: "white",
            color: liked ? "#ef4444" : "#333",
          }}
        >
          <span style={{ color: "#ef4444" }}>♥</span>
          <span style={{ color: "#333" }}>{likes}</span>
        </button>
      </div>

      {/* Card info */}
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ backgroundColor: "#2d1a22" }}
      >
        <div>
          <p
            className="text-white text-xs mb-1"
            style={{ fontFamily: "Inter, sans-serif", opacity: 0.8 }}
          >
            {nft.name}
          </p>
          <p
            className="text-white font-semibold text-base"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            {nft.price} {nft.currency}
          </p>
        </div>
        <button
          className="px-4 py-2 rounded text-white text-xs font-medium transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: "#6B21FF",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Buy now
        </button>
      </div>
    </div>
  );
}

export default function NFTGridSection() {
  const nfts = [
    {
      id: 1,
      name: "Swagoon #1761",
      price: "30.24",
      currency: "SOL",
      likes: 100,
    },
    {
      id: 2,
      name: "Swagoon #1761",
      price: "30.24",
      currency: "SOL",
      likes: 100,
    },
    {
      id: 3,
      name: "Swagoon #1761",
      price: "30.24",
      currency: "SOL",
      likes: 100,
    },
    {
      id: 4,
      name: "Swagoon #1761",
      price: "30.24",
      currency: "SOL",
      likes: 100,
    },
    {
      id: 5,
      name: "Swagoon #1761",
      price: "30.24",
      currency: "SOL",
      likes: 100,
    },
    {
      id: 6,
      name: "Swagoon #1761",
      price: "30.24",
      currency: "SOL",
      likes: 100,
    },
  ];

  return (
    <section
      className="px-8 md:px-16 py-20"
      style={{ backgroundColor: "#0a0008" }}
    >
      <div className="flex items-start justify-between mb-10">
        <h2
          className="text-white leading-tight"
          style={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(2.5rem, 4vw, 2.0rem)",
            maxWidth: "460px",
          }}
        >
          Amazing and Unique
          <br />
          Arts for the week
        </h2>
        <button
          className="flex items-center gap-2 px-6 py-3 rounded-md text-white text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-105 mt-2"
          style={{
            backgroundColor: "#6B21FF",
            fontFamily: "Inter, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          See all <span>→</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {nfts.map((nft, i) => (
          <NFTGridCard key={nft.id} nft={nft} index={i} />
        ))}
      </div>
    </section>
  );
}
