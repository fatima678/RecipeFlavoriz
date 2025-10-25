// import React, { useEffect, useState, useCallback } from 'react';
// import { FaSyncAlt } from 'react-icons/fa'; // For the loading spinner
// import RecipeModal from '../components/RecipeModal';

// // The recipe card component is the same as the one used in CategoryPage, but without the specific category link.
// // It's highly recommended to make this a reusable component called RecipeCard.jsx

// const Recipes = () => {
//     // Array of letters A-Z to iterate through for fetching
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

//     const [allRecipes, setAllRecipes] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [pageTitle, setPageTitle] = useState('All Recipes A-Z');

//     // State for the Modal logic (reusing the concept from CategoryPage)
//     const [modalRecipeDetails, setModalRecipeDetails] = useState(null);
//     const [modalRecipeData, setModalRecipeData] = useState(null); // The actual full details

//     // --- Data Fetching Logic ---
//     const fetchAllRecipes = useCallback(async () => {
//         setLoading(true);
//         setError(null);
//         let recipesList = [];
        
//         try {
//             // Use a specific list of letters to avoid hitting API limits for all 26 letters immediately
//             const lettersToFetch = ['A', 'C', 'D', 'B', 'M', 'S']; // Fetching key letters first
            
//             // Note: Fetching A-Z is slow and hits API limits easily.
//             // For a production site, you would only load one letter at a time, or fetch from a pre-compiled backend list.

//             for (const letter of lettersToFetch) {
//                 const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
//                 const data = await response.json();

//                 if (data.meals) {
//                     // Add the fetched meals, and also store the starting letter for filtering later
//                     const mealsWithLetter = data.meals.map(meal => ({ ...meal, startingLetter: letter }));
//                     recipesList = recipesList.concat(mealsWithLetter);
//                 }
//             }

//             setAllRecipes(recipesList);
//         } catch (err) {
//             console.error('Error fetching all recipes:', err);
//             setError('Failed to load recipes. Please try again later.');
//         } finally {
//             setLoading(false);
//         }
//     }, []);

//     useEffect(() => {
//         fetchAllRecipes();
//     }, [fetchAllRecipes]);
    
    
//     // --- Modal Logic (Reusable from CategoryPage) ---

//     const fetchRecipeDetails = async (idMeal) => {
//         setModalRecipeDetails({ idMeal, loading: true });
//         try {
//             const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
//             const data = await response.json();

//             if (data.meals && data.meals.length > 0) {
//                 setModalRecipeDetails({ idMeal, loading: false });
//                 setModalRecipeData(data.meals[0]); // The full detailed recipe object
//             } else {
//                  setModalRecipeDetails(null);
//                  setError('Details not found for this recipe.');
//             }
//         } catch (err) {
//             console.error('Error fetching recipe details:', err);
//             setModalRecipeDetails(null);
//             setError('Failed to load recipe details.');
//         }
//     };
    
//     const closeModal = () => {
//         setModalRecipeData(null);
//         setModalRecipeDetails(null);
//     };


//     // --- Render Logic ---

//     if (loading) return (
//         <div className="text-center text-2xl mt-32 text-orange-600 flex flex-col items-center">
//             <FaSyncAlt className="animate-spin text-4xl mb-4" />
//             Loading a selection of popular recipes...
//         </div>
//     );
//     if (error) return <div className="text-center text-2xl mt-8 text-red-600">{error}</div>;

//     return (
//         <div className="bg-gray-100 min-h-screen py-12">
//             <div className="container mx-auto px-4">
//                 <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-4">
//                     {pageTitle}
//                 </h1>
//                 <p className="text-center text-gray-600 mb-12">
//                     A curated selection of recipes loaded alphabetically for quick browsing.
//                 </p>

//                 {allRecipes.length === 0 && !loading ? (
//                     <p className="text-center text-gray-600">No recipes found.</p>
//                 ) : (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                         {allRecipes.map((recipe) => (
//                             <div 
//                                 key={recipe.idMeal} 
//                                 className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
//                             >
//                                 <img
//                                     src={recipe.strMealThumb}
//                                     alt={recipe.strMeal}
//                                     className="w-full h-40 object-cover flex-shrink-0"
//                                 />
//                                 <div className="p-4 flex flex-col flex-grow">
//                                     <h2 className="text-xl font-bold text-gray-800 mb-2">{recipe.strMeal}</h2>
//                                     <p className="text-gray-500 text-sm mb-4 flex-grow">
//                                         Starting Letter: <span className="font-semibold text-orange-600">{recipe.startingLetter}</span>
//                                     </p>
                                    
//                                     <button
//                                         onClick={() => fetchRecipeDetails(recipe.idMeal)}
//                                         className="mt-auto w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
//                                         disabled={modalRecipeDetails && modalRecipeDetails.loading}
//                                     >
//                                         {modalRecipeDetails?.idMeal === recipe.idMeal && modalRecipeDetails.loading ? 'Loading...' : 'Show Details'}
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
            
//             {/* You will need to import and use the RecipeModal component here */}
//             {modalRecipeData && (
//                 // Assuming you import RecipeModal from '../components/RecipeModal'
//                 <RecipeModal 
//                     recipe={{ details: modalRecipeData }} // Pass the full details in the expected format
//                     onClose={closeModal} 
//                 />
//             )}
//         </div>
//     );
// };

// export default Recipes;


import React, { useEffect, useState, useCallback } from 'react';
import { FaSyncAlt } from 'react-icons/fa'; // For the loading spinner
import RecipeModal from '../components/RecipeModal'; // Make sure this path is correct

const Recipes = () => {
    // Array of letters A-Z (currently only a subset is used for performance)
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const [allRecipes, setAllRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pageTitle, setPageTitle] = useState('All Recipes A-Z');

    // State for the Modal logic
    const [modalRecipeDetails, setModalRecipeDetails] = useState(null);
    const [modalRecipeData, setModalRecipeData] = useState(null); // The actual full details

    // --- Data Fetching Logic ---
    const fetchAllRecipes = useCallback(async () => {
        setLoading(true);
        setError(null);
        let recipesList = [];
        
        try {
            // Fetching only a selected subset of letters for performance
            const lettersToFetch = ['A', 'C', 'D', 'B', 'M', 'S']; 
            
            for (const letter of lettersToFetch) {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
                
                // Check for HTTP errors
                if (!response.ok) {
                    throw new Error(`Failed to fetch recipes for letter ${letter}: ${response.statusText}`);
                }
                
                const data = await response.json();

                if (data.meals) {
                    // Add the fetched meals, and also store the starting letter for filtering later
                    const mealsWithLetter = data.meals.map(meal => ({ ...meal, startingLetter: letter }));
                    recipesList = recipesList.concat(mealsWithLetter);
                }
            }

            setAllRecipes(recipesList);
        } catch (err) {
            console.error('Error fetching all recipes:', err);
            setError('Failed to load recipes. Please try again later.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAllRecipes();
    }, [fetchAllRecipes]);
    
    
    // --- Modal Logic (Reusable) ---

    const fetchRecipeDetails = async (idMeal) => {
        setModalRecipeDetails({ idMeal, loading: true });
        setModalRecipeData(null); // Clear previous details
        
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            const data = await response.json();

            if (data.meals && data.meals.length > 0) {
                setModalRecipeDetails({ idMeal, loading: false });
                setModalRecipeData(data.meals[0]); // The full detailed recipe object
            } else {
                 setModalRecipeDetails(null);
                 setError('Details not found for this recipe.');
            }
        } catch (err) {
            console.error('Error fetching recipe details:', err);
            setModalRecipeDetails(null);
            setError('Failed to load recipe details.');
        }
    };
    
    const closeModal = () => {
        setModalRecipeData(null);
        setModalRecipeDetails(null);
        setError(null); // Clear modal-related errors
    };


    // ----------------------------------------------------------------------
    // --- Render Logic ---
    // ----------------------------------------------------------------------

    if (loading) return (
        <div className="text-center text-2xl mt-32 text-orange-600 flex flex-col items-center">
            <FaSyncAlt className="animate-spin text-4xl mb-4" />
            Loading a selection of popular recipes...
        </div>
    );
    if (error && !modalRecipeData) return <div className="text-center text-2xl mt-8 text-red-600">{error}</div>;

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-4">
                    {pageTitle}
                </h1>
                <p className="text-center text-gray-600 mb-12">
                    A curated selection of recipes loaded alphabetically for quick browsing.
                </p>

                {allRecipes.length === 0 && !loading ? (
                    <p className="text-center text-gray-600">No recipes found for the selected letters.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {allRecipes.map((recipe) => (
                            <div 
                                key={recipe.idMeal} 
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
                            >
                                <img
                                    src={recipe.strMealThumb}
                                    alt={recipe.strMeal}
                                    className="w-full h-40 object-cover flex-shrink-0"
                                />
                                <div className="p-4 flex flex-col flex-grow">
                                    <h2 className="text-xl font-bold text-gray-800 mb-2">{recipe.strMeal}</h2>
                                    <p className="text-gray-500 text-sm mb-4 flex-grow">
                                        Starting Letter: <span className="font-semibold text-orange-600">{recipe.startingLetter}</span>
                                    </p>
                                    
                                    <button
                                        onClick={() => fetchRecipeDetails(recipe.idMeal)}
                                        className="mt-auto w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
                                        disabled={modalRecipeDetails && modalRecipeDetails.loading}
                                    >
                                        {modalRecipeDetails?.idMeal === recipe.idMeal && modalRecipeDetails.loading ? 'Loading...' : 'Show Details'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            {/* Recipe Modal Component */}
            {modalRecipeData && (
                <RecipeModal 
                    recipe={{ details: modalRecipeData }} 
                    onClose={closeModal} 
                />
            )}
        </div>
    );
};

export default Recipes;