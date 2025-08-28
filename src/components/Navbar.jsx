import React from 'react'
import { FaBolt } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>Dipen io</div>
        <div className='navcenter'>
            <button>Services</button>
            <button>Who we are</button>
            <button>Testimonials</button>
        </div>
        <div className='navright'>
            <button className='AiBtn'>Integrate AI <FaBolt size={20}/> </button>
            <button className='callBtn' >Book a call <IoCall size={20}/> </button>
        </div>
    </nav>
    
  )
}

export default Navbar