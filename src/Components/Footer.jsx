import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrolleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-white font-semibold text-xl mb-4">About Us</h3>
          <p className="text-gray-400">
            Established in the year 1996 at Ankleshwar, Gujarat, we are engaged
            in manufacturing and supplying top-quality industrial products.
          </p>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-white font-semibold text-xl mb-4">
            Useful Links
          </h3>
          <ul>
            <li className="mb-2">
              <Link
                onClick={scrolleToTop}
                to="/"
                className="hover:text-yellow-500 hover:scale-105 hover:text-lg cursor-pointer transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                onClick={scrolleToTop}
                to="/products"
                className="hover:text-yellow-500 hover:scale-105 hover:text-lg cursor-pointer transition duration-300 ease-in-out"
              >
                Products
              </Link>
            </li>
            <li className="mb-2">
              <Link
                onClick={scrolleToTop}
                to="/about"
                className="hover:text-yellow-500 hover:scale-105 hover:text-lg cursor-pointer transition duration-300 ease-in-out"
              >
                About Us
              </Link>
            </li>

            <li className="mb-2">
              <Link
                onClick={scrolleToTop}
                to="/contact"
                className="hover:text-yellow-500 hover:scale-105 hover:text-lg cursor-pointer transition duration-300 ease-in-out"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Products Section */}
        <div>
          <h3 className="text-white font-semibold text-xl mb-4">
            Our Products
          </h3>
          <ul>
            <li className="mb-2 hover:text-white hover:underline transition duration-300 ease-in-out">
              Cooling Tower
            </li>
            <li className="mb-2 hover:text-white hover:underline transition duration-300 ease-in-out">
              HDPE Tank
            </li>
            <li className="mb-2 hover:text-white hover:underline transition duration-300 ease-in-out">
              FRP Tank
            </li>
            <li className="mb-2 hover:text-white hover:underline transition duration-300 ease-in-out">
              Blower Wheel
            </li>
            <li className="mb-2 hover:text-white hover:underline transition duration-300 ease-in-out">
              FRP Chimney
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-white font-semibold text-xl mb-4">Contact Us</h3>
          <p className="text-gray-400">Yogeshwar Fibre Fabricators</p>
          <p className="text-gray-400">Ankleshwar, Gujarat, India</p>
          <p className="text-gray-400">Email: info@yogeshwarfibre.com</p>
          <p className="text-gray-400">Phone: +91 12345 67890</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Yogeshwar Fibre Fabricators. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
