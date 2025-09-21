import BooksData from "@data/data.json";
import Button from "@components/Button/Button";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";

const BookResume = () => {
  return (
    <section>
      <SectionTitle title="mes livres" isGreen={true} />
      <section className="w-11/12 xl:w-10/12 m-auto grid grid-cols-1 2xl:grid-cols-2 gap-y-16 gap-x-24 bg-green rounded-lg">
        {BooksData.books.map((BookData) => (
          <article key={BookData.title} className="pb-6">
            <div className="flex flex-col lg:flex-row gap-8 p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-lg h-[500px] flex items-center justify-center">
              <div className="w-full lg:max-w-[320px]">
                <div className="rounded-xl p-3">
                  <img
                    src={BookData.cover}
                    alt={`Couverture de ${BookData.title}`}
                    className="w-full h-auto object-contain rounded-lg drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6 pl-0 lg:pl-2 text-white">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-3xl font-semibold mb-0 font-Large">
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

                <p className="font-WorkSans text-md leading-relaxed max-h-[300px] overflow-hidden line-clamp-[10]">
                  {BookData.synopsis}
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
