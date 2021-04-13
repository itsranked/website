import moment from 'moment';
import 'moment/locale/pt';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import InternationalizationContext, { defaultInternationalizationValue } from './context';
import { InternationalizationContextType } from './types';

type InternationalizationProviderPropsType = {
  language?: string;
};

function InternationalizationProvider(props: PropsWithChildren<InternationalizationProviderPropsType>) {
  const { children, language = (navigator.language || (navigator as any).userLanguage).split('-')[0] } = props;

  const [languageObject, setLanguageObject] = useState<InternationalizationContextType>(
    defaultInternationalizationValue,
  );

  switch (language) {
    case 'pt':
      moment.locale('pt');
      break;
    default:
      moment.locale('en');
  }

  useEffect(() => {
    fetch(`/i18n/${language}.json`)
      .then((response) => response.json())
      .then((jsonData) => {
        setLanguageObject(() => {
          return {
            _: (key: string) => jsonData[key],
            isLoaded: true,
          };
        });
      });
  }, [language]);

  return (
    <InternationalizationContext.Provider value={languageObject}>
      {languageObject.isLoaded && children}
    </InternationalizationContext.Provider>
  );
}

export default React.memo(InternationalizationProvider);
