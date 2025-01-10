import Navbar from "./components/Navbar";
import AgentCardList from "./components/AgentCardList";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <AgentCardList></AgentCardList>
    </div>
  );
}
