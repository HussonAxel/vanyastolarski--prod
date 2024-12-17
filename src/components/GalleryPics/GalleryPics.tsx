import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  url: string;
  title: string;
  artist: string;
  date: string;
  description: string;
}

const galleryData: GalleryImage[] = [
  {
    url: "/assets/gallery/aspen_sarah.jpg",
    title: "Aspen",
    artist: "Sarah",
    date: "Mars 2024",
    description: "Un dessin de Aspen",
  },
  {
    url: "/assets/gallery/aspendessin.png",
    title: "Aspen",
    artist: "Vanya",
    date: "Mars 2024",
    description: "Un dessin de Aspen",
  },
  {
    url: "/assets/gallery/aspendessinChloe.jpg",
    title: "Aspen",
    artist: "Chloe",
    date: "Mars 2024",
    description: "Un dessin de Aspen",
  },
].concat();

export default function GalleryPics() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 w-9/12 mx-auto my-4 gap-4">
        {galleryData.map((image, index) => (
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
              {/* Image Container with Aspect Ratio Maintenance */}
              <div className="md:flex-1 bg-black flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
                />
              </div>

              {/* Content Section - Fixed width for readability */}
              <div className="md:w-[400px] flex flex-col max-h-[80vh] font-WorkSans bg-white">
                {/* Title and Artist */}
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

                {/* Description */}
                <div className="flex-grow p-6 overflow-y-auto">
                  <h3 className="text-lg font-semibold mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </div>

              {/* Close Button */}
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
