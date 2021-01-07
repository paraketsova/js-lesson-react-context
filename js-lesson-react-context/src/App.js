import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AgePage from './pages/AgePage'
import InterestPage from './pages/InterestPage';
import RelationshipPage from './pages/RelationshipPage';
import ResultPage from './pages/ResultPage';
import { UserInputContext } from './contexts/UserInputContex';

function App() {
  const [age, setAge] = useState("");
  const [interest, setInterst] = useState("");
  const [relationship, setRelationship] = useState("");

  const userInputContextValue = {
    age,setAge,
    interest, setInterst,
    relationship, setRelationship
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Holiday Gift Generation</h1>
        </div>
      </div>

      <div className="col-md-12">
        <UserInputContext.Provider value={userInputContextValue}>
          <Switch>
            <Route path="/result">
              <ResultPage />
            </Route>
            <Route path="/relationship">
              <RelationshipPage />
            </Route>
            <Route path="/interest">
              <InterestPage />
            </Route>
            <Route path="/age">
              <AgePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </UserInputContext.Provider>
        
      </div>
    </div>
  );
}

export default App;
