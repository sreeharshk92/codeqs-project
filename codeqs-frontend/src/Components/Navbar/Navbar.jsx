import logo from '../../assets/logo.png'
import './Navbar.css'
import { FiSearch } from "react-icons/fi"; // Import arrow icons


const Nav = () => {
  return (
    <div className="navbar">
        <div className="navbar-left">
        <img src={logo} alt="" className='logo-img' />
        <>
        <input type="search" name="" id="" />
          <FiSearch className='search-icon' />
        </>
        </div>
    </div>
  )
}

export default Nav