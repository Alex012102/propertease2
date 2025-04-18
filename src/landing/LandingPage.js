import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";

import "../landing/styles/landing.css"
import BasicFeaturette from "./components/BasicFeaturette";
import AdvancedFeaturette from "./components/AdvancedFeaturette";
import Customers from "./components/Customers";
import TargetValue from "./components/TargetValue";
import ActionCall from "./components/ActionCall";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BasicFeaturette />
      <AdvancedFeaturette />
      <Customers />
      <TargetValue />
      <ActionCall />
    </div>
  );
};

export default LandingPage;
