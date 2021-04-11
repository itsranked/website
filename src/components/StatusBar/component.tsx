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
                <span id="about-us">{_('statusbar.links.about-us')}</span>
                <span className="separator">|</span>
                <span id="contact-us">
                    <a href="mailto:itsranked.net@gmail.com">{_('statusbar.links.contact-us')}</a>
                </span>
            </div>
        </div>
    );
}

export default React.memo(StatusBar);
