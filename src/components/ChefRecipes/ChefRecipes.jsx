import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

const ChefRecipes = ({ recipe }) => {
    const [clicked, setClicked] = useState(true);
    const { ingredients, method, name, picture, rating } = recipe;
    const handleClick = () => {
        setClicked(false);
        toast("Added to Favourites")

    }
    return (
        <div className='grid grid-cols-1 border w-1/2 mx-auto gap-4 mb-4 p-4 shadow-xl'>
            <div>
                <div>
                    <img className='w-full h-80 object-cover' src={picture} alt="" />
                    <div><p className='lg:text-xl md:text-xl font-bold'>Recipe name: {name}</p>
                        <p className='lg:text-xl md:text-base font-semibold text-slate-400 mt-2'>Rating: {rating}</p>
                        <p className='ms-3 lg:text-xl md:text-sm text-emerald-800'>Ingredients Needed:</p>
                        <div className='ms-3 lg:text-xl md:text-sm'>
                            {
                                ingredients.map(ing => (
                                    <li className='text-base'>{ing}</li>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div>
                    <p className='ms-3 lg:text-xl md:text-sm text-emerald-800'>Cooking method:</p>
                    <div className='ms-3 lg:text-xl md:text-sm'>
                        {
                            method.map((m, index) => (
                                <div>
                                    <p className='text-base'>{index + 1}. {m}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='text-center'><button onClick={() => handleClick()} disabled={!clicked} className="btn btn-outline btn-info">Add to Favourite</button></div>

            </div>
        </div>

    );
};

export default ChefRecipes;