import React from 'react';
import PlantCards from './PlantCards';
import { Link } from 'react-router';
import Lottie from 'lottie-react';
import animation from '../assets/animation/Animation - 1747981154431.json'

const NewPlants = ({ newPlants }) => {
    return (
        <div >
            <div className='my-10'>
                <h2 className='text-3xl text-center'>New arrival</h2>
            </div>
            <div className='w-full'>
                <Lottie animationData={animation} loop={true}></Lottie>
            </div>
            <div className='text-center'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>
                    {
                        newPlants.map(plant => <PlantCards key={plant._id} plant={plant}></PlantCards>)
                    }
                </div>
                <Link className="btn px-9 my-10 bg-green-500 text-white" to='/all-plants'>View All</Link>
            </div>
        </div>
    );
};

export default NewPlants;