import {createLazyFileRoute} from '@tanstack/react-router'
import LatestRelease from "@components/LatestRelease/LatestRelease.tsx";
import BookResume from "@components/BookResume/BookResume";
import LatestReading from '@components/LatestReading/LatestReading';
import ServicesList from '@components/ServicesList/ServicesList';

import ColoredSection from "@components/ColoredSection.tsx";
import data from "@data/data.json";

export const Route = createLazyFileRoute('/')({
    component: () => <IndexComponent/>,
})

const IndexComponent = () => {
    return (
      <>
        <ColoredSection bgColor="bg-white">
          <LatestRelease
            LatestReleaseName="Fous Papillons"
            LatestReleaseSynopsis={data.books[2].synopsis}
            youtubeEmbedUrl="https://www.youtube.com/embed/oMXpFLSyzow"
            latestReleasePageUrl="livres/2" latestReleasePictureUrl={''}          />
        </ColoredSection>
        <ColoredSection bgColor="bg-green">
          <BookResume />
        </ColoredSection>
        <ColoredSection bgColor="bg-white">
          <LatestReading />
        </ColoredSection>
        <ColoredSection bgColor="bg-green">
          <ServicesList />
        </ColoredSection>
      </>
    );
}
