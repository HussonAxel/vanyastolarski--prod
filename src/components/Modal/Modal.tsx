import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";

interface ModalProps {
  videoUrl: string;
}

const Modal: React.FC<ModalProps> = ({ videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenWelcomeModal");

    if (!hasSeenModal) {
      setIsOpen(true);
      localStorage.setItem("hasSeenWelcomeModal", "true");
    }
  }, []);

  const videoId = videoUrl;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="fixed top-[9%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 z-50 w-[90%] max-w-5xl mx-auto"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="text-2xl lg:text-4xl text-green font-Large text-center mb-8">
              LA CAMPAGNE POUR FOUS PAPILLONS EST EN LIGNE !
            </h2>

            <p className="text-black mb-4 text-center">
              Alors si toi aussi tu as envie d'en savoir plus sur les aventures
              d'Esther et Ethan à travers le monde de Fous Papillons, tout en
              profitant de bonus de précommandes grâce à ma campagne Ulule,
              alors n'hésites pas à t'inscrire ! Si tu n'en as pas encore
              entendu parler, et que tu hésites à cliquer, alors je te laisse le
              trailre que j'ai pu réalisé, ou bien je te redirige vers mon{" "}
              <a
                href="https://www.instagram.com/vanyastolar.auteure/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green hover:text-green/80 underline font-bold"
              >
                instagram
              </a>{" "}
              ainsi que mon
              <a
                href="https://fr.ulule.com/edition-reliee-et-brochee---fous-papillons/coming-soon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green hover:text-green/80 underline font-bold"
              >
                ulule
              </a>{" "}
              pour plus d'informations !
            </p>

            <div className="aspect-w-16 aspect-h-9 mb-4 w-full h-[500px]">
              {videoId && (
                <YouTube
                  videoId={videoId}
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                  className="w-full h-full"
                />
              )}
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Got it!
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
