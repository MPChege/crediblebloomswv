import React from "react";
import { HeartIcon, LeafIcon, AwardIcon } from "lucide-react";
const AboutPage = () => {
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        filter: "brightness(0.7)"
      }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Credible Blooms
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Our story, mission, and commitment to quality and sustainability.
          </p>
        </div>
      </section>
      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 2010, Credible Blooms started as a small
                  family-owned flower farm with a vision to grow the most
                  beautiful and sustainable flowers in Kenya. Over the years,
                  we've expanded our operations while maintaining our commitment
                  to quality and environmental responsibility.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Located in Kenya's highlands at 2050 meters above sea level,
                  our farm benefits from ideal growing conditions - fertile
                  soil, abundant sunshine, and optimal temperatures. These
                  natural advantages allow us to grow flowers with vibrant
                  colors, strong stems, and exceptional vase life without
                  excessive intervention.
                </p>
                <p className="text-lg text-gray-600">
                  Today, Credible Blooms is proud to supply premium flowers to
                  both local markets and international clients across Europe,
                  Asia, and the Middle East. Our reputation for reliability,
                  quality, and sustainable practices has made us a trusted name
                  in the global flower industry.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1591886960571-74d43a9d4166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Credible Blooms Farm" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Guiding principles that drive everything we do at Credible
                Blooms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <HeartIcon size={48} className="text-purple-700 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600">
                  To cultivate and deliver the highest quality flowers while
                  respecting the environment, supporting our local community,
                  and meeting the highest standards of social responsibility. We
                  aim to bring joy and beauty to people's lives through our
                  blooms while ensuring our practices contribute positively to
                  our planet and community.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <LeafIcon size={48} className="text-green-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-600">
                  To be recognized globally as the leading sustainable flower
                  farm from Kenya, setting the standard for quality, innovation,
                  and environmental stewardship in the flower industry. We
                  envision a future where beautiful flowers and responsible
                  practices go hand in hand, and where our success uplifts our
                  entire community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the dedicated professionals who make Credible Blooms
                possible.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80')"
              }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Sarah Johnson
                  </h3>
                  <p className="text-purple-700 mb-4">Founder & CEO</p>
                  <p className="text-gray-600">
                    With over 20 years of experience in floriculture, Sarah
                    leads our company with passion and expertise.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
              }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    David Mwangi
                  </h3>
                  <p className="text-purple-700 mb-4">Farm Manager</p>
                  <p className="text-gray-600">
                    David oversees all farm operations, ensuring optimal growing
                    conditions and harvest quality.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')"
              }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Amina Wanjiku
                  </h3>
                  <p className="text-purple-700 mb-4">
                    Sustainability Director
                  </p>
                  <p className="text-gray-600">
                    Amina leads our sustainability initiatives and ensures we
                    maintain our environmental commitments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our decisions and actions every day.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <AwardIcon size={40} className="text-purple-700 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quality
                </h3>
                <p className="text-gray-600">
                  We are uncompromising in our commitment to growing and
                  delivering the highest quality flowers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <LeafIcon size={40} className="text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  We prioritize environmental responsibility in all aspects of
                  our operations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <HeartIcon size={40} className="text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Community
                </h3>
                <p className="text-gray-600">
                  We value and support our employees and the local community
                  that makes our work possible.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 mb-4">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  We conduct our business with honesty, transparency, and
                  ethical practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AboutPage;