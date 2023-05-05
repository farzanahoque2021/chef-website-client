import React from 'react';

const CategoryRecipe = ({ category }) => {
    const { recipes } = category;
    return (
        <div className='grid grid-cols-1 w-1/2 mx-auto gap-4 mb-4 p-4'>
            {
                recipes.map(recipe => <div className='border p-2 shadow-xl'>
                    <img className='w-full h-80 object-cover' src={recipe.picture} alt="" />
                    <div>
                        <p className='lg:text-2xl md:text-xl font-bold'>Recipe name: {recipe.name}</p>
                        <p className='lg:text-xl md:text-base font-semibold text-slate-400 mt-2'>Rating: {recipe.rating}</p>
                        <p className='ms-3 lg:text-xl md:text-sm text-slate-500 underline'>Ingredients Needed:</p>
                        <div className='ms-3 lg:text-xl md:text-sm'>
                            {
                                recipe.ingredients.map(ing => (
                                    <li>{ing}</li>
                                ))
                            }
                        </div>

                        <p className='ms-3 lg:text-xl md:text-sm text-slate-500 underline'>Cooking method:</p>
                        <div className='ms-3 lg:text-xl md:text-sm'>
                            {
                                recipe.method.map((m, index) => (
                                    <div>
                                        <p>{index + 1}. {m}</p>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </div>)
            }
        </div>
    );
};

export default CategoryRecipe;