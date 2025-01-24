"use client";

import Category from "./Category";

export interface CategoryObj {
  name: string;
  agent1: string;
  agent2: string;
  agent3: string;
}

export default function AgentList() {
  const categoryData: CategoryObj[] = [
    {
      name: "Most Popular",
      agent1: "memeAgent",
      agent2: "codingAgent",
      agent3: "emailAgent",
    },
    {
      name: "Entertainment",
      agent1: "memeAgent",
      agent2: "emailAgent",
      agent3: "memeAgent",
    },
    {
      name: "Utility",
      agent1: "emailAgent",
      agent2: "Replit",
      agent3: "Devin",
    },
  ];

  console.log(categoryData);

  return (
    <>
      <ul>
        {categoryData.map((category) => (
          <Category categoryObj={category} key={category.name} />
        ))}
      </ul>
    </>
  );
}
