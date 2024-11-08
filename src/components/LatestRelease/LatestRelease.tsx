import Button from "@components/Button/Button";
import DownloadButton from "@components/DownloadButton/DownloadButton";
import { LatestReleaseProps } from "./LatestRelease.type.tsx";

const LatestRelease = ({
  HeaderText,
  LatestReleaseName,
  LatestReleaseSynopsis,
  latestReleasePictureUrl,
  latestReleasePageUrl,
}: LatestReleaseProps) => {
  return (
    <section className="content-center pb-32">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 h-full">
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-10">
          <h2 className="font-Cinzel text-2xl md:text-3xl lg:text-4xl text-white border-b-2 border-white w-fit pb-2">
            {HeaderText}
          </h2>

          <h1 className="font-Cinzel text-xl lg:text-6xl text-white leading-tight">
            {LatestReleaseName}
          </h1>

          <p className="text-balance text-white font-Poppins font-light text-md">
            {LatestReleaseSynopsis}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mt-4">
            <Button
              text="En savoir plus"
              isPrimary={true}
              isBGGreen={true}
              linkTo={latestReleasePageUrl}
            />
            <DownloadButton
              text="Lire le premier chapitre"
              isPrimary={false}
              isBGGreen={true}
              linkTo="/src/assets/ChapterOneBooks/ChapterOneBooks_Fous_Papillons.pdf"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <img
            src={latestReleasePictureUrl}
            alt="Couverture de la dernière sortie : Fous Papillons"
            className="w-full md:w-auto h-auto md:h-[600px] object-contain drop-shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestRelease;
