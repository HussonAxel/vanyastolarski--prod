import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.98]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 8]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigation = [
    { path: "/Livres", label: "Livres" },
    { path: "/Reviews", label: "Reviews" },
    { path: "/Citations", label: "Citations" },
    { path: "/Galerie", label: "Galerie" },
    {
      path: "https://vanyastolarski.sumupstore.com/",
      label: "Boutique",
      external: true,
    },
  ];

  const servicesSubmenu = [
    { path: "/portfolio", label: "Portfolio" },
    { path: "/tarifs", label: "Tarifs" },
  ];

  const isActive = (path: string) => {
    if (path === "/Livres") {
      return (
        location.pathname.startsWith("/livres") ||
        location.pathname.startsWith("/Livres")
      );
    }
    return location.pathname === path;
  };

  const isServicesActive = () => {
    return (
      location.pathname === "/portfolio" || location.pathname === "/tarifs"
    );
  };

  const NavLink = ({ item }: { item: (typeof navigation)[0] }) => {
    const active = isActive(item.path);
    const LinkComponent = item.external ? "a" : Link;
    const linkProps = item.external
      ? { href: item.path, target: "_blank", rel: "noopener noreferrer" }
      : { to: item.path };

    return (
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <LinkComponent
          {...linkProps}
          className={`
            relative px-4 py-2 text-sm font-medium tracking-[0.1em] uppercase
            transition-all duration-300 ease-out
            ${active ? "text-green" : "text-black/60 hover:text-black"}
          `}
          onClick={() => !item.external && setIsMenuOpen(false)}
        >
          <span className="relative z-10">{item.label}</span>

          {/* Active indicator */}
          {active && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1px] bg-green"
              layoutId="activeIndicator"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}

          {/* Hover background */}
          <motion.div
            className="absolute inset-0 bg-green/5 rounded-sm opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </LinkComponent>
      </motion.div>
    );
  };

  return (
    <>
      <motion.header
        style={{
          opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur}px)`,
        }}
        className={`
          transition-all duration-500 ease-out
          ${
            isScrolled
              ? "bg-white/80 border-b border-green/20"
              : "bg-white/95 border-b border-green/30"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <div className="group relative inline-block py-2">
              <Link
                to="/"
                className="group relative inline-block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <h1 className="font-serif text-xl sm:text-2xl lg:text-2xl text-black font-light tracking-[0.2em] uppercase">
                  <span className="relative inline-block">
                    Vanya
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-green origin-left" />
                  </span>
                  <span className="mx-3 text-green/50 font-extralight">|</span>
                  <span className="relative inline-block">
                    Stolarski
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-green origin-right" />
                  </span>
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <NavLink key={item.path} item={item} />
              ))}

              {/* Services Dropdown */}
              <motion.div
                ref={dropdownRef}
                className="relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.button
                  onClick={() =>
                    setIsServicesDropdownOpen(!isServicesDropdownOpen)
                  }
                  className={`
                    relative px-4 py-2 text-sm font-medium tracking-[0.1em] uppercase
                    transition-all duration-300 ease-out flex items-center gap-1
                    ${
                      isServicesActive()
                        ? "text-green"
                        : "text-black/60 hover:text-black"
                    }
                  `}
                >
                  <span className="relative z-10">Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />

                  {/* Active indicator */}
                  {isServicesActive() && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-green"
                      layoutId="activeIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-green/5 rounded-sm opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-green/20 overflow-hidden z-50 min-w-[180px]"
                    >
                      {servicesSubmenu.map((item) => {
                        const active = isActive(item.path);
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsServicesDropdownOpen(false)}
                            className={`
                              block px-4 py-3 text-sm font-medium tracking-[0.1em] uppercase
                              transition-all duration-200
                              ${
                                active
                                  ? "text-green bg-green/5"
                                  : "text-black/60 hover:text-green hover:bg-green/5"
                              }
                            `}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-5">
                <motion.span
                  className="absolute top-0 left-0 w-full h-[2px] bg-black origin-center"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 8 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute top-1/2 left-0 w-full h-[2px] bg-black origin-center -translate-y-1/2"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                    x: isMenuOpen ? 10 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-black origin-center"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -8 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-20 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl border-l border-green/20 overflow-y-auto"
            >
              <div className="flex flex-col py-8">
                {navigation.map((item, index) => {
                  const active = isActive(item.path);
                  const LinkComponent = item.external ? "a" : Link;
                  const linkProps = item.external
                    ? {
                        href: item.path,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : { to: item.path };

                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <LinkComponent
                        {...linkProps}
                        className={`
                          block px-8 py-5 text-lg font-medium tracking-[0.1em] uppercase
                          transition-all duration-200 relative
                          ${
                            active
                              ? "text-green bg-green/5 border-l-4 border-green"
                              : "text-black/70 hover:text-green hover:bg-green/5"
                          }
                        `}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </LinkComponent>
                    </motion.div>
                  );
                })}

                {/* Services Dropdown in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: navigation.length * 0.05,
                    duration: 0.3,
                  }}
                >
                  <button
                    onClick={() =>
                      setIsServicesDropdownOpen(!isServicesDropdownOpen)
                    }
                    className={`
                      w-full flex items-center justify-between px-8 py-5 text-lg font-medium tracking-[0.1em] uppercase
                      transition-all duration-200 relative
                      ${
                        isServicesActive()
                          ? "text-green bg-green/5 border-l-4 border-green"
                          : "text-black/70 hover:text-green hover:bg-green/5"
                      }
                    `}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isServicesDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isServicesDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {servicesSubmenu.map((item) => {
                          const active = isActive(item.path);
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsServicesDropdownOpen(false);
                              }}
                              className={`
                                block px-12 py-4 text-base font-medium tracking-[0.1em] uppercase
                                transition-all duration-200
                                ${
                                  active
                                    ? "text-green bg-green/10 border-l-4 border-green"
                                    : "text-black/60 hover:text-green hover:bg-green/5"
                                }
                              `}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
