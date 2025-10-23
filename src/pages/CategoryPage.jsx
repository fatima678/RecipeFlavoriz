// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const CategoryPage = () => {
//     const { category } = useParams();
//     const [recipes, setRecipes] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [expandedRecipe, setExpandedRecipe] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);
//                 const response = await import(`../data/${category}.json`);
//                 setRecipes(response.default || []);
//             } catch (err) {
//                 console.error(`Failed to load ${category} data:`, err);
//                 setError(`Could not load recipes for ${category}.`);
//                 setRecipes([]);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, [category]);

//     if (loading) return <div className="text-center text-2xl mt-8 text-gray-600">Loading recipes...</div>;
//     if (error) return <div className="text-center text-2xl mt-8 text-red-600">{error}</div>;

//     return (
//         <div className="bg-gray-100 min-h-screen py-12">
//             <div className="container mx-auto px-4">
//                 <h1 className="text-4xl font-bold text-orange-800 text-center mb-8">{category.charAt(0).toUpperCase() + category.slice(1)} Recipes</h1>
//                 {recipes.length === 0 ? (
//                     <p className="text-center text-gray-600">No recipes available for this category.</p>
//                 ) : (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                         {recipes.map((recipe, index) => (
//                             <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//                                 <h2 className="text-2xl font-semibold text-gray-800 mb-2">{recipe.name}</h2>
//                                 <p className="text-gray-600 mb-4">{recipe.description}</p>
//                                 <button
//                                     onClick={() => setExpandedRecipe(expandedRecipe === index ? null : index)}
//                                     className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300"
//                                 >
//                                     {expandedRecipe === index ? 'Hide Details' : 'Show Details'}
//                                 </button>
//                                 {expandedRecipe === index && (
//                                     <div className="mt-4">
//                                         <h3 className="text-lg font-medium text-orange-600 mb-2">Ingredients:</h3>
//                                         <ul className="list-disc list-inside mb-4">
//                                             {recipe.ingredients.map((ingredient, i) => (
//                                                 <li key={i} className="text-gray-600">{ingredient}</li>
//                                             ))}
//                                         </ul>
//                                         <h3 className="text-lg font-medium text-orange-600 mb-2">Instructions:</h3>
//                                         <ol className="list-decimal list-inside">
//                                             {recipe.instructions.map((step, i) => (
//                                                 <li key={i} className="text-gray-600">{step}</li>
//                                             ))}
//                                         </ol>
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

const CategoryPage = () => {
    const { category } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedRecipe, setExpandedRecipe] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await import(`../data/${category}.json`);
                setRecipes(response.default || []);
            } catch (err) {
                console.error(`Failed to load ${category} data:`, err);
                setError(`Could not load recipes for ${category}.`);
                setRecipes([]);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [category]);

    if (loading) return <div className="text-center text-2xl mt-8 text-gray-600">Loading recipes...</div>;
    if (error) return <div className="text-center text-2xl mt-8 text-red-600">{error}</div>;

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-orange-800 text-center mb-8">{category.charAt(0).toUpperCase() + category.slice(1)} Recipes</h1>
                {recipes.length === 0 ? (
                    <p className="text-center text-gray-600">No recipes available for this category.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {recipes.map((recipe, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{recipe.name}</h2>
                                <p className="text-gray-600 mb-4">{recipe.description}</p>
                                <button
                                    onClick={() => setExpandedRecipe(expandedRecipe === index ? null : index)}
                                    className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300"
                                >
                                    {expandedRecipe === index ? 'Hide Details' : 'Show Details'}
                                </button>
                                {expandedRecipe === index && (
                                    <div className="mt-4">
                                        <h3 className="text-lg font-medium text-orange-600 mb-2">Ingredients:</h3>
                                        <ul className="list-disc list-inside mb-4">
                                            {recipe.ingredients.map((ingredient, i) => (
                                                <li key={i} className="text-gray-600">{ingredient}</li>
                                            ))}
                                        </ul>
                                        <h3 className="text-lg font-medium text-orange-600 mb-2">Instructions:</h3>
                                        <ol className="list-decimal list-inside">
                                            {recipe.instructions.map((step, i) => (
                                                <li key={i} className="text-gray-600">{step}</li>
                                            ))}
                                        </ol>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;