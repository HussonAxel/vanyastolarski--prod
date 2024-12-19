import React from "react";
import { DownloadButtonProps } from "./DownloadButton.type";

const DownloadButton: React.FC<DownloadButtonProps> = ({
  text,
  isPrimary,
  isBGGreen,
  linkTo,
}) => {
  const baseStyles =
    "font-WorkSans font-bold text-sm uppercase inline-block w-full md:w-fit p-4 transition duration-300 ease-in-out text-center m-auto md:m-0";

  const variantStyles = isPrimary
    ? isBGGreen
      ? "text-white bg-green hover:bg-green/90"
      : "text-black/90 bg-white hover:bg-green/80"
    : `border-[1.66px] ${
        isBGGreen
          ? "border-green text-green hover:bg-green hover:text-white"
          : "border-white text-black/90 hover:bg-white/10"
      }`;

  return (
    <a
      href={linkTo || "#"}
      download
      className={`${baseStyles} ${variantStyles}`}
    >
      {text}
    </a>
  );
};

export default DownloadButton;
