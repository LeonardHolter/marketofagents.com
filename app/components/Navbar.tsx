"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const buttonClasses =
    "px-4 py-2 rounded-full border border-gray-600 text-white hover:bg-[#333333] transition-colors";
  const enterpriseButtonClasses =
    "px-4 py-2 rounded-full bg-white text-black hover:bg-gray-100 transition-colors font-medium";

  return (
    <div className="navbar bg-zinc-900 px-4">
      <div className="container mx-auto flex items-center justify-between py-2">
        {/* Left Section with Logo and Navigation */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link href="/">
            <img
              src="/MOAWHITE.png"
              className="object-contain w-24 h-auto"
              alt="Market of Agents"
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/about-us" className={buttonClasses}>
              About Us
            </Link>
            <Link
              href="https://forms.gle/GUFf7axNWKdao9Wb8"
              className={buttonClasses}
            >
              Request Agent
            </Link>
            <Link
              href="https://forms.gle/GUFf7axNWKdao9Wb8"
              className={buttonClasses}
            >
              List Agent
            </Link>
            <Link href="/catalog" className={enterpriseButtonClasses}>
              Catalog
            </Link>
          </div>
        </div>

        {/* Right Section with Search and Auth */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 pr-10 rounded-full bg-[#27272A] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 w-64 transition-all"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute right-3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <SignedOut>
            <SignInButton mode="modal">
              <button className={`${buttonClasses} bg-transparent`}>
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <label
              htmlFor="menu-toggle"
              className="btn btn-circle btn-ghost text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
          </div>
        </div>

        {/* Mobile Menu */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <div className="absolute top-16 left-0 right-0 bg-zinc-900 peer-checked:flex hidden flex-col w-full border-t border-gray-800 md:hidden">
          <div className="p-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 rounded-full bg-[#27272A] text-white placeholder-gray-400 border border-gray-600"
            />
          </div>
          <Link
            href="/about-us"
            className="px-4 py-2 text-white hover:bg-[#27272A]"
          >
            About Us
          </Link>
          <Link
            href="https://forms.gle/GUFf7axNWKdao9Wb8"
            className="px-4 py-2 text-white hover:bg-[#27272A]"
          >
            Request Agent
          </Link>
          <Link
            href="https://forms.gle/GUFf7axNWKdao9Wb8"
            className="px-4 py-2 text-white hover:bg-[#27272A]"
          >
            List Agent
          </Link>
          <Link
            href="/enterprise"
            className="px-4 py-2 text-white hover:bg-[#27272A]"
          >
            Enterprise
          </Link>
        </div>
      </div>
    </div>
  );
}
