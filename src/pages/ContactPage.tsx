import React, { lazy } from "react";
import { FacebookIcon, InstagramIcon, YoutubeIcon, MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";
const ContactPage = () => {
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        filter: "brightness(0.7)"
      }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Get in touch with our team.
          </p>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Map Column */}
              <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7458861851264!2d36.8584599!3d-1.3155443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11b6d5977ae7%3A0x832f9f09c37b6070!2sTumaini%20Estate%20Apartments!5e0!3m2!1sen!2sus!4v1646429385721!5m2!1sen!2sus" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              {/* Contact Info Column */}
              <div className="space-y-8">
                {/* Address Section */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Address
                  </h2>
                  <div className="flex items-start space-x-2 text-gray-600">
                    <MapPinIcon className="flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p>Tumaini Estate Apartments,</p>
                      <p>Embakasi — Nairobi</p>
                    </div>
                  </div>
                </div>
                {/* Mobile Section */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Mobile
                  </h2>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <PhoneIcon size={20} />
                      <p>Eliud : +254722382859</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <PhoneIcon size={20} />
                      <p>Sales : +254706344803</p>
                    </div>
                  </div>
                </div>
                {/* Email Section */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Email
                  </h2>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MailIcon size={20} />
                      <p>info@pigeonblooms.com</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MailIcon size={20} />
                      <p>eliud@pigeonblooms.com</p>
                    </div>
                  </div>
                </div>
                {/* Social Section */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Social
                  </h2>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-purple-700">
                      <FacebookIcon size={24} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-purple-700">
                      <InstagramIcon size={24} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-purple-700">
                      <YoutubeIcon size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Drop Us A Line
              </h2>
              <p className="text-gray-600 mb-8">
                If you have any questions, please feel free to get in touch with
                us.
                <br />
                We will reply to you as soon as possible. Thank you!
              </p>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name (required)
                  </label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email (required)
                  </label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="Your email" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="Subject" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea id="message" name="message" rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="Your message"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    Send Message
                  </button>
                </div>
              </form>
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
export default ContactPage;