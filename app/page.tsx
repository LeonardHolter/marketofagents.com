import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AgentCardList from "./components/AgentCardList";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <AgentCardList></AgentCardList>
    </div>
  );
}
