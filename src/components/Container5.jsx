import React from 'react'
import { PiCalendarBlankLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

const Container5 = () => {
  return (
    <div>
    <div className='container-5'>
      <p>Your project - implemented with confidence</p>
      <h1>Ready when you are</h1>
      <span>Let's discuss your project and explore how we can help <br /> transform your digital presence.</span>
      <div className='c5btn'>
           <button className='schbtn'><PiCalendarBlankLight size={20}/> Schedule a call </button>
        <button className='emailbtn'><TfiEmail size={18}/> Send an Email</button>
      </div>
     </div>
    </div>
  )
}

export default Container5