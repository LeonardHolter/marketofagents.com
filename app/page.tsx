import NavBar from "./components/Navbar";
import AgentCardList from "./components/AgentCardList"; // Adjust to { AgentCardList } if needed

export default function Home() {
  return (
    <div>
      <NavBar />
      <AgentCardList />
    </div>
  );
}
