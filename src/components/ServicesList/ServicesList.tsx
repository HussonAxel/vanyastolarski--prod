import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import { Services } from "@data/Services";


const ServicesList = () => {

  return (
    <section className="m-auto w-10/12 lg:w-8/12 2xl:w-6/12">
      <SectionTitle title="Services" isGreen={true} />
      {Services.map((service, index) => (
        <div key={index} className="border-t p-4 mb-6 text-white">
          <h2 className="font-Large text-3xl font-semibold mb-8 mt-4">
            {service.title}
          </h2>
          <div className="flex flex-row justify-between">
            <p className="font-WorkSans  text-md">
              {service.resume}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesList;
