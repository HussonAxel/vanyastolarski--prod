import { useState } from "react";
import Button from "@components/Button/Button";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import Pagination from "@components/ui/Pagination/Pagination";
import BooksQuotes from "../../data/BooksQuotes.json";
import { motion, AnimatePresence } from "framer-motion";

const LatestReading = () => {
  const BooksInfos = BooksQuotes;
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);
  const booksPerPage = 1;
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = BooksInfos.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(BooksInfos.length / booksPerPage);

  const handlePageChange = (newPage: number) => {
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const BookCard = ({
    saga,
    title,
    resume,
    cover,
    coverAlt,
    slug,
  }: {
    saga: string;
    title: string;
    author: string;
    resume: string;
    date: string;
    cover: string;
    coverAlt: string;
    id: number;
    slug: string;
  }) => (
    <motion.article
      className="flex flex-col md:flex-row items-center gap-8 md:gap-24 pb-6 w-fit m-auto max-w"
      initial="enter"
      animate="center"
      exit="exit"
      variants={slideVariants}
      custom={direction}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <img
        src={cover}
        alt={coverAlt}
        className="w-full md:max-w-[750px] h-auto max-h-[350px] object-contain mb-5 md:mb-0 rounded-md"
      />
      <div className="flex flex-col gap-8 text-black max-w-[80%] md:max-w-3xl">
        <div className="font-WorkSans text-black">
          <h1 className="text-2xl md:text-4xl semibold mb-2 underline text-green font-Large">
            {saga}
          </h1>
          <h2 className="text-md md:text-lg">{title}</h2>
        </div>
        <p className="text-black font-WorkSans text-sm md:text-md w-fit">
          {resume}
        </p>
        <div className="flex flex-col gap-8 m-auto md:flex-row md:m-0">
          <Button
            isPrimary={true}
            text="LIRE LA REVIEW EN ENTIERE"
            isBGGreen={false}
            linkTo={`/reviews/${slug}`}
          />
          <Button
            isPrimary={false}
            text="VOIR TOUTES LES REVIEWS"
            isBGGreen={false}
            linkTo="/reviews"
          />
        </div>
      </div>
    </motion.article>
  );

  return (
    <section className="m-auto overflow-hidden">
      <SectionTitle title="dernières lectures" isGreen={false} />
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        {currentBooks.map((book) => (
          <BookCard
            key={book.id}
            saga={book.saga}
            title={book.title}
            author={book.author}
            resume={book.resume}
            date={book.date}
            cover={book.cover}
            coverAlt={book.coverAlt}
            id={book.id}
            slug={book.slug}
          />
        ))}
      </AnimatePresence>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className="mt-8"
      />
    </section>
  );
};

export default LatestReading;
