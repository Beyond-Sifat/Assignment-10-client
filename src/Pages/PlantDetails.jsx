import React from 'react';
import { useLoaderData } from 'react-router';

const PlantDetails = () => {
    const plants = useLoaderData();
    console.log(plants);
    return (
        <div>
            
        </div>
    );
};

export default PlantDetails;