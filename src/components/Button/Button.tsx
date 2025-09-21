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
    "font-WorkSans font-bold text-sm tracking-wide uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3 transition duration-200 ease-out text-center m-auto md:m-0 rounded-lg shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/60 focus-visible:ring-offset-2 transform-gpu will-change-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none";

  const variantStyles = isPrimary
    ? isBGGreen
      ? "text-green bg-white hover:bg-white/80 active:bg-white/70 border border-transparent"
      : "text-white bg-green hover:bg-green/80 active:bg-green/70 border border-transparent"
    : `border-[1.66px] ${
        isBGGreen
          ? "border-white text-white hover:bg-white/10 active:bg-white/15"
          : "border-green text-green hover:bg-green/10 active:bg-green/15"
      }`;

  const combinedStyles = `${baseStyles} ${variantStyles} ${className || ""}`;

  if (linkTo && !disabled) {
    return (
      <Link to={linkTo} className={combinedStyles}>
        {text}
      </Link>
    );
  }

  return (
    <button
      className={combinedStyles}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
