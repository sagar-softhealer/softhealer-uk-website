import React from 'react';
import { PlasmicComponent, PlasmicRootProvider } from '@plasmicapp/loader-react';
import { PLASMIC } from '../lib/plasmic';

interface PlasmicPageProps {
  plasmicData: {
    name: string;
    path: string;
  };
  prefetchedData: any;
}

export default function PlasmicPage({ plasmicData, prefetchedData }: PlasmicPageProps) {
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={prefetchedData}>
      <PlasmicComponent component={plasmicData.name} />
    </PlasmicRootProvider>
  );
}
