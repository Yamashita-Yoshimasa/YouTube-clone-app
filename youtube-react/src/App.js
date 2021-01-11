import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Top from './page/Top';
import Search from './page/Search';
import {Watch} from './page/Watch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Top} />
        <Route exact path='/Search' component={Search} />
        <Route exact path='/Watch' component={Watch} />
      </Switch>
    </Router>
  );
}

export default App;
