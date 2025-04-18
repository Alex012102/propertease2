import React, { useState } from "react";

import messagingImg from "../../assets/images/Messaging.png";
import paymentsImg from "../../assets/images/Payments Image.png";
import signingImg from "../../assets/images/Signing.png";

const features = [
  {
    title: "Rent Collection & Payment Processing",
    description:
      "A streamlined system for tenants to pay rent online, with automated reminders, tracking, and direct deposit into the landlord’s account.",
    image: paymentsImg,
  },
  {
    title: "Tenant & Lease Management",
    description:
      "A centralized platform to store lease agreements, track lease expirations, manage tenant communications, and handle applications or renewals.",
    image: signingImg,
  },
  {
    title: "Maintenance Request Management",
    description:
      "A system for tenants to submit maintenance requests, allowing landlords to assign work orders to vendors and track progress efficiently.",
    image: messagingImg,
  },
];

const Featurette = ({ title, description, onHover }) => {
  return (
    <div
      className="max-w-[41em] p-6 bg-transparent transition-all duration-300 ease-in-out transform 
                 hover:translate-x-2 hover:-translate-y-2 hover:bg-brand-subtle hover:shadow-md 
                 rounded-2xl cursor-pointer"
      onMouseEnter={onHover}
    >
      <h5 className="subheading font-bold">{title}</h5>
      <p className="body-text">{description}</p>
    </div>
  );
};

const BasicFeaturette = () => {
  const [currentImage, setCurrentImage] = useState(messagingImg);

  return (
    <div className="section">
      <h3 className="subtitle">Essential Features for Smart Landlords.</h3>
      <div className="flex items-center p-12 justify-around h-full">
        {/* Dynamic Image */}
        <img
          src={currentImage}
          alt="feature"
          className="transition-all duration-300"
        />

        {/* Featurettes */}
        <div className="flex flex-col justify-around h-full">
          {features.map((feature, index) => (
            <Featurette
              key={index}
              title={feature.title}
              description={feature.description}
              onHover={() => setCurrentImage(feature.image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicFeaturette;
