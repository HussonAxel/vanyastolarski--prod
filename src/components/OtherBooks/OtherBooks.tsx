import React from "react";
import data from "../../data/data.json";
import { Link } from "@tanstack/react-router";

const OtherBooks: React.FC = () => {
  const otherBooks = data.books.slice(0, 4);

  return (
    <section className="px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-Large text-3xl sm:text-4xl lg:text-5xl text-green mb-8 md:mb-12 text-center">
          <span className="border-b-2 border-green pb-2">
            Mes autres livres
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {otherBooks.map((book) => (
            <Link
              key={book.slug}
              to="/livres/$slug"
              params={{ slug: book.slug }}
              className="group block"
            >
              <article className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-white/5">
                <div className="relative w-full aspect-[2/3] mb-4">
                  <img
                    src={`../${book.cover}`}
                    alt={book.title}
                    className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300"
                  />
                </div>

                <h3 className="text-base sm:text-lg text-green text-center font-WorkSans">
                  {book.title}
                </h3>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link
            to="/livres"
            className="inline-block px-6 py-3 text-white border border-white rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
          >
            Voir tous les livres
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OtherBooks;
