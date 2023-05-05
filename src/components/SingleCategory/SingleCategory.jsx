import React from 'react';
import { Link } from 'react-router-dom';


const SingleCategory = ({ category }) => {
    const { id, name } = category;
    return (
        <div>
            <Link to={`category/${id}`}>
                <div className='bg-white hover:bg-orange-50 hover:border-2 hover:border-orange-400 shadow-lg w-44 h-44 rounded p-5 flex justify-center items-center'>

                    <p className='font-bold text-orange-600 text-2xl'>{name}</p>

                </div></Link>

        </div>
    );
};

export default SingleCategory;