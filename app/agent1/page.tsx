import React from "react";
import Navbar from "../components/Navbar";
const page = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Company Information Lookup</h1>
        <p className="text-gray-600 mb-6">
          Enter a company name to get detailed information powered by AI
        </p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </>
  );
};

export default page;
