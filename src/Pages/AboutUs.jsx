import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-center mb-6">About Yogeshwar Fibre Fabricators</h1>
          <p className="text-center text-gray-600 mb-12">
            Since 1996, Yogeshwar Fibre Fabricators has been a leading manufacturer and supplier of industrial products
            including Cooling Towers, HDPE Tanks, FRP Tanks, and Blower Wheels. We are committed to delivering top-quality
            products to our clients across diverse industries.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide innovative and sustainable industrial solutions that cater to the needs of our customers while maintaining
                a commitment to excellence and quality.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be recognized as a global leader in industrial fabrication, known for our commitment to quality, innovation, and
                customer satisfaction.
              </p>
            </div>
            {/* Values */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <p className="text-gray-600">
                We prioritize customer satisfaction, integrity, and innovation in everything we do. Our core values drive us to exceed
                expectations and continuously improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Our History</h2>
          <p className="text-gray-600 mb-6 text-center">
            Yogeshwar Fibre Fabricators was founded in 1996 with a vision to create high-quality industrial products that meet the demands of
            a growing industry. Over the years, we have expanded our offerings and grown into a trusted name known for our expertise and innovation.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="/path-to-leadership-image-1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Mr. Yogesh Patel</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="/path-to-leadership-image-2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Ms. Sneha Desai</h3>
              <p className="text-gray-600">Chief Operations Officer</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="/path-to-leadership-image-3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Mr. Kunal Shah</h3>
              <p className="text-gray-600">Chief Technical Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Join Our Journey</h2>
          <p className="text-gray-600 mb-8">
            We are always looking to grow and expand. If you are interested in collaborating or learning more about our products and services,
            feel free to reach out to us.
          </p>
          <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
