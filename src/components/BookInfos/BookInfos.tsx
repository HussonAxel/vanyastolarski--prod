import { BookInfosProps } from "./BookInfos.type";

const BookInfos = ({
  Synopsis,
  Contexte,
  picture,
  SynopsisSectionContent,
  ContexteSectionContent,
  BookSaga,
  BookTitle,
}: BookInfosProps) => {
  const Section = ({ title, content }: { title: string; content: string }) => (
    <div className="mb-8">
      <h2 className="font-Large text-2xl md:text-3xl lg:text-4xl text-green pb-4 md:pb-6 lg:pb-8 underline">
        {title}
      </h2>
      <p className="text-black font-WorkSans text-base md:text-lg leading-relaxed">
        {content}
      </p>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-green font-Large text-center mb-12 md:mb-16 lg:mb-32 ">
        <h1 className="text-4xl md:text-5xl lg:text-7xl mb-2 md:mb-4 underline ">
          {BookSaga}
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl">{BookTitle}</h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 place-content-center">
        {/* Book Cover Image */}
        <div className="w-full lg:w-auto flex justify-center">
          <img
            src={picture}
            alt="Book cover"
            className="rounded-md w-auto max-w-full lg:max-w-lg h-auto max-h-[500px] lg:max-h-[550px] shadow-2xl"
          />
        </div>

        {/* Book Information */}
        <div className="w-full lg:w-2/3 max-w-3xl space-y-8 lg:pl-8">
          <Section title={SynopsisSectionContent} content={Synopsis} />
          <Section title={ContexteSectionContent} content={Contexte} />
        </div>
      </div>
    </div>
  );
};

export default BookInfos;
