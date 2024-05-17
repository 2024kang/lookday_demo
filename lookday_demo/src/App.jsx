import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TitleBar from './components/TitleBar';
import MyCarousel from './components/MyCarousel';
import FilterBar from './components/FilterBar';
import ProductRanking from './components/ProductRanking';
import VideoCarousel from './components/VideoCarousel';

function App() {
  return (
    <Router>
      <div className="app-container">
        <TitleBar />
        
        <MyCarousel />
        <VideoCarousel />
        <FilterBar />
        <ProductRanking />
        <Home />
         <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
