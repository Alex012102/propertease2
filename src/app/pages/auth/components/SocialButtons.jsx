import React from "react";
import { Google, Facebook, Apple } from "../../../../assets/icons";

const SocialButton = ({ src, alt, text }) => {
  return (
    <div className="flex items-center w-full px-4 py-2 border rounded-md">
      <img src={src} alt={alt} className="h-6" />
      <span className="flex-1 text-center font-medium">{text}</span>
    </div>
  );
};

const SocialButtons = () => {
  return (
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
  );
};

export default SocialButtons;
