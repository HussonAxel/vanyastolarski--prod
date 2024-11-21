import React from "react";

interface ColoredSectionProps {
  children: React.ReactNode;
  bgColor: string;
}

const ColoredSection: React.FC<ColoredSectionProps> = ({
  children,
  bgColor,
}) => (
  <div className={`w-full ${bgColor} py-20 md:py-32`}>
    <div>{children}</div>
  </div>
);

export default ColoredSection;
