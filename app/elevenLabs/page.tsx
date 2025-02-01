"use client";
import React from "react";
import Link from "next/link";
import { StarIcon, ExternalLink } from "lucide-react";
import Image from "next/image";
import Navbar from "../components/Navbar";

const ReplitAgentPage = () => {
  const [rating, setRating] = React.useState<number>(0);
  const [hoveredStar, setHoveredStar] = React.useState<number>(0);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
            ElevenLabs Review
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            A state-of-the-art AI voice generation platform that offers
            natural-sounding speech synthesis and voice cloning capabilities
          </p>

          {/* Showcase Banner */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/elevenlabsbanner.png"
              alt="Pear AI Showcase"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>

        {/* Basic Info Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="bg-red-100 p-2 rounded-lg">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            Basic Information
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-700">Developer:</span>
              <span className="text-gray-600">ElevenLabs Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-700">Website:</span>
              <Link
                href="https://elevenlabs.io"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
              >
                elevenlabs.io <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="bg-red-100 p-2 rounded-lg">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </span>
            About ElevenLabs
          </h2>
          <p className="text-gray-600 leading-relaxed">
            ElevenLabs is a cutting-edge AI voice technology company that
            provides sophisticated text-to-speech and voice cloning solutions.
            Their platform combines state-of-the-art deep learning models with
            advanced audio processing to create incredibly natural and
            emotionally expressive synthetic voices. Whether for content
            creators, developers, or enterprises, ElevenLabs offers tools to
            transform written content into lifelike speech in multiple languages
            and voices.
          </p>
        </div>

        {/* Use Cases */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="bg-red-100 p-2 rounded-lg">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </span>
            Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Content Creation",
                desc: "Generate voiceovers for videos and podcasts",
              },
              {
                title: "Voice Cloning",
                desc: "Create custom AI voices from voice samples",
              },
              {
                title: "Audiobook Production",
                desc: "Convert books and articles into audio content",
              },
              {
                title: "Localization",
                desc: "Translate and voice content in multiple languages",
              },
              {
                title: "Game Development",
                desc: "Create dynamic voice content for gaming",
              },
              {
                title: "Accessibility",
                desc: "Make content accessible through voice synthesis",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-white/70 border border-gray-100"
              >
                <h3 className="font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Review Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="bg-red-100 p-2 rounded-lg">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </span>
            Leave a Review
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`w-8 h-8 cursor-pointer transition-colors ${
                    star <= (hoveredStar || rating)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-300 hover:text-red-200"
                  }`}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <textarea
              className="w-full p-4 border rounded-lg min-h-[120px] bg-white/70 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
              placeholder="Share your experience with ElevenLabs..."
            />
            <button
              className="w-full bg-[rgb(250,51,51)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
              style={{ backgroundColor: "rgb(250,51,51)" }}
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReplitAgentPage;
