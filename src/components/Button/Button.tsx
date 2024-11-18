import React from "react";
import { ButtonProps } from "./Button.type";
import { Link } from "@tanstack/react-router";

const Button: React.FC<ButtonProps> = ({
  text,
  isPrimary,
  isBGGreen,
  linkTo,
}) => {
  return (
    <Link
      to={linkTo || "/"}
      className={`
        font-WorkSans font-bold text-sm uppercase w-full md:w-fit h-fit p-4 transition duration-300 ease-in-out text-center m-auto md:m-0
        ${isPrimary 
          ? `${isBGGreen 
              ? "text-green bg-white hover:bg-green hover:text-white" 
              : "text-white bg-green hover:bg-green/80"}`
          : `border-[1.66px] ${isBGGreen 
              ? "border-white text-white hover:bg-white/10" 
              : "border-green text-green hover:bg-green hover:text-white"}`
        }
      `}
    >
      {text}
    </Link>
  );
};

export default Button;