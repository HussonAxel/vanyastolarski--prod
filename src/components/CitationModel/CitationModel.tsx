import { CitationModelProps } from "./CitationModel.type";

const CitationModel: React.FC<CitationModelProps> = ({
  quoteNumber,
  CreatedAt,
  Quote,
  AuthorOfQuote,
}) => {
  return (
    <article className="font-WorkSans border-b-[1px] border-b-black/40 first-of-type:border-t-[1px] last-of-type:border-b-0 border-t-black/40 flex flex-col sm:flex-row w-full md:w-10/12 mx-auto justify-between py-12 gap-8">
      <span className="text-black/80 shrink-0">
        {quoteNumber} — {CreatedAt}
      </span>

      <div className="flex flex-col gap-12 md:max-w-[800px]">
        <blockquote className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-black/90">{Quote}</h2>
          <cite className="text-lg italic not-italic:font-normal">
            — {AuthorOfQuote}
          </cite>
        </blockquote>
      </div>
    </article>
  );
};

export default CitationModel;
