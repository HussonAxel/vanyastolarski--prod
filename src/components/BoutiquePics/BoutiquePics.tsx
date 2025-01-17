import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  url: string;
  title: string;
  description: string;
  prix: string;
  prix_evolutif?: string;
  categorie: string;
  evolutif?: boolean;
}

const galleryData: GalleryImage[] = [
  {
    url: "/assets/boutique/couronne.webp",
    title: "Couronne",
    description:
      "Un protagoniste qui cherche le pouvoir ? Un héritier trahi qui souhaite récupérer son trône ? Ou même un duel sanglant pour remporter la main du souverain ou de la souveraine ? Montrez à vos lecteurs l’importance d’être couronné en séparant vos chapitres à l’aide de la couronne tant convoitée ! ",
    prix: "5€",
    categorie: "Dinkus",
  },
  {
    url: "/assets/boutique/epee.webp",
    title: "Epee",
    description:
      "Dague qui peut servir de séparateur de paragraphe autant que de décoration de chapitres ! Embellissez votre fantasy par l’illustration de la dague de votre personnage ou votre antagoniste. ",
    prix: "10€",
    categorie: "Dinkus",
  },
  {
    url: "/assets/boutique/scarabee.webp",
    title: "Scarabée",
    description:
      "La nature est un étrange symbole en fantasy, tantôt effrayante et dangereuse, tantôt magique et mystique, parsemez votre manuscrit de créatures étranges et forestières pour plonger vos lecteurs dans un monde sylvestre empli de secrets. ",
    prix: "17€",
    categorie: "Dinkus",
  },
  {
    url: "/assets/boutique/oeuf.webp",
    title: "Oeuf",
    description:
      "Qu’il s’agisse de cavaliers dragons ou d’une légende d’un trésor protégé par ces créatures titanesques, les œufs sont souvent présentés comme signe de puissance et de pouvoir. Dévoilez à vos lecteurs au fil des chapitres ce que découvrent vos personnages ! ",
    prix: "20€",
    prix_evolutif: "30€ pour l'évolutif (lot de 4) ",
    categorie: "Entête de chapitre",
    evolutif: true,
  },
  {
    url: "/assets/boutique/oeuf_1.webp",
    title: "Oeuf",
    description:
      "Qu’il s’agisse de cavaliers dragons ou d’une légende d’un trésor protégé par ces créatures titanesques, les œufs sont souvent présentés comme signe de puissance et de pouvoir. Dévoilez à vos lecteurs au fil des chapitres ce que découvrent vos personnages ! ",
    prix: "20€",
    prix_evolutif: "30€ pour l'évolutif (lot de 4) ",
    categorie: "Entête de chapitre",
    evolutif: true,
  },
  {
    url: "/assets/boutique/oeuf_2.webp",
    title: "Oeuf",
    description:
      "Qu’il s’agisse de cavaliers dragons ou d’une légende d’un trésor protégé par ces créatures titanesques, les œufs sont souvent présentés comme signe de puissance et de pouvoir. Dévoilez à vos lecteurs au fil des chapitres ce que découvrent vos personnages ! ",
    prix: "20€",
    prix_evolutif: "30€ pour l'évolutif (lot de 4) ",
    categorie: "Entête de chapitre",
    evolutif: true,
  },
  {
    url: "/assets/boutique/oeuf_3.webp",
    title: "Oeuf",
    description:
      "Qu’il s’agisse de cavaliers dragons ou d’une légende d’un trésor protégé par ces créatures titanesques, les œufs sont souvent présentés comme signe de puissance et de pouvoir. Dévoilez à vos lecteurs au fil des chapitres ce que découvrent vos personnages ! ",
    prix: "20€",
    prix_evolutif: "30€ pour l'évolutif (lot de 4) ",
    categorie: "Entête de chapitre",
    evolutif: true,
  },
  {
    url: "/assets/boutique/oeuf_4.webp",
    title: "Oeuf",
    description:
      "Qu’il s’agisse de cavaliers dragons ou d’une légende d’un trésor protégé par ces créatures titanesques, les œufs sont souvent présentés comme signe de puissance et de pouvoir. Dévoilez à vos lecteurs au fil des chapitres ce que découvrent vos personnages ! ",
    prix: "20€",
    prix_evolutif: "30€ pour l'évolutif (lot de 4) ",
    categorie: "Entête de chapitre",
    evolutif: true,
  },
  {
    url: "/assets/boutique/papillons.webp",
    title: "Papillons",
    description:
      "Décoration de chapitres ésotérique et délicate, les ailes d’ange agrémenteront vos pages de douceur et de plumes.",
    prix: "15€",
    categorie: "Entête de chapitre",
  },
].concat();

export default function GalleryPics() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilters, setActiveFilters] = useState({
    prix: "",
    categorie: "",
  });

  const filters = useMemo(() => {
    return {
      prix: [...new Set(galleryData.map((img) => img.prix))],
      categorie: [...new Set(galleryData.map((img) => img.categorie))],
    };
  }, []);

  const filteredImages = useMemo(() => {
    return galleryData
      .filter((image) => {
        const matchesPrix =
          !activeFilters.prix || image.prix === activeFilters.prix;
        const matchesCategorie =
          !activeFilters.categorie ||
          image.categorie === activeFilters.categorie;
        return matchesPrix && matchesCategorie;
      })
      .filter(
        (image, index, self) =>
          !image.evolutif || index === self.findIndex((i) => i.evolutif)
      );
  }, [activeFilters]);

  const resetFilters = () => {
    setActiveFilters({
      prix: "",
      categorie: "",
    });
  };

  return (
    <>
      <div className="w-11/12 md:w-9/12 mx-auto mb-6 space-y-4">
        <div className="flex flex-wrap gap-4 items-center">
          <select
            value={activeFilters.categorie}
            onChange={(e) =>
              setActiveFilters((prev) => ({
                ...prev,
                categorie: e.target.value,
              }))
            }
            className="font-WorkSans font-bold text-sm uppercase p-4 border-[1.66px] border-green text-white bg-green hover:bg-green/80  transition duration-300 ease-in-out rounded-none"
          >
            <option value="">Tous les produits</option>
            {filters.categorie.map((categorie) => (
              <option key={categorie} value={categorie}>
                {categorie}
              </option>
            ))}
          </select>

          <select
            value={activeFilters.prix}
            onChange={(e) =>
              setActiveFilters((prev) => ({ ...prev, prix: e.target.value }))
            }
            className="font-WorkSans font-bold text-sm uppercase p-4 border-[1.66px] border-green text-white bg-green hover:bg-green/80  transition duration-300 ease-in-out rounded-none"
          >
            <option value="">Tous les prix </option>
            {filters.prix.map((prix) => (
              <option key={prix} value={prix}>
                {prix}
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

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 w-11/12 md:w-9/12 mx-auto my-4 gap-4">
        {filteredImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative mb-4 break-inside-avoid cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(image)}
          >
            <motion.img
              className="w-full rounded-md shadow-lg"
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
              className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row relative max-w-[95vw] md:max-w-[85vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:flex-1 bg-black flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                {selectedImage.evolutif ? (
                  <div className="grid grid-cols-2 gap-4">
                    {galleryData
                      .filter(
                        (img) => img.evolutif && img.url !== selectedImage.url
                      )
                      .map((img) => (
                        <img
                          key={img.url}
                          src={img.url}
                          alt={img.title}
                          className="w-full h-auto object-contain"
                        />
                      ))}
                  </div>
                ) : (
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
                  />
                )}
              </div>

              <div className="md:w-[400px] flex flex-col max-h-[80vh] font-WorkSans bg-white">
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedImage.title}
                  </h2>
                  <div className="space-y-1">
                    <p className="text-lg">
                      <span className="font-semibold">Prix : </span>{" "}
                      {selectedImage.prix}
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold">Prix évolutif : </span>{" "}
                      {selectedImage.prix_evolutif}
                    </p>
                  </div>
                </div>

                <div className="flex-grow p-6 overflow-y-auto">
                  <h3 className="text-lg font-semibold mb-3">Description : </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
                <div className="flex-grow p-6 overflow-y-auto">
                  <h3 className="text-lg font-semibold mb-3">Achat : </h3>
                  <p className="text-gray-700 leading-relaxed">
                    N'hésitez pas à me contacter pour toute commande ou question
                    sur les produits. Vous pouvez me contacter par mail à
                    l'adresse suivante :{" "}
                    <a
                      href="mailto:vanya.stolarski@gmail.com"
                      className="text-green font-semibold"
                    >
                      vanya.stolarski@gmail.com
                    </a>{" "}
                    ou bien via instagram :{" "}
                    <a
                      href="https://www.instagram.com/vanyastolar.auteure/"
                      className="text-green font-semibold"
                    >
                      vanyastolar.auteure
                    </a>
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
