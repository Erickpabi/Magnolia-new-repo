import Slider from "react-slick";

function CustomSlider() {
  var settings = {
    dots: true,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
      </Slider>
    </>
  );
}
export default CustomSlider;
