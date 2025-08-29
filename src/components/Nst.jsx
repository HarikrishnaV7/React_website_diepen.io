import React from 'react'
import * as piicons from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { LuDock } from "react-icons/lu";
import { HiOutlineSupport } from "react-icons/hi";

const Nst = () => {
  return (
    <div>
    <div className='nst'>
      <button>Navigating Success Together</button>
      <h1>We lead you through every step</h1>
      <p>From creative design to technical solutions, our services define <br /> industry excellence</p>
     </div>
    <div className='rcard' style={{backgroundColor:' rgba(254, 239, 220, 1)'}}>
      <div className='icon-heading'>
      <piicons.PiLightbulbBold className='ricon' size={23} />
      <h3>Discovery</h3>
      </div>
      <p>We start with understanding your business goals, target audience, and technical requirements.</p>
    </div>
    <div className='rcard' style={{backgroundColor:'rgba(223, 245, 210, 1)',transform: "rotate(5deg)",}}>
      <div className='icon-heading'>
      <GoSearch className='ricon' size={23} />
      <h3>Planning</h3>
      </div>
      <p>Strategic planning phase where we define the project scope, timeline, and technical architecture.</p>
    </div>
    <div className='rcard' style={{backgroundColor:'rgba(157, 248, 248, 1)',transform: "rotate(-5deg)"}}>
      <div className='icon-heading'>
      <LuDock className='ricon' size={23} />
      <h3>Build & Test</h3>
      </div>
      <p>Development with weekly demos, continuous testing, and iterative improvements based on your feedback.</p>
    </div>
    <div className='rcard' style={{backgroundColor:'rgba(238, 238, 255, 1)',transform: "rotate(5deg)"}}>
      <div className='icon-heading'>
      <piicons.PiCodeDuotone className='ricon' size={23} />
      <h3>Go Live</h3>
      </div>
      <p>Launch preparation, performance optimization, and deployment to production environments.</p>
    </div>
    <div className='rcard' style={{backgroundColor:'rgba(232, 220, 252, 1)',transform: "rotate(-5deg)"}}>
      <div className='icon-heading'>
      <piicons.PiRocketBold className='ricon' size={23} />
      <h3>Growth</h3>
      </div>
      <p>Post-launch optimization, analytics review, and strategic recommendations for scaling.</p>
    </div>
    <div className='rcard' style={{backgroundColor:'rgba(254, 218, 204, 1)',transform: "rotate(5deg)"}}>
      <div className='icon-heading'>
      <HiOutlineSupport  className='ricon' size={23} />
      <h3>Support</h3>
      </div>
      <p>Ongoing maintenance, updates, and feature development to keep your digital products competitive.</p>
    </div>
    </div>
  )
}

export default Nst