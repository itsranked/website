import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import useInternationalization from 'src/hooks/useInternationalization';
import regions from './regions.json';
import './styles.css';

type NavBarPropsType = {
  region: string;
  language: string;
  filter: string;
};

function NavBar(props: RouteComponentProps<NavBarPropsType>) {
  const { filter, region, language } = props.match.params;
  const { _ } = useInternationalization();

  /*const monthNames = _('months');
    const date = new Date();*/

  const availableFilters = ['monthly', 'weekly', 'daily', 'hourly'];
  const availableRegions = ['ALL', 'SA', 'UK', 'DE', 'NA', 'ASIA'];

  const defaultFilter = 'monthly';
  const defaultRegion = 'ALL';

  const selectedFilter = filter && availableFilters.includes(filter) ? filter : defaultFilter;
  const selectedRegionShortName = region && availableRegions.includes(region) ? region : defaultRegion;

  const selectedRegion = regions.find((regionObject) => regionObject.shortName === selectedRegionShortName);

  const availableLanguages = ['en', 'pt'];
  const selectedLanguage = availableLanguages.includes(language)
    ? language
    : (navigator.language || (navigator as any).userLanguage).split('-')[0];

  const [showPopover, setShowPopover] = useState(false);

  const handleOnClick = useCallback(() => {
    setShowPopover(true);
  }, []);

  return (
    <nav id="navbar">
      <nav id="nav">
        <a
          className={`nav-item ${selectedFilter === 'monthly' ? 'nav-selected' : ''}`}
          href={`/${selectedLanguage}/${selectedRegion?.shortName}/monthly`}
        >
          {_('nav.menu.monthly')}
        </a>
        <a
          className={`nav-item ${selectedFilter === 'weekly' ? 'nav-selected' : ''}`}
          href={`/${selectedLanguage}/${selectedRegion?.shortName}/weekly`}
        >
          {_('nav.menu.weekly')}
        </a>
        <a
          className={`nav-item ${selectedFilter === 'daily' ? 'nav-selected' : ''}`}
          href={`/${selectedLanguage}/${selectedRegion?.shortName}/daily`}
        >
          {_('nav.menu.daily')}
        </a>
        <a
          className={`nav-item ${selectedFilter === 'hourly' ? 'nav-selected' : ''}`}
          href={`/${selectedLanguage}/${selectedRegion?.shortName}/hourly`}
        >
          {_('nav.menu.hourly')}
        </a>
      </nav>

      <div id="region" onClick={handleOnClick}>
        <span className="region">{selectedRegion ? _(selectedRegion.name) : _('filters.global')}</span>
        <span className="caret">
          <FontAwesomeIcon icon={faCaretDown} />
        </span>

        {showPopover && (
          <div className="popover box-shadow">
            <ul>
              {regions.map((region) => {
                return (
                  <li key={region.shortName}>
                    <a href={`/${selectedLanguage}/${region.shortName}/${selectedFilter}`}>
                      <span className="language-name">{_(region.name)} </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default React.memo(withRouter(NavBar));
