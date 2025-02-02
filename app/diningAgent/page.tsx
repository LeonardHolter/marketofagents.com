"use client";
import { useState } from "react";

import { useClerk } from "@clerk/nextjs";
import Navbar from "../components/Navbar";

interface DiningRecommendation {
  primary_recommendation: {
    dining_hall: string;
    reason: string;
    top_dishes: {
      dish: string;
      estimated_calories: number;
      nutritional_benefits: string;
      rating: number;
    }[];
  };
  secondary_recommendation: {
    dining_hall: string;
    reason: string;
    top_dishes: {
      dish: string;
      estimated_calories: number;
      nutritional_benefits: string;
      rating: number;
    }[];
  };
}

export default function DiningAgent() {
  const [goal, setGoal] = useState("");
  const [recommendation, setRecommendation] =
    useState<DiningRecommendation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasUsedOnce, setHasUsedOnce] = useState(false);

  const clerk = useClerk();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if user has used the service once and needs to sign in
    if (hasUsedOnce) {
      clerk.openSignIn();
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://diningagent-aa20b7d5b702.herokuapp.com/get_dining_recommendation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({ message: goal }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to get recommendation: ${response.statusText}`);
      }

      const rawData = await response.json();
      console.log("Raw response:", rawData); // Debug log

      // Parse the data if it's a string
      let data;
      try {
        data = typeof rawData === "string" ? JSON.parse(rawData) : rawData;
      } catch (parseError) {
        console.error("JSON Parse Error:", parseError);
        throw new Error("Invalid response format");
      }

      // Validate the data structure
      if (!data?.primary_recommendation?.dining_hall) {
        console.error("Invalid data structure:", data);
        throw new Error("Invalid recommendation format");
      }

      setRecommendation(data);
      setHasUsedOnce(true);
    } catch (err) {
      console.error("Error details:", err); // Debug log
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-3xl bg-black min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Columbia Dining Hall Recommendation
        </h1>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col gap-4">
            <textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Enter your nutrition goal (e.g., build muscle, bulk, cut, eat healthy, vegetarian options)"
              className="w-full p-3 border rounded-lg resize-none h-32 bg-white text-black border-gray-700"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
            >
              {loading ? "Getting Recommendation..." : "Get Recommendation"}
            </button>
          </div>
        </form>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        {recommendation && (
          <div className="space-y-6">
            {/* Primary Recommendation */}
            <div className="rounded-xl bg-gray-800 shadow-lg">
              <div className="p-6">
                <div className="mb-2 text-sm font-medium text-blue-400">
                  Primary Recommendation
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  {recommendation.primary_recommendation.dining_hall}
                </h2>
                <p className="text-gray-300 mb-6">
                  {recommendation.primary_recommendation.reason}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-white">
                  Top Recommended Dishes:
                </h3>
                <div className="space-y-4">
                  {recommendation.primary_recommendation.top_dishes.map(
                    (dish, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-700 pb-4"
                      >
                        <h4 className="font-medium text-white">{dish.dish}</h4>
                        <p className="text-sm text-gray-300">
                          Calories: {dish.estimated_calories}
                        </p>
                        <p className="text-sm text-gray-300">
                          Benefits: {dish.nutritional_benefits}
                        </p>
                        <div className="flex items-center mt-2">
                          <span className="text-sm text-gray-300">
                            Rating:{" "}
                          </span>
                          <span className="ml-2 font-medium text-white">
                            {dish.rating}/10
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Secondary Recommendation - Only show if it exists */}
            {recommendation.secondary_recommendation && (
              <div className="rounded-xl bg-gray-800 shadow-lg">
                <div className="p-6">
                  <div className="mb-2 text-sm font-medium text-gray-300">
                    Alternative Option
                  </div>
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    {recommendation.secondary_recommendation.dining_hall}
                  </h2>
                  <p className="text-gray-300 mb-6">
                    {recommendation.secondary_recommendation.reason}
                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Top Recommended Dishes:
                  </h3>
                  <div className="space-y-4">
                    {recommendation.secondary_recommendation.top_dishes.map(
                      (dish, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-700 pb-4"
                        >
                          <h4 className="font-medium text-white">
                            {dish.dish}
                          </h4>
                          <p className="text-sm text-gray-300">
                            Calories: {dish.estimated_calories}
                          </p>
                          <p className="text-sm text-gray-300">
                            Benefits: {dish.nutritional_benefits}
                          </p>
                          <div className="flex items-center mt-2">
                            <span className="text-sm text-gray-300">
                              Rating:{" "}
                            </span>
                            <span className="ml-2 font-medium text-white">
                              {dish.rating}/10
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
