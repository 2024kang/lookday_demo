import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import About from './pages/About';
import RootLayout from './pages/RootLayout';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';

function App() {
  return (

    <div className="app-container"><Routes>
      <Route element={<RootLayout />}>




        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/des" element={<Destinations />} />
    </Routes>


    </div>

  );
}

export default App;
