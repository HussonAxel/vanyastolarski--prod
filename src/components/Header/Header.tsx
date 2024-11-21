import React, { useState } from "react";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import UluleIcon from "@components/ululeIcon/UluleIcon";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { to: "/livres", text: "Livres" },
    { to: "/reviews", text: "Reviews" },
    { to: "/citations", text: "Citations" },
    { to: "/galerie", text: "Galerie" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/vanyastolar.auteure/",
      icon: FaInstagram,
      label: "Follow on Instagram",
    },
    {
      href: "https://ulule.com/edition-reliee-et-brochee---fous-papillons",
      icon: UluleIcon,
      label: "Follow on Ulule",
    },
  ];

  return (
    <header className="font-WorkSans text-green border-b-2 border-green/20">
      <div className="mx-auto px-4 2xl:px-12">
        <div className="flex items-center justify-between h-20 2xl:h-[100px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-8 2xl:gap-16"
          >
            <Link
              to="/"
              className="text-3xl 2xl:text-5xl font-bold font-['Dancing_Script'] hover:text-green/80 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Vanya Stolarski
            </Link>

            <nav className="hidden 2xl:flex gap-8">
              {menuLinks.map((link) => (
                <motion.div
                  key={link.to}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <Link
                    to={link.to}
                    className="text-lg relative group transition-all duration-300 ease-in-out hover:text-green/80"
                  >
                    {link.text}
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] bg-green"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          <div className="flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden 2xl:flex items-center gap-6"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-green"
                  aria-label={link.label}
                  whileHover={{
                    scale: 1.1,
                    rotate: link.icon === FaInstagram ? 6 : -6,
                  }}
                >
                  <link.icon />
                </motion.a>
              ))}
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl 2xl:hidden"
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
              className="2xl:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {menuLinks.map((link) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="block"
                  >
                    <Link
                      to={link.to}
                      className="text-xl block hover:text-green/80"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex gap-4 pt-4"
                >
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl"
                      whileHover={{ scale: 1.1 }}
                    >
                      <link.icon />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
