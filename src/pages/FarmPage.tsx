import React from "react";
import { SunIcon, CloudRainIcon, ThermometerIcon } from "lucide-react";
const FarmPage = () => {
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        filter: "brightness(0.7)"
      }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Farm
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Discover the perfect growing conditions that make our flowers
            exceptional.
          </p>
        </div>
      </section>
      {/* Farm Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                  Our Kenyan Highland Farm
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Situated at 2050 meters above sea level in Kenya's fertile
                  highlands, Credible Blooms enjoys ideal growing conditions
                  that are perfect for cultivating premium quality flowers. Our
                  location combines rich volcanic soil, abundant sunshine, and
                  moderate temperatures to create the perfect environment for
                  growing vibrant, healthy blooms.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Our farm spans over 25 hectares of carefully maintained land,
                  featuring modern greenhouses designed to optimize growing
                  conditions while minimizing environmental impact. We've
                  invested in state-of-the-art irrigation systems, solar power,
                  and water recycling facilities to ensure our operations are as
                  sustainable as possible.
                </p>
                <p className="text-lg text-gray-600">
                  With over 15 varieties of roses and an expanding selection of
                  summer flowers, our farm produces millions of stems annually
                  for both local markets and international export. Every aspect
                  of our farm operations is designed to maintain the highest
                  standards of quality while respecting the environment.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" alt="Credible Blooms Greenhouse" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Growing Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Perfect Growing Conditions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our location provides natural advantages that help us grow
                exceptional flowers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <SunIcon size={48} className="text-yellow-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Abundant Sunshine
                </h3>
                <p className="text-lg text-gray-600">
                  Located near the equator, our farm benefits from approximately
                  12 hours of sunshine daily year-round. This consistent light
                  exposure promotes vibrant colors and strong stem development
                  in our flowers.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <ThermometerIcon size={48} className="text-purple-700 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Optimal Temperature
                </h3>
                <p className="text-lg text-gray-600">
                  At 2050 meters above sea level, our farm enjoys moderate
                  temperatures ranging from 15°C to 25°C (59°F to 77°F). This
                  range is ideal for slow, steady growth that produces stronger,
                  longer-lasting flowers.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <CloudRainIcon size={48} className="text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Rich Volcanic Soil
                </h3>
                <p className="text-lg text-gray-600">
                  Our farm is blessed with fertile volcanic soil that is
                  naturally rich in nutrients. This exceptional soil quality,
                  combined with our sustainable farming practices, provides the
                  perfect foundation for growing premium flowers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Farm Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Farm Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Take a visual tour of our facilities and flower fields.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <img src="https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" alt="Greenhouse Interior" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <img src="https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Rose Field" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" alt="Packaging Facility" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <img src="https://images.unsplash.com/photo-1523867574998-1acb50f9dd3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Workers Harvesting" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <img src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" alt="Flower Varieties" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <img src="https://images.unsplash.com/photo-1591886960571-74d43a9d4166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Aerial View" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                From Farm to Vase
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our careful process ensures the highest quality flowers reach
                your hands.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1611145434336-2cce4dca6cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Flower Processing" className="w-full h-[400px] object-cover" />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    1. Careful Harvesting
                  </h3>
                  <p className="text-gray-600">
                    Our skilled team harvests each flower at the optimal time,
                    ensuring perfect bloom development and maximum vase life.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    2. Quality Control
                  </h3>
                  <p className="text-gray-600">
                    Every stem undergoes rigorous quality checks to meet our
                    high standards for size, color, and freshness.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    3. Processing & Packaging
                  </h3>
                  <p className="text-gray-600">
                    Flowers are carefully processed, bundled, and packaged in
                    our state-of-the-art facility to maintain freshness.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    4. Cold Chain Logistics
                  </h3>
                  <p className="text-gray-600">
                    Our efficient cold chain system ensures flowers remain fresh
                    from harvest to delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default FarmPage;