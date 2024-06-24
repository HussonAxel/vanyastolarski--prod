import { BookInfosProps } from "./BookInfos.type";

const BookInfos = ({ Synopsis, Contexte, picture }: BookInfosProps) => {
  return (
    <section className="flex flex-row mx-auto w-3/4 gap-16">
      <img
        src={picture}
        alt=""
        className="rounded-md h-full w-auto max-h-[700px]"
      />
      <div className="flex flex-col justify-center w-3/4">
        <h2 className="font-myfont text-5xl text-green pb-4">Synopsis</h2>
        <p className="mb-12 w-10/12 text-balance">{Synopsis}</p>
        <h2 className="font-myfont text-5xl text-green pb-4">Contexte</h2>
        <p className=" w-10/12 text-balance ">{Contexte}</p>
      </div>
    </section>
  );
};
export default BookInfos;
