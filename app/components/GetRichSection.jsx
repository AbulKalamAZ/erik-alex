"use client";

import Image from "next/image";
import Link from "next/link";

export default function GetRichSection({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center z-[999999] justify-center items-center flex"
      style={{ backdropFilter: "blur(2px)" }}
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
            src="/getRich.webp"
            alt="profile"
            fill
            className="object-cover"
          />
          <Image
            src="/getRich-overlay.svg"
            alt="overlay"
            fill
            className="object-cover opacity-[.64]"
          />
        </div>
      </div>
    </section>
  );
}
