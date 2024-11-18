import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "@tanstack/react-router";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { to: "/livres", text: "Livres" },
    { to: "/reviews", text: "Reviews" },
    { to: "/citations", text: "Citations" },
    { to: "/galerie", text: "Galerie" },
  ];

  const books = [
    { to: "/livres/1", text: "Terres de Guerre" },
    { to: "/livres/2", text: "Fous Papillons" },
    { to: "/livres/3", text: "Les Douze Divins" },
    { to: "/livres/4", text: "Le coeur d'Ankaa" },
  ];

  const LinkWithUnderline = ({ to, text }: { to: string; text: string }) => (
    <Link
      to={to}
      className="relative group inline-block transition-all duration-300 ease-in-out hover:text-green/80"
    >
      {text}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green transition-all duration-300 ease-in-out group-hover:w-full" />
    </Link>
  );

  return (
    <footer className="font-WorkSans text-green border-t-2 border-green/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Navigation Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl lg:text-2xl mb-4 font-bold hover:text-green/80 transition-all duration-300 ease-in-out">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  <LinkWithUnderline to={link.to} text={link.text} />
                </li>
              ))}
            </ul>
          </div>

          {/* Books Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl lg:text-2xl mb-4 font-bold hover:text-green/80 transition-all duration-300 ease-in-out">
              Mes Livres
            </h3>
            <ul className="space-y-2">
              {books.map((book) => (
                <li key={book.to}>
                  <LinkWithUnderline to={book.to} text={book.text} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl lg:text-2xl mb-4 font-bold hover:text-green/80 transition-all duration-300 ease-in-out">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <MdEmail className="text-xl" />
                <a
                  href="mailto:contact@vanyastolarski.com"
                  className="relative group transition-all duration-300 ease-in-out hover:text-green/80"
                >
                  contact@vanyastolarski.com
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green transition-all duration-300 ease-in-out group-hover:w-full" />
                </a>
              </div>
              <div className="flex justify-center sm:justify-start gap-6">
                <a
                  href="https://instagram.com/your-handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-lightgreen transition-all duration-300 ease-in-out transform hover:scale-110"
                >
                  <FaInstagram className="hover:rotate-6" />
                </a>
                <a
                  href="https://twitter.com/your-handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-lightgreen transition-all duration-300 ease-in-out transform hover:scale-110"
                >
                  <FaTwitter className="hover:-rotate-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green/20 pt-6 text-center">
          <p className="text-sm lg:text-base hover:text-green/80 transition-all duration-300 ease-in-out">
            © {currentYear} Vanya Stolarski. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
