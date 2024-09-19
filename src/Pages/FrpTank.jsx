import React from 'react'; 
import coling_Tower from "../assets/images/cooling.jpg";
import HDPE_Tank from "../assets/images/HDPE_Tank.jpg";
import FRP_Tank from "../assets/images/FRP_Tank.jpg";

const products = [
  {
    id: 1,
    name: 'Cooling Tower',
    image: coling_Tower,
    description: 'High-efficiency cooling towers designed to optimize heat dissipation in industrial processes.',
  },
  {
    id: 2,
    name: 'HDPE Tank',
    image: HDPE_Tank,
    description: 'Durable HDPE tanks used for chemical storage, available in multiple sizes.',
  },
  {
    id: 3,
    name: 'FRP Tank',
    image: FRP_Tank,
    description: 'Corrosion-resistant FRP tanks for industrial and chemical applications.',
  },
  {
    id: 4,
    name: 'Blower Wheel',
    image: '/assets/blower-wheel.jpg', 
    description: 'Precision-engineered blower wheels for optimal air circulation in HVAC systems.',
  },
];

const Products = () => {
  return (
    <div className="bg-gray-100 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-8">Our Products</h1>
        <p className="text-center text-gray-600 mb-12">
          Discover our wide range of industrial products, designed to meet your specific needs with top-notch quality.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold mb-4">{product.price}</p>
              <a
                href={`/product/${product.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;    