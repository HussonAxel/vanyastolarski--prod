import { CharacterPanelProps } from "./CharacterPanel.type";

const CharacterPanel = ({ name, resume, picture }: CharacterPanelProps) => {
  return (
    <article className="flex flex-col sm:flex-row w-full sm:w-fit gap-4 sm:gap-6 md:gap-8 lg:gap-12 p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-300 rounded-lg">
      {/* Image Container */}
      <div className="flex-shrink-0 w-full sm:w-auto">
        <img
          src={picture}
          alt={`Character ${name}`}
          className="rounded-lg shadow-lg w-full sm:w-auto h-[200px] sm:h-[180px] md:h-[200px] object-cover hover:scale-[1.02] transition-transform duration-300"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-center space-y-3 sm:space-y-4">
        <h3 className="font-WorkSans text-2xl sm:text-2xl md:text-3xl text-black font-semibold tracking-tight">
          {name}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 font-WorkSans leading-relaxed max-w-prose">
          {resume}
        </p>
      </div>
    </article>
  );
};

export default CharacterPanel;
