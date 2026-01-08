import React, { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.98]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 8]);

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

  const navigation = [
    { path: "/Livres", label: "Livres" },
    { path: "/Services", label: "Services" },
    { path: "https://vanyastolarski.sumupstore.com/", label: "Boutique", external: true },
    { path: "/Reviews", label: "Reviews" },
    { path: "/Citations", label: "Citations" },
    { path: "/Galerie", label: "Galerie" },
  ];

  const isActive = (path: string) => {
    if (path === "/Livres") {
      return location.pathname.startsWith("/livres") || location.pathname.startsWith("/Livres");
    }
    return location.pathname === path;
  };

  const NavLink = ({ item }: { item: typeof navigation[0] }) => {
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
            ${active
              ? "text-green"
              : "text-black/60 hover:text-black"
            }
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
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-out
          ${isScrolled
            ? "bg-white/80 border-b border-green/20"
            : "bg-white/95 border-b border-green/30"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link
                to="/"
                className="group relative inline-block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="relative">
                  {/* Main title with elegant typography */}
                  <motion.h1
                    className="font-Large text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-black font-normal leading-[1.1]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block relative">
                      <span className="relative z-10 tracking-[0.12em] transition-colors duration-300 group-hover:text-green/90">
                        Vanya
                      </span>
                      <motion.span
                        className="absolute inset-0 bg-green/8 blur-lg opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.4 }}
                      />
                    </span>
                    <motion.span
                      className="mx-2 sm:mx-3 text-green/40 group-hover:text-green/70 transition-all duration-300 font-light inline-block"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      ·
                    </motion.span>
                    <span className="inline-block relative">
                      <span className="relative z-10 tracking-[0.12em] transition-colors duration-300 group-hover:text-green/90">
                        Stolarski
                      </span>
                      <motion.span
                        className="absolute inset-0 bg-green/8 blur-lg opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.4 }}
                      />
                    </span>
                  </motion.h1>
                  
                  {/* Elegant underline with gradient */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green/80 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ originX: 0.5 }}
                  />
                  
                  {/* Subtle accent dots */}
                  <motion.div
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100"
                    initial={{ y: -5 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <motion.div
                      className="w-1 h-1 rounded-full bg-green/60"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-1 h-1 rounded-full bg-green/60"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.25 }}
                    />
                  </motion.div>
                </div>
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute -inset-3 bg-green/3 rounded-lg opacity-0 group-hover:opacity-100 blur-md -z-10"
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <NavLink key={item.path} item={item} />
              ))}
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
                    ? { href: item.path, target: "_blank", rel: "noopener noreferrer" }
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
                          ${active
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
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20 lg:h-24" />
    </>
  );
};

export default Header;
