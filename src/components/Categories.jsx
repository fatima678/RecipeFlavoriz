// // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // import { Link } from 'react-router-dom';

// // // // // // // // // // // // const Categories = () => {
// // // // // // // // // // // //     const categories = [
// // // // // // // // // // // //         { name: 'Breakfast', path: '/breakfast' },
// // // // // // // // // // // //         { name: 'Lunch', path: '/lunch' },
// // // // // // // // // // // //         { name: 'Dinner', path: '/dinner' },
// // // // // // // // // // // //     ];

// // // // // // // // // // // //     return (
// // // // // // // // // // // //         <section className="bg-yellow-200 py-12">
// // // // // // // // // // // //             <div className="container mx-auto px-4">
// // // // // // // // // // // //                 <h2 className="text-3xl font-bold text-orange-800 text-center mb-8">Explore by Category</h2>
// // // // // // // // // // // //                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
// // // // // // // // // // // //                     {categories.map((category) => (
// // // // // // // // // // // //                         <Link
// // // // // // // // // // // //                             to={category.path}
// // // // // // // // // // // //                             key={category.name}
// // // // // // // // // // // //                             className="block bg-gray-100 p-6 rounded-lg text-center hover:bg-orange-600 hover:text-white transition duration-300"
// // // // // // // // // // // //                         >
// // // // // // // // // // // //                             <h3 className="text-xl font-semibold">{category.name}</h3>
// // // // // // // // // // // //                         </Link>
// // // // // // // // // // // //                     ))}
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //         </section>
// // // // // // // // // // // //     );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default Categories;


// // // // // // // // // // // import React from 'react';
// // // // // // // // // // // import { Link } from 'react-router-dom';

// // // // // // // // // // // const Categories = () => {
// // // // // // // // // // //     const categories = [
// // // // // // // // // // //         { name: 'Dessert', path: '/dessert' },
// // // // // // // // // // //         { name: 'Salad', path: '/salad' },
// // // // // // // // // // //         { name: 'Juices', path: '/juices' },
// // // // // // // // // // //         { name: 'Shakes', path: '/shakes' },
// // // // // // // // // // //         { name: 'Breakfast', path: '/breakfast' },
// // // // // // // // // // //         { name: 'Lunch', path: '/lunch' },
// // // // // // // // // // //         { name: 'Dinner', path: '/dinner' },
// // // // // // // // // // //         { name: 'Snacks', path: '/snacks' },
// // // // // // // // // // //         { name: 'Appetizers', path: '/appetizers' },
// // // // // // // // // // //     ];

// // // // // // // // // // //     return (
// // // // // // // // // // //         <section className="bg-yellow-200 py-12">
// // // // // // // // // // //             <div className="container mx-auto px-4">
// // // // // // // // // // //                 <h2 className="text-3xl font-bold text-orange-800 text-center mb-8">Explore by Category</h2>
// // // // // // // // // // //                 <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
// // // // // // // // // // //                     {categories.map((category) => (
// // // // // // // // // // //                         <Link
// // // // // // // // // // //                             to={category.path}
// // // // // // // // // // //                             key={category.name}
// // // // // // // // // // //                             className="block bg-gray-100 p-6 rounded-lg text-center hover:bg-orange-600 hover:text-white transition duration-300"
// // // // // // // // // // //                         >
// // // // // // // // // // //                             <h3 className="text-xl font-semibold">{category.name}</h3>
// // // // // // // // // // //                         </Link>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //         </section>
// // // // // // // // // // //     );
// // // // // // // // // // // };

// // // // // // // // // // // export default Categories;

// // // // // // // // // // import React from 'react';
// // // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // // import dessertImage from '../assets/dessertt.jpg';
// // // // // // // // // // import saladImage from '../assets/salads.jpg';
// // // // // // // // // // import juicesImage from '../assets/juices.jpg';
// // // // // // // // // // import shakesImage from '../assets/shakes.jpg';
// // // // // // // // // // import breakfastImage from '../assets/breakfastt.jpg';
// // // // // // // // // // import lunchImage from '../assets/lunchh.jpg';
// // // // // // // // // // import dinnerImage from '../assets/dinnerr.jpg';



// // // // // // // // // // const Categories = () => {
// // // // // // // // // //     const categories = [
// // // // // // // // // //         { name: 'Dessert', path: '/dessert', image: dessertImage },
// // // // // // // // // //         { name: 'Salad', path: '/salad', image: saladImage },
// // // // // // // // // //         { name: 'Juices', path: '/juices', image: juicesImage },
// // // // // // // // // //         { name: 'Shakes', path: '/shakes', image: shakesImage },
// // // // // // // // // //         { name: 'Breakfast', path: '/breakfast', image: breakfastImage },
// // // // // // // // // //         { name: 'Lunch', path: '/lunch', image: lunchImage },
// // // // // // // // // //         { name: 'Dinner', path: '/dinner', image: dinnerImage },
       
// // // // // // // // // //     ];

// // // // // // // // // //     return (
// // // // // // // // // //         <section className="bg-white py-12">
// // // // // // // // // //             <div className="container mx-auto px-4">
// // // // // // // // // //                 <h2 className="text-3xl font-bold text-orange-800 text-center mb-8">Explore by Category</h2>
// // // // // // // // // //                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
// // // // // // // // // //                     {categories.map((category) => (
// // // // // // // // // //                         <Link
// // // // // // // // // //                             to={category.path}
// // // // // // // // // //                             key={category.name}
// // // // // // // // // //                             className="block bg-white p-4 rounded-lg shadow-md hover:bg-orange-600 hover:text-white transition duration-300 overflow-hidden"
// // // // // // // // // //                         >
// // // // // // // // // //                             <img
// // // // // // // // // //                                 src={category.image}
// // // // // // // // // //                                 alt={`${category.name} Illustration`}
// // // // // // // // // //                                 className="w-full h-32 object-cover rounded-t-lg mb-2"
// // // // // // // // // //                             />
// // // // // // // // // //                             <h3 className="text-xl font-semibold text-center">{category.name}</h3>
// // // // // // // // // //                         </Link>
// // // // // // // // // //                     ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //             </div>
// // // // // // // // // //         </section>
// // // // // // // // // //     );
// // // // // // // // // // };

// // // // // // // // // // export default Categories;





// // // // // // // // // import React from 'react';
// // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // import dessertImage from '../assets/dessertt.jpg';
// // // // // // // // // import saladImage from '../assets/salads.jpg';
// // // // // // // // // import juicesImage from '../assets/juices.jpg';
// // // // // // // // // import shakesImage from '../assets/shakes.jpg';
// // // // // // // // // import breakfastImage from '../assets/breakfastt.jpg';
// // // // // // // // // import lunchImage from '../assets/lunchh.jpg';
// // // // // // // // // import dinnerImage from '../assets/dinnerr.jpg';

// // // // // // // // // const Categories = () => {
// // // // // // // // //     const categories = [
// // // // // // // // //         { name: 'Dessert', path: '/dessert', image: dessertImage },
// // // // // // // // //         { name: 'Salad', path: '/salad', image: saladImage },
// // // // // // // // //         { name: 'Juices', path: '/juices', image: juicesImage },
// // // // // // // // //         { name: 'Shakes', path: '/shakes', image: shakesImage },
// // // // // // // // //         { name: 'Breakfast', path: '/breakfast', image: breakfastImage },
// // // // // // // // //         { name: 'Lunch', path: '/lunch', image: lunchImage },
// // // // // // // // //         { name: 'Dinner', path: '/dinner', image: dinnerImage },
// // // // // // // // //     ];

// // // // // // // // //     return (
// // // // // // // // //         <section className="bg-white py-12">
// // // // // // // // //             <div className="container mx-auto px-4">
// // // // // // // // //                 <h2 className="text-3xl font-bold text-orange-800 text-center mb-8">Explore by Category</h2>
// // // // // // // // //                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
// // // // // // // // //                     {categories.map((category) => (
// // // // // // // // //                         <Link
// // // // // // // // //                             to={category.path}
// // // // // // // // //                             key={category.name}
// // // // // // // // //                             className="block text-center transition duration-300 group"
// // // // // // // // //                         >
// // // // // // // // //                             <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-full bg-white shadow-sm group-hover:bg-orange-100">
// // // // // // // // //                                 <img
// // // // // // // // //                                     src={category.image}
// // // // // // // // //                                     alt={`${category.name} Illustration`}
// // // // // // // // //                                     className="w-full h-full object-cover rounded-full group-hover:opacity-80 transition duration-300"
// // // // // // // // //                                 />
// // // // // // // // //                             </div>
// // // // // // // // //                             <h3 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-orange-600">{category.name}</h3>
// // // // // // // // //                         </Link>
// // // // // // // // //                     ))}
// // // // // // // // //                 </div>
// // // // // // // // //             </div>
// // // // // // // // //         </section>
// // // // // // // // //     );
// // // // // // // // // };

// // // // // // // // // export default Categories;

// // // // // // // // import React from 'react';
// // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // import dessertImage from '../assets/dessertt.jpg';
// // // // // // // // import saladImage from '../assets/salads.jpg';
// // // // // // // // import juicesImage from '../assets/juices.jpg';
// // // // // // // // import shakesImage from '../assets/shakes.jpg';
// // // // // // // // import breakfastImage from '../assets/breakfastt.jpg';
// // // // // // // // import lunchImage from '../assets/lunchh.jpg';
// // // // // // // // import dinnerImage from '../assets/dinnerr.jpg';
// // // // // // // // import soupsImage from '../assets/soup.jpg';    // New category image



// // // // // // // // const Categories = () => {
// // // // // // // //     const categories = [
// // // // // // // //         { name: 'Dessert', path: '/dessert', image: dessertImage },
// // // // // // // //         { name: 'Salad', path: '/salad', image: saladImage },
// // // // // // // //         { name: 'Juices', path: '/juices', image: juicesImage },
// // // // // // // //         { name: 'Shakes', path: '/shakes', image: shakesImage },
// // // // // // // //         { name: 'Breakfast', path: '/breakfast', image: breakfastImage },
// // // // // // // //         { name: 'Lunch', path: '/lunch', image: lunchImage },
// // // // // // // //         { name: 'Dinner', path: '/dinner', image: dinnerImage },
// // // // // // // //         { name: 'Soup', path: '/soup', image: soupsImage },         // New category
       
// // // // // // // //     ];

// // // // // // // //     return (
// // // // // // // //         <section className="bg-white py-12">
// // // // // // // //             <div className="container mx-auto px-4">
// // // // // // // //                 <h2 className="text-3xl font-bold text-orange-800 text-center mb-8">Explore by Category</h2>
// // // // // // // //                 <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-6">
// // // // // // // //                     {categories.slice(0, 4).map((category) => (
// // // // // // // //                         <Link
// // // // // // // //                             to={category.path}
// // // // // // // //                             key={category.name}
// // // // // // // //                             className="block text-center transition duration-300 group"
// // // // // // // //                         >
// // // // // // // //                             <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-full bg-white shadow-sm group-hover:bg-orange-100">
// // // // // // // //                                 <img
// // // // // // // //                                     src={category.image}
// // // // // // // //                                     alt={`${category.name} Illustration`}
// // // // // // // //                                     className="w-full h-full object-cover rounded-full group-hover:opacity-80 transition duration-300"
// // // // // // // //                                 />
// // // // // // // //                             </div>
// // // // // // // //                             <h3 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-orange-600">{category.name}</h3>
// // // // // // // //                         </Link>
// // // // // // // //                     ))}
// // // // // // // //                 </div>
// // // // // // // //                 <div className="grid grid-cols-1 sm:grid-cols-6 gap-6">
// // // // // // // //                     {categories.slice(4).map((category) => (
// // // // // // // //                         <Link
// // // // // // // //                             to={category.path}
// // // // // // // //                             key={category.name}
// // // // // // // //                             className="block text-center transition duration-300 group"
// // // // // // // //                         >
// // // // // // // //                             <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-full bg-white shadow-sm group-hover:bg-orange-100">
// // // // // // // //                                 <img
// // // // // // // //                                     src={category.image}
// // // // // // // //                                     alt={`${category.name} Illustration`}
// // // // // // // //                                     className="w-full h-full object-cover rounded-full group-hover:opacity-80 transition duration-300"
// // // // // // // //                                 />
// // // // // // // //                             </div>
// // // // // // // //                             <h3 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-orange-600">{category.name}</h3>
// // // // // // // //                         </Link>
// // // // // // // //                     ))}
// // // // // // // //                 </div>
// // // // // // // //             </div>
// // // // // // // //         </section>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default Categories;


// // // // // // // import React from 'react';
// // // // // // // import { Link } from 'react-router-dom';
// // // // // // // import dessertImage from '../assets/dessertt.jpg';
// // // // // // // import saladImage from '../assets/salads.jpg';
// // // // // // // import juicesImage from '../assets/juices.jpg';
// // // // // // // import shakesImage from '../assets/shakes.jpg';
// // // // // // // import breakfastImage from '../assets/breakfastt.jpg';
// // // // // // // import lunchImage from '../assets/lunchh.jpg';
// // // // // // // import dinnerImage from '../assets/dinnerr.jpg';
// // // // // // // import soupsImage from '../assets/soup.jpg';


// // // // // // // const Categories = () => {
// // // // // // //     const categories = [
// // // // // // //         { name: 'Dessert', path: '/dessert', image: dessertImage },
// // // // // // //         { name: 'Salad', path: '/salad', image: saladImage },
// // // // // // //         { name: 'Juices', path: '/juices', image: juicesImage },
// // // // // // //         { name: 'Shakes', path: '/shakes', image: shakesImage },
// // // // // // //         { name: 'Breakfast', path: '/breakfast', image: breakfastImage },
// // // // // // //         { name: 'Lunch', path: '/lunch', image: lunchImage },
// // // // // // //         { name: 'Dinner', path: '/dinner', image: dinnerImage },
// // // // // // //         { name: 'Soup', path: '/soup', image: soupsImage },
// // // // // // //     ];

// // // // // // //     return (
// // // // // // //         <section className="bg-white py-12">
// // // // // // //             <div className="container mx-auto px-4">
// // // // // // //                 <h2 className="text-3xl font-bold text-orange-800 text-center mb-8">Explore by Category</h2>
// // // // // // //                 <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-6">
// // // // // // //                     {categories.slice(0, 4).map((category) => (
// // // // // // //                         <Link
// // // // // // //                             to={category.path}
// // // // // // //                             key={category.name}
// // // // // // //                             className="block text-center transition duration-300 group"
// // // // // // //                         >
// // // // // // //                             <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-full bg-white shadow-sm group-hover:bg-orange-100">
// // // // // // //                                 <img
// // // // // // //                                     src={category.image}
// // // // // // //                                     alt={`${category.name} Illustration`}
// // // // // // //                                     className="w-full h-full object-cover rounded-full group-hover:opacity-80 transition duration-300"
// // // // // // //                                 />
// // // // // // //                             </div>
// // // // // // //                             <h3 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-orange-600">{category.name}</h3>
// // // // // // //                         </Link>
// // // // // // //                     ))}
// // // // // // //                 </div>
// // // // // // //                 <div className="grid grid-cols-1 sm:grid-cols-6 gap-6">
// // // // // // //                     {categories.slice(4).map((category) => (
// // // // // // //                         <Link
// // // // // // //                             to={category.path}
// // // // // // //                             key={category.name}
// // // // // // //                             className="block text-center transition duration-300 group"
// // // // // // //                         >
// // // // // // //                             <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-full bg-white shadow-sm group-hover:bg-orange-100">
// // // // // // //                                 <img
// // // // // // //                                     src={category.image}
// // // // // // //                                     alt={`${category.name} Illustration`}
// // // // // // //                                     className="w-full h-full object-cover rounded-full group-hover:opacity-80 transition duration-300"
// // // // // // //                                 />
// // // // // // //                             </div>
// // // // // // //                             <h3 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-orange-600">{category.name}</h3>
// // // // // // //                         </Link>
// // // // // // //                     ))}
// // // // // // //                 </div>
// // // // // // //             </div>
// // // // // // //         </section>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default Categories;

// // // // // // import React from 'react';
// // // // // // import { Link } from 'react-router-dom';
// // // // // // // Ensure all these image paths are correct
// // // // // // import dessertImage from '../assets/dessertt.jpg';
// // // // // // import saladImage from '../assets/salads.jpg';
// // // // // // import juicesImage from '../assets/juices.jpg';
// // // // // // import shakesImage from '../assets/shakes.jpg';
// // // // // // import breakfastImage from '../assets/breakfastt.jpg';
// // // // // // import lunchImage from '../assets/lunchh.jpg';
// // // // // // import dinnerImage from '../assets/dinnerr.jpg';
// // // // // // import soupsImage from '../assets/soup.jpg';

// // // // // // const Categories = () => {
// // // // // //     const categories = [
// // // // // //         { name: 'Dessert', path: '/dessert', image: dessertImage },
// // // // // //         { name: 'Salad', path: '/salad', image: saladImage },
// // // // // //         { name: 'Juices', path: '/juices', image: juicesImage },
// // // // // //         { name: 'Shakes', path: '/shakes', image: shakesImage },
// // // // // //         { name: 'Breakfast', path: '/breakfast', image: breakfastImage },
// // // // // //         { name: 'Lunch', path: '/lunch', image: lunchImage },
// // // // // //         { name: 'Dinner', path: '/dinner', image: dinnerImage },
// // // // // //         { name: 'Soup', path: '/soup', image: soupsImage },
// // // // // //     ];

// // // // // //     return (
// // // // // //         // Added padding for visual separation from the main hero section
// // // // // //         <section className="bg-white py-16 sm:py-24">
// // // // // //             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
// // // // // //                 {/* Unified Headline Styling */}
// // // // // //                 <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
// // // // // //                     Explore Flavor Categories
// // // // // //                 </h2>

// // // // // //                 {/* Unified Grid Layout (4 columns on medium screens, 8 items total) */}
// // // // // //                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">
// // // // // //                     {categories.map((category) => (
// // // // // //                         <Link
// // // // // //                             to={category.path}
// // // // // //                             key={category.name}
// // // // // //                             className="block text-center transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-orange-200 rounded-full"
// // // // // //                         >
// // // // // //                             {/* Category Image Wrapper: Fixed size, perfect circle, strong shadow, and hover animation */}
// // // // // //                             <div className="w-full aspect-square max-w-[200px] mx-auto overflow-hidden rounded-full shadow-xl group-hover:shadow-2xl transition-shadow duration-300 transform group-hover:scale-[1.03] group-hover:ring-4 group-hover:ring-orange-500/50">
// // // // // //                                 <img
// // // // // //                                     src={category.image}
// // // // // //                                     alt={`${category.name} Illustration`}
// // // // // //                                     // Ensure image covers the circle cleanly
// // // // // //                                     className="w-full h-full object-cover transition duration-300 group-hover:opacity-90"
// // // // // //                                 />
// // // // // //                             </div>
                            
// // // // // //                             {/* Category Title */}
// // // // // //                             <h3 className="text-xl font-bold text-gray-800 mt-5 tracking-wide transition-colors duration-300 group-hover:text-orange-600">
// // // // // //                                 {category.name}
// // // // // //                             </h3>
// // // // // //                         </Link>
// // // // // //                     ))}
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //         </section>
// // // // // //     );
// // // // // // };

// // // // // // export default Categories;

// // // // // import React from 'react';
// // // // // import { Link } from 'react-router-dom';
// // // // // // Ensure all these image paths are correct
// // // // // import dessertImage from '../assets/dessertt.jpg';
// // // // // import saladImage from '../assets/salads.jpg';
// // // // // import juicesImage from '../assets/juices.jpg';
// // // // // import shakesImage from '../assets/shakes.jpg';
// // // // // import breakfastImage from '../assets/breakfastt.jpg';
// // // // // import lunchImage from '../assets/lunchh.jpg';
// // // // // import dinnerImage from '../assets/dinnerr.jpg';
// // // // // import soupsImage from '../assets/soup.jpg';

// // // // // const Categories = () => {
// // // // //     const categories = [
// // // // //         { name: 'Dessert', path: '/dessert', image: dessertImage },
// // // // //         { name: 'Salad', path: '/salad', image: saladImage },
// // // // //         { name: 'Juices', path: '/juices', image: juicesImage },
// // // // //         { name: 'Shakes', path: '/shakes', image: shakesImage },
// // // // //         { name: 'Breakfast', path: '/breakfast', image: breakfastImage },
// // // // //         { name: 'Lunch', path: '/lunch', image: lunchImage },
// // // // //         { name: 'Dinner', path: '/dinner', image: dinnerImage },
// // // // //         { name: 'Soup', path: '/soup', image: soupsImage },
// // // // //     ];

// // // // //     return (
// // // // //         <section className="bg-white py-16 sm:py-24">
// // // // //             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
// // // // //                 <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
// // // // //                     Explore Flavor Categories
// // // // //                 </h2>

// // // // //                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">
// // // // //                     {categories.map((category) => (
// // // // //                         <Link
// // // // //                             to={category.path}
// // // // //                             key={category.name}
// // // // //                             // Removed group-hover:scale, focus-ring kept for accessibility
// // // // //                             className="block text-center transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-orange-200 rounded-full"
// // // // //                         >
// // // // //                             {/* Category Image Wrapper: All hover effects removed */}
// // // // //                             <div className="w-full aspect-square max-w-[200px] mx-auto overflow-hidden rounded-full shadow-xl">
// // // // //                                 <img
// // // // //                                     src={category.image}
// // // // //                                     alt={`${category.name} Illustration`}
// // // // //                                     // Removed group-hover:opacity and any transitions
// // // // //                                     className="w-full h-full object-cover rounded-full"
// // // // //                                 />
// // // // //                             </div>
                            
// // // // //                             {/* Category Title: Hover effect for text remains */}
// // // // //                             <h3 className="text-xl font-bold text-gray-800 mt-5 tracking-wide transition-colors duration-300 group-hover:text-orange-600">
// // // // //                                 {category.name}
// // // // //                             </h3>
// // // // //                         </Link>
// // // // //                     ))}
// // // // //                 </div>
// // // // //             </div>
// // // // //         </section>
// // // // //     );
// // // // // };

// // // // // export default Categories;


// // // // import React from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // // Ensure all these image paths are correct
// // // // import dessertImage from '../assets/dessertt.jpg';
// // // // import saladImage from '../assets/salads.jpg';
// // // // import juicesImage from '../assets/juices.jpg';
// // // // import shakesImage from '../assets/shakes.jpg';
// // // // import breakfastImage from '../assets/breakfastt.jpg';
// // // // import lunchImage from '../assets/lunchh.jpg';
// // // // import dinnerImage from '../assets/dinnerr.jpg';
// // // // import soupsImage from '../assets/soup.jpg';

// // // // const Categories = () => {
// // // //     const categories = [
// // // //         { name: 'Dessert', path: '/dessert', image: dessertImage },
// // // //         { name: 'Salad', path: '/salad', image: saladImage },
// // // //         { name: 'Juices', path: '/juices', image: juicesImage },
// // // //         { name: 'Shakes', path: '/shakes', image: shakesImage },
// // // //         { name: 'Breakfast', path: '/breakfast', image: breakfastImage },
// // // //         { name: 'Lunch', path: '/lunch', image: lunchImage },
// // // //         { name: 'Dinner', path: '/dinner', image: dinnerImage },
// // // //         { name: 'Soup', path: '/soup', image: soupsImage },
// // // //     ];

// // // //     return (
// // // //         <section className="bg-white py-16 sm:py-24">
// // // //             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
// // // //                 <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
// // // //                     Explore Flavor Categories
// // // //                 </h2>

// // // //                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">
// // // //                     {categories.map((category) => (
// // // //                         <Link
// // // //                             to={category.path}
// // // //                             key={category.name}
// // // //                             className="block text-center transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-orange-200 rounded-full"
// // // //                         >
// // // //                             <div className="w-full aspect-square max-w-[200px] mx-auto overflow-hidden rounded-full shadow-xl">
// // // //                                 <img
// // // //                                     src={category.image}
// // // //                                     alt={`${category.name} Illustration`}
// // // //                                     className="w-full h-full object-cover rounded-full"
// // // //                                     // ✅ loading="lazy" REMOVED
// // // //                                 />
// // // //                             </div>
                            
// // // //                             <h3 className="text-xl font-bold text-gray-800 mt-5 tracking-wide transition-colors duration-300 group-hover:text-orange-600">
// // // //                                 {category.name}
// // // //                             </h3>
// // // //                         </Link>
// // // //                     ))}
// // // //                 </div>
// // // //             </div>
// // // //         </section>
// // // //     );
// // // // };

// // // // export default Categories;

// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import dessertImage from '../assets/dessertt.jpg';
// // // import saladImage from '../assets/salads.jpg';
// // // import juicesImage from '../assets/juices.jpg';
// // // import shakesImage from '../assets/shakes.jpg';
// // // import breakfastImage from '../assets/breakfastt.jpg';
// // // import lunchImage from '../assets/lunchh.jpg';
// // // import dinnerImage from '../assets/dinnerr.jpg';
// // // import soupsImage from '../assets/soup.jpg';


// // // const Categories = () => {
// // //     const categories = [
// // //         { name: 'Dessert', path: '/category/dessert', image: dessertImage },
// // //         { name: 'Salad', path: '/category/salad', image: saladImage },
// // //         { name: 'Juices', path: '/category/juices', image: juicesImage },
// // //         { name: 'Shakes', path: '/category/shakes', image: shakesImage },
// // //         { name: 'Breakfast', path: '/category/breakfast', image: breakfastImage },
// // //         { name: 'Lunch', path: '/category/lunch', image: lunchImage },
// // //         { name: 'Dinner', path: '/category/dinner', image: dinnerImage },
// // //         { name: 'Soups', path: '/category/soups', image: soupsImage },
        
// // //     ];

// // //     return (
// // //         <section className="bg-white py-12">
// // //             <div className="container mx-auto px-4">
// // //                 <h2 className="text-3xl font-bold text-orange-800 text-center mb-8">Categories</h2>
// // //                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
// // //                     {categories.map((category) => (
// // //                         <Link
// // //                             to={category.path}
// // //                             key={category.name}
// // //                             className="block text-center transition duration-300 group"
// // //                         >
// // //                             <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-full bg-gray-200 shadow-sm group-hover:bg-orange-100">
// // //                                 <img
// // //                                     src={category.image}
// // //                                     alt={`${category.name} Illustration`}
// // //                                     className="w-full h-full object-cover rounded-full group-hover:opacity-80 transition duration-300"
// // //                                     loading="lazy"
// // //                                 />
// // //                             </div>
// // //                             <h3 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-orange-600">{category.name}</h3>
// // //                         </Link>
// // //                     ))}
// // //                 </div>
// // //             </div>
// // //         </section>
// // //     );
// // // };

// // // export default Categories;


// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import dessertImage from '../assets/dessertt.jpg'; // Corrected to dessert.jpg (remove extra 't' if file exists)
// // import saladImage from '../assets/salads.jpg';    // Corrected to salad.jpg (remove extra 's' if file exists)
// // import juicesImage from '../assets/juices.jpg';
// // import shakesImage from '../assets/shakes.jpg';
// // import breakfastImage from '../assets/breakfastt.jpg'; // Corrected to breakfast.jpg (remove extra 't' if file exists)
// // import lunchImage from '../assets/lunchh.jpg';    // Corrected to lunch.jpg (remove extra 'h' if file exists)
// // import dinnerImage from '../assets/dinnerr.jpg';  // Corrected to dinner.jpg (remove extra 'r' if file exists)
// // import soupsImage from '../assets/soup.jpg';

// // const Categories = () => {
// //     const categories = [
// //         { name: 'Dessert', path: '/dessert', image: dessertImage },
// //         { name: 'Salad', path: '/salad', image: saladImage },
// //         { name: 'Juices', path: '/juices', image: juicesImage },
// //         { name: 'Shakes', path: '/shakes', image: shakesImage },
// //         { name: 'Breakfast', path: '/breakfast', image: breakfastImage },
// //         { name: 'Lunch', path: '/lunch', image: lunchImage },
// //         { name: 'Dinner', path: '/dinner', image: dinnerImage },
// //         { name: 'Soups', path: '/soups', image: soupsImage },
// //     ];

// //     return (
// //         <section className="bg-white py-12">
// //             <div className="container mx-auto px-4">
// //                 <h2 className="text-3xl font-bold text-orange-800 text-center mb-8">Categories</h2>
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
// //                     {categories.map((category) => (
// //                         <Link
// //                             to={category.path}
// //                             key={category.name}
// //                             className="block text-center transition duration-300 group"
// //                         >
// //                             <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-full bg-gray-200 shadow-sm group-hover:bg-orange-100">
// //                                 <img
// //                                     src={category.image}
// //                                     alt={`${category.name} Illustration`}
// //                                     className="w-full h-full object-cover rounded-full group-hover:opacity-80 transition duration-300"
// //                                     loading="lazy"
// //                                 />
// //                             </div>
// //                             <h3 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-orange-600">{category.name}</h3>
// //                         </Link>
// //                     ))}
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default Categories;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Categories = () => {
//     const [categories, setCategories] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);
//                 const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
//                 const data = await response.json();
//                 if (data.categories) {
//                     setCategories(data.categories);
//                 } else {
//                     setError('No categories found.');
//                 }
//             } catch (err) {
//                 console.error('Error fetching categories:', err);
//                 setError('Failed to load categories.');
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchCategories();
//     }, []);

//     if (loading) return <div className="text-center text-2xl mt-8 text-gray-600">Loading categories...</div>;
//     if (error) return <div className="text-center text-2xl mt-8 text-red-600">{error}</div>;

//     return (
//         <section className="bg-white py-12">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl font-bold text-orange-800 text-center mb-8">Categories</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//                     {categories.map((category) => (
//                         <Link
//                             to={`/category/${category.strCategory.toLowerCase()}`}
//                             key={category.strCategory}
//                             className="block text-center transition duration-300 group"
//                         >
//                             <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-full bg-gray-200 shadow-sm group-hover:bg-orange-100">
//                                 <img
//                                     src={category.strCategoryThumb}
//                                     alt={`${category.strCategory} Illustration`}
//                                     className="w-full h-full object-cover rounded-full group-hover:opacity-80 transition duration-300"
//                                     loading="lazy"
//                                 />
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-orange-600">{category.strCategory}</h3>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Categories;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // 👈 Keep framer-motion

// Variants for the container (the grid of categories)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08, // Small delay between each category card animation
            delayChildren: 0.2     
        }
    }
};

// Variants for each individual category item (SLIDE-IN FROM RIGHT)
const itemVariants = {
    hidden: { x: 50, opacity: 0 }, // Starts 50px to the right and invisible
    visible: { 
        x: 0, 
        opacity: 1, 
        transition: { 
            type: "spring", 
            stiffness: 100,
            damping: 10
        } 
    }
};

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
                const data = await response.json();
                if (data.categories) {
                    setCategories(data.categories);
                } else {
                    setError('No categories found.');
                }
            } catch (err) {
                console.error('Error fetching categories:', err);
                setError('Failed to load categories.');
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    if (loading) return (
        <div className="text-center text-2xl mt-8 text-gray-600">
            <motion.div 
                initial={{ rotate: 0 }} 
                animate={{ rotate: 360 }} 
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block text-orange-500 text-3xl mr-3"
            >
                <i className="fas fa-spinner"></i>
            </motion.div>
            Loading categories...
        </div>
    );
    if (error) return <div className="text-center text-2xl mt-8 text-red-600">{error}</div>;

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-orange-800 text-center mb-8">Categories</h2>
                
                {/* Apply container variants to the grid */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible" // Animation triggers when component comes into view
                    viewport={{ once: true, amount: 0.2 }} // Only animate once, when 20% of component is visible
                >
                    {categories.map((category) => (
                        // Wrap each Link in a motion.div for individual animations
                        <motion.div
                            key={category.strCategory}
                            variants={itemVariants} // Apply SLIDE-IN animation
                            // Removed whileHover property
                        >
                            <Link
                                to={`/category/${category.strCategory.toLowerCase()}`}
                                className="block text-center transition duration-300 group" 
                            >
                                <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-full bg-gray-200 shadow-lg group-hover:bg-orange-100 transition duration-300"> 
                                    <img
                                        src={category.strCategoryThumb}
                                        alt={`${category.strCategory} Illustration`}
                                        className="w-full h-full object-cover rounded-full group-hover:opacity-80 transition duration-300"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-orange-600">{category.strCategory}</h3>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Categories;