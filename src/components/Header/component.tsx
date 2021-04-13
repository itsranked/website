import React from 'react';
import LanguageSelector from '../LanguageSelector/component';
import './styles.css';

function Header() {
  //const selectedProvider = 'Slither.io';

  return (
    <div id="header">
      <div id="header-container">
        <div id="logo">itsranked.net</div>
        <div id="provider">
          {/*<span className="provider">{selectedProvider}</span>
          <span className="caret">
                        <FontAwesomeIcon icon={faCaretDown} />
    </span>*/}
        </div>
        <LanguageSelector />
      </div>
    </div>
  );
}

export default React.memo(Header);
