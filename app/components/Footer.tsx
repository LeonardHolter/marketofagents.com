"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-6 border-t mt-8">
      <div className="container mx-auto text-center text-sm text-gray-600">
        <p>
          Built by{" "}
          <a
            href="https://x.com/leonardholter17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            @leonardholter17
          </a>{" "}
          with
          <span className="text-orange-500 font-bold"> ❤️</span> and
          <span className="text-orange-600"> CRM</span>
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/company/marketofagents/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin-icon.png"
              alt="LinkedIn"
              className="w-4 h-4 inline"
            />
          </a>
          <a
            href="https://x.com/leonardholter17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/twitter-icon.png"
              alt="Twitter"
              className="w-4 h-4 inline"
            />
          </a>
        </div>
        <p className="mt-4">
          Copyright © {new Date().getFullYear()} Market of Agents, All Rights
          Reserved |
          <Link href="/privacy-policy" className="text-blue-500 ml-1">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
