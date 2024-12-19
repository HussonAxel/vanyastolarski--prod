import React from "react";
import { QuoteTemplateProps } from "./QuoteTemplate.type";
import Button from "@components/Button/Button";

const QuoteTemplate: React.FC<QuoteTemplateProps> = ({
  BookSaga,
  BookTitle,
  BookResume,
  isbn,
  BookCover,
  BookCoverAlt,
  bookSlug,
  BookDate,
}) => {
  return (
    <article className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16 lg:mb-24 pb-12 md:pb-16 lg:pb-24 font-WorkSans border-b border-b-green">
      <div className="flex flex-col sm:flex-row gap-6 md:gap-8 lg:gap-12">
        {/* Book Cover Container */}
        <div className="w-full max-w-[280px] mx-auto sm:mx-0 sm:w-1/3 lg:w-1/4 flex-shrink-0">
          <div className="aspect-[2/3] relative shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              className="w-full h-full object-contain rounded-lg absolute inset-0"
              src={BookCover}
              alt={BookCoverAlt || "Book cover"}
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col w-full sm:w-2/3 lg:w-3/4 space-y-4 md:space-y-6">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {/* Title Section */}
            <div className="flex-grow font-Large">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-green mb-2">
                {BookSaga}
              </h1>
              <h2 className="text-lg md:text-xl text-green">{BookTitle}</h2>
            </div>

            {/* Book Details */}
            <div className="text-left sm:text-right text-black space-y-1">
              <p className="text-sm md:text-base">{BookDate}</p>
              <p className="text-sm md:text-base font-mono">{isbn}</p>
            </div>
          </div>

          {/* Book Resume */}
          <div className="text-black">
            <p className="text-sm md:text-base leading-relaxed">{BookResume}</p>
          </div>

          {/* Button Container */}
          <div className="pt-4 md:pt-6">
            <Button
              text="LIRE LA REVIEW"
              isPrimary={true}
              isBGGreen={false}
              linkTo={`./${bookSlug}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default QuoteTemplate;
