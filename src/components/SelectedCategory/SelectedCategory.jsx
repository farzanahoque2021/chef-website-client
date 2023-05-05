import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryRecipe from '../CategoryRecipe/CategoryRecipe';


const SelectedCategory = () => {
    const selectedCategory = useLoaderData();
    // const { recipes } = selectedCategory;

    return (
        <div>
            <div>
                {
                    selectedCategory.map(category => <CategoryRecipe key={category.id}
                        category={category}></CategoryRecipe>)
                }
            </div>
        </div>
    );
};

export default SelectedCategory;