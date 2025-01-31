export interface Agent {
  id: string;
  name: string;
  description: string;
  image: string;
  category: "popular" | "trendy" | "entertainment" | "other";
}

export const agents: Agent[] = [
  {
    id: "1",
    name: "ChatGPT",
    description: "A versatile AI assistant for general conversation and tasks",
    image: "/images/chatgpt.jpg",
    category: "popular",
  },
  // Add more agents here...
];

export const getAgentsByCategory = (category: Agent["category"]) => {
  return agents.filter((agent) => agent.category === category);
};
