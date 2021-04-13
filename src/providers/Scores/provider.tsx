import React, { PropsWithChildren, useEffect, useState } from 'react';
import ScoresContext from './context';
import { ScoreType } from './types';

type ScoresProviderPropsType = {
  region?: string;
};

function ScoresProvider(props: PropsWithChildren<ScoresProviderPropsType>) {
  const { children, region } = props;

  const [scores, setScores] = useState<ScoreType[]>([]);

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setUTCDate(1);
    currentDate.setUTCHours(0);
    currentDate.setUTCMinutes(0);
    currentDate.setUTCSeconds(0);
    currentDate.setUTCMilliseconds(0);

    const availableRegions = ['SA', 'UK', 'DE', 'NA', 'ASIA'];

    const url =
      !region || !availableRegions.includes(region)
        ? `/top100-global-month-${currentDate.getUTCFullYear()}-${String(currentDate.getUTCMonth() + 1).padStart(
            2,
            '0',
          )}.json?${Math.random()}`
        : `/top100-global-month-${currentDate.getUTCFullYear()}-${String(currentDate.getUTCMonth() + 1).padStart(
            2,
            '0',
          )}-${region}.json?${Math.random()}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => setScores(json));
  }, [region]);

  return <ScoresContext.Provider value={scores}>{children}</ScoresContext.Provider>;
}

export default React.memo(ScoresProvider);
