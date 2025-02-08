"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141414] py-8 border-t border-gray-800 mt-8">
      <div className="container mx-auto px-4">
        {/* Social Links */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          <a
            href="https://discord.gg/T8KPcdNBAh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/discord-mark-blue.png"
              alt="Discord"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/marketofagents/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/linkedin-icon.png"
              alt="LinkedIn"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
          <a
            href="https://x.com/leonardholter17"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/twitter-icon.png"
              alt="Twitter"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
        </div>

        {/* Copyright and Links */}
        <div className="text-center text-sm text-gray-400">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          <p>© {currentYear} Market of Agents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
