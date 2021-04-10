import React from 'react';
import Moment from 'react-moment';
import './styles.css';

function StatusBar() {
    // @TODO: get this from database
    const syncTime = new Date();
    syncTime.setSeconds(syncTime.getUTCSeconds()-1);

    return (
        <div id="statusbar">
            <span className="last-sync-time">
                Last sync: <Moment interval={1000} date={syncTime} durationFromNow /> ago
            </span>
            <div id="links">
                <span id="about-us">About Us</span>
                <span id="contact-us">Contact Us</span>
            </div>
        </div>
    );
}

export default React.memo(StatusBar);
