"use client";

import AgentCard from "./AgentCard";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { CategoryObj, AgentObj } from "./AgentCardList";

interface CategoryProps {
  categoryObj: CategoryObj;
}

export default function Category({ categoryObj }: CategoryProps) {
  const [memeGeneratorClicks, setMemeGeneratorClicks] = useState(0);
  const [error, setError] = useState(false);

  // Fetch current click count when the component mounts
  useEffect(() => {
    const fetchClicks = async () => {
      try {
        const response = await fetch(
          "https://agentcounter-ad5dd4251109.herokuapp.com/get_counter/memeGenerator"
        );
        const data = await response.json();
        if (response.ok) {
          setMemeGeneratorClicks(data.counter || 0); // Set the initial counter value
        } else {
          console.error("Error fetching data:", data.message);
          setError(true);
        }
      } catch (err) {
        console.error("Failed to fetch click count:", err);
        setError(true);
      }
    };

    fetchClicks();
  }, []);

  return (
    <>
      {/* display the category's title*/}
      <h1 className="font-bold text-2xl flex justify-center mt-5">
        {categoryObj.name}
      </h1>

      {/* display the row */}
      {/*
      <div className="flex flex-row space-x-10 justify-center mt-5">
        <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-12">
          <Link href="/memeAgent">
            <AgentCard imagepath="/meme.png" counter={memeGeneratorClicks}>
              Meme Agent
            </AgentCard>
          </Link>
          {error && (
            <div className="text-red-500 text-sm mt-4">
              Failed to load click count. Please try again later.
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-12">
          <Link href="/memeAgent">
            <AgentCard imagepath="/meme.png" counter={memeGeneratorClicks}>
              Meme Agent
            </AgentCard>
          </Link>
          {error && (
            <div className="text-red-500 text-sm mt-4">
              Failed to load click count. Please try again later.
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-12">
          <Link href="/memeAgent">
            <AgentCard imagepath="/meme.png" counter={memeGeneratorClicks}>
              Meme Agent
            </AgentCard>
          </Link>
          {error && (
            <div className="text-red-500 text-sm mt-4">
              Failed to load click count. Please try again later.
            </div>
          )}
        </div>
      </div>
      */}
      <div className="flex flex-row space-x-10 justify-center mt-5">
        {[categoryObj.agent1].map((agent, index) => {
          const typedAgent = agent as AgentObj; // Explicitly cast the type
          return (
            <div
              key={index}
              className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-12"
            >
              <Link href={`/${typedAgent.fileName}`}>
                <AgentCard
                  imagepath={`/${typedAgent.fileName}.png`}
                  counter={memeGeneratorClicks}
                >
                  {typedAgent.displayName}
                </AgentCard>
              </Link>
              {error && (
                <div className="text-red-500 text-sm mt-4">
                  Failed to load click count. Please try again later.
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
