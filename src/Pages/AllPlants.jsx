import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllPlants = () => {
    const allPlants = useLoaderData();
    console.log(allPlants);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th> Category</th>
                        <th>Watering Frequency</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    allPlants.map(plant => (
                        <tbody className='border-b border-gray-200' key={plant._id}>
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={plant.image}
                                                    alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-xl">{plant.name}</div>
                                            {/* <div className="text-sm opacity-50"></div> */}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='text-green-500 font-bold text-lg'>{plant.category}</div>
                                    {/* <br /> */}
                                    {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                </td>
                                <td className='text-sm font-bold text-emerald-500'>{plant.wateringFrequency}</td>
                                <th>
                                    {/* <button className="btn bg-green-500 text-white">details</button> */}
                                    <Link className="btn bg-green-500 text-white" to={`/plants-details/${plant._id}`}>Details</Link>
                                </th>
                            </tr>
                        </tbody>

                    ))
                }
            </table>
        </div>
    );
};

export default AllPlants; 