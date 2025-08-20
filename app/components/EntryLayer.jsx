"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";

export default function EntryLayer() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // refs for gsap
  const garageShutterRef = useRef(null);
  const backgroundLayerRef = useRef(null);
  const cloudsLayerRef = useRef(null);
  const entryLayerRef = useRef(null);
  const sectionRef = useRef(null);

  const handleShutterClick = () => {
    setIsOpen(true);

    const tl = gsap.timeline();

    // shutter slides up
    tl.to(garageShutterRef.current, {
      y: -420,
      duration: 1.5,
      ease: "power2.inOut",
    })
      // then hide shutter
      .set(garageShutterRef.current, { opacity: 0, display: "none" })
      // animate background + clouds
      .to(
        [backgroundLayerRef.current, cloudsLayerRef.current],
        {
          yPercent: -250,
          scale: 20,
          opacity: 0,
          transformOrigin: "center center",
          duration: 1.2,
          ease: "power2.inOut",
        },
        "<" // sync
      )
      // animate entry layer
      .to(
        entryLayerRef.current,
        {
          yPercent: -250,
          scale: 20,
          opacity: 0,
          transformOrigin: "center center",
          duration: 1.2,
          ease: "power2.inOut",
        },
        "<"
      )
      // fade out whole section
      .to(
        sectionRef.current,
        {
          opacity: 0,
          duration: 0.75,
          ease: "power2.inOut",
        },
        "<+.2" // after shutter anim
      )
      .set(sectionRef.current, { display: "none" });
  };

  return (
    <section
      className="firstScreen w-full h-screen flex flex-col relative overflow-hidden bg-black z-[100]"
      ref={sectionRef}
    >
      {/* Background Layer */}
      <div className="backgroundLayer z-10">
        <div className="absolute inset-0" ref={backgroundLayerRef}>
          <Image
            src="/front-landscape.webp"
            alt="Landscape"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="absolute inset-0" ref={cloudsLayerRef}>
          <Image
            src="/clouds.webp"
            alt="Clouds"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Entry Layer */}
      <div className="entryLayer z-20">
        <div className="absolute inset-0" ref={entryLayerRef}>
          <Image
            src="/front-garage.avif"
            alt="frontGarage"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Shutter Layer */}
      <div
        className="garageShutterLayer absolute inset-0"
        ref={garageShutterRef}
      >
        <Image
          src="/front-garage-shutter.webp"
          alt="garageShutter"
          fill
          style={{ objectFit: "cover" }}
        />

        <div className="btnContainer flex justify-center items-center w-full h-screen pt-96">
          <Link
            href="#"
            className={`cockshed-button w-button px-4 py-2 text-white text-xl font-bold border-8 border-black rotate-[9deg] transition-all ease-in ${
              isHovered ? "bg-black" : "bg-[#93592c]"
            }`}
          >
            ENTER THE SHED
          </Link>
        </div>
      </div>

      {/* Trigger Area */}
      <div
        className="shutterTrigger w-80 h-80 py-32 absolute z-30 m-auto top-96 bottom-0 left-0 right-0 cursor-pointer"
        onClick={handleShutterClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>
    </section>
  );
}
