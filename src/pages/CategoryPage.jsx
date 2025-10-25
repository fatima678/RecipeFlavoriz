// // // import React, { useEffect, useState } from 'react';
// // // import { useParams } from 'react-router-dom';

// // // const CategoryPage = () => {
// // //     const { category } = useParams();
// // //     const [recipes, setRecipes] = useState([]);
// // //     const [loading, setLoading] = useState(true);
// // //     const [error, setError] = useState(null);
// // //     const [expandedRecipe, setExpandedRecipe] = useState(null);

// // //     useEffect(() => {
// // //         const fetchData = async () => {
// // //             try {
// // //                 setLoading(true);
// // //                 setError(null);
// // //                 const response = await import(`../data/${category}.json`);
// // //                 setRecipes(response.default || []);
// // //             } catch (err) {
// // //                 console.error(`Failed to load ${category} data:`, err);
// // //                 setError(`Could not load recipes for ${category}.`);
// // //                 setRecipes([]);
// // //             } finally {
// // //                 setLoading(false);
// // //             }
// // //         };
// // //         fetchData();
// // //     }, [category]);

// // //     if (loading) return <div className="text-center text-2xl mt-8 text-gray-600">Loading recipes...</div>;
// // //     if (error) return <div className="text-center text-2xl mt-8 text-red-600">{error}</div>;

// // //     return (
// // //         <div className="bg-gray-100 min-h-screen py-12">
// // //             <div className="container mx-auto px-4">
// // //                 <h1 className="text-4xl font-bold text-orange-800 text-center mb-8">{category.charAt(0).toUpperCase() + category.slice(1)} Recipes</h1>
// // //                 {recipes.length === 0 ? (
// // //                     <p className="text-center text-gray-600">No recipes available for this category.</p>
// // //                 ) : (
// // //                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// // //                         {recipes.map((recipe, index) => (
// // //                             <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
// // //                                 <h2 className="text-2xl font-semibold text-gray-800 mb-2">{recipe.name}</h2>
// // //                                 <p className="text-gray-600 mb-4">{recipe.description}</p>
// // //                                 <button
// // //                                     onClick={() => setExpandedRecipe(expandedRecipe === index ? null : index)}
// // //                                     className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300"
// // //                                 >
// // //                                     {expandedRecipe === index ? 'Hide Details' : 'Show Details'}
// // //                                 </button>
// // //                                 {expandedRecipe === index && (
// // //                                     <div className="mt-4">
// // //                                         <h3 className="text-lg font-medium text-orange-600 mb-2">Ingredients:</h3>
// // //                                         <ul className="list-disc list-inside mb-4">
// // //                                             {recipe.ingredients.map((ingredient, i) => (
// // //                                                 <li key={i} className="text-gray-600">{ingredient}</li>
// // //                                             ))}
// // //                                         </ul>
// // //                                         <h3 className="text-lg font-medium text-orange-600 mb-2">Instructions:</h3>
// // //                                         <ol className="list-decimal list-inside">
// // //                                             {recipe.instructions.map((step, i) => (
// // //                                                 <li key={i} className="text-gray-600">{step}</li>
// // //                                             ))}
// // //                                         </ol>
// // //                                     </div>
// // //                                 )}
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default CategoryPage;

// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';

// // const CategoryPage = () => {
// //     const { category } = useParams();
// //     const [recipes, setRecipes] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const [expandedRecipe, setExpandedRecipe] = useState(null);

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             try {
// //                 setLoading(true);
// //                 setError(null);
// //                 const response = await import(`../data/${category}.json`);
// //                 setRecipes(response.default || []);
// //             } catch (err) {
// //                 console.error(`Failed to load ${category} data:`, err);
// //                 setError(`Could not load recipes for ${category}.`);
// //                 setRecipes([]);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };
// //         fetchData();
// //     }, [category]);

// //     if (loading) return <div className="text-center text-2xl mt-8 text-gray-600">Loading recipes...</div>;
// //     if (error) return <div className="text-center text-2xl mt-8 text-red-600">{error}</div>;

// //     return (
// //         <div className="bg-gray-100 min-h-screen py-12">
// //             <div className="container mx-auto px-4">
// //                 <h1 className="text-4xl font-bold text-orange-800 text-center mb-8">{category.charAt(0).toUpperCase() + category.slice(1)} Recipes</h1>
// //                 {recipes.length === 0 ? (
// //                     <p className="text-center text-gray-600">No recipes available for this category.</p>
// //                 ) : (
// //                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //                         {recipes.map((recipe, index) => (
// //                             <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
// //                                 <h2 className="text-2xl font-semibold text-gray-800 mb-2">{recipe.name}</h2>
// //                                 <p className="text-gray-600 mb-4">{recipe.description}</p>
// //                                 <button
// //                                     onClick={() => setExpandedRecipe(expandedRecipe === index ? null : index)}
// //                                     className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300"
// //                                 >
// //                                     {expandedRecipe === index ? 'Hide Details' : 'Show Details'}
// //                                 </button>
// //                                 {expandedRecipe === index && (
// //                                     <div className="mt-4">
// //                                         <h3 className="text-lg font-medium text-orange-600 mb-2">Ingredients:</h3>
// //                                         <ul className="list-disc list-inside mb-4">
// //                                             {recipe.ingredients.map((ingredient, i) => (
// //                                                 <li key={i} className="text-gray-600">{ingredient}</li>
// //                                             ))}
// //                                         </ul>
// //                                         <h3 className="text-lg font-medium text-orange-600 mb-2">Instructions:</h3>
// //                                         <ol className="list-decimal list-inside">
// //                                             {recipe.instructions.map((step, i) => (
// //                                                 <li key={i} className="text-gray-600">{step}</li>
// //                                             ))}
// //                                         </ol>
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         ))}
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default CategoryPage;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const CategoryPage = () => {
//     const { category } = useParams(); // Gets the category from the URL (e.g., "beef", "seafood")
//     const [recipes, setRecipes] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [expandedRecipe, setExpandedRecipe] = useState(null);

//     useEffect(() => {
//         const fetchRecipes = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);
//                 const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
//                 const data = await response.json();
//                 if (data.meals) {
//                     setRecipes(data.meals);
//                 } else {
//                     setError(`No recipes found for ${category}.`);
//                     setRecipes([]);
//                 }
//             } catch (err) {
//                 console.error(`Error fetching recipes for ${category}:`, err);
//                 setError(`Failed to load recipes for ${category}.`);
//                 setRecipes([]);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchRecipes();
//     }, [category]); // Re-run when category changes

//     if (loading) return <div className="text-center text-2xl mt-8 text-gray-600">Loading recipes...</div>;
//     if (error) return <div className="text-center text-2xl mt-8 text-red-600">{error}</div>;

//     return (
//         <div className="bg-gray-100 min-h-screen py-12">
//             <div className="container mx-auto px-4">
//                 <h1 className="text-4xl font-bold text-orange-800 text-center mb-8">
//                     {category.charAt(0).toUpperCase() + category.slice(1)} Recipes
//                 </h1>
//                 {recipes.length === 0 ? (
//                     <p className="text-center text-gray-600">No recipes available.</p>
//                 ) : (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                         {recipes.map((recipe, index) => (
//                             <div key={recipe.idMeal} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//                                 <h2 className="text-2xl font-semibold text-gray-800 mb-2">{recipe.strMeal}</h2>
//                                 <img
//                                     src={recipe.strMealThumb}
//                                     alt={recipe.strMeal}
//                                     className="w-full h-32 object-cover mb-2 rounded"
//                                 />
//                                 <p className="text-gray-600 mb-4">
//                                     {recipe.strMeal} - A delicious dish from TheMealDB.
//                                 </p>
//                                 <button
//                                     onClick={async () => {
//                                         if (expandedRecipe === index) {
//                                             setExpandedRecipe(null);
//                                         } else {
//                                             setExpandedRecipe(index);
//                                             if (!recipe.details) {
//                                                 try {
//                                                     const response = await fetch(
//                                                         `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`
//                                                     );
//                                                     const data = await response.json();
//                                                     if (data.meals) {
//                                                         setRecipes((prevRecipes) => {
//                                                             const newRecipes = [...prevRecipes];
//                                                             newRecipes[index] = { ...newRecipes[index], details: data.meals[0] };
//                                                             return newRecipes;
//                                                         });
//                                                     }
//                                                 } catch (err) {
//                                                     console.error('Error fetching recipe details:', err);
//                                                     setError(`Failed to load details for ${recipe.strMeal}.`);
//                                                 }
//                                             }
//                                         }
//                                     }}
//                                     className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300"
//                                 >
//                                     {expandedRecipe === index ? 'Hide Details' : 'Show Details'}
//                                 </button>
//                                 {expandedRecipe === index && recipe.details && (
//                                     <div className="mt-4">
//                                         <h3 className="text-lg font-medium text-orange-600 mb-2">Ingredients:</h3>
//                                         <ul className="list-disc list-inside mb-4">
//                                             {Object.keys(recipe.details)
//                                                 .filter((key) => key.startsWith('strIngredient') && recipe.details[key])
//                                                 .map((key, i) => (
//                                                     <li key={i} className="text-gray-600">
//                                                         {recipe.details[key]} - {recipe.details[`strMeasure${key.slice(13)}`] || 'to taste'}
//                                                     </li>
//                                                 ))}
//                                         </ul>
//                                         <h3 className="text-lg font-medium text-orange-600 mb-2">Instructions:</h3>
//                                         <p className="text-gray-600">{recipe.details.strInstructions}</p>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CategoryPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeModal from '../components/RecipeModal'; // 👈 Import the new Modal component

const CategoryPage = () => {
    const { category } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // State to hold the FULL recipe object (including details) for the modal
    const [modalRecipe, setModalRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
                const data = await response.json();
                if (data.meals) {
                    setRecipes(data.meals);
                } else {
                    setError(`No recipes found for ${category}.`);
                    setRecipes([]);
                }
            } catch (err) {
                console.error(`Error fetching recipes for ${category}:`, err);
                setError(`Failed to load recipes for ${category}.`);
                setRecipes([]);
            } finally {
                setLoading(false);
            }
        };
        fetchRecipes();
    }, [category]);

    // Function to fetch details and open the modal
    const fetchAndOpenModal = async (recipe, index) => {
        // Prevent re-fetching if details are already present
        if (recipe.details) {
            setModalRecipe(recipe);
            return;
        }

        try {
            // Optimistic update: Temporarily set a loading state on the recipe itself (optional, but good UX)
            setRecipes(prevRecipes => {
                const newRecipes = [...prevRecipes];
                newRecipes[index] = { ...newRecipes[index], loadingDetails: true };
                return newRecipes;
            });

            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`);
            const data = await response.json();
            
            if (data.meals && data.meals.length > 0) {
                const fullRecipe = { ...recipe, details: data.meals[0], loadingDetails: false };
                
                // Update local recipes state with details for caching
                setRecipes(prevRecipes => {
                    const newRecipes = [...prevRecipes];
                    newRecipes[index] = fullRecipe;
                    return newRecipes;
                });

                // Open the modal
                setModalRecipe(fullRecipe);
            }
        } catch (err) {
            console.error('Error fetching recipe details:', err);
            // Revert loading state and show an error (for this card only)
            setRecipes(prevRecipes => {
                const newRecipes = [...prevRecipes];
                newRecipes[index] = { ...newRecipes[index], loadingDetails: false, fetchError: true };
                return newRecipes;
            });
            setError(`Failed to load details for ${recipe.strMeal}.`);
        }
    };

    if (loading) return <div className="text-center text-2xl mt-8 text-gray-600">Loading recipes...</div>;
    if (error) return <div className="text-center text-2xl mt-8 text-red-600">{error}</div>;

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
                    {category.charAt(0).toUpperCase() + category.slice(1)} Recipes
                </h1>
                {recipes.length === 0 ? (
                    <p className="text-center text-gray-600">No recipes available.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recipes.map((recipe, index) => (
                            <div key={recipe.idMeal} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col overflow-hidden">
                                
                                <img
                                    src={recipe.strMealThumb}
                                    alt={recipe.strMeal}
                                    className="w-full h-48 object-cover flex-shrink-0"
                                />
                                
                                <div className="p-5 flex flex-col flex-grow">
                                    <h2 className="text-xl font-bold text-gray-800 mb-2">{recipe.strMeal}</h2>
                                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                                        Discover a delicious {category} dish from TheMealDB.
                                    </p>
                                    
                                    <button
                                        onClick={() => fetchAndOpenModal(recipe, index)}
                                        className="mt-auto w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
                                        disabled={recipe.loadingDetails}
                                    >
                                        {recipe.loadingDetails ? 'Loading...' : 'Show Details'}
                                    </button>
                                    
                                    {recipe.fetchError && (
                                        <p className="text-red-500 text-xs mt-1">Failed to fetch details.</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            {/* 3. The Modal is rendered here, only when modalRecipe is set */}
            {modalRecipe && (
                <RecipeModal 
                    recipe={modalRecipe} 
                    onClose={() => setModalRecipe(null)} 
                />
            )}
        </div>
    );
};

export default CategoryPage;