import { BookProps } from "./BookProps.type";
import Button from "@components/Button/Button";
import DownloadButton from "@components/DownloadButton/DownloadButton";

const Book: React.FC<BookProps> = ({
  BookSaga,
  BookTitle,
  BookResume,
  isbn,
  BookCover,
  BookCoverAlt,
  bookID,
  BookPages,
  firstChapterLink,
}) => {
  return (
    <article className="flex flex-col lg:flex-row items-center w-[90%] md:w-[85%] lg:w-[80%] gap-8 lg:gap-12 mx-auto mb-12 sm:mb-16 lg:mb-24 pb-12 sm:pb-16 lg:pb-24 font-WorkSans border-b border-b-green last-of-type:border-0">
      {/* Book Cover */}
      <div className="w-full sm:w-2/3 lg:w-1/3 flex justify-center">
        <img
          className="w-[250px] sm:w-[300px] lg:w-[350px] h-auto max-h-[500px] rounded-lg shadow-xl object-contain"
          src={BookCover}
          alt={BookCoverAlt || "Book cover"}
        />
      </div>

      {/* Book Information */}
      <div className="flex flex-col w-full lg:w-2/3 space-y-6 sm:space-y-8">
        {/* Title and Details */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          {/* Title Section */}
          <div className="font-WorkSans text-center sm:text-left">
            {BookSaga ? (
              <>
                <h1 className="text-3xl sm:text-4xl font-semibold text-lightgreen mb-2">
                  {BookSaga}
                </h1>
                <h2 className="text-lg sm:text-xl text-lightgreen">
                  {BookTitle}
                </h2>
              </>
            ) : (
              <h1 className="text-3xl sm:text-4xl font-semibold text-lightgreen">
                {BookTitle}
              </h1>
            )}
          </div>

          {/* Book Details */}
          <div className="text-center sm:text-right text-black text-sm sm:text-base space-y-1">
            <p>{BookPages} pages</p>
            <p className="font-mono">ISBN: {isbn}</p>
          </div>
        </div>

        {/* Book Resume */}
        <div className="text-black">
          <p className="text-center sm:text-left text-sm sm:text-base leading-relaxed">
            {BookResume}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start mt-4 w-fit m-auto md:m-0">
          <Button
            text="VOIR LE LIVRE"
            isPrimary={true}
            isBGGreen={false}
            linkTo={`./${bookID}`}
          />
          <DownloadButton
            text="Lire le premier chapitre"
            isPrimary={false}
            isBGGreen={true}
            linkTo={firstChapterLink}
          />
        </div>
      </div>
    </article>
  );
};

export default Book;
