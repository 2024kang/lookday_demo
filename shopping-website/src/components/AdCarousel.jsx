import { useState, useEffect } from 'react';
import './AdCarousel.css';

import ad1 from '../images/ad1.jpg';
import ad2 from '../images/ad2.jpg';
import ad3 from '../images/ad3.jpg';
import ad4 from '../images/ad4.jpg';
import ad5 from '../images/ad5.jpg';

const AdCarousel = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const ads = [ad1, ad2, ad3, ad4, ad5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) =>
        prevIndex === ads.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
  
    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="ad-carousel-container">
      <div className="ad-carousel">
        <img src={ads[currentAdIndex]} alt={`Ad ${currentAdIndex + 1}`} />
      </div>
    </div>
  );
};

export default AdCarousel;
