import React from 'react';
import Banner from '../../components/Banner/Banner';
import States from '../../components/States/States';
import TopApps from '../../components/TopApps/TopApps';
import { useLoaderData } from 'react-router';

const Home = () => {

    const apps = useLoaderData()
    return (
        <div >
            <Banner></Banner>
            <States></States>
            <TopApps apps={apps}></TopApps>
        </div>
    );
};

export default Home;