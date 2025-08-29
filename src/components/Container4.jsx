import React from 'react'
import { FaRegSquareCheck } from "react-icons/fa6";
import * as piicons from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa";

const Container4 = () => {
  return (
    <div>
        <div className='container4'>
       <div className='card8'>
        <FaRegSquareCheck  size={30}/><br /><br /><br />
        <h4>Full-Service Delivery</h4>
        <p>From strategy and design to development and deployment - we handle your entire digital transformation journey.</p>
      </div>
       <div className='card8'>
        <piicons.PiLightbulbBold className='ricon' size={30} /><br /><br /><br />
        <h4>Latest Tech Stack</h4>
        <p>React, Next.js, React Native, AI integration, and cloud solutions using industry robust technologies.</p>
      </div>
       <div className='card8'>
        <FaRegHandshake size={30} /><br /><br /><br />
        <h4>Continuous Support</h4>
        <p>Long-term partnership with maintenance, updates, and evolution of your digital products as your business grows.</p>
      </div>
       <div className='bigcard'>
        <piicons.PiChartBarDuotone size={30}/><br /><br /><br /><br /><br />
        <h4>Business Impact</h4>
        <p>Solutions designed to drive real business results through automation, efficiency, and enhanced user experiences.</p>
      </div>
     </div>
    </div>
  )
}

export default Container4