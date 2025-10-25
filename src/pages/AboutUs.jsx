// // // // import React from 'react';
// // // // import { FaHeart, FaHandsHelping, FaGlobe } from 'react-icons/fa'; 
// // // // // Install react-icons if you haven't: npm install react-icons

// // // // const AboutUs = () => {
// // // //     return (
// // // //         <div className="bg-gray-50 min-h-screen pt-16 pb-24">
// // // //             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
// // // //                 {/* --- Section 1: Hero & Story --- */}
// // // //                 <header className="text-center mb-16 pt-8">
// // // //                     <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
// // // //                         Our Story
// // // //                     </h1>
// // // //                     <p className="text-xl text-orange-600 font-medium">
// // // //                         Crafting Culinary Journeys, One Recipe at a Time.
// // // //                     </p>
// // // //                 </header>

// // // //                 <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
                    
// // // //                     {/* Left Column: Mission Text */}
// // // //                     <div className="lg:w-1/2">
// // // //                         <h2 className="text-4xl font-bold text-gray-800 mb-6">
// // // //                             From a Simple Idea to Your Daily Kitchen Guide
// // // //                         </h2>
// // // //                         <p className="text-gray-700 text-lg leading-relaxed mb-6">
// // // //                             Flavoriz was born from a simple passion: to make delicious, home-cooked meals accessible to everyone, regardless of their skill level or busy schedule. We believe food is more than just sustenance—it’s a way to connect, celebrate, and explore the world.
// // // //                         </p>
// // // //                         <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-orange-500 pl-4 italic">
// // // //                             "Our mission is to be the dedicated guide and trusted tool that transforms culinary discovery into an effortless and enjoyable experience for every home cook."
// // // //                         </p>
// // // //                     </div>

// // // //                     {/* Right Column: Image */}
// // // //                     <div className="lg:w-1/2">
// // // //                         {/* Use a placeholder image that represents your brand, e.g., a warm kitchen scene */}
// // // //                         <img 
// // // //                             src="https://via.placeholder.com/800x500/FF5722/FFFFFF?text=A+Warm+Flavoriz+Kitchen" 
// // // //                             alt="A warm kitchen setup representing the Flavoriz brand." 
// // // //                             className="rounded-xl shadow-2xl w-full"
// // // //                         />
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* --- Section 2: Core Values --- */}
// // // //                 <div className="mt-20">
// // // //                     <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
// // // //                         Our Core Values
// // // //                     </h2>
                    
// // // //                     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        
// // // //                         <div className="text-center p-6 bg-white rounded-xl shadow-lg border-b-4 border-orange-500">
// // // //                             <FaHeart className="text-6xl text-orange-600 mx-auto mb-4" />
// // // //                             <h3 className="text-2xl font-semibold text-gray-800 mb-3">Passion for Food</h3>
// // // //                             <p className="text-gray-600">
// // // //                                 Every recipe is selected and curated with a deep love for flavors and quality ingredients. We celebrate the joy of cooking.
// // // //                             </p>
// // // //                         </div>

// // // //                         <div className="text-center p-6 bg-white rounded-xl shadow-lg border-b-4 border-orange-500">
// // // //                             <FaHandsHelping className="text-6xl text-orange-600 mx-auto mb-4" />
// // // //                             <h3 className="text-2xl font-semibold text-gray-800 mb-3">Empowerment</h3>
// // // //                             <p className="text-gray-600">
// // // //                                 We provide simple instructions and smart tools to empower even beginner cooks to achieve delicious, confident results.
// // // //                             </p>
// // // //                         </div>

// // // //                         <div className="text-center p-6 bg-white rounded-xl shadow-lg border-b-4 border-orange-500">
// // // //                             <FaGlobe className="text-6xl text-orange-600 mx-auto mb-4" />
// // // //                             <h3 className="text-2xl font-semibold text-gray-800 mb-3">Global Discovery</h3>
// // // //                             <p className="text-gray-600">
// // // //                                 Our platform is a gateway to international cuisines, promoting cultural understanding through food.
// // // //                             </p>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default AboutUs;


// // // import React from 'react';
// // // import { FaHeart, FaHandsHelping, FaGlobe } from 'react-icons/fa'; 
// // // // 👈 Import your custom image here
// // // import aboutUsImage from '../assets/aboutus.jpg'; 

// // // const AboutUs = () => {
// // //     return (
// // //         <div className="bg-gray-50 min-h-screen pt-16 pb-24">
// // //             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
// // //                 {/* --- Section 1: Hero & Story --- */}
// // //                 <header className="text-center mb-16 pt-8">
// // //                     <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
// // //                         Our Story
// // //                     </h1>
// // //                     <p className="text-xl text-orange-600 font-medium">
// // //                         Crafting Culinary Journeys, One Recipe at a Time.
// // //                     </p>
// // //                 </header>

// // //                 <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
                    
// // //                     {/* Left Column: Mission Text */}
// // //                     <div className="lg:w-1/2 order-2 lg:order-1"> {/* Order ensures text is on the left */}
// // //                         <h2 className="text-4xl font-bold text-gray-800 mb-6">
// // //                             From a Simple Idea to Your Daily Kitchen Guide
// // //                         </h2>
// // //                         <p className="text-gray-700 text-lg leading-relaxed mb-6">
// // //                             Flavoriz was born from a simple passion: to make delicious, home-cooked meals accessible to everyone, regardless of their skill level or busy schedule. We believe food is more than just sustenance—it’s a way to connect, celebrate, and explore the world.
// // //                         </p>
// // //                         <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-orange-500 pl-4 italic">
// // //                             "Our mission is to be the dedicated guide and trusted tool that transforms culinary discovery into an effortless and enjoyable experience for every home cook."
// // //                         </p>
// // //                     </div>

// // //                     {/* Right Column: Custom Image */}
// // //                     <div className="lg:w-1/2 order-1 lg:order-2"> {/* Order ensures image is on the right */}
// // //                         <img 
// // //                             src={aboutUsImage} // 👈 Using your imported image
// // //                             alt="A warm kitchen scene representing the Flavoriz community and passion for cooking." 
// // //                             className="rounded-xl shadow-2xl w-full object-cover h-96 lg:h-auto"
// // //                         />
// // //                     </div>
// // //                 </div>

// // //                 {/* --- Section 2: Core Values --- */}
// // //                 <div className="mt-20">
// // //                     <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
// // //                         Our Core Values
// // //                     </h2>
                    
// // //                     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        
// // //                         <div className="text-center p-6 bg-white rounded-xl shadow-lg border-b-4 border-orange-500">
// // //                             <FaHeart className="text-6xl text-orange-600 mx-auto mb-4" />
// // //                             <h3 className="text-2xl font-semibold text-gray-800 mb-3">Passion for Food</h3>
// // //                             <p className="text-gray-600">
// // //                                 Every recipe is selected and curated with a deep love for flavors and quality ingredients. We celebrate the joy of cooking.
// // //                             </p>
// // //                         </div>

// // //                         <div className="text-center p-6 bg-white rounded-xl shadow-lg border-b-4 border-orange-500">
// // //                             <FaHandsHelping className="text-6xl text-orange-600 mx-auto mb-4" />
// // //                             <h3 className="text-2xl font-semibold text-gray-800 mb-3">Empowerment</h3>
// // //                             <p className="text-gray-600">
// // //                                 We provide simple instructions and smart tools to empower even beginner cooks to achieve delicious, confident results.
// // //                             </p>
// // //                         </div>

// // //                         <div className="text-center p-6 bg-white rounded-xl shadow-lg border-b-4 border-orange-500">
// // //                             <FaGlobe className="text-6xl text-orange-600 mx-auto mb-4" />
// // //                             <h3 className="text-2xl font-semibold text-gray-800 mb-3">Global Discovery</h3>
// // //                             <p className="text-gray-600">
// // //                                 Our platform is a gateway to international cuisines, promoting cultural understanding through food.
// // //                             </p>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default AboutUs;


// // import React from 'react';
// // import { FaHeart, FaHandsHelping, FaGlobe } from 'react-icons/fa'; 
// // import aboutUsImage from '../assets/aboutus.jpg'; 

// // const AboutUs = () => {
// //     return (
// //         <div className="bg-gray-50 min-h-screen pt-16 pb-24">
// //             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
// //                 {/* --- Section 1: Hero & Story --- */}
// //                 <header className="text-center mb-16 pt-8">
// //                     <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
// //                         Our Story
// //                     </h1>
// //                     <p className="text-xl text-orange-600 font-medium">
// //                         Crafting Culinary Journeys, One Recipe at a Time.
// //                     </p>
// //                 </header>

// //                 <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
                    
// //                     {/* LEFT Column: Mission Text */}
// //                     <div className="lg:w-1/2 order-2 lg:order-1"> 
// //                         <h2 className="text-4xl font-bold text-gray-800 mb-6">
// //                             From a Simple Idea to Your Daily Kitchen Guide
// //                         </h2>
// //                         <p className="text-gray-700 text-lg leading-relaxed mb-6">
// //                             Flavoriz was born from a simple passion: to make delicious, home-cooked meals accessible to everyone, regardless of their skill level or busy schedule. We believe food is more than just sustenance—it’s a way to connect, celebrate, and explore the world.
// //                         </p>
// //                         <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-orange-500 pl-4 italic">
// //                             "Our mission is to be the dedicated guide and trusted tool that transforms culinary discovery into an effortless and enjoyable experience for every home cook."
// //                         </p>
// //                     </div>

// //                     {/* RIGHT Column: Custom Image */}
// //                     <div className="lg:w-1/2 order-1 lg:order-2"> 
// //                         <img 
// //                             src={aboutUsImage} 
// //                             alt="A passionate chef representing the Flavoriz brand." 
// //                             className="rounded-xl shadow-2xl w-full object-cover h-64 lg:h-96" 
// //                             // Changed h-96 to h-64 on small screens
// //                             // Set a fixed height of h-96 on large screens (lg)
// //                             // This ensures the image height is constrained
// //                         />
// //                     </div>
// //                 </div>

// //                 {/* --- Section 2: Core Values --- */}
// //                 <div className="mt-20">
// //                     <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
// //                         Our Core Values
// //                     </h2>
                    
// //                     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        
// //                         <div className="text-center p-6 bg-white rounded-xl shadow-lg border-b-4 border-orange-500">
// //                             <FaHeart className="text-6xl text-orange-600 mx-auto mb-4" />
// //                             <h3 className="text-2xl font-semibold text-gray-800 mb-3">Passion for Food</h3>
// //                             <p className="text-gray-600">
// //                                 Every recipe is selected and curated with a deep love for flavors and quality ingredients. We celebrate the joy of cooking.
// //                             </p>
// //                         </div>

// //                         <div className="text-center p-6 bg-white rounded-xl shadow-lg border-b-4 border-orange-500">
// //                             <FaHandsHelping className="text-6xl text-orange-600 mx-auto mb-4" />
// //                             <h3 className="text-2xl font-semibold text-gray-800 mb-3">Empowerment</h3>
// //                             <p className="text-gray-600">
// //                                 We provide simple instructions and smart tools to empower even beginner cooks to achieve delicious, confident results.
// //                             </p>
// //                         </div>

// //                         <div className="text-center p-6 bg-white rounded-xl shadow-lg border-b-4 border-orange-500">
// //                             <FaGlobe className="text-6xl text-orange-600 mx-auto mb-4" />
// //                             <h3 className="text-2xl font-semibold text-gray-800 mb-3">Global Discovery</h3>
// //                             <p className="text-gray-600">
// //                                 Our platform is a gateway to international cuisines, promoting cultural understanding through food.
// //                             </p>
// //                         </div>
// //                     </div>
// //                 </div>

// //             </div>
// //         </div>
// //     );
// // };

// // export default AboutUs;


// import React from 'react';
// import { FaHeart, FaHandsHelping, FaGlobe } from 'react-icons/fa'; 
// import aboutUsImage from '../assets/aboutus.jpg'; 
// import { motion } from 'framer-motion'; // Import framer-motion

// // Variants for the left column text (Slide-in from Left)
// const textVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { 
//         opacity: 1, 
//         x: 0, 
//         transition: { 
//             duration: 0.7, 
//             ease: "easeOut" 
//         } 
//     }
// };

// // Variants for the right column image (Slide-in from Right)
// const imageVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { 
//         opacity: 1, 
//         x: 0, 
//         transition: { 
//             duration: 0.7, 
//             ease: "easeOut",
//             delay: 0.2 // Start image slightly after text for visual flow
//         } 
//     }
// };

// // Variants for the Core Values Grid
// const valuesContainerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.15, 
//             delayChildren: 0.3
//         }
//     }
// };

// // Variants for each Core Value card (Fade-Up)
// const valueItemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { 
//         y: 0, 
//         opacity: 1, 
//         transition: { 
//             duration: 0.5,
//             ease: "easeOut"
//         } 
//     }
// };


// const AboutUs = () => {
//     return (
//         <div className="bg-gray-50 min-h-screen pt-16 pb-24">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
//                 {/* --- Section 1: Hero & Story --- */}
//                 <header className="text-center mb-16 pt-8">
//                     {/* H1 Animation */}
//                     <motion.h1 
//                         className="text-6xl font-extrabold text-gray-900 mb-4"
//                         initial={{ y: -30, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.6, ease: "easeOut" }}
//                     >
//                         Our Story
//                     </motion.h1>
//                     {/* Subtitle Animation */}
//                     <motion.p 
//                         className="text-xl text-orange-600 font-medium"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.3 }}
//                     >
//                         Crafting Culinary Journeys, One Recipe at a Time.
//                     </motion.p>
//                 </header>

//                 <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
                    
//                     {/* LEFT Column: Mission Text (Slide-in from Left) */}
//                     <motion.div 
//                         className="lg:w-1/2 order-2 lg:order-1"
//                         variants={textVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.4 }}
//                     > 
//                         <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                             From a Simple Idea to Your Daily Kitchen Guide
//                         </h2>
//                         <p className="text-gray-700 text-lg leading-relaxed mb-6">
//                             Flavoriz was born from a simple passion: to make delicious, home-cooked meals accessible to everyone, regardless of their skill level or busy schedule. We believe food is more than just sustenance—it’s a way to connect, celebrate, and explore the world.
//                         </p>
//                         <motion.p 
//                             className="text-gray-700 text-lg leading-relaxed border-l-4 border-orange-500 pl-4 italic"
//                             initial={{ opacity: 0, scale: 0.95 }} // Subtle pop-in for the quote
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true, amount: 0.6 }}
//                             transition={{ duration: 0.5, delay: 0.5 }}
//                         >
//                             "Our mission is to be the dedicated guide and trusted tool that transforms culinary discovery into an effortless and enjoyable experience for every home cook."
//                         </motion.p>
//                     </motion.div>

//                     {/* RIGHT Column: Custom Image (Slide-in from Right) */}
//                     <motion.div 
//                         className="lg:w-1/2 order-1 lg:order-2"
//                         variants={imageVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.4 }}
//                     > 
//                         <img 
//                             src={aboutUsImage} 
//                             alt="A passionate chef representing the Flavoriz brand." 
//                             className="rounded-xl shadow-2xl w-full object-cover h-64 lg:h-96" 
//                         />
//                     </motion.div>
//                 </div>

//                 {/* --- Section 2: Core Values --- */}
//                 <div className="mt-20">
//                     <motion.h2 
//                         className="text-4xl font-extrabold text-gray-900 text-center mb-12"
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true, amount: 0.8 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         Our Core Values
//                     </motion.h2>
                    
//                     {/* Core Values Grid (Staggered Fade-Up) */}
//                     <motion.div 
//                         className="grid grid-cols-1 md:grid-cols-3 gap-10"
//                         variants={valuesContainerVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.3 }}
//                     >
                        
//                         {[
//                             { icon: FaHeart, title: 'Passion for Food', description: 'Every recipe is selected and curated with a deep love for flavors and quality ingredients. We celebrate the joy of cooking.' },
//                             { icon: FaHandsHelping, title: 'Empowerment', description: 'We provide simple instructions and smart tools to empower even beginner cooks to achieve delicious, confident results.' },
//                             { icon: FaGlobe, title: 'Global Discovery', description: 'Our platform is a gateway to international cuisines, promoting cultural understanding through food.' },
//                         ].map((value, index) => (
//                             <motion.div 
//                                 key={index} 
//                                 className="text-center p-6 bg-white rounded-xl shadow-lg border-b-4 border-orange-500"
//                                 variants={valueItemVariants}
//                                 whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
//                                 transition={{ type: "spring", stiffness: 300, damping: 15 }}
//                             >
//                                 <motion.div
//                                     initial={{ scale: 0 }}
//                                     whileInView={{ scale: 1 }}
//                                     viewport={{ once: true, amount: 0.3 }}
//                                     transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
//                                     className="mx-auto mb-4"
//                                 >
//                                     <value.icon className="text-6xl text-orange-600" />
//                                 </motion.div>
//                                 <h3 className="text-2xl font-semibold text-gray-800 mb-3">{value.title}</h3>
//                                 <p className="text-gray-600">{value.description}</p>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default AboutUs;

import React from 'react';
import { FaHeart, FaHandsHelping, FaGlobe } from 'react-icons/fa'; 
import aboutUsImage from '../assets/aboutus.jpg'; 
import { motion } from 'framer-motion'; 

// Variants for the left column text (Slide-in from Left)
const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { 
            duration: 0.7, 
            ease: "easeOut" 
        } 
    }
};

// Variants for the right column image (Slide-in from Right)
const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { 
            duration: 0.7, 
            ease: "easeOut",
            delay: 0.2
        } 
    }
};

// Variants for the Core Values Grid
const valuesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, 
            delayChildren: 0.3
        }
    }
};

// Variants for each Core Value card (Fade-Up)
const valueItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1, 
        transition: { 
            duration: 0.5,
            ease: "easeOut"
        } 
    }
};


const AboutUs = () => {
    // Moved the data array definition outside the loop for cleaner code
    const coreValues = [
        { icon: FaHeart, title: 'Passion for Food', description: 'Every recipe is selected and curated with a deep love for flavors and quality ingredients. We celebrate the joy of cooking.' },
        { icon: FaHandsHelping, title: 'Empowerment', description: 'We provide simple instructions and smart tools to empower even beginner cooks to achieve delicious, confident results.' },
        { icon: FaGlobe, title: 'Global Discovery', description: 'Our platform is a gateway to international cuisines, promoting cultural understanding through food.' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-16 pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- Section 1: Hero & Story --- */}
                <header className="text-center mb-16 pt-8">
                    {/* H1 Animation */}
                    <motion.h1 
                        className="text-6xl font-extrabold text-gray-900 mb-4"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Our Story
                    </motion.h1>
                    {/* Subtitle Animation */}
                    <motion.p 
                        className="text-xl text-orange-600 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Crafting Culinary Journeys, One Recipe at a Time.
                    </motion.p>
                </header>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
                    
                    {/* LEFT Column: Mission Text (Slide-in from Left) */}
                    <motion.div 
                        className="lg:w-1/2 order-2 lg:order-1"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    > 
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            From a Simple Idea to Your Daily Kitchen Guide
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Flavoriz was born from a simple passion: to make delicious, home-cooked meals accessible to everyone, regardless of their skill level or busy schedule. We believe food is more than just sustenance—it’s a way to connect, celebrate, and explore the world.
                        </p>
                        <motion.p 
                            className="text-gray-700 text-lg leading-relaxed border-l-4 border-orange-500 pl-4 italic"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            "Our mission is to be the dedicated guide and trusted tool that transforms culinary discovery into an effortless and enjoyable experience for every home cook."
                        </motion.p>
                    </motion.div>

                    {/* RIGHT Column: Custom Image (Slide-in from Right) */}
                    <motion.div 
                        className="lg:w-1/2 order-1 lg:order-2"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    > 
                        <img 
                            src={aboutUsImage} 
                            alt="A passionate chef representing the Flavoriz brand." 
                            className="rounded-xl shadow-2xl w-full object-cover h-64 lg:h-96" 
                        />
                    </motion.div>
                </div>

                {/* --- Section 2: Core Values --- */}
                <div className="mt-20">
                    <motion.h2 
                        className="text-4xl font-extrabold text-gray-900 text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Core Values
                    </motion.h2>
                    
                    {/* Core Values Grid (Staggered Fade-Up) */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-10"
                        variants={valuesContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        
                        {coreValues.map((value, index) => (
                            <motion.div 
                                key={index} 
                                className="text-center p-6 bg-white rounded-xl shadow-lg border-b-4 border-orange-500"
                                variants={valueItemVariants}
                                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                {/* FIX: We wrap the icon animation in a parent div with fixed dimensions. */}
                                <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                                    >
                                        <value.icon className="text-6xl text-orange-600" />
                                    </motion.div>
                                </div>
                                
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;