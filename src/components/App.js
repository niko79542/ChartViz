// React
import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import ChartBox from './ChartBox/ChartBox';

const Intraday = () => (
  (
    <div>Intraday chart.</div>
  )
);

const Landing = () => (
  (
    <div>
      <ChartBox />
    </div>
  )
);


const App = () => (
  (
    <Router history={ createBrowserHistory() }>
      <div className="App">
        <Switch>
          <Route exact path="/intraday" component={ Intraday } />
          <Route exact path="/" component={ Landing } />
        </Switch>
      </div>
    </Router>
  )
);

export default App;