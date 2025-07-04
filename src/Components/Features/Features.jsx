import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "library stool",
      status: "New",
      price: "$250",
      image: "/src/assets/features/product_1.png",
      currentPrice: "$200",
    },
    {
      id: 2,
      title: "library stool Chair",
      status: "Sales",
      price: "RS.250",
      image: "/src/assets/features/product_2.png",
    },
    {
      id: 3,
      title: "library stool Chair",
      price: "Rs.250",
      image: "/src/assets/features/product_3.png",
    },
    {
      id: 4,
      title: "library stool Chair",
      status: "New",
      price: "RS.250",
      image: "/src/assets/features/product_4.png",
      currentPrice: "Rs.200",
    },
    {
      id: 5,
      title: "library stool",
      status: "New",
      price: "Rs.250",
      image: "/src/assets/features/product_1.png",
      currentPrice: "Rs.200",
    },
    {
      title: "library stool Chair",
      status: "Sales",
      price: "Rs.250",
      image: "/src/assets/features/product_2.png",
    },
    {
      title: "library stool Chair",
      price: "Rs.250",
      image: "/src/assets/features/product_3.png",
    },
    {
      title: "library stool Chair",
      status: "New",
      price: "Rs.250",
      image: "/src/assets/features/product_4.png",
      currentPrice: "Rs.200",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <div className="lg:container mx-auto ">
        <SectionTitle title="Featured Products" mb="mb-11"></SectionTitle>

        <div className="slider-container features_slider w-full h-full">
          <Slider {...settings}>
            {features?.map((feature, index) => (
              <div key={index} className="p-4">
                <div className="feature_image mb-4 relative">
                  <img
                    className="w-full h-full object-cover"
                    src={feature?.image}
                    alt={feature?.title}
                  />
                  {feature?.status && (
                    <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                      <button className="text-sm font-inter font-normal">
                        {feature?.status}
                      </button>
                    </div>
                  )}
                </div>
                <div className="feature_content">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">
                      {feature?.title}
                    </h4>
                    <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center active:scale-95 transition transform duration-150">
                      <ShoppingCart size="1.5rem" color="#fff" />
                    </span>
                  </div>
                  <p className="text-xl flex items-center gap-2 text-[#706f75] font-semibold font-inter ">
                    {feature.currentPrice ? (
                      <span className="line-through">{feature?.price}</span>
                    ) : (
                      <span>{feature?.price}</span>
                    )}

                    {feature?.currentPrice && (
                      <span className="text-sm text-[#dde0ef] font-inter font-normal">
                        {feature?.currentPrice}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Features;
