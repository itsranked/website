import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import './styles.css';

function Header() {
    const selectedProvider = 'Slither.io';

    return (
        <div id="header">
            <div id="provider">
                <span className="provider">{selectedProvider}</span>
                <span className="caret">
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
            </div>
            <div id="language">
                <span className="flag">
                    <ReactCountryFlag countryCode="US" svg />
                </span>
                <span className="caret">
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
            </div>
        </div>
    );
}

export default React.memo(Header);
