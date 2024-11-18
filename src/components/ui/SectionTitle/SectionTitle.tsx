import { SectionTitleProps } from "./SectionTitle.type";

export default function SectionTitle({ title, isGreen }: SectionTitleProps) {
  return (
    <h1
      className={`text-center font-WorkSans text-4xl md:text-5xl uppercase ${isGreen ? "text-white" : "text-black"} mb-16 w-fit max-w-[80%] m-auto`}
    >
      {title}
    </h1>
  );
}
