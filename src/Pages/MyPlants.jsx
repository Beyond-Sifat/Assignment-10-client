import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { MdDelete } from 'react-icons/md';
import { FiEdit3 } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { Link } from 'react-router';


const MyPlants = () => {
    const { user } = useContext(AuthContext)
    const [myPlants, setMyPlants] = useState([]);

    const handleDelete = (_id) => {
        console.log(_id)


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-10-server-ecru-one.vercel.app/plants/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            setMyPlants(prev => prev.filter(plant => plant._id !== _id))
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your plant has been deleted.",
                                icon: "success"
                            });

                        }
                    })

            }
        });
    }

    useEffect(() => {
        if (user?.email) {
            fetch(`https://assignment-10-server-ecru-one.vercel.app/my-plants?email=${user.email}`)
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
               {
                myPlants.length === 0 ? (
                    <div className='p-20 rounded-4xl bg-gray-300'>
                        <p className="text-xl text-gray-500 my-10">You haven't added any plants yet.</p>
                    </div>
                 ) : (

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>
                    {
                        myPlants.map(plant => (
                            <div key={plant._id} className='p-4 rounded w-64'>
                                <img src={plant.image} alt={plant.name} className='w-full h-40 object-cover rounded' />
                                <h3 className='text-lg font-bold mt-2'>{plant.name}</h3>
                                <p className='text-sm text-gray-500'>{plant.category}</p>
                                <div>
                                    <p className='text-sm text-gray-500'>{plant.wateringFrequency}</p>
                                    <p className='text-sm text-gray-500'>{plant.careLevel}</p>
                                    <p className='text-sm text-gray-500'>{plant.healthStatus}</p>
                                </div>
                                <div className='mt-2 flex gap-2 justify-center'>
                                    <Link to={`/update-plants/${plant._id}`}>
                                        <button className='btn btn-sm bg-yellow-500 text-white'><FiEdit3 /></button>
                                    </Link>
                                    <button onClick={() => handleDelete(plant._id)} className='btn btn-sm bg-red-500 text-white'><MdDelete /></button>
                                </div>
                            </div>
                        ))}
                </div>
                 )}
            </div>

        </div>
    );
};

export default MyPlants;