import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import BestSeller from './BestSeller';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BestSeller></BestSeller>
        </div>
    );
};

export default Home;