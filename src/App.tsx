import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/page';
import InternationalizationProvider from './providers/Internationalization/provider';
import ScoresProvider from './providers/Scores/provider';

function App() {
    return (
        <Router>
            <Switch>
                <Route
                    path="/:language?/:region?/:filter?"
                    render={({ match }) => (
                        <InternationalizationProvider language={match.params.language}>
                            <ScoresProvider region={match.params.region} filter={match.params.filter} >
                                <Home />
                            </ScoresProvider>
                        </InternationalizationProvider>
                    )}
                />
            </Switch>
        </Router>
    );
}

export default App;
