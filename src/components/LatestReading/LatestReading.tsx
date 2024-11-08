import Button from "@components/Button/Button";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";


const LatestReading = () => {
  const BooksInfos = {
    title: "la ballade du serpent et de l'oiseau chanteur",
    author: "Suzanne Collins",
    resume:
      "Coriolanus Snow est un brillant lycéen du Capitole appartenant à une vieille famille noble mais dont la pauvreté est comparable à celle de la 'racaille des districts'. Le jour de la Moisson des 10e Hunger Games on lui confie le plus misérable des Tributs, une fille du district 12 qui se nomme Lucy Gray Baird. Bien décidé à recevoir un prix pour entrer à l'Université, Coriolanus devra faire en sorte qu'elle gagne les Hunger Games",
    picture: "src/assets/covers/LatestRead.jpg",
  };

  return (
    <section className="py-32 m-auto">
      <SectionTitle title="Ma dernière lecture" isGreen={false} />
      <article className="flex flex-col md:flex-row items-center gap-12 pb-6 w-fit m-auto ">
        <img
          src={BooksInfos.picture}
          alt="Couverture de 12 divins"
          className="w-full md:w-[250px] h-auto md:h-[400px] object-cover mb-5 md:mb-0 rounded-md shadow-lg"
        />
        <div className="flex flex-col gap-8 text-white max-w-3xl">
          <div className="flex flex-col gap-4">
            <h2 className="font-Cinzel text-3xl font-semibold">
              {BooksInfos.title}
            </h2>
            <h2 className="font-Cinzel text-xl ">De {BooksInfos.author}</h2>
          </div>
          <p className="text-balance text-white font-Poppins font-light text-md w-fit">
            {BooksInfos.resume}
          </p>
          <div className="flex flex-row gap-8">
            <Button
              isPrimary={true}
              text="LIRE LA REVIEW EN ENTIERE"
              isBGGreen={true}
            />
            <Button
              isPrimary={false}
              text="VOIR TOUTES LES REVIEWS"
              isBGGreen={true}
              linkTo="/quotes"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default LatestReading;
