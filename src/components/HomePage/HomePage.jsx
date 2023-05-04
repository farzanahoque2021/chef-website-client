import React from 'react';
import Lottie from 'lottie-react'
import food from '../../assets/healthy-food.json'

const HomePage = () => {
    return (
        <div>
            <div className='lg:flex justify-center items-center  p-10 mb-6 bg-neutral-100'>
                <div className='text-start'>
                    <h1 className='lg:text-6xl md:text-3xl font-medium'>Choose From <br></br><span className='lg:text-6xl md:text-2xl font-medium text-orange-600'>Delish Recipes</span></h1>
                    <p className='lg:text-lg md:text-sm my-2 text-slate-500'>Join us to become a cooking expert in <br /> Indian cuisine with a  fun way to learn</p>
                    <button className="btn bg-gradient-to-r from-orange-600 to-orange-500 border-none">Explore More</button>
                </div>
                <div>
                    <div className='w-96'>
                        <Lottie animationData={food} loop={true} />
                    </div>
                </div>

            </div >
        </div >
    );
};

export default HomePage;