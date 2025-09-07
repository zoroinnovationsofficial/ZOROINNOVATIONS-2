import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // detects current path

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Verify ID", href: "/verify" },
    { name: "Contact", href: "/contact" },
    { name: "Admin", href: "/admin/landing" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // close menu after clicking link
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/zoroLogo.png"
              alt="Zoro Innovations"
              className="w-28 h-auto bg-transparent"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={handleLinkClick}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#ff6b35] border-b-2 border-[#ff6b35]"
                        : "text-gray-700 hover:text-[#ff6b35] hover:border-b-2 hover:border-[#ff6b35]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#ff6b35] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ff6b35]"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#ff6b35] bg-blue-50 border-l-4 border-[#ff6b35]"
                      : "text-gray-700 hover:text-[#ff6b35] hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
