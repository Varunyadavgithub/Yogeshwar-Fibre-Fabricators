import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Tanks and Vessels",
      subSections: [
        { id: 1, title: "FRP Tanks", image: "/path-to-image1.jpg" },
        { id: 2, title: "HDPE Tanks", image: "/path-to-image2.jpg" },
        {
          id: 3,
          title: "Spiral HDPE Storage Tanks",
          image: "/path-to-image3.jpg",
        },
        { id: 4, title: "Chemical Vessels", image: "/path-to-image3.jpg" },
        { id: 5, title: "HDPE Spiral Tank", image: "/path-to-image3.jpg" },
        { id: 6, title: "FRP Vessel", image: "/path-to-image3.jpg" },
        { id: 7, title: "PP Frp Ducting", image: "/path-to-image3.jpg" },
      ],
    },
    {
      id: 2,
      name: "Cooling and Ventilation",
      subSections: [
        { id: 1, title: "Cooling Tower", image: "/path-to-image4.jpg" },
        { id: 2, title: "Industrial Blowers", image: "/path-to-image5.jpg" },
        { id: 3, title: "Blower Wheels", image: "/path-to-image6.jpg" },
        { id: 4, title: "FRP Chimneys", image: "/path-to-image6.jpg" },
        {
          id: 5,
          title: "Electric Kitchen Chimney",
          image: "/path-to-image6.jpg",
        },
        { id: 6, title: "Mild Steel BLower", image: "/path-to-image6.jpg" },
      ],
    },
    {
      id: 3,
      name: "Structural Compoments",
      subSections: [
        { id: 1, title: "Roofing Sheets", image: "/path-to-image4.jpg" },
        { id: 2, title: "FRP Canopies", image: "/path-to-image5.jpg" },
        { id: 3, title: "White Frp Enclosures ", image: "/path-to-image6.jpg" },
        {
          id: 4,
          title: "FRP Transmittrt Canopy",
          image: "/path-to-image6.jpg",
        },
        { id: 5, title: "FRP Chequered Plate", image: "/path-to-image6.jpg" },
      ],
    },
    {
      id: 4,
      name: "Lighting and Electrical",
      subSections: [
        { id: 1, title: "LED Flood Lights", image: "/path-to-image4.jpg" },
      ],
    },
    {
      id: 5,
      name: "Safety and Pollution Control",
      subSections: [
        {
          id: 1,
          title: "Pollution Control Equipment",
          image: "/path-to-image4.jpg",
        },
        { id: 2, title: "Wet Scrubbers", image: "/path-to-image5.jpg" },
        { id: 3, title: "Moulded Grating", image: "/path-to-image6.jpg" },
        { id: 4, title: "Scrubber", image: "/path-to-image6.jpg" },
        { id: 5, title: "MS Blower", image: "/path-to-image6.jpg" },
      ],
    },
    {
      id: 6,
      name: "Materials and Components",
      subSections: [
        {
          id: 1,
          title: "FRP Pipes and Fittings",
          image: "/path-to-image4.jpg",
        },
        { id: 2, title: "Polypropylene Pumps", image: "/path-to-image5.jpg" },
        { id: 3, title: "FRP Pipe", image: "/path-to-image6.jpg" },
        { id: 4, title: "Venturi Injector", image: "/path-to-image6.jpg" },
        { id: 5, title: "Rubber Products", image: "/path-to-image6.jpg" },
      ],
    },
    {
      id: 7,
      name: "Miscellaneous",
      subSections: [
        { id: 1, title: "Industrial Equipment", image: "/path-to-image4.jpg" },
        { id: 2, title: "Industrial Vessels", image: "/path-to-image5.jpg" },
        { id: 3, title: "FRP Products", image: "/path-to-image6.jpg" },
        {
          id: 4,
          title: "FRP Tank and Srubber System",
          image: "/path-to-image6.jpg",
        },
        { id: 5, title: "PVC Outdoor Canopy", image: "/path-to-image6.jpg" },
      ],
    },
    {
      id: 8,
      name: "New Products",
      subSections: [
        { id: 1, title: "Our New Products", image: "/path-to-image4.jpg" },
      ],
    },
  ];

  const handleViewProducts = (categoryId, subSectionId) => {
    navigate(`/category/${categoryId}/subsection/${subSectionId}`);
  };

  return (
    <div className="bg-white min-h-screen">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center justify-center bg-gray-200 m-4 rounded-lg"
        >
          <h1 className="text-2xl text-center font-bold p-2">
            {category.name}
          </h1>
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {category.subSections.map((subSection) => (
              <div
                key={subSection.id}
                className="flex flex-col items-center justify-between h-96 w-80 rounded-md bg-white shadow-lg my-4"
              >
                <img
                  src={subSection.image}
                  alt={subSection.title}
                  className="w-full h-40 object-cover"
                />
                <div className="flex flex-col items-center my-4 gap-4">
                  <h1 className="text-xl font-semibold">{subSection.title}</h1>
                  <button
                    className="text-white bg-blue-700 rounded-lg p-2 m-2"
                    onClick={() =>
                      handleViewProducts(category.id, subSection.id)
                    }
                  >
                    View Products
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
