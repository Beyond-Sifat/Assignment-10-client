import React from 'react';
import NewPlants from './NewPlants';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
           <NewPlants newPlants = {data}></NewPlants>
        </div>
    );
};

export default Home;