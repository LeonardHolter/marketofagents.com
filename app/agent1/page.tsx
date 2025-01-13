"use client";

//git test

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Page = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // Loading state

  const handleGenerateImage = async () => {
    setLoading(true); // Start loading
    setImage(null); // Clear previous image
    try {
      const response = await axios.post(
        "https://fathomless-wave-32180-23c8bcd4cf72.herokuapp.com/generate_image",
        {
          inputs: prompt,
          parameters: {
            guidance_scale: 1.0,
            num_inference_steps: 7,
          },
        },
        { responseType: "blob" }
      );

      // Convert the binary data to a URL for the image
      const imageUrl = URL.createObjectURL(new Blob([response.data]));
      setImage(imageUrl); // Store the image URL
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false); // End loading
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
          className={`btn btn-primary mt-4 ${loading ? "btn-disabled" : ""}`}
          onClick={handleGenerateImage}
          disabled={loading} // Disable button when loading
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>
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
