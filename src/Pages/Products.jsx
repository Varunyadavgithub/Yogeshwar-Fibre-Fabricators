import React from "react";
import { useNavigate } from "react-router-dom";
import FRP_Tank from  "../assets/images/FRP_Tank.jpg";
import HDPE_Tank from  "../assets/images/HDPE_Tank.jpg";
import Spiral_HDPE_Storage_Tanks from "../assets/images/Spiral_HDPE_Storage_Tanks.jpg";
import Chemical_Vessels from "../assets/images/Chemical_Vessels.jpg";
import HDPE_Spiral_Tank from "../assets/images/HDPE_Spiral_Tank.jpg";
import FRP_Vessel from "../assets/images/FRP_Vessel.jpg";
import PP_Frp_Ducting from "../assets/images/PP_Frp_Ducting.jpg";
import Cooling_Tower from "../assets/images/Cooling_Tower.jpg";
import Industrial_Blowers from "../assets/images/Industrial_Blowers.jpg";
import Blower_Wheels from "../assets/images/Blower_Wheels.jpg";
import FRP_Chimneys from "../assets/images/FRP_Chimneys.jpg";
import Electric_Kitchen_Chimney from "../assets/images/Electric_Kitchen_Chimney.jpg";
import Mild_Steel_BLower from "../assets/images/Mild_Steel_BLower.jpg";
import Roofing_Sheets from "../assets/images/Roofing_Sheets.jpg";
import FRP_Canopies from "../assets/images/FRP_Canopies.jpg";
import White_Frp_Enclosures from "../assets/images/White_Frp_Enclosures.jpg";
import FRP_Transmittrt_Canopy from "../assets/images/FRP_Transmittrt_Canopy.jpg";
import FRP_Chequered_Plate from "../assets/images/FRP_Chequered_Plate.jpg";
import LED_Flood_Lights from "../assets/images/LED_Flood_Lights.jpg";
import Pollution_Control_Equipment from "../assets/images/Pollution_Control_Equipment.jpg";
import Yogeshwar_Fibre from "../assets/images/Yogeshwar_Fibre.jpg";
import Moulded_Grating from "../assets/images/Moulded_Grating.webp";
import Scrubber from "../assets/images/Scrubber.jpeg";
import MS_Blower from "../assets/images/MS_Blower.jpg";
import Our_New_Products from "../assets/images/Our_New_Products.webp";

const Products = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Tanks and Vessels",
      subSections: [
        { id: 1, title: "FRP Tanks", image: FRP_Tank },
        { id: 2, title: "HDPE Tanks", image: HDPE_Tank },
        {
          id: 3,
          title: "Spiral HDPE Storage Tanks",
          image: Spiral_HDPE_Storage_Tanks,
        },
        { id: 4, title: "Chemical Vessels", image: Chemical_Vessels },
        { id: 5, title: "HDPE Spiral Tank", image: HDPE_Spiral_Tank },
        { id: 6, title: "FRP Vessel", image: FRP_Vessel },
        { id: 7, title: "PP Frp Ducting", image: PP_Frp_Ducting },
      ],
    },
    {
      id: 2,
      name: "Cooling and Ventilation",
      subSections: [
        { id: 1, title: "Cooling Tower", image: Cooling_Tower },
        { id: 2, title: "Industrial Blowers", image: Industrial_Blowers },
        { id: 3, title: "Blower Wheels", image: Blower_Wheels },
        { id: 4, title: "FRP Chimneys", image: FRP_Chimneys },
        {
          id: 5,
          title: "Electric Kitchen Chimney",
          image: Electric_Kitchen_Chimney,
        },
        { id: 6, title: "Mild Steel BLower", image: Mild_Steel_BLower },
      ],
    },
    {
      id: 3,
      name: "Structural Compoments",
      subSections: [
        { id: 1, title: "Roofing Sheets", image: Roofing_Sheets },
        { id: 2, title: "FRP Canopies", image: FRP_Canopies },
        { id: 3, title: "White Frp Enclosures ", image: White_Frp_Enclosures },
        {
          id: 4,
          title: "FRP Transmittrt Canopy",
          image: FRP_Transmittrt_Canopy,
        },
        { id: 5, title: "FRP Chequered Plate", image: FRP_Chequered_Plate },
      ],
    },
    {
      id: 4,
      name: "Lighting and Electrical",
      subSections: [
        { id: 1, title: "LED Flood Lights", image: LED_Flood_Lights },
      ],
    },
    {
      id: 5,
      name: "Safety and Pollution Control",
      subSections: [
        {
          id: 1,
          title: "Pollution Control Equipment",
          image: Pollution_Control_Equipment,
        },
        { id: 2, title: "Wet Scrubbers", image: Yogeshwar_Fibre },
        { id: 3, title: "Moulded Grating", image: Moulded_Grating },
        { id: 4, title: "Scrubber", image: Scrubber },
        { id: 5, title: "MS Blower", image: MS_Blower },
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
        { id: 1, title: "Our New Products", image: Our_New_Products },
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
          className="flex flex-col items-center justify-center m-4"
        >
          <h1 className="text-2xl text-center font-bold p-2 m-6 bg-yellow-500 rounded-lg">
            {category.name}
          </h1>
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {category.subSections.map((subSection) => (
              <div
                key={subSection.id}
                className="flex flex-col items-center justify-between h-80 w-72 md:w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <img
                  src={subSection.image}
                  alt={subSection.title}
                  className="h-44 w-full object-cover rounded-md mb-4"
                />
                <div className="flex flex-col items-center gap-4">
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
