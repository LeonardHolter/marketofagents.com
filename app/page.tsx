import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection"; // Adjust to { HeroSection } if it's a named export
import AgentCategories from "./components/AgentCategories"; // Adjust to { AgentCategories } if needed
import AgentCardList from "./components/AgentCardList"; // Adjust to { AgentCardList } if needed

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-10">
        <HeroSection />
        <AgentCategories />
        <AgentCardList />
      </div>
    </div>
  );
}
