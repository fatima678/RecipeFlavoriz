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
import CategoryPage from './pages/CategoryPage.jsx'
import AboutUs from './pages/AboutUs.jsx';
import Blog from './pages/Blog.jsx';
import RecipeGenerator from './pages/RecipeGenerator.jsx';

import Recipes from './pages/Recipes.jsx';
function App() {
    return (
        <div className="min-h-screen bg-gray-100">
          <Navbar/>
          
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:category" element={<CategoryPage />} />
               
              
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/generate" element={<RecipeGenerator />} />
                <Route path="/aboutus" element={<AboutUs />}/>
                  <Route path="/blog" element={<Blog/>}/>
                <Route path="/contact" element={<h2 className="text-center text-2xl mt-8">Contact Page (To be implemented)</h2>} />
            </Routes>
            <div className="bg-gray-100 h-1 my-12 mx-auto max-w-7xl"></div>
            <Footer/>
         
        </div>
    );
}

export default App;