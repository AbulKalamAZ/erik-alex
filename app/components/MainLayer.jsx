"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import HoverTrigger from "./HoverTrigger";

export default function MainLayer() {
  const imgRef = useRef(null);

  useEffect(() => {
    // gsap.quickTo creates a high-perf function that animates smoothly
    const xMove = gsap.quickTo(imgRef.current, "xPercent", {
      duration: 1.2,
      ease: "power3.out",
    });
    const yMove = gsap.quickTo(imgRef.current, "yPercent", {
      duration: 1.2,
      ease: "power3.out",
    });

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12; // range -6% to +6%
      const y = (e.clientY / innerHeight - 0.5) * 6; // range -3% to +3%

      xMove(-x); // invert for opposite
      yMove(-y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="mainLayer w-full h-screen flex flex-col absolute top-0 left-0 bg-black">
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
          <div className="hotspots-links h-screen relative z-[99]">
            <HoverTrigger top="top-[28%]" left="left-[22%]" />
            <HoverTrigger top="top-[14%]" left="left-[49%]" />
            <HoverTrigger top="top-[23%]" left="left-[54%]" />
            <HoverTrigger top="top-[60%]" left="left-[54%]" />
            <HoverTrigger top="top-[56%]" left="left-[48%]" />
            <HoverTrigger top="top-[40%]" left="left-[42%]" />
            <HoverTrigger top="top-[23%]" left="left-[66%]" />
            <HoverTrigger top="top-[49%]" left="left-[64%]" />
            <HoverTrigger top="top-[22%]" left="left-[87%]" />
            <HoverTrigger top="top-[20%]" left="left-[80%]" />
            <HoverTrigger top="top-[45%]" left="left-[36%]" />
          </div>
          {/* Your images */}
          <Image
            src="/main-bg.webp"
            alt="MainBG"
            fill
            style={{ objectFit: "cover" }}
          />
          <Image
            src="/box.webp"
            alt="Box"
            fill
            style={{ objectFit: "cover" }}
          />
          <Image
            src="/cabinet.webp"
            alt="Cabinet"
            fill
            style={{ objectFit: "cover", left: "4px" }}
          />
          <Image
            src="/chicken-img.webp"
            alt="ChickenImg"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/cash.webp"
            alt="Cash"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/ammo.webp"
            alt="Ammonation"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/ashtray.webp"
            alt="AshTray"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/briefcase.webp"
            alt="Briefcase"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/eggs.webp"
            alt="Eggs"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/files.webp"
            alt="Files"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/glass.webp"
            alt="Glass"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/grains.webp"
            alt="Grains"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/magzine.webp"
            alt="Magzine"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/tools.webp"
            alt="Tools"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/computer.webp"
            alt="Computer"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/laptop.png"
            alt="Laptop"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/letter.webp"
            alt="Letter"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/side-board.png"
            alt="SideBoard"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/socials.webp"
            alt="SocialsBoard"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/twitter.webp"
            alt="Twitter"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/pill.avif"
            alt="Pill"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/tokenomic.webp"
            alt="Tokenomic"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/tee.png"
            alt="Tee"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/poster.png"
            alt="Poster"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/collection.webp"
            alt="Collection"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}
