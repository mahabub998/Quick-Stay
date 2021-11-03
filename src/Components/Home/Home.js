import React from 'react';
import Second from './Second/Second';
import './Home.css';
import Header from './Header/Header';
import WeOffered from '../WeOffered/WeOffered';
import LocationPart from '../LocationPart/LocationPart';
import User from '../User/User';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <LocationPart />
            <WeOffered />
            <Second />
            <User />
            <Footer />
        </div>

    );
};

export default Home;