import React, { PropsWithChildren, useEffect, useState } from 'react';
import ScoresContext from './context';
import { ScoreType } from './types';

function ScoresProvider(props: PropsWithChildren<{}>) {
  const { children } = props;

  const [scores, setScores] = useState<ScoreType[]>([]);

  const currentDate = new Date();
  currentDate.setUTCDate(1);
  currentDate.setUTCHours(0);
  currentDate.setUTCMinutes(0);
  currentDate.setUTCSeconds(0);
  currentDate.setUTCMilliseconds(0);

  useEffect(() => {
    fetch(
      `/top100-global-month-${currentDate.getUTCFullYear()}-${String(currentDate.getUTCMonth() + 1).padStart(2, '0')}`,
    )
      .then((response) => response.json())
      .then((json) => setScores(json));
  }, []);

  return <ScoresContext.Provider value={scores}>{children}</ScoresContext.Provider>;
}

export default React.memo(ScoresProvider);
