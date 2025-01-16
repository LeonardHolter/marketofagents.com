"use static";

import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b border-gray-200 shadow-sm flex justify-center items-center">
      <Link href="/">
        <img
          src="MOA_LOGO.png"
          className="object-contain"
          style={{ maxWidth: "7rem", maxHeight: "7rem" }}
          alt="MOA Logo"
        />
      </Link>
    </div>
  );
}
