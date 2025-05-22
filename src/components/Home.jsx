import React from 'react';
import NewPlants from './NewPlants';
import { useLoaderData } from 'react-router';
import Banner from './Banner';

const Home = () => {
    const data = useLoaderData();
    const six = [...data].reverse().slice(0, 6);
    return (
        <div>
            <Banner></Banner>
           <NewPlants newPlants = {six}></NewPlants>
        </div>
    );
};

export default Home;