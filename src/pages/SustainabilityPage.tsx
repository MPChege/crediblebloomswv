import React from "react";
import { LeafIcon, DropletIcon, SunIcon, RecycleIcon, TreePineIcon, ShieldCheckIcon, HeartHandshakeIcon } from "lucide-react";
const SustainabilityPage = () => {
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        filter: "brightness(0.7)"
      }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Commitment to Sustainability
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Leading the way in environmentally responsible flower farming
          </p>
        </div>
      </section>
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <LeafIcon size={48} className="text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sustainable Farming for a Better Future
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              At Credible Blooms, sustainability isn't just a buzzword – it's at
              the core of everything we do. We believe that beautiful flowers
              should never come at the expense of our environment or our
              communities.
            </p>
            <p className="text-lg text-gray-600">
              Our comprehensive approach to sustainable farming combines
              traditional wisdom with modern technology, ensuring that every
              bloom we grow contributes to a healthier planet.
            </p>
          </div>
        </div>
      </section>
      {/* Key Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Environmental Initiatives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <DropletIcon size={40} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Water Conservation
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Advanced drip irrigation systems</li>
                  <li>• Rainwater harvesting facilities</li>
                  <li>• Water recycling and treatment plants</li>
                  <li>• Regular monitoring of water usage</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <SunIcon size={40} className="text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Renewable Energy
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Solar panel installations</li>
                  <li>• Energy-efficient greenhouse design</li>
                  <li>• LED lighting systems</li>
                  <li>• Natural ventilation optimization</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <RecycleIcon size={40} className="text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Waste Management
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Organic waste composting</li>
                  <li>• Packaging material recycling</li>
                  <li>• Biodegradable materials usage</li>
                  <li>• Zero-waste initiatives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sustainable Practices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Sustainable Growing Practices
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <TreePineIcon className="text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Integrated Pest Management
                      </h3>
                      <p className="text-gray-600">
                        Using biological controls and natural predators to
                        manage pests, reducing the need for chemical pesticides.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Soil Health Management
                      </h3>
                      <p className="text-gray-600">
                        Implementing crop rotation and organic fertilization to
                        maintain soil fertility naturally.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <HeartHandshakeIcon className="text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Community Engagement
                      </h3>
                      <p className="text-gray-600">
                        Working with local communities to share sustainable
                        farming knowledge and practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1591886960571-74d43a9d4166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Sustainable Farming Practices" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <ShieldCheckIcon size={48} className="text-purple-700 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Environmental Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  MPS-ABC
                </h3>
                <p className="text-gray-600">
                  Environmental certification for floriculture
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  GlobalG.A.P
                </h3>
                <p className="text-gray-600">
                  Good Agricultural Practices certification
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  Fairtrade
                </h3>
                <p className="text-gray-600">
                  Fair trade and sustainable production practices
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  KFC Silver
                </h3>
                <p className="text-gray-600">
                  Kenya Flower Council environmental standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join Us in Creating a Sustainable Future
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Learn more about our commitment to environmental stewardship and
              how we're working to create a more sustainable flower industry.
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800 transition duration-150">
              Download Our Sustainability Report
            </button>
          </div>
        </div>
      </section>
    </div>;
};
export default SustainabilityPage;