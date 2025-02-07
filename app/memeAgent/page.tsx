"use client";

import React, { useState, useEffect } from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import Navbar from "../components/Navbar";
import Image from "next/image";

const MemeGenerator = () => {
  const [topic, setTopic] = useState("");
  const [memeUrl, setMemeUrl] = useState("");
  const [error, setError] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [hasUsedGenerator, setHasUsedGenerator] = useState(false);

  const { isSignedIn } = useUser();
  const clerk = useClerk();
  //test
  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timerRunning]);

  useEffect(() => {
    const fetchClicks = async () => {
      try {
        const response = await fetch(
          "https://agentcounter-ad5dd4251109.herokuapp.com/get_counter/memeGenerator"
        );
        const data = await response.json();
        if (response.ok) {
          setClicks(data.counter || 0);
        }
      } catch (err) {
        console.error("Failed to fetch click count:", err);
      }
    };

    fetchClicks();
  }, []);

  const handleGenerateMeme = async () => {
    // Check if user has used generator before and is not signed in
    if (hasUsedGenerator && !isSignedIn) {
      clerk.openSignIn();
      return;
    }

    setError("");
    setMemeUrl("");
    setSeconds(0);
    setTimerRunning(true);

    if (!topic.trim()) {
      setError("Please enter a meme topic.");
      setTimerRunning(false);
      return;
    }

    try {
      const response = await fetch(
        "https://fathomless-wave-32180-23c8bcd4cf72.herokuapp.com/generate_meme",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ topic }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMemeUrl(data.meme_url);

        // Mark that the user has used the generator in this session
        setHasUsedGenerator(true);

        // Increment counter
        const incrementResponse = await fetch(
          "https://agentcounter-ad5dd4251109.herokuapp.com/increment_counter/memeGenerator",
          {
            method: "POST",
          }
        );

        const incrementData = await incrementResponse.json();
        if (incrementResponse.ok) {
          setClicks(incrementData.counter);
        }
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to connect to the server.");
    } finally {
      setTimerRunning(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#141414] pl-16 pt-12">
        <div className="container mx-auto flex flex-col items-center gap-4 mt-3">
          {/* Chat style intro and form */}
          <div className="w-full max-w-[600px]">
            {/* First capsule */}
            <div className="bg-[#333333] rounded-xl p-4 mb-4 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl text-white font-medium">Meme Agent</h2>
                <span className="px-2 py-1 rounded-full bg-[#444444] text-sm text-gray-300">
                  MOA Exclusive
                </span>
              </div>
              <p className="text-gray-300 text-lg">
                Write a prompt and I will generate a meme for you!
              </p>
            </div>

            {/* Form content */}
            <div className="w-full">
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-3 pr-12 bg-[#333333] text-white rounded-full border border-gray-600 focus:outline-none focus:border-gray-500"
                  placeholder="F.e. cats, space, cats in space..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
                <button
                  onClick={handleGenerateMeme}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>

              {/* Stats and results */}
              <div className="mt-2 text-gray-400 text-center">
                {timerRunning && <p>Time elapsed: {seconds} seconds</p>}
                <p className="mt-1">
                  Total memes generated:{" "}
                  <span className="font-bold">{clicks}</span>
                </p>
              </div>
              {error && (
                <div className="mt-2 text-red-500 text-center">{error}</div>
              )}
              {memeUrl && (
                <div className="mt-4 flex justify-center">
                  <img
                    src={memeUrl}
                    alt="Generated Meme"
                    className="max-h-[50vh] max-w-[600px] rounded-lg border border-gray-700"
                  />
                </div>
              )}
              {hasUsedGenerator && !isSignedIn && (
                <div className="mt-2 text-center text-gray-400">
                  Please sign in to continue generating memes!
                </div>
              )}
            </div>
          </div>

          {/* Meme Robot Image - Only show when no meme is generated */}
          {!memeUrl && (
            <div className="flex justify-center w-full">
              <div className="w-[300px]">
                <Image
                  src="/memerobot.png"
                  alt="Meme Robot"
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MemeGenerator;
