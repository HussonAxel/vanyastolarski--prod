import React from "react";
import { DownloadButtonProps } from "./DownloadButton.type";

const DownloadButton: React.FC<DownloadButtonProps> = ({
  text,
  isPrimary,
  isBGGreen,
  linkTo,
}) => {
  return (
    <a
      href={linkTo || "#"}
      download
      className={`
        font-WorkSans font-bold text-sm text-center uppercase w-full md:w-fit h-fit p-4 transition m-auto 
        ${
          isPrimary
            ? `${
                isBGGreen
                  ? "text-white bg-green hover:bg-green/90"
                  : "text-black/90 bg-white hover:bg-green/80"
              }`
            : `border-[1.66px] ${
                isBGGreen
                  ? "border-green text-green hover:bg-green hover:text-white"
                  : "border-white text-black/90 hover:bg-white/10"
              }`
        }
      `}
    >
      {text}
    </a>
  );
};

export default DownloadButton;
