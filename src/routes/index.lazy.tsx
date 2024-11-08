import {createLazyFileRoute} from '@tanstack/react-router'
import LatestRelease from "@components/LatestRelease/LatestRelease.tsx";
import LatestReleasePicture from "@assets/covers/Latest Release - Fous Papillons.png"
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
        <ColoredSection bgColor="bg-green">
          <LatestRelease
            HeaderText="Dernière sortie :"
            LatestReleaseName="Fous Papillons"
            LatestReleaseSynopsis={data.books[2].synopsis}
            latestReleasePictureUrl={LatestReleasePicture}
            latestReleasePageUrl="livres/2"
          />
        </ColoredSection>
        <ColoredSection bgColor="bg-white">
          <BookResume />
        </ColoredSection>
        <ColoredSection bgColor="bg-green">
          <LatestReading />
        </ColoredSection>
        <ColoredSection bgColor="bg-white">
          <ServicesList />
        </ColoredSection>
      </>
    );
}
