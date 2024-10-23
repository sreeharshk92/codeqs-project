<<<<<<< HEAD
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
=======
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Fcourse from '../../Components/Featuredcourse/Fcourse';

import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Fcourse/>
     
      
      <Footer/>
    </div>
  );
};


>>>>>>> home

export default Home;
