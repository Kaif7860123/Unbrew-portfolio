import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='row r1'>
    <div className='col-4'><h1 className='brand'>Unbrew.</h1></div>
    <div className='col-8'>
      <ul>
        <li className='list'><Link to="/home" className='active'>HOME</Link></li>
        <li className='list'><Link to="/about">ABOUT</Link></li>

        <li className='list'><Link to="/service">SERVICES</Link></li>

        <li className='list'><Link to="/price">PRICING</Link></li>

        <li className='list'><Link to="/work">WORK</Link></li>

        <li className='list'><Link to="/blog">BLOG</Link></li>

       <li className='list'><Link to="/contactus">CONTACT US</Link></li>

      </ul>
    </div>
    
  </div>
  )
}

export default Navbar
