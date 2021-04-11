import React from 'react';
import { InternationalizationContextType } from './types';

export const defaultInternationalizationValue = {
    _: () => '',
    isLoaded: false,
};
const InternationalizationContext = React.createContext<InternationalizationContextType>(
    defaultInternationalizationValue,
);

export default InternationalizationContext;
