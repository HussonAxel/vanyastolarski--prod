import BooksData from "@data/data.json";
import Button from "@components/Button/Button";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";

const BookResume = () => {
  return (
    <section>
      <SectionTitle title="mes livres" isGreen={true} />
      <section className="w-8/12 xl:w-10/12 m-auto grid grid-cols-1 2xl:grid-cols-2 gap-y-16 gap-x-24 bg-green rounded-lg">
        {BooksData.books.map((BookData) => (
          <article
            key={BookData.title}
            className="flex flex-col md:flex-row items-center gap-5 pb-6 border-b border-white"
          >
            <img
              src={BookData.cover}
              alt={`Couverture de ${BookData.title}`}
              className="md:w-[300px] h-auto md:h-[450px] object-cover mb-5 md:mb-0 rounded-md drop-shadow-lg"
            />
            <div className="flex flex-col gap-y-10 gap-x-5 pl-4 text-white">
              <h2 className="text-4xl font-semibold text-white mb-2">
                {BookData.title}
              </h2>
              <p className=" font-WorkSans text-md">{BookData.synopsis}</p>
              <Button
                text={"EN SAVOIR PLUS"}
                isPrimary={true}
                isBGGreen={true}
                linkTo={`/livres/${BookData.id}`}
              />
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default BookResume;
