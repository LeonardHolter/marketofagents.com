"use client";
import { useEffect, useState } from "react";

export default function TypewriterBanner() {
  const [text, setText] = useState("");
  const fullText = "The best AI Agents all in one place";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="container mx-auto px-4 mb-12 mt-8">
      <div className="relative w-full h-[300px] rounded-3xl overflow-hidden">
        {/* Background with solid color and gradient */}
        <div className="absolute inset-0 bg-gray-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/50 to-gray-300/80" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8">
          <p className="text-gray-600 text-xl mb-2">Market Of Agents</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            {text}
            <span className="animate-blink text-gray-600">|</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
