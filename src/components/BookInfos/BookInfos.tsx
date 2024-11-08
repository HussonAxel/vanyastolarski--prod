import { BookInfosProps } from "./BookInfos.type";

const BookInfos = ({ Synopsis, Contexte, picture, SynopsisSectionContent, ContexteSectionContent }: BookInfosProps) => {
  return (
    <>
      <div className="flex flex-row mx-auto w-fit gap-16 py-32">
        <img
          src={picture}
          alt=""
          className="rounded-md h-full w-auto max-h-[700px] shadow-2xl"
        />
        <div className="flex flex-col justify-center w-2/3 pl-20 max-w-3xl leading-relaxed">
          <h2 className="font-Cinzel font-myfont text-6xl text-green pb-4">
            {SynopsisSectionContent}
          </h2>
          <p className="mb-16 text-balance text-black font-Poppins font-light">
            {Synopsis}
          </p>
          <h2 className="font-Cinzel text-6xl text-green pb-4">
            {ContexteSectionContent}
          </h2>
          <p className="text-balance text-black font-Poppins font-light">
            {Contexte}
          </p>
        </div>
      </div>
    </>
  );
};
export default BookInfos;
