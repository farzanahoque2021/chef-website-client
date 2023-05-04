import React from 'react';

const ChefCard = ({ chef }) => {
    const { id, chef_name, chef_photo, experience, likes } = chef;
    return (
        <div>
            <h2>{chef_name}</h2>
        </div>
    );
};

export default ChefCard;