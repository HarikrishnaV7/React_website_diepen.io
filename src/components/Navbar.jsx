import React, { useEffect, useState } from 'react';
import { FaBolt } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";


const Navbar = () => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFloating(true); 
      } else {
        setIsFloating(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isFloating ? "floating" : ""}`}>
      <div className='logo'>Dipen io</div>
      <div className='navcenter'>
        <button><a href="#Services">Services</a></button>
        <button><a href="#Whoweare">Who we are</a></button>
        <button><a href="#Testimonials">Testimonials</a></button>
      </div>
      <div className='navright'>
        <button className='AiBtn'>Integrate AI <FaBolt size={20}/> </button>
        <button className='callBtn'>Book a call <IoCall size={20}/> </button>
      </div>
    </nav>
  );
}

export default Navbar;
