// // // // // import React from 'react';

// // // // // const Header = () => {
// // // // //     return (
// // // // //         <header className="bg-gradient-to-r from-orange-500 to-yellow-400 py-16 text-center mt-4"> {/* Added mt-4 for margin-top */}
// // // // //             <div className="container mx-auto px-4">
// // // // //                 <h1 className="text-4xl font-bold text-white mb-4">Welcome to FlavorCraft</h1>
// // // // //                 <p className="text-xl text-white mb-6">Create Your Perfect Recipe Today</p>
// // // // //                 <a
// // // // //                     href="#get-started" // Replace with your target section or route
// // // // //                     className="inline-block bg-orange-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-700 transition duration-300"
// // // // //                 >
// // // // //                     Get Started
// // // // //                 </a>
// // // // //             </div>
// // // // //         </header>
// // // // //     );
// // // // // };

// // // // // export default Header;

// // // // import React from 'react';
// // // // import headerImage from '../assets/headerlogo.jpg'; // Import your image from assets folder

// // // // const Header = () => {
// // // //     return (
// // // //         <header className="bg-white py-16 mt-4">
// // // //             <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
// // // //                 {/* Text Section (Left Side) */}
// // // //                 <div className="text-left md:w-1/2 mb-8 md:mb-0">
// // // //                     <h1 className="text-4xl font-bold text-white mb-2">Welcome to FlavorCraft</h1>
// // // //                     <h2 className="text-xl text-white mb-4">Your Recipe Journey Starts Here</h2>
// // // //                     <p className="text-white mb-6">Discover a world of delicious recipes tailored to your taste, with tools to explore and create unique culinary masterpieces.</p>
// // // //                     <div className="space-y-4">
// // // //                         <a
// // // //                             href="/explore" // Replace with your explore route
// // // //                             className="inline-block bg-orange-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-700 transition duration-300"
// // // //                         >
// // // //                             Explore Recipes
// // // //                         </a>
// // // //                         <a
// // // //                             href="/generate" // Replace with your generate route
// // // //                             className="inline-block bg-orange-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-700 transition duration-300"
// // // //                         >
// // // //                             Generate Recipes
// // // //                         </a>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Image Section (Right Side) */}
// // // //                 <div className="md:w-1/2">
// // // //                     <img
// // // //                         src={headerImage}
// // // //                         alt="Header Illustration"
// // // //                         className="w-full h-auto rounded-lg shadow-md"
// // // //                     />
// // // //                 </div>
// // // //             </div>
// // // //         </header>
// // // //     );
// // // // };

// // // // export default Header;

// // // import React from 'react';
// // // import headerImage from '../assets/headerlogo.jpg'; // Uncomment and update with your image path

// // // const Header = () => {
// // //     return (
// // //         <header className="bg-white py-16 mt-4">
// // //             <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
// // //                 {/* Text Section (Left Side) */}
// // //                 <div className="text-left md:w-1/2 mb-8 md:mb-0">
// // //                     <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to FlavorCraft</h1>
// // //                     <h2 className="text-xl text-gray-600 mb-4">Your Recipe Journey Starts Here</h2>
// // //                     <p className="text-gray-600 mb-6">Discover a world of delicious recipes tailored to your taste, with tools to explore and create unique culinary masterpieces.</p>
// // //                     <div className="space-y-4">
// // //                         <a
// // //                             href="/explore" // Replace with your explore route
// // //                             className="inline-block bg-orange-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-700 transition duration-300"
// // //                         >
// // //                             Explore Recipes
// // //                         </a>
// // //                         <a
// // //                             href="/generate" // Replace with your generate route
// // //                             className="inline-block bg-orange-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-700 transition duration-300"
// // //                         >
// // //                             Generate Recipes
// // //                         </a>
// // //                     </div>
// // //                 </div>

// // //                 {/* Image Section (Right Side) */}
// // //                 <div className="md:w-1/2">
// // //                     <img
// // //                         src={headerImage}
// // //                         alt="Header Illustration"
// // //                         className="w-full h-auto rounded-lg shadow-md"
// // //                     />

// // //                 </div>
// // //             </div>
// // //         </header>
// // //     );
// // // };

// // // export default Header;


// // import React from 'react';
// // import headerImage from '../assets/headerlogo.jpg'; 

// // const Header = () => {
// //     return (
// //         <header className="bg-white pt-16 pb-20 sm:pt-24 sm:pb-32 overflow-hidden">
// //             <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">

// //                 {/* Text Section (Left Side - Static) */}
// //                 <div className="text-center md:text-left md:w-5/12 lg:w-5/12">

// //                     {/* Main Headline */}
// //                     <h1 className="text-5xl sm:text-6xl font-extrabold mb-3 leading-tight tracking-tight">
// //                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
// //                             FlavorCraft
// //                         </span>
// //                         <br />
// //                         Your Recipe Journey
// //                     </h1>

// //                     {/* Subtitle */}
// //                     <p className="text-xl sm:text-2xl text-gray-700 font-medium mb-6">
// //                         Discover & Create Culinary Masterpieces.
// //                     </p>

// //                     {/* Description */}
// //                     <p className="text-gray-500 mb-8 max-w-lg md:max-w-none mx-auto md:mx-0">
// //                         Explore a curated world of delicious recipes and utilize our advanced tools to effortlessly tailor every dish to your unique taste and dietary needs.
// //                     </p>

// //                     {/* Call-to-Action Buttons (Animations removed) */}
// //                     <div className="flex justify-center md:justify-start space-x-4">
// //                         <a
// //                             href="/explore" 
// //                             className="inline-flex items-center justify-center bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-700 transition duration-300 tracking-wider text-lg"
// //                         >
// //                             Explore Recipes
// //                         </a>
// //                         <a
// //                             href="/generate"
// //                             className="inline-flex items-center justify-center bg-white border-2 border-orange-600 text-orange-600 font-bold py-3 px-8 rounded-full shadow-md hover:bg-orange-50 transition duration-300 tracking-wider text-lg"
// //                         >
// //                             Start Creating
// //                         </a>
// //                     </div>
// //                 </div>

// //                 {/* Image Section (Right Side - Circle Shape, Static) */}
// //                 <div className="md:w-7/12 lg:w-7/12 flex justify-center md:justify-end">
// //                     <div className="w-full max-w-sm sm:max-w-md aspect-square overflow-hidden shadow-2xl">
// //                         <img
// //                             src={headerImage}
// //                             alt="A beautifully plated dish or a chef preparing food"
// //                             // ✅ Key Change: rounded-full for a perfect circle
// //                             // ✅ Key Change: object-cover ensures the image fills the circle without stretching
// //                             className="w-full h-full object-cover rounded-full" 
// //                         />
// //                     </div>
// //                 </div>
// //             </div>
// //         </header>
// //     );
// // };

// // export default Header;

// import React from 'react';
// import headerImage from '../assets/headerlogo.jpg'; 

// const Header = () => {
//     return (
//         <header className="bg-white pt-16 pb-20 sm:pt-24 sm:pb-32 overflow-hidden">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">

//                 {/* Text Section (Left Side) */}
//                 <div className="text-center md:text-left md:w-5/12 lg:w-5/12">

//                     {/* Main Headline */}
//                     <h1 className="text-5xl sm:text-6xl font-extrabold mb-3 leading-tight tracking-tight">
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
//                             FlavorCraft
//                         </span>
//                         <br />
//                         Your Recipe Journey
//                     </h1>

//                     {/* Subtitle */}
//                     <p className="text-xl sm:text-2xl text-gray-700 font-medium mb-6">
//                         Discover & Create Culinary Masterpieces.
//                     </p>

//                     {/* Description */}
//                     <p className="text-gray-500 mb-8 max-w-lg md:max-w-none mx-auto md:mx-0">
//                         Explore a curated world of delicious recipes and utilize our advanced tools to effortlessly tailor every dish to your unique taste and dietary needs.
//                     </p>

//                     {/* Call-to-Action Buttons (Static) */}
//                     <div className="flex justify-center md:justify-start space-x-4">
//                         <a
//                             href="/explore" 
//                             className="inline-flex items-center justify-center bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-700 transition duration-300 tracking-wider text-lg"
//                         >
//                             Explore Recipes
//                         </a>
//                         <a
//                             href="/generate"
//                             className="inline-flex items-center justify-center bg-white border-2 border-orange-600 text-orange-600 font-bold py-3 px-8 rounded-full shadow-md hover:bg-orange-50 transition duration-300 tracking-wider text-lg"
//                         >
//                             Start Creating
//                         </a>
//                     </div>
//                 </div>

//                 {/* Image Section (Right Side - FIX APPLIED HERE) */}
//                 <div className="md:w-7/12 lg:w-7/12 flex justify-center md:justify-end">
//                     {/* ✅ FIX: Added bg-gray-900 to the container 
//                       This dark background color blends better with the image's dark wooden background, 
//                       hiding the white space created by the 'object-cover' cropping. 
//                     */}
//                     <div className="w-full max-w-sm sm:max-w-md aspect-square overflow-hidden shadow-2xl rounded-full bg-gray-900">
//                         <img
//                             src={headerImage}
//                             alt="A beautifully plated dish or a chef preparing food"
//                             className="w-full h-full object-cover rounded-full" 
//                         />
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };





// export default Header;

import React from 'react';
import headerImage from '../assets/headerlogo.jpg';

const Header = () => {
    return (
        <header className="bg-white pt-16 pb-20 sm:pt-24 sm:pb-32 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10"> {/* Reduced gap */}

                {/* Text Section (Left Side) */}
                <div className="text-center md:text-left md:w-5/12 lg:w-5/12">

                    {/* Main Headline - REDUCED SIZE (from 5xl/6xl to 4xl/5xl) */}
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 leading-tight tracking-tight text-center md:text-left">
                        {/* Option 1: Apply the main dark color from your design */}
                        <span className="text-gray-900">
                            Your Recipe Journey
                        </span>
                    </h1>

                    {/* Subtitle - REDUCED SIZE (from 2xl to xl/2xl) */}
                    <p className="text-xl sm:text-2xl text-gray-700 font-medium mb-5">
                        Discover & Create Culinary Masterpieces.
                    </p>

                    {/* Description - SLIGHTLY REDUCED MARGIN */}
                    <p className="text-gray-500 mb-7 max-w-lg md:max-w-none mx-auto md:mx-0 text-sm sm:text-base">
                        Explore a curated world of delicious recipes and utilize our advanced tools to effortlessly tailor every dish to your unique taste and dietary needs.
                    </p>

                    {/* Call-to-Action Buttons - REDUCED PADDING AND FONT SIZE */}
                    <div className="flex justify-center md:justify-start space-x-3 mt-4">
                        <a
                            href="/explore"
                            // Reduced py-3/px-8 to py-2.5/px-6 and text-lg to text-base
                            className="inline-flex items-center justify-center bg-orange-600 text-white font-bold py-2.5 px-6 rounded-full shadow-lg hover:bg-orange-700 transition duration-300 tracking-wider text-base"
                        >
                            Explore Recipes
                        </a>
                        <a
                            href="/generate"
                            // Reduced py-3/px-8 to py-2.5/px-6 and text-lg to text-base
                            className="inline-flex items-center justify-center bg-white border-2 border-orange-600 text-orange-600 font-bold py-2.5 px-6 rounded-full shadow-md hover:bg-orange-50 transition duration-300 tracking-wider text-base"
                        >
                            Start Creating
                        </a>
                    </div>
                </div>

                {/* Image Section (Right Side - Circle Shape, Static) */}
                <div className="md:w-7/12 lg:w-7/12 flex justify-center md:justify-end">
                    <div className="w-full max-w-sm sm:max-w-md aspect-square overflow-hidden shadow-2xl rounded-full bg-gray-900">
                        <img
                            src={headerImage}
                            alt="A beautifully plated dish or a chef preparing food"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;