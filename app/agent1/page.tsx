"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Page = () => {
  const [companyName, setCompanyName] = useState("");
  const [founders, setFounders] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "https://fathomless-wave-32180-23c8bcd4cf72.herokuapp.com/get_founders",
        {
          company_name: companyName,
        }
      );

      setFounders(response.data.founders);
    } catch (error) {
      console.error("Error fetching founders:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Company Information Lookup</h1>
        <p className="text-gray-600 mb-6">
          Enter a company name to get detailed information powered by AI
        </p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <button className="btn btn-primary mt-4" onClick={handleSearch}>
          Search
        </button>
        {founders && (
          <div className="mt-6">
            <h2 className="text-xl font-bold">Founders:</h2>
            <p>{founders}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
