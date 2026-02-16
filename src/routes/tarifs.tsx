import ColoredSection from "@components/ColoredSection";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import { Services } from "@data/Services";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tarifs")({
  component: tarifsLayout,
});

function tarifsLayout() {
  return (
    <ColoredSection bgColor="bg-white">
      <section className="m-auto w-11/12 md:w-10/12 lg:w-8/12 2xl:w-9/12 py-12">
        <SectionTitle title="Tarifs" isGreen={false} />
        <h2 className="text-center text-xl mb-12 mt-4">
          Voici les tarifs de mes services. Pour toute demande personnalisée ou
          devis, n'hésitez pas à me contacter par mail à l'adresse suivante :{" "}
          <span className="text-green">
            <a
              href="mailto:vanya.stolarski@gmail.com"
              className="font-semibold hover:underline focus:outline-none focus:underline"
            >
              vanya.stolarski@gmail.com
            </a>
          </span>{" "}
          ou bien via instagram :{" "}
          <span className="text-green">
            <a
              href="https://www.instagram.com/vanyastolar.auteure/"
              className="font-semibold hover:underline focus:outline-none focus:underline"
            >
              vanyastolar.auteure
            </a>
          </span>
          .
        </h2>

        <div className="space-y-8">
          {Services.map((service, index) => (
            <div
              key={index}
              className="border-b border-green/20 pb-8 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h3 className="font-WorkSans text-2xl md:text-3xl font-semibold text-green">
                  {service.title}
                </h3>
                {service.price && (
                  <p className="text-xl md:text-2xl font-medium text-green">
                    {service.price}
                  </p>
                )}
              </div>
              {service.resume && (
                <p className="mt-4 text-black/70 leading-relaxed">
                  {service.resume}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </ColoredSection>
  );
}
