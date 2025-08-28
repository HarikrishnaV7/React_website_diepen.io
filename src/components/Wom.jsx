import React,{useState} from 'react'
import { FaChevronDown } from 'react-icons/fa';

const Wom = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const questions=[
    {
      q:"What's your development process?",
      a:"We start with understanding your business goals, create a technical roadmap and design system, then build with weekly demos and your feedback at every step."
    },
    {
      q:"Can you help with our brand identity?",
      a:"Yes, we offer complete brand identity services including logo design, visual systems, and brand guidelines that work across digital platforms."
    },
    {
      q:"Do you work with existing development teams?",
      a:"Absolutely. We can supplement your team's capabilities, lead specific initiatives, or handle complete project ownership depending on your needs."
    },
    {
      q:"What's the typical timeline for a web application?",
      a:"Most web applications take 6-8 weeks from concept to launch, including design, development, testing, and deployment with ongoing support."
    },
    {
      q:"What software is used?",
      a:"We use a wide variety of technologies that fit the project the best and get us to your goals effectively."
    },
    {
      q:"Can you help us with just X?",
      a:"If you have specific requirements which are not talked about here we still might be able to help you. Just shoots us an email or schedule a quick call and we can talk about your projects and if we can help."
    }
  ];
   const toggleBox = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
        <div className='wom'>
      <h1>What's on your mind?</h1>
      <p>Find quick answers to commonly asked questions.</p>
     </div>
     <div className='wom-boxes'>
        {questions.map((item, index) => (
          <div
            key={index}
            className={`wom-box ${activeIndex === index ? "open" : ""}`}
            onClick={() => toggleBox(index)}
          >
            <div className="question-row">
            <p className="question">{item.q}</p>
               <FaChevronDown
                className={`icon ${activeIndex === index ? "rotate" : ""}`}
              />
              </div>
            {activeIndex === index && (
              <p className="answer">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wom