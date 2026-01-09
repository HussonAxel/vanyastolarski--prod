import BooksData from "@data/data.json";
import Button from "@components/Button/Button";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/components/carousel";

const BookResume = () => {
  return (
    <section>
      <SectionTitle title="mes livres" isGreen={true} />
      <section className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 auto-rows-fr">
        {BooksData.books.map((BookData) => (
          <article key={BookData.title} className="pb-2 h-full flex">
            <div className="flex flex-col lg:flex-col items-start lg:items-stretch gap-6 p-5 sm:p-6 lg:p-8 rounded-2xl bg-green ring-1 ring-white/30 w-full">
              <div className="w-full relative">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {(BookData.covers || [BookData.cover]).map(
                      (coverImage, index) => {
                        const coverDescriptions =
                          BookData.coverDescriptions || [];
                        const description =
                          coverDescriptions[index] ||
                          (index === 0
                            ? "Couverture principale"
                            : `Vue ${index + 1}`);

                        return (
                          <CarouselItem key={index}>
                            <div className="flex flex-col items-center justify-center gap-2">
                              <img
                                src={coverImage}
                                alt={`Couverture ${index + 1} de ${BookData.title}`}
                                loading={index === 0 ? "eager" : "lazy"}
                                className="w-full h-auto max-h-[500px] lg:max-h-[350px] object-contain rounded-lg drop-shadow-lg"
                              />
                              <p className="text-white/70 text-xs sm:text-sm font-WorkSans text-center italic">
                                {description}
                              </p>
                            </div>
                          </CarouselItem>
                        );
                      }
                    )}
                  </CarouselContent>
                  {(BookData.covers || [BookData.cover]).length > 1 && (
                    <>
                      <CarouselPrevious className="left-2 sm:left-4 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm" />
                      <CarouselNext className="right-2 sm:right-4 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm" />
                    </>
                  )}
                </Carousel>
              </div>

              <div className="flex flex-col gap-5 min-w-0 text-white w-full flex-1">
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
                  className="font-WorkSans text-sm sm:text-base leading-relaxed overflow-hidden whitespace-pre-line text-center justify-center m-auto"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 8,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {BookData.synopsis.replace(/\\n/g, "\n")}
                </p>

                <div className="flex flex-col gap-4 sm:flex-row mt-auto w-full">
                  <Button
                    text={"EN SAVOIR PLUS"}
                    isPrimary={true}
                    isBGGreen={true}
                    linkTo={`/livres/${BookData.slug}`}
                    className="flex-1 w-full h-14 py-2"
                  />
                  {BookData.firstChapterLink ? (
                    <Button
                      text={"LIRE LE 1ER CHAPITRE"}
                      isPrimary={false}
                      isBGGreen={true}
                      linkTo={BookData.firstChapterLink}
                      className="flex-1 w-full h-14 py-2"
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
