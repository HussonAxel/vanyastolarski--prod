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
  bookSlug,
  BookPages,
  firstChapterLink,
  BookTags,
  BookVolume,
}) => {
  return (
    <article className="w-[80%] md:w-[75%] lg:w-[70%] mx-auto mb-12 sm:mb-16 lg:mb-24 pb-0 font-WorkSans">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 sm:p-8 rounded-2xl bg-green/5 ring-1 ring-green/10 shadow-lg">
        <img
          className="h-[280px] sm:h-[340px] lg:h-[380px] xl:h-[420px] w-auto max-h-full rounded-lg object-contain my-4"
          src={BookCover}
          alt={BookCoverAlt || "Book cover"}
          loading="lazy"
        />

        <div className="flex flex-col w-full lg:w-2/3 space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:justify-between sm:items-start gap-4">
            <div className="font-Large text-left">
              {BookSaga ? (
                <>
                  <h1 className="text-3xl sm:text-4xl font-semibold text-green mb-2">
                    {BookSaga}
                  </h1>
                  <h2 className="text-lg sm:text-xl text-green">{BookTitle}</h2>
                </>
              ) : (
                <h1 className="text-3xl sm:text-4xl font-semibold text-green">
                  {BookTitle}
                </h1>
              )}
            </div>

            <div className="text-left text-black text-sm sm:text-base space-y-1">
              {typeof BookVolume === "number" ? (
                <span>Tome {BookVolume}</span>
              ) : null}
              {BookPages ? (
                <span>
                  {typeof BookVolume === "number" ? " • " : ""}
                  {BookPages} pages
                </span>
              ) : null}
              {isbn ? (
                <span>
                  {typeof BookVolume === "number" || BookPages ? " • " : ""}
                  <span className="font-mono">ISBN: {isbn}</span>
                </span>
              ) : null}
            </div>
          </div>

          {Array.isArray(BookTags) && BookTags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {BookTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full border border-green/20 bg-green/10 text-green"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <div className="text-black">
            <p className="text-left text-sm sm:text-base leading-relaxed max-w-[900px]">
              {BookResume}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-start mt-2 w-fit m-auto md:m-0">
            <Button
              text="VOIR LE LIVRE"
              isPrimary={true}
              isBGGreen={false}
              linkTo={`./${bookSlug}`}
            />
            {firstChapterLink && (
              <DownloadButton
                text="Lire le premier chapitre"
                isPrimary={false}
                isBGGreen={true}
                linkTo={firstChapterLink}
              />
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Book;
