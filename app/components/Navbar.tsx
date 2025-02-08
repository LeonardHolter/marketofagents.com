"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Only update URL if we're on the home page
  useEffect(() => {
    if (pathname !== "/") return;

    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        // Always use search parameter - remove the category-specific logic
        router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`, {
          scroll: false,
        });
      } else {
        router.push("/", { scroll: false });
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, pathname, router]);

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "About Us",
      path: "/about-us",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Catalog",
      path: "/catalog",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Main Navbar */}
      <div className="bg-[#0F0F0F] fixed w-full z-50 h-12">
        <div className="h-full flex items-center">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuExpanded(!isMenuExpanded)}
              className="w-16 h-12 flex items-center justify-center hover:bg-[#272727]"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link href="/">
              <Image
                src="/MOAWHITE.png"
                alt="Market of Agents"
                width={112}
                height={40}
                className="object-contain w-28 h-auto ml-4"
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex justify-center items-center max-w-3xl mx-auto px-4 mt-[6px]">
            <div className="w-full flex">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-[#121212] text-white placeholder-gray-400 border border-gray-600 focus:border-white/30 focus:outline-none rounded-l-full text-base"
              />
              <div className="px-6 py-2 bg-[#272727] text-gray-200 rounded-r-full border border-l-0 border-gray-600 flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex items-center mr-4 mt-[6px]">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 rounded-full border border-gray-600 text-white hover:bg-[#272727] transition-colors text-base font-medium">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="scale-100">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-9 h-9",
                    },
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>

      {/* Permanent Vertical Sidebar */}
      <div className="fixed left-0 top-[48px] h-[calc(100vh-48px)] w-16 bg-[#0F0F0F] z-40 flex flex-col items-center">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`w-full flex flex-col items-center py-4 hover:bg-[#272727] ${
              pathname === item.path ? "bg-[#272727]" : ""
            }`}
          >
            <div className="text-white">{item.icon}</div>
            <span className="text-[10px] text-white mt-1">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Expanded Menu */}
      <div
        className={`fixed left-0 top-[48px] h-[calc(100vh-48px)] bg-[#0F0F0F] w-60 z-50 transform transition-transform duration-200 ${
          isMenuExpanded ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                pathname === item.path
                  ? "bg-[#272727] text-white"
                  : "text-white hover:bg-[#272727]"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay when expanded menu is open */}
      {isMenuExpanded && (
        <div
          className="fixed inset-0 top-[48px] bg-black bg-opacity-50 z-45"
          onClick={() => setIsMenuExpanded(false)}
        />
      )}
    </>
  );
}
