// // // // import React, { useState } from 'react';
// // // // import { NavLink } from 'react-router-dom'; // For navigation links

// // // // const Navbar = () => {
// // // //   const [isOpen, setIsOpen] = useState(false); // State for hamburger menu toggle

// // // //   const toggleMenu = () => {
// // // //     setIsOpen(!isOpen);
// // // //   };

// // // //   return (
// // // //     <nav className="bg-blue-600 text-white shadow-md">
// // // //       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
// // // //         {/* Logo */}
// // // //         <div className="text-2xl font-bold">
// // // //           <NavLink to="/" className="hover:text-gray-200">
// // // //             Recipe Generator
// // // //           </NavLink>
// // // //         </div>

// // // //         {/* Desktop Menu */}
// // // //         <div className="hidden md:flex space-x-6">
// // // //           <NavLink
// // // //             to="/"
// // // //             className={({ isActive }) =>
// // // //               isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200'
// // // //             }
// // // //           >
// // // //             Home
// // // //           </NavLink>
// // // //           <NavLink
// // // //             to="/search"
// // // //             className={({ isActive }) =>
// // // //               isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200'
// // // //             }
// // // //           >
// // // //             Search
// // // //           </NavLink>
// // // //           <NavLink
// // // //             to="/favorites"
// // // //             className={({ isActive }) =>
// // // //               isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200'
// // // //             }
// // // //           >
// // // //             Favorites
// // // //           </NavLink>
// // // //           <NavLink
// // // //             to="/about"
// // // //             className={({ isActive }) =>
// // // //               isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200'
// // // //             }
// // // //           >
// // // //             About
// // // //           </NavLink>
// // // //         </div>

// // // //         {/* Hamburger Button (Mobile) */}
// // // //         <button
// // // //           className="md:hidden focus:outline-none"
// // // //           onClick={toggleMenu}
// // // //           aria-label="Toggle menu"
// // // //         >
// // // //           <svg
// // // //             className="w-6 h-6"
// // // //             fill="none"
// // // //             stroke="currentColor"
// // // //             viewBox="0 0 24 24"
// // // //             xmlns="http://www.w3.org/2000/svg"
// // // //           >
// // // //             <path
// // // //               strokeLinecap="round"
// // // //               strokeLinejoin="round"
// // // //               strokeWidth="2"
// // // //               d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
// // // //             ></path>
// // // //           </svg>
// // // //         </button>
// // // //       </div>

// // // //       {/* Mobile Menu */}
// // // //       {isOpen && (
// // // //         <div className="md:hidden bg-blue-700">
// // // //           <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
// // // //             <NavLink
// // // //               to="/"
// // // //               className={({ isActive }) =>
// // // //                 isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200'
// // // //               }
// // // //               onClick={toggleMenu}
// // // //             >
// // // //               Home
// // // //             </NavLink>
// // // //             <NavLink
// // // //               to="/search"
// // // //               className={({ isActive }) =>
// // // //                 isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200'
// // // //               }
// // // //               onClick={toggleMenu}
// // // //             >
// // // //               Search
// // // //             </NavLink>
// // // //             <NavLink
// // // //               to="/favorites"
// // // //               className={({ isActive }) =>
// // // //                 isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200'
// // // //               }
// // // //               onClick={toggleMenu}
// // // //             >
// // // //               Favorites
// // // //             </NavLink>
// // // //             <NavLink
// // // //               to="/about"
// // // //               className={({ isActive }) =>
// // // //                 isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200'
// // // //               }
// // // //               onClick={toggleMenu}
// // // //             >
// // // //               About
// // // //             </NavLink>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // };


// // // // export default Navbar;

// // // import React, { useState } from 'react';
// // // import { NavLink } from 'react-router-dom';

// // // const Navbar = () => {
// // //   const [isOpen, setIsOpen] = useState(false); // State for hamburger menu toggle

// // //   const toggleMenu = () => {
// // //     setIsOpen(!isOpen);
// // //   };

// // //   return (
// // //     <nav className="bg-white shadow-md relative">
// // //       {/* Top Gradient Separator */}
// // //       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>

// // //       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
// // //         {/* Logo */}
// // //         <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500">
// // //           <NavLink to="/" className="hover:text-yellow-400">
// // //             FLAVORIZ
// // //           </NavLink>
// // //         </div>

// // //         {/* Desktop Menu */}
// // //         <div className="hidden md:flex space-x-6 items-center">
// // //           <NavLink
// // //             to="/"
// // //             className={({ isActive }) =>
// // //               isActive
// // //                 ? 'text-orange-600 font-semibold border-b-2 border-orange-600'
// // //                 : 'text-gray-700 hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-transparent'
// // //             }
// // //             style={{ transition: 'all 0.3s ease' }}
// // //           >
// // //             Home
// // //           </NavLink>
// // //           <NavLink
// // //             to="/recipes"
// // //             className={({ isActive }) =>
// // //               isActive
// // //                 ? 'text-orange-600 font-semibold border-b-2 border-orange-600'
// // //                 : 'text-gray-700 hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-transparent'
// // //             }
// // //             style={{ transition: 'all 0.3s ease' }}
// // //           >
// // //             Recipes
// // //           </NavLink>
// // //           <NavLink
// // //             to="/blog"
// // //             className={({ isActive }) =>
// // //               isActive
// // //                 ? 'text-orange-600 font-semibold border-b-2 border-orange-600'
// // //                 : 'text-gray-700 hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-transparent'
// // //             }
// // //             style={{ transition: 'all 0.3s ease' }}
// // //           >
// // //             Blog
// // //           </NavLink>
// // //           <NavLink
// // //             to="/contact"
// // //             className={({ isActive }) =>
// // //               isActive
// // //                 ? 'text-orange-600 font-semibold border-b-2 border-orange-600'
// // //                 : 'text-gray-700 hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-transparent'
// // //             }
// // //             style={{ transition: 'all 0.3s ease' }}
// // //           >
// // //             Contact
// // //           </NavLink>
// // //         </div>

// // //         {/* Search Icon (Desktop) */}
// // //         <div className="hidden md:block">
// // //           <button className="text-gray-600 hover:text-orange-600 focus:outline-none">
// // //             <svg
// // //               className="w-6 h-6"
// // //               fill="none"
// // //               stroke="currentColor"
// // //               viewBox="0 0 24 24"
// // //               xmlns="http://www.w3.org/2000/svg"
// // //             >
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 strokeWidth="2"
// // //                 d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"
// // //               ></path>
// // //             </svg>
// // //           </button>
// // //         </div>

// // //         {/* Hamburger Button (Mobile) */}
// // //         <button
// // //           className="md:hidden focus:outline-none"
// // //           onClick={toggleMenu}
// // //           aria-label="Toggle menu"
// // //         >
// // //           <svg
// // //             className="w-6 h-6 text-gray-600"
// // //             fill="none"
// // //             stroke="currentColor"
// // //             viewBox="0 0 24 24"
// // //             xmlns="http://www.w3.org/2000/svg"
// // //           >
// // //             <path
// // //               strokeLinecap="round"
// // //               strokeLinejoin="round"
// // //               strokeWidth="2"
// // //               d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
// // //             ></path>
// // //           </svg>
// // //         </button>
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       {isOpen && (
// // //         <div className="md:hidden bg-white shadow-md">
// // //           <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
// // //             <NavLink
// // //               to="/"
// // //               className={({ isActive }) =>
// // //                 isActive
// // //                   ? 'text-orange-600 font-semibold border-b-2 border-orange-600'
// // //                   : 'text-gray-700 hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-transparent'
// // //               }
// // //               onClick={toggleMenu}
// // //               style={{ transition: 'all 0.3s ease' }}
// // //             >
// // //               Home
// // //             </NavLink>
// // //             <NavLink
// // //               to="/recipes"
// // //               className={({ isActive }) =>
// // //                 isActive
// // //                   ? 'text-orange-600 font-semibold border-b-2 border-orange-600'
// // //                   : 'text-gray-700 hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-transparent'
// // //               }
// // //               onClick={toggleMenu}
// // //               style={{ transition: 'all 0.3s ease' }}
// // //             >
// // //               Recipes
// // //             </NavLink>
// // //             <NavLink
// // //               to="/blog"
// // //               className={({ isActive }) =>
// // //                 isActive
// // //                   ? 'text-orange-600 font-semibold border-b-2 border-orange-600'
// // //                   : 'text-gray-700 hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-transparent'
// // //               }
// // //               onClick={toggleMenu}
// // //               style={{ transition: 'all 0.3s ease' }}
// // //             >
// // //               Blog
// // //             </NavLink>
// // //             <NavLink
// // //               to="/contact"
// // //               className={({ isActive }) =>
// // //                 isActive
// // //                   ? 'text-orange-600 font-semibold border-b-2 border-orange-600'
// // //                   : 'text-gray-700 hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-transparent'
// // //               }
// // //               onClick={toggleMenu}
// // //               style={{ transition: 'all 0.3s ease' }}
// // //             >
// // //               Contact
// // //             </NavLink>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;



// // import React, { useState } from 'react';
// // import { NavLink } from 'react-router-dom';
// // import { FaUtensils } from 'react-icons/fa'; // Import the icon

// // const Navbar = () => {
// //     const [isOpen, setIsOpen] = useState(false); // State for hamburger menu toggle

// //     const toggleMenu = () => {
// //         setIsOpen(!isOpen);
// //     };

// //     return (
// //         <nav className="bg-white shadow-md ">
// //             <div className="container mx-auto px-4 py-5 flex items-center justify-between">
                
// //                 {/* Logo */}
// //                 <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500">
                    
// //                     <NavLink to="/" className="hover:text-yellow-400">
// //                         FLAVORIZ
// //                     </NavLink>
// //                 </div>

// //                 {/* Desktop Menu */}
// //                 <div className="hidden md:flex space-x-6 items-center">
// //   <NavLink
// //     to="/"
// //     className={({ isActive }) =>
// //       isActive
// //         ? 'text-white font-bold bg-orange-600 rounded-md px-3 py-1'
// //         : 'text-black hover:text-orange-600'
// //     }
// //     style={{ transition: 'all 0.3s ease' }}
// //   >
// //     Home
// //   </NavLink>
// //   <NavLink
// //     to="/recipes"
// //     className={({ isActive }) =>
// //       isActive
// //         ? 'text-white font-bold bg-orange-600 rounded-md px-3 py-1'
// //         : 'text-black hover:text-orange-600'
// //     }
// //     style={{ transition: 'all 0.3s ease' }}
// //   >
// //     Recipes
// //   </NavLink>
// //   <NavLink
// //     to="/blog"
// //     className={({ isActive }) =>
// //       isActive
// //         ? 'text-white font-bold bg-orange-600 rounded-md px-3 py-1'
// //         : 'text-gray-700 hover:text-orange-600'
// //     }
// //     style={{ transition: 'all 0.3s ease' }}
// //   >
// //     Blog
// //   </NavLink>
// //   <NavLink
// //     to="/contact"
// //     className={({ isActive }) =>
// //       isActive
// //         ? 'text-white font-bold bg-orange-600 rounded-md px-3 py-1'
// //         : 'text-gray-700 hover:text-orange-600'
// //     }
// //     style={{ transition: 'all 0.3s ease' }}
// //   >
// //     Contact
// //   </NavLink>
// // </div>
// //                 {/* Search Icon (Desktop) */}
// //                 <div className="hidden md:block">
// //                     <button className="text-gray-600 hover:text-orange-600 focus:outline-none">
// //                         <svg
// //                             className="w-6 h-6"
// //                             fill="none"
// //                             stroke="currentColor"
// //                             viewBox="0 0 24 24"
// //                             xmlns="http://www.w3.org/2000/svg"
// //                         >
// //                             <path
// //                                 strokeLinecap="round"
// //                                 strokeLinejoin="round"
// //                                 strokeWidth="2"
// //                                 d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"
// //                             ></path>
// //                         </svg>
// //                     </button>
// //                 </div>

// //                 {/* Hamburger Button (Mobile) */}
// //                 <button
// //                     className="md:hidden focus:outline-none"
// //                     onClick={toggleMenu}
// //                     aria-label="Toggle menu"
// //                 >
// //                     <svg
// //                         className="w-6 h-6 text-gray-600"
// //                         fill="none"
// //                         stroke="currentColor"
// //                         viewBox="0 0 24 24"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                     >
// //                         <path
// //                             strokeLinecap="round"
// //                             strokeLinejoin="round"
// //                             strokeWidth="2"
// //                             d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
// //                         ></path>
// //                     </svg>
// //                 </button>
// //             </div>

// //             {/* Mobile Menu */}
// //             {isOpen && (
// //                 <div className="md:hidden bg-white shadow-md">
// //                     <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
// //                         <NavLink
// //                             to="/"
// //                             className={({ isActive }) =>
// //                                 isActive
// //                                     ? 'text-orange-600 font-semibold'
// //                                     : 'text-gray-700 hover:text-orange-600'
// //                             }
// //                             onClick={toggleMenu}
// //                             style={{ transition: 'all 0.3s ease' }}
// //                         >
// //                             Home
// //                         </NavLink>
// //                         <NavLink
// //                             to="/recipes"
// //                             className={({ isActive }) =>
// //                                 isActive
// //                                     ? 'text-orange-600 font-semibold'
// //                                     : 'text-gray-700 hover:text-orange-600'
// //                             }
// //                             onClick={toggleMenu}
// //                             style={{ transition: 'all 0.3s ease' }}
// //                         >
// //                             Recipes
// //                         </NavLink>
// //                         <NavLink
// //                             to="/blog"
// //                             className={({ isActive }) =>
// //                                 isActive
// //                                     ? 'text-orange-600 font-semibold'
// //                                     : 'text-gray-700 hover:text-orange-600'
// //                             }
// //                             onClick={toggleMenu}
// //                             style={{ transition: 'all 0.3s ease' }}
// //                         >
// //                             Blog
// //                         </NavLink>
// //                         <NavLink
// //                             to="/contact"
// //                             className={({ isActive }) =>
// //                                 isActive
// //                                     ? 'text-orange-600 font-semibold'
// //                                     : 'text-gray-700 hover:text-orange-600'
// //                             }
// //                             onClick={toggleMenu}
// //                             style={{ transition: 'all 0.3s ease' }}
// //                         >
// //                             Contact
// //                         </NavLink>
// //                     </div>
// //                 </div>
// //             )}
// //         </nav>
// //     );
// // };

// // export default Navbar;


// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaUtensils } from 'react-icons/fa'; // Fallback recipe-related icon

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false); // State retained for potential future use

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="bg-gradient-to-r from-orange-600 to-yellow-500  shadow-md">
//             <div className="container mx-auto px-4 py-5 flex items-center justify-between">
                
//                 {/* Logo with Icon */}
//                 <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500 flex items-center">
//                     <FaUtensils className="mr-2 text-yellow-500" />
//                     <NavLink to="/" className="hover:text-yellow-400">
//                         FLAVORIZ
//                     </NavLink>
//                 </div>

//                 {/* Responsive Menu (No Hamburger) */}
//                 <div className="flex space-x-4 items-center">
//                     <NavLink
//                         to="/"
//                         className={({ isActive }) =>
//                             isActive
//                                 ? 'text-white font-bold bg-orange-600 rounded-md px-3 py-1'
//                                 : 'text-white '
//                         }
//                         style={{ transition: 'all 0.3s ease' }}
//                     >
//                         Home
//                     </NavLink>
//                     <NavLink
//                         to="/recipes"
//                         className={({ isActive }) =>
//                             isActive
//                                 ? 'text-white font-bold bg-orange-600 rounded-md px-3 py-1'
//                                 : 'text-white'
//                         }
//                         style={{ transition: 'all 0.3s ease' }}
//                     >
//                         Recipes
//                     </NavLink>
//                     <NavLink
//                         to="/blog"
//                         className={({ isActive }) =>
//                             isActive
//                                 ? 'text-white font-bold bg-orange-600 rounded-md px-3 py-1'
//                                 : 'text-white'
//                         }
//                         style={{ transition: 'all 0.3s ease' }}
//                     >
//                         Blog
//                     </NavLink>
//                     <NavLink
//                         to="/contact"
//                         className={({ isActive }) =>
//                             isActive
//                                 ? 'text-white font-bold bg-orange-600 rounded-md px-3 py-1'
//                                 : 'text-white'
//                         }
//                         style={{ transition: 'all 0.3s ease' }}
//                     >
//                         Contact
//                     </NavLink>
//                 </div>

               
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa'; 

const Navbar = () => {
    // Removed isOpen and toggleMenu as they are unused in this non-hamburger layout

    // Helper function for NavLink class logic
    const getNavLinkClasses = ({ isActive }) => {
        // Base classes: Bold white text, transition, padding, large horizontal margin for separation
        const baseClasses = 'font-bold text-white transition-all duration-300 ease-in-out px-3 py-2 rounded-lg mx-2';

        // Hover effect: Background turns orange-700
        const hoverClasses = 'hover:bg-orange-600';

        // Active state: Background stays orange-700 (or orange-800 for slightly darker distinction)
        const activeClasses = 'bg-orange-600 shadow-md';

        return `${baseClasses} ${hoverClasses} ${isActive ? activeClasses : ''}`;
    };

    return (
        // Changed to sticky and z-index for better visibility when scrolling
        <nav className="bg-gradient-to-r from-orange-600 to-yellow-500 shadow-xl sticky top-0 z-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                
                {/* Logo with Icon */}
                <div className="text-2xl font-extrabold text-white flex items-center tracking-wide">
                    {/* Icon color adjusted to yellow-200 for contrast on the orange background */}
                    <FaUtensils className="mr-2 text-yellow-200 text-3xl" /> 
                    <NavLink to="/" className="text-white hover:text-yellow-200">
                        FLAVORIZ
                    </NavLink>
                </div>

                {/* Responsive Menu (Desktop/Tablet) */}
                {/* Increased space-x for better gap between items */}
                <div className="flex space-x-2 items-center">
                    <NavLink to="/" className={getNavLinkClasses}>
                        Home
                    </NavLink>
                    <NavLink to="/recipes" className={getNavLinkClasses}>
                        Recipes
                    </NavLink>
                    <NavLink to="/blog" className={getNavLinkClasses}>
                        Blog
                    </NavLink>
                    <NavLink to="/contact" className={getNavLinkClasses}>
                        Contact
                    </NavLink>
                </div>
                
                {/* Search/User Icon (Optional addition for professional look) */}
                {/* <button className="text-white hover:text-yellow-200 transition duration-200 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button> */}
                
            </div>
            {/* Note: If you need mobile responsiveness (stacking links), you'll need to re-introduce the hamburger and conditional rendering (e.g., hidden md:flex) */}
        </nav>
    );
};

export default Navbar;