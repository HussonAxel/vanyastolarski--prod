import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  url: string;
  title: string;
  artist: string;
  date: string;
  description: string;
  book: string;
}

const galleryData: GalleryImage[] = [
  {
    url: "/assets/gallery/aspen_sarah.jpg",
    title: "Aspen",
    artist: "blackrose_drawings",
    date: "Mars 2024",
    description: "Un dessin de Aspen",
    book: "Les douze divins",
  },
  {
    url: "/assets/gallery/aspendessin.png",
    title: "Aspen",
    artist: "Vanya",
    date: "Mars 2024",
    description: "Un dessin de Aspen",
    book: "Les douze divins",
  },
  {
    url: "/assets/gallery/AspendessinChloe.jpg",
    title: "Aspen",
    artist: "8kloweey",
    date: "Mars 2024",
    description: "Un dessin de Aspen",
    book: "Les douze divins",
  },
  {
    url: "/assets/gallery/Esther.webp",
    title: "Esther",
    artist: "Artsymoon",
    date: "Mars 2024",
    description: "Un dessin de Esther",
    book: "Fous Papillons",
  },
  {
    url: "/assets/gallery/Ethan.webp",
    title: "Ethan",
    artist: "Artsymoon",
    date: "Mars 2024",
    description: "Un dessin de Ethan",
    book: "Fous Papillons",
  },
  {
    url: "/assets/gallery/Chiara.jpg",
    title: "Chiara",
    artist: "Artsymoon",
    date: "Mars 2024",
    description: "Un dessin de Chiara",
    book: "Fous Papillons",
  },
  {
    url: "/assets/gallery/Frantz.jpg",
    title: "Frantz",
    artist: "Artsymoon",
    date: "Mars 2024",
    description: "Un dessin de Frantz",
    book: "Fous Papillons",
  },
  {
    url: "/assets/gallery/agape.jpg",
    title: "Agapé",
    artist: "Artsymoon",
    date: "Mars 2024",
    description: "Un dessin de Agapé",
    book: "Brille Papillon",
  },
  {
    url: "/assets/gallery/coeur-de-renard_fortune.png",
    title: "Fortune",
    artist: "pumpkinspace.latte",
    date: "Fevrier 2025",
    description: "Un dessin de Fortune",
    book: "Coeur de Renard",
  },
  {
    url: "/assets/gallery/coeur-de-renard_renard.png",
    title: "Renard",
    artist: "pumpkinspace.latte",
    date: "Fevrier 2025",
    description: "Un dessin de Renard",
    book: "Coeur de Renard",
  },
  {
    url: "/assets/gallery/coeur-de-renard-renardxfortune.png",
    title: "Renard & Fortune",
    artist: "pumpkinspace.latte",
    date: "Fevrier 2025",
    description: "Un dessin de Renard & Fortune",
    book: "Coeur de Renard",
  },
].concat();

export default function GalleryPics() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilters, setActiveFilters] = useState({
    book: "",
    artist: "",
  });

  const filters = useMemo(() => {
    return {
      books: [...new Set(galleryData.map((img) => img.book))],
      artists: [...new Set(galleryData.map((img) => img.artist))],
    };
  }, []);

  const filteredImages = useMemo(() => {
    return galleryData.filter((image) => {
      const matchesBook =
        !activeFilters.book || image.book === activeFilters.book;
      const matchesArtist =
        !activeFilters.artist || image.artist === activeFilters.artist;
      return matchesBook && matchesArtist;
    });
  }, [activeFilters]);

  const resetFilters = () => {
    setActiveFilters({
      book: "",
      artist: "",
    });
  };

  return (
    <>
      <div className="w-9/12 mx-auto mb-6 space-y-4">
        <div className="flex flex-wrap gap-4 items-center">
          <select
            value={activeFilters.book}
            onChange={(e) =>
              setActiveFilters((prev) => ({ ...prev, book: e.target.value }))
            }
            className="font-WorkSans font-bold text-sm uppercase p-4 border-[1.66px] border-green text-white bg-green hover:bg-green/80  transition duration-300 ease-in-out rounded-none"
          >
            <option value="">Tous les livres</option>
            {filters.books.map((book) => (
              <option key={book} value={book}>
                {book}
              </option>
            ))}
          </select>

          <select
            value={activeFilters.artist}
            onChange={(e) =>
              setActiveFilters((prev) => ({ ...prev, artist: e.target.value }))
            }
            className="font-WorkSans font-bold text-sm uppercase p-4 border-[1.66px] border-green text-white bg-green hover:bg-green/80  transition duration-300 ease-in-out rounded-none"
          >
            <option value="">Tous les artistes</option>
            {filters.artists.map((artist) => (
              <option key={artist} value={artist}>
                {artist}
              </option>
            ))}
          </select>

          <button
            onClick={resetFilters}
            className="font-WorkSans font-bold text-sm uppercase p-4 border-[1.66px] border-green text-white bg-green hover:bg-green/80  transition duration-300 ease-in-out"
          >
            Réinitialiser les filtres
          </button>
        </div>

        <p className="text-gray-600">
          {filteredImages.length} image{filteredImages.length > 1 ? "s" : ""}{" "}
          trouvée{filteredImages.length > 1 ? "s" : ""}
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 w-9/12 mx-auto my-4 gap-4">
        {filteredImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative mb-4 break-inside-avoid cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(image)}
          >
            <motion.img
              className="w-full rounded-lg shadow-lg"
              src={image.url}
              alt={image.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row relative max-w-[95vw] md:max-w-[85vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:flex-1 bg-black flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
                />
              </div>

              <div className="md:w-[400px] flex flex-col max-h-[80vh] font-WorkSans bg-white">
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedImage.title}
                  </h2>
                  <div className="space-y-1">
                    <p className="text-lg">
                      <span className="font-semibold">Artiste:</span>{" "}
                      {selectedImage.artist}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Date:</span>{" "}
                      {selectedImage.date}
                    </p>
                  </div>
                </div>

                <div className="flex-grow p-6 overflow-y-auto">
                  <h3 className="text-lg font-semibold mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </div>

              <button
                className="absolute top-4 right-4 text-white text-xl p-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
