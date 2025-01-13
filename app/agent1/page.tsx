"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Page = () => {
  const [initialState, setInitialState] = useState(""); // Updated variable name for clarity
  const [mood, setMood] = useState(""); // Updated to store the mood from the backend

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "https://fathomless-wave-32180-23c8bcd4cf72.herokuapp.com/get_mood", // Correct endpoint
        {
          initial_state: initialState, // Correct key as expected by the backend
        }
      );

      setMood(response.data.mood); // Extract and set the mood from the response
    } catch (error) {
      console.error("Error fetching mood:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Check your mood</h1>
        <p className="text-gray-600 mb-6">Enter your name and get your mood!</p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={initialState}
          onChange={(e) => setInitialState(e.target.value)}
        />
        <button className="btn btn-primary mt-4" onClick={handleSearch}>
          Get Mood
        </button>
        {mood && (
          <div className="mt-6">
            <h2 className="text-xl font-bold">Your Mood:</h2>
            <p>{mood}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
