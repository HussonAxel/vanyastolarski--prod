import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { to: "/Livres", text: "Livres" },
    { to: "/Reviews", text: "Reviews" },
    { to: "/Citations", text: "Citations" },
    { to: "/Galerie", text: "Galerie" },
  ];

  const LinkWithUnderline = ({ to, text }: { to: string; text: string }) => (
    <Link
      to={to}
      className="relative group inline-block transition-all duration-300 ease-in-out hover:text-green/80 text-md tracking-wider font-medium"
    >
      {text}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green transition-all duration-300 ease-in-out group-hover:w-full" />
    </Link>
  );

  return (
    <header className="bg-white text-black/90 font-Large pt-4 lg:pt-8 border-b-2 border-green/20">
      <div className="mx-auto 2xl:px-12 max-w-[1400px]">
        <div className="flex items-center justify-between h-20 mr-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-8 2xl:gap-16"
          >
            <nav className="hidden lg:flex gap-8">
              {menuLinks.slice(0, 2).map((link) => (
                <motion.div
                  key={link.to}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <LinkWithUnderline to={link.to} text={link.text} />
                </motion.div>
              ))}
            </nav>
          </motion.div>

          <Link
            to="/"
            className="absolute left-1/2 transform -translate-x-1/2 font-Large text-2xl md:text-3xl"
          >
            Vanya Stolarski
          </Link>

          <div className="flex items-center">
            <nav className="hidden lg:flex gap-8">
              {menuLinks.slice(2, 4).map((link) => (
                <motion.div
                  key={link.to}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <LinkWithUnderline to={link.to} text={link.text} />
                </motion.div>
              ))}
            </nav>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl lg:hidden ml-4"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white"
            >
              <div className="text-center border-b border-black/80">
                {menuLinks.map((link) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Link
                      to={link.to}
                      className="text-2xl tracking-wider font-medium block py-12 border-t border-black/80 hover:text-white hover:bg-green "
                      onClick={() => setIsOpen(false)}
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
