import React from 'react';
import { useLoaderData } from 'react-router';

const PlantDetails = () => {
    const plant = useLoaderData();
    // console.log(plant);
    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
      <img src={plant.image} alt={plant.name} className="w-full rounded mb-4" />
      <h2 className="text-3xl font-bold mb-2">{plant.name}</h2>
      <p className="text-lg text-gray-700 mb-2">Category: {plant.category}</p>
      <p className="text-lg text-gray-700 mb-2">Care Level: {plant.careLevel}</p>
      <p className="text-lg text-gray-700 mb-2">Watering Frequency: {plant.wateringFrequency}</p>
      <p className="text-lg text-gray-700 mb-2">Last Watered: {plant.lastWatered}</p>
      <p className="text-lg text-gray-700 mb-2">Next Watering: {plant.nextWatering}</p>
      <p className="text-lg text-gray-700 mb-2">Health Status: {plant.healthStatus}</p>
      <p className="text-lg text-gray-700 mb-2">Added by: {plant.userName} ({plant.userEmail})</p>
      <p className="text-gray-600 mt-4">{plant.description}</p>
    </div>
    );
};

export default PlantDetails;