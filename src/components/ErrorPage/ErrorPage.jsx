import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <img className='w-96 mx-auto' src="error.jpg" alt="" />
            <p className='text-3xl font-semibold mt-6'>404-Oops Page Not Found</p>
            <Link to="/"><button className='btn bg-gradient-to-r from-orange-600 to-orange-500 border-none mt-4'>Go to Homepage</button></Link>
        </div>
    );
};

export default ErrorPage;