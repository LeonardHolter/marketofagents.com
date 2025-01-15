"use static";
import AgentCard from "./AgentCard";
import Link from "next/link";

export default function AgentList() {
  return (
    <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-12 mt-20">
      <Link href="/agent1">
        <AgentCard imagepath="/meme.png">Meme Agent</AgentCard>
      </Link>
      <Link href="/replit_review">
        <AgentCard imagepath="/replit.png">Replit Agent</AgentCard>
      </Link>
    </div>
  );
}
