import { CitationModelProps } from "./CitationModel.type";

const CitationModel: React.FC<CitationModelProps> = ({
  quoteNumber,
  CreatedAt,
  Quote,
  AuthorOfQuote,
  Thoughts,
}) => {
  return (
    <article className="font-WorkSans border-b-[0.5px] first-of-type:border-t-[0.5px] flex flex-col sm:flex-row w-full md:w-10/12 m-auto justify-between py-12 gap-8">
      <div className=" text-black/80 mb-8">
        {quoteNumber} — {CreatedAt}
      </div>
      <div className="w-full md:max-w-3/4 md:max-w-[800px]">
        <div className="mb-12 gap-4 flex flex-col">
          <h2 className="font-semibold text-2xl">"{Quote}"</h2>
          <p className="text-lg italic"> — {AuthorOfQuote}</p>
        </div>
        <div>
          <p className="text-black/80">{Thoughts}</p>
        </div>
      </div>
    </article>
  );
};

export default CitationModel;
