import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import product_slide_01 from "../assets/images/product_slide_01.jpg";
import product_slide_02 from "../assets/images/product_slide_02.jpg";
import product_slide_03 from "../assets/images/product_slide_03.jpg";
import { useNavigate } from "react-router-dom";

const ProductSlider = () => {
  const navigate = useNavigate();

  const ProductSlide = [
    {
      id: "01",
      img: product_slide_01,
      title: "Cooling Tower",
      desc: "High-efficiency cooling towers for industrial use.",
    },
    {
      id: "02",
      img: product_slide_02,
      title: "HDPE Tank",
      desc: " Durable and corrosion-resistant HDPE tanks.",
    },
    {
      id: "03",
      img: product_slide_03,
      title: "FRP Tank",
      desc: "Reliable FRP tanks for industrial and commercial applications.",
    },
  ];
  const settings = {
    className: "mx-12 p-4",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          className: "mx-6 p-2",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          className: "mx-4 p-0",
        },
      },
    ],
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          {ProductSlide &&
            ProductSlide.map((product) => {
              return (
                <div
                  key={product.id}
                  onClick={() => {
                    navigate("/products");
                    scrollToTop();
                  }}
                  className="px-4"
                >
                  <div className="h-96 bg-white rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <img
                      src={product.img}
                      alt="Cooling Tower"
                      className="h-44 w-full object-cover rounded-md mb-4"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600">{product.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default ProductSlider;
