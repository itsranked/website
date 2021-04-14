import React from 'react';
import useInternationalization from 'src/hooks/useInternationalization';
import LanguageSelector from '../LanguageSelector/component';
import './styles.css';

function Header() {
  const { _ } = useInternationalization();

  return (
    <div id="header">
      <div id="header-container">
        <div id="logo">itsranked.net</div>
        <div id="description" dangerouslySetInnerHTML={{ __html: _('navbar.period.selected-period.top100of') }}></div>

        <LanguageSelector />
      </div>
    </div>
  );
}

export default React.memo(Header);
