import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductSlider from "../Components/ProductSlider";
import Carousel_01 from "../assets/images/carousel_01.png";
import Carousel_02 from "../assets/images/carousel_02.png";
import Carousel_03 from "../assets/images/carousel_03.png";
import Carousel_04 from "../assets/images/carousel_04.png";
import Carousel_05 from "../assets/images/carousel_05.png";
import Manufacturing from "../assets/images/manufacturing.jpg";
import Wholesale from "../assets/images/wholesale.webp";
import Consultation from "../assets/images/Consultation.avif";
const Home = () => {
  const scrolleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          interval={3000}
          className="h-full"
        >
          <div className="h-full">
            <img
              src={Carousel_01}
              alt="carousel-01"
              className="object-cover h-screen w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Yogeshwar Fibre Fabricators
                </h1>
                <p className="text-lg md:text-2xl mb-8">
                  Manufacturer & Supplier of High-Quality Industrial Products
                </p>
                <Link
                  to="/products"
                  onClick={scrolleToTop}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Explore Our Products
                </Link>
              </div>
            </div>
          </div>
          <div className="h-full">
            <img
              src={Carousel_02}
              alt="carousel-02"
              className="object-cover h-screen w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Industry Leaders in Fibre Fabrication
                </h1>
                <p className="text-lg md:text-2xl mb-8">
                  Delivering top-notch solutions since 1996
                </p>
                <Link
                  to="/about"
                  onClick={scrolleToTop}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="h-full">
            <img
              src={Carousel_03}
              alt="carousel-03"
              className="object-cover h-screen w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Trusted by Industry Professionals
                </h1>
                <p className="text-lg md:text-2xl mb-8">
                  Innovative solutions for a sustainable future
                </p>
                <Link
                  to="/contact"
                  onClick={scrolleToTop}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          {/*--------------------------------- Two extra -------------------------------- */}
          <div className="h-full">
            <img
              src={Carousel_04}
              alt="carousel-04"
              className="object-cover h-screen w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Trusted by Industry Professionals
                </h1>
                <p className="text-lg md:text-2xl mb-8">
                  Innovative solutions for a sustainable future
                </p>
                <Link
                  to="/contact"
                  onClick={scrolleToTop}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="h-full">
            <img
              src={Carousel_05}
              alt="carousel-05"
              className="object-cover h-screen w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Trusted by Industry Professionals
                </h1>
                <p className="text-lg md:text-2xl mb-8">
                  Innovative solutions for a sustainable future
                </p>
                <Link
                  to="/contact"
                  onClick={scrolleToTop}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </section>

      {/* About Us Section */}
      <section className="flex flex-col gap-4 container text-center py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Us</h2>
          <p className="text-gray-600 mb-8">
            Established in the year 1996 at Ankleshwar, Gujarat, we “Yogeshwar
            Fibre Fabricators” are engaged in manufacturing and supplying
            Cooling Towers, HDPE Tanks, FRP Tanks, Blower Wheels, and much more.
            We are a trusted name in the industry, known for providing
            high-quality products and exceptional services.
          </p>
          <Link
            to="/about"
            onClick={scrolleToTop}
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
            Our Products
          </h2>
          <ProductSlider />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img src={Manufacturing} alt="manufacturing" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-4">Manufacturing</h3>
                <p className="text-gray-600">
                  We provide high-quality custom manufacturing services.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img src={Wholesale} alt="Wholesaling" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-4">Wholesaling</h3>
                <p className="text-gray-600">
                  We offer wholesale deals on our industrial products.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img src={Consultation} alt="Consultation" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-4">Consultation</h3>
                <p className="text-gray-600">
                  Our experts provide consultation on the best solutions for
                  your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 italic mb-4">
                "Yogeshwar Fibre Fabricators provided excellent products and
                service. Highly recommend!"
              </p>
              <h4 className="font-semibold">- Rajesh Sharma</h4>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 italic mb-4">
                "Their cooling towers have improved our factory's efficiency.
                Great quality and support."
              </p>
              <h4 className="font-semibold">- Meera Patel</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            We would love to hear from you. Contact us for any inquiries or more
            information about our products and services.
          </p>
          <Link
            to="/contact"
            onClick={scrolleToTop}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
