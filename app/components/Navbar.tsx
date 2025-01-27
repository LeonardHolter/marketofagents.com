"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b border-gray-200 shadow-sm px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo Section */}
        <Link href="/">
          <img
            src="MOA_LOGO.png"
            className="object-contain w-28 h-auto"
            alt="MOA Logo"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <label htmlFor="menu-toggle" className="btn btn-circle btn-ghost">
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

        {/* Menu Items */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <div className="peer-checked:flex hidden flex-col md:flex md:flex-row md:items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          {/* About Us Button */}
          {/*
            <Link
              href="/about-us"
              className="btn"
              style={{ backgroundColor: "rgb(250,51,51)", color: "white" }}
            >
              About Us
            </Link>
          */}

          {/* Authentication Buttons */}
          <SignedOut>
            <SignInButton mode="modal">
              <button
                className="btn"
                style={{ backgroundColor: "rgb(250,51,51)", color: "white" }}
              >
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
