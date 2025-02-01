"use client";

import Category from "./Category";
import TypewriterBanner from "./TypewriterBanner";

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
}

export default function AgentList() {
  const categoryData: CategoryObj[] = [
    {
      name: "For you",
      agents: [
        {
          fileName: "memeAgent",
          displayName: "Meme Agent",
          description: "Makes memes for you",
          image: "/memeAgent.png",
          creator: "@Leonard",
        },
        {
          fileName: "emailAgent",
          displayName: "Email Sorter",
          description: "Sorts your emails for you.",
          image: "/emailAgent.png",
          creator: "@Leonard",
        },
        {
          fileName: "diningAgent",
          displayName: "Columbia Dining Hall",
          description: "Dining recommendations.",
          image: "/diningAgent.png",
          creator: "@Leonard",
        },
      ],
    },
    {
      name: "Try these",
      agents: [
        {
          fileName: "replitAgent",
          displayName: "Replit Agent",
          description: "Make any website in seconds",
          image: "/replitlogo.png",
          creator: "@Replit",
        },
        {
          fileName: "cursorAgent",
          displayName: "Cursor",
          description: "AI Code Editor",
          image: "/cursor.png",
          creator: "@Cursor",
        },
        {
          fileName: "pearAgent",
          displayName: "PearAI",
          description: "Open Source AI IDE",
          image: "/pear.png",
          creator: "@Nang&Pan",
        },
        {
          fileName: "elevenLabs",
          displayName: "ElevenLabs",
          description: "AI Voice Agent",
          image: "/elevenlabs.png",
          creator: "@Elevenlabs",
        },
      ],
    },
  ];

  return (
    <>
      <TypewriterBanner />
      <div className="container mx-auto px-4">
        {/* Categories */}
        {categoryData.map((category) => (
          <Category categoryObj={category} key={category.name} />
        ))}
      </div>
    </>
  );
}
