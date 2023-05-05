import React from 'react';
import Lottie from 'lottie-react'
import food from '../../assets/healthy-food.json'
import { Link, useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const HomePage = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <div>
            <div className='lg:flex justify-center items-center  p-10 mb-6 bg-neutral-100'>
                <div className='text-start'>
                    <h1 className='lg:text-6xl md:text-3xl font-medium'>Choose From <br></br><span className='lg:text-6xl md:text-2xl font-medium text-orange-600'>Delish Recipes</span></h1>
                    <p className='lg:text-lg md:text-sm my-2 text-slate-500'>Join us to become a cooking expert in <br /> Indian cuisine with a fun way to learn</p>
                    <Link to="/register"><button className="btn bg-gradient-to-r from-orange-600 to-orange-500 border-none">Explore More</button></Link>
                </div>
                <div>
                    <div className='w-96'>
                        <Lottie animationData={food} loop={true} />
                    </div>
                </div>

            </div >
            <div>
                <div className='text-center my-8'>
                    <h2 className='lg:text-3xl md:text-lg font-bold'>Our Expert Chefs</h2>
                    <p className='lg:text-lg md:text-base mt-4 text-slate-500'>Explore thousands of recipes with all the information you need</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6 place-items-center'>
                    {
                        chefs.map(chef => <ChefCard
                            key={chef.id}
                            chef={chef}></ChefCard>)
                    }
                </div>
            </div>
        </div >
    );
};

export default HomePage;