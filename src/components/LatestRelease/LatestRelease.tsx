import Button from "@components/Button/Button";
import DownloadButton from "@components/DownloadButton/DownloadButton";
import { LatestReleaseProps } from "./LatestRelease.type.tsx";

const LatestRelease = ({
  LatestReleaseName,
  LatestReleaseSynopsis,
  latestReleasePageUrl,
  youtubeEmbedUrl,
}: LatestReleaseProps) => {
  return (
    <section className="content-center">
      <div className="w-9/12 m-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 h-full">
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-10">
          <h1 className="text-3xl lg:text-5xl text-green leading-tight uppercase underline font-Large">
            {LatestReleaseName}
          </h1>

          <p className=" text-black font-WorkSans text-md max-w-[750px] leading-7">
            {LatestReleaseSynopsis}
          </p>

          <div className="flex w-fit m-auto md:m-0 flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mt-4">
            <Button
              text="En savoir plus"
              isPrimary={true}
              isBGGreen={false}
              linkTo={latestReleasePageUrl}
            />
            <DownloadButton
              text="Lire le premier chapitre"
              isPrimary={false}
              isBGGreen={true}
              linkTo="/assets/ChapterOneBooks/ChapterOneBooks_Fous_Papillons.pdf"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="w-full aspect-video">
            <iframe 
              className="w-full h-full rounded-lg"
              src={youtubeEmbedUrl}
              title="Fous-Papillons TRAILER ULULE"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestRelease;
