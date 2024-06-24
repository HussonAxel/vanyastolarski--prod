import { QuoteTemplateProps } from "./QuoteTemplate.type";



const QuoteTemplate: React.FC<QuoteTemplateProps> = ({BookQuote, DateQuote, SentenceQuote, AuthorSentence, BookCover, BookCoverAlt}) => {
  return (
    <section className="bg-white">
      <article className="flex  md:flex-row justify-between items-start w-4/5  text-green m-auto py-10 font-Poppins">
        <div className="md:w-1/4">
          <h2 className="font-bold text-xl">{BookQuote}</h2>
          <p className="text-md italic">{DateQuote}</p>
        </div>
        <div className="md:w-2/4 flex flex-col">
          <p className="font-semibold text-lg mb-6">{SentenceQuote}</p>
          <p className="text-md italic mt-6">{AuthorSentence}</p>
        </div>
        <div>
          <img
            className="object-contain h-64 rounded-xl"
            src={BookCover}
            alt={BookCoverAlt || "Book cover"}
          />
        </div>
      </article>
      <hr className="m-auto w-4/5 border-solid border-1 bg-green" />
    </section>
  );
};

export default QuoteTemplate;
