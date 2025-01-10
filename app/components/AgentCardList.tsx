import AgentCard from "./AgentCard";
import Link from "next/link";
export default function AgentList() {
  return (
    <div className="flex flew-wrap sm:flex-row sm:flex-wrap flex-row justify-center items-center gap-12 mt-20">
      <Link href="/agent1">
        {" "}
        <AgentCard>Agent</AgentCard>{" "}
      </Link>
      <AgentCard>Agent</AgentCard>
      <AgentCard>Agent</AgentCard>
      <AgentCard>Agent</AgentCard>
    </div>
  );
}
