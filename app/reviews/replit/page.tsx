import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-center">Agent Reviews</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Replit Agent Review</h2>
          <div className="text-gray-700 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vehicula orci non diam bibendum, vel tempor metus vulputate.
            </p>
            <p className="mt-4">
              Praesent nec nisl nec augue tincidunt tempor. Nulla facilisi.
              Maecenas feugiat lorem at suscipit vestibulum. Ut ac consequat
              nulla.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
