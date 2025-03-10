import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon, ChevronDownIcon } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  const menuItems = [{
    title: "About",
    path: "/about",
    submenu: [{
      title: "Our Story",
      path: "/about"
    }, {
      title: "Our Farm",
      path: "/our-farm"
    }, {
      title: "Team",
      path: "/about#team"
    }]
  }, {
    title: "Products",
    path: "/products",
    submenu: [{
      title: "Premium Roses",
      path: "/products#premium"
    }, {
      title: "Spray Roses",
      path: "/products#spray"
    }, {
      title: "Summer Flowers",
      path: "/products#summer"
    }]
  }, {
    title: "Sustainability",
    path: "/sustainability",
    submenu: [{
      title: "Environmental Impact",
      path: "/sustainability#environment"
    }, {
      title: "CSR",
      path: "/csr"
    }, {
      title: "Certifications",
      path: "/sustainability#certifications"
    }]
  }, {
    title: "Contact",
    path: "/contact"
  }, {
    title: "Blog",
    path: "/blog"
  }];
  return <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200">
            <img src="/Credible-Blooms-Logo.png" alt="Credible Blooms Logo" className="h-12" />
          </Link>
          <nav className="hidden md:flex space-x-1">
            <Link to="/" className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-purple-50 ${location.pathname === "/" ? "text-purple-700 bg-purple-50" : "text-gray-700 hover:text-purple-700"}`}>
              Home
            </Link>
            {menuItems.map(item => <div key={item.title} className="relative group" onMouseEnter={() => setActiveDropdown(item.title)} onMouseLeave={() => setActiveDropdown(null)}>
                <Link to={item.path} className={`flex items-center px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-purple-50 ${location.pathname === item.path ? "text-purple-700 bg-purple-50" : "text-gray-700 hover:text-purple-700"}`}>
                  {item.title}
                  {item.submenu && <ChevronDownIcon size={16} className={`ml-1 transition-transform duration-200 ${activeDropdown === item.title ? "rotate-180" : ""}`} />}
                </Link>
                {item.submenu && <div className={`absolute top-full left-0 w-48 py-2 mt-1 bg-white rounded-lg shadow-lg transform transition-all duration-200 origin-top-left ${activeDropdown === item.title ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                    {item.submenu.map(subItem => <Link key={subItem.title} to={subItem.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200">
                        {subItem.title}
                      </Link>)}
                  </div>}
              </div>)}
          </nav>
          <button type="button" className="md:hidden w-10 h-10 flex items-center justify-center text-gray-500 hover:text-purple-700 focus:outline-none transform hover:scale-110 transition-all duration-200" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      <div className={`md:hidden fixed inset-0 bg-gray-800/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setIsMenuOpen(false)}>
        <div className={`absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`} onClick={e => e.stopPropagation()}>
          <div className="p-5 space-y-2">
            <Link to="/" className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${location.pathname === "/" ? "text-purple-700 bg-purple-50" : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"}`}>
              Home
            </Link>
            {menuItems.map(item => <div key={item.title}>
                <Link to={item.path} className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${location.pathname === item.path ? "text-purple-700 bg-purple-50" : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"}`}>
                  {item.title}
                </Link>
                {item.submenu && <div className="pl-4 mt-1 space-y-1">
                    {item.submenu.map(subItem => <Link key={subItem.title} to={subItem.path} className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors duration-200">
                        {subItem.title}
                      </Link>)}
                  </div>}
              </div>)}
          </div>
        </div>
      </div>
    </header>;
};
export default Navbar;