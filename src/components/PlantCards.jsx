import React from 'react';
import { Link } from 'react-router';

const PlantCards = ({plant}) => {
    const {image}= plant
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="w-full h-64 overflow-hidden rounded-xl">
                <img
                    src= {image}
                    alt="Plants"
                    className="w-full h-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <div className="card-actions">
                     <Link className="btn bg-green-500 text-white" to={`/plants-details/${plant._id}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default PlantCards;