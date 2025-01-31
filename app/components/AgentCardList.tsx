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
        {
          fileName: "socialAgent",
          displayName: "Social Media Manager",
          description:
            "I am Kayla an expert Social Media Manager who can help you brainstorm content ideas...",
          image: "/public/socialAgent.png",
          creator: "@MarieLovesMatcha",
          isPlaceholder: true,
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
          fileName: "placeholder4",
          displayName: "Practice interviewing",
          description: "with Interviewer",
          image: "/agents/interview.png",
          creator: "@InterviewPro",
          isPlaceholder: true,
        },
        {
          fileName: "placeholder5",
          displayName: "Brainstorm ideas",
          description: "with Brainstormer",
          image: "/agents/brainstorm.png",
          creator: "@IdeaGenius",
          isPlaceholder: true,
        },
        {
          fileName: "placeholder6",
          displayName: "Get book recommendations",
          description: "with Librarian Linda",
          image: "/agents/books.png",
          creator: "@BookWorm",
          isPlaceholder: true,
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
