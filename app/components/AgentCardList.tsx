"use client";

import Category from "./Category";

export interface CategoryObj {
  name: string;
  agents: AgentObj[];
}

export interface AgentObj {
  fileName: string;
  displayName: string;
}

export default function AgentList() {
  const categoryData: CategoryObj[] = [
    {
      name: "Most Popular",
      agents: [
        { fileName: "professorAgent", displayName: "Professor Agent" },
        { fileName: "prospectAgent", displayName: "Prospect Agent" },
        { fileName: "domainAgent", displayName: "Domain Agent" },
      ],
    },
    {
      name: "Entertainment",
      agents: [
        { fileName: "memeAgent", displayName: "Meme Agent" },
        { fileName: "emailAgent", displayName: "Email Agent" },
        { fileName: "professorAgent", displayName: "Professor Agent" },
      ],
    },
    {
      name: "Utility",
      agents: [
        { fileName: "domainAgent", displayName: "Domain Agent" },
        { fileName: "emailAgent", displayName: "Email Agent" },
        { fileName: "prospectAgent", displayName: "Prospect Agent" },
      ],
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
