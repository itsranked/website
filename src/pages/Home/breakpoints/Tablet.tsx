import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Moment from 'react-moment';
import Header from 'src/components/Header/component';
import NavBar from 'src/components/NavBar/component';
import ServerFlag from 'src/components/ServerFlag/component';
import StatusBar from 'src/components/StatusBar/component';
import useInternationalization from 'src/hooks/useInternationalization';
import useScores from 'src/hooks/useScores';
import './index.css';
import './tablet.css';


function HomePageTablet() {
  const scores = useScores();
  const { _ } = useInternationalization();

  return (
    <div id="container">
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
                <span>{_('content.info.score')}</span>
                <span>{score.score}</span>
              </div>
              <div className="info third-column">
                <span>
                  <Moment format={_('content.info.day-format')}>{score.timestamp}</Moment>
                </span>
                <span>
                  <Moment format={_('content.info.time-format')}>{score.timestamp}</Moment>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(HomePageTablet);
