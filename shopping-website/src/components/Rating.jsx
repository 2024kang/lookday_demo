import { useState } from 'react';
import PropTypes from 'prop-types';
import './Rating.css';
import strBlack from '../images/strBlack.png'; // 引入未亮起的星星圖片
import strYellow from '../images/strYellow.png'; // 引入亮起的星星圖片

const Rating = ({ initialRating = 0, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleMouseEnter = (value) => {
    setRating(value);
  };

  const handleMouseLeave = () => {
    // 當滑鼠離開星星時，不改變評分
  };

  const handleClick = (value) => {
    setRating(value);
    onChange && onChange(value);
  };

  const handleReset = () => {
    setRating(0);
    onChange && onChange(0);
  };

  return (
    <div className="rating-container" onDoubleClick={handleReset}>
      <div className="rating">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={starValue}
              className="star"
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(starValue)}
            >
              <img
                src={starValue <= rating ? strYellow : strBlack}
                alt={`Star ${starValue}`}
              />
            </span>
          );
        })}
      </div>
      <div className="reset-message-container">
        <p className="reset-message">雙擊重置星星</p>
      </div>
    </div>
  );
};

Rating.propTypes = {
  initialRating: PropTypes.number,
  onChange: PropTypes.func,
};

export default Rating;
