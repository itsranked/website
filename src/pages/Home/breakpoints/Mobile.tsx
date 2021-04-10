import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import Moment from 'react-moment';
import Header from 'src/components/Header/component';
import NavBar from 'src/components/NavBar/component';
import StatusBar from 'src/components/StatusBar/component';
import useScores from 'src/hooks/useScores';
import './index.css';

function ServerFlag({server}: {server: string}) {
  if (server.startsWith('185.50')) {
    return <ReactCountryFlag countryCode='BR' svg />
  } else if (server.startsWith('209.58')) {
    return <ReactCountryFlag countryCode='PL' svg />
  } else if (server.startsWith('31.204')) {
    return <ReactCountryFlag countryCode='JP' svg />
  } else if (server.startsWith('43.249')) {
    return <ReactCountryFlag countryCode='HK' svg />
  } else if (server.startsWith('145.239')) {
    return <ReactCountryFlag countryCode='GB' svg />
  } else if (server.startsWith('176.9') || server.startsWith('213.239') || server.startsWith('78.46')) {
    return <ReactCountryFlag countryCode='DE' svg />
  } else if (server.startsWith('149.56')) {
    return <ReactCountryFlag countryCode='CA' svg />
  } else if (server.startsWith('139.99')) {
    return <ReactCountryFlag countryCode='AU' svg />
  }

  return <ReactCountryFlag countryCode='US' svg />
}

function HomePageMobile() {
    const scores = useScores();

    return (
        <>
            <Header />
            <NavBar />
            <StatusBar />
            <div id="content">
                <ul>
                    {scores.map((score) => (
                        <li key={score.position}>
                            {score.position < 4 ? (
                                <div className={`medal position-${score.position}`}>
                                    <FontAwesomeIcon icon={faMedal} />
                                </div>
                            ) : (
                                <div className="position">#{score.position}</div>
                            )}
                            <div className="info first-column">
                                <span className="username">{score.userName}</span>
                                <span className="server">
                                  <span className="address">{score.server}</span>
                                  <ServerFlag server={score.server} />
                                </span>
                            </div>
                            <div className="info second-column">
                                <span>Score</span>
                                <span>{score.score}</span>
                            </div>
                            <div className="info third-column">
                                <span>
                                    <Moment format="MMM Do">{score.timestamp}</Moment>
                                </span>
                                <span>
                                    <Moment format="hh:mm">{score.timestamp}</Moment>
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default React.memo(HomePageMobile);
