"use client";

import Image from "next/image";
import Link from "next/link";

export default function PosterSection({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center z-[99999] justify-center items-center flex"
      style={{
        backgroundImage: "url('/poster-bg.webp')",
        backgroundPosition: "0 0",
        backgroundSize: "auto",
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
      <div className="flex flex-col justify-center items-center">
        <div className="w-[500px] h-[610px] relative">
          <Image
            src="/profile.avif"
            alt="profile"
            fill
            className="object-cover"
          />
          <Image
            src="/profile-overlay.webp"
            alt="overlay"
            fill
            className="object-cover opacity-[.16]"
          />
        </div>

        <div className="strip w-[350px] h-[100px] absolute bottom-[15%] right-[30%] rotate-[-30deg] mt-12">
          <Image
            src="/strip.webp"
            alt="strip"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />

          <div className="text-block relative bottom-16 text-xs pl-4">
            CA: EwgPDXv1jXwgNKM5qKg9gF6sZYxmYkAhNmWxpaEPpump
          </div>
        </div>
      </div>
    </section>
  );
}
