import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchContainer from './containers/SearchContainer';
import HomeContainer from './containers/HomeContainer';
import Header from './components/Header';

/**
 * Starting point of the web-app that also handles the routing
 */
function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        {
          <Switch>
            <Route path='/search/:searchType' component={SearchContainer} />
            <Route path='/' component={HomeContainer} />
          </Switch>
        }
      </Router>
    </div>);
}

export default App;
