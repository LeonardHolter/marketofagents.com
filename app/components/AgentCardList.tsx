"use client";
import AgentCard from "./AgentCard";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function AgentList() {
  const [memeGeneratorClicks, setMemeGeneratorClicks] = useState(0);

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
        }
      } catch (err) {
        console.error("Failed to fetch click count:", err);
      }
    };

    fetchClicks();
  }, []);

  return (
    <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-12 mt-20">
      <Link href="/Memeagent">
        <AgentCard imagepath="/meme.png" counter={memeGeneratorClicks}>
          Meme Agent
        </AgentCard>
      </Link>
    </div>
  );
}
