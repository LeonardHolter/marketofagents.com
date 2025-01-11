import React from "react";
import AgentCard from "../components/AgentCard";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-center">Agent Reviews</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flew-wrap sm:flex-row sm:flex-wrap flex-row justify-center items-center gap-12 mt-20 mb-8">
        <Link href="/reviews/replit">
          <AgentCard imagepath="/replit.png">Replit Agent</AgentCard>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Page;
