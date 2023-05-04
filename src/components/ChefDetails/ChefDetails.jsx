import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefRecipes from '../ChefRecipes/ChefRecipes';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { id, chef_photo, chef_name, experience, likes, bio, number_of_recipes, recipes } = chefDetails;
    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 place-items-center bg-neutral-100 mb-4 pb-4'>
                <div className='w-1/2'>
                    <h1 className='lg:text-4xl md:text-3xl font-medium'>{chef_name}</h1>
                    <p className='lg:text-base md:text-sm my-2 text-slate-500 text-justify'>{bio}</p>
                    <p className='text-lg font-medium'>Likes: {likes}</p>
                    <p className='text-lg font-medium'>Number of Recipes: {number_of_recipes}</p>
                    <p className='text-lg font-medium'>Years of Experience: {experience}</p>
                </div>
                <div className='w-1/2'>
                    <img className='w-64 h-64' src={chef_photo} alt="" />
                </div>
            </div >
        </div >
    );
};

export default ChefDetails;