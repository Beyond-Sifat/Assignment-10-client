import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useLoaderData } from 'react-router';

const MyPlants = () => {
    const myPlants = useLoaderData();
    const {user }= use(AuthContext)
    return (
        <div>
            <div className='my-10'>
                <h2 className='text-3xl text-center'>My Plants</h2>
            </div>
            <div className='text-center'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>
                    {
                        myPlants.map(plant => <div key={plant._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={plant.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{plant.name}</h2>
                                <p>{plant.description}</p>
                                <p>Price: {plant.price}</p>
                                <p>Seller: {user?.displayName}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default MyPlants;