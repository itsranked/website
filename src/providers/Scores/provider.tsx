import React, { PropsWithChildren, useEffect, useState } from 'react';
import ScoresContext from './context';
import { ScoreType } from './types';

type ScoresProviderPropsType = {
  region?: string;
  filter?: string;
};

function ScoresProvider(props: PropsWithChildren<ScoresProviderPropsType>) {
  const { children, region, filter } = props;

  const [scores, setScores] = useState<ScoreType[]>([]);

  useEffect(() => {
    const availableFilters = ['monthly', 'weekly', 'daily', 'hourly'];
    const availableRegions = ['ALL', 'SA', 'UK', 'DE', 'NA', 'ASIA'];

    const defaultFilter = 'monthly';
    const defaultRegion = 'ALL';

    const selectedFilter = filter && availableFilters.includes(filter) ? filter : defaultFilter;
    const selectedRegion = region && availableRegions.includes(region) ? region : defaultRegion;

    const url = `/top100-${selectedFilter}-${selectedRegion}.json?${Math.random()}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => setScores(json));
  }, [filter, region]);

  return <ScoresContext.Provider value={scores}>{children}</ScoresContext.Provider>;
}

export default React.memo(ScoresProvider);
