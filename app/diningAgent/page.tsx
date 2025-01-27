"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useSignIn } from "@clerk/nextjs";
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
          },
          body: JSON.stringify({ message: goal }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get recommendation");
      }

      const data = await response.json();
      setRecommendation(typeof data === "string" ? JSON.parse(data) : data);
      setHasUsedOnce(true); // Set the flag after first successful use
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Columbia Dining Hall Recommendation
        </h1>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col gap-4">
            <textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Enter your nutrition goal (e.g., build muscle, bulk, cut, eat healthy, vegetarian options)"
              className="w-full p-3 border rounded-lg resize-none h-32"
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
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="mb-2 text-sm font-medium text-blue-600">
                  Primary Recommendation
                </div>
                <h2 className="text-2xl font-semibold mb-4">
                  {recommendation.primary_recommendation.dining_hall}
                </h2>
                <p className="text-gray-600 mb-6">
                  {recommendation.primary_recommendation.reason}
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Top Recommended Dishes:
                </h3>
                <div className="space-y-4">
                  {recommendation.primary_recommendation.top_dishes.map(
                    (dish, index) => (
                      <div key={index} className="border-b pb-4">
                        <h4 className="font-medium">{dish.dish}</h4>
                        <p className="text-sm text-gray-600">
                          Calories: {dish.estimated_calories}
                        </p>
                        <p className="text-sm text-gray-600">
                          Benefits: {dish.nutritional_benefits}
                        </p>
                        <div className="flex items-center mt-2">
                          <span className="text-sm text-gray-600">
                            Rating:{" "}
                          </span>
                          <span className="ml-2 font-medium">
                            {dish.rating}/10
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Secondary Recommendation */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="mb-2 text-sm font-medium text-gray-600">
                  Alternative Option
                </div>
                <h2 className="text-2xl font-semibold mb-4">
                  {recommendation.secondary_recommendation.dining_hall}
                </h2>
                <p className="text-gray-600 mb-6">
                  {recommendation.secondary_recommendation.reason}
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Top Recommended Dishes:
                </h3>
                <div className="space-y-4">
                  {recommendation.secondary_recommendation.top_dishes.map(
                    (dish, index) => (
                      <div key={index} className="border-b pb-4">
                        <h4 className="font-medium">{dish.dish}</h4>
                        <p className="text-sm text-gray-600">
                          Calories: {dish.estimated_calories}
                        </p>
                        <p className="text-sm text-gray-600">
                          Benefits: {dish.nutritional_benefits}
                        </p>
                        <div className="flex items-center mt-2">
                          <span className="text-sm text-gray-600">
                            Rating:{" "}
                          </span>
                          <span className="ml-2 font-medium">
                            {dish.rating}/10
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}
