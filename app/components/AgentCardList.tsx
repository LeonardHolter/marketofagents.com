"use client";

import Category from "./Category";
/* import TypewriterBanner from "./TypewriterBanner";*/
import { useSearchParams } from "next/navigation";

export interface CategoryObj {
  name: string;
  agents: AgentObj[];
}

export interface AgentObj {
  fileName: string;
  displayName: string;
  description: string;
  image: string;
  creator: string;
  isPlaceholder?: boolean;
  id: string;
}

export default function AgentList() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const categoryData: CategoryObj[] = [
    {
      name: "MOA Exclusive",
      agents: [
        {
          fileName: "memeAgent",
          displayName: "Meme Agent",
          description: "Makes memes for you",
          image: "/memeAgent.png",
          creator: "@Leonard",
          id: "memeAgent",
        },

        {
          fileName: "diningAgent",
          displayName: "Columbia Dining Hall",
          description: "Dining recommendations.",
          image: "/diningAgent.png",
          creator: "@Leonard",
          id: "diningAgent",
        },
      ],
    },
    {
      name: "Coding",
      agents: [
        {
          fileName: "replitAgent",
          displayName: "Replit Agent",
          description: "Make any website in seconds",
          image: "/replitlogo.png",
          creator: "@Replit",
          id: "replitAgent",
        },
        {
          fileName: "cursorAgent",
          displayName: "Cursor",
          description: "AI Code Editor",
          image: "/cursor.png",
          creator: "@Cursor",
          id: "cursorAgent",
        },
        {
          fileName: "pearAgent",
          displayName: "PearAI",
          description: "Open Source AI IDE",
          image: "/pear.png",
          creator: "@Nang&Pan",
          id: "pearAgent",
        },
      ],
    },
    {
      name: "Voice Generation",
      agents: [
        {
          fileName: "elevenLabs",
          displayName: "ElevenLabs",
          description: "AI Voice Agent",
          image: "/elevenlabs.png",
          creator: "@Elevenlabs",
          id: "elevenLabs",
        },
      ],
    },
    {
      name: "All Non-MOA Exlusive Agents",
      agents: [
        {
          fileName: "replitAgent",
          displayName: "Replit Agent",
          description: "Make any website in seconds",
          image: "/replitlogo.png",
          creator: "@Replit",
          id: "replitAgent",
        },
        {
          fileName: "cursorAgent",
          displayName: "Cursor",
          description: "AI Code Editor",
          image: "/cursor.png",
          creator: "@Cursor",
          id: "cursorAgent",
        },
        {
          fileName: "pearAgent",
          displayName: "PearAI",
          description: "Open Source AI IDE",
          image: "/pear.png",
          creator: "@Nang&Pan",
          id: "pearAgent",
        },
        {
          fileName: "elevenLabs",
          displayName: "ElevenLabs",
          description: "AI Voice Agent",
          image: "/elevenlabs.png",
          creator: "@Elevenlabs",
          id: "elevenLabs",
        },
      ],
    },
  ];

  // Filter function for agents
  const matchesSearch = (agent: AgentObj) => {
    if (!searchQuery) return true;

    return (
      agent.displayName.toLowerCase().includes(searchQuery) ||
      agent.description.toLowerCase().includes(searchQuery) ||
      agent.creator.toLowerCase().includes(searchQuery)
    );
  };

  // Filter and render categories
  const filteredCategories = categoryData
    .map((category) => ({
      ...category,
      agents: category.agents.filter(matchesSearch),
    }))
    .filter((category) => category.agents.length > 0);

  return (
    <>
      {/*<TypewriterBanner />*/}
      <div className="container mx-auto px-4 mt-12 min-h-[calc(100vh-180px)]">
        {/* Add a key to help React track updates */}
        <div key={searchQuery}>
          {filteredCategories.map((category) => (
            <Category categoryObj={category} key={category.name} />
          ))}
        </div>

        {filteredCategories.length === 0 && searchQuery && (
          <div className="text-center text-gray-400 mt-8">
            No agents found matching &ldquo;{searchQuery}&rdquo;
          </div>
        )}
      </div>
    </>
  );
}
