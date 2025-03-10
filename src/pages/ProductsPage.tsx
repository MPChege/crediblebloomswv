import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
type SortOption = "default" | "popularity" | "latest" | "price-asc" | "price-desc";
const roses = [{
  id: 1,
  name: "Alicia",
  category: "Premium Roses",
  image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
}, {
  id: 2,
  name: "Aqua",
  category: "Premium Roses",
  image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80"
}, {
  id: 3,
  name: "Athena",
  category: "Super Premium",
  image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80"
}, {
  id: 4,
  name: "Belle Rose",
  category: "Intermediates",
  image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80"
}, {
  id: 5,
  name: "Flame",
  category: "Extra Premium",
  image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2104&q=80"
}, {
  id: 6,
  name: "Spray Delight",
  category: "Spray Roses",
  image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
}];
const categories = ["Extra Premium", "Intermediates", "Premiums", "Spray Roses", "Super Premiums", "Summer Flowers"];
const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>("default");
  const filteredRoses = selectedCategory ? roses.filter(rose => rose.category === selectedCategory) : roses;
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1455582916367-25f75bfc6710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80')",
        filter: "brightness(0.7)"
      }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Roses
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Discover our premium collection of beautiful roses.
          </p>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Categories
                </h2>
                <ul className="space-y-3">
                  <li>
                    <button className={`w-full text-left px-4 py-2 rounded-md ${selectedCategory === null ? "bg-purple-700 text-white" : "text-gray-600 hover:bg-gray-100"}`} onClick={() => setSelectedCategory(null)}>
                      All Roses
                    </button>
                  </li>
                  {categories.map(category => <li key={category}>
                      <button className={`w-full text-left px-4 py-2 rounded-md ${selectedCategory === category ? "bg-purple-700 text-white" : "text-gray-600 hover:bg-gray-100"}`} onClick={() => setSelectedCategory(category)}>
                        {category}
                      </button>
                    </li>)}
                </ul>
              </div>
            </div>
            {/* Products Grid */}
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedCategory || "All Roses"}
                </h2>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500" value={sortOption} onChange={e => setSortOption(e.target.value as SortOption)}>
                    <option value="default">Default sorting</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="latest">Sort by latest</option>
                    <option value="price-asc">
                      Sort by price: low to high
                    </option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRoses.map(rose => <div key={rose.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-w-1 aspect-h-1">
                      <img src={rose.image} alt={rose.name} className="w-full h-64 object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {rose.name}
                      </h3>
                      <p className="text-sm text-purple-700">{rose.category}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WhatsApp Button */}
      <a href="https://wa.me/254722382859" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors z-50">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>;
};
export default ProductsPage;