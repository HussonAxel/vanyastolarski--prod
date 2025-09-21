import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import { Services } from "@data/Services";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Download, FileText } from "lucide-react";

interface ServiceAsset {
  url: string;
  type: "image" | "file";
  filename?: string;
  fileType?: string;
}

interface Service {
  title: string;
  price?: string;
  resume: string;
  assets?: ServiceAsset[];
}

const ServicesList = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
    description: string;
    currentIndex: number;
  } | null>(null);
  // Changez l'état pour stocker l'index par service
  const [currentAssetIndices, setCurrentAssetIndices] = useState<{
    [key: number]: number;
  }>({});

  const handleServiceClick = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
    if (visibleIndex !== index) {
      // Initialisez l'index pour ce service
      setCurrentAssetIndices((prev) => ({ ...prev, [index]: 0 }));
    }
  };

  const handleImageClick = (service: Service, assetIndex: number) => {
    const asset = service.assets?.[assetIndex];
    if (asset && asset.type === "image") {
      setSelectedImage({
        url: asset.url,
        title: service.title,
        description: service.resume,
        currentIndex: assetIndex,
      });
    }
  };

  const handleFileDownload = (asset: ServiceAsset) => {
    if (asset.type === "file") {
      const link = document.createElement("a");
      link.href = asset.url;
      link.download = asset.filename || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handlePrevAsset = (serviceIndex: number, totalAssets: number) => {
    setCurrentAssetIndices((prev) => ({
      ...prev,
      [serviceIndex]: (prev[serviceIndex] - 1 + totalAssets) % totalAssets,
    }));
  };

  const handleNextAsset = (serviceIndex: number, totalAssets: number) => {
    setCurrentAssetIndices((prev) => ({
      ...prev,
      [serviceIndex]: (prev[serviceIndex] + 1) % totalAssets,
    }));
  };

  const getFileIcon = (fileType?: string) => {
    if (fileType?.includes("word") || fileType?.includes("document")) {
      return <FileText className="w-6 h-6" />;
    }
    return <FileText className="w-6 h-6" />;
  };

  return (
    <section className="m-auto w-11/12 md:w-10/12 lg:w-8/12 2xl:w-6/12">
      <SectionTitle title="Services" isGreen={false} />
      <h2 className="text-center text-xl mb-12 mt-4">
        Si vous êtes intéréssés par un de nos services, n'hésitez pas à me
        contacter par mail à l'adresse suivante :{" "}
        <span className="text-green">
          <a
            href="mailto:vanya.stolarski@gmail.com"
            className="hover:underline focus:outline-none focus:underline"
          >
            vanya.stolarski@gmail.com
          </a>{" "}
        </span>
        ou bien via instagram :{" "}
        <span className="text-green">
          {" "}
          <a
            href="https://www.instagram.com/vanyastolar.auteure/"
            className="hover:underline focus:outline-none focus:underline"
          >
            vanyastolar.auteure
          </a>
        </span>{" "}
        pour que l'on puisse échanger sur le type de service que vous souhaitez
        !
      </h2>

      {Services.map((service, index) => {
        const currentAssetIndex = currentAssetIndices[index] || 0;
        const currentAsset = service.assets?.[currentAssetIndex];

        return (
          <div
            key={index}
            className={`border-b p-8 transition-colors duration-300 ${
              visibleIndex === index
                ? "bg-green text-white"
                : "text-green hover:bg-green hover:text-white hover:cursor-pointer"
            }`}
            onClick={() => handleServiceClick(index)}
            role="button"
            aria-expanded={visibleIndex === index}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleServiceClick(index);
              }
            }}
          >
            <div className="flex justify-between items-center mb-4 mt-4">
              <h2 className="font-Large text-3xl font-semibold">
                {service.title}
              </h2>
              <button
                className="text-2xl w-8 h-8 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleServiceClick(index);
                }}
                aria-label={
                  visibleIndex === index
                    ? "Masquer les détails"
                    : "Afficher les détails"
                }
              >
                {visibleIndex === index ? "−" : "+"}
              </button>
            </div>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: visibleIndex === index ? "auto" : 0,
                opacity: visibleIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div
                  className={`flex flex-col gap-6 w-full ${
                    service.assets && service.assets.length > 0
                      ? "md:w-1/2"
                      : "md:w-full"
                  }`}
                >
                  <p className="font-WorkSans text-xl font-semibold">
                    {service.price}
                  </p>
                  <p className="font-WorkSans text-md leading-relaxed">
                    {service.resume}
                  </p>
                </div>

                {service.assets &&
                  service.assets.length > 0 &&
                  currentAsset && (
                    <div className="w-full md:w-1/2">
                      <div className="relative">
                        {currentAsset.type === "image" ? (
                          <img
                            key={currentAsset.url}
                            src={currentAsset.url}
                            alt={`${service.title} - ${currentAssetIndex + 1}`}
                            className="h-auto object-contain max-h-[350px] rounded-md cursor-pointer transition-all duration-300 m-auto"
                            onClick={() =>
                              handleImageClick(service, currentAssetIndex)
                            }
                          />
                        ) : (
                          <div
                            className="flex flex-col items-center justify-center h-[350px] border-2 border-dashed border-current rounded-md cursor-pointer transition-all duration-300 hover:bg-opacity-10"
                            onClick={() => handleFileDownload(currentAsset)}
                          >
                            <div className="flex flex-col items-center gap-4">
                              {getFileIcon(currentAsset.fileType)}
                              <div className="text-center">
                                <p className="font-semibold text-lg">
                                  {currentAsset.filename ||
                                    "Fichier à télécharger"}
                                </p>
                                <p className="text-sm opacity-75">
                                  Cliquez pour télécharger
                                </p>
                              </div>
                              <Download className="w-8 h-8" />
                            </div>
                          </div>
                        )}

                        {service.assets.length > 1 && (
                          <div className="flex justify-between items-center mt-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePrevAsset(
                                  index,
                                  service.assets?.length || 0
                                );
                              }}
                              className="px-3 py-1 bg-green text-white rounded-md hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-green"
                              aria-label="Élément précédent"
                            >
                              Précédent
                            </button>

                            <div className="flex items-center space-x-2">
                              {service.assets.map((_, assetIndex) => (
                                <button
                                  key={assetIndex}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentAssetIndices((prev) => ({
                                      ...prev,
                                      [index]: assetIndex,
                                    }));
                                  }}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    currentAssetIndex === assetIndex
                                      ? "bg-white scale-125"
                                      : "bg-white bg-opacity-50"
                                  }`}
                                  aria-label={`Voir l'élément ${assetIndex + 1}`}
                                />
                              ))}
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleNextAsset(
                                  index,
                                  service.assets?.length || 0
                                );
                              }}
                              className="px-3 py-1 bg-green text-white rounded-md hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-green"
                              aria-label="Élément suivant"
                            >
                              Suivant
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
              </div>
            </motion.div>
          </div>
        );
      })}

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
                      <span className="font-semibold">Description:</span>{" "}
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="absolute top-4 right-4 text-white text-xl p-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Fermer"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesList;
