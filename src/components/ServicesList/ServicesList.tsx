import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import { Services } from "@data/Services";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { cn } from "@components/lib/utils";
import Card from "@components/components/ui/carousel-card-1";
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
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
  } | null>(null);

  // Transform service assets to Card data format
  const transformAssetsToCardData = (service: Service) => {
    if (!service.assets) return [];

    return service.assets
      .filter((asset) => asset.type === "image")
      .map((asset, index) => ({
        id: index + 1,
        imgUrl: asset.url,
        content: service.resume,
      }));
  };

  // Get file assets separately
  const getFileAssets = (service: Service) => {
    if (!service.assets) return [];
    return service.assets.filter((asset) => asset.type === "file");
  };

  const handleFileDownload = (asset: ServiceAsset) => {
    const link = document.createElement("a");
    link.href = asset.url;
    link.download = asset.filename || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={cn("m-auto w-11/12 md:w-10/12 lg:w-8/12 2xl:w-9/12")}>
      <SectionTitle title="Services" isGreen={false} />
      <h2 className={cn("text-center text-xl mb-12 mt-4")}>
        Si vous êtes intéréssés par un de nos services, n'hésitez pas à me
        contacter par mail à l'adresse suivante :{" "}
        <span className={cn("text-green")}>
          <a
            href="mailto:vanya.stolarski@gmail.com"
            className={cn(
              "font-semibold hover:underline focus:outline-none focus:underline"
            )}
          >
            vanya.stolarski@gmail.com
          </a>
        </span>{" "}
        ou bien via instagram :{" "}
        <span className={cn("text-green")}>
          <a
            href="https://www.instagram.com/vanyastolar.auteure/"
            className={cn(
              "font-semibold hover:underline focus:outline-none focus:underline"
            )}
          >
            vanyastolar.auteure
          </a>
        </span>{" "}
        pour que l'on puisse échanger sur le type de service que vous souhaitez
        !
      </h2>

      {Services.map((service, index) => {
        const cardData = transformAssetsToCardData(service);
        const fileAssets = getFileAssets(service);

        return (
          <div key={index} className={cn("border-b p-8 text-green")}>
            <h2 className={cn("font-Large text-3xl font-semibold mb-6")}>
              {service.title}
            </h2>

            {/* Image Carousel */}
            {cardData.length > 0 && (
              <div className="flex justify-center items-center min-h-[400px]">
                <Card data={cardData} cardsPerView={service.cardsPerView} />
              </div>
            )}

            {/* File Downloads */}
            {fileAssets.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-6 justify-center">
                {fileAssets.map((asset, fileIndex) => (
                  <div
                    key={fileIndex}
                    className={cn(
                      "flex flex-col items-center justify-center h-[200px] w-[200px] border-2 border-dashed border-green rounded-md cursor-pointer transition-all duration-300 hover:bg-green hover:bg-opacity-10"
                    )}
                    onClick={() => handleFileDownload(asset)}
                  >
                    <FileText className="w-10 h-10 mb-3" />
                    <p className="font-semibold text-center px-2">
                      {asset.filename || "Fichier"}
                    </p>
                    <p className="text-sm opacity-75 mb-2">Télécharger</p>
                    <Download className="w-6 h-6" />
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              "fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            )}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className={cn(
                "bg-white rounded-xl overflow-hidden relative max-w-[95vw] md:max-w-[85vw] max-h-[90vh]"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-black flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
                />
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
