"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
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
      <div className="ml-auto">
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
