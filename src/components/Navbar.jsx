import React, { useEffect, useState } from 'react';
import { FaBolt } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";


const Navbar = () => {
  const [isFloating, setIsFloating] = useState(false);

    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

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
        <button onClick={() => scrollToSection("Services")}>Services</button>
        <button  onClick={() => scrollToSection("Whoweare")}>Who we are</button>
        <button  onClick={() => scrollToSection("Testimonials")}>Testimonials</button>
      </div>
      <div className='navright'>
        <button className='AiBtn'>Integrate AI <FaBolt size={20}/> </button>
        <button className='callBtn'>Book a call <IoCall size={20}/> </button>
      </div>
    </nav>
  );
}

export default Navbar;
