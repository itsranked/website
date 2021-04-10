import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './styles.css';

function NavBar() {
    const selectedProvider = 'Top 100 of April';

    return (
        <nav id="navbar">
            <div id="period">
                <span className="selected-period">{selectedProvider}</span>
                <span className="caret">
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
            </div>

            <div id="region">
                <span className="region">
                    <img
                        alt="Global Region"
                        src="data:image/png;base64,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"
                    />
                </span>
                <span className="caret">
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
            </div>
        </nav>
    );
}

export default React.memo(NavBar);
