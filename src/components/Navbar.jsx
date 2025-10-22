// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaUtensils } from 'react-icons/fa'; 

// const Navbar = () => {
//     // Removed isOpen and toggleMenu as they are unused in this non-hamburger layout

//     // Helper function for NavLink class logic
//     const getNavLinkClasses = ({ isActive }) => {
//         // Base classes: Bold white text, transition, padding, large horizontal margin for separation
//         const baseClasses = 'font-bold text-white transition-all duration-300 ease-in-out px-3 py-2 rounded-lg mx-2';

//         // Hover effect: Background turns orange-700
//         const hoverClasses = 'hover:bg-orange-600';

//         // Active state: Background stays orange-700 (or orange-800 for slightly darker distinction)
//         const activeClasses = 'bg-orange-600 shadow-md';

//         return `${baseClasses} ${hoverClasses} ${isActive ? activeClasses : ''}`;
//     };

//     return (
//         // Changed to sticky and z-index for better visibility when scrolling
//         <nav className="bg-gradient-to-r from-orange-600 to-yellow-500 shadow-xl sticky top-0 z-40">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                
//                 {/* Logo with Icon */}
//                 <div className="text-2xl font-extrabold text-white flex items-center tracking-wide">
//                     {/* Icon color adjusted to yellow-200 for contrast on the orange background */}
//                     <FaUtensils className="mr-2 text-yellow-200 text-3xl" /> 
//                     <NavLink to="/" className="text-white hover:text-yellow-200">
//                         FLAVORIZ
//                     </NavLink>
//                 </div>

//                 {/* Responsive Menu (Desktop/Tablet) */}
//                 {/* Increased space-x for better gap between items */}
//                 <div className="flex space-x-2 items-center">
//                     <NavLink to="/" className={getNavLinkClasses}>
//                         Home
//                     </NavLink>
//                     <NavLink to="/recipes" className={getNavLinkClasses}>
//                         Recipes
//                     </NavLink>
//                     <NavLink to="/blog" className={getNavLinkClasses}>
//                         Blog
//                     </NavLink>
//                     <NavLink to="/contact" className={getNavLinkClasses}>
//                         Contact
//                     </NavLink>
//                 </div>
                
//                 {/* Search/User Icon (Optional addition for professional look) */}
//                 {/* <button className="text-white hover:text-yellow-200 transition duration-200 focus:outline-none">
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
//                 </button> */}
                
//             </div>
//             {/* Note: If you need mobile responsiveness (stacking links), you'll need to re-introduce the hamburger and conditional rendering (e.g., hidden md:flex) */}
//         </nav>
//     );
// };

// export default Navbar;


//add responsiveness
import React, { useState } from 'react'; // 👈 Re-introduced useState
import { NavLink } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa'; 
// Using basic SVG icons for Menu/X since lucide-react was removed
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
    // 👈 State for hamburger menu toggle
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Helper function for NavLink class logic (KEPT AS IS)
    const getNavLinkClasses = ({ isActive }) => {
        // Base classes: Bold white text, transition, padding, large horizontal margin for separation
        const baseClasses = 'font-bold text-white transition-all duration-300 ease-in-out px-3 py-2 rounded-lg mx-2';

        // Hover effect: Background turns orange-600
        const hoverClasses = 'hover:bg-orange-600';

        // Active state: Background stays orange-600
        const activeClasses = 'bg-orange-600 shadow-md';

        return `${baseClasses} ${hoverClasses} ${isActive ? activeClasses : ''}`;
    };

    // Helper for Mobile Link Classes (Adjusted for stacked look)
    const getMobileLinkClasses = ({ isActive }) => {
        const baseClasses = 'font-bold text-gray-800 block w-full py-2 px-4 rounded-lg transition-colors duration-300';
        const activeClasses = 'bg-orange-100 text-orange-600';
        const inactiveClasses = 'hover:bg-gray-100';

        return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    };

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Recipes', path: '/recipes' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        // Added 'relative' to the nav for mobile menu positioning
        <nav className="bg-gradient-to-r from-orange-600 to-yellow-500 shadow-xl sticky top-0 z-40 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                
                {/* Logo with Icon */}
                <div className="text-2xl font-extrabold text-white flex items-center tracking-wide">
                    <FaUtensils className="mr-2 text-yellow-200 text-3xl" /> 
                    <NavLink to="/" className="text-white hover:text-yellow-200">
                        FLAVORIZ
                    </NavLink>
                </div>

                {/* Desktop Menu (Hidden on mobile) */}
                <div className="hidden md:flex space-x-2 items-center">
                    {links.map((link) => (
                        <NavLink key={link.name} to={link.path} className={getNavLinkClasses}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Hamburger Button (Visible on mobile) */}
                <button
                    className="md:hidden text-white hover:text-yellow-200 transition duration-200 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {/* Icon updated based on state */}
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {/* Added transition and positioned absolutely for a nice fly-down effect */}
            <div
                className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
            >
                <div className="flex flex-col py-2 px-4 space-y-1">
                    {links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={getMobileLinkClasses}
                            onClick={toggleMenu} // Close menu when a link is clicked
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;