import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/page';
import ScoresProvider from './providers/Scores/provider';

function App() {
    return (
        <ScoresProvider>
            <Router>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </ScoresProvider>
    );
}

export default App;
