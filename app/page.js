"use client";
import { useState } from "react";
import EntryLayer from "./components/EntryLayer";
import MainLayer from "./components/MainLayer";
import PosterSection from "./components/PosterSection";
import GetRichSection from "./components/GetRichSection";
import TokenomicSection from "./components/TokenomicSection";
import ReadMeSection from "./components/ReadMeSection";
import GallerySection from "./components/GallerySection";

export default function Home() {
  // Track which popup is open
  const [openPopup, setOpenPopup] = useState(null); // null | "poster" | "getRich" | ...

  return (
    <main className="flex justify-center items-center relative w-full h-screen">
      <MainLayer isOpen={openPopup} setOpenPopup={setOpenPopup} />
      <EntryLayer />

      {/* Popup Sections */}
      <PosterSection isOpen={openPopup === "poster"} setIsOpen={setOpenPopup} />
      <GetRichSection
        isOpen={openPopup === "getRich"}
        setIsOpen={setOpenPopup}
      />
      <TokenomicSection
        isOpen={openPopup === "tokenomic"}
        setIsOpen={setOpenPopup}
      />
      <ReadMeSection isOpen={openPopup === "readMe"} setIsOpen={setOpenPopup} />
      <GallerySection
        isOpen={openPopup === "gallery"}
        setIsOpen={setOpenPopup}
      />
    </main>
  );
}
