import { useState } from 'react';
import './Carousel.css';
import ad01 from '../images/adHome/ad01.jpg';
import ad02 from '../images/adHome/ad02.png';
// 導入所有圖片

const Carousel = () => {
  const images = [ad01, ad02]; // 將所有圖片放入一個陣列中
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Prev</button>
      <img src={images[currentIndex]} alt="Slide" className="slide" />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
