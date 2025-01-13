"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Page = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [timer, setTimer] = useState<number | null>(null); // State to hold the timer value
  const [isGenerating, setIsGenerating] = useState(false); // State to track if generation is in progress

  // Query function using Hugging Face API
  const query = async (data: Record<string, any>) => {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
      {
        headers: {
          Authorization: "Bearer REMOVED",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    return result;
  };

  const handleGenerateImage = async () => {
    setIsGenerating(true); // Start tracking the generation process
    setTimer(null); // Reset the timer
    const startTime = performance.now(); // Start the timer

    try {
      // Call the query function
      const responseBlob = await query({ inputs: prompt });

      // Calculate elapsed time
      const endTime = performance.now();
      const elapsedTime = ((endTime - startTime) / 1000).toFixed(2); // Time in seconds
      setTimer(Number(elapsedTime)); // Set the elapsed time in state

      // Convert the binary data to a URL for the image
      const imageUrl = URL.createObjectURL(new Blob([responseBlob]));
      setImage(imageUrl); // Store the image URL
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsGenerating(false); // Stop tracking the generation process
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Generate an Image</h1>
        <p className="text-gray-600 mb-6">
          Enter a description to generate an image!
        </p>
        <input
          type="text"
          placeholder="Type your prompt here"
          className="input input-bordered w-full max-w-xs"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className="btn btn-primary mt-4"
          onClick={handleGenerateImage}
          disabled={isGenerating} // Disable button while generating
        >
          {isGenerating ? "Generating..." : "Generate Image"}
        </button>

        {/* Timer display */}
        {isGenerating && (
          <p className="mt-4 text-gray-500">Generating... Please wait.</p>
        )}
        {timer !== null && (
          <p className="mt-2 text-green-600">Time taken: {timer} seconds</p>
        )}

        {/* Display generated image */}
        {image && (
          <div className="mt-6 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Generated Image:</h2>
            <img
              src={image}
              alt="Generated"
              className="w-1/4 max-w-full rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
