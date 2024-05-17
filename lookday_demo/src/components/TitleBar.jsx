import { Link } from 'react-router-dom'; // 導入 Link 組件
import './TitleBar.css';
import logo from '../images/lookdayLogo.png'; // 確保你有一個 logo.png 文件在對應的路徑
import SearchBar from './SearchBar';

const TitleBar = () => {
  return (
    <div className="titlebar">
      <div className="titlebar-left">
        <img src={logo} alt="Logo" className="logo" />
        <Link to="/" className="company-name">&ensp;LOOKDAY&emsp;&emsp;&emsp;</Link> {/* 使用 Link 包裹並設置 to="/" 以返回首頁 */}
        <SearchBar />
      </div>
      <div className="titlebar-right">
        <button className="titlebar-button">客服中心</button>
        <button className="titlebar-button">購物車</button>
        <button className="titlebar-button">收藏</button>
        <button className="titlebar-button">註冊</button>
        <button className="titlebar-button">登入</button>
      </div>
    </div>
  );
};

export default TitleBar;
