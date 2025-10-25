// import React from 'react';
// import { FaCalendarAlt, FaUser } from 'react-icons/fa';

// const Blog = () => {
//     // Mock data for blog posts (replace with real data from an API or CMS later)
//     const blogPosts = [
//         {
//             id: 1,
//             title: "Mastering the Art of Spice Blending at Home",
//             excerpt: "Learn the secrets to creating perfectly balanced spice blends for Pakistani and Indian cuisine. A must-read for serious home cooks.",
//             category: "Cooking Tips",
//             date: "Oct 20, 2025",
//             author: "Fatima Zahra",
//             image: "https://via.placeholder.com/600x400/FF7043/FFFFFF?text=Spice+Blending",
//         },
//         {
//             id: 2,
//             title: "5 Quick Weeknight Meals Under 30 Minutes",
//             excerpt: "Need dinner fast? We've gathered five delicious, easy recipes that go from pantry to plate in half an hour or less.",
//             category: "Quick Recipes",
//             date: "Oct 15, 2025",
//             author: "Ahmed Khan",
//             image: "https://via.placeholder.com/600x400/4CAF50/FFFFFF?text=Weeknight+Meals",
//         },
//         {
//             id: 3,
//             title: "Interview with Chef Amir: The Future of Fusion Cuisine",
//             excerpt: "We sit down with renowned chef Amir to discuss balancing traditional techniques with modern, global flavors.",
//             category: "Interviews",
//             date: "Oct 10, 2025",
//             author: "Maria Ali",
//             image: "https://via.placeholder.com/600x400/2196F3/FFFFFF?text=Chef+Interview",
//         },
//         {
//             id: 4,
//             title: "Essential Kitchen Gadgets for the Modern Cook",
//             excerpt: "Upgrade your kitchen with these must-have tools that make prep work easier and more fun.",
//             category: "Reviews",
//             date: "Oct 5, 2025",
//             author: "Fatima Zahra",
//             image: "https://via.placeholder.com/600x400/9C27B0/FFFFFF?text=Kitchen+Gadgets",
//         },
//     ];

//     // The first post is often highlighted as the featured article
//     const featuredPost = blogPosts[0];
//     const recentPosts = blogPosts.slice(1);

//     return (
//         <div className="bg-gray-50 min-h-screen py-16">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
//                 {/* --- Blog Header --- */}
//                 <header className="text-center mb-16 pt-8">
//                     <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
//                         Flavoriz Blog
//                     </h1>
//                     <p className="text-xl text-gray-600">
//                         Tips, tricks, reviews, and culinary inspiration for every home cook.
//                     </p>
//                 </header>

//                 {/* --- Featured Post Section --- */}
//                 <section className="mb-20">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2 max-w-lg mx-auto lg:mx-0">
//                         Featured Article
//                     </h2>
//                     <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row transition duration-500 hover:shadow-3xl">
                        
//                         {/* Featured Image */}
//                         <div className="lg:w-2/5 flex-shrink-0">
//                             <img
//                                 src={featuredPost.image}
//                                 alt={featuredPost.title}
//                                 className="w-full h-80 object-cover"
//                             />
//                         </div>

//                         {/* Featured Content */}
//                         <div className="lg:w-3/5 p-8 flex flex-col justify-center">
//                             <span className="text-sm font-semibold uppercase text-orange-600 mb-2 tracking-wider">
//                                 {featuredPost.category}
//                             </span>
//                             <h3 className="text-4xl font-extrabold text-gray-900 mb-4 hover:text-orange-700 transition duration-300 cursor-pointer">
//                                 {featuredPost.title}
//                             </h3>
//                             <div className="flex items-center space-x-4 text-gray-500 text-sm mb-6">
//                                 <span className="flex items-center">
//                                     <FaCalendarAlt className="mr-2 text-orange-500" /> {featuredPost.date}
//                                 </span>
//                                 <span className="flex items-center">
//                                     <FaUser className="mr-2 text-orange-500" /> {featuredPost.author}
//                                 </span>
//                             </div>
//                             <p className="text-gray-700 text-lg mb-8 leading-relaxed">
//                                 {featuredPost.excerpt}
//                             </p>
//                             <a
//                                 href={`/blog/${featuredPost.id}`} // Link to the full article
//                                 className="inline-block bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg self-start hover:bg-orange-600 transition duration-300"
//                             >
//                                 Read Full Article
//                             </a>
//                         </div>
//                     </div>
//                 </section>

//                 {/* --- Recent Posts Grid --- */}
//                 <section>
//                     <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-300 pb-2">
//                         Recent Articles
//                     </h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//                         {recentPosts.map((post) => (
//                             <a 
//                                 key={post.id} 
//                                 href={`/blog/${post.id}`} 
//                                 className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
//                             >
//                                 <img
//                                     src={post.image}
//                                     alt={post.title}
//                                     className="w-full h-48 object-cover"
//                                 />
//                                 <div className="p-6">
//                                     <span className="text-xs font-semibold uppercase text-orange-600 mb-2 tracking-wider">
//                                         {post.category}
//                                     </span>
//                                     <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-700 transition duration-300">
//                                         {post.title}
//                                     </h3>
//                                     <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
//                                     <div className="flex items-center space-x-4 text-gray-500 text-xs">
//                                         <span className="flex items-center">
//                                             <FaCalendarAlt className="mr-1 text-orange-500" /> {post.date}
//                                         </span>
//                                         <span className="flex items-center">
//                                             <FaUser className="mr-1 text-orange-500" /> {post.author}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </a>
//                         ))}
//                     </div>
//                 </section>

//             </div>
//         </div>
//     );
// };

// export default Blog;


import React from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

// 1. IMPORT YOUR REAL IMAGES HERE
// ----------------------------------------------------------------------
import spiceImage from '../assets/biryanii.jpg';    // Example Name 1
import quickMealImage from '../assets/dessertt.jpg'; // Example Name 2
import chefInterviewImage from '../assets/halem.jpg'; // Example Name 3
import gadgetImage from '../assets/mutton.jpg'; // Example Name 4
// ----------------------------------------------------------------------


const Blog = () => {
    // Mock data for blog posts (using imported images)
    const blogPosts = [
        {
            id: 1,
            title: "Mastering the Art of Spice Blending at Home",
            excerpt: "Learn the secrets to creating perfectly balanced spice blends for Pakistani and Indian cuisine. A must-read for serious home cooks.",
            category: "Cooking Tips",
            date: "Oct 20, 2025",
            author: "Fatima Zahra",
            image: spiceImage, // 👈 USE THE IMPORTED VARIABLE
        },
        {
            id: 2,
            title: "5 Quick Weeknight Meals Under 30 Minutes",
            excerpt: "Need dinner fast? We've gathered five delicious, easy recipes that go from pantry to plate in half an hour or less.",
            category: "Quick Recipes",
            date: "Oct 15, 2025",
            author: "Ahmed Khan",
            image: quickMealImage, // 👈 USE THE IMPORTED VARIABLE
        },
        {
            id: 3,
            title: "Interview with Chef Amir: The Future of Fusion Cuisine",
            excerpt: "We sit down with renowned chef Amir to discuss balancing traditional techniques with modern, global flavors.",
            category: "Interviews",
            date: "Oct 10, 2025",
            author: "Maria Ali",
            image: chefInterviewImage, // 👈 USE THE IMPORTED VARIABLE
        },
        {
            id: 4,
            title: "Essential Kitchen Gadgets for the Modern Cook",
            excerpt: "Upgrade your kitchen with these must-have tools that make prep work easier and more fun.",
            category: "Reviews",
            date: "Oct 5, 2025",
            author: "Fatima Zahra",
            image: gadgetImage, // 👈 USE THE IMPORTED VARIABLE
        },
    ];

    const featuredPost = blogPosts[0];
    const recentPosts = blogPosts.slice(1);

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- Blog Header --- */}
                <header className="text-center mb-16 pt-8">
                    <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
                        Flavoriz Blog
                    </h1>
                    <p className="text-xl text-gray-600">
                        Tips, tricks, reviews, and culinary inspiration for every home cook.
                    </p>
                </header>

                {/* --- Featured Post Section --- */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2 max-w-lg mx-auto lg:mx-0">
                        Featured Article
                    </h2>
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row transition duration-500 hover:shadow-3xl">
                        
                        {/* Featured Image */}
                        <div className="lg:w-2/5 flex-shrink-0">
                            <img
                                src={featuredPost.image} // 👈 This is now a local import
                                alt={featuredPost.title}
                                className="w-full h-80 object-cover"
                            />
                        </div>

                        {/* Featured Content */}
                        <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                            <span className="text-sm font-semibold uppercase text-orange-600 mb-2 tracking-wider">
                                {featuredPost.category}
                            </span>
                            <h3 className="text-4xl font-extrabold text-gray-900 mb-4 hover:text-orange-700 transition duration-300 cursor-pointer">
                                {featuredPost.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-gray-500 text-sm mb-6">
                                <span className="flex items-center">
                                    <FaCalendarAlt className="mr-2 text-orange-500" /> {featuredPost.date}
                                </span>
                                <span className="flex items-center">
                                    <FaUser className="mr-2 text-orange-500" /> {featuredPost.author}
                                </span>
                            </div>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <a
                                href={`/blog/${featuredPost.id}`} 
                                className="inline-block bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg self-start hover:bg-orange-600 transition duration-300"
                            >
                                Read Full Article
                            </a>
                        </div>
                    </div>
                </section>

                {/* --- Recent Posts Grid --- */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-300 pb-2">
                        Recent Articles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {recentPosts.map((post) => (
                            <a 
                                key={post.id} 
                                href={`/blog/${post.id}`} 
                                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
                            >
                                <img
                                    src={post.image} // 👈 This is now a local import
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <span className="text-xs font-semibold uppercase text-orange-600 mb-2 tracking-wider">
                                        {post.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-700 transition duration-300">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                                    <div className="flex items-center space-x-4 text-gray-500 text-xs">
                                        <span className="flex items-center">
                                            <FaCalendarAlt className="mr-1 text-orange-500" /> {post.date}
                                        </span>
                                        <span className="flex items-center">
                                            <FaUser className="mr-1 text-orange-500" /> {post.author}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Blog;