import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, chef_name, chef_photo, experience, likes, number_of_recipes } = chef;
    return (
        <div className='card w-3/4 h-full  bg-base-100 shadow-xl p-4'>
            <figure>
                <img className='w-48 h-28' src={chef_photo} alt="chef_photo" />
            </figure>
            <div className='card-body'>
                <h2 className="font-bold text-xl text-center">{chef_name}</h2>

                <div className='flex'>
                    <p className='font-semibold'>Years of Experience: {experience}+</p>
                    <p>{likes} <FontAwesomeIcon icon={faThumbsUp} /></p>

                </div>
                <p className='font-semibold text-center'>Number of Recipes: {number_of_recipes}</p>
                <div className='text-center'><Link to={`chef/${id}`}><button className="btn btn-outline btn-info">View Recipes </button></Link></div>


            </div>

        </div>
    );
};

export default ChefCard;