import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  Home,
  Items,
} from './pages';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return (
            <Redirect to="/story-list" />
          )
        }}
      />
      <Route path="/story-list" element={<Home />}>
        <Home />
      </Route>
      <Route path="/story-detail" element={<Items />}>
        <Items />
      </Route>
    </Switch>
  );
}

export default App;
