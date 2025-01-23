export default function AgentCategories() {
    const categories = [
      "Programming & Tech",
      "Graphics & Design",
      "Digital Marketing",
      "AI Services",
      "Music & Audio",
      "Video & Animation",
      "Business",
      "Consulting",
    ];
  
    return (
      <div className="mt-10 bg-gray-100 p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-center"
            >
              <p className="font-bold">{category}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  