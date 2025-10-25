// // import React from 'react';
// // import { FaStar } from 'react-icons/fa'; // Make sure you have react-icons installed

// // const Testimonials = () => {
// //     const reviews = [
// //         {
// //             quote: "Flavoriz is now my go-to for dinner ideas. The recipes are easy to follow, and the variety is incredible. I've become a much better cook!",
// //             name: "Fatima K.",
// //             rating: 5,
// //         },
// //         {
// //             quote: "I love the dietary filters! As a vegan, finding quick and tasty recipes used to be a challenge, but Flavoriz makes it effortless.",
// //             name: "Ahmed S.",
// //             rating: 5,
// //         },
// //         {
// //             quote: "The interface is beautiful and so easy to navigate. The Chicken Karahi recipe was a huge hit at my last family gathering. Highly recommend!",
// //             name: "Maria A.",
// //             rating: 5,
// //         },
// //     ];

// //     // Function to render stars based on the rating number
// //     const renderStars = (rating) => {
// //         return (
// //             <div className="flex justify-center mb-4">
// //                 {[...Array(5)].map((_, i) => (
// //                     <FaStar 
// //                         key={i} 
// //                         className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
// //                     />
// //                 ))}
// //             </div>
// //         );
// //     };

// //     return (
// //         <section className="bg-white py-16 sm:py-24">
// //             <div className="container mx-auto px-4">
                
// //                 {/* Section Title */}
// //                 <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
// //                     What Our Community Says
// //                 </h2>
// //                 <p className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
// //                     Trusted by thousands of home cooks around the world.
// //                 </p>

// //                 {/* Testimonial Cards Grid */}
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //                     {reviews.map((review, index) => (
// //                         <div 
// //                             key={index} 
// //                             className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-orange-500 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
// //                         >
// //                             {renderStars(review.rating)}
                            
// //                             {/* Quote Body */}
// //                             <blockquote className="italic text-gray-700 mb-6 flex-grow">
// //                                 "{review.quote}"
// //                             </blockquote>
                            
// //                             {/* Reviewer Name */}
// //                             <p className="text-lg font-semibold text-gray-900 mt-auto">
// //                                 — {review.name}
// //                             </p>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default Testimonials;
// import React from 'react';
// import { FaStar } from 'react-icons/fa';
// import { motion } from 'framer-motion'; // Using framer-motion

// // Variants for the container (the grid of testimonial cards)
// const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.2, // Delay between each card animation
//             delayChildren: 0.2     
//         }
//     }
// };

// // Variants for each individual testimonial card (3D Tilt Effect)
// const itemVariants = {
//     hidden: { 
//         opacity: 0, 
//         y: 50, // Starts below
//         rotateX: -90, // Starts rotated back on the X-axis (creating the 3D tilt)
//         transformPerspective: 800 // Needed for 3D effect
//     },
//     visible: { 
//         opacity: 1, 
//         y: 0, 
//         rotateX: 0, // Tilts forward to flat
//         transition: { 
//             type: "spring", 
//             stiffness: 70,
//             damping: 15
//         } 
//     }
// };


// const Testimonials = () => {
//     const reviews = [
//         {
//             quote: "Flavoriz is now my go-to for dinner ideas. The recipes are easy to follow, and the variety is incredible. I've become a much better cook!",
//             name: "Fatima K.",
//             rating: 5,
//         },
//         {
//             quote: "I love the dietary filters! As a vegan, finding quick and tasty recipes used to be a challenge, but Flavoriz makes it effortless.",
//             name: "Ahmed S.",
//             rating: 5,
//         },
//         {
//             quote: "The interface is beautiful and so easy to navigate. The Chicken Karahi recipe was a huge hit at my last family gathering. Highly recommend!",
//             name: "Maria A.",
//             rating: 5,
//         },
//     ];

//     // Function to render stars based on the rating number
//     const renderStars = (rating) => {
//         return (
//             <div className="flex justify-center mb-4">
//                 {[...Array(5)].map((_, i) => (
//                     <FaStar 
//                         key={i} 
//                         className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
//                     />
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <section className="bg-white py-16 sm:py-24">
//             <div className="container mx-auto px-4">
                
//                 {/* Section Title Animation */}
//                 <motion.h2 
//                     className="text-4xl font-extrabold text-gray-900 text-center mb-4"
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.5 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     What Our Community Says
//                 </motion.h2>
//                 <motion.p 
//                     className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true, amount: 0.5 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                     Trusted by thousands of home cooks around the world.
//                 </motion.p>

//                 {/* Testimonial Cards Grid (Container Animation) */}
//                 <motion.div 
//                     className="grid grid-cols-1 md:grid-cols-3 gap-8"
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible" // Triggers animation when section scrolls into view
//                     viewport={{ once: true, amount: 0.2 }}
//                 >
//                     {reviews.map((review, index) => (
//                         <motion.div 
//                             key={index} 
//                             className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-orange-500 flex flex-col items-center text-center hover:shadow-2xl transition duration-300 cursor-pointer"
//                             variants={itemVariants} // Apply the 3D Tilt animation
//                             whileHover={{ y: -5, rotateX: 5 }} // Slight lift and forward tilt on hover
//                         >
//                             {renderStars(review.rating)}
                            
//                             {/* Quote Body */}
//                             <blockquote className="italic text-gray-700 mb-6 flex-grow">
//                                 "{review.quote}"
//                             </blockquote>
                            
//                             {/* Reviewer Name */}
//                             <p className="text-lg font-semibold text-gray-900 mt-auto">
//                                 — {review.name}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Testimonials;

import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion'; 

// Variants for the container (the grid of testimonial cards)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Smooth, quick stagger
            delayChildren: 0.1     
        }
    }
};

// Variants for each individual testimonial card (Smooth Fade-Up)
const itemVariants = {
    hidden: { 
        opacity: 0, 
        y: 40, // Starts further below for a clearer move
    },
    visible: { 
        opacity: 1, 
        y: 0, // Slides smoothly to final position
        transition: { 
            duration: 0.7, // Longer duration for the smooth feel
            ease: "easeOut" // CRITICAL for non-bouncy, continuous motion
        } 
    }
};


const Testimonials = () => {
    const reviews = [
        {
            quote: "Flavoriz is now my go-to for dinner ideas. The recipes are easy to follow, and the variety is incredible. I've become a much better cook!",
            name: "Fatima K.",
            rating: 5,
        },
        {
            quote: "I love the dietary filters! As a vegan, finding quick and tasty recipes used to be a challenge, but Flavoriz makes it effortless.",
            name: "Ahmed S.",
            rating: 5,
        },
        {
            quote: "The interface is beautiful and so easy to navigate. The Chicken Karahi recipe was a huge hit at my last family gathering. Highly recommend!",
            name: "Maria A.",
            rating: 5,
        },
    ];

    // Function to render stars based on the rating number
    const renderStars = (rating) => {
        return (
            <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                    <FaStar 
                        key={i} 
                        className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    />
                ))}
            </div>
        );
    };

    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4">
                
                {/* Section Title Animation */}
                <motion.h2 
                    className="text-4xl font-extrabold text-gray-900 text-center mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    What Our Community Says
                </motion.h2>
                <motion.p 
                    className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Trusted by thousands of home cooks around the world.
                </motion.p>

                {/* Testimonial Cards Grid (Container Animation) */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible" // Triggers animation when section scrolls into view
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {reviews.map((review, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-orange-500 flex flex-col items-center text-center hover:shadow-2xl transition duration-300 cursor-pointer"
                            variants={itemVariants} // Apply the smooth fade-up animation
                            whileHover={{ y: -5 }} // Subtle lift on hover
                        >
                            {renderStars(review.rating)}
                            
                            {/* Quote Body */}
                            <blockquote className="italic text-gray-700 mb-6 flex-grow">
                                "{review.quote}"
                            </blockquote>
                            
                            {/* Reviewer Name */}
                            <p className="text-lg font-semibold text-gray-900 mt-auto">
                                — {review.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;