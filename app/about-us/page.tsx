"use static";

import React from "react";
import NavBar from "../components/Navbar";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl">
          Welcome to Market Of Agents (MOA), the official marketplace for AI
          agents. Our mission is to connect businesses and individuals with
          powerful AI tools to make their lives easier. Whether you're looking
          for automation solutions or specialized AI agents, we've got you
          covered.
        </p>
        <p className="text-lg text-gray-600 text-center max-w-2xl mt-4">
          Our platform is built to bring the best AI technologies to your
          fingertips. We are committed to innovation, collaboration, and
          helping you achieve your goals in a world driven by artificial
          intelligence.
        </p>
      </div>
    </>
  );
}
