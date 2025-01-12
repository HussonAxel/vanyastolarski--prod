import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import { Services } from "@data/Services";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const ServicesList = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
    description: string;
    currentIndex: number;
  } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  return (
    <section className="m-auto w-10/12 lg:w-8/12 2xl:w-6/12">
      <SectionTitle title="Services" isGreen={false} />
      <h2 className="text-center text-xl mb-12 mt-4">
        Si vous êtes intéréssés par un de nos services, n'hésitez pas à me
        contacter par mail à l'adresse suivante :{" "}
        <span className="text-green">
          <a href="mailto:vanya.stolarski@gmail.com">
            vanya.stolarski@gmail.com
          </a>{" "}
        </span>
        ou bien via instagram :{" "}
        <span className="text-green">
          {" "}
          <a href="https://www.instagram.com/vanyastolar.auteure/">
            vanyastolar.auteure
          </a>
        </span>{" "}
        pour que l'on puisse échanger sur le type de service que vous souhaitez
        !
      </h2>
      {Services.map((service, index) => (
        <div
          key={index}
          className={`border-b p-8 text-green transition-colors duration-300 hover:cursor-pointer ${
            visibleIndex === index
              ? "bg-green text-white"
              : "hover:bg-green hover:text-white"
          }`}
          onClick={() => {
            setVisibleIndex(visibleIndex === index ? null : index);
            if (visibleIndex !== index) {
              setCurrentImageIndex(0);
            }
          }}
        >
          <h2 className="font-Large text-3xl font-semibold mb-4 mt-4">
            {service.title}
            <span
              onClick={() => {
                setVisibleIndex(visibleIndex === index ? null : index);
                if (visibleIndex !== index) {
                  setCurrentImageIndex(0);
                }
              }}
              className="ml-2 cursor-pointer absolute left-2/3"
            >
              {visibleIndex === index ? "-" : "+"}
            </span>
          </h2>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: visibleIndex === index ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden flex flex-row gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-WorkSans text-md w-2/3">{service.resume}</p>
            {service.images && service.images.length > 0 && (
              <motion.div
                className="slider h-fit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  key={
                    service.images
                      ? service.images[currentImageIndex]
                      : undefined
                  }
                  src={service.images ? service.images[currentImageIndex] : ""}
                  alt={`${service.title} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain max-w-[519px] max-h-[350px] cursor-pointer transition-transform duration-300"
                  onClick={() =>
                    setSelectedImage({
                      url: service.images![currentImageIndex],
                      title: service.title,
                      description: service.resume,
                      currentIndex: currentImageIndex,
                    })
                  }
                />
                {service.images.length > 1 && (
                  <div className="flex justify-between">
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          (currentImageIndex - 1 + service.images!.length) %
                            service.images!.length
                        )
                      }
                      className="text-white"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          (currentImageIndex + 1) % service.images!.length
                        )
                      }
                      className="text-white"
                    >
                      Next
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      ))}
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
