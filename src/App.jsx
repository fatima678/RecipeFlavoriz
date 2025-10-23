// import React from 'react';
// import Home from './pages/Home.jsx';

// function App() {
//   return (
//     <div>
//       <Home/>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


import Footer from './components/Footer';
import Home from './pages/Home';
import DessertPage from './pages/DessertPage.jsx';
import LunchPage from './pages/LunchPage';
import ShakesPage from './pages/ShakesPages';
import BreakfastPage from './pages/BreakfastPage';
import DinnerPage from './pages/DinnerPAge';

import SoupsPage from './pages/SoupPage';
import JuicesPage from './pages/JuicesPage';
import SaladPage from './pages/SaladsPage';

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
          <Navbar/>
          
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dessert" element={<DessertPage />} />
                <Route path="/lunch" element={<LunchPage />} />
                <Route path="/shakes" element={<ShakesPage />} />
                <Route path="/breakfast" element={<BreakfastPage />} />
                <Route path="/dinner" element={<DinnerPage />} />
                <Route path="/soups" element={<SoupsPage />} />
                <Route path="/juices" element={<JuicesPage />} />
                <Route path="/salad" element={<SaladPage />} />
              
                <Route path="/blog" element={<h2 className="text-center text-2xl mt-8">Blog Page (To be implemented)</h2>} />
                <Route path="/contact" element={<h2 className="text-center text-2xl mt-8">Contact Page (To be implemented)</h2>} />
            </Routes>
            <Footer/>
         
        </div>
    );
}

export default App;