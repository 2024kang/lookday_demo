import PropTypes from 'prop-types'; // 引入 PropTypes
import './TitleBar.css'; // 引入 CSS 檔案

function TitleBar({ title }) {
  return (
    <div className="title-bar">
      <h1>{title}</h1>
      <button>Btn1</button>
      <button>Btn2</button>
      <button>Btn3</button>
      <button>Btn4</button>
      <button>Btn7</button>
    </div>
  );
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired // 驗證 title 屬性為必要的字符串類型
};

export default TitleBar;
