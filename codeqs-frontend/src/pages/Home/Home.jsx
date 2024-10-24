import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Fcourse from '../../Components/Featuredcourse/Fcourse';

import './Home.css';
import Sbar from '../../Components/S-Banner/Sbar';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Fcourse/>
     
      <Sbar/>
      <Footer/>
    </div>
  );
};



export default Home;
