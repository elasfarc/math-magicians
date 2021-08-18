import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Calculator from './components/Calculator/Calculator';
import Quote from './components/Quote/Quote';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </div>
  </Router>
);
export default App;
