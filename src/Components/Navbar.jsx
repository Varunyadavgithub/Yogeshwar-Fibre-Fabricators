import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-yellow-500" : "text-white";
  };

  const scrolleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="bg-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center py-4">
            <div className="text-white text-2xl font-bold">
              <Link
                to="/"
                className="flex flex-col items-center justify-center"
              >
                <span>Yogeshwar Fibre</span>
                <span className="text-yellow-500">Fabricators</span>
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex flex-col items-end gap-4">
              <div className="text-white text-sm flex flex-col md:flex-row md:space-x-8 items-center justify-center">
                <div>
                  <span>Email: </span>
                  <a
                    href="mailto:info@yogeshwarfibre.com"
                    className="hover:text-gray-300"
                  >
                    info@yogeshwarfibre.com
                  </a>
                </div>
                <div>
                  <span>Phone: </span>
                  <a href="tel:+912345678910" className="hover:text-gray-300">
                    +91 234 567 8910
                  </a>
                </div>
              </div>
              <div>
                <a
                  href="/brochure.pdf"
                  download
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center space-x-6 text-xl">
            <Link
              to="/"
              onClick={() => {
                scrolleToTop();
              }}
              className={`${isActive(
                "/"
              )} font-semibold p-2 hover:text-yellow-500 rounded-full`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <Link
              to="/products"
              onClick={() => {
                scrolleToTop();
              }}
              className={`${isActive(
                "/products"
              )} font-semibold p-2 hover:text-yellow-500 rounded-full`}
            >
              Products
            </Link>

            {/* About Us Dropdown */}
            <Link
              to="/about"
              onClick={() => {
                scrolleToTop();
              }}
              className={`${isActive(
                "/about"
              )} font-semibold p-2 hover:text-yellow-500 rounded-full`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              onClick={() => {
                scrolleToTop();
              }}
              className={`${isActive(
                "/contact"
              )} font-semibold p-2 hover:text-yellow-500 rounded-full`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 w-64 bg-gray-800 h-full z-50 transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Links */}
            <ul className="flex flex-col space-y-6 p-6 text-white">
              <li>
                <Link
                  to="/"
                  className="text-lg hover:text-gray-300"
                  onClick={() => {
                    scrolleToTop();
                  }}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                to="/products"
                  onClick={() => {
                    scrolleToTop();
                  }}
                  className="text-lg hover:text-gray-300"
                >
                  Products
                </Link>
              </li>

              {/* About Us Dropdown (Mobile) */}
              <li>
                <Link
                to="/about"
                  onClick={() => {
                    scrolleToTop();
                  }}
                  className="text-lg hover:text-gray-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-lg hover:text-gray-300"
                  onClick={() => {
                    scrolleToTop();
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
