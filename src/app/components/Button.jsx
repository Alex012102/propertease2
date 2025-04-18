import React from "react";
import { useNavigate } from "react-router-dom";

import { buttonColors } from "../../config/colors";

const Button = ({ text, color = "secondary", to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to); // Navigate to the auth page
    }
  };

  return (
    <button
      className={`rounded-md py-1.5 px-3 border border-transparent text-center text-sm transition-all shadow-sm hover:shadow focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${buttonColors[color]}`}
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
