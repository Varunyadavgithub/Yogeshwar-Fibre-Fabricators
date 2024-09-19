import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { productId } = useParams();

  // This product information would typically come from an API or global state
  const product = {
    id: productId,
    title: "Product 1",
    image: "/path-to-product1.jpg",
    description: "This is a detailed description of the product.",
    price: "$100",
    manufacturer: "XYZ Company",
    stock: "In Stock",
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-white min-h-screen p-4">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* Right Side: Product Information */}
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <table className="table-auto w-full">
          <tbody>
            <tr>
              <td className="border px-4 py-2 font-semibold">Price</td>
              <td className="border px-4 py-2">{product.price}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Description</td>
              <td className="border px-4 py-2">{product.description}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Manufacturer</td>
              <td className="border px-4 py-2">{product.manufacturer}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Stock Status</td>
              <td className="border px-4 py-2">{product.stock}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
