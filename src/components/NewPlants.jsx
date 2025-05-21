import React from 'react';
import PlantCards from './PlantCards';

const NewPlants = ({newPlants}) => {
    return (
        <div>
            <div className='my-10'>
                <h2 className='text-3xl text-center'>New arrival</h2>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>
                    {
                        newPlants.map(plant => <PlantCards key={plant._id} plant={plant}></PlantCards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default NewPlants;