

// import React from 'react';
// import headerImage from '../assets/headerlogo.jpg';

// const Header = () => {
//     return (
//         <header className="bg-white pt-16 pb-20 sm:pt-24 sm:pb-32 overflow-hidden">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10"> {/* Reduced gap */}

//                 {/* Text Section (Left Side) */}
//                 <div className="text-center md:text-left md:w-5/12 lg:w-5/12">

//                     {/* Main Headline - REDUCED SIZE (from 5xl/6xl to 4xl/5xl) */}
//                     <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 leading-tight tracking-tight text-center md:text-left">
//                         {/* Option 1: Apply the main dark color from your design */}
//                         <span className="text-gray-900">
//                             Your Recipe Journey
//                         </span>
//                     </h1>

//                     {/* Subtitle - REDUCED SIZE (from 2xl to xl/2xl) */}
//                     <p className="text-xl sm:text-2xl text-gray-700 font-medium mb-5">
//                         Discover & Create Culinary Masterpieces.
//                     </p>

//                     {/* Description - SLIGHTLY REDUCED MARGIN */}
//                     <p className="text-gray-500 mb-7 max-w-lg md:max-w-none mx-auto md:mx-0 text-sm sm:text-base">
//                         Explore a curated world of delicious recipes and utilize our advanced tools to effortlessly tailor every dish to your unique taste and dietary needs.
//                     </p>

//                     {/* Call-to-Action Buttons - REDUCED PADDING AND FONT SIZE */}
//                     <div className="flex justify-center md:justify-start space-x-3 mt-4">
//                         <a
//                             href="/category"
//                             // Reduced py-3/px-8 to py-2.5/px-6 and text-lg to text-base
//                             className="inline-flex items-center justify-center bg-orange-600 text-white font-bold py-2.5 px-6 rounded-full shadow-lg hover:bg-orange-700 transition duration-300 tracking-wider text-base"
//                         >
//                             Explore Recipes
//                         </a>
//                         <a
//                             href="/generate"
//                             // Reduced py-3/px-8 to py-2.5/px-6 and text-lg to text-base
//                             className="inline-flex items-center justify-center bg-white border-2 border-orange-600 text-orange-600 font-bold py-2.5 px-6 rounded-full shadow-md hover:bg-orange-50 transition duration-300 tracking-wider text-base"
//                         >
//                             Start Creating
//                         </a>
//                     </div>
//                 </div>

//                 {/* Image Section (Right Side - Circle Shape, Static) */}
//                 <div className="md:w-7/12 lg:w-7/12 flex justify-center md:justify-end">
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
import { motion } from 'framer-motion'; // 👈 Import framer-motion
import headerImage from '../assets/headerlogo.jpg';

// Define animation variants for the whole container
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2 // Delay between child animations
        }
    }
};

// Define animation variants for the individual child elements (fade up)
const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Header = () => {
    return (
        <header className="bg-white pt-16 pb-20 sm:pt-24 sm:pb-32 overflow-hidden">
            <motion.div 
                className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10"
                variants={containerVariants} // Apply container variants
                initial="hidden"             // Start hidden
                animate="visible"            // Animate to visible
            >
                {/* Text Section (Left Side) */}
                <motion.div 
                    className="text-center md:text-left md:w-5/12 lg:w-5/12"
                    // No variants needed here, children will use their own
                >
                    {/* Main Headline */}
                    <motion.h1 
                        className="text-4xl sm:text-5xl font-extrabold mb-2 leading-tight tracking-tight text-center md:text-left"
                        variants={itemVariants} // 👈 Apply staggered animation
                    >
                        <span className="text-gray-900">Your Recipe Journey</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p 
                        className="text-xl sm:text-2xl text-gray-700 font-medium mb-5"
                        variants={itemVariants} // 👈 Apply staggered animation
                    >
                        Discover & Create Culinary Masterpieces.
                    </motion.p>

                    {/* Description */}
                    <motion.p 
                        className="text-gray-500 mb-7 max-w-lg md:max-w-none mx-auto md:mx-0 text-sm sm:text-base"
                        variants={itemVariants} // 👈 Apply staggered animation
                    >
                        Explore a curated world of delicious recipes and utilize our advanced tools to effortlessly tailor every dish to your unique taste and dietary needs.
                    </motion.p>

                    {/* Call-to-Action Buttons */}
                    <motion.div 
                        className="flex justify-center md:justify-start space-x-3 mt-4"
                        variants={itemVariants} // 👈 Apply staggered animation
                    >
                        <a
                            href="/category"
                            className="inline-flex items-center justify-center bg-orange-600 text-white font-bold py-2.5 px-6 rounded-full shadow-lg hover:bg-orange-700 transition duration-300 tracking-wider text-base"
                        >
                            Explore Recipes
                        </a>
                        <a
                            href="/generate"
                            className="inline-flex items-center justify-center bg-white border-2 border-orange-600 text-orange-600 font-bold py-2.5 px-6 rounded-full shadow-md hover:bg-orange-50 transition duration-300 tracking-wider text-base"
                        >
                            Start Creating
                        </a>
                    </motion.div>
                </motion.div>

                {/* Image Section (Right Side - Circle Shape, Animated) */}
                <motion.div 
                    className="md:w-7/12 lg:w-7/12 flex justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.8 }} // Start small and transparent
                    animate={{ opacity: 1, scale: 1 }}   // Grow to full size
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} // Delay slightly after text starts
                >
                    <div className="w-full max-w-sm sm:max-w-md aspect-square overflow-hidden shadow-2xl rounded-full bg-gray-900">
                        <img
                            src={headerImage}
                            alt="A beautifully plated dish or a chef preparing food"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </header>
    );
};

export default Header;