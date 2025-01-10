import AgentCard from "./AgentCard";
export default function AgentList() {
  return (
    <div className="flex flew-wrap sm:flex-row sm:flex-wrap flex-row justify-center items-center gap-6 mt-20">
      <AgentCard></AgentCard>
      <AgentCard></AgentCard>
      <AgentCard></AgentCard>
      <AgentCard></AgentCard>
      <AgentCard></AgentCard>
    </div>
  );
}
