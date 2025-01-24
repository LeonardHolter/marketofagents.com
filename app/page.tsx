import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import AgentCardList from "./components/AgentCardList"; // Adjust to { AgentCardList } if needed

export default function Home() {
  return (
    <div>
      <NavBar />
      <AgentCardList />
      <Footer />
    </div>
  );
}
