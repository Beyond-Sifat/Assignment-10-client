import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';


const MyPlants = () => {
    const { user } = useContext(AuthContext)
    const [myPlants, setMyPlants] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/my-plants?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyPlants(data)
                });
        }
    }, [user]);

    return (
        <div>
            <div className='my-10'>
                <h2 className='text-3xl text-center'>My Plants</h2>
            </div>
            <div className='text-center'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>
                    {
                        myPlants.map(plant => (
                            <div key={plant._id} className='p-4 rounded w-64'>
                                <img src={plant.image} alt={plant.name} className='w-full h-40 object-cover rounded' />
                                <h3 className='text-lg font-bold mt-2'>{plant.name}</h3>
                                <p className='text-sm text-gray-500'>{plant.category}</p>
                                <div className='mt-2 flex gap-2 justify-center'>
                                    <button className='btn btn-sm bg-yellow-500 text-white'>Update</button>
                                    <button className='btn btn-sm bg-red-500 text-white'>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default MyPlants;