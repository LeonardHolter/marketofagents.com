"use client";

import { useState, useEffect } from "react";

const SummarizePage = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [clicks, setClicks] = useState(0);

  // Fetch the current click count on component mount
  useEffect(() => {
    const fetchClicks = async () => {
      try {
        const response = await fetch(
          "https://agentcounter-ad5dd4251109.herokuapp.com/get_counter/summarize_youtube"
        );
        if (response.ok) {
          const data = await response.json();
          setClicks(data.counter || 0); // Set the initial counter value
        } else {
          console.error(
            "Failed to fetch initial counter:",
            response.statusText
          );
        }
      } catch (err) {
        console.error("Failed to fetch click count:", err);
      }
    };
    fetchClicks();
  }, []);

  const handleSummarize = async () => {
    setLoading(true);
    setError(null);
    setSummary(null);

    try {
      // Increment the counter
      const incrementResponse = await fetch(
        "https://agentcounter-ad5dd4251109.herokuapp.com/increment_counter/summarize_youtube",
        {
          method: "POST",
        }
      );

      if (incrementResponse.ok) {
        const incrementData = await incrementResponse.json();
        setClicks(incrementData.counter); // Update the click count
      } else {
        console.error(
          "Failed to increment counter:",
          incrementResponse.statusText
        );
      }

      // Fetch the summary
      const response = await fetch(
        "https://fathomless-wave-32180-23c8bcd4cf72.herokuapp.com/summarize_youtube",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ youtube_url: youtubeUrl }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong.");
      }

      const data = await response.json();
      setSummary(data.summary);
    } catch {
      setError("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          YouTube Summarizer
        </h1>
        <p className="text-center text-sm text-gray-600">
          Button Click Count: {clicks}
        </p>
        <div className="mb-4">
          <label
            htmlFor="youtubeUrl"
            className="block text-sm font-medium text-gray-700"
          >
            YouTube URL:
          </label>
          <input
            type="text"
            id="youtubeUrl"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            placeholder="Enter YouTube video URL"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleSummarize}
          className={`w-full py-2 px-4 rounded-md text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Summarizing..." : "Get Summary"}
        </button>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        {summary && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
            <h2 className="font-semibold">Summary:</h2>
            <p>{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummarizePage;
