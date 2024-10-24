import React from 'react'
import subscribe from '../../assets/subcr.png'

import './sbar.css'

const Sbar = () => {
  return (
    <div className='main-sbaner'>

      <img src={subscribe} alt="" />
      <h1>Subscribe For Get Update Every New Courses</h1>
      <p>20+ srudents daily learn with CODE QS. Subscribe for new courses</p>
      <div>
     <input type="text"placeholder='Enter your email..' />
     <button className='buttonsbr'>Subsribe</button>
     </div>
    




    </div>
  )
}

export default Sbar
