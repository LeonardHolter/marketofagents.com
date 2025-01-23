"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 border-b border-gray-200 shadow-sm flex justify-between items-center px-4">
      <Link href="/">
        <img
          src="MOA_LOGO.png"
          className="object-contain"
          style={{ maxWidth: "7rem", maxHeight: "7rem" }}
          alt="MOA Logo"
        />
      </Link>
      <div className="ml-auto flex items-center space-x-4">
        <Link
          href="https://discord.gg/T8KPcdNBAh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-500 hover:underline"
        >
          <img
            src="/discord-mark-blue.png"
            alt="Join Discord"
            className="w-7.5 h-6 mr-3"
          />
        </Link>
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
  );
}
