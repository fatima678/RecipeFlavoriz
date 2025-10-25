// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUtensils } from 'react-icons/fa';

// const Footer = () => {
//     return (
//         // Footer Wrapper: Dark gray background for contrast, padding, and subtle shadow.
//         <footer className="bg-gray-800 text-white pt-12 pb-8 shadow-2xl">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
//                 {/* Main Grid: 4 columns on large screens, stacks on small screens */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-10 border-b border-gray-700 pb-8">
                    
//                     {/* Column 1: Logo & Mission Statement */}
//                     <div className="col-span-2 md:col-span-1 pr-6">
//                         <div className="text-2xl font-extrabold text-orange-500 flex items-center mb-4 tracking-wide">
//                             <FaUtensils className="mr-2 text-yellow-200 text-3xl" /> 
//                             FLAVORIZ
//                         </div>
//                         <p className="text-gray-400 text-sm">
//                             Your dedicated guide to culinary discovery. We craft recipes and tools that make cooking effortless and enjoyable for everyone.
//                         </p>
//                     </div>

//                     {/* Column 2: Quick Links */}
//                     <div>
//                         <h3 className="text-lg font-bold mb-4 text-orange-400">Quick Links</h3>
//                         <ul className="space-y-2 text-sm">
//                             <li><Link to="/" className="text-gray-400 hover:text-orange-300 transition duration-200">Home</Link></li>
//                             <li><Link to="/recipes" className="text-gray-400 hover:text-orange-300 transition duration-200">Recipes</Link></li>
//                             <li><Link to="/categories" className="text-gray-400 hover:text-orange-300 transition duration-200">Categories</Link></li>
//                             <li><Link to="/blog" className="text-gray-400 hover:text-orange-300 transition duration-200">Blog</Link></li>
//                         </ul>
//                     </div>

//                     {/* Column 3: Support & Legal */}
//                     <div>
//                         <h3 className="text-lg font-bold mb-4 text-orange-400">Support</h3>
//                         <ul className="space-y-2 text-sm">
//                             <li><Link to="/contact" className="text-gray-400 hover:text-orange-300 transition duration-200">Contact Us</Link></li>
//                             <li><Link to="/privacy" className="text-gray-400 hover:text-orange-300 transition duration-200">Privacy Policy</Link></li>
//                             <li><Link to="/terms" className="text-gray-400 hover:text-orange-300 transition duration-200">Terms of Service</Link></li>
//                             <li><Link to="/faq" className="text-gray-400 hover:text-orange-300 transition duration-200">FAQ</Link></li>
//                         </ul>
//                     </div>

//                     {/* Column 4: Contact Info & Socials */}
//                     <div>
//                         <h3 className="text-lg font-bold mb-4 text-orange-400">Get In Touch</h3>
//                         <ul className="space-y-2 text-sm">
//                             <li className="flex items-center text-gray-400">
//                                 <FaEnvelope className="mr-2 text-orange-500" />
//                                 <a href="mailto:support@flavoriz.com" className="hover:text-orange-300">support@flavoriz.com</a>
//                             </li>
//                             <li className="flex items-center text-gray-400">
//                                 <FaPhone className="mr-2 text-orange-500" />
//                                 <a href="tel:+1234567890" className="hover:text-orange-300">+1 234 567 890</a>
//                             </li>
//                             <li className="flex items-start text-gray-400">
//                                 <FaMapMarkerAlt className="mr-2 mt-1 text-orange-500 flex-shrink-0" />
//                                 <span>123 Food Street, Culinary City, PK</span>
//                             </li>
//                         </ul>

//                         {/* Social Icons */}
//                         <div className="flex space-x-4 mt-6">
//                             <a href="https://facebook.com" className="text-gray-400 hover:text-orange-500 transition duration-200"><FaFacebook size={20} /></a>
//                             <a href="https://twitter.com" className="text-gray-400 hover:text-orange-500 transition duration-200"><FaTwitter size={20} /></a>
//                             <a href="https://instagram.com" className="text-gray-400 hover:text-orange-500 transition duration-200"><FaInstagram size={20} /></a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Copyright Section */}
//                 <div className="text-center text-gray-500 text-sm pt-4">
//                     &copy; {new Date().getFullYear()} FLAVORIZ. All rights reserved.
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUtensils } from 'react-icons/fa';
import { motion } from 'framer-motion'; // 👈 Import framer-motion

// Variants for the entire Footer block
const footerVariants = {
    hidden: { opacity: 0, y: 30 }, // Start below and invisible
    visible: { 
        opacity: 1, 
        y: 0, // Slide up to final position
        transition: { 
            duration: 0.8, 
            ease: "easeOut" // Smooth, non-bouncy transition
        } 
    }
};

const Footer = () => {
    return (
        // Apply animation to the footer tag
        <motion.footer 
            className="bg-gray-800 text-white pt-12 pb-8 shadow-2xl"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible" // Animate when the footer scrolls into view
            viewport={{ once: true, amount: 0.2 }} // Animate once, when 20% of the footer is visible
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Grid: 4 columns on large screens, stacks on small screens */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-10 border-b border-gray-700 pb-8">
                    
                    {/* Column 1: Logo & Mission Statement */}
                    <div className="col-span-2 md:col-span-1 pr-6">
                        <div className="text-2xl font-extrabold text-orange-500 flex items-center mb-4 tracking-wide">
                            <FaUtensils className="mr-2 text-yellow-200 text-3xl" /> 
                            FLAVORIZ
                        </div>
                        <p className="text-gray-400 text-sm">
                            Your dedicated guide to culinary discovery. We craft recipes and tools that make cooking effortless and enjoyable for everyone.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-orange-400">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="text-gray-400 hover:text-orange-300 transition duration-200">Home</Link></li>
                            <li><Link to="/recipes" className="text-gray-400 hover:text-orange-300 transition duration-200">Recipes</Link></li>
                            <li><Link to="/categories" className="text-gray-400 hover:text-orange-300 transition duration-200">Categories</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-orange-300 transition duration-200">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Support & Legal */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-orange-400">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/contact" className="text-gray-400 hover:text-orange-300 transition duration-200">Contact Us</Link></li>
                            <li><Link to="/privacy" className="text-gray-400 hover:text-orange-300 transition duration-200">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-400 hover:text-orange-300 transition duration-200">Terms of Service</Link></li>
                            <li><Link to="/faq" className="text-gray-400 hover:text-orange-300 transition duration-200">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info & Socials */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-orange-400">Get In Touch</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center text-gray-400">
                                <FaEnvelope className="mr-2 text-orange-500" />
                                <a href="mailto:support@flavoriz.com" className="hover:text-orange-300">support@flavoriz.com</a>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FaPhone className="mr-2 text-orange-500" />
                                <a href="tel:+1234567890" className="hover:text-orange-300">+1 234 567 890</a>
                            </li>
                            <li className="flex items-start text-gray-400">
                                <FaMapMarkerAlt className="mr-2 mt-1 text-orange-500 flex-shrink-0" />
                                <span>123 Food Street, Culinary City, PK</span>
                            </li>
                        </ul>

                        {/* Social Icons (Enhanced with hover animation) */}
                        <div className="flex space-x-4 mt-6">
                            <motion.a 
                                href="https://facebook.com" 
                                className="text-gray-400 hover:text-orange-500 transition duration-200"
                                whileHover={{ scale: 1.2, color: '#f97316' }} // Pop on hover
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <FaFacebook size={20} />
                            </motion.a>
                            <motion.a 
                                href="https://twitter.com" 
                                className="text-gray-400 hover:text-orange-500 transition duration-200"
                                whileHover={{ scale: 1.2, color: '#f97316' }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <FaTwitter size={20} />
                            </motion.a>
                            <motion.a 
                                href="https://instagram.com" 
                                className="text-gray-400 hover:text-orange-500 transition duration-200"
                                whileHover={{ scale: 1.2, color: '#f97316' }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <FaInstagram size={20} />
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center text-gray-500 text-sm pt-4">
                    &copy; {new Date().getFullYear()} FLAVORIZ. All rights reserved.
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;