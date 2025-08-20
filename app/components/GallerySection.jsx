"use client";

import Link from "next/link";
import Image from "next/image";

export default function GallerySection({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <section
      className="min-h-screen w-full bg-cover bg-center flex z-[99999] justify-center items-center px-6 py-12"
      style={{
        backgroundImage: "url('/poster-bg.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Go Back Button */}
      <div className="absolute top-4 right-4">
        <Link
          href="#"
          className="px-4 py-2 text-white text-4xl font-bold hover:text-black transition"
          onClick={() => setIsOpen(null)}
        >
          Go Back
        </Link>
      </div>

      {/* Centered Image Container */}
      <div
        className="grid grid-cols-3 gap-8 bg-[#d6d2ae] rounded-lg p-8 shadow-inner max-w-6xl w-full"
        style={{ marginTop: "85%" }}
      >
        {Array.from({ length: 13 }).map((_, i) => {
          let ext = "png";
          if (i >= 2 && i <= 4) ext = "webp";
          if (i >= 8) ext = "webp";

          return (
            <div
              key={i}
              className="relative aspect-square rounded-md overflow-hidden shadow-md"
            >
              <Image
                src={`/meme/${i + 1}.${ext}`}
                alt={`meme ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
