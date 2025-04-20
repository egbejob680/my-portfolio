import { useState } from "react";

import Brand2 from "../image/Brand.png";
import Brand3 from "../image/Brand2.png";
import Brand4 from "../image/Brand3.png";
import Brand5 from "../image/Brand4.png";
import Design from "../image/Design.png";
import Design1 from "../image/Design2.png";
import Design2 from "../image/Design3.png";

const portfolioItems = [
  { id: 1, category: "branding", image: Brand2 },
  { id: 2, category: "branding", image: Brand3 },
  { id: 3, category: "designs", image: Design1 },
  { id: 4, category: "designs", image: Design },
  { id: 5, category: "designs", image: Design2 },
  { id: 6, category: "branding", image: Brand4 },
  { id: 7, category: "branding", image: Brand5 },


];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      <div className="text-white py-12 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">
          My <span className="text-yellow-500">Portfolio</span>
        </h2>
        <p className="mb-6 text-gray-400 text-center md:text-left">
          A selection of my recent works in branding and design.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
          {["all", "branding", "designs"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded ${
                filter === cat ? "bg-yellow-500" : "bg-gray-800"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => setSelectedImage(item.image)}
                  className="bg-yellow-500 text-white rounded-full p-5 hover:bg-yellow-600 transition-colors duration-300"
                >
                  <span className="text-lg text-center bg-transparent font-bold">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative p-4 max-w-3xl w-full">
            <img
              src={selectedImage}
              alt="Full View"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-yellow-500"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <hr className="w-11/12 mx-auto mt-10 opacity-10" />
    </>
  );
}
