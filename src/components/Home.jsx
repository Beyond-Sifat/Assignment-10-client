import React from 'react';
import NewPlants from './NewPlants';
import { useLoaderData } from 'react-router';
import Banner from './Banner';
import Tips from './Tips';

const Home = () => {
    const data = useLoaderData();
    const six = [...data].reverse().slice(0, 6);
    return (
        <div>
            <Banner></Banner>
           <NewPlants newPlants = {six}></NewPlants>
           <Tips></Tips>
        </div>
    );
};

export default Home;