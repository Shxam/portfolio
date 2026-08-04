"use client";

import React, { useState, useEffect, useRef } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchOnHover?: boolean;
  tag?: "h1" | "h2" | "h3" | "h4" | "span" | "div" | "p";
}

const GLITCH_CHARS = "0101_#/><$!@%*&~{}[]";

export default function GlitchText({
  text,
  className = "",
  glitchOnHover = true,
  tag = "span",
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  const triggerGlitch = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsGlitching(true);
    let iteration = 0;
    const maxIterations = text.length;

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        clearInterval(intervalRef.current!);
        setIsGlitching(false);
        setDisplayText(text);
      }

      iteration += 1 / 2;
    }, 28);
  };

  const Component = tag;

  return (
    <Component
      onMouseEnter={glitchOnHover ? triggerGlitch : undefined}
      className={`glitch-hover select-none cursor-default transition-all duration-200 ${
        isGlitching ? "text-terminal-green scale-[1.01]" : ""
      } ${className}`}
      data-text={text}
    >
      {displayText}
    </Component>
  );
}
