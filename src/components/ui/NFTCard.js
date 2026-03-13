"use client";

export default function NFTCard({
  src,
  alt,
  rotation = 0,
  animClass = "",
  delay = "",
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-2xl anim-hidden ${animClass} ${delay}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        width: "340px",
        height: "380px",
        flexShrink: 0,
      }}
    >
      {/* Placeholder image using colored backgrounds to mimic Figma NFTs */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    </div>
  );
}
