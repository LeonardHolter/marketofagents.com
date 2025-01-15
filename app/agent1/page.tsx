"use client";

import React, { useState, useEffect } from "react";

const MemeGenerator = () => {
  const [topic, setTopic] = useState("");
  const [memeUrl, setMemeUrl] = useState("");
  const [error, setError] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>; // Explicitly type the interval
    if (timerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Cleanup
  }, [timerRunning]);

  const handleGenerateMeme = async () => {
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Meme Agent</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <label className="block text-gray-700 font-medium mb-2">
          Meme topic:
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg mb-4"
          placeholder="e.g., cats, programming, etc."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button
          onClick={handleGenerateMeme}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 active:bg-blue-700 active:scale-95 transition"
        >
          Generate Meme
        </button>

        <div className="mt-4 text-gray-700 font-medium text-center">
          {timerRunning && <p>Time elapsed: {seconds} seconds</p>}
        </div>

        {error && (
          <div className="mt-4 text-red-500 text-center font-medium">
            {error}
          </div>
        )}

        {memeUrl && (
          <div className="mt-6 text-center">
            <p className="text-gray-700 font-medium mb-2">Your Meme:</p>
            <img
              src={memeUrl}
              alt="Generated Meme"
              className="w-full h-auto rounded-lg border"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MemeGenerator;
