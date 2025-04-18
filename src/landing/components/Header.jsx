import React from "react";
import logo from "../../assets/logos/propertease_dark_logo.png";
import Navbar from "./Navbar";
import { Button } from "../../app/components";

const Header = () => {
  return (
    <div id="header">
      <div className="container mx-auto flex justify-between items-center my-4">
        <img
          src={logo}
          alt="propertease"
          style={{ maxWidth: "160px", width: "9em" }}
        />
        <Navbar />
        <Button text={"Log In"} color="secondary" to="/auth" />
      </div>
    </div>
  );
};

export default Header;
