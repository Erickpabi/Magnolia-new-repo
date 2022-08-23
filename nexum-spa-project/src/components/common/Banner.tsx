import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import envConstants from "@/constants/env_constants";
import deliveryEndpointService from "@/services/delivery_endpoint_service";

const Banner: React.FC = () => {
  const slider = useRef(null);
  const settings = {
    dots: true,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const [pressData, setPressData] = useState<any[]>([]);

  useEffect(() => {
    fetchNews();
    localStorage.setItem("news", JSON.stringify(pressData));
  }, []);

  const fetchNews = async () => {
    const data = await deliveryEndpointService.fetchBanner();
    setPressData(data);
  };
  return (
    <div className="">
      <Slider ref={slider} {...settings}>
        {pressData &&
          pressData.map((press: any) =>
            press.Caption ? (
              <div className="relative" key={press["@id"] + "div"}>
                <img
                  height=""
                  style={{ objectFit: "cover" }}
                  className="w-full h-96"
                  src={envConstants.mgnlHost + press.imageLink["@link"]}
                  key={press["@id"] + "_img"}
                />
                <div
                  className="absolute bottom-0 left-0  w-full bg-cyan-800 opacity-90"
                  key={press["@id"] + "_dif"}
                >
                  <p
                    className="headline text-4xl text-white text-center mt-1"
                    key={press["@id"]}
                  >
                    {press.Caption}
                  </p>
                </div>
              </div>
            ) : (
              ""
            )
          )}
      </Slider>
    </div>
  );
};

export default Banner;
