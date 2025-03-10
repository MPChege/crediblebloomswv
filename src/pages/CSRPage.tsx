import React from "react";
import { LeafIcon, HeartHandshakeIcon, HomeIcon } from "lucide-react";
const CSRPage = () => {
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80')",
        filter: "brightness(0.7)"
      }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Corporate Social Responsibility
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Making a positive impact in our community and environment
          </p>
        </div>
      </section>
      {/* Environmental Sustainability Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="Environmental Sustainability" className="w-full h-[400px] object-cover" />
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <LeafIcon size={32} className="text-green-600" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Environmental Sustainability
                  </h2>
                </div>
                <p className="text-lg text-gray-600">
                  The Company implement strategies to minimize their ecological
                  footprint, reduce waste and emissions, conserve resources, and
                  promote sustainable practices through the thing like the wet
                  land, RO water system, solar panel systems and greening among
                  other ways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Social Initiatives Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center space-x-3 mb-6">
                  <HeartHandshakeIcon size={32} className="text-purple-700" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Social Initiatives
                  </h2>
                </div>
                <p className="text-lg text-gray-600">
                  The company in collaboration with fairtrade actively
                  participates in providing self-empowerment and assistance to
                  surrounding communities. The company has managed to take a
                  percentage of its employees to vocational trainings like
                  driving and tailoring alongside bursary provision for staff
                  children.
                </p>
              </div>
              <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Social Initiatives" className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Community Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Community Support" className="w-full h-[400px] object-cover" />
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <HomeIcon size={32} className="text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Community Support
                  </h2>
                </div>
                <p className="text-lg text-gray-600">
                  We are committed to making a positive impact in our local
                  communities through various support programs and initiatives.
                </p>
                <ul className="mt-6 space-y-4 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-700">•</span>
                    <span>Educational support and scholarships</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-700">•</span>
                    <span>Vocational training programs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-700">•</span>
                    <span>Community development projects</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-700">•</span>
                    <span>Local employment opportunities</span>
                  </li>
                </ul>
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
export default CSRPage;