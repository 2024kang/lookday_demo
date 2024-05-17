import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MyCarousel.css";

// 引入本地圖片
import ad1 from "../images/adHome/ad1.jpg";
import ad2 from "../images/adHome/ad2.jpg";
import ad3 from "../images/adHome/ad3.jpg";
import ad4 from "../images/adHome/ad4.jpg";
import ad5 from "../images/adHome/ad5.jpg";
import ad6 from "../images/adHome/ad6.jpg";
import ad7 from "../images/adHome/ad7.jpg";
import ad8 from "../images/adHome/ad8.jpg";
import ad9 from "../images/adHome/ad9.jpg";
import ad10 from "../images/adHome/ad10.jpg";

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="carousel-with-search">
        <Slider {...settings}>
          <div className="carousel-slide">
            <img src={ad1} alt="Ad 1" />
          </div>
          <div className="carousel-slide">
            <img src={ad2} alt="Ad 2" />
          </div>
          <div className="carousel-slide">
            <img src={ad3} alt="Ad 3" />
          </div>
          <div className="carousel-slide">
            <img src={ad4} alt="Ad 4" />
          </div>
          <div className="carousel-slide">
            <img src={ad5} alt="Ad 5" />
          </div>
          <div className="carousel-slide">
            <img src={ad6} alt="Ad 6" />
          </div>
          <div className="carousel-slide">
            <img src={ad7} alt="Ad 7" />
          </div>
          <div className="carousel-slide">
            <img src={ad8} alt="Ad 8" />
          </div>
          <div className="carousel-slide">
            <img src={ad9} alt="Ad 9" />
          </div>
          <div className="carousel-slide">
            <img src={ad10} alt="Ad 10" />
          </div>
        </Slider>
      </div>
  );
};

const SampleNextArrow = ({ className, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-next`}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = ({ className, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-prev`}
      onClick={onClick}
    />
  );
};

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default MyCarousel;
