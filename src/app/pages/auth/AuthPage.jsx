import React, { useState } from "react";
import HouseCloseUpIMG from "../../../assets/images/house-close-up.jpg";
import logo from "../../../assets/logos/PropertEase-Logo-white_primary.png";
import { RegisterForm, SignInForm, SocialButtons } from "./components";

// AuthPage.js
const AuthPage = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const [message, setMessage] = useState("");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="flex items-center justify-center bg-gray-400 h-screen">
      {/* Background Image */}
      <img
        src={HouseCloseUpIMG}
        alt="house"
        className="absolute w-full h-full object-cover grayscale"
      />

      {/* Sign in card */}
      <div className="flex flex-col items-center z-30 bg-brand-charcoal-shade rounded-3xl text-white p-[2.5rem] w-[35vw]">
        {/* Logo */}
        <img
          src={logo}
          alt="propertease"
          className="mb-3"
          style={{ width: "15em" }}
        />
        <p className="mb-6">
          {message
            ? message
            : currentForm === "login"
            ? "Sign In to your account"
            : "Create your account."}
        </p>

        {/* 3rd Party sign in div */}
        <div className="flex w-full mb-6 h-full">
          <SocialButtons />

          {/* Sign In form div */}
          <div className="w-1/2 mx-4">
            {currentForm === "login" ? (
              <SignInForm setMessage={setMessage} />
            ) : (
              <RegisterForm setMessage={setMessage} />
            )}
          </div>
        </div>

        <div className="flex justify-evenly font-thin text-xs w-[50%]">
          <p className="w-[12rem] text-center">Forgot Password</p>
          <p>|</p>
          {currentForm === "login" ? (
            <button
              className="w-[12rem] text-center"
              onClick={() => toggleForm("register")}
            >
              Create Account
            </button>
          ) : (
            <button
              className="w-[12rem] text-center"
              onClick={() => toggleForm("login")}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
