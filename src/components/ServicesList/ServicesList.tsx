import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import { Services } from "@data/Services";
import { motion } from "framer-motion";
import { useState } from "react";

const ServicesList = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  return (
    <section className="m-auto w-10/12 lg:w-8/12 2xl:w-6/12">
      <SectionTitle title="Services" isGreen={false} />
      {Services.map((service, index) => (
        <div
          key={index}
          className="border-b p-4 text-green hover:bg-green hover:text-white transition-colors duration-300"
          onClick={() => setVisibleIndex(visibleIndex === index ? null : index)}
        >
          <h2 className="font-Large text-3xl font-semibold mb-4 mt-4">
            {service.title}
          </h2>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: visibleIndex === index ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden grid grid-cols-2 gap-4"
          >
            <p className="font-WorkSans text-md">{service.resume}</p>
            {service.images && (
              <motion.div
                className="slider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {service.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${service.title} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default ServicesList;
