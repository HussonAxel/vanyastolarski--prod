import { BookInfosProps } from "./BookInfos.type";

const BookInfos = ({ Synopsis, Contexte, picture }: BookInfosProps) => {
  return (
    <section className="flex flex-row mx-auto w-3/4 gap-16 pt-20">
      <img
        src={picture}
        alt=""
        className="rounded-md h-full w-auto max-h-[700px]"
      />
      <div className="flex flex-col justify-center w-2/3 pl-20 max-w-3xl">
        <h2 className="font-myfont text-6xl text-green pb-8">Synopsis</h2>
        <p className="mb-32 text-balance">{Synopsis}</p>
        <h2 className="font-myfont text-6xl text-green pb-8">Contexte</h2>
        <p className="text-balance ">{Contexte}</p>
      </div>
    </section>
  );
};
export default BookInfos;
