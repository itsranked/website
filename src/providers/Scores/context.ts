import React from 'react';
import { ScoreType } from './types';

const ScoresContext = React.createContext<ScoreType[]>([]);

export default ScoresContext;
