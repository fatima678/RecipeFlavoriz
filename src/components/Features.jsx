// import React from 'react';
// import { FaGlobe, FaClock, FaFilter } from 'react-icons/fa'; 
// // Install react-icons if you haven't: npm install react-icons

// const Features = () => {
//     const features = [
//         { icon: FaGlobe, title: 'Global Flavors', description: 'Explore authentic recipes from around the world.' },
//         { icon: FaClock, title: 'Quick & Easy', description: 'Find recipes that fit your busy schedule in 30 minutes or less.' },
//         { icon: FaFilter, title: 'Dietary Filters', description: 'Easily filter by Vegan, Keto, Gluten-Free, and more.' },
//     ];

//     return (
//         <section className="bg-white py-16">
//             <div className="container mx-auto px-4 text-center">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-12">Cook Smarter, Not Harder</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                     {features.map((feature, index) => (
//                         <div key={index} className="p-6 rounded-xl shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition duration-300">
//                             <feature.icon className="text-5xl text-orange-600 mx-auto mb-4" />
//                             <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
//                             <p className="text-gray-600">{feature.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Features;


import React from 'react';
import { FaGlobe, FaClock, FaFilter } from 'react-icons/fa'; 
import { motion } from 'framer-motion'; // 👈 Import framer-motion

// Variants for the container (the grid of feature cards)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between each feature card animation
            delayChildren: 0.1     // Delay before the first child starts
        }
    }
};

// Variants for each individual feature card (Pop-in/Fade-up)
const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.85 }, // Starts slightly low, small, and invisible
    visible: { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        transition: { 
            type: "spring", // Use spring physics for a quick, impactful feel
            stiffness: 150,
            damping: 12
        } 
    }
};

const Features = () => {
    const features = [
        { icon: FaGlobe, title: 'Global Flavors', description: 'Explore authentic recipes from around the world.' },
        { icon: FaClock, title: 'Quick & Easy', description: 'Find recipes that fit your busy schedule in 30 minutes or less.' },
        { icon: FaFilter, title: 'Dietary Filters', description: 'Easily filter by Vegan, Keto, Gluten-Free, and more.' },
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
                
                {/* Title Animation */}
                <motion.h2 
                    className="text-3xl font-bold text-gray-900 mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }} // Animate when 50% of the title is visible
                    transition={{ duration: 0.5 }}
                >
                    Cook Smarter, Not Harder
                </motion.h2>

                {/* Grid Container Animation */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible" // Triggers animation when section scrolls into view
                    viewport={{ once: true, amount: 0.2 }} // Animate once, when 20% of the component is visible
                >
                    {features.map((feature, index) => (
                        // Individual Feature Card Animation
                        <motion.div 
                            key={index} 
                            className="p-6 rounded-xl shadow-lg border-t-4 border-orange-500 hover:shadow-2xl transition duration-300 cursor-pointer"
                            variants={itemVariants}
                            // Optional: Add a subtle hover interaction for extra professionalism
                            whileHover={{ y: -5 }} 
                        >
                            {/* Icon Animation (Optional: animate the icon slightly later) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }} // Staggered icon animation
                                className="mx-auto mb-4"
                            >
                                <feature.icon className="text-5xl text-orange-600" />
                            </motion.div>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;