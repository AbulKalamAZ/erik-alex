"use client";
import Image from "next/image";

export default function BackgroundImages() {
  return (
    <div className="image-container">
      {/* Your images */}
      <Image
        src="/main-bg.webp"
        alt="MainBG"
        fill
        style={{ objectFit: "cover" }}
      />
      <Image src="/box.webp" alt="Box" fill style={{ objectFit: "cover" }} />
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
  );
}
