"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import HoverTrigger from "./HoverTrigger";
import BackgroundImages from "./BackgroundImages";

export default function MainLayer({ isOpen, setOpenPopup }) {
  const imgRef = useRef(null);

  useEffect(() => {
    // gsap.quickTo creates a high-perf function that animates smoothly
    const xMove = gsap.quickTo(imgRef.current, "xPercent", {
      duration: 1,
      ease: "power3.out",
    });
    const yMove = gsap.quickTo(imgRef.current, "yPercent", {
      duration: 1,
      ease: "power3.out",
    });

    const handleMouseMove = (e) => {
      if (isOpen && isOpen !== "glass") return;

      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12; // range -6% to +6%
      const y = (e.clientY / innerHeight - 0.5) * 6; // range -3% to +3%

      xMove(-x); // invert for opposite
      yMove(-y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isOpen]);

  return (
    <section className="mainLayer w-full min-h-screen flex flex-col absolute top-0 left-0 bg-black">
      <div className="w-screen h-screen overflow-hidden relative">
        <div
          ref={imgRef}
          className="absolute top-0 left-0 w-[100%] h-[100%]"
          style={{
            willChange: "transform",
            transformStyle: "preserve-3d",
            transform: "scale(1.2)",
            zIndex: 99,
          }}
        >
          <div
            className={`hotspots-links h-screen relative z-[99] ${
              isOpen ? "hidden" : "block"
            }`}
          >
            <HoverTrigger
              className="poster"
              top="top-[28%]"
              left="left-[22%]"
              onClick={() => setOpenPopup("poster")}
            />

            <HoverTrigger
              top="top-[14%]"
              left="left-[49%]"
              onClick={() => setOpenPopup("tokenomic")}
            />

            <HoverTrigger
              top="top-[56%]"
              left="left-[48%]"
              onClick={() => setOpenPopup("glass")}
            />

            <HoverTrigger
              top="top-[22%]"
              left="left-[87%]"
              onClick={() => setOpenPopup("readMe")}
            />

            <HoverTrigger
              top="top-[20%]"
              left="left-[80%]"
              onClick={() => setOpenPopup("gallery")}
            />

            <HoverTrigger
              top="top-[45%]"
              left="left-[36%]"
              onClick={() => setOpenPopup("getRich")}
            />

            <HoverTrigger top="top-[23%]" left="left-[54%]" />
            <HoverTrigger top="top-[60%]" left="left-[54%]" />
            <HoverTrigger top="top-[40%]" left="left-[42%]" />
            <HoverTrigger top="top-[23%]" left="left-[66%]" />
            <HoverTrigger top="top-[49%]" left="left-[64%]" />
          </div>

          <BackgroundImages isOpen={isOpen} />
        </div>
      </div>
    </section>
  );
}
