import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon, LeafIcon, GlobeIcon, FlowerIcon, SunIcon, HeartIcon } from "lucide-react";
const HomePage = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <div className="w-full bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 bg-cover bg-center transform scale-110" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80')"
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                Fresh, Quality, and Sustainable Flowers from Kenya
              </h1>
              <p className="text-xl md:text-2xl text-white mb-12 animate-fade-in-up delay-200">
                Bringing Kenya's finest blooms to the world with care and
                quality.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-400">
                <Link to="/products" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-purple-700 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative">View Our Flowers</span>
                </Link>
                <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-purple-700 bg-white rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative">Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 animate-float-slow">
            <FlowerIcon size={32} className="text-purple-300/50" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float-slower">
            <LeafIcon size={24} className="text-green-300/50" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float">
            <SunIcon size={28} className="text-yellow-300/50" />
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[{
              icon: <LeafIcon size={48} className="text-green-600" />,
              title: "Sustainable Farming",
              description: "Our eco-friendly practices ensure that our flowers are grown with respect for the environment and the community."
            }, {
              icon: <CheckCircleIcon size={48} className="text-purple-700" />,
              title: "Premium Quality",
              description: "We carefully select and nurture each variety to ensure exceptional quality, color, and vase life."
            }, {
              icon: <GlobeIcon size={48} className="text-blue-600" />,
              title: "Global Reach",
              description: "From our farm in Kenya to markets worldwide, we deliver fresh blooms with efficient logistics and care."
            }].map((feature, index) => <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl transform transition-transform group-hover:scale-105 -z-10"></div>
                  <div className="relative z-10">
                    <div className="mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Our Featured Flowers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[{
              image: "product-2.png",
              title: "Premium Roses",
              description: "Our signature roses come in a variety of stunning colors and have an exceptional vase life."
            }, {
              image: "/product-1.png",
              title: "Spray Roses",
              description: "Delicate and charming, our spray roses add elegance to any arrangement or bouquet."
            }, {
              image: "product-3.png",
              title: "Summer Flowers",
              description: "Vibrant and colorful, our summer flowers bring joy and brightness to any space."
            }].map((product, index) => <div key={index} className="group relative transform perspective-1000 transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform -rotate-6 scale-95 transition-transform group-hover:rotate-3 group-hover:scale-100"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
                    <div className="h-64 overflow-hidden">
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <Link to="/products" className="inline-flex items-center text-purple-700 font-medium hover:text-purple-800 transition-colors">
                        View Collection →
                      </Link>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Order Our Beautiful Flowers?
            </h2>
            <p className="text-xl text-purple-100 mb-12">
              Contact us today to discuss your flower needs or request a quote.
            </p>
            <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-purple-700 bg-white rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <span className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative">Contact Us Now</span>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default HomePage;