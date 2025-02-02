"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const CatalogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data for demonstration
  const agents = [
    {
      id: 1,
      name: "Rashed by Teammates.ai",
      description: "AI Sales Agent who never misses a deal",
      image: "/teammates-logo.png",
      pricing: "Paid",
      category: "Sales AI Agent",
      isNew: true,
    },
    {
      id: 2,
      name: "DJ NOVA",
      description:
        "NOVA is the world's first Virtual AI DJ, pioneering the future of music and crypto.",
      image: "/dj-nova.png",
      pricing: "Free",
      category: "Music AI Agents",
      isNew: true,
    },
    // Add more agents as needed
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-zinc-900 to-zinc-800 min-h-screen">
        <div className="container mx-auto px-6 py-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full backdrop-blur-xl">
              <span className="text-sm font-medium text-gray-200">
                ✨ Verified AI Agents
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              AI Agents That Drive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-blue-500">
                Business Results
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Find and deploy enterprise-ready AI Agents to automate tasks
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-24">
              {[
                { value: "900+", label: "AI AGENTS" },
                { value: "52k+", label: "INNOVATORS" },
                { value: "270k+", label: "EXPLORATIONS" },
                { value: "35k+", label: "CONNECTIONS" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm"
                >
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              "Categories",
              "Industries",
              "PricingModels",
              "AccessModels",
              "Sort by: Newest",
            ].map((filter, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-lg bg-white/5 border border-gray-700 text-white hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                {filter}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            ))}
          </div>

          {/* Agent Cards */}
          <div className="grid gap-4">
            {agents.map((agent) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 border border-gray-700 rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">
                        {agent.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            agent.pricing === "Paid"
                              ? "bg-purple-500/20 text-purple-300"
                              : "bg-green-500/20 text-green-300"
                          }`}
                        >
                          {agent.pricing}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-700 text-gray-300 text-sm">
                          {agent.category}
                        </span>
                        {agent.isNew && (
                          <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">
                            NEW
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-400 mt-1">{agent.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CatalogPage;
