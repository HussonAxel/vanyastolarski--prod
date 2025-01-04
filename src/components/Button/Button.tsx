import React from "react";
import { ButtonProps } from "./Button.type";
import { Link } from "@tanstack/react-router";

const Button: React.FC<ButtonProps> = ({
  text,
  isPrimary,
  isBGGreen,
  linkTo,
  className,
  disabled,
}) => {
  const baseStyles =
    "font-WorkSans font-bold text-sm uppercase inline-block w-full md:w-fit p-4 transition duration-300 ease-in-out text-center m-auto md:m-0";

  const variantStyles = isPrimary
    ? isBGGreen
      ? "text-green bg-white hover:bg-white/80"
      : "text-white bg-green border-white hover:bg-green/80"
    : `border-[1.66px] ${
        isBGGreen
          ? "border-white text-white hover:bg-white/10"
          : "border-green text-green hover:bg-green/10"
      }`;

  const combinedStyles = `${baseStyles} ${variantStyles} ${className || ""}`;

  return linkTo ? (
    <Link to={linkTo} className={combinedStyles} disabled={disabled}>
      {text}
    </Link>
  ) : (
    <button className={combinedStyles} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
