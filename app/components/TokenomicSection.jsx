"use client";

import Image from "next/image";
import Link from "next/link";

export default function TokenomicSection({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <section
      className="relative min-h-screen w-full bg-[#424242] z-[999999] flex justify-center items-center"
      style={{ border: "10px solid #2a2a2a" }}
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
        className="title-container"
        style={{
          gridColumnGap: "60px",
          gridRowGap: "60px",
          padding: "100px",
          backgroundColor: "#79c4dd",
          border: "10px solid #2a2a2a",
          borderRadius: "20px",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          height: "100%",
          display: "flex",
          position: "relative",
        }}
      >
        <div className="w-full h-[200px] relative mb-12">
          <Image src="/title.gif" alt="title" fill />
        </div>
        <div className="w-full h-[200px] relative mb-12">
          <Image src="/numbers.gif" alt="numbers" fill />
        </div>
      </div>
    </section>
  );
}
