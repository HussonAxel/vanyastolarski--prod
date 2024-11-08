import React from "react";

interface ColoredSectionProps {
  children: React.ReactNode;
  bgColor: string;
}

const ColoredSection: React.FC<ColoredSectionProps> = ({
  children,
  bgColor,
}) => (
  <div className={`w-full ${bgColor}`}>
    <div className="w-4/5 mx-auto">{children}</div>
  </div>
);

export default ColoredSection;
