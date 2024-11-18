import data from "../../data/data.json";
import { BookDataProps } from "./BookData.type";

const BookData = ({BookTitle}: BookDataProps) => {
  return (
    <div className="p-4 mb-8 text-white">
      <h2 className="font-WorkSans text-5xl text-white pb-4 text-center underline">
        A propos
      </h2>
      <div className="flex flex-row justify-between">
        <p className="max-w-[700px] font-WorkSans text-md">Test</p>
        <p className="font-WorkSans text-md w-fit">Test</p>
      </div>
    </div>
  );
};

export default BookData;
