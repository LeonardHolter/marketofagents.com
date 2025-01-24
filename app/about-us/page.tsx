"use client";

import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <main className="bg-white min-h-screen">
        <div className="container mx-auto px-6 py-12">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-800">
              Need an agent?{" "}
              <span className="italic text-red-600">We have it!</span>
            </h1>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <img
                src="/poster.png"
                alt="Market of Agents Poster"
                className="w-[500px] h-auto mx-auto md:mx-0"
              />
            </div>

            {/* Text Section */}
            <div className="text-center md:text-left">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Welcome to <span className="font-semibold">marketofagents</span>
                ! We are proud to offer a one-stop marketplace where you can
                find all kinds of AI agents tailored to your needs. Whether
                you’re looking for{" "}
                <span className="font-semibold">meme creators</span>,
                <span className="font-semibold">coding assistants</span>, or
                even
                <span className="font-semibold">restaurant guides</span>, we
                have it all. Our platform is designed to make your life easier
                by providing smart, efficient tools that save you time and
                effort.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From helping you craft the perfect meme to assisting with
                advanced technical tasks,{" "}
                <span className="font-semibold">marketofagents</span>
                is your go-to resource for innovative solutions. Explore our
                diverse range of agents and see how they can transform the way
                you work, create, and explore. At{" "}
                <span className="font-semibold">marketofagents</span>, we’re
                dedicated to democratizing AI and making it accessible to
                everyone.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
