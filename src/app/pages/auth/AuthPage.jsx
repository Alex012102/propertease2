// AuthPage.js
import React from "react";
import { useAuth } from "../../../context/AuthContext";
import HouseCloseUpIMG from "../../../assets/images/house-close-up.jpg";
import logo from "../../../assets/logos/PropertEase-Logo-white_primary.png";
import { Google, Facebook, Apple } from "../../../assets/icons";
import { SignInForm, SocialButton } from "./components";
import mockUser from "../../../utils/mocks/mockUser";

const AuthPage = () => {
  const { login } = useAuth();

  const handleLogin = (email, password) => {
    // Simulate login with mockUser
    if (email === mockUser.email && password === mockUser.password) {
      login(mockUser); // If credentials match, log the user in
    } else {
      console.log("Invalid email or password");
    }
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
        <p className="mb-6">Sign in to access your account.</p>

        {/* 3rd Party sign in div */}
        <div className="flex w-full mb-6 h-full">
          <div className="flex flex-col justify-between h-full w-1/2 mx-4 space-y-2">
            {[
              { src: Google, alt: "Google", text: "Continue with Google" },
              {
                src: Facebook,
                alt: "Facebook",
                text: "Continue with Facebook",
              },
              { src: Apple, alt: "Apple", text: "Continue with Apple" },
            ].map((social) => (
              <SocialButton key={social.alt} {...social} />
            ))}
          </div>

          {/* Sign In form div */}
          <div className="w-1/2 mx-4">
            <SignInForm handleLogin={handleLogin} />
          </div>
        </div>

        <div className="flex justify-between font-thin text-xs w-[12rem]">
          <p>Forgot Password</p>
          <p>|</p>
          <p>Create Account</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
