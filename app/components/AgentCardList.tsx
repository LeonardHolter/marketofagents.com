"use client";

import Category from "./Category";

export interface CategoryObj {
  name: string;
  agent1: object;
}

export interface AgentObj {
  fileName: string;
  displayName: string;
}

export default function AgentList() {
  const categoryData: CategoryObj[] = [
    {
      name: "Most Popular",
      agent1: { fileName: "memeAgent", displayName: "Meme Agent" },
    },
    {
      name: "Entertainment",
      agent1: { fileName: "memeAgent", displayName: "Meme Agent" },
    },
    {
      name: "Utility",
      agent1: { fileName: "memeAgent", displayName: "Meme Agent" },
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
