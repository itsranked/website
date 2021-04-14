import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Moment from 'react-moment';
import useInternationalization from 'src/hooks/useInternationalization';
import './styles.css';

function StatusBar() {
  const { _ } = useInternationalization();

  // @TODO: get this from database
  const syncTime = new Date();
  syncTime.setSeconds(syncTime.getUTCSeconds() - 1);

  return (
    <div id="statusbar">
      <span className="last-sync-time">
        {_('statusbar.last-sync-time.last-sync')}: <Moment interval={1000} date={syncTime} durationFromNow />{' '}
        {_('statusbar.last-sync-time.ago')}
      </span>
      <div id="links">

        <a id="twitter" rel="noreferrer" target="_blank" href="https://twitter.com/itsrankedn">
          <FontAwesomeIcon icon={faTwitterSquare} /> @itsrankedN
        </a>

      </div>
    </div>
  );
}

export default React.memo(StatusBar);
