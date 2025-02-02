"use client";
import { useState } from "react";

export default function MemeAgentPage() {
  const [topic, setTopic] = useState("");
  const [memesGenerated, setMemesGenerated] = useState(4);

  return (
    <div className="bg-zinc-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Meme Agent</h1>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Meme topic:</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., cats, programming, etc."
                className="w-full p-3 border rounded-lg text-gray-700"
              />
            </div>
            
            <button 
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() => setMemesGenerated(prev => prev + 1)}
            >
              Generate Meme
            </button>
            
            <p className="text-center mt-4 text-gray-600">
              Total memes generated: {memesGenerated}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 