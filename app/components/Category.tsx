"use client";

import AgentCard from "./AgentCard";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

import { CategoryObj } from "./AgentCardList";

interface CategoryProps {
  categoryObj: CategoryObj;
}

export default function Category({ categoryObj }: CategoryProps) {
  const [agentClicks, setAgentClicks] = useState<{ [key: string]: number }>({});
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{categoryObj.name}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar"
      >
        {categoryObj.agents.map((agent, index) => {
          const CardWrapper = ({ children }: { children: React.ReactNode }) => {
            if (agent.isPlaceholder) {
              return (
                <div className="cursor-not-allowed opacity-70 flex-shrink-0">
                  {children}
                </div>
              );
            }
            return (
              <Link href={`/${agent.fileName}`} className="flex-shrink-0">
                {children}
              </Link>
            );
          };

          return (
            <CardWrapper key={index}>
              <AgentCard
                displayName={agent.displayName}
                description={agent.description}
                image={agent.image}
                creator={agent.creator}
                views={`${agentClicks[agent.fileName] || 0} views`}
              />
            </CardWrapper>
          );
        })}
      </div>
    </div>
  );
}
