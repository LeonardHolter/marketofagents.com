"use client";

import AgentCard from "./AgentCard";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { CategoryObj, AgentObj } from "./AgentCardList";

interface CategoryProps {
  categoryObj: CategoryObj;
}

export default function Category({ categoryObj }: CategoryProps) {
  const [agentClicks, setAgentClicks] = useState<{ [key: string]: number }>({});
  const [error, setError] = useState(false);

  // Fetch current click count when the component mounts
  useEffect(() => {
    const fetchClicks = async () => {
      try {
        // Fetch clicks for each agent
        const clickPromises = categoryObj.agents.map(async (agent) => {
          const response = await fetch(
            `https://agentcounter-ad5dd4251109.herokuapp.com/get_counter/${agent.fileName}`
          );
          const data = await response.json();
          if (response.ok) {
            return { [agent.fileName]: data.counter || 0 };
          }
          throw new Error(data.message);
        });

        const results = await Promise.all(clickPromises);
        const clickCounts = Object.assign({}, ...results);
        setAgentClicks(clickCounts);
      } catch (err) {
        console.error("Failed to fetch click count:", err);
        setError(true);
      }
    };

    fetchClicks();
  }, [categoryObj.agents]);

  return (
    <>
      {/* display the category's title*/}
      <h1 className="font-bold text-2xl flex justify-center mt-5">
        {categoryObj.name}
      </h1>

      {/* display the row */}
      <div className="flex flex-row flex-wrap space-x-10 justify-center mt-5">
        {categoryObj.agents.map((agent, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-12 mb-8"
          >
            <Link href={`/${agent.fileName}`}>
              <AgentCard
                imagepath={`/${agent.fileName}.png`}
                counter={agentClicks[agent.fileName] || 0}
              >
                {agent.displayName}
              </AgentCard>
            </Link>
            {error && (
              <div className="text-red-500 text-sm mt-4">
                Failed to load click count. Please try again later.
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
