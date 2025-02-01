"use client";
import { useState, useEffect } from "react";

export default function TypewriterBanner() {
  const [text, setText] = useState("");
  const fullText = "The best AI agents all in one place";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 mb-8 mt-4">
      <div className="relative w-full rounded-[32px] overflow-hidden bg-gradient-to-br from-[#E5E7EB] to-[#D1D5DB]">
        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 via-transparent to-gray-200/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/50 via-transparent to-gray-200/50" />
        
        {/* Content */}
        <div className="relative z-10 py-12 px-8">
          <p className="text-gray-600 text-xl mb-2">Market Of Agents</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            {text}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100 text-gray-600`}>
              |
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
