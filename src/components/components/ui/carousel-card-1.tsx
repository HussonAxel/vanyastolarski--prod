import { cn } from "@components/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface CardData {
  id: number;
  imgUrl: string;
  content: string;
}

interface CardProps {
  data: CardData[];
  showCarousel?: boolean;
  cardsPerView?: number;
}

const Carousel = ({ data, showCarousel = true, cardsPerView = 4 }: CardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const maxIndex = Math.max(0, data.length - cardsPerView);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (!data || data.length === 0) return <div>No data</div>;

  const cardWidthPercent = 100 / cardsPerView;

  return (
    <div className="w-full px-4 group relative">
      <div className="relative overflow-hidden py-4">
        <motion.div
          className="flex"
          initial={false}
          animate={{
            x: `calc(-${currentIndex * cardWidthPercent}%)`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
        >
          {data.map((card, idx) => (
            <motion.div
              key={card.id || idx}
              className="relative shrink-0 flex justify-center px-2"
              style={{ width: `${cardWidthPercent}%` }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* FIX 1: Fixed Height Container 
                This prevents vertical items from stretching the page.
                Adjust h-[400px] to your preferred row height.
              */}
              <div
                onClick={() => setSelectedCard(card)}
                className="h-[400px] w-full flex items-center justify-center cursor-pointer"
              >
                {/* FIX 2: Styles moved to Image
                  - 'object-contain': keeps the aspect ratio correct
                  - 'drop-shadow-md': puts shadow on the ART, not the BOX
                  - 'max-h-full': ensures it never exceeds the container height
                */}
                <img
                  src={card.imgUrl}
                  alt={card.content || "Artwork"}
                  className="max-h-full max-w-full width-auto object-contain drop-shadow-md hover:drop-shadow-xl transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Controls */}
      {showCarousel && data.length > cardsPerView && (
        <>
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300",
              "bg-white/50 backdrop-blur-sm hover:bg-white text-black shadow-sm border border-white/20",
              "disabled:opacity-0 disabled:pointer-events-none",
              "-ml-2 md:-ml-4"
            )}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300",
              "bg-white/50 backdrop-blur-sm hover:bg-white text-black shadow-sm border border-white/20",
              "disabled:opacity-0 disabled:pointer-events-none",
              "-mr-2 md:-mr-4"
            )}
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedCard(null)}
          >
            <button className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors">
              <X size={32} />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedCard.imgUrl}
              alt="Full view"
              className="max-h-[90vh] max-w-[95vw] object-contain drop-shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Carousel;