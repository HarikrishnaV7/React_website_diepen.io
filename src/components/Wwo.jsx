import React, { useState } from 'react'
import { GiCheckMark } from "react-icons/gi";

const Wwo = () => {
    const[active,setactive]=useState(0);
    const cardsets=[
     //DIgitization
    [
        {title:"Build",items:["Web Development","App Development","E-Commerce Platforms","Custom Software"]},
        {title:"Design",items:["UI/UX Design","Brand Identity","Design Systems","Prototyping"]},
        {title:"Modernization",items:["Automation Solutions","AI Agents","SEO","Analytics"]},
        {title:"Other",items:["Auth & Payments","API Integration","Cloud Architecture","Consulting"]},
    ],
    [
        {title:"Build",items:["AI-Powered Applications","Data Processing Pipelines","Custom Analytics Platforms","Machine Learning Models"]},
        {title:"Design",items:["Dashboard Design","Data Visualization","Analytics UX/UI","Reporting Systems"]},
        {title:"Modernization",items:["Business Intelligence","Predictive Analytics","Process Automation","Real-time Monitoring"]},
        {title:"Other",items:["Data Integration","Cloud Analytics","AI Strategy Consulting","Training & Support"]},
    ],
    [
        {title:"Build",items:["Design System Development","Component Libraries","Interactive Prototypes","Design Tools & Workflows"]},
        {title:"Design",items:["User Experience Design","Visual Identity Systems","Product Design","Brand Guidelines"]},
        {title:"Modernization",items:["Design System Migration","Accessibility Improvements","Mobile-First Redesign","Performance Optimization"]},
        {title:"Other",items:["Design Consulting","User Research","Design Training","Quality Assurance"]},
    ],
    [
        {title:"Build",items:["Infrastructure Setup","Security Implementation","API Development","System Architecture"]},
        {title:"Design",items:["Technical Documentation","Architecture Diagrams","System Design","Process Mapping"]},
        {title:"Modernization",items:["Legacy System Updates","Cloud Migration","Security Upgrades","Performance Enhancement"]},
        {title:"Other",items:["Strategic Planning","Technical Audits","Team Training","Ongoing Support"]},
    ]
    ]
  return (
    <div>
        <div className='wwo'>
        <button>what we offer</button>
        <p>Tailored solutions crafted to elevate your vision.</p>
      </div>

<div className='box4'>
  {["Digitization", "Intelligence & Analytics","Design & Experience","Strategic & Technical"].map(
    (btn,index)=>(
        <button key={index} onClick={()=>setactive(index)} className={active === index ? "active-btn" : ""}>{btn}</button>
    )
  )}
</div>

<div className='cards4'>
{cardsets[active].map((card,idx)=>(
    <div key={idx} className='card'><h4>{card.title}</h4>
    {card.items.map((item,i)=>(
        <p key={i} ><GiCheckMark className='tickbox' />  {item}</p>
    ))}
    </div>
))}
</div>
    </div>
  )
}

export default Wwo