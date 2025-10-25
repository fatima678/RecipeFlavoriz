// import React from 'react';

// const NewsletterCTA = () => {
//     return (
//         <section className="bg-gray-800 py-16">
//             <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
//                 <div className="text-center lg:text-left lg:w-1/2">
//                     <h2 className="text-3xl font-bold text-white mb-2">
//                         Never Miss a New Flavor! 🌶️
//                     </h2>
//                     <p className="text-gray-400 text-lg">
//                         Join the Flavoriz community for exclusive recipes, cooking tips, and weekly menu ideas.
//                     </p>
//                 </div>
//                 <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
//                     <form className="flex w-full max-w-lg space-x-3">
//                         <input
//                             type="email"
//                             placeholder="Enter your email address"
//                             className="flex-grow p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-700 text-white"
//                             required
//                         />
//                         <button
//                             type="submit"
//                             className="flex-shrink-0 bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 transition duration-300 shadow-md"
//                         >
//                             Subscribe
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default NewsletterCTA;


import React from 'react';
import { motion } from 'framer-motion'; // 👈 Import framer-motion

// Variants for the entire CTA container block (fades and scales up slightly)
const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
            duration: 0.6, 
            ease: "easeOut",
            when: "beforeChildren", // Wait for the container to finish before starting children
        } 
    }
};

// Variants for the individual text/form elements (slide and fade)
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.5,
            ease: "easeOut" 
        } 
    }
};

const NewsletterCTA = () => {
    return (
        // Apply animation to the main section tag
        <motion.section 
            className="bg-gray-800 py-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible" // Animate when it scrolls into view
            viewport={{ once: true, amount: 0.4 }} // Animate once, when 40% visible
        >
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
                
                {/* Text Section (Animated separately) */}
                <div className="text-center lg:text-left lg:w-1/2">
                    <motion.h2 
                        className="text-3xl font-bold text-white mb-2"
                        variants={itemVariants} // Apply slide-up
                        transition={{ delay: 0.2 }} // Delay slightly after section scales in
                    >
                        Never Miss a New Flavor! 🌶️
                    </motion.h2>
                    <motion.p 
                        className="text-gray-400 text-lg"
                        variants={itemVariants} // Apply slide-up
                        transition={{ delay: 0.35 }} // Delay further
                    >
                        Join the Flavoriz community for exclusive recipes, cooking tips, and weekly menu ideas.
                    </motion.p>
                </div>

                {/* Form Section (Animated separately) */}
                <motion.div 
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                    initial={{ opacity: 0, x: 50 }} // Start slid over to the right
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }} // Longer delay for the final element
                    viewport={{ once: true }}
                >
                    <form className="flex w-full max-w-lg space-x-3">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-grow p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-700 text-white"
                            required
                        />
                        <button
                            type="submit"
                            className="flex-shrink-0 bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 transition duration-300 shadow-md"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default NewsletterCTA;