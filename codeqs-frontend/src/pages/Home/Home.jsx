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



export default Home;
