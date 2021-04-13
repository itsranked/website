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
};

function NavBar(props: RouteComponentProps<NavBarPropsType>) {
  const { _ } = useInternationalization();

  /*const monthNames = _('months');
    const date = new Date();*/

  const availableLanguages = ['en', 'pt'];
  const selectedLanguage = availableLanguages.includes(props.match.params.language)
    ? props.match.params.language
    : (navigator.language || (navigator as any).userLanguage).split('-')[0];

  const selectedRegion =
    props.match.params.region &&
    regions.find((region) => region.alias.toLowerCase() === props.match.params.region.toLowerCase());

  const [showPopover, setShowPopover] = useState(false);

  const handleOnClick = useCallback(() => {
    setShowPopover(true);
  }, []);

  return (
    <nav id="navbar">
      <div id="period">
        <span
          className="selected-period"
          dangerouslySetInnerHTML={{ __html: _('navbar.period.selected-period.top100of') }}
        >
          {/*monthNames[date.getUTCMonth()]*/}
        </span>
        {/*<span className="caret">
                    <FontAwesomeIcon icon={faCaretDown} />
    </span>*/}
      </div>

      <div id="region" onClick={handleOnClick}>
        <span className="region">{selectedRegion ? selectedRegion.name : _('header.region.global')}</span>
        <span className="caret">
          <FontAwesomeIcon icon={faCaretDown} />
        </span>

        {showPopover && (
          <div className="popover box-shadow">
            <ul>
              <li>
                <a href={`/${selectedLanguage}`}>
                  <span className="language-name">{_('header.region.global')} </span>
                </a>
              </li>
              {regions.map((region) => {
                return (
                  <li key={region.alias}>
                    <a href={`/${selectedLanguage}/${region.alias}`}>
                      <span className="language-name">{region.name} </span>
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
