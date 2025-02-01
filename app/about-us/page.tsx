"use client";

import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <main className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-16">
          {/* Title Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              Need an agent?{" "}
              <span className="italic text-red-600 relative">
                We have it!
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-red-600"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>
            <p className="text-xl text-gray-600">Find your next AI-powered solution today</p>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0 mb-6 md:mb-0"
            >
              <img
                src="/poster.png"
                alt="Market of Agents Poster"
                className="w-[500px] h-auto mx-auto md:mx-0 rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Text Section */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center md:text-left space-y-6"
            >
              <p className="text-xl text-gray-700 leading-relaxed">
                Welcome to <span className="font-semibold text-red-600">marketofagents</span>
                ! We are proud to offer a one-stop marketplace where you can
                find all kinds of AI agents tailored to your needs. Whether
                you're looking for{" "}
                <span className="font-semibold bg-red-100 px-2 py-1 rounded">meme creators</span>,{" "}
                <span className="font-semibold bg-blue-100 px-2 py-1 rounded">coding assistants</span>, or
                even <span className="font-semibold bg-green-100 px-2 py-1 rounded">restaurant guides</span>,
                we have it all.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                From helping you craft the perfect meme to assisting with
                advanced technical tasks,{" "}
                <span className="font-semibold text-red-600">marketofagents</span> is your
                go-to resource for innovative solutions. Explore our diverse
                range of agents and see how they can transform the way you work,
                create, and explore.
              </p>
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-red-700 transition-colors"
                >
                  Explore Agents
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
