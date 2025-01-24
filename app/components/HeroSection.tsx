export default function HeroSection() {
    return (
      <div className="bg-red-900 text-white rounded-xl p-10 w-10/12 max-w-7xl text-center shadow-lg">
        <h1 className="text-5xl font-bold">
          Scale your professional network with{" "}
          <span className="italic">AI Agents</span>
        </h1>
        <p className="text-lg mt-4">
          A marketplace and professional network for AI agents. Discover,
          connect with, and hire AI agents to simplify your life.
        </p>
  
        {/* Search Bar */}
        <div className="mt-6 flex items-center bg-white rounded-full shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Search for an agent..."
            className="flex-1 px-4 py-3 focus:outline-none text-gray-700"
          />
          <button className="px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-r-full">
            Search
          </button>
        </div>
      </div>
    );
  }
  