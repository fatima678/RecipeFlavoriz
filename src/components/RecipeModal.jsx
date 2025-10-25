import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Make sure you have react-icons installed

const RecipeModal = ({ recipe, onClose }) => {
    // Safety check: Don't render if no recipe details are provided
    if (!recipe || !recipe.details) return null;

    const details = recipe.details;

    // Helper to extract ingredients and measures from the details object
    const ingredients = Object.keys(details)
        .filter((key) => key.startsWith('strIngredient') && details[key])
        .map((key) => ({
            ingredient: details[key],
            measure: details[`strMeasure${key.slice(13)}`] || 'to taste',
        }));

    return (
        // Modal Overlay (Fixed, full screen, dark background)
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4" onClick={onClose}>
            
            {/* Modal Content (Stops clicks from closing the modal) */}
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white p-6 border-b border-gray-200 z-10 flex justify-between items-start">
                    <h2 className="text-3xl font-extrabold text-gray-800">{details.strMeal}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-red-500 transition duration-200 focus:outline-none p-2 rounded-full hover:bg-gray-100"
                        aria-label="Close"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                {/* Modal Body: Two-Column Layout on larger screens */}
                <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Column 1: Image & Meta Data */}
                    <div className="lg:col-span-1">
                        <img
                            src={details.strMealThumb}
                            alt={details.strMeal}
                            className="w-full h-auto object-cover rounded-lg shadow-md mb-4"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                            **Category:** {details.strCategory || 'N/A'} | **Area:** {details.strArea || 'N/A'}
                        </p>
                        {details.strYoutube && (
                            <a 
                                href={details.strYoutube} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block mt-3 text-sm text-orange-600 hover:text-orange-700 font-medium"
                            >
                                Watch on YouTube
                            </a>
                        )}
                    </div>

                    {/* Column 2 & 3: Ingredients and Instructions */}
                    <div className="lg:col-span-2">
                        
                        {/* Ingredients List */}
                        <h3 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-200 pb-1">Ingredients</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                            {ingredients.map((item, i) => (
                                <li key={i} className="flex justify-between border-b border-gray-100 pb-1">
                                    <span className="text-gray-700 font-medium">{item.ingredient}</span>
                                    <span className="text-gray-500 text-sm ml-4">{item.measure}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Instructions */}
                        <h3 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-200 pb-1">Instructions</h3>
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                            {details.strInstructions}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RecipeModal;