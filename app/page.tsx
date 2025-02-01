import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import AgentCardList from "./components/AgentCardList"; // Adjust to { AgentCardList } if needed
import { ClerkProvider } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <ClerkProvider>
        <NavBar />
        <AgentCardList />
        <Footer />
      </ClerkProvider>
    </div>
  );
}
