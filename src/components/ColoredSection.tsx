import React from "react";

interface ColoredSectionProps {
  children: React.ReactNode;
  bgColor: string;
  className?: string;
}

const ColoredSection: React.FC<ColoredSectionProps> = ({
  children,
  bgColor,
  className,
}) => (
  <div className={`w-full py-20 ${bgColor} ${className}`}>
    <div>{children}</div>
  </div>
);

export default ColoredSection;
