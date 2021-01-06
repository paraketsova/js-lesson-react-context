import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AgePage from './pages/AgePage'




function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Holiday Gift Generation</h1>
        </div>
      </div>

      <div className="col-md-12">
        <Switch>
          <Route path="/age">
            <AgePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;