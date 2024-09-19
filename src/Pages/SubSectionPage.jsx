import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SubSectionPage = () => {
  const { categoryId, subSectionId } = useParams();
  const navigate = useNavigate();

  // Array of products (This can be fetched from API later)
  const products = [
    {
      id: 1,
      title: "Product 1",
      image: "/path-to-product1.jpg",
      description: "Description of Product 1",
      price: "$100",
    },
    {
      id: 2,
      title: "Product 2",
      image: "/path-to-product2.jpg",
      description: "Description of Product 2",
      price: "$200",
    },
    {
      id: 3,
      title: "Product 3",
      image: "/path-to-product3.jpg",
      description: "Description of Product 3",
      price: "$300",
    },
  ];

  const handleViewDetails = (productId) => {
    // Navigate to the product details page
    navigate(`/category/${categoryId}/subsection/${subSectionId}/product/${productId}`);
  };

  return (
    <div className="bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-center my-4">
        Products in Subsection {subSectionId}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
            <button
              className="bg-blue-700 text-white rounded-lg p-2 mt-4"
              onClick={() => handleViewDetails(product.id)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubSectionPage;
