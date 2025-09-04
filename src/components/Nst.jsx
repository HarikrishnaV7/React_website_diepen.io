import React from "react";
import * as piicons from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { LuDock } from "react-icons/lu";
import { HiOutlineSupport } from "react-icons/hi";

const Nst = () => {
  const cards = [
    {
      id: 1,
      icon: <piicons.PiLightbulbBold size={23} />,
      title: "Discovery",
      text: "We start with understanding your business goals, target audience, and technical requirements.",
      bg: "rgba(254, 239, 220, 1)",
      rotate: "rotate(0deg)",
    },
    {
      id: 2,
      icon: <GoSearch size={23} />,
      title: "Planning",
      text: "Strategic planning phase where we define the project scope, timeline, and technical architecture.",
      bg: "rgba(223, 245, 210, 1)",
      rotate: "rotate(5deg)",
    },
    {
      id: 3,
      icon: <LuDock size={23} />,
      title: "Build & Test",
      text: "Development with weekly demos, continuous testing, and iterative improvements based on your feedback.",
      bg: "rgba(157, 248, 248, 1)",
      rotate: "rotate(-5deg)",
    },
    {
      id: 4,
      icon: <piicons.PiCodeDuotone size={23} />,
      title: "Go Live",
      text: "Launch preparation, performance optimization, and deployment to production environments.",
      bg: "rgba(207, 207, 252, 1)",
      rotate: "rotate(5deg)",
    },
    {
      id: 5,
      icon: <piicons.PiRocketBold size={23} />,
      title: "Growth",
      text: "Post-launch optimization, analytics review, and strategic recommendations for scaling.",
      bg: "rgba(232, 220, 252, 1)",
      rotate: "rotate(-3deg)",
    },
    {
      id: 6,
      icon: <HiOutlineSupport size={23} />,
      title: "Support",
      text: "Ongoing maintenance, updates, and feature development to keep your digital products competitive.",
      bg: "rgba(254, 218, 204, 1)",
      rotate: "rotate(2deg)",
    },
  ];

  return (
    <div className="nst">
      <button>Navigating Success Together</button>
      <h1>We lead you through every step</h1>
      <p>
        From creative design to technical solutions, our services define <br />
        industry excellence
      </p>

      <div className="stack-container">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="rcard sticky-card"
            style={{
              backgroundColor: card.bg,
              transform: card.rotate,
              zIndex: index + 1,
            }}
          >
            <div className="icon-heading">
              <span className="card-icon">{card.icon}</span>
              <h3 className="card-heading">{card.title}</h3>
            </div>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nst;
