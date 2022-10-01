import React from 'react';
import DynamicTitle from '../../Shared/dynamicTitle/DynamicTitle';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
        <DynamicTitle title='Home'></DynamicTitle>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;