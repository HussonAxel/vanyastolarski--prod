import Button from "@components/Button/Button";
import DownloadButton from "@components/DownloadButton/DownloadButton";
import { BookProps } from "./BookProps.type";

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
    <article className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16 lg:mb-24 font-WorkSans">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 p-5 sm:p-8 rounded-2xl bg-green/5 ring-1 ring-green/10 shadow-lg">
        {/* Cover */}
        <div className="flex justify-center lg:justify-start shrink-0">
          <img
            className="
              w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px]
              h-auto rounded-lg object-contain
            "
            src={BookCover}
            alt={BookCoverAlt || "Book cover"}
            loading="lazy"
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col min-w-0 w-full lg:w-auto space-y-5 sm:space-y-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="font-WorkSans text-left">
              {BookSaga ? (
                <>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green mb-1">
                    {BookSaga}
                  </h1>
                  <h2 className="text-base sm:text-lg md:text-xl text-green">
                    {BookTitle}
                  </h2>
                </>
              ) : (
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green">
                  {BookTitle}
                </h1>
              )}
            </div>

            <div className="text-left text-black text-sm sm:text-base space-x-1 space-y-1">
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
            <p className="text-left text-sm sm:text-base leading-relaxed">
              {BookResume}
            </p>
          </div>

          {/* CTAs: keep left-aligned on all sizes */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start mt-2">
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
