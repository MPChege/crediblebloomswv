import React from "react";
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/" className="text-base text-gray-600 hover:text-purple-700">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-base text-gray-600 hover:text-purple-700">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-farm" className="text-base text-gray-600 hover:text-purple-700">
                      Our Farm
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="text-base text-gray-600 hover:text-purple-700">
                      Products
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  More
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/sustainability" className="text-base text-gray-600 hover:text-purple-700">
                      Sustainability
                    </Link>
                  </li>
                  <li>
                    <Link to="/csr" className="text-base text-gray-600 hover:text-purple-700">
                      CSR
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-gray-600 hover:text-purple-700">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-base text-gray-600 hover:text-purple-700">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  Contact
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="text-base text-gray-600">
                    Email: info@credibleblooms.com
                  </li>
                  <li className="text-base text-gray-600">
                    Phone: +254 123 456 789
                  </li>
                  <li className="text-base text-gray-600">Nairobi, Kenya</li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  Follow Us
                </h3>
                <div className="flex space-x-6 mt-4">
                  <a href="#" className="text-gray-500 hover:text-purple-700">
                    <span className="sr-only">Facebook</span>
                    <FacebookIcon size={24} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-700">
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon size={24} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-700">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedinIcon size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Credible Blooms. All rights
            reserved.
          </p>
          <p className="text-base text-gray-500 text-center mt-2">
            <Link to="/privacy-policy" className="hover:text-purple-700">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;