import BooksData from "@data/data.json";
import Button from "@components/Button/Button";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";

const BookResume = () => {
  return (
    <section>
      <SectionTitle title="mes livres" isGreen={true} />
      <section className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-6 sm:gap-8 lg:gap-12">
        {BooksData.books.map((BookData) => (
          <article key={BookData.title} className="pb-2">
            <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-6 p-5 sm:p-6 lg:p-8 rounded-2xl bg-green ring-1 ring-white/30">
              {/* Cover */}
              <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0 flex justify-center">
                <div className="rounded-xl p-2 w-full">
                  <img
                    src={BookData.cover}
                    alt={`Couverture de ${BookData.title}`}
                    loading="lazy"
                    className="w-full h-auto max-h-[400px] object-contain rounded-lg drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-5 min-w-0 text-white">
                <div className="flex flex-col text-left gap-3">
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-0 font-Large">
                    {BookData.title}
                  </h2>
                  <div className="hidden md:flex items-center gap-3 text-white/80 text-sm font-WorkSans">
                    {BookData.volume ? (
                      <span>Tome {BookData.volume}</span>
                    ) : null}
                    {BookData.pages ? (
                      <>
                        <span>•</span>
                        <span>{BookData.pages} pages</span>
                      </>
                    ) : null}
                    {BookData.ISBN && BookData.ISBN !== "N/A" ? (
                      <>
                        <span>•</span>
                        <span>ISBN {BookData.ISBN}</span>
                      </>
                    ) : null}
                  </div>
                </div>

                {Array.isArray(BookData.tags) && BookData.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {BookData.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full border border-white/20 bg-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}

                <p
                  className="font-WorkSans text-sm sm:text-base leading-relaxed overflow-hidden whitespace-pre-line"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 8,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {BookData.synopsis.replace(/\\n/g, "\n")}
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    text={"EN SAVOIR PLUS"}
                    isPrimary={true}
                    isBGGreen={true}
                    linkTo={`/livres/${BookData.slug}`}
                  />
                  {BookData.firstChapterLink ? (
                    <Button
                      text={"LIRE LE 1ER CHAPITRE"}
                      isPrimary={false}
                      isBGGreen={true}
                      linkTo={BookData.firstChapterLink}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default BookResume;
