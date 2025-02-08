import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import AgentCardList from "./components/AgentCardList"; // Adjust to { AgentCardList } if needed

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="pl-16 pt-12">
        <AgentCardList />
        <Footer />
      </main>
    </div>
  );
}
