import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import { ReactNode } from "react";
import React from "react";
import { Card, CardContent } from "../components/Card";

// Define interface for recommendation data structure
interface Recommendation {
  primary_recommendation: {
    title: string;
    description: string;
  };
  secondary_recommendation?: {
    title: string;
    description: string;
  };
}

export default function ElevenLabsPage() {
  // Update state to use the proper type
  const [recommendation, setRecommendation] =
    React.useState<Recommendation | null>(null);

  // Add a function to use setRecommendation (to fix unused variable warning)
  React.useEffect(() => {
    // Example of how to use setRecommendation
    const fetchRecommendation = async () => {
      // In a real app, this would fetch from an API
      const mockRecommendation: Recommendation = {
        primary_recommendation: {
          title: "Voice Cloning Suite",
          description: "Perfect for creating custom voice avatars",
        },
      };
      setRecommendation(mockRecommendation);
    };

    fetchRecommendation();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
            ElevenLabs AI Review
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            A state-of-the-art AI voice technology platform that offers natural
            and expressive text-to-speech synthesis with multilingual
            capabilities
          </p>
        </div>

        {/* Basic Info Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-700">Developer:</span>
              <span className="text-gray-600">ElevenLabs Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-700">Website:</span>
              <Link
                href="https://elevenlabs.io"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
              >
                elevenlabs.io <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <p className="text-gray-600 leading-relaxed">
            ElevenLabs AI is a cutting-edge voice technology platform that
            revolutionizes text-to-speech synthesis. It offers incredibly
            natural and emotionally expressive voices across multiple languages.
            With its advanced AI models, users can clone voices, customize
            speech characteristics, and generate high-quality audio content for
            various applications including audiobooks, podcasts, and digital
            content creation. The platform combines ease of use with
            professional-grade voice generation capabilities.
          </p>
        </div>

        {/* Use Cases */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Voice Cloning",
                desc: "Create custom AI voices from voice samples",
              },
              {
                title: "Text-to-Speech",
                desc: "Convert text to natural-sounding speech",
              },
              {
                title: "Multilingual Support",
                desc: "Generate speech in multiple languages",
              },
              {
                title: "Content Creation",
                desc: "Create audiobooks and podcast content",
              },
              {
                title: "Voice Customization",
                desc: "Adjust speech characteristics and emotions",
              },
              {
                title: "API Integration",
                desc: "Seamless integration with existing applications",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0 h-10 w-10">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200">
                    {/* Icon placeholder */}
                  </div>
                </div>
                <div className="text-sm leading-6">
                  <p className="text-gray-600">{item.title}</p>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendation Section */}
        {recommendation && (
          <div className="space-y-6">
            {/* Primary Recommendation */}
            <Card className="bg-white shadow-lg">
              <CardContent>
                <div className="mb-2 text-sm font-medium text-blue-600">
                  Primary Recommendation
                </div>
                <h2 className="text-2xl font-semibold mb-4">
                  {recommendation.primary_recommendation.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {recommendation.primary_recommendation.description}
                </p>
              </CardContent>
            </Card>

            {/* Secondary Recommendation */}
            {recommendation.secondary_recommendation && (
              <Card className="bg-white shadow-lg">
                <CardContent>
                  <div className="mb-2 text-sm font-medium text-gray-600">
                    Alternative Option
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">
                    {recommendation.secondary_recommendation.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {recommendation.secondary_recommendation.description}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </>
  );
}
