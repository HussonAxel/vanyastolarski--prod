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
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-white rounded-lg p-4 md:p-6 w-[95%] md:w-[90%] max-w-5xl relative"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 md:top-4 right-2 md:right-4 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
                <h2 className="text-xl md:text-2xl lg:text-4xl text-green font-Large text-center mb-4 md:mb-8 mt-2">
                  LA CAMPAGNE POUR FOUS PAPILLONS EST EN LIGNE !
                </h2>
                <p className="text-black mb-4 text-sm md:text-base text-center px-2 md:px-4">
                  Alors si toi aussi tu as envie d'en savoir plus sur les
                  aventures d'Esther et Ethan à travers le monde de Fous
                  Papillons, tout en profitant de bonus de précommandes grâce à
                  ma campagne Ulule, alors n'hésites pas à t'inscrire ! Si tu
                  n'en as pas encore entendu parler, et que tu hésites à
                  cliquer, alors je te laisse le trailre que j'ai pu réalisé, ou
                  bien je te redirige vers mon{" "}
                  <a
                    href="https://www.instagram.com/vanyastolar.auteure/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green hover:text-green/80 underline font-bold"
                  >
                    instagram
                  </a>{" "}
                  ainsi que mon{" "}
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
                <div className="w-full aspect-video mb-4">
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
                <div className="text-center mt-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Got it!
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
