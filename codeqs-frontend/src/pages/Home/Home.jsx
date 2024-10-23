import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Welcome to the Home Page!</h1>
            <Footer />
        </div>
    );
};

export default Home;
