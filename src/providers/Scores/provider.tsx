import React, { PropsWithChildren, useEffect, useState } from 'react';
import ScoresContext from './context';
import { ScoreType } from './types';

function ScoresProvider(props: PropsWithChildren<{}>) {
    const { children } = props;

    const [scores, setScores] = useState<ScoreType[]>([]);

    useEffect(() => {
        fetch('/top100-month-2021-04.json')
            .then((response) => response.json())
            .then((json) => setScores(json));
    }, []);

    return <ScoresContext.Provider value={scores}>{children}</ScoresContext.Provider>;
}

export default React.memo(ScoresProvider);
