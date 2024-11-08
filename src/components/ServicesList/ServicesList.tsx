import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import { Services } from "@data/Services";


const ServicesList = () => {

  return (
    <section className="py-32 m-auto w-3/5">
      <SectionTitle title="Mes Services" isGreen={true} />
      {Services.map((service, index) => (
        <div key={index} className="border-t p-4 mb-8">
          <h2 className="font-Cinzel text-3xl font-semibold mb-8">
            {service.title}
          </h2>
          <div className="flex flex-row justify-between">
            <p className="max-w-[700px] text-balance text-black font-Poppins font-light text-md">
              {service.resume}
            </p>
            <ul className="ml-8">
              {Object.entries(service.listDetails).map(([key, detail]) => (
                <li
                  key={key}
                  className="text-balance text-black font-Poppins font-light text-md w-fit"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesList;
