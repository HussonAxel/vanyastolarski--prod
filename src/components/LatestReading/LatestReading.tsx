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
    author,
    resume,
    date,
    cover,
    coverAlt,
    linktoReview,
  }: {
    saga: string;
    title?: string;
    author: string;
    resume: string;
    date: string;
    cover: string;
    coverAlt: string;
    id: number;
    slug: string;
    linktoReview?: string;
  }) => (
    <motion.article
      className="w-full max-w-6xl m-auto"
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
      <div className="flex flex-col md:flex-row items-center gap-10 2xl:gap-16 p-6 md:p-10 rounded-2xl bg-white/80 ring-1 ring-green/10 shadow-md hover:shadow-lg transition">
        <img
          src={cover}
          alt={coverAlt}
          className="w-full h-auto max-w-[300px] max-h-[350px] object-contain rounded-lg transition-transform duration-300 ease-in-out"
        />

        <div className="flex flex-col gap-6 text-black w-full md:max-w-2xl">
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center rounded-full border border-green/20 bg-green/5 text-green px-3 py-1 text-xs md:text-sm uppercase tracking-wide font-WorkSans font-bold">
              {saga}
            </span>
            <div className="text-xs md:text-sm text-black/60 font-WorkSans flex items-center gap-2">
              <span>{date}</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">par {author}</span>
            </div>
          </div>

          <div className="font-WorkSans">
            <h2 className="text-2xl md:text-3xl text-green font-Large">
              {title || saga}
            </h2>
          </div>

          <div className="relative">
            <span className="absolute -left-3 -top-3 text-4xl text-green/20 select-none leading-none">
              “
            </span>
            <p className="text-black font-WorkSans text-sm md:text-base leading-relaxed italic pl-2 md:pl-0 line-clamp-6">
              {resume}
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            {linktoReview && (
              <Button
                isPrimary={true}
                text="LIRE LA REVIEW ENTIÈRE"
                isBGGreen={false}
                linkTo={linktoReview}
              />
            )}
            <Button
              isPrimary={false}
              text="VOIR TOUTES LES REVIEWS"
              isBGGreen={false}
              linkTo="/reviews"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );

  return (
    <section className="m-auto overflow-hidden w-11/12 md:w-10/12">
      <SectionTitle title="Dernières reviews" isGreen={false} />
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        {currentBooks.map((book) => (
          <BookCard
            key={book.id}
            saga={book.saga}
            author={book.author}
            resume={book.resume}
            date={book.date}
            cover={book.cover}
            coverAlt={book.coverAlt}
            id={book.id}
            slug={book.slug}
            linktoReview={book.linktoReview}
          />
        ))}
      </AnimatePresence>

      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          aria-label="Précédent"
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          className="h-10 w-10 rounded-full border border-green/30 text-green hover:bg-green/10 transition"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Suivant"
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
          className="h-10 w-10 rounded-full border border-green/30 text-green hover:bg-green/10 transition"
        >
          ›
        </button>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className="mt-6"
      />
    </section>
  );
};

export default LatestReading;
