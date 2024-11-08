import BooksData from "@data/data.json";
import UnderlineButton from "@components/ui/UnderlinedButton/UnderlineButton";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";

const BookResume = () => {

  return (
    <section className="py-32">
      <SectionTitle title="Découvrez mes livres" isGreen={true} />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24 bg-white rounded-lg">
        {BooksData.books.map((BookData) => (
          <article
            key={BookData.title}
            className="flex flex-col md:flex-row items-center gap-5 pb-6 border-b "
          >
            <img
              src={BookData.cover}
              alt={`Couverture de ${BookData.title}`}
              className="w-full md:w-[250px] h-auto md:h-[400px] object-cover mb-5 md:mb-0 rounded-md drop-shadow-lg"
            />
            <div className="flex flex-col gap-5 pl-4">
              <h2 className="font-Cinzel text-3xl font-semibold">
                {BookData.title}
              </h2>
              <p className="text-balance text-black font-Poppins font-light text-sm ">
                {BookData.synopsis}
              </p>
              <UnderlineButton
                buttonText="EN SAVOIR PLUS"
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
