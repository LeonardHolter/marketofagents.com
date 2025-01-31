import AgentCard from "@/components/AgentCard";
import { getAgentsByCategory } from "@/data/agents";

export default function Home() {
  const popularAgents = getAgentsByCategory("popular");
  const trendyAgents = getAgentsByCategory("trendy");
  const entertainmentAgents = getAgentsByCategory("entertainment");
  const otherAgents = getAgentsByCategory("other");

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">AI Agent Catalog</h1>

      {/* Most Popular Section */}
      <section className="w-full max-w-6xl mb-12">
        <h2 className="text-2xl font-semibold mb-4">Most Popular</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              name={agent.name}
              description={agent.description}
              image={agent.image}
              category={agent.category}
              link={`/agent/${agent.id}`}
            />
          ))}
        </div>
      </section>

      {/* Trendy Section */}
      <section className="w-full max-w-6xl mb-12">
        <h2 className="text-2xl font-semibold mb-4">Trendy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendyAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              name={agent.name}
              description={agent.description}
              image={agent.image}
              category={agent.category}
              link={`/agent/${agent.id}`}
            />
          ))}
        </div>
      </section>

      {/* Entertainment Section */}
      <section className="w-full max-w-6xl mb-12">
        <h2 className="text-2xl font-semibold mb-4">Entertainment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entertainmentAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              name={agent.name}
              description={agent.description}
              image={agent.image}
              category={agent.category}
              link={`/agent/${agent.id}`}
            />
          ))}
        </div>
      </section>

      {/* Other Section */}
      <section className="w-full max-w-6xl mb-12">
        <h2 className="text-2xl font-semibold mb-4">Other</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              name={agent.name}
              description={agent.description}
              image={agent.image}
              category={agent.category}
              link={`/agent/${agent.id}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
