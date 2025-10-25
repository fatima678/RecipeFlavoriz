// // import React, { useState } from 'react';
// // import { FaPlus, FaCheck, FaTrash, FaSpinner, FaUtensils } from 'react-icons/fa';

// // const RecipeGenerator = () => {
// //     // State to manage the list of ingredients entered by the user
// //     const [ingredients, setIngredients] = useState([]);
// //     // State for the current text input field
// //     const [newIngredient, setNewIngredient] = useState('');
// //     // State for managing the loading indicator
// //     const [loading, setLoading] = useState(false);
// //     // State to hold the final recipe object (title, ingredients, instructions)
// //     const [recipe, setRecipe] = useState(null);
// //     // State for displaying errors
// //     const [error, setError] = useState(null);

// //     // --- Ingredient Management Handlers ---

// //     const handleAddIngredient = () => {
// //         const trimmedIngredient = newIngredient.trim();
// //         if (trimmedIngredient !== '' && !ingredients.includes(trimmedIngredient)) {
// //             setIngredients([...ingredients, trimmedIngredient]);
// //             setNewIngredient('');
// //             setError(null); // Clear error when ingredients are added
// //         }
// //     };

// //     const handleRemoveIngredient = (ing) => {
// //         setIngredients(ingredients.filter(i => i !== ing));
// //     };
    
// //     // Allows adding ingredients by pressing Enter in the input field
// //     const handleKeyPress = (e) => {
// //         if (e.key === 'Enter') {
// //             e.preventDefault(); // Prevent form submission if input is in a form
// //             handleAddIngredient();
// //         }
// //     };

// //     // --- Recipe Generation Logic ---

// //     const generateRecipe = async () => {
// //         if (ingredients.length === 0) {
// //             setError('Please enter at least one ingredient to generate a recipe. 🍝');
// //             return;
// //         }

// //         setLoading(true);
// //         setError(null);
// //         setRecipe(null); // Clear previous recipe

// //         try {
// //             // CALLS YOUR SECURE NODE.JS BACKEND
// //             const response = await fetch('http://localhost:3001/api/generate-recipe', { 
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 // Sends the list of ingredients to the server
// //                 body: JSON.stringify({ ingredients }),
// //             });

// //             if (!response.ok) {
// //                 // If the server returns a 4xx or 5xx, try to read the error message
// //                 const errorData = await response.json();
// //                 throw new Error(errorData.error || 'Server failed to generate a recipe. Check the backend console.');
// //             }

// //             const data = await response.json();
// //             // The data received here is the clean JSON object from the Gemini API
// //             setRecipe(data);

// //         } catch (err) {
// //             console.error('Frontend Fetch Error:', err);
// //             setError(err.message || 'An unexpected error occurred. Could not connect to the recipe server.');
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     // --- Render Component ---

// //     return (
// //         <div className="container mx-auto px-4 py-16 bg-gray-50 min-h-screen">
// //             <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-2">
// //                 <FaUtensils className="inline-block mr-3 text-orange-600" /> AI Recipe Creator
// //             </h1>
// //             <p className="text-center text-gray-600 mb-12 text-xl">
// //                 Enter your ingredients and let the AI generate a unique recipe using your pantry items!
// //             </p>

// //             {/* --- Ingredient Input Area --- */}
// //             <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-2xl mb-8 border border-gray-200">
// //                 <h2 className="text-2xl font-bold mb-4 text-orange-600">What's in your fridge?</h2>
                
// //                 {/* Input Field */}
// //                 <div className="flex space-x-2 mb-4">
// //                     <input
// //                         type="text"
// //                         value={newIngredient}
// //                         onChange={(e) => setNewIngredient(e.target.value)}
// //                         onKeyPress={handleKeyPress}
// //                         placeholder="e.g., Chicken breast, Tomatoes, Onion, Pasta"
// //                         className="flex-grow p-3 border-2 border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150"
// //                     />
// //                     <button
// //                         onClick={handleAddIngredient}
// //                         className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
// //                         title="Add Ingredient"
// //                     >
// //                         <FaPlus />
// //                     </button>
// //                 </div>

// //                 {/* Ingredient Tags Display */}
// //                 <div className="flex flex-wrap gap-2 min-h-[40px]">
// //                     {ingredients.length > 0 ? (
// //                         ingredients.map((ing) => (
// //                             <div key={ing} className="flex items-center bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
// //                                 {ing}
// //                                 <button 
// //                                     onClick={() => handleRemoveIngredient(ing)}
// //                                     className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
// //                                     title="Remove"
// //                                 >
// //                                     <FaTrash className="w-3 h-3"/>
// //                                 </button>
// //                             </div>
// //                         ))
// //                     ) : (
// //                         <p className="text-gray-500 italic">Add ingredients above...</p>
// //                     )}
// //                 </div>
// //             </div>

// //             {/* --- Generate Button & Error --- */}
// //             <div className="text-center">
// //                 <button
// //                     onClick={generateRecipe}
// //                     disabled={loading || ingredients.length === 0}
// //                     className={`px-10 py-4 text-xl font-bold rounded-full transition duration-300 shadow-xl
// //                         ${loading || ingredients.length === 0 ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-orange-600 text-white hover:bg-orange-700 focus:ring-4 focus:ring-orange-300'}
// //                     `}
// //                 >
// //                     {loading ? (
// //                         <span className="flex items-center">
// //                             <FaSpinner className="animate-spin mr-3" /> Generating Your Custom Recipe...
// //                         </span>
// //                     ) : (
// //                         <span className="flex items-center">
// //                             <FaCheck className="mr-3" /> Generate Recipe
// //                         </span>
// //                     )}
// //                 </button>
// //                 {error && <p className="mt-6 text-red-600 font-semibold text-lg max-w-2xl mx-auto">{error}</p>}
// //             </div>

// //             {/* --- Recipe Output Area --- */}
// //             {recipe && (
// //                 <div className="mt-16 max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-2xl border-t-8 border-orange-600">
// //                     <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">{recipe.title}</h2>
                    
// //                     <div className="grid md:grid-cols-2 gap-8">
// //                         {/* Ingredients List */}
// //                         <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
// //                             <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Ingredients</h3>
// //                             <ul className="list-disc ml-6 text-gray-700 space-y-2">
// //                                 {recipe.ingredients.map((item, index) => (
// //                                     <li key={index} className="pl-1">{item}</li>
// //                                 ))}
// //                             </ul>
// //                         </div>

// //                         {/* Instructions */}
// //                         <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 md:col-span-2">
// //                             <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Instructions</h3>
// //                             <ol className="list-decimal ml-6 text-gray-700 space-y-3">
// //                                 {recipe.instructions.map((step, index) => (
// //                                     <li key={index} className='pl-2 leading-relaxed font-medium'>{step}</li>
// //                                 ))}
// //                             </ol>
// //                         </div>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default RecipeGenerator;


// import React, { useState } from 'react';
// import { FaPlus, FaCheck, FaTrash, FaSpinner, FaUtensils, FaExclamationTriangle } from 'react-icons/fa';

// const RecipeGenerator = () => {
//     // State to manage the list of ingredients entered by the user
//     const [ingredients, setIngredients] = useState([]);
//     // State for the current text input field
//     const [newIngredient, setNewIngredient] = useState('');
//     // State for managing the loading indicator
//     const [loading, setLoading] = useState(false);
//     // State to hold the final recipe object (title, ingredients, instructions)
//     const [recipe, setRecipe] = useState(null);
//     // State for displaying errors
//     const [error, setError] = useState(null);

//     // --- Ingredient Management Handlers ---

//     const handleAddIngredient = () => {
//         const trimmedIngredient = newIngredient.trim();
//         if (trimmedIngredient !== '' && !ingredients.includes(trimmedIngredient)) {
//             setIngredients([...ingredients, trimmedIngredient]);
//             setNewIngredient('');
//             setError(null); // Clear error when ingredients are added
//         }
//     };

//     const handleRemoveIngredient = (ing) => {
//         setIngredients(ingredients.filter(i => i !== ing));
//     };
    
//     // Allows adding ingredients by pressing Enter in the input field
//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             e.preventDefault(); 
//             handleAddIngredient();
//         }
//     };

//     // --- Recipe Generation Logic ---

//     const generateRecipe = async () => {
//         if (ingredients.length === 0) {
//             setError('Please enter at least one ingredient to generate a recipe. 🍝');
//             return;
//         }

//         setLoading(true);
//         setError(null);
//         setRecipe(null); // Clear previous recipe

//         try {
//             // API call to your secure Node.js backend
//             const response = await fetch('http://localhost:3001/api/generate-recipe', { 
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ ingredients }),
//             });

//             if (!response.ok) {
//                 // Read the error message from the backend if available
//                 const errorData = await response.json();
//                 throw new Error(errorData.error || 'Server failed to generate a recipe. Check the backend console.');
//             }

//             const data = await response.json();

//             // Basic validation to ensure the required fields are present
//             if (!data.title || !data.ingredients || !data.instructions) {
//                 throw new Error("Recipe received, but critical fields (title, ingredients, or instructions) are missing or invalid. Try different ingredients.");
//             }

//             setRecipe(data);

//         } catch (err) {
//             console.error('Frontend Fetch Error:', err);
//             setError(err.message || 'An unexpected error occurred. Could not connect to the recipe server.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // --- Render Component ---

//     return (
//         <div className="container mx-auto px-4 py-16 bg-gray-50 min-h-screen">
//             <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-2">
//                 <FaUtensils className="inline-block mr-3 text-orange-600" /> AI Recipe Creator
//             </h1>
//             <p className="text-center text-gray-600 mb-12 text-xl">
//                 Enter your ingredients and let the AI generate a unique recipe using your pantry items!
//             </p>

//             {/* --- Ingredient Input Area --- */}
//             <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-2xl mb-8 border border-gray-200">
//                 <h2 className="text-2xl font-bold mb-4 text-orange-600">What's in your fridge?</h2>
                
//                 {/* Input Field */}
//                 <div className="flex space-x-2 mb-4">
//                     <input
//                         type="text"
//                         value={newIngredient}
//                         onChange={(e) => setNewIngredient(e.target.value)}
//                         onKeyPress={handleKeyPress}
//                         placeholder="e.g., Chicken breast, Tomatoes, Onion, Pasta"
//                         className="flex-grow p-3 border-2 border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150"
//                     />
//                     <button
//                         onClick={handleAddIngredient}
//                         className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
//                         title="Add Ingredient"
//                     >
//                         <FaPlus />
//                     </button>
//                 </div>

//                 {/* Ingredient Tags Display */}
//                 <div className="flex flex-wrap gap-2 min-h-[40px]">
//                     {ingredients.length > 0 ? (
//                         ingredients.map((ing) => (
//                             <div key={ing} className="flex items-center bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
//                                 {ing}
//                                 <button 
//                                     onClick={() => handleRemoveIngredient(ing)}
//                                     className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
//                                     title="Remove"
//                                 >
//                                     <FaTrash className="w-3 h-3"/>
//                                 </button>
//                             </div>
//                         ))
//                     ) : (
//                         <p className="text-gray-500 italic">Add ingredients above...</p>
//                     )}
//                 </div>
//             </div>

//             {/* --- Generate Button & Error --- */}
//             <div className="text-center">
//                 <button
//                     onClick={generateRecipe}
//                     disabled={loading || ingredients.length === 0}
//                     className={`px-10 py-4 text-xl font-bold rounded-full transition duration-300 shadow-xl
//                         ${loading || ingredients.length === 0 ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-orange-600 text-white hover:bg-orange-700 focus:ring-4 focus:ring-orange-300'}
//                     `}
//                 >
//                     {loading ? (
//                         <span className="flex items-center">
//                             <FaSpinner className="animate-spin mr-3" /> Generating Your Custom Recipe...
//                         </span>
//                     ) : (
//                         <span className="flex items-center">
//                             <FaCheck className="mr-3" /> Generate Recipe
//                         </span>
//                     )}
//                 </button>
//                 {error && (
//                     <p className="mt-6 text-red-600 font-semibold text-lg max-w-2xl mx-auto flex items-center justify-center">
//                         <FaExclamationTriangle className="mr-2"/> {error}
//                     </p>
//                 )}
//             </div>

//             {/* --- Recipe Output Area --- */}
//             {recipe && (
//                 <div className="mt-16 max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-2xl border-t-8 border-orange-600">
//                     <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">{recipe.title}</h2>
                    
//                     <div className="grid md:grid-cols-2 gap-8">
//                         {/* Ingredients List */}
//                         <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
//                             <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Ingredients</h3>
//                             <ul className="list-disc ml-6 text-gray-700 space-y-2">
//                                 {/* FIX: Optional chaining ensures .map is only called if ingredients is an array */}
//                                 {recipe.ingredients?.map((item, index) => (
//                                     <li key={index} className="pl-1">{item}</li>
//                                 ))}
//                                 {/* Fallback message */}
//                                 {(!recipe.ingredients || recipe.ingredients.length === 0) && (
//                                     <li className="text-red-500">The ingredients list is empty or could not be generated.</li>
//                                 )}
//                             </ul>
//                         </div>

//                         {/* Instructions */}
//                         <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 md:col-span-2">
//                             <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Instructions</h3>
//                             <ol className="list-decimal ml-6 text-gray-700 space-y-3">
//                                 {/* FIX: Optional chaining ensures .map is only called if instructions is an array */}
//                                 {recipe.instructions?.map((step, index) => (
//                                     <li key={index} className='pl-2 leading-relaxed font-medium'>{step}</li>
//                                 ))}
//                                 {/* Fallback message */}
//                                 {(!recipe.instructions || recipe.instructions.length === 0) && (
//                                     <li className="text-red-500">The instructions list is empty or could not be generated.</li>
//                                 )}
//                             </ol>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default RecipeGenerator;


import React, { useState } from 'react';
import { FaPlus, FaCheck, FaTrash, FaSpinner, FaUtensils, FaExclamationTriangle } from 'react-icons/fa';

const RecipeGenerator = () => {
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);

    // --- Ingredient Management Handlers ---

    const handleAddIngredient = () => {
        const trimmedIngredient = newIngredient.trim();
        if (trimmedIngredient !== '' && !ingredients.includes(trimmedIngredient)) {
            setIngredients([...ingredients, trimmedIngredient]);
            setNewIngredient('');
            setError(null); 
        }
    };

    const handleRemoveIngredient = (ing) => {
        setIngredients(ingredients.filter(i => i !== ing));
    };
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            handleAddIngredient();
        }
    };

    // --- Recipe Generation Logic ---

    const generateRecipe = async () => {
        if (ingredients.length === 0) {
            setError('Please enter at least one ingredient to generate a recipe. 🍝');
            return;
        }

        setLoading(true);
        setError(null);
        setRecipe(null); 

        try {
            // API call to your secure Node.js backend
            const response = await fetch('http://localhost:3001/api/generate-recipe', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ingredients }),
            });

            if (!response.ok) {
                // If the server returns a 4xx or 5xx, read the specific error message
                const errorData = await response.json();
                
                // Throw the error message sent from the backend
                throw new Error(errorData.error || 'Server reported an unknown error.'); 
            }

            const data = await response.json();
            
            // NOTE: Removed manual validation. Backend is now responsible for validating JSON structure.
            
            setRecipe(data);

        } catch (err) {
            console.error('Frontend Fetch Error:', err);
            // Display the specific error message thrown
            setError(err.message || 'An unexpected error occurred. Could not connect to the recipe server.'); 
        } finally {
            setLoading(false);
        }
    };

    // --- Render Component ---

    return (
        <div className="container mx-auto px-4 py-16 bg-gray-50 min-h-screen">
            <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-2">
                <FaUtensils className="inline-block mr-3 text-orange-600" /> AI Recipe Creator
            </h1>
            <p className="text-center text-gray-600 mb-12 text-xl">
                Enter your ingredients and let the AI generate a unique recipe using your pantry items!
            </p>

            {/* --- Ingredient Input Area --- */}
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-2xl mb-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-4 text-orange-600">What's in your fridge?</h2>
                
                {/* Input Field */}
                <div className="flex space-x-2 mb-4">
                    <input
                        type="text"
                        value={newIngredient}
                        onChange={(e) => setNewIngredient(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="e.g., Chicken breast, Tomatoes, Onion, Pasta"
                        className="flex-grow p-3 border-2 border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150"
                    />
                    <button
                        onClick={handleAddIngredient}
                        className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
                        title="Add Ingredient"
                    >
                        <FaPlus />
                    </button>
                </div>

                {/* Ingredient Tags Display */}
                <div className="flex flex-wrap gap-2 min-h-[40px]">
                    {ingredients.length > 0 ? (
                        ingredients.map((ing) => (
                            <div key={ing} className="flex items-center bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                                {ing}
                                <button 
                                    onClick={() => handleRemoveIngredient(ing)}
                                    className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                                    title="Remove"
                                >
                                    <FaTrash className="w-3 h-3"/>
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 italic">Add ingredients above...</p>
                    )}
                </div>
            </div>

            {/* --- Generate Button & Error --- */}
            <div className="text-center">
                <button
                    onClick={generateRecipe}
                    disabled={loading || ingredients.length === 0}
                    className={`px-10 py-4 text-xl font-bold rounded-full transition duration-300 shadow-xl
                        ${loading || ingredients.length === 0 ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-orange-600 text-white hover:bg-orange-700 focus:ring-4 focus:ring-orange-300'}
                    `}
                >
                    {loading ? (
                        <span className="flex items-center">
                            <FaSpinner className="animate-spin mr-3" /> Generating Your Custom Recipe...
                        </span>
                    ) : (
                        <span className="flex items-center">
                            <FaCheck className="mr-3" /> Generate Recipe
                        </span>
                    )}
                </button>
                {error && (
                    <p className="mt-6 text-red-600 font-semibold text-lg max-w-2xl mx-auto flex items-center justify-center">
                        <FaExclamationTriangle className="mr-2"/> {error}
                    </p>
                )}
            </div>

            {/* --- Recipe Output Area --- */}
            {recipe && (
                <div className="mt-16 max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-2xl border-t-8 border-orange-600">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">{recipe.title}</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Ingredients List */}
                        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Ingredients</h3>
                            <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                {/* FIX: Optional chaining (?.) prevents crash if ingredients is null/undefined */}
                                {recipe.ingredients?.map((item, index) => (
                                    <li key={index} className="pl-1">{item}</li>
                                ))}
                                {/* Fallback message */}
                                {(!recipe.ingredients || recipe.ingredients.length === 0) && (
                                    <li className="text-red-500">The ingredients list is empty or could not be generated.</li>
                                )}
                            </ul>
                        </div>

                        {/* Instructions */}
                        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 md:col-span-2">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Instructions</h3>
                            <ol className="list-decimal ml-6 text-gray-700 space-y-3">
                                {/* FIX: Optional chaining (?.) prevents crash if instructions is null/undefined */}
                                {recipe.instructions?.map((step, index) => (
                                    <li key={index} className='pl-2 leading-relaxed font-medium'>{step}</li>
                                ))}
                                {/* Fallback message */}
                                {(!recipe.instructions || recipe.instructions.length === 0) && (
                                    <li className="text-red-500">The instructions list is empty or could not be generated.</li>
                                )}
                            </ol>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipeGenerator;