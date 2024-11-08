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
      download={linkTo ? true : undefined}
      className={
        isPrimary
          ? "bg-white w-[140px] h-[40px] rounded-lg text-green font-semibold"
          : `w-fit border-b-2 ${isBGGreen ? "border-b-green hover:border-b-green" : "border-b-white hover:border-b-white"} capitalize content-center text-white`
      }
    >
      {text}
    </a>
  );
};

export default DownloadButton;
