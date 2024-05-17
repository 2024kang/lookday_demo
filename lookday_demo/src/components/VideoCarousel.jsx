import PropTypes from "prop-types";
import "./VideoCarousel.css";

// 引入本地影片
import video1 from "../videos/adHome/video1.mp4";
import video2 from "../videos/adHome/video2.mp4";

const VideoCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <video className="carousel-video" autoPlay loop muted>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

VideoCarousel.propTypes = {
  className: PropTypes.string,
};

export default VideoCarousel;
