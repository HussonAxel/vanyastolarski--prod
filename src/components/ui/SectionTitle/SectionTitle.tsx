import { SectionTitleProps } from "./SectionTitle.type";

export default function SectionTitle({ title, isGreen }: SectionTitleProps) {
  return (
    <h1
      className={`text-center font-Cinzel text-6xl ${isGreen ? "text-green" : "text-white"} border-b-4 mb-24 w-fit m-auto`}
    >
      {title}
    </h1>
  );
}
