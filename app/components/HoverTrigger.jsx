"use client";

import { useState } from "react";
import Link from "next/link";

export default function HoverTrigger({
  top = "top-96",
  left = "left-96",
  onClick,
}) {
  const [isOuterCircleHovered, setIsOuterCircleHovered] = useState(false);
  const [isInnerCircleHovered, setIsInnerCircleHovered] = useState(false);

  return (
    <div
      className={`w-full h-full absolute ${top} ${left}`}
      onMouseEnter={() => setIsOuterCircleHovered(!isOuterCircleHovered)}
      onMouseLeave={() => setIsOuterCircleHovered(!isOuterCircleHovered)}
      onClick={onClick}
      style={{
        backgroundColor: isOuterCircleHovered ? "#fff3" : "#ffffff52",
        border: "1px dashed #ffffff",
        borderRadius: "1000px",
        justifyContent: "center",
        alignItems: "center",
        width: "4vw",
        maxWidth: "50px",
        height: "4vw",
        maxHeight: "50px",
        display: "flex",
        cursor: "pointer",
        position: "absolute",
      }}
    >
      <Link
        href="/"
        className="dot"
        onMouseEnter={() => setIsInnerCircleHovered(!isInnerCircleHovered)}
        onMouseLeave={() => setIsInnerCircleHovered(!isInnerCircleHovered)}
        style={{
          cursor: "pointer",
          backgroundColor: "#fff",
          borderRadius: "1000px",
          width: "10px",
          minWidth: "10px",
          height: "10px",
          minHeight: "10px",
          transition: "all .2s",
          transform: isInnerCircleHovered ? "scale(1.4)" : "scale(1)",
        }}
      ></Link>
    </div>
  );
}
