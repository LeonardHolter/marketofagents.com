"use static";

import React from "react";
import NavBar from "../components/Navbar";

export default function team() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl">
          Leonard Holter, Aaron Siddiky, Filip
        </p>
        <p className="text-lg text-gray-600 text-center max-w-2xl mt-4">
          Follow us on our socials! 
        </p>
      </div>
    </>
  );
}
