// // // 

// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // // Ensure these paths are correct
// // import omleteSandwichImage from '../assets/omletesandwich.jpg';
// // import nihariImage from '../assets/mutton.jpg';
// // import russianSaladImage from '../assets/russainsalad.jpg';
// // import shakesImage from '../assets/chocolateshake.jpg';
// // import chickenBiryaniImage from '../assets/biryanii.jpg';

// // const PopularRecipes = () => {
// //     const recipes = [
// //         // Note: I adjusted the names for better visual testing of the alignment
// //         { name: 'Russain Salad', path: '/salad', image: russianSaladImage }, 
// //         { name: 'Mutton Nihari (Classic Pakistani Dish)', path: '/nihari', image: nihariImage }, // Long title test
// //         { name: 'Omlete Sandwich', path: '/kimchi', image: omleteSandwichImage }, 
// //         { name: 'Chicken Biryani', path: '/mutton-nihari', image: chickenBiryaniImage }, 
// //         { name: 'Chocolate Shake', path: '/shakes', image: shakesImage },
// //     ];

// //     return (
// //         <section className="bg-gray-50 py-16 sm:py-24">
// //             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
// //                 {/* Headline */}
// //                 <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
// //                     Our Popular Recipes
// //                 </h2>
                
// //                 {/* Card Grid Layout */}
// //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
// //                     {recipes.map((recipe) => (
// //                         <div
// //                             key={recipe.name}
// //                             // ✅ FIX 1: Set a consistent card height using flex-col and h-full on the outer div
// //                             className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full"
// //                         >
// //                             {/* Card Image Area - Fixed height, same as before */}
// //                             <Link to={recipe.path} className="block relative h-56 w-full overflow-hidden flex-shrink-0">
// //                                 <img
// //                                     src={recipe.image}
// //                                     alt={recipe.name}
// //                                     className="w-full h-full object-cover transition duration-500 transform group-hover:scale-105"
// //                                     loading="lazy" 
// //                                 />
// //                                 {/* Optional: Image Overlay Tint */}
// //                                 <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition duration-500"></div>
// //                             </Link>

// //                             {/* Card Content & Text - This area handles button alignment */}
// //                             <div className="p-5 flex flex-col justify-between flex-grow">
                                
// //                                 {/* Recipe Title */}
// //                                 <div>
// //                                     {/* ✅ FIX 2: Set a fixed height for the title area to accommodate wrapping */}
// //                                     <h3 className="text-xl font-bold text-gray-800 mb-2 leading-snug h-16 sm:h-auto">
// //                                         {recipe.name}
// //                                     </h3>
// //                                 </div>
                                
// //                                 {/* Button - Aligned to the bottom using justify-end (implicit) */}
// //                                 <Link
// //                                     to={recipe.path}
// //                                     className="inline-block w-full text-center bg-gray-800 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-orange-600 transition duration-300 tracking-wider text-sm"
// //                                 >
// //                                     See Complete Recipe
// //                                 </Link>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default PopularRecipes;


// import React from 'react';
// import { Link } from 'react-router-dom';
// // Ensure these paths are correct
// import omleteSandwichImage from '../assets/omletesandwich.jpg';
// import nihariImage from '../assets/mutton.jpg';
// import russianSaladImage from '../assets/russainsalad.jpg';
// import shakesImage from '../assets/chocolateshake.jpg';
// import chickenBiryaniImage from '../assets/biryanii.jpg';

// // ✅ NEW IMAGE IMPORTS: You must create these files in your ../assets folder.
// import chickenKarahiImage from '../assets/chickenkarahi.jpg'; 
// import haleemImage from '../assets/halem.jpg'; 
// import roastImage from '../assets/roast.jpg'; 

// const PopularRecipes = () => {
//     const recipes = [
//         // Existing Recipes
//         { name: 'Russain Salad', path: '/salad', image: russianSaladImage }, 
//         { name: 'Mutton Nihari (Classic Pakistani Dish)', path: '/nihari', image: nihariImage }, 
//         { name: 'Omlete Sandwich', path: '/kimchi', image: omleteSandwichImage }, 
//         { name: 'Chicken Biryani', path: '/mutton-nihari', image: chickenBiryaniImage }, 
//         { name: 'Chocolate Shake', path: '/shakes', image: shakesImage },
        
//         // ✅ NEW RECIPES ADDED
//         { name: 'Chicken Karahi', path: '/chicken-karahi', image: chickenKarahiImage },
//         { name: 'Haleem', path: '/haleem', image: haleemImage },
//         { name: ' chicken Roast', path: '/roast', image: roastImage },
//     ];

//     return (
//         <section className="bg-gray-50 py-16 sm:py-24">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
//                 {/* Headline */}
//                 <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
//                     Our Popular Recipes
//                 </h2>
                
//                 {/* Card Grid Layout (Now supporting up to 8 cards) */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//                     {recipes.map((recipe) => (
//                         <div
//                             key={recipe.name}
//                             // Flex column layout ensures the button is bottom-aligned
//                             className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full"
//                         >
//                             {/* Card Image Area */}
//                             <Link to={recipe.path} className="block relative h-56 w-full overflow-hidden flex-shrink-0">
//                                 <img
//                                     src={recipe.image}
//                                     alt={recipe.name}
//                                     className="w-full h-full object-cover transition duration-500 transform group-hover:scale-105"
//                                     loading="lazy" 
//                                 />
//                                 {/* Optional: Image Overlay Tint */}
//                                 <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition duration-500"></div>
//                             </Link>

//                             {/* Card Content & Text */}
//                             <div className="p-5 flex flex-col justify-between flex-grow">
                                
//                                 {/* Recipe Title - Fixed height ensures button alignment */}
//                                 <div>
//                                     <h3 className="text-xl font-bold text-gray-800 mb-2 leading-snug h-16 sm:h-auto">
//                                         {recipe.name}
//                                     </h3>
//                                 </div>
                                
//                                 {/* Button - Pushed to the bottom */}
//                                 <Link
//                                     to={recipe.path}
//                                     className="inline-block w-full text-center bg-gray-800 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-orange-600 transition duration-300 tracking-wider text-sm"
//                                 >
//                                     See Complete Recipe
//                                 </Link>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PopularRecipes;


import React from 'react';
import { Link } from 'react-router-dom';
// Ensure these paths are correct
import omleteSandwichImage from '../assets/omletesandwich.jpg';
import nihariImage from '../assets/mutton.jpg';
import russianSaladImage from '../assets/russainsalad.jpg';
import shakesImage from '../assets/chocolateshake.jpg';
import chickenBiryaniImage from '../assets/biryanii.jpg';

// ✅ NEW IMAGE IMPORTS: You must create these files in your ../assets folder.
import chickenKarahiImage from '../assets/chickenkarahi.jpg'; 
import haleemImage from '../assets/halem.jpg'; 
import roastImage from '../assets/roast.jpg'; 

const PopularRecipes = () => {
    const recipes = [
        // Existing Recipes
        { name: 'Russain Salad', path: '/salad', image: russianSaladImage }, 
        { name: 'Mutton Nihari (Classic Pakistani Dish)', path: '/nihari', image: nihariImage }, 
        { name: 'Omlete Sandwich', path: '/kimchi', image: omleteSandwichImage }, 
        { name: 'Chicken Biryani', path: '/mutton-nihari', image: chickenBiryaniImage }, 
        { name: 'Chocolate Shake', path: '/shakes', image: shakesImage },
        
        // ✅ NEW RECIPES ADDED
        { name: 'Chicken Karahi', path: '/chicken-karahi', image: chickenKarahiImage },
        { name: 'Haleem', path: '/haleem', image: haleemImage },
        { name: ' chicken Roast', path: '/roast', image: roastImage },
    ];

    return (
        <section className="bg-gray-50 py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Headline */}
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
                    Our Popular Recipes
                </h2>
                
                {/* Card Grid Layout (Now supporting up to 8 cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {recipes.map((recipe) => (
                        <div
                            key={recipe.name}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full"
                        >
                            {/* Card Image Area */}
                            <Link to={recipe.path} className="block relative h-56 w-full overflow-hidden flex-shrink-0">
                                <img
                                    src={recipe.image}
                                    alt={recipe.name}
                                    className="w-full h-full object-cover transition duration-500 transform group-hover:scale-105"
                                    // ✅ loading="lazy" REMOVED
                                />
                                {/* Optional: Image Overlay Tint */}
                                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition duration-500"></div>
                            </Link>

                            {/* Card Content & Text */}
                            <div className="p-5 flex flex-col justify-between flex-grow">
                                
                                {/* Recipe Title - Fixed height ensures button alignment */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 leading-snug h-16 sm:h-auto">
                                        {recipe.name}
                                    </h3>
                                </div>
                                
                                {/* Button - Pushed to the bottom */}
                                <Link
                                    to={recipe.path}
                                    className="inline-block w-full text-center bg-gray-800 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-orange-600 transition duration-300 tracking-wider text-sm"
                                >
                                    See Complete Recipe
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularRecipes;