import React from "react";
import { ButtonProps } from "./Button.type";


const Button: React.FC<ButtonProps> = ({
  text,
  isPrimary,
  isBGGreen,
  linkTo,
}) => {
  return (
    <a
      href={linkTo || "#"}
      className={
        isPrimary
          ? "bg-white w-fit h-fit rounded-lg text-green font-semibold font-Poppins text-balance p-4 content-center"
          : `font-Poppins content-center text-balance w-fit border-b-2 ${isBGGreen ? "border-b-green hover:border-b-green" : "border-b-white hover:border-b-white"} capitalize content-center`
      }
    >
      {text}
    </a>
  );
};

export default Button;
